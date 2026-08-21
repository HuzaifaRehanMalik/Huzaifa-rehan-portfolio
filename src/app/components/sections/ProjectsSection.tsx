"use client";

import { projects, projectsContent } from "@/data/portfolio";
import ProjectCard from "@/app/components/ProjectCard";
import { useInViewport } from "@/hooks/useInViewport";

export default function ProjectsSection() {
  const { ref, inView } = useInViewport<HTMLDivElement>();

  return (
    <section id="projects" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="section-label">Selected Work</span>
          <h2 className="mt-4 font-display text-4xl font-black text-text sm:text-6xl">
            {projectsContent.title}
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
