"use client";

import {
  defaultLocale,
  getMessages,
  isLocale,
  LOCALE_STORAGE_KEY,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { buildSiteConfig, type SiteConfig } from "@/lib/site-config";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
  siteConfig: SiteConfig;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored && isLocale(stored) ? stored : defaultLocale;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLocaleState(readStoredLocale());
    setReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    document.cookie = `${LOCALE_STORAGE_KEY}=${next};path=/;max-age=31536000;SameSite=Lax`;
  }, []);

  const messages = useMemo(() => getMessages(locale), [locale]);
  const siteConfig = useMemo(() => buildSiteConfig(messages), [messages]);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = messages.lang;
    document.documentElement.dir = messages.dir;
  }, [messages.dir, messages.lang, ready]);

  const value = useMemo(
    () => ({ locale, setLocale, messages, siteConfig }),
    [locale, messages, setLocale, siteConfig],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}

export function useMessages() {
  return useLocale().messages;
}

export function useSiteConfig() {
  return useLocale().siteConfig;
}
