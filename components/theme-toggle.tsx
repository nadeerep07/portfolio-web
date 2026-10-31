"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "./icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-white/50 dark:bg-slate-800/50 border border-white/60 dark:border-white/10" />
    );
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/60 dark:bg-slate-800/80 backdrop-blur-md border border-white/70 dark:border-white/10 shadow-inner text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-200"
    >
      {resolvedTheme === "dark" ? <MoonIcon size={15} /> : <SunIcon size={15} />}
    </button>
  );
}
