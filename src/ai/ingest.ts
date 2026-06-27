import { createHash } from "crypto";
import { embedTexts } from "@/ai/embeddings";
import {
  deletePortfolioVectors,
  ensureCollection,
  ensurePayloadIndexes,
  type PortfolioVectorPoint,
  upsertVectors,
} from "@/ai/qdrant";
import {
  loadPortfolioDocuments,
  type PortfolioDocument,
} from "@/lib/portfolio-loader";

const maxChunkCharacters = 900;
const chunkOverlapCharacters = 120;

function pointId(value: string) {
  const hash = createHash("sha256").update(value).digest("hex").slice(0, 32);
  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-${hash.slice(12, 16)}-${hash.slice(16, 20)}-${hash.slice(20)}`;
}

function splitDocument(document: PortfolioDocument): PortfolioDocument[] {
  if (document.content.length <= maxChunkCharacters) {
    return [document];
  }

  const chunks: PortfolioDocument[] = [];
  let start = 0;
  let index = 0;

  while (start < document.content.length) {
    const end = Math.min(start + maxChunkCharacters, document.content.length);
    const chunk = document.content.slice(start, end).trim();

    if (chunk) {
      chunks.push({
        ...document,
        id: `${document.id}-${index}`,
        content: chunk,
      });
    }

    start = end - chunkOverlapCharacters;
    index += 1;

    if (start <= 0 || end === document.content.length) break;
  }

  return chunks;
}

export async function ingestPortfolioKnowledge() {
  const documents = loadPortfolioDocuments();
  const chunks = documents.flatMap(splitDocument);
  const embeddings = await embedTexts(chunks.map((chunk) => chunk.content));
  const vectorSize = embeddings[0]?.length;

  if (!vectorSize) {
    throw new Error("No embeddings were generated for portfolio content.");
  }

  await ensureCollection(vectorSize);
  await ensurePayloadIndexes();
  await deletePortfolioVectors();

  const points: PortfolioVectorPoint[] = chunks.map((chunk, index) => ({
    id: pointId(`${chunk.id}:${chunk.content}`),
    vector: embeddings[index],
    payload: {
      ...chunk.metadata,
      content: chunk.content,
    },
  }));

  await upsertVectors(points);

  return {
    documents: documents.length,
    chunks: chunks.length,
    collection: process.env.QDRANT_COLLECTION ?? "portfolio_knowledge_base",
  };
}
