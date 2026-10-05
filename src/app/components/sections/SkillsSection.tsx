import Reveal from "@/components/Reveal";
import ExpertiseCard from "@/app/components/ExpertiseCard";
import { expertiseCategories, skillsContent } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 px-4 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="max-w-[12ch] font-display text-4xl font-extrabold leading-[1] tracking-headline text-text sm:text-6xl">
            {skillsContent.title}
          </h2>
          <p className="mt-6 max-w-[42ch] text-lg leading-8 text-text-dim">
            {skillsContent.intro}
          </p>
        </Reveal>

        <div className="border-b border-border">
          {expertiseCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 70}>
              <ExpertiseCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
