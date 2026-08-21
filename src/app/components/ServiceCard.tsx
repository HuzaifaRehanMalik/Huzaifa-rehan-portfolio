"use client";

import {
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiGlobe,
  FiMessageCircle,
  FiZap,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import type { Service, ServiceIcon } from "@/types/portfolio";
import { useInViewport } from "@/hooks/useInViewport";

const serviceIcons: Record<ServiceIcon, IconType> = {
  ai: FiCpu,
  web: FiGlobe,
  chatbot: FiMessageCircle,
  knowledge: FiDatabase,
  agents: FiGitBranch,
  automation: FiZap,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { ref, inView } = useInViewport<HTMLElement>();
  const Icon = serviceIcons[service.icon];

  return (
    <article
      ref={ref}
      className={`group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-card border border-border bg-surface/60 p-6 transition-all duration-700 ease-out hover:border-teal/40 hover:bg-surface sm:p-7 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-teal/20 bg-teal/8 text-teal transition duration-300 group-hover:bg-teal/15">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="relative mt-7 font-display text-xl font-bold leading-tight text-text transition duration-300 group-hover:text-teal sm:text-2xl">
        {service.title}
      </h3>
      <p className="relative mt-4 flex-1 text-sm leading-7 text-text-dim">
        {service.description}
      </p>
    </article>
  );
}
