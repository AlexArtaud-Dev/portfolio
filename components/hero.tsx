"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Glitch } from "./glitch";
import { useLanguage, pick } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

type Star = { top: number; left: number; size: number; delay: number };

function useStars(count: number) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only randomization to avoid SSR/CSR mismatch
    setStars(
      Array.from({ length: count }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4,
      }))
    );
  }, [count]);

  return stars;
}

const AVATAR_FRAME_CLASS =
  "relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--accent)] shadow-[0_0_60px_var(--accent-glow)] md:h-72 md:w-72";

function Avatar() {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setAvailable(true);
    img.onerror = () => setAvailable(false);
    img.src = "/avatar.jpg";
  }, []);

  if (!available) {
    return (
      <div className={AVATAR_FRAME_CLASS}>
        <span className="gradient-text text-6xl font-bold md:text-7xl">AA</span>
      </div>
    );
  }

  return (
    <Glitch className={AVATAR_FRAME_CLASS}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static local asset already verified client-side, next/image adds no value here */}
      <img src="/avatar.jpg" alt="Alexandre Artaud" className="h-full w-full object-cover" />
    </Glitch>
  );
}

function CvButton() {
  const [available, setAvailable] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    fetch("/cv.pdf", { method: "HEAD" })
      .then((res) => setAvailable(res.ok))
      .catch(() => setAvailable(false));
  }, []);

  if (!available) return null;

  return (
    <a
      href="/cv.pdf"
      download
      className="btn-transition flex items-center gap-2 rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-medium hover:border-[var(--accent)]"
    >
      <Download size={16} /> {pick(lang, dict.hero.ctaCv)}
    </a>
  );
}

export function Hero() {
  const stars = useStars(50);
  const { lang } = useLanguage();

  return (
    <section id="hero" className="bg-radial-hero relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="star-field">
        {stars.map((s, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="order-1 mx-auto md:order-2"
        >
          <Avatar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="order-2 md:order-1"
        >
          <p className="mb-3 text-sm text-[var(--muted)]">{pick(lang, dict.hero.greeting)}</p>
          <h1 className="glow-text text-5xl font-bold text-[var(--foreground)] md:text-6xl">
            Alexandre <span className="gradient-text">ARTAUD</span>
          </h1>
          <p className="mt-3 text-xl text-[var(--muted)]">{pick(lang, dict.hero.role)}</p>
          <p className="mt-4 max-w-md text-[var(--accent)]">{pick(lang, dict.hero.tagline)}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn-transition flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white"
              style={{ background: "var(--accent-gradient)" }}
            >
              {pick(lang, dict.hero.ctaProjects)} <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="btn-transition rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-medium hover:border-[var(--accent)]"
            >
              {pick(lang, dict.hero.ctaContact)}
            </a>
            <CvButton />
          </div>

          <div className="mt-8 flex gap-3">
            {[
              { icon: GithubIcon, href: "https://github.com/AlexArtaud-Dev", label: "GitHub" },
              { icon: LinkedinIcon, href: "https://www.linkedin.com/in/alexandre-artaud/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:smlartaudalexandre@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="btn-transition flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
