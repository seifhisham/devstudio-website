"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { SectionLayout } from "./SectionLayout";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString() ?? "";
    const email = data.get("email")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
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
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="contact-label label-micro">
              Name
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
              Email
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
              Project details
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
            Send message
          </button>
          {submitted && (
            <p className="font-body text-[14px] text-pure-white/90" role="status">
              Your email client should open shortly. If it does not, write to{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-pure-white underline">
                {siteConfig.email}
              </a>
              .
            </p>
          )}
        </form>
      }
    >
      <h2 className="font-display text-[clamp(2.25rem,4vw,2.8125rem)] leading-[1.13] text-pure-white">
        Start a
        <br />
        project
      </h2>
      <p className="mt-[var(--spacing-32)] max-w-[480px] font-body text-[14px] leading-[1.5] text-steel-gray">
        Tell us about your website or Flutter app idea. We typically reply within
        one business day.
      </p>
      <div className="mt-[var(--spacing-59)] flex flex-col gap-[var(--spacing-23)]">
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-body text-[14px] text-pure-white hover:opacity-70"
        >
          {siteConfig.email}
        </a>
        <a
          href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
          className="font-body text-[14px] text-pure-white hover:opacity-70"
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
            TikTok
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="label-micro text-pure-white hover:opacity-70"
          >
            Instagram
          </a>
        </div>
      </div>
    </SectionLayout>
  );
}
