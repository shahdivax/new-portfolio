"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = (mounted ? resolvedTheme : theme) ?? "system";
  const isDark = current === "dark";
  return (
    <button
      aria-label="Toggle theme"
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-card backdrop-blur-sm transition-colors hover:border-white/20"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="sr-only">Toggle theme</span>
      <Sun
        className="absolute h-4 w-4 text-amber transition-all duration-300 scale-100 opacity-100 dark:scale-0 dark:opacity-0"
      />
      <Moon
        className="absolute h-4 w-4 text-teal transition-all duration-300 scale-0 opacity-0 dark:scale-100 dark:opacity-100"
      />
    </button>
  );
}

