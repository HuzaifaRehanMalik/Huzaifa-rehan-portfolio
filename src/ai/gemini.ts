import OpenAI from "openai";
import { aiConfig, assertAiConfig } from "@/ai/config";

// Gemini 3 rejects (400) follow-up requests whose assistant tool calls lack a
// thought signature. The Agents SDK drops Gemini's `extra_content`, so attach
// Google's documented placeholder signature to any tool call missing one.
const GEMINI_SKIP_SIGNATURE = "skip_thought_signature_validator";

type ChatMessage = {
  role?: string;
  tool_calls?: { extra_content?: { google?: { thought_signature?: string } } }[];
};

const geminiFetch: typeof fetch = (input, init) => {
  if (typeof init?.body !== "string") return fetch(input, init);

  try {
    const body = JSON.parse(init.body) as { messages?: ChatMessage[] };
    let patched = false;

    for (const message of body.messages ?? []) {
      if (message.role !== "assistant" || !message.tool_calls) continue;

      for (const toolCall of message.tool_calls) {
        if (toolCall.extra_content?.google?.thought_signature) continue;
        toolCall.extra_content = {
          ...toolCall.extra_content,
          google: {
            ...toolCall.extra_content?.google,
            thought_signature: GEMINI_SKIP_SIGNATURE,
          },
        };
        patched = true;
      }
    }

    if (patched) return fetch(input, { ...init, body: JSON.stringify(body) });
  } catch {
    // Not a JSON chat request; send unchanged.
  }

  return fetch(input, init);
};

let geminiClient: OpenAI | null = null;

// Gemini through its OpenAI-compatible endpoint, shared by the agent and embeddings.
export function getGeminiClient() {
  assertAiConfig();

  if (!geminiClient) {
    geminiClient = new OpenAI({
      apiKey: aiConfig.geminiApiKey,
      baseURL: aiConfig.geminiBaseUrl,
      fetch: geminiFetch,
    });
  }

  return geminiClient;
}
