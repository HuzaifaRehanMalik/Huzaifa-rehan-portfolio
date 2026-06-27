export const aiConfig = {
  openAiApiKey: process.env.OPENAI_API_KEY ?? "",
  openAiBaseUrl: process.env.OPENAI_BASE_URL,
  modelName: process.env.MODEL_NAME ?? "gpt-4.1-mini",
  embeddingModel: process.env.EMBEDDING_MODEL ?? "text-embedding-3-small",
  qdrantUrl: process.env.QDRANT_URL ?? "http://localhost:6333",
  qdrantApiKey: process.env.QDRANT_API_KEY,
  qdrantCollection:
    process.env.QDRANT_COLLECTION ?? "portfolio_knowledge_base",
  retrievalLimit: Number(process.env.RETRIEVAL_LIMIT ?? 6),
} as const;

export function assertAiConfig() {
  const missing = [];

  if (!aiConfig.openAiApiKey) missing.push("OPENAI_API_KEY");
  if (!aiConfig.qdrantUrl) missing.push("QDRANT_URL");

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}

