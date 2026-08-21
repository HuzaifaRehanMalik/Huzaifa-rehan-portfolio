"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (canSend) void sendMessage(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end sm:bottom-6 sm:right-6">
      {isOpen ? (
        <section className="flex h-[min(680px,calc(100vh-2rem))] w-[calc(100vw-2.5rem)] max-w-[420px] flex-col overflow-hidden rounded-lg border border-border bg-bg/95 text-text shadow-lg shadow-black/40 backdrop-blur-md">
          <header className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="font-display text-sm font-semibold">Portfolio Assistant</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-teal">RAG-powered answers</p>
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
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-text-dim transition hover:bg-surface hover:text-text"
              >
                <FiRefreshCcw aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Close assistant"
                title="Close assistant"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-text-dim transition hover:bg-surface hover:text-text"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            {messages.length === 0 ? (
              <div className="space-y-4">
                <p className="rounded-lg border border-border bg-surface/60 p-4 text-sm leading-6 text-text-dim">
                  {welcomeText}
                </p>
                <div className="grid gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => void sendMessage(question)}
                      className="rounded-lg border border-border bg-bg/40 px-3 py-2 text-left font-mono text-xs text-text-dim transition hover:border-teal/40 hover:text-teal"
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
                      className={`max-w-[88%] rounded-lg px-3.5 py-3 text-sm leading-6 ${
                        message.role === "user"
                          ? "border border-amber/30 bg-amber text-bg"
                          : "border border-border bg-surface/60 text-text-dim"
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
                                className="font-semibold text-teal underline underline-offset-4"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {children}
                              </a>
                            ),
                            code: ({ className, children, ...props }) => (
                              <code
                                {...props}
                                className={`${className ?? ""} rounded bg-bg/50 px-1 py-0.5 font-mono text-[0.85em]`}
                              >
                                {children}
                              </code>
                            ),
                            pre: ({ children }) => (
                              <pre className="my-3 overflow-x-auto rounded-lg border border-border bg-bg/60 p-3 font-mono text-xs">
                                {children}
                              </pre>
                            ),
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      ) : (
                        <span className="inline-flex gap-1">
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-teal" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-teal [animation-delay:120ms]" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-teal [animation-delay:240ms]" />
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                {error ? (
                  <p className="rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-100">
                    {error}
                  </p>
                ) : null}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-border bg-bg/80 p-3"
          >
            <div className="flex items-end gap-2 rounded-lg border border-border bg-surface-2/60 p-2">
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
                className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 font-body text-sm text-text outline-none placeholder:text-text-faint"
              />
              <button
                type="submit"
                disabled={!canSend}
                aria-label="Send message"
                title="Send message"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber text-bg transition hover:bg-amber/85 disabled:cursor-not-allowed disabled:bg-surface-2 disabled:text-text-faint"
              >
                <FiSend aria-hidden="true" />
              </button>
            </div>
          </form>
        </section>
      ) : (
        <button
          type="button"
          aria-label="Open portfolio assistant"
          title="Open portfolio assistant"
          onClick={() => setIsOpen(true)}
          className="pulse-ring relative inline-flex h-12 w-12 items-center justify-center rounded-lg border border-amber/30 bg-amber text-bg shadow-lg shadow-amber/15 transition hover:bg-amber/85"
        >
          <FiMessageCircle aria-hidden="true" className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
