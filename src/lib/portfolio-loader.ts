import {
  contactContent,
  expertiseCategories,
  footerBranding,
  footerContent,
  footerServices,
  navItems,
  profile,
  projects,
  projectsContent,
  services,
  servicesContent,
  skillsContent,
  socialLinks,
} from "@/data/portfolio";
import type { PortfolioChunkMetadata } from "@/ai/qdrant";

export interface PortfolioDocument {
  id: string;
  content: string;
  metadata: PortfolioChunkMetadata;
}

const sourceFile = "src/data/portfolio.ts";

function cleanText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function documentFor(
  id: string,
  title: string,
  page: string,
  section: string,
  url: string,
  lines: string[],
): PortfolioDocument {
  return {
    id,
    content: cleanText(lines.filter(Boolean).join("\n")),
    metadata: {
      title,
      page,
      section,
      url,
      sourceFile,
      source: "portfolio",
    },
  };
}

export function loadPortfolioDocuments(): PortfolioDocument[] {
  const documents: PortfolioDocument[] = [
    documentFor("hero", profile.name, "Home", "Hero", "/#home", [
      profile.heroTitle,
      profile.heroDescription,
      "Primary action: Download CV.",
    ]),
    documentFor(
      "skills-overview",
      skillsContent.title,
      "Skills",
      "Overview",
      "/#skills",
      [skillsContent.badge, skillsContent.description],
    ),
    ...expertiseCategories.map((category) =>
      documentFor(
        `skill-${category.title}`,
        category.title,
        "Skills",
        "Expertise",
        "/#skills",
        [
          category.title,
          `Skills: ${category.skills.join(", ")}.`,
        ],
      ),
    ),
    documentFor(
      "services-overview",
      servicesContent.title,
      "Services",
      "Overview",
      "/#services",
      [servicesContent.description],
    ),
    ...services.map((service) =>
      documentFor(
        `service-${service.title}`,
        service.title,
        "Services",
        service.title,
        "/#services",
        [service.title, service.description],
      ),
    ),
    documentFor(
      "projects-overview",
      projectsContent.title,
      "Projects",
      "Overview",
      "/#projects",
      [`Featured portfolio projects: ${projects.map((project) => project.title).join(", ")}.`],
    ),
    ...projects.map((project) =>
      documentFor(
        `project-${project.title}`,
        project.title,
        "Projects",
        project.title,
        "/#projects",
        [
          project.title,
          project.description,
          `Technologies: ${project.techStack.join(", ")}.`,
          `Live URL: ${project.url}.`,
          project.repo ? `Repository: ${project.repo}.` : "",
        ],
      ),
    ),
    documentFor("contact", contactContent.title, "Contact", "Contact", "/#contact", [
      contactContent.description,
      `${contactContent.emailLabel}: ${contactContent.email}.`,
      `${contactContent.linkedInLabel}: ${contactContent.linkedInDisplayName}.`,
      `${contactContent.googleFormLabel}: ${contactContent.googleFormHref}.`,
      `Social links: ${socialLinks.map((link) => `${link.label} ${link.href}`).join(", ")}.`,
    ]),
    documentFor("footer-branding", footerBranding.name, "Footer", "Branding", "/", [
      `${footerBranding.name}: ${footerBranding.role}.`,
      footerBranding.description,
      footerBranding.status,
      `Footer services: ${footerServices.join(", ")}.`,
      footerContent.title,
      footerContent.description,
      footerContent.tagline,
    ]),
    documentFor("navigation", "Portfolio Navigation", "Navigation", "Links", "/", [
      `Navigation sections: ${navItems.map((item) => `${item.label} ${item.href}`).join(", ")}.`,
    ]),
  ];

  return documents.filter((document) => document.content.length > 0);
}

