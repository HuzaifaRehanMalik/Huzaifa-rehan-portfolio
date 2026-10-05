import Image from "next/image";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "compact";
  flip?: boolean;
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-text px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-accent hover:text-accent-ink"
      >
        Visit live site
        <FiArrowUpRight aria-hidden="true" />
      </a>
      {project.repo ? (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-text transition hover:border-text"
        >
          <FiGithub aria-hidden="true" />
          View code
        </a>
      ) : null}
    </div>
  );
}

export default function ProjectCard({ project, variant = "compact", flip = false }: ProjectCardProps) {
  const screenshot = (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} live site`}
      className="group block overflow-hidden rounded-[20px] border border-border bg-surface"
    >
      <Image
        alt={`Screenshot of ${project.title}`}
        src={project.image}
        width={1200}
        height={750}
        className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
      />
    </a>
  );

  if (variant === "featured") {
    return (
      <article className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
        <div className={flip ? "lg:order-2" : undefined}>{screenshot}</div>
        <div>
          <h3 className="font-display text-3xl font-extrabold leading-[1.05] tracking-headline text-text sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-[48ch] text-base leading-7 text-text-dim">
            {project.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col">
      {screenshot}
      <h4 className="mt-5 font-display text-xl font-bold tracking-tight text-text">{project.title}</h4>
      <p className="mt-2 flex-1 text-base leading-7 text-text-dim">{project.description}</p>
      <p className="mt-4 text-sm text-text-faint">{project.techStack.join(", ")}</p>
      <div className="mt-5">
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
