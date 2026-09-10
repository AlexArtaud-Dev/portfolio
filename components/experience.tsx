"use client";

import { Award, Briefcase, Calendar, CheckCircle2, Code2, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { experience, education, certifications, openSource } from "@/lib/data";
import { formatDuration } from "@/lib/duration";
import { useLanguage, pick } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

export function Experience() {
  const { lang } = useLanguage();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only "now" to avoid SSR/CSR duration mismatch
    setNow(new Date());
  }, []);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <ScrollReveal className="text-center">
        <h2 className="glow-text gradient-text text-4xl font-bold md:text-5xl">{pick(lang, dict.experience.title)}</h2>
        <p className="mt-4 text-[var(--muted)]">{pick(lang, dict.experience.subtitle)}</p>
      </ScrollReveal>

      <div className="relative mt-16 space-y-8">
        <div className="timeline-line absolute left-5 top-2 hidden h-full w-px md:block" />
        {experience.map((entry, i) => (
          <ScrollReveal key={entry.org + entry.period.fr} delay={0.05 * i} className="relative md:pl-14">
            <span
              className="absolute left-[14px] top-[42px] hidden h-3 w-3 rounded-full ring-4 ring-[var(--background)] md:block"
              style={{ background: "var(--accent)" }}
            />
            <div className="glass-card rounded-2xl p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "var(--accent-soft)" }}
                  >
                    <Briefcase size={16} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-bold">{pick(lang, entry.role)}</h3>
                    <p className="text-sm text-[var(--accent)]">
                      {entry.org} · {entry.contract}
                      {now && <> · {formatDuration(entry.startDate, entry.endDate, now, lang)}</>}
                    </p>
                    {entry.location && <p className="text-xs text-[var(--muted)]">{pick(lang, entry.location)}</p>}
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                  <Calendar size={12} /> {pick(lang, entry.period)}
                </span>
              </div>

              <p className="mt-4 text-sm text-[var(--muted)]">{pick(lang, entry.description)}</p>

              <ul className="mt-4 space-y-2">
                {entry.points.map((point) => (
                  <li key={point.fr} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                    {pick(lang, point)}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.1} className="mt-6 flex items-center gap-3 rounded-2xl border border-dashed border-[var(--border)] p-4 md:ml-14">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
          style={{ background: "var(--accent-soft)" }}
        >
          <Code2 size={16} className="text-[var(--accent)]" />
        </div>
        <p className="text-sm text-[var(--muted)]">
          <span className="font-medium text-[var(--foreground)]">{pick(lang, openSource.since)}.</span>{" "}
          {pick(lang, openSource.text)}
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-20 text-center">
        <h3 className="text-2xl font-bold">{pick(lang, dict.experience.education)}</h3>
      </ScrollReveal>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {education.map((entry, i) => (
          <ScrollReveal key={entry.school} delay={0.05 * i}>
            <div className="glass-card h-full rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div
                  className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "var(--accent-soft)" }}
                >
                  <GraduationCap size={16} className="text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="font-bold">{pick(lang, entry.degree)}</h4>
                  <p className="text-sm text-[var(--accent)]">{entry.school}</p>
                  <p className="text-xs text-[var(--muted)]">
                    {pick(lang, entry.period)} · {pick(lang, entry.detail)}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {entry.points.map((point) => (
                  <li key={point.fr} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                    {pick(lang, point)}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-20 text-center">
        <h3 className="text-2xl font-bold">{pick(lang, dict.experience.certifications)}</h3>
      </ScrollReveal>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <ScrollReveal key={cert.name} delay={0.05 * i}>
            <div className="glass-card flex h-full items-start gap-3 rounded-2xl p-5">
              <div
                className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "var(--accent-soft)" }}
              >
                <Award size={16} className="text-[var(--accent)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold">{cert.name}</h4>
                <p className="text-sm text-[var(--accent)]">{cert.org}</p>
                <p className="text-xs text-[var(--muted)]">
                  {pick(lang, cert.date)}
                  {cert.credentialId ? ` · ID ${cert.credentialId}` : ""}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
