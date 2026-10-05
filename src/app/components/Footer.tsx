import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import {
  contactContent,
  footerBranding,
  footerContent,
  footerNavItems,
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
  const links = [
    ...socialLinks,
    {
      label: "Email",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactContent.email)}`,
    },
  ];

  return (
    <footer className="px-4 pb-24 pt-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight text-text">
              {footerBranding.name}
            </p>
            <p className="mt-2 max-w-[44ch] text-base leading-7 text-text-dim">
              {footerBranding.description}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
            {footerNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-text-dim transition hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-text-dim">
            {footerContent.copyright}. {footerContent.tagline}
          </p>
          <div className="flex items-center gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-dim transition hover:border-text hover:text-text"
              >
                {getSocialIcon(link.label)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
