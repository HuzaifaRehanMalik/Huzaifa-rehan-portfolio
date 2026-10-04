import { aiConfig } from "@/ai/config";
import { getGeminiClient } from "@/ai/gemini";

// Gemini's embeddings endpoint accepts at most 100 inputs per request.
const maxBatchSize = 100;

export async function embedText(input: string): Promise<number[]> {
  const response = await getGeminiClient().embeddings.create({
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
  const embeddings: number[][] = [];

  for (let start = 0; start < inputs.length; start += maxBatchSize) {
    const response = await getGeminiClient().embeddings.create({
      model: aiConfig.embeddingModel,
      input: inputs.slice(start, start + maxBatchSize),
    });

    embeddings.push(...response.data.map((item) => item.embedding));
  }

  return embeddings;
}
