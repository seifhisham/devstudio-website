"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "./ThemeToggle";
import { NavChipButton, NavChipLink } from "./ui/NavChip";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 px-6 py-6 sm:px-10 lg:px-[80px]">
      <div className="mx-auto flex max-w-[var(--page-max-width)] items-center justify-between gap-4">
        <NavChipLink href="/" className="nav-chip-brand shrink-0">
          {siteConfig.name.toUpperCase()}
        </NavChipLink>

        <nav
          className="hidden flex-1 items-center justify-center gap-2 lg:flex"
          aria-label="Main navigation"
        >
          {siteConfig.nav.map((item) => (
            <NavChipLink
              key={item.href}
              href={item.href}
              accent={item.href === "#contact"}
            >
              {item.label}
            </NavChipLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <NavChipButton
            className="lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
          >
            <span>Menu</span>
            <span
              className="inline-block h-1.5 w-1.5 rotate-45 border border-current"
              aria-hidden="true"
            />
          </NavChipButton>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="site-menu"
          className="mx-auto mt-4 max-w-[var(--page-max-width)] lg:absolute lg:right-[80px] lg:top-[68px] lg:mt-0"
          aria-label="Site menu"
        >
          <div className="nav-chip-tray flex flex-wrap gap-2">
            {siteConfig.nav.map((item) => (
              <NavChipLink
                key={item.href}
                href={item.href}
                accent={item.href === "#contact"}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavChipLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
