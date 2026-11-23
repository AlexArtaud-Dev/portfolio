import type { Project } from "@/lib/data";
import { pick, type Lang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";
import { GithubIcon } from "./icons";
import { Logo } from "./logo";

export function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  return (
    <div className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl">
      <div
        className="relative flex h-40 items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, var(--accent-soft), transparent), var(--surface-solid)",
        }}
      >
        {project.featured && (
          <span
            className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ background: "var(--accent-gradient)" }}
          >
            {pick(lang, dict.projects.featured)}
          </span>
        )}
        <Logo
          name={project.logo}
          size={72}
          className="btn-transition drop-shadow-lg group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm text-[var(--muted)]">{pick(lang, project.description)}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="btn-transition mt-5 flex w-fit items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-medium hover:border-[var(--accent)]"
        >
          <GithubIcon size={14} /> {pick(lang, dict.projects.viewCode)}
        </a>
      </div>
    </div>
  );
}
