import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import {
  contactContent,
  footerBranding,
  footerContent,
  footerNavItems,
  footerServices,
  socialLinks,
} from "@/data/portfolio";

const iconMap = {
  GitHub: AiFillGithub,
  LinkedIn: AiOutlineLinkedin,
  Email: FiMail,
};

function getSocialIcon(label: string) {
  const Icon = iconMap[label as keyof typeof iconMap] || FiMail;
  return <Icon className="h-5 w-5" aria-hidden="true" />;
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-5 pt-16 pb-10 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-emerald-400/25 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute right-8 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="reveal overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl ring-1 ring-white/5 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.9fr] lg:gap-8">
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200 shadow-lg shadow-emerald-950/10">
                🟢 {footerBranding.status}
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200/90">
                  {footerBranding.role}
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                  {footerBranding.name}
                </h2>
              </div>
              <p className="max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
                {footerBranding.description}
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                Quick Navigation
              </h3>
              <div className="grid gap-3 text-base text-slate-200 sm:grid-cols-2">
                {footerNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-white/10 hover:text-emerald-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                Services
              </h3>
              <div className="grid gap-3 text-base text-slate-200">
                {footerServices.map((service) => (
                  <div
                    key={service}
                    className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/10 hover:text-emerald-200"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-slate-950/30 p-8 shadow-2xl shadow-black/20 backdrop-blur-3xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200/90">
                  Let’s Build Something Intelligent Together
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-300 sm:text-xl">
                  Whether you need an AI-powered application, a modern web platform, or an intelligent automation solution, I’m always excited to work on impactful projects.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  Start a Project
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-white/10"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 text-slate-300">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                  Final Call to Action
                </p>
                <p className="text-base text-white/90">
                  {footerContent.title}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/60 hover:bg-emerald-300/15 hover:text-emerald-200"
                  >
                    {getSocialIcon(link.label)}
                  </a>
                ))}
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactContent.email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/15 hover:text-cyan-100"
                  aria-label="Email"
                >
                  <FiMail className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex md:items-center md:justify-between">
              <p>{footerContent.copyright}</p>
              <p className="mt-3 md:mt-0">{footerContent.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
