import { projects, projectsContent } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-24 px-4 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold leading-[1] tracking-headline text-text sm:text-6xl">
            {projectsContent.title}
          </h2>
          <p className="mt-5 max-w-[52ch] text-lg leading-8 text-text-dim">
            {projectsContent.intro}
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {featured.map((project, index) => (
            <Reveal key={project.title}>
              <ProjectCard
                project={project}
                variant="featured"
                flip={index % 2 === 1}
              />
            </Reveal>
          ))}
        </div>

        {more.length ? (
          <>
            <h3 className="mt-24 border-t border-border pt-8 font-display text-2xl font-bold tracking-tight text-text">
              More web builds
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
              {more.map((project, index) => (
                <Reveal
                  key={project.title}
                  delay={index * 100}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
