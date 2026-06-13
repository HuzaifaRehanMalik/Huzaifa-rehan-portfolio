import ExpertiseCard from "@/app/components/ExpertiseCard";
import { expertiseCategories, skillsContent } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="reveal lg:sticky lg:top-28">
          <h2 className="mt-5 text-4xl font-black text-white sm:text-6xl">
            {skillsContent.title}
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {skillsContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {expertiseCategories.map((category, index) => (
            <ExpertiseCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
