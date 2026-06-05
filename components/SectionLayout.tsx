import { ParticleField } from "./ParticleField";

type SectionLayoutProps = {
  id?: string;
  children: React.ReactNode;
  rightContent?: React.ReactNode;
  showParticles?: boolean;
  className?: string;
};

export function SectionLayout({
  id,
  children,
  rightContent,
  showParticles = true,
  className = "",
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-6 py-[var(--spacing-59)] sm:px-10 lg:px-[80px] lg:py-[var(--spacing-99)] ${className}`}
    >
      {showParticles && <ParticleField />}
      <div className="relative z-10 mx-auto grid max-w-[var(--page-max-width)] gap-[var(--spacing-32)] lg:grid-cols-2 lg:gap-[var(--spacing-59)]">
        <div className="max-w-xl">{children}</div>
        {rightContent && (
          <div className="flex flex-col justify-center lg:pl-[var(--spacing-32)]">
            {rightContent}
          </div>
        )}
      </div>
    </section>
  );
}
