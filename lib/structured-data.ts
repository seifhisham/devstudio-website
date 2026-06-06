import { siteConfig } from "@/lib/site-config";

export function getStructuredData() {
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
      areaServed: "Worldwide",
      serviceType: [
        "Web Development",
        "Flutter Mobile Development",
        "UI/UX Design",
        "Software Maintenance",
      ],
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
