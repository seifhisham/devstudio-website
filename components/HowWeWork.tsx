"use client";

import { useMessages, useSiteConfig } from "./LocaleProvider";
import { SectionLayout } from "./SectionLayout";

export function HowWeWork() {
  const { sections } = useMessages();
  const siteConfig = useSiteConfig();
  const copy = sections.process;

  return (
    <SectionLayout
      id="process"
      rightContent={
        <ol className="flex flex-col gap-[var(--spacing-59)]">
          {siteConfig.process.map((step) => (
            <li key={step.step} className="surface-card border p-[var(--card-padding)]">
              <p className="label-micro text-electric-cobalt">{step.step}</p>
              <h3 className="mt-[var(--spacing-23)] font-display text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.13] text-pure-white">
                {step.title}
              </h3>
              <p className="mt-[var(--spacing-23)] max-w-[480px] font-body text-[14px] leading-[1.5] text-steel-gray">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      }
    >
      <h2 className="font-display text-[clamp(2.25rem,4vw,2.8125rem)] leading-[1.13] text-pure-white">
        {copy.headingLine1}
        <br />
        {copy.headingLine2}
      </h2>
      <p className="mt-[var(--spacing-32)] max-w-[480px] font-body text-[14px] leading-[1.5] text-steel-gray">
        {copy.intro}
      </p>
    </SectionLayout>
  );
}
