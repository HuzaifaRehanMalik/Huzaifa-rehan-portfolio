import OpenAI from "openai";
import { aiConfig, assertAiConfig } from "@/ai/config";

let openAiClient: OpenAI | null = null;

function getOpenAiClient() {
  assertAiConfig();

  if (!openAiClient) {
    openAiClient = new OpenAI({
      apiKey: aiConfig.openAiApiKey,
      baseURL: aiConfig.openAiBaseUrl,
    });
  }

  return openAiClient;
}

export async function embedText(input: string): Promise<number[]> {
  const response = await getOpenAiClient().embeddings.create({
    model: aiConfig.embeddingModel,
    input,
  });

  const embedding = response.data[0]?.embedding;

  if (!embedding) {
    throw new Error("Embedding provider returned no embedding.");
  }

  return embedding;
}

export async function embedTexts(inputs: string[]): Promise<number[][]> {
  if (inputs.length === 0) return [];

  const response = await getOpenAiClient().embeddings.create({
    model: aiConfig.embeddingModel,
    input: inputs,
  });

  return response.data.map((item) => item.embedding);
}

