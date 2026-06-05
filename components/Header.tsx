"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-abyss-black/80 px-6 py-8 backdrop-blur-sm sm:px-10 lg:px-[80px]">
      <div className="mx-auto flex max-w-[var(--page-max-width)] items-center justify-between">
        <Link href="/" className="label-micro text-pure-white hover:opacity-70">
          {siteConfig.name.toUpperCase()}
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="label-micro text-pure-white hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="label-micro flex items-center gap-3 text-pure-white hover:opacity-70"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
        >
          Menu
          <span className="inline-block h-2 w-2 rotate-45 border border-pure-white" aria-hidden="true" />
        </button>
      </div>

      {menuOpen && (
        <nav
          id="site-menu"
          className="mx-auto mt-6 max-w-[var(--page-max-width)] border border-white/20 bg-abyss-black/95 p-[var(--card-padding)] lg:absolute lg:right-[80px] lg:top-[72px] lg:mt-0 lg:w-64"
          aria-label="Site menu"
        >
          <ul className="flex flex-col gap-[var(--spacing-23)]">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-[13px] tracking-[0.2em] uppercase text-pure-white hover:opacity-70"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="font-body text-[13px] tracking-[0.2em] uppercase text-electric-cobalt hover:opacity-70"
                onClick={() => setMenuOpen(false)}
              >
                Get a quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
