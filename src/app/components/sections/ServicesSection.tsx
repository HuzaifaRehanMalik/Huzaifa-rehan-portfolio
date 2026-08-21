"use client";

import ServiceCard from "@/app/components/ServiceCard";
import { services, servicesContent } from "@/data/portfolio";
import { useInViewport } from "@/hooks/useInViewport";

export default function ServicesSection() {
  const { ref, inView } = useInViewport<HTMLDivElement>();

  return (
    <section
      id="services"
      className="relative scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="section-label">What I Build</span>
          <h2 className="mt-4 font-display text-4xl font-black text-text sm:text-6xl">
            {servicesContent.title}
          </h2>
          <p className="mt-6 text-sm leading-7 text-text-dim sm:text-base">
            {servicesContent.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
