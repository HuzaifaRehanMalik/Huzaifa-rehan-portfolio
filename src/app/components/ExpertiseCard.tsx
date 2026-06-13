import {
  FiBox,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiServer,
} from "react-icons/fi";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import type { ExpertiseCategory, ExpertiseIcon } from "@/types/portfolio";

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
  const Icon = expertiseIcons[category.icon];

  return (
    <article
      className="reveal group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/50 hover:bg-white/[0.09] sm:p-6"
      style={{ animationDelay: `${index * 90}ms` } as CSSProperties}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-300/20 via-transparent to-cyan-300/15 opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl transition duration-300 group-hover:bg-emerald-300/20" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200 shadow-lg shadow-emerald-950/20 transition duration-300 group-hover:scale-105 group-hover:bg-emerald-300 group-hover:text-slate-950">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold text-slate-300">
          0{index + 1}
        </span>
      </div>

      <h3 className="relative mt-6 text-xl font-bold leading-tight text-white transition duration-300 group-hover:text-emerald-200">
        {category.title}
      </h3>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-semibold text-slate-200 transition duration-300 group-hover:border-emerald-300/30 group-hover:bg-emerald-300/10"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
