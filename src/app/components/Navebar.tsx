"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import type { NavSectionId } from "@/types/portfolio";

export default function Navebar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(navItems);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = useCallback((sectionId: NavSectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const scrollToHash = () => {
      const sectionId = window.location.hash.slice(1) as NavSectionId;

      if (!sectionId) {
        return;
      }

      requestAnimationFrame(() => scrollToSection(sectionId));
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname, scrollToSection]);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: NavSectionId,
  ) => {
    event.preventDefault();
    setIsOpen(false);

    const targetHref = `/#${sectionId}` as const;

    if (pathname !== "/") {
      router.push(targetHref, { scroll: false });
      return;
    }

    window.history.pushState(null, "", targetHref);
    scrollToSection(sectionId);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 text-white shadow-lg shadow-black/20 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <Link
          href="/#home"
          aria-label="Home"
          className="group flex items-center gap-3"
          onClick={(event) => handleNavClick(event, "home")}
        >
          <Image
            src={profile.logo}
            alt={profile.logoAlt}
            width={52}
            height={52}
            className="h-12 w-12 rounded-full border border-white/20 object-cover transition duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 font-bold md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.id)}
                className={`rounded-full px-4 py-2 text-sm transition duration-300 ${
                  isActive
                    ? "bg-emerald-300 text-black shadow-lg shadow-emerald-300/20"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white transition hover:border-emerald-300/50 hover:bg-emerald-300/10 md:hidden"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`grid border-t border-white/10 bg-black/80 px-5 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? "grid-rows-[1fr] py-3" : "grid-rows-[0fr] py-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.id)}
                  className={`rounded-2xl px-4 py-3 text-center font-bold transition ${
                    isActive
                      ? "bg-emerald-300 text-black"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
