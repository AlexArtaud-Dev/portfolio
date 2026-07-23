"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch language"
      className="btn-transition flex h-9 items-center justify-center rounded-full border border-[var(--border)] px-3 text-xs font-medium uppercase text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );
}
