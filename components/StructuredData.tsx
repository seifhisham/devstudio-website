"use client";

import { getStructuredData } from "@/lib/structured-data";
import { useLocale } from "./LocaleProvider";

export function StructuredData() {
  const { messages, siteConfig } = useLocale();
  const data = getStructuredData(siteConfig, messages);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
