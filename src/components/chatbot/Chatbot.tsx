"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { ASK_ASSISTANT_EVENT, type AskAssistantDetail } from "@/lib/assistant";
import {
  FiRefreshCcw,
  FiSend,
  FiMessageCircle,
  FiX,
} from "react-icons/fi";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const suggestedQuestions = [
  "Tell me about Huzaifa",
  "What services do you offer?",
  "Show AI projects",
  "Explain your experience",
  "What technologies do you use?",
  "How can I hire you?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  const canSend = input.trim().length > 0 && !isLoading;

  const welcomeText = useMemo(
    () =>
      "Ask me about Huzaifa's projects, skills, services, or hiring details. I answer from the portfolio knowledge base.",
    [],
  );

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Keep a handle on the latest sendMessage so the window listener never sends with stale history.
  const sendRef = useRef<(prompt: string) => Promise<void>>(async () => {});

  useEffect(() => {
    function handleAsk(event: Event) {
      const { question } = (event as CustomEvent<AskAssistantDetail>).detail ?? {};
      setIsOpen(true);
      if (question) void sendRef.current(question);
    }

    window.addEventListener(ASK_ASSISTANT_EVENT, handleAsk);
    return () => window.removeEventListener(ASK_ASSISTANT_EVENT, handleAsk);
  }, []);

  async function sendMessage(prompt: string) {
    const question = prompt.trim();
    if (!question || isLoading) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: question },
    ];

    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok || !response.body) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "The assistant could not respond.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        assistantText += decoder.decode(value, { stream: true });
        setMessages((current) => [
          ...current.slice(0, -1),
          { role: "assistant", content: assistantText },
        ]);
      }

      if (!assistantText.trim()) {
        throw new Error("The assistant couldn't answer right now. Try again in a moment.");
      }
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "Something went wrong while streaming the response.";
      setError(message);
      setMessages((current) => current.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    sendRef.current = sendMessage;
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (canSend) void sendMessage(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end sm:bottom-6 sm:right-6">
      {isOpen ? (
        <section className="flex h-[min(680px,calc(100vh-2rem))] w-[calc(100vw-2.5rem)] max-w-[420px] flex-col overflow-hidden rounded-[24px] border border-border bg-surface text-text shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]">
          <header className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="font-display text-base font-bold tracking-tight">Portfolio assistant</p>
              <p className="text-xs text-text-dim">Answers from this portfolio's content</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Clear conversation"
                title="Clear conversation"
                onClick={() => {
                  setMessages([]);
                  setError(null);
                }}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-text-dim transition hover:bg-bg hover:text-text"
              >
                <FiRefreshCcw aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Close assistant"
                title="Close assistant"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-text-dim transition hover:bg-bg hover:text-text"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            {messages.length === 0 ? (
              <div className="space-y-4">
                <p className="text-sm leading-6 text-text-dim">
                  {welcomeText}
                </p>
                <div className="grid gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => void sendMessage(question)}
                      className="rounded-xl border border-border px-3.5 py-2.5 text-left text-sm text-text transition hover:border-accent hover:text-accent"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                        message.role === "user"
                          ? "bg-accent text-accent-ink"
                          : "bg-surface-raised text-text"
                      }`}
                    >
                      {message.content ? (
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          rehypePlugins={[rehypeHighlight]}
                          components={{
                            a: ({ children, ...props }) => (
                              <a
                                {...props}
                                className="font-semibold text-accent underline underline-offset-4"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {children}
                              </a>
                            ),
                            code: ({ className, children, ...props }) => (
                              <code
                                {...props}
                                className={`${className ?? ""} rounded bg-bg px-1 py-0.5 font-mono text-[0.85em]`}
                              >
                                {children}
                              </code>
                            ),
                            pre: ({ children }) => (
                              <pre className="my-3 overflow-x-auto rounded-xl border border-border bg-bg p-3 font-mono text-xs">
                                {children}
                              </pre>
                            ),
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      ) : (
                        <span className="inline-flex gap-1">
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:120ms]" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:240ms]" />
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                {error ? (
                  <p className="rounded-xl border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                    {error}
                  </p>
                ) : null}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-border p-3"
          >
            <div className="flex items-end gap-2 rounded-2xl border border-border bg-bg p-2 focus-within:border-accent">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    if (canSend) void sendMessage(input);
                  }
                }}
                rows={1}
                placeholder="Ask about the portfolio..."
                className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 font-body text-sm text-text outline-none placeholder:text-text-faint focus-visible:outline-none"
              />
              <button
                type="submit"
                disabled={!canSend}
                aria-label="Send message"
                title="Send message"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-ink transition hover:bg-accent-deep disabled:cursor-not-allowed disabled:bg-border disabled:text-text-faint"
              >
                <FiSend aria-hidden="true" />
              </button>
            </div>
          </form>
        </section>
      ) : (
        <button
          type="button"
          title="Open portfolio assistant"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-text py-3 pl-4 pr-5 text-sm font-semibold text-bg shadow-[0_12px_30px_-12px_rgba(0,0,0,0.8)] transition hover:bg-accent hover:text-accent-ink"
        >
          <FiMessageCircle aria-hidden="true" className="h-5 w-5" />
          Ask me anything
        </button>
      )}
    </div>
  );
}
