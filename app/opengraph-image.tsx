import { ImageResponse } from "next/og";
import { defaultLocale, getMessages } from "@/lib/i18n";
import { buildSiteConfig } from "@/lib/site-config";

const messages = getMessages(defaultLocale);
const siteConfig = buildSiteConfig(messages);

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #070708 0%, #0f1a3d 55%, #1954ec 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            opacity: 0.85,
            marginBottom: 24,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 64,
            lineHeight: 1.1,
            fontWeight: 300,
            maxWidth: 900,
          }}
        >
          {messages.og.headline}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 26,
            opacity: 0.8,
            maxWidth: 760,
            lineHeight: 1.4,
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
