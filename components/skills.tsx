"use client";

import Marquee from "react-fast-marquee";
import {
  Activity,
  Building2,
  Cloud,
  Code2,
  Database,
  FileText,
  GitBranch,
  KeyRound,
  KanbanSquare,
  ShieldCheck,
  SquareTerminal,
  Workflow,
  Zap,
} from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { skills, type Skill, type SkillGlyph } from "@/lib/data";
import { useLanguage, pick } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

const glyphs: Record<SkillGlyph, typeof Code2> = {
  code: Code2,
  building: Building2,
  file: FileText,
  cloud: Cloud,
  zap: Zap,
  pipeline: Workflow,
  board: KanbanSquare,
  terminal: SquareTerminal,
  key: KeyRound,
  shield: ShieldCheck,
  activity: Activity,
  database: Database,
  git: GitBranch,
};

function SkillIcon({ skill }: { skill: Skill }) {
  if (!skill.slug) {
    const Glyph = glyphs[skill.glyph ?? "code"];
    return (
      <Glyph
        size={14}
        className={skill.color ? undefined : "text-[var(--accent)]"}
        style={skill.color ? { color: `#${skill.color}` } : undefined}
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element -- tiny external brand icons from a public CDN, next/image adds no value
    <img
      src={`https://cdn.simpleicons.org/${skill.slug}${skill.color ? `/${skill.color}` : ""}`}
      alt=""
      width={14}
      height={14}
      className="h-3.5 w-3.5"
      loading="lazy"
    />
  );
}

export function Skills() {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <ScrollReveal className="text-center">
        <h2 className="glow-text gradient-text text-4xl font-bold md:text-5xl">{pick(lang, dict.skills.title)}</h2>
        <p className="mt-4 text-[var(--muted)]">{pick(lang, dict.skills.subtitle)}</p>
      </ScrollReveal>

      <div className="mt-16 space-y-10">
        {skills.map((category, i) => (
          <ScrollReveal key={category.title.fr} delay={0.05 * i}>
            <p className="mb-4 text-center text-sm font-medium text-[var(--accent)]">{pick(lang, category.title)}</p>
            <Marquee
              speed={35}
              pauseOnHover
              gradient
              gradientColor="var(--background)"
              gradientWidth={64}
              autoFill
            >
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="glass-card mx-2 flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm"
                >
                  <SkillIcon skill={skill} />
                  {skill.name}
                </span>
              ))}
            </Marquee>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
