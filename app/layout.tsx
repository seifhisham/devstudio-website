import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, Inter, Noto_Sans_Arabic } from "next/font/google";
import { LocaleProvider } from "@/components/LocaleProvider";
import { StructuredData } from "@/components/StructuredData";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${notoArabic.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-body antialiased">
        <LocaleProvider>
          <StructuredData />
          <ThemeProvider>{children}</ThemeProvider>
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
