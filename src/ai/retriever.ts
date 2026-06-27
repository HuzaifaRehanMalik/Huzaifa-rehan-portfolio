import { embedText } from "@/ai/embeddings";
import { searchVectors, type SearchResult } from "@/ai/qdrant";

export async function retrievePortfolioContext(
  query: string,
): Promise<SearchResult[]> {
  const vector = await embedText(query);
  return searchVectors(vector);
}

