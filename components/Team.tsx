import { siteConfig } from "@/lib/site-config";
import { SectionLayout } from "./SectionLayout";
import { CircleStat } from "./ui/CircleStat";

export function Team() {
  return (
    <SectionLayout
      id="team"
      rightContent={
        <div className="grid gap-[var(--spacing-32)] sm:grid-cols-2">
          {siteConfig.team.map((member) => (
            <article
              key={member.name}
              className="border-t border-white/20 pt-[var(--spacing-32)]"
            >
              <div
                className="mb-[var(--spacing-23)] flex h-16 w-16 items-center justify-center border border-white/20 font-display text-2xl text-steel-gray"
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
        The
        <br />
        team
      </h2>
      <p className="mt-[var(--spacing-32)] max-w-[480px] font-body text-[14px] leading-[1.5] text-steel-gray">
        A small group of developers and designers who collaborate on client
        projects. Swap these placeholders with your real names and roles.
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
