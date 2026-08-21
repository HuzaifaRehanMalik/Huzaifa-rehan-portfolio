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
    <footer className="relative px-5 pt-16 pb-10 sm:px-8 lg:px-12">
      {/* Top border hairline */}
      <div className="mx-auto max-w-7xl border-t border-border" />

      <div className="relative mx-auto max-w-7xl pt-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.9fr] lg:gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-teal">
              <span className="h-2 w-2 shrink-0 rounded-full bg-teal animate-pulse" aria-hidden="true" />
              {footerBranding.status}
            </div>
            <div>
              <p className="section-label">
                {footerBranding.role}
              </p>
              <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-text sm:text-5xl">
                {footerBranding.name}
              </h2>
            </div>
            <p className="max-w-lg text-base leading-8 text-text-dim sm:text-lg">
              {footerBranding.description}
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-text-faint">
              Quick Navigation
            </h3>
            <div className="grid gap-2 text-sm text-text-dim sm:grid-cols-2">
              {footerNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="dot-marker rounded-lg border border-border bg-bg/40 px-4 py-2.5 transition duration-300 hover:border-teal/30 hover:text-teal"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-text-faint">
              Services
            </h3>
            <div className="grid gap-2 text-sm text-text-dim">
              {footerServices.map((service) => (
                <div
                  key={service}
                  className="dot-marker rounded-lg border border-border bg-bg/40 px-4 py-2.5 transition duration-300 hover:border-amber/30 hover:text-amber"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA section — simple bordered area */}
        <div className="mt-12 border-t border-border pt-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="section-label">
                Let&apos;s Build Something Intelligent Together
              </p>
              <p className="mt-4 text-base leading-8 text-text-dim sm:text-lg">
                Whether you need an AI-powered application, a modern web platform, or an intelligent automation solution, I&apos;m always excited to work on impactful projects.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-bg transition duration-300 hover:bg-amber/85"
              >
                Start a Project
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-bg/40 px-6 py-3 text-sm font-semibold text-text transition duration-300 hover:border-teal/40 hover:text-teal"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* Social + copyright */}
        <div className="mt-10 border-t border-border pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2 text-text-dim">
              <p className="text-sm text-text/90">
                {footerContent.title}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg/40 text-text-dim transition duration-300 hover:border-teal/40 hover:text-teal"
                >
                  {getSocialIcon(link.label)}
                </a>
              ))}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactContent.email)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg/40 text-text-dim transition duration-300 hover:border-amber/40 hover:text-amber"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-6 border-t border-border/60 pt-6 font-mono text-xs text-text-faint md:flex md:items-center md:justify-between">
            <p>{footerContent.copyright}</p>
            <p className="mt-3 md:mt-0">{footerContent.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
