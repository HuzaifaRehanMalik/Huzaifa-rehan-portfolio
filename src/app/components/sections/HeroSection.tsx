"use client";

import Image from "next/image";
import type { PointerEvent } from "react";
import { FormEvent, useEffect, useState } from "react";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { footerBranding, profile } from "@/data/portfolio";
import { askAssistant } from "@/lib/assistant";

const starterQuestions = [
  "Which projects use RAG?",
  "What can you build for a startup?",
  "What's your AI stack?",
];

// Types each starter question into the empty ask box, then erases it, on a loop.
function useTypedPlaceholder(phrases: string[], active: boolean) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (
      !active ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let phrase = 0;
    let length = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = phrases[phrase];
      length += deleting ? -1 : 1;
      setText(current.slice(0, length));

      let delay = deleting ? 28 : 55;
      if (!deleting && length === current.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && length === 0) {
        deleting = false;
        phrase = (phrase + 1) % phrases.length;
        delay = 400;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 1200);
    return () => clearTimeout(timer);
  }, [phrases, active]);

  return text;
}

export default function HeroSection() {
  const [question, setQuestion] = useState("");
  const [focused, setFocused] = useState(false);
  const typed = useTypedPlaceholder(
    starterQuestions,
    !focused && question === "",
  );

  function handleAsk(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = question.trim();
    if (!trimmed) return;
    askAssistant(trimmed);
    setQuestion("");
  }

  // Cursor-following spotlight, same idea as the HRM Solution site.
  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${event.clientY - rect.top}px`,
    );
  }

  const words = profile.heroTitle.split(" ");

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      className="hero-spotlight relative isolate scroll-mt-24 overflow-hidden px-4 pb-20 pt-28 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28"
    >
      <div
        id="about"
        className="pointer-events-none absolute -top-24"
        aria-hidden="true"
      />

      {/* Slow-drifting aurora + fading grid behind the hero */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="hero-grid absolute inset-0" />
        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] animate-drift rounded-full bg-accent/15 blur-[110px]" />
        <div className="absolute -right-24 top-1/3 h-[24rem] w-[24rem] animate-drift-reverse rounded-full bg-brand/30 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-start lg:gap-16">
        <div>
          {/* Name and role live inside the h1 so search engines read "Huzaifa Rehan, full-stack AI engineer" as the page's main heading */}
          <h1>
            <span className="inline-flex animate-rise items-center gap-2.5 text-lg font-medium text-text-dim">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-live" />
              </span>
              {profile.name}, {profile.role}
            </span>{" "}

            <span className="mt-5 block max-w-[15ch] font-display text-[2.75rem] font-extrabold leading-[0.98] tracking-headline text-text sm:text-7xl lg:text-[6rem]">
              {words.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="inline-block overflow-hidden pb-[0.08em] align-bottom"
                >
                  <span
                    className="inline-block animate-word-rise"
                    style={{ animationDelay: `${120 + index * 70}ms` }}
                  >
                    {word}
                    {index < words.length - 1 ? " " : ""}
                  </span>
                </span>
              ))}
            </span>
          </h1>

          <p className="mt-8 max-w-[58ch] animate-rise text-lg leading-8 text-text-dim [animation-delay:600ms]">
            {profile.heroDescription}
          </p>

          {/* Live entry point to the RAG assistant that indexes this portfolio */}
          <div className="mt-10 max-w-2xl animate-rise [animation-delay:720ms]">
            <form
              onSubmit={handleAsk}
              className="ask-glow flex items-center gap-2 rounded-full border border-border bg-surface/80 p-1.5 pl-5 backdrop-blur transition focus-within:border-accent"
            >
              <label htmlFor="hero-question" className="sr-only">
                Ask my portfolio assistant a question
              </label>
              <input
                id="hero-question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={
                  typed ? `${typed}▍` : "Ask my assistant about my work"
                }
                className="min-w-0 flex-1 bg-transparent py-2.5 text-base text-text outline-none placeholder:text-text-faint focus-visible:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition hover:bg-accent-deep"
              >
                Ask
              </button>
            </form>
            <div className="mt-3 flex flex-wrap items-center gap-2 pl-1">
              <span className="text-sm text-text-faint">Try</span>
              {starterQuestions.map((starter) => (
                <button
                  key={starter}
                  type="button"
                  onClick={() => askAssistant(starter)}
                  className="rounded-full border border-border px-3 py-1 text-sm text-text-dim transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {starter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 animate-rise text-sm font-semibold [animation-delay:840ms]">
            <a
              href="/CV.pdf"
              download
              className="inline-flex items-center gap-2 text-text underline decoration-border decoration-2 underline-offset-[6px] transition hover:decoration-accent"
            >
              <FiDownload aria-hidden="true" />
              Download CV
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-1.5 text-text underline decoration-border decoration-2 underline-offset-[6px] transition hover:decoration-accent"
            >
              See projects
              <FiArrowUpRight
                aria-hidden="true"
                className="rotate-90 transition group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-[300px] animate-rise [animation-delay:300ms] sm:max-w-[340px] lg:ml-auto lg:mr-0 lg:max-w-[360px]">
          <div className="animate-float">
            {/* Rotating cyan light around the photo frame */}
            <div className="photo-ring relative rounded-[30px] p-[2px] shadow-[0_30px_80px_-40px_rgba(88,213,219,0.55)]">
              <div className="relative overflow-hidden rounded-[28px] bg-surface">
                <Image
                  src={profile.image}
                  alt={profile.imageAlt}
                  width={1254}
                  height={1254}
                  priority
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
            <figcaption className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-border bg-bg/85 px-3.5 py-1.5 text-sm font-medium text-text backdrop-blur">
              <span
                className="h-2 w-2 rounded-full bg-live"
                aria-hidden="true"
              />
              {footerBranding.status}
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
