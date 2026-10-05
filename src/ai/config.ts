export type AiProvider = "gemini" | "openai";

const geminiOpenAiCompatibleUrl =
  "https://generativelanguage.googleapis.com/v1beta/openai/";

// AI_PROVIDER picks the provider explicitly; otherwise a GEMINI_API_KEY selects Gemini.
function resolveProvider(): AiProvider {
  const explicit = process.env.AI_PROVIDER?.trim().toLowerCase();
  if (explicit === "gemini" || explicit === "openai") return explicit;
  return process.env.GEMINI_API_KEY ? "gemini" : "openai";
}

const provider = resolveProvider();
const isGemini = provider === "gemini";

const embeddingDimensions = Number(process.env.EMBEDDING_DIMENSIONS);

export const aiConfig = {
  provider,
  apiKey: (isGemini ? process.env.GEMINI_API_KEY : process.env.OPENAI_API_KEY) ?? "",
  // Gemini is reached through its OpenAI-compatible endpoint, so the same SDKs work for both.
  baseUrl: isGemini
    ? (process.env.GEMINI_BASE_URL ?? geminiOpenAiCompatibleUrl)
    : process.env.OPENAI_BASE_URL,
  modelName: isGemini
    ? (process.env.GEMINI_MODEL ?? "gemini-2.5-flash")
    : (process.env.MODEL_NAME ?? "gpt-4.1-mini"),
  embeddingModel: isGemini
    ? (process.env.GEMINI_EMBEDDING_MODEL ?? "gemini-embedding-001")
    : (process.env.EMBEDDING_MODEL ?? "text-embedding-3-small"),
  embeddingDimensions:
    Number.isFinite(embeddingDimensions) && embeddingDimensions > 0
      ? embeddingDimensions
      : undefined,
  qdrantUrl: process.env.QDRANT_URL ?? "http://localhost:6333",
  qdrantApiKey: process.env.QDRANT_API_KEY,
  qdrantCollection:
    process.env.QDRANT_COLLECTION ?? "portfolio_knowledge_base",
  retrievalLimit: Number(process.env.RETRIEVAL_LIMIT ?? 6),
} as const;

export function assertAiConfig() {
  const missing = [];

  if (!aiConfig.apiKey) missing.push(isGemini ? "GEMINI_API_KEY" : "OPENAI_API_KEY");
  if (!aiConfig.qdrantUrl) missing.push("QDRANT_URL");

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}
