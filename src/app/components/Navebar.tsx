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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/90 text-text backdrop-blur-md">
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
            className="h-10 w-10 rounded-full border border-border object-cover transition duration-300 group-hover:border-amber/50"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.id)}
                className={`relative py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition duration-300 ${
                  isActive
                    ? "text-amber nav-dot-active"
                    : "text-text-dim hover:text-text"
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
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface/60 text-text transition hover:border-amber/40 hover:text-amber md:hidden"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`grid border-t border-border/40 bg-bg/95 px-5 backdrop-blur-md transition-all duration-300 md:hidden ${
          isOpen ? "grid-rows-[1fr] py-3" : "grid-rows-[0fr] py-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.id)}
                  className={`border-l-2 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] transition ${
                    isActive
                      ? "border-amber bg-amber/5 text-amber"
                      : "border-transparent text-text-dim hover:border-border hover:text-text"
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
