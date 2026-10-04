export const aiConfig = {
  geminiApiKey: process.env.GEMINI_API_KEY ?? "",
  geminiBaseUrl:
    process.env.GEMINI_BASE_URL ??
    "https://generativelanguage.googleapis.com/v1beta/openai/",
  modelName: process.env.GEMINI_MODEL ?? "gemini-3.5-flash",
  embeddingModel: process.env.EMBEDDING_MODEL ?? "gemini-embedding-2",
  qdrantUrl: process.env.QDRANT_URL ?? "http://localhost:6333",
  qdrantApiKey: process.env.QDRANT_API_KEY,
  qdrantCollection:
    process.env.QDRANT_COLLECTION ?? "portfolio_knowledge_base",
  retrievalLimit: Number(process.env.RETRIEVAL_LIMIT ?? 6),
} as const;

export function assertAiConfig() {
  const missing = [];

  if (!aiConfig.geminiApiKey) missing.push("GEMINI_API_KEY");
  if (!aiConfig.qdrantUrl) missing.push("QDRANT_URL");

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}
