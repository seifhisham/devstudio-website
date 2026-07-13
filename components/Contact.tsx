"use client";

import { interpolate } from "@/lib/i18n";
import { getWhatsAppUrl } from "@/lib/site-config";
import { trackTikTokEvent } from "@/lib/tiktok-pixel";
import { FormEvent, useState } from "react";
import { useMessages, useSiteConfig } from "./LocaleProvider";
import { SectionLayout } from "./SectionLayout";

export function Contact() {
  const { contact: contactCopy, sections } = useMessages();
  const siteConfig = useSiteConfig();
  const sectionCopy = sections.contact;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString() ?? "";
    const email = data.get("email")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";
    const subject = encodeURIComponent(
      interpolate(contactCopy.mailtoSubject, { name }),
    );
    const body = encodeURIComponent(
      interpolate(contactCopy.mailtoBody, { name, email, message }),
    );
    trackTikTokEvent("Contact");
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <SectionLayout
      id="contact"
      showParticles={false}
      rightContent={
        <form
          onSubmit={handleSubmit}
          className="contact-form surface-card flex flex-col gap-[var(--spacing-32)] border p-[var(--card-padding)]"
          aria-label={contactCopy.formAriaLabel}
        >
          <div>
            <label htmlFor="name" className="contact-label label-micro">
              {contactCopy.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="field-input field-input-line mt-2 w-full border px-5 py-3.5 font-body text-[15px] font-normal text-pure-white outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="contact-label label-micro">
              {contactCopy.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="field-input field-input-line mt-2 w-full border px-5 py-3.5 font-body text-[15px] font-normal text-pure-white outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="contact-label label-micro">
              {contactCopy.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="field-input field-input-area mt-2 w-full resize-y border px-5 py-3.5 font-body text-[15px] font-normal text-pure-white outline-none"
            />
          </div>
          <button type="submit" className="contact-submit self-start">
            {contactCopy.submit}
          </button>
          {submitted && (
            <p className="font-body text-[14px] text-pure-white/90" role="status">
              {contactCopy.success}{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                onClick={() => trackTikTokEvent("Contact")}
                className="bidi-ltr text-pure-white underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          )}
        </form>
      }
    >
      <h2 className="font-display text-[clamp(2.25rem,4vw,2.8125rem)] leading-[1.13] text-pure-white">
        {sectionCopy.headingLine1}
        <br />
        {sectionCopy.headingLine2}
      </h2>
      <p className="mt-[var(--spacing-32)] max-w-[480px] font-body text-[14px] leading-[1.5] text-steel-gray">
        {sectionCopy.intro}
      </p>
      <div className="mt-[var(--spacing-59)] flex flex-col gap-[var(--spacing-23)]">
        <a
          href={`mailto:${siteConfig.email}`}
          onClick={() => trackTikTokEvent("Contact")}
          className="bidi-ltr font-body text-[14px] text-pure-white hover:opacity-70"
        >
          {siteConfig.email}
        </a>
        <div className="contact-phone-row flex flex-wrap items-center gap-3">
          <a
            href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
            onClick={() => trackTikTokEvent("Contact")}
            className="bidi-ltr font-body text-[14px] text-pure-white hover:opacity-70"
          >
            {siteConfig.phone}
          </a>
          <a
            href={getWhatsAppUrl(siteConfig.phone, contactCopy.whatsappMessage)}
            onClick={() => trackTikTokEvent("Contact")}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-chip"
            aria-label={contactCopy.whatsappAriaLabel}
          >
            <svg
              className="whatsapp-chip-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            {contactCopy.whatsapp}
          </a>
        </div>
        <div className="flex flex-wrap gap-[var(--spacing-32)]">
          <a
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="label-micro text-pure-white hover:opacity-70"
          >
            {contactCopy.socialTiktok}
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="label-micro text-pure-white hover:opacity-70"
          >
            {contactCopy.socialInstagram}
          </a>
        </div>
      </div>
    </SectionLayout>
  );
}
