"use client";

import { Activity, CheckCircle2, Layers, Shield } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { architecture, type ArchitectureIcon } from "@/lib/data";
import { useLanguage, pick } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

const icons: Record<ArchitectureIcon, typeof Layers> = {
  layers: Layers,
  activity: Activity,
  shield: Shield,
};

export function Architecture() {
  const { lang } = useLanguage();

  return (
    <section id="architecture" className="mx-auto max-w-6xl px-6 py-28">
      <ScrollReveal className="text-center">
        <h2 className="glow-text gradient-text text-4xl font-bold md:text-5xl">
          {pick(lang, dict.architecture.title)}
        </h2>
        <p className="mt-4 text-[var(--muted)]">{pick(lang, dict.architecture.subtitle)}</p>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {architecture.map((pillar, i) => {
          const Icon = icons[pillar.icon];
          return (
            <ScrollReveal key={pillar.title.fr} delay={0.08 * i}>
              <div className="glass-card h-full rounded-2xl p-6">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "var(--accent-soft)" }}
                >
                  <Icon size={20} className="text-[var(--accent)]" />
                </div>
                <h3 className="mt-4 font-bold">{pick(lang, pillar.title)}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{pick(lang, pillar.description)}</p>
                <ul className="mt-4 space-y-2">
                  {pillar.points.map((point) => (
                    <li key={point.fr} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                      {pick(lang, point)}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
