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
    <article className="border-t-2 border-accent/70 pt-6">
      <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
      <h3 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-text">
        {service.title}
      </h3>
      <p className="mt-3 max-w-[44ch] text-base leading-7 text-text-dim">
        {service.description}
      </p>
    </article>
  );
}
