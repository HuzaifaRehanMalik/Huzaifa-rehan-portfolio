import { Agent, OpenAIProvider, run, setDefaultModelProvider } from "@openai/agents";
import { aiConfig } from "@/ai/config";
import { getGeminiClient } from "@/ai/gemini";
import { portfolioAssistantInstructions } from "@/ai/instructions";
import { searchPortfolio } from "@/ai/tools";

let providerReady = false;

function configureModelProvider() {
  const openAIClient = getGeminiClient();

  if (providerReady) return;

  // Gemini via its OpenAI-compatible Chat Completions endpoint.
  setDefaultModelProvider(
    new OpenAIProvider({
      openAIClient,
      useResponses: false,
    }),
  );

  providerReady = true;
}

export function createPortfolioAssistant() {
  configureModelProvider();

  return new Agent({
    name: "Portfolio Assistant",
    model: aiConfig.modelName,
    instructions: portfolioAssistantInstructions,
    tools: [searchPortfolio],
  });
}

export async function streamPortfolioAssistantResponse(
  messages: { role: "user" | "assistant"; content: string }[],
  signal?: AbortSignal,
) {
  const agent = createPortfolioAssistant();
  const transcript = messages
    .map((message) => `${message.role === "user" ? "User" : "Assistant"}: ${message.content}`)
    .join("\n\n");

  return run(agent, transcript, {
    stream: true,
    maxTurns: 4,
    signal,
  });
}

