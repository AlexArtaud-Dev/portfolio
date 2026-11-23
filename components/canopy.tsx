"use client";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Container,
  Database,
  Eye,
  FileCode,
  Globe,
  HardDrive,
  KeyRound,
  LayoutDashboard,
  Monitor,
  Plus,
  Puzzle,
  Share2,
  ShieldCheck,
  Sparkles,
  Undo2,
  Users,
} from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";
import { GithubIcon } from "./icons";
import { Logo } from "./logo";
import { canopy } from "@/lib/data";
import { useLanguage, pick, type Bi } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.55, ease: EASE } },
};

/** Staggered reveal driven by the expanding container */
function Reveal({ children, className }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

const featureIcons = {
  activity: Activity,
  undo: Undo2,
  share: Share2,
  users: Users,
  eye: Eye,
  layout: LayoutDashboard,
} as const;

function SubHeading({ children, icon: Icon }: { children: React.ReactNode; icon: typeof Activity }) {
  return (
    <h3 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
      <Icon size={16} /> {children}
    </h3>
  );
}

function FlowNode({ icon: Icon, title, caption, highlight }: { icon: typeof Activity; title: string; caption: string; highlight?: boolean }) {
  return (
    <div
      className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border px-4 py-3"
      style={{
        borderColor: highlight ? "var(--accent)" : "var(--border)",
        background: highlight ? "var(--accent-soft)" : "transparent",
      }}
    >
      <Icon size={18} className="shrink-0 text-[var(--accent)]" />
      <div className="min-w-0">
        <p className="font-mono text-sm font-semibold">{title}</p>
        <p className="truncate text-xs text-[var(--muted)]">{caption}</p>
      </div>
    </div>
  );
}

function FlowArrow({ label }: { label?: string }) {
  return (
    <div className="flex shrink-0 flex-col items-center justify-center gap-0.5 text-[var(--muted)] md:px-1">
      <ArrowRight size={16} className="hidden md:block" />
      <ArrowDown size={16} className="md:hidden" />
      {label && <span className="whitespace-nowrap text-[10px] uppercase tracking-wide">{label}</span>}
    </div>
  );
}

export function Canopy() {
  const { lang } = useLanguage();
  const t = (v: Bi) => pick(lang, v);
  const [web, engine, contracts, database] = canopy.architecture;
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const toggle = () => setOpen((v) => !v);

  /** Collapse from the bottom of the details and bring the toggle back into view */
  const collapse = () => {
    const button = toggleRef.current;
    if (button) {
      const top = button.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <section id="canopy" className="mx-auto max-w-6xl px-6 py-28">
      <ScrollReveal className="text-center">
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-medium text-white"
          style={{ background: "var(--accent-gradient)" }}
        >
          {t(dict.canopy.eyebrow)}
        </span>
        <h2 className="glow-text gradient-text mt-4 text-4xl font-bold md:text-5xl">{canopy.name}</h2>
        <p className="mt-4 text-[var(--muted)]">{t(dict.canopy.subtitle)}</p>
      </ScrollReveal>

      {/* Overview */}
      <ScrollReveal delay={0.1} className="glass-card mt-12 rounded-2xl p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Logo name={canopy.logo} size={64} className="shrink-0 drop-shadow-lg" />
              <p className="text-base font-semibold leading-snug sm:text-lg md:text-xl">{t(canopy.tagline)}</p>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">{t(canopy.intro)}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={canopy.repo}
                target="_blank"
                rel="noreferrer"
                className="btn-transition flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                style={{ background: "var(--accent-gradient)" }}
              >
                <GithubIcon size={14} /> {t(dict.canopy.code)}
              </a>
              <a
                href={canopy.wiki}
                target="_blank"
                rel="noreferrer"
                className="btn-transition flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-medium hover:border-[var(--accent)]"
              >
                <BookOpen size={14} /> {t(dict.canopy.docs)}
              </a>
              <a
                href={canopy.dockerHub}
                target="_blank"
                rel="noreferrer"
                className="btn-transition flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-medium hover:border-[var(--accent)]"
              >
                <Container size={14} /> {t(dict.canopy.docker)}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:w-72">
            {canopy.stats.map((stat) => (
              <div key={stat.label.en} className="rounded-xl border border-[var(--border)] p-4 text-center">
                <p className="gradient-text text-2xl font-bold">{stat.value}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">{t(stat.label)}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Teaser + toggle */}
      <ScrollReveal delay={0.15} className="mt-8 flex flex-col items-center gap-5">
        <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
          <span>{t(dict.canopy.pluginsTeaser)}</span>
          <div className="flex -space-x-2">
            {canopy.plugins.map((plugin) => (
              <Logo key={plugin.id} name={plugin.logo} size={28} className="rounded-[7px] ring-2 ring-[var(--background)]" />
            ))}
            <span
              className="flex h-7 w-7 items-center justify-center rounded-[7px] border border-dashed ring-2 ring-[var(--background)]"
              style={{ borderColor: "var(--accent)", background: "var(--background)" }}
            >
              <Plus size={14} className="text-[var(--accent)]" />
            </span>
          </div>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="canopy-details"
          className="canopy-toggle group relative overflow-hidden rounded-full p-px"
        >
          <span className="canopy-toggle-ring" aria-hidden />
          <span className="relative flex items-center gap-2 rounded-full bg-[var(--background)] px-6 py-3 text-sm font-medium btn-transition group-hover:bg-[var(--surface-solid)]">
            <Sparkles size={15} className="text-[var(--accent)]" />
            {t(open ? dict.canopy.showLess : dict.canopy.learnMore)}
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.35, ease: EASE }} className="flex">
              <ChevronDown size={16} className="text-[var(--accent)]" />
            </motion.span>
          </span>
        </button>
      </ScrollReveal>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="canopy-details"
            key="canopy-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.6, ease: EASE }, opacity: { duration: 0.3 } } }}
            exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.45, ease: EASE }, opacity: { duration: 0.25 } } }}
            className="overflow-hidden"
          >
            <motion.div variants={container} initial="hidden" animate="show" exit="hidden" className="pb-2">
      {/* Features */}
      <Reveal className="mt-16">
        <SubHeading icon={Check}>{t(dict.canopy.features)}</SubHeading>
      </Reveal>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {canopy.features.map((feature, i) => {
          const Icon = featureIcons[feature.icon as keyof typeof featureIcons];
          return (
            <Reveal key={feature.title.en} delay={0.05 * i}>
              <div className="glass-card h-full rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: "var(--accent-soft)" }}
                  >
                    <Icon size={17} className="text-[var(--accent)]" />
                  </div>
                  <h4 className="font-semibold">{t(feature.title)}</h4>
                </div>
                <p className="mt-3 text-sm text-[var(--muted)]">{t(feature.text)}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Architecture */}
      <Reveal className="mt-16">
        <SubHeading icon={ShieldCheck}>{t(dict.canopy.architecture)}</SubHeading>
      </Reveal>
      <Reveal delay={0.1} className="glass-card mt-5 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
          <FlowNode icon={Globe} title={t(dict.canopy.browser)} caption="HTTPS" />
          <FlowArrow />
          <FlowNode icon={Monitor} title={web.name} caption="Next.js" highlight />
          <FlowArrow label={t(dict.canopy.signedToken)} />
          <FlowNode icon={KeyRound} title={engine.name} caption="Go" highlight />
          <FlowArrow />
          <FlowNode icon={HardDrive} title="files" caption="os.Root" />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            { node: web, icon: Monitor },
            { node: engine, icon: KeyRound },
            { node: contracts, icon: FileCode },
            { node: database, icon: Database },
          ].map(({ node, icon: Icon }) => (
            <div key={node.name} className="flex items-start gap-3 rounded-xl border border-[var(--border)] p-4">
              <Icon size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
              <div>
                <p className="text-sm">
                  <span className="font-mono font-semibold">{node.name}</span>
                  <span className="text-[var(--muted)]"> · {node.tech}</span>
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{t(node.role)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-start gap-3 rounded-xl p-4" style={{ background: "var(--accent-soft)" }}>
          <GithubIcon size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
          <p className="text-sm text-[var(--muted)]">
            <span className="font-semibold text-[var(--foreground)]">{t(dict.canopy.delivery)} · </span>
            {t(canopy.delivery)}
          </p>
        </div>
      </Reveal>

      {/* Plugins */}
      <Reveal className="mt-16">
        <SubHeading icon={Puzzle}>{t(dict.canopy.plugins)}</SubHeading>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{t(canopy.pluginsIntro)}</p>
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {canopy.plugins.map((plugin, i) => (
          <Reveal key={plugin.id} delay={0.08 * i}>
            <div className="glass-card group flex h-full flex-col rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <Logo name={plugin.logo} size={52} className="btn-transition shrink-0 drop-shadow-md group-hover:scale-105" />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h4 className="text-lg font-bold">{plugin.name}</h4>
                    <span className="font-mono text-xs text-[var(--muted)]">{plugin.version}</span>
                  </div>
                  <p className="text-xs text-[var(--muted)]">
                    {t(dict.canopy.officialPlugin)} · {plugin.language}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-[var(--muted)]">{t(plugin.description)}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {plugin.points.map((point) => (
                  <li key={point.en} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <Check size={14} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                    {t(point)}
                  </li>
                ))}
              </ul>
              <a
                href={plugin.href}
                target="_blank"
                rel="noreferrer"
                className="btn-transition mt-5 flex w-fit items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-medium hover:border-[var(--accent)]"
              >
                <GithubIcon size={14} /> {t(dict.projects.viewCode)}
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-6">
        <div className="rounded-2xl border border-dashed p-6 md:p-8" style={{ borderColor: "var(--accent)" }}>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-4">
                <div
                  className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[13px] border border-dashed"
                  style={{ borderColor: "var(--accent)", background: "var(--accent-soft)" }}
                >
                  <Plus size={24} className="text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{t(canopy.genericity.title)}</h4>
                  <p className="text-xs text-[var(--muted)]">{t(dict.canopy.yourPlugin)}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-[var(--muted)]">{t(canopy.genericity.text)}</p>
              <ol className="mt-5 space-y-3">
                {canopy.genericity.steps.map((step, i) => (
                    <li key={step.en} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                        style={{ background: "var(--accent-gradient)" }}
                      >
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{t(step)}</span>
                    </li>
                ))}
              </ol>
              <a
                href={canopy.pluginGuide}
                target="_blank"
                rel="noreferrer"
                className="btn-transition mt-6 flex w-fit items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                style={{ background: "var(--accent-gradient)" }}
              >
                <BookOpen size={14} /> {t(dict.canopy.pluginGuide)}
              </a>
            </div>

            <div className="min-w-0">
              <p className="mb-2 flex items-center gap-2 text-xs text-[var(--muted)]">
                <FileCode size={14} className="text-[var(--accent)]" />
                {t(dict.canopy.manifest)} · <span className="font-mono">canopy-plugin.yaml</span>
              </p>
              <pre className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--surface-solid)] p-4 font-mono text-xs leading-relaxed text-[var(--foreground)]/85">
                <code>{canopy.genericity.manifest}</code>
              </pre>
            </div>
          </div>
        </div>
      </Reveal>
              <Reveal className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={collapse}
                  className="btn-transition flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2 text-sm text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                >
                  <ChevronDown size={15} className="rotate-180 text-[var(--accent)]" />
                  {t(dict.canopy.showLess)}
                </button>
              </Reveal>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
