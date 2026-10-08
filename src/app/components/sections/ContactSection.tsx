import { FiArrowUpRight, FiFileText, FiLinkedin, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";
import Reveal from "@/components/Reveal";
import { contactContent, socialLinks } from "@/data/portfolio";

export default function ContactSection() {
  const linkedIn = socialLinks.find((link) => link.label === "LinkedIn");

  const channels: {
    label: string;
    value: string;
    href: string;
    icon: IconType;
  }[] = [
    {
      label: contactContent.emailLabel,
      value: contactContent.email,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactContent.email)}`,
      icon: FiMail,
    },
    ...(linkedIn
      ? [
          {
            label: contactContent.linkedInLabel,
            value: contactContent.linkedInDisplayName,
            href: linkedIn.href,
            icon: FiLinkedin,
          },
        ]
      : []),
    {
      label: contactContent.googleFormLabel,
      value: "Send project details",
      href: contactContent.googleFormHref,
      icon: FiFileText,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 px-4 pb-8 sm:px-8 lg:px-12">
      <Reveal>
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-10 overflow-hidden rounded-[32px] bg-accent px-5 py-12 text-accent-ink sm:gap-12 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:px-16 lg:py-20">
          <div className="min-w-0">
            <h2 className="max-w-[12ch] font-display text-[2.5rem] font-extrabold leading-[0.95] tracking-headline min-[400px]:text-5xl sm:text-7xl">
              {contactContent.title}
            </h2>
            <p className="mt-6 max-w-[44ch] text-base leading-7 text-accent-ink/80 sm:text-lg sm:leading-8">
              {contactContent.description}
            </p>
          </div>

          <ul className="min-w-0 self-end border-b border-accent-ink/20">
            {channels.map(({ label, value, href, icon: Icon }) => (
              <li key={label} className="border-t border-accent-ink/20">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-5 focus-visible:outline-accent-ink sm:gap-5 sm:py-6"
                >
                  <Icon
                    className="h-6 w-6 shrink-0 text-accent-ink/70"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-accent-ink/70">
                      {label}
                    </span>
                    <span className="mt-1 block text-lg font-bold [overflow-wrap:anywhere] sm:text-2xl">
                      {value}
                    </span>
                  </span>
                  <FiArrowUpRight
                    className="h-6 w-6 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
