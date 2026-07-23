"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { GithubIcon, LinkedinIcon, DiscordIcon } from "./icons";
import { useLanguage, pick } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

const CONTACT_EMAIL = "smlartaudalexandre@gmail.com";
const DISCORD_TAG = "alex3227";

export function Contact() {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_TAG);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable, ignore silently
    }
  };

  const links = [
    {
      key: "github",
      icon: GithubIcon,
      label: "GitHub",
      value: "AlexArtaud-Dev",
      href: "https://github.com/AlexArtaud-Dev",
      external: true,
    },
    {
      key: "linkedin",
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "alexandre-artaud",
      href: "https://www.linkedin.com/in/alexandre-artaud/",
      external: true,
    },
    {
      key: "email",
      icon: Mail,
      label: pick(lang, dict.contact.emailLabel),
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      external: false,
    },
  ] as const;

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28">
      <ScrollReveal className="text-center">
        <span
          className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
          style={{ background: "rgba(52, 211, 153, 0.12)", color: "var(--status-green)" }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: "var(--status-green)" }} />
          {pick(lang, dict.contact.status)}
        </span>
        <h2 className="glow-text gradient-text text-4xl font-bold md:text-5xl">{pick(lang, dict.contact.title)}</h2>
        <p className="mt-4 text-[var(--muted)]">{pick(lang, dict.contact.subtitle)}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="glass-card mt-12 rounded-2xl p-8">
        <p className="text-center text-sm text-[var(--muted)]">{pick(lang, dict.contact.blurb)}</p>

        <p className="mb-4 mt-10 text-center text-sm text-[var(--muted)]">{pick(lang, dict.contact.findMe)}</p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {links.map(({ key, icon: Icon, label, value, href, external }) => (
            <a
              key={key}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="btn-transition group flex items-center gap-4 rounded-xl border border-[var(--border)] p-4 hover:border-[var(--accent)]"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "var(--accent-soft)" }}
              >
                <Icon size={18} className="text-[var(--accent)]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium">{label}</span>
                <span className="block truncate text-xs text-[var(--muted)]">{value}</span>
              </span>
              <ArrowUpRight
                size={16}
                className="btn-transition shrink-0 text-[var(--muted)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
              />
            </a>
          ))}

          <button
            type="button"
            onClick={copyDiscord}
            className="btn-transition group flex items-center gap-4 rounded-xl border border-[var(--border)] p-4 text-left hover:border-[var(--accent)]"
          >
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ background: "var(--accent-soft)" }}
            >
              <DiscordIcon size={18} className="text-[var(--accent)]" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium">{pick(lang, dict.contact.discordLabel)}</span>
              <span className="block truncate text-xs text-[var(--muted)]">{DISCORD_TAG}</span>
            </span>
            {copied ? (
              <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-[var(--status-green)]">
                <Check size={14} /> {pick(lang, dict.contact.discordCopied)}
              </span>
            ) : (
              <ArrowUpRight
                size={16}
                className="btn-transition shrink-0 text-[var(--muted)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
              />
            )}
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
