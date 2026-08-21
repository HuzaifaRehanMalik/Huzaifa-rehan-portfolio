"use client";

import {
  FiBox,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiServer,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import type { ExpertiseCategory, ExpertiseIcon } from "@/types/portfolio";
import { useInViewport } from "@/hooks/useInViewport";

const expertiseIcons: Record<ExpertiseIcon, IconType> = {
  ai: FiCpu,
  frontend: FiLayers,
  backend: FiServer,
  database: FiDatabase,
  tools: FiBox,
  automation: FiGitBranch,
};

interface ExpertiseCardProps {
  category: ExpertiseCategory;
  index: number;
}

export default function ExpertiseCard({ category, index }: ExpertiseCardProps) {
  const { ref, inView } = useInViewport<HTMLElement>();
  const Icon = expertiseIcons[category.icon];

  return (
    <article
      ref={ref}
      className={`node-connector group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-card border border-border bg-surface/60 p-5 transition-all duration-700 ease-out hover:border-amber/40 hover:bg-surface sm:p-6 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber/20 bg-amber/8 text-amber transition duration-300 group-hover:bg-amber/15">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="font-mono text-[10px] font-semibold tracking-widest text-text-faint">
          0{index + 1}
        </span>
      </div>

      <h3 className="relative mt-6 font-display text-xl font-bold leading-tight text-text transition duration-300 group-hover:text-amber">
        {category.title}
      </h3>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="dot-marker rounded border border-border bg-bg/60 px-3 py-1.5 text-xs font-medium text-text-dim transition duration-300 group-hover:border-amber/20 group-hover:text-text"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
