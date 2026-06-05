import { siteConfig } from "@/lib/site-config";
import { SectionLayout } from "./SectionLayout";

export function Portfolio() {
  return (
    <SectionLayout
      id="portfolio"
      rightContent={
        <div className="grid gap-[var(--spacing-32)]">
          {siteConfig.portfolio.map((project) => (
            <article
              key={project.title}
              className="surface-card border p-[var(--card-padding)]"
            >
              <p className="label-micro text-electric-cobalt">{project.category}</p>
              <h3 className="mt-[var(--spacing-23)] font-display text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.13] text-pure-white">
                {project.title}
              </h3>
              <p className="mt-[var(--spacing-23)] font-body text-[14px] leading-[1.5] text-steel-gray">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      }
    >
      <h2 className="font-display text-[clamp(2.25rem,4vw,2.8125rem)] leading-[1.13] text-pure-white">
        Selected
        <br />
        work
      </h2>
      <p className="mt-[var(--spacing-32)] max-w-[480px] font-body text-[14px] leading-[1.5] text-steel-gray">
        Placeholder projects you can replace with real client work as you grow.
        Mix web and Flutter to show the range of what your team delivers.
      </p>
    </SectionLayout>
  );
}
