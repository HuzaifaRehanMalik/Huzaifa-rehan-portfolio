"use client";

import Image from "next/image";
import { profile } from "@/data/portfolio";
import { useInViewport } from "@/hooks/useInViewport";

export default function HeroSection() {
  const { ref: textRef, inView: textInView } = useInViewport<HTMLDivElement>(0.1);
  const { ref: photoRef, inView: photoInView } = useInViewport<HTMLDivElement>(0.1);

  return (
    <section
      id="home"
      className="relative min-h-screen scroll-mt-24 px-5 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      <div id="about" className="pointer-events-none absolute -top-24" aria-hidden="true" />

      {/* ── Vector-space canvas: scattered node dots + connecting lines ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          {/* Connecting lines */}
          <line x1="10%" y1="15%" x2="25%" y2="35%" stroke="#232D50" strokeWidth="1" opacity="0.5" />
          <line x1="25%" y1="35%" x2="45%" y2="20%" stroke="#232D50" strokeWidth="1" opacity="0.4" />
          <line x1="45%" y1="20%" x2="70%" y2="40%" stroke="#232D50" strokeWidth="1" opacity="0.3" />
          <line x1="70%" y1="40%" x2="85%" y2="25%" stroke="#232D50" strokeWidth="1" opacity="0.4" />
          <line x1="15%" y1="60%" x2="35%" y2="75%" stroke="#232D50" strokeWidth="1" opacity="0.3" />
          <line x1="35%" y1="75%" x2="55%" y2="55%" stroke="#232D50" strokeWidth="1" opacity="0.35" />
          <line x1="55%" y1="55%" x2="80%" y2="70%" stroke="#232D50" strokeWidth="1" opacity="0.25" />
          <line x1="25%" y1="35%" x2="35%" y2="75%" stroke="#232D50" strokeWidth="1" opacity="0.2" />
          <line x1="45%" y1="20%" x2="55%" y2="55%" stroke="#232D50" strokeWidth="1" opacity="0.2" />
          {/* Node dots */}
          <circle cx="10%" cy="15%" r="3" fill="#4FD9C7" opacity="0.5" />
          <circle cx="25%" cy="35%" r="4" fill="#F2A83D" opacity="0.45" />
          <circle cx="45%" cy="20%" r="3" fill="#4FD9C7" opacity="0.4" />
          <circle cx="70%" cy="40%" r="3.5" fill="#F2A83D" opacity="0.35" />
          <circle cx="85%" cy="25%" r="3" fill="#4FD9C7" opacity="0.4" />
          <circle cx="15%" cy="60%" r="3" fill="#F2A83D" opacity="0.3" />
          <circle cx="35%" cy="75%" r="4" fill="#4FD9C7" opacity="0.35" />
          <circle cx="55%" cy="55%" r="3" fill="#F2A83D" opacity="0.3" />
          <circle cx="80%" cy="70%" r="3.5" fill="#4FD9C7" opacity="0.25" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.08fr_0.92fr]">
        <div
          ref={textRef}
          className={`transition-all duration-700 ease-out ${
            textInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="section-label">Full-Stack AI Engineer</span>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-black leading-[0.95] text-text sm:text-7xl lg:text-8xl">
            {profile.heroTitle}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-dim">
            {profile.heroDescription}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-lg border border-amber/30 bg-amber px-6 py-3 text-sm font-semibold text-bg transition hover:bg-amber/85"
            >
              Download CV
            </a>
          </div>
        </div>

        <div
          ref={photoRef}
          className={`relative mx-auto w-full max-w-[440px] lg:max-w-[520px] transition-all duration-700 ease-out ${
            photoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* ── Orbiting dots ring ── */}
          <div className="orbit-ring aspect-square">
            <div className="relative overflow-hidden rounded-full border border-border bg-surface p-2">
              <Image
                src={profile.image}
                alt={profile.imageAlt}
                width={1254}
                height={1254}
                priority
                className="aspect-square w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
