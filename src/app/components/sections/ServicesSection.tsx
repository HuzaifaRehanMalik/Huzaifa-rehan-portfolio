import ServiceCard from "@/app/components/ServiceCard";
import { services, servicesContent } from "@/data/portfolio";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="absolute left-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 -z-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black text-white sm:text-6xl">
            {servicesContent.title}
          </h2>
          <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
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
