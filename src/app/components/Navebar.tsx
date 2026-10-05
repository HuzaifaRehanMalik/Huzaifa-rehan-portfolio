"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { askAssistant } from "@/lib/assistant";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-bg/85 text-text backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 lg:px-12">
        <Link
          href="/#home"
          aria-label={`${profile.name}, back to top`}
          className="flex items-center gap-3"
          onClick={(event) => handleNavClick(event, "home")}
        >
          <Image
            src={profile.logo}
            alt=""
            width={52}
            height={52}
            loading="eager"
            className="h-9 w-9 rounded-full border border-border object-cover"
          />
          <span className="font-display text-base font-bold tracking-tight">
            {profile.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.slice(1).map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                onClick={(event) => handleNavClick(event, item.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-text text-bg"
                    : "text-text-dim hover:bg-surface hover:text-text"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => askAssistant()}
            className="ml-3 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition hover:bg-accent-deep"
          >
            Ask my assistant
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text transition hover:border-text md:hidden"
        >
          <span className="relative h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-current transition ${
                isOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-4 bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-0.5 w-4 bg-current transition ${
                isOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`grid border-t border-border/60 px-4 transition-all duration-300 md:hidden ${
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
                  tabIndex={isOpen ? 0 : -1}
                  onClick={(event) => handleNavClick(event, item.id)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                    isActive ? "bg-text text-bg" : "text-text-dim hover:bg-surface hover:text-text"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              type="button"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => {
                setIsOpen(false);
                askAssistant();
              }}
              className="mt-2 rounded-xl bg-accent px-4 py-3 text-left text-base font-semibold text-accent-ink"
            >
              Ask my assistant
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
