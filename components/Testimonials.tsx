import { siteConfig } from "@/lib/site-config";
import { SectionLayout } from "./SectionLayout";

export function Testimonials() {
  return (
    <SectionLayout
      id="testimonials"
      showParticles={false}
      rightContent={
        <div className="flex flex-col gap-[var(--spacing-59)]">
          {siteConfig.testimonials.map((item) => (
            <blockquote
              key={item.author}
              className="border-t border-white/20 pt-[var(--spacing-32)]"
            >
              <p className="font-body text-[15px] leading-[1.5] text-pure-white">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-[var(--spacing-23)]">
                <cite className="not-italic">
                  <span className="font-body text-[13px] text-pure-white">
                    {item.author}
                  </span>
                  <span className="label-micro mt-1 block text-steel-gray">
                    {item.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      }
    >
      <h2 className="font-display text-[clamp(2.25rem,4vw,2.8125rem)] leading-[1.13] text-pure-white">
        Client
        <br />
        voices
      </h2>
      <p className="mt-[var(--spacing-32)] max-w-[480px] font-body text-[14px] leading-[1.5] text-steel-gray">
        Replace these with real testimonials as you complete projects for
        clients.
      </p>
    </SectionLayout>
  );
}
