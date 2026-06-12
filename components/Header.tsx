"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LanguageToggle } from "./LanguageToggle";
import { useMessages, useSiteConfig } from "./LocaleProvider";
import { ThemeToggle } from "./ThemeToggle";
import { NavChipButton, NavChipLink } from "./ui/NavChip";

export function Header() {
  const { header } = useMessages();
  const siteConfig = useSiteConfig();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const syncViewport = () => {
      const desktop = media.matches;
      setIsDesktop(desktop);
      if (desktop) setMenuOpen(false);
    };

    syncViewport();
    media.addEventListener("change", syncViewport);
    return () => media.removeEventListener("change", syncViewport);
  }, []);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[var(--page-max-width)] items-center justify-between gap-4">
        <NavChipLink href="/" className="nav-chip-brand shrink-0">
          <Image
            src={siteConfig.logoNav}
            alt={siteConfig.name}
            width={52}
            height={52}
            className="site-logo"
            priority
          />
        </NavChipLink>

        <nav
          className="hidden flex-1 items-center justify-center gap-2 lg:flex"
          aria-label={header.mainNavAriaLabel}
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
          <LanguageToggle />
          <ThemeToggle />
          {!isDesktop && (
            <NavChipButton
              className="site-header-menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
            >
              <span>{header.menu}</span>
              <span
                className="inline-block h-1.5 w-1.5 rotate-45 border border-current"
                aria-hidden="true"
              />
            </NavChipButton>
          )}
        </div>
      </div>

      {menuOpen && !isDesktop && (
        <nav
          id="site-menu"
          className="site-header-menu mx-auto mt-4 max-w-[var(--page-max-width)] lg:absolute lg:top-[68px] lg:mt-0"
          aria-label={header.siteMenuAriaLabel}
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
