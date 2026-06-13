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
  const Icon = serviceIcons[service.icon];

  return (
    <article className="reveal group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/50 hover:bg-white/[0.09] sm:p-7">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-300/10 blur-3xl transition duration-300 group-hover:bg-emerald-300/20" />

      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200 shadow-lg shadow-emerald-950/20 transition duration-300 group-hover:scale-105 group-hover:bg-emerald-300 group-hover:text-slate-950">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>

      <h3 className="relative mt-7 text-xl font-bold leading-tight text-white transition duration-300 group-hover:text-emerald-200 sm:text-2xl">
        {service.title}
      </h3>
      <p className="relative mt-4 flex-1 text-sm leading-7 text-slate-300">
        {service.description}
      </p>
    </article>
  );
}
