"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type LanguageContextValue = {
  lang: Lang;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    if (stored === "fr" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restoring persisted preference on mount
      setLang(stored);
    }
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next: Lang = prev === "fr" ? "en" : "fr";
      window.localStorage.setItem("lang", next);
      return next;
    });
  };

  return <LanguageContext.Provider value={{ lang, toggle }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export type Bi = { fr: string; en: string };

export function pick(lang: Lang, value: Bi): string {
  return value[lang];
}
