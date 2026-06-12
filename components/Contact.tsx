"use client";

import { interpolate } from "@/lib/i18n";
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
          className="bidi-ltr font-body text-[14px] text-pure-white hover:opacity-70"
        >
          {siteConfig.email}
        </a>
        <a
          href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
          className="bidi-ltr font-body text-[14px] text-pure-white hover:opacity-70"
        >
          {siteConfig.phone}
        </a>
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
