"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { ProjectCard } from "./project-card";
import { projects } from "@/lib/data";
import { useLanguage, pick } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

export function Projects() {
  const { lang } = useLanguage();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <ScrollReveal className="text-center">
        <h2 className="glow-text gradient-text text-4xl font-bold md:text-5xl">{pick(lang, dict.projects.title)}</h2>
        <p className="mt-4 text-[var(--muted)]">{pick(lang, dict.projects.subtitle)}</p>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={0.06 * i}>
            <ProjectCard project={project} lang={lang} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2} className="mt-12 flex justify-center">
        <a
          href="https://github.com/AlexArtaud-Dev?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="btn-transition flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white"
          style={{ background: "var(--accent-gradient)" }}
        >
          {pick(lang, dict.projects.seeAll)} <ArrowRight size={16} />
        </a>
      </ScrollReveal>
    </section>
  );
}
