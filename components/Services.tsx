"use client";

import { useMessages, useSiteConfig } from "./LocaleProvider";
import { SectionLayout } from "./SectionLayout";
import { NavChipLink } from "./ui/NavChip";

export function Services() {
  const { sections } = useMessages();
  const siteConfig = useSiteConfig();
  const copy = sections.services;

  return (
    <SectionLayout
      id="services"
      rightContent={
        <p className="max-w-[480px] font-body text-[14px] leading-[1.5] text-steel-gray">
          {copy.intro}
        </p>
      }
    >
      <h2 className="font-display text-[clamp(2.25rem,4vw,2.8125rem)] leading-[1.13] text-pure-white">
        {copy.headingLine1}
        <br />
        {copy.headingLine2}
      </h2>
      <div className="mt-[var(--spacing-59)] flex flex-col gap-[var(--spacing-59)]">
        {siteConfig.services.map((service) => (
          <article key={service.id} className="surface-card border p-[var(--card-padding)]">
            <h3 className="font-display text-[clamp(1.75rem,3vw,2.8125rem)] leading-[1.13] text-pure-white">
              {service.title}
              <br />
              <span className="text-steel-gray">{service.subtitle}</span>
            </h3>
            <p className="mt-[var(--spacing-23)] max-w-[480px] font-body text-[14px] leading-[1.5] text-steel-gray">
              {service.description}
            </p>
            {service.showCta && (
              <NavChipLink href="#contact" accent className="mt-[var(--spacing-32)]">
                {copy.cta}
              </NavChipLink>
            )}
          </article>
        ))}
      </div>
    </SectionLayout>
  );
}
