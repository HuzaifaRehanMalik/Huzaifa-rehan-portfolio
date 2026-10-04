"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/portfolio";
import { useInViewport } from "@/hooks/useInViewport";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { ref, inView } = useInViewport<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface/60 transition-all duration-700 ease-out hover:border-teal/40 hover:bg-surface ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="overflow-hidden">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <Image
            alt={`Screenshot of ${project.title}`}
            src={project.image}
            width={700}
            height={430}
            loading="eager"
            className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </a>
      </div>
      <div className="flex flex-1 flex-col border-t border-border p-5">
        <h3 className="font-display text-lg font-bold text-text">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-text-dim">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="dot-marker rounded border border-border bg-bg/60 px-3 py-1 text-xs font-medium text-text-dim"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-amber px-4 py-2 text-sm font-semibold text-bg transition hover:bg-amber/85"
          >
            Live Demo
          </a>

          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface-2/60 px-4 py-2 text-sm font-semibold text-text-dim transition hover:border-teal/40 hover:text-text"
            >
              Code Base
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
