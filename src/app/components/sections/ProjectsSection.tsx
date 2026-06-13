import { projects, projectsContent } from "@/data/portfolio";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-4xl font-black text-white sm:text-6xl">
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
