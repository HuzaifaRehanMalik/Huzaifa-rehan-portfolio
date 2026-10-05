import {
  Agent,
  OpenAIProvider,
  run,
  setDefaultModelProvider,
  setTracingDisabled,
} from "@openai/agents";
import { aiConfig, assertAiConfig } from "@/ai/config";
import { portfolioAssistantInstructions } from "@/ai/instructions";
import { searchPortfolio } from "@/ai/tools";

let providerReady = false;

function configureModelProvider() {
  assertAiConfig();

  if (providerReady) return;

  // The Agents SDK stays the framework; with Gemini it talks to Google's
  // OpenAI-compatible Chat Completions endpoint instead of OpenAI.
  setDefaultModelProvider(
    new OpenAIProvider({
      apiKey: aiConfig.apiKey,
      baseURL: aiConfig.baseUrl,
      useResponses: false,
    }),
  );

  // Trace export goes to OpenAI's platform and needs an OpenAI key, so skip it for Gemini.
  if (aiConfig.provider !== "openai") {
    setTracingDisabled(true);
  }

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

