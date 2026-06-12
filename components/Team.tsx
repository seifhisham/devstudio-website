"use client";

import { useMessages, useSiteConfig } from "./LocaleProvider";
import { SectionLayout } from "./SectionLayout";
import { CircleStat } from "./ui/CircleStat";

export function Team() {
  const { sections } = useMessages();
  const siteConfig = useSiteConfig();
  const copy = sections.team;

  return (
    <SectionLayout
      id="team"
      rightContent={
        <div className="grid gap-[var(--spacing-32)] sm:grid-cols-2">
          {siteConfig.team.map((member) => (
            <article
              key={member.name}
              className="surface-card border p-[var(--card-padding)]"
            >
              <div
                className="mb-[var(--spacing-23)] flex h-16 w-16 items-center justify-center border border-pure-white/20 bg-surface-band font-display text-2xl text-electric-cobalt"
                aria-hidden="true"
              >
                {member.name.charAt(0)}
              </div>
              <h3 className="font-display text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.13] text-pure-white">
                {member.name}
              </h3>
              <p className="label-micro mt-2 text-electric-cobalt">{member.role}</p>
              <p className="mt-[var(--spacing-23)] font-body text-[14px] leading-[1.5] text-steel-gray">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
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
      <div className="mt-[var(--spacing-59)] flex flex-wrap gap-[var(--spacing-59)]">
        {siteConfig.stats.map((stat) => (
          <CircleStat
            key={stat.label}
            value={stat.value}
            label={stat.label}
            progress={stat.progress}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
