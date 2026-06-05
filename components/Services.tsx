import { siteConfig } from "@/lib/site-config";
import { SectionLayout } from "./SectionLayout";

export function Services() {
  return (
    <SectionLayout
      id="services"
      rightContent={
        <p className="max-w-[480px] font-body text-[14px] leading-[1.5] text-steel-gray">
          We build for clients who need a polished digital presence — whether
          that is a marketing website, a Flutter app, or both. Every project
          starts with clarity on scope, timeline, and budget.
        </p>
      }
    >
      <h2 className="font-display text-[clamp(2.25rem,4vw,2.8125rem)] leading-[1.13] text-pure-white">
        What we
        <br />
        build
      </h2>
      <div className="mt-[var(--spacing-59)] flex flex-col gap-[var(--spacing-59)]">
        {siteConfig.services.map((service) => (
          <article key={service.title} className="surface-card border p-[var(--card-padding)]">
            <h3 className="font-display text-[clamp(1.75rem,3vw,2.8125rem)] leading-[1.13] text-pure-white">
              {service.title}
              <br />
              <span className="text-steel-gray">{service.subtitle}</span>
            </h3>
            <p className="mt-[var(--spacing-23)] max-w-[480px] font-body text-[14px] leading-[1.5] text-steel-gray">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </SectionLayout>
  );
}
