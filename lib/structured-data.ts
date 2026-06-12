import type { Messages } from "@/lib/i18n";
import { type SiteConfig } from "@/lib/site-config";

export function getStructuredData(siteConfig: SiteConfig, messages: Messages) {
  const phoneTel = siteConfig.phone.replace(/[^\d+]/g, "");

  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: phoneTel,
      image: `${siteConfig.url}/opengraph-image`,
      sameAs: [siteConfig.social.tiktok, siteConfig.social.instagram],
      areaServed: messages.schema.areaServed,
      serviceType: messages.schema.serviceTypes,
      knowsAbout: siteConfig.keywords,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: siteConfig.locale,
    },
  ];
}
