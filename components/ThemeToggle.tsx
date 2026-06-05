"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { NavChipButton } from "./ui/NavChip";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span className="nav-chip nav-chip-skeleton" aria-hidden="true">
        &nbsp;
      </span>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <NavChipButton
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
      <span>{isDark ? "Light" : "Dark"}</span>
    </NavChipButton>
  );
}
