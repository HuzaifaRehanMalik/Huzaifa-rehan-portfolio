import { aiConfig } from "@/ai/config";
import { checkQdrantConnection } from "@/ai/qdrant";

export const runtime = "nodejs";

export async function GET() {
  const qdrant = await checkQdrantConnection();

  return Response.json({
    ok: true,
    service: "portfolio-rag-chatbot",
    model: aiConfig.modelName,
    embeddingModel: aiConfig.embeddingModel,
    qdrantCollection: aiConfig.qdrantCollection,
    configured: {
      openAiApiKey: Boolean(aiConfig.openAiApiKey),
      openAiBaseUrl: Boolean(aiConfig.openAiBaseUrl),
      qdrantUrl: Boolean(aiConfig.qdrantUrl),
      qdrantApiKey: Boolean(aiConfig.qdrantApiKey),
    },
    qdrant,
  });
}
