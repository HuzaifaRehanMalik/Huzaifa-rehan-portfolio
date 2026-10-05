import Reveal from "@/components/Reveal";
import ServiceCard from "@/app/components/ServiceCard";
import { services, servicesContent } from "@/data/portfolio";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-surface px-4 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <h2 className="max-w-[14ch] font-display text-4xl font-extrabold leading-[1] tracking-headline text-text sm:text-6xl">
            {servicesContent.title}
          </h2>
          <p className="max-w-[46ch] text-lg leading-8 text-text-dim">
            {servicesContent.description}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 100}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
