import type { ExpertiseCategory } from "@/types/portfolio";

interface ExpertiseCardProps {
  category: ExpertiseCategory;
}

export default function ExpertiseCard({ category }: ExpertiseCardProps) {
  return (
    <div className="grid gap-4 border-t border-border py-7 sm:grid-cols-[13rem_1fr] sm:gap-8">
      <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-text">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-text"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
