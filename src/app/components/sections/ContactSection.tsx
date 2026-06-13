import { FiFileText, FiLinkedin, FiMail } from "react-icons/fi";
import { contactContent, socialLinks } from "@/data/portfolio";

export default function ContactSection() {
  const linkedIn = socialLinks.find((link) => link.label === "LinkedIn");

  return (
    <section
      id="contact"
      className="relative overflow-hidden scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="absolute left-1/2 top-16 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-300/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-emerald-950/20 backdrop-blur-2xl sm:p-8 lg:p-10">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-6xl">
            {contactContent.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-slate-300 sm:text-xl">
            {contactContent.description}
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactContent.email)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-6 text-left shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/60 hover:bg-white/[0.08] sm:p-8"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200 shadow-lg shadow-emerald-950/20 transition duration-300 group-hover:scale-105 group-hover:bg-emerald-300 group-hover:text-slate-950">
              <FiMail className="h-7 w-7" aria-hidden="true" />
            </span>
            <span className="mt-7 block text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
              {contactContent.emailLabel}
            </span>
            <span className="mt-3 block break-words text-xl font-bold text-white transition duration-300 group-hover:text-emerald-200 sm:text-2xl">
              {contactContent.email}
            </span>
          </a>

          {linkedIn ? (
            <a
              href={linkedIn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-6 text-left shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/60 hover:bg-white/[0.08] sm:p-8"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200 shadow-lg shadow-emerald-950/20 transition duration-300 group-hover:scale-105 group-hover:bg-emerald-300 group-hover:text-slate-950">
                <FiLinkedin className="h-7 w-7" aria-hidden="true" />
              </span>
              <span className="mt-7 block text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                {contactContent.linkedInLabel}
              </span>
              <span className="mt-3 block break-words text-xl font-bold text-white transition duration-300 group-hover:text-emerald-200 sm:text-2xl">
                {contactContent.linkedInDisplayName}
              </span>
            </a>
          ) : null}

          <a
            href={contactContent.googleFormHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-6 text-left shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/60 hover:bg-white/[0.08] sm:p-8"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200 shadow-lg shadow-emerald-950/20 transition duration-300 group-hover:scale-105 group-hover:bg-emerald-300 group-hover:text-slate-950">
              <FiFileText className="h-7 w-7" aria-hidden="true" />
            </span>
            <span className="mt-7 block text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
              {contactContent.googleFormLabel}
            </span>
            <span className="mt-3 block break-words text-xl font-bold text-white transition duration-300 group-hover:text-emerald-200 sm:text-2xl">
              Send project details
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
