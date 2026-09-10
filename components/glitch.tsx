"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { useGlitch } from "react-powerglitch";

type GlitchProps = {
  children: ReactNode;
  className?: string;
};

const MIN_DELAY_MS = 3500;
const MAX_DELAY_MS = 6500;

export function Glitch({ children, className }: GlitchProps) {
  const { ref, startGlitch } = useGlitch({
    playMode: "manual",
    timing: { duration: 800, iterations: 1, easing: "ease-in-out" },
    glitchTimeSpan: { start: 0.15, end: 0.85 },
    shake: { velocity: 10, amplitudeX: 0.08, amplitudeY: 0.08 },
    slice: { count: 5, velocity: 14, minHeight: 0.02, maxHeight: 0.1, hueRotate: true },
  });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const scheduleNext = () => {
      const delay = MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS);
      timeoutId = setTimeout(() => {
        if (cancelled) return;
        startGlitch();
        scheduleNext();
      }, delay);
    };

    scheduleNext();
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [startGlitch]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
