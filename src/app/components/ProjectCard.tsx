import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="reveal group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-emerald-300/50 hover:bg-white/[0.09]">
      <div className="overflow-hidden">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <Image
            alt={`Screenshot of ${project.title}`}
            src={project.image}
            width={700}
            height={430}
            className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </a>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-emerald-300"
          >
            Live Demo
          </a>

          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
            >
              Code Base
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
