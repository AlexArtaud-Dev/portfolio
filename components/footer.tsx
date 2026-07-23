"use client";

import { Heart, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, DiscordIcon } from "./icons";
import { useLanguage, pick } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-[var(--border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[var(--muted)] sm:flex-row">
        <p className="flex items-center gap-1.5">
          {pick(lang, dict.footer.madeWith)} <Heart size={13} className="text-[var(--accent)]" fill="currentColor" />{" "}
          {pick(lang, dict.footer.by)} <span className="font-medium text-[var(--foreground)]">Alexandre Artaud</span>
        </p>

        <div className="flex gap-3">
          {[
            { icon: GithubIcon, href: "https://github.com/AlexArtaud-Dev" },
            { icon: LinkedinIcon, href: "https://www.linkedin.com/in/alexandre-artaud/" },
            { icon: Mail, href: "mailto:smlartaudalexandre@gmail.com" },
            { icon: DiscordIcon, href: undefined },
          ].map(({ icon: Icon, href }, i) =>
            href ? (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="btn-transition flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Icon size={14} />
              </a>
            ) : (
              <span
                key={i}
                title="Discord: alex3227"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)]"
              >
                <Icon size={14} />
              </span>
            )
          )}
        </div>

        <p>© 2026 Alexandre Artaud. {pick(lang, dict.footer.rights)}</p>
      </div>
    </footer>
  );
}
