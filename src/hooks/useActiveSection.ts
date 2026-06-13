"use client";

import { useEffect, useState } from "react";
import type { NavItem, NavSectionId } from "@/types/portfolio";

export function useActiveSection(navItems: NavItem[]) {
  const [activeSection, setActiveSection] = useState<NavSectionId>("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const getActiveSection = () => {
      const viewportMid = window.innerHeight * 0.35;
      let current: NavSectionId = sections[0].id as NavSectionId;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportMid && rect.bottom > viewportMid) {
          current = section.id as NavSectionId;
          break;
        }
      }

      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 20) {
        current = sections[sections.length - 1].id as NavSectionId;
      }

      setActiveSection(current);
    };

    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      requestAnimationFrame(() => {
        getActiveSection();
        ticking = false;
      });
    };

    getActiveSection();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [navItems]);

  return activeSection;
}
