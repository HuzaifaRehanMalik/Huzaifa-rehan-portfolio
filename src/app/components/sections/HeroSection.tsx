import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen scroll-mt-24 px-5 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      <div id="about" className="pointer-events-none absolute -top-24" aria-hidden="true" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="reveal">
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            {profile.heroTitle}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.heroDescription}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-[440px] lg:max-w-[520px]">
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-emerald-300/20 via-cyan-300/10 to-white/5 blur-2xl" />
          <div className="relative rounded-3xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <Image
              src={profile.image}
              alt={profile.imageAlt}
              width={620}
              height={720}
              priority
              className="aspect-[4/5] w-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
