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
          className="flex flex-col gap-[var(--spacing-32)]"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="label-micro text-steel-gray">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full border border-white/20 bg-transparent px-4 py-3 font-body text-[14px] text-pure-white outline-none focus:border-electric-cobalt"
            />
          </div>
          <div>
            <label htmlFor="email" className="label-micro text-steel-gray">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full border border-white/20 bg-transparent px-4 py-3 font-body text-[14px] text-pure-white outline-none focus:border-electric-cobalt"
            />
          </div>
          <div>
            <label htmlFor="message" className="label-micro text-steel-gray">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-y border border-white/20 bg-transparent px-4 py-3 font-body text-[14px] text-pure-white outline-none focus:border-electric-cobalt"
            />
          </div>
          <button
            type="submit"
            className="self-start border border-pure-white px-[25px] py-[20px] font-body text-[13px] text-pure-white transition-opacity hover:opacity-70"
          >
            Send message
          </button>
          {submitted && (
            <p className="font-body text-[14px] text-steel-gray" role="status">
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
