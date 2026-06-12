"use client";

import Link from "next/link";
import { useMessages, useSiteConfig } from "./LocaleProvider";

export function Footer() {
  const { footer } = useMessages();
  const siteConfig = useSiteConfig();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer px-6 pb-[54px] pt-[var(--spacing-59)] sm:px-10 lg:px-[80px]">
      <div className="mx-auto flex max-w-[var(--page-max-width)] flex-col gap-[var(--spacing-32)] sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="label-micro text-pure-white">{siteConfig.name.toUpperCase()}</p>
          <p className="mt-[var(--spacing-23)] max-w-sm font-body text-[14px] leading-[1.5] text-steel-gray">
            {siteConfig.tagline}
          </p>
        </div>
        <nav aria-label={footer.navAriaLabel}>
          <ul className="flex flex-wrap gap-[var(--spacing-32)]">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="label-micro text-steel-gray hover:text-pure-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-[var(--spacing-59)] max-w-[var(--page-max-width)] font-body text-[13px] text-steel-gray">
        © {year} {siteConfig.name}. {footer.copyright}
      </p>
    </footer>
  );
}
