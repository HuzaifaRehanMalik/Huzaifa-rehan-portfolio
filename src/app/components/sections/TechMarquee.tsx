import { expertiseCategories } from "@/data/portfolio";

const technologies = Array.from(
  new Set(expertiseCategories.flatMap((category) => category.skills)),
);

export default function TechMarquee() {
  return (
    <div className="marquee-mask group overflow-hidden border-y border-border-soft py-5" aria-label="Technologies I work with">
      <ul className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
        {[...technologies, ...technologies].map((tech, index) => (
          <li
            key={`${tech}-${index}`}
            aria-hidden={index >= technologies.length ? true : undefined}
            className="flex items-center gap-10 whitespace-nowrap font-display text-2xl font-bold tracking-tight text-text-faint transition hover:text-accent"
          >
            {tech}
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </div>
  );
}
