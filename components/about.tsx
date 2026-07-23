"use client";

import { Briefcase, Code2, FolderGit2 } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { stats } from "@/lib/data";
import { useLanguage, pick } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

const icons = [Briefcase, FolderGit2, Code2];

export function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <ScrollReveal className="text-center">
        <h2 className="glow-text gradient-text text-4xl font-bold md:text-5xl">{pick(lang, dict.about.title)}</h2>
        <p className="mt-4 text-[var(--muted)]">{pick(lang, dict.about.subtitle)}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="mx-auto mt-12 max-w-3xl space-y-4 text-center text-[var(--muted)]">
        <p>{pick(lang, dict.about.p1)}</p>
        <p>{pick(lang, dict.about.p2)}</p>
        <p>{pick(lang, dict.about.p3)}</p>
      </ScrollReveal>

      <ScrollReveal
        delay={0.2}
        className="glass-card mt-12 grid grid-cols-1 divide-y divide-[var(--border)] rounded-2xl sm:grid-cols-3 sm:divide-x sm:divide-y-0"
      >
        {stats.map((s, i) => {
          const Icon = icons[i];
          return (
            <div key={s.value} className="flex items-center justify-center gap-4 p-6">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "var(--accent-soft)" }}
              >
                <Icon size={18} className="text-[var(--accent)]" />
              </div>
              <div className="text-left">
                <p className="gradient-text text-2xl font-bold">{s.value}</p>
                <p className="text-sm text-[var(--muted)]">{pick(lang, s.label)}</p>
              </div>
            </div>
          );
        })}
      </ScrollReveal>
    </section>
  );
}
