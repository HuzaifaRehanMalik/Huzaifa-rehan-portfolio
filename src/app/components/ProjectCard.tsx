import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-emerald-300/50 hover:bg-white/[0.09]"
    >
      <div className="overflow-hidden">
        <Image
          alt={`Screenshot of ${project.title}`}
          src={project.image}
          width={700}
          height={430}
          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
        />
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
      </div>
    </Link>
  );
}
