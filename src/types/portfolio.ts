export type NavSectionId =
  | "home"
  | "skills"
  | "services"
  | "projects"
  | "contact";

export interface NavItem {
  label: string;
  href: `/#${NavSectionId}`;
  id: NavSectionId;
}

export interface FooterNavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  repo?: string;
  techStack: string[];
}

export type ExpertiseIcon =
  | "ai"
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "automation";

export interface ExpertiseCategory {
  title: string;
  skills: string[];
  icon: ExpertiseIcon;
}

export type ServiceIcon =
  | "ai"
  | "web"
  | "chatbot"
  | "knowledge"
  | "agents"
  | "automation";

export interface Service {
  title: string;
  description: string;
  icon: ServiceIcon;
}

export interface SocialLink {
  label: string;
  href: string;
  icon?: "github" | "linkedin" | "email" | "instagram";
  image?: string;
}
