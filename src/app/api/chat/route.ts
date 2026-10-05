import { Readable } from "node:stream";
import { streamPortfolioAssistantResponse } from "@/ai/agent";

export const runtime = "nodejs";
// Agent replies need two Gemini calls plus retrieval; the old 10s default cut them off.
export const maxDuration = 60;

// Stop slightly before Vercel's hard limit so the client gets an error it can show.
const replyTimeoutMs = 55_000;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false;

  const message = value as Record<string, unknown>;
  return (
    (message.role === "user" || message.role === "assistant") &&
    typeof message.content === "string"
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: unknown };
    const messages = Array.isArray(body.messages)
      ? body.messages.filter(isChatMessage).slice(-12)
      : [];

    if (messages.length === 0) {
      return Response.json({ error: "At least one message is required." }, { status: 400 });
    }

    const signal = AbortSignal.any([
      request.signal,
      AbortSignal.timeout(replyTimeoutMs),
    ]);
    const result = await streamPortfolioAssistantResponse(messages, signal);
    const stream = Readable.toWeb(
      result.toTextStream({ compatibleWithNodeStreams: true }),
    ) as ReadableStream<Uint8Array>;

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Chat route failed", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Chat request failed." },
      { status: 500 },
    );
  }
}
