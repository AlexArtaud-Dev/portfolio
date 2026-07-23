"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount flag needed to avoid hydration mismatch on themed icon
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label="Changer de thème"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="btn-transition flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
