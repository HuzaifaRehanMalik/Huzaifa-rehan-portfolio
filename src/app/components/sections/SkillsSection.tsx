"use client";

import ExpertiseCard from "@/app/components/ExpertiseCard";
import { expertiseCategories, skillsContent } from "@/data/portfolio";
import { useInViewport } from "@/hooks/useInViewport";

export default function SkillsSection() {
  const { ref, inView } = useInViewport<HTMLDivElement>();

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div
          ref={ref}
          className={`lg:sticky lg:top-28 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="section-label">Technical Expertise</span>
          <h2 className="mt-5 font-display text-4xl font-black text-text sm:text-6xl">
            {skillsContent.title}
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-text-dim sm:text-base">
            {skillsContent.description}
          </p>
          {/* Connecting line motif */}
          <div className="mt-8 hidden h-24 w-px bg-gradient-to-b from-border to-transparent lg:block" />
        </div>

        <div className="connecting-line grid grid-cols-1 gap-5 pl-4 md:grid-cols-2 lg:pl-6">
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
