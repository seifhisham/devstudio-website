"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useMessages } from "./LocaleProvider";
import { NavChipButton } from "./ui/NavChip";

export function ThemeToggle() {
  const { theme: themeCopy } = useMessages();
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
      aria-label={isDark ? themeCopy.switchToLight : themeCopy.switchToDark}
    >
      <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
      <span>{isDark ? themeCopy.light : themeCopy.dark}</span>
    </NavChipButton>
  );
}
