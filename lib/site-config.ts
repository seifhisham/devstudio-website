import type { Messages } from "@/lib/i18n";
import { defaultLocale, getMessages } from "@/lib/i18n";

export const siteAssets = {
  logo: "/Logo.png",
  logoNav: "/Logo-nav.png",
  url: "https://devstudio-website.vercel.app",
  email: "seifhish1118@gmail.com",
  phone: "+20 105 568 6490",
  social: {
    tiktok: "https://www.tiktok.com/@arco.studio8?_r=1&_t=ZS-97CfNOqGr4y",
    instagram: "https://www.instagram.com/arcostudiodev?igsh=MWx0YWJvN2J1aXZ0",
  },
} as const;

export function getWhatsAppUrl(phone: string, message?: string) {
  const base = `https://wa.me/${phone.replace(/\D/g, "")}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

const STAT_PROGRESS = [0.75, 0.3, 0.9] as const;

export type SiteConfig = ReturnType<typeof buildSiteConfig>;

export function buildSiteConfig(messages: Messages) {
  return {
    ...siteAssets,
    name: messages.site.name,
    tagline: messages.site.tagline,
    description: messages.site.description,
    keywords: messages.site.keywords,
    locale: messages.localeCode,
    lang: messages.lang,
    dir: messages.dir,
    nav: messages.nav,
    stats: messages.stats.map((stat, index) => ({
      ...stat,
      progress: STAT_PROGRESS[index],
    })),
    services: messages.services,
    process: messages.process,
    portfolio: messages.portfolio,
    team: messages.team,
    testimonials: messages.testimonials,
  };
}

/** Default English config for server metadata and static generation. */
export function getDefaultSiteConfig() {
  return buildSiteConfig(getMessages(defaultLocale));
}

export const siteConfig = getDefaultSiteConfig();
