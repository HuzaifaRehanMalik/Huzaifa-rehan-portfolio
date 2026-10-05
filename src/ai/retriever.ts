import { embedText } from "@/ai/embeddings";
import { searchVectors, type SearchResult } from "@/ai/qdrant";

export async function retrievePortfolioContext(
  query: string,
): Promise<SearchResult[]> {
  const started = Date.now();
  const vector = await embedText(query);
  const embedded = Date.now();
  const results = await searchVectors(vector);

  console.info(
    `[retrieval] embed ${embedded - started}ms, qdrant ${Date.now() - embedded}ms, ${results.length} results`,
  );

  return results;
}

