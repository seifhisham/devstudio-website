"use client";

import { type Locale } from "@/lib/i18n";
import { useLocale, useMessages } from "./LocaleProvider";
import { NavChipButton } from "./ui/NavChip";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  const t = useMessages();

  const nextLocale: Locale = locale === "en" ? "ar" : "en";

  return (
    <NavChipButton
      onClick={() => setLocale(nextLocale)}
      aria-label={
        locale === "en" ? t.language.switchToArabic : t.language.switchToEnglish
      }
    >
      <span aria-hidden="true">🌐</span>
      <span>{locale === "en" ? t.language.ar : t.language.en}</span>
    </NavChipButton>
  );
}
