"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useLanguage, pick } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

const linkIds = ["about", "canopy", "projects", "architecture", "experience", "skills", "homelab", "contact"] as const;

export function Navbar() {
  const { lang } = useLanguage();
  const [active, setActive] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = linkIds.map((id) => ({ id, label: pick(lang, dict.nav[id]) }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = linkIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`btn-transition sticky top-0 z-50 ${
        scrolled ? "border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-bold text-[var(--accent)]">
          AA
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`btn-transition relative text-sm ${
                  active === link.id ? "text-[var(--accent)]" : "text-[var(--foreground)]/80 hover:text-[var(--foreground)]"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-[var(--accent)]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="flex items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-[65px] bottom-0 z-40 flex flex-col items-center justify-center gap-8 bg-[var(--background)] lg:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`text-base ${active === link.id ? "text-[var(--accent)]" : "text-[var(--foreground)]"}`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
