"use client";

import { FiFileText, FiLinkedin, FiMail } from "react-icons/fi";
import { contactContent, socialLinks } from "@/data/portfolio";
import { useInViewport } from "@/hooks/useInViewport";

export default function ContactSection() {
  const { ref, inView } = useInViewport<HTMLDivElement>();
  const linkedIn = socialLinks.find((link) => link.label === "LinkedIn");

  return (
    <section
      id="contact"
      className="relative overflow-hidden scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl overflow-hidden rounded-card border border-border bg-surface/60 p-6 sm:p-8 lg:p-10 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Top accent — amber hairline */}
        <div className="absolute inset-x-0 top-0 h-px bg-amber/30" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="section-label">Get In Touch</span>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight text-text sm:text-6xl">
            {contactContent.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-text-dim sm:text-xl">
            {contactContent.description}
          </p>
        </div>

        {/* Connecting line between heading and cards */}
        <div className="mx-auto mt-8 h-10 w-px bg-gradient-to-b from-border to-transparent" />

        <div className="relative mt-4 grid grid-cols-1 gap-5 md:grid-cols-3">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactContent.email)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-card border border-border bg-bg/50 p-6 text-left transition duration-300 hover:border-amber/40 hover:bg-surface sm:p-8"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-border transition duration-300 group-hover:bg-amber/40" />
            <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-amber/20 bg-amber/8 text-amber transition duration-300 group-hover:bg-amber/15">
              <FiMail className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="mt-6 block font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-amber">
              {contactContent.emailLabel}
            </span>
            <span className="mt-2 block break-words text-lg font-bold text-text transition duration-300 group-hover:text-amber sm:text-xl">
              {contactContent.email}
            </span>
          </a>

          {linkedIn ? (
            <a
              href={linkedIn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-card border border-border bg-bg/50 p-6 text-left transition duration-300 hover:border-teal/40 hover:bg-surface sm:p-8"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-border transition duration-300 group-hover:bg-teal/40" />
              <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-teal/20 bg-teal/8 text-teal transition duration-300 group-hover:bg-teal/15">
                <FiLinkedin className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="mt-6 block font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
                {contactContent.linkedInLabel}
              </span>
              <span className="mt-2 block break-words text-lg font-bold text-text transition duration-300 group-hover:text-teal sm:text-xl">
                {contactContent.linkedInDisplayName}
              </span>
            </a>
          ) : null}

          <a
            href={contactContent.googleFormHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-card border border-border bg-bg/50 p-6 text-left transition duration-300 hover:border-amber/40 hover:bg-surface sm:p-8"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-border transition duration-300 group-hover:bg-amber/40" />
            <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-amber/20 bg-amber/8 text-amber transition duration-300 group-hover:bg-amber/15">
              <FiFileText className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="mt-6 block font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-amber">
              {contactContent.googleFormLabel}
            </span>
            <span className="mt-2 block break-words text-lg font-bold text-text transition duration-300 group-hover:text-amber sm:text-xl">
              Send project details
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
