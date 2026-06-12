import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export type Messages = typeof en;

export const messagesByLocale: Record<Locale, Messages> = { en, ar };

export const defaultLocale: Locale = "en";

export const LOCALE_STORAGE_KEY = "arco-locale";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale];
}

export function interpolate(
  template: string,
  values: Record<string, string>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}
