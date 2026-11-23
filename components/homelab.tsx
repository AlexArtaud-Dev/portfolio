"use client";

import { Cpu, ExternalLink, Server, ShieldCheck, Sparkles } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { Logo } from "./logo";
import { homelab, type Skill } from "@/lib/data";
import { useLanguage, pick } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

function Badge({ skill }: { skill: Skill }) {
  return (
    <span className="glass-card flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm">
      {skill.slug ? (
        // eslint-disable-next-line @next/next/no-img-element -- tiny external brand icons from a public CDN, next/image adds no value
        <img
          src={`https://cdn.simpleicons.org/${skill.slug}${skill.color ? `/${skill.color}` : ""}`}
          alt=""
          width={14}
          height={14}
          className="h-3.5 w-3.5"
          loading="lazy"
        />
      ) : (
        <Server size={14} className="text-[var(--accent)]" />
      )}
      {skill.name}
    </span>
  );
}

export function Homelab() {
  const { lang } = useLanguage();

  return (
    <section id="homelab" className="mx-auto max-w-6xl px-6 py-28">
      <ScrollReveal className="text-center">
        <h2 className="glow-text gradient-text text-4xl font-bold md:text-5xl">{pick(lang, dict.homelab.title)}</h2>
        <p className="mt-4 text-[var(--muted)]">{pick(lang, dict.homelab.subtitle)}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="glass-card mt-12 rounded-2xl p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-[var(--accent)]">{homelab.name}</h3>
            <span className="text-xs text-[var(--muted)]">({homelab.fullName})</span>
          </div>
          <span className="text-xs text-[var(--muted)]">{pick(lang, homelab.since)}</span>
        </div>

        <p className="mt-4 text-sm text-[var(--muted)]">{pick(lang, homelab.intro)}</p>

        <div className="mt-8">
          <p className="mb-3 flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
            <Cpu size={14} /> {pick(lang, dict.homelab.specs)}
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {homelab.specs.map((spec) => (
              <div key={spec.label} className="rounded-xl border border-[var(--border)] p-3 text-center">
                <p className="text-xs text-[var(--muted)]">{spec.label}</p>
                <p className="mt-1 text-sm font-medium">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <p className="flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
            <Server size={14} /> {pick(lang, dict.homelab.stack)}
          </p>
          {homelab.stackCategories.map((category) => (
            <div key={category.title.fr}>
              <p className="mb-2 text-xs text-[var(--muted)]">{pick(lang, category.title)}</p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item.name} skill={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="mb-3 text-sm font-medium text-[var(--accent)]">{pick(lang, dict.homelab.apps)}</p>
          <div className="flex flex-wrap gap-2">
            {homelab.apps.map((app) => (
              <Badge key={app.name} skill={app} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-3 flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
            <Sparkles size={14} /> {pick(lang, dict.homelab.ownApps)}
          </p>
          <div className="flex flex-wrap gap-2">
            {homelab.ownApps.map((app) => (
              <a
                key={app.name}
                href={app.href}
                target="_blank"
                rel="noreferrer"
                className="btn-transition flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium text-white hover:opacity-90"
                style={{ background: "var(--accent-gradient)" }}
              >
                <Logo name={app.logo} size={18} className="rounded-[5px]" />
                {app.name}
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-[var(--border)] p-4">
          <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
          <p className="text-sm text-[var(--muted)]">{pick(lang, homelab.resilience)}</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
