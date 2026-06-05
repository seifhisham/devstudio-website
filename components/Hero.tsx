import { siteConfig } from "@/lib/site-config";
import { ParticleField } from "./ParticleField";
import { OutlineButton } from "./ui/OutlineButton";

export function Hero() {
  return (
    <section className="hero-panel section-panel relative min-h-screen overflow-hidden px-6 pb-24 pt-28 sm:px-10 lg:px-[80px]">
      <ParticleField />
      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-7rem)] w-full max-w-[var(--page-max-width)] flex-col justify-center">
        <h1 className="font-display max-w-3xl text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.13] text-pure-white">
          If you can{" "}
          <span className="accent-word">imagine it,</span> we can build it.
        </h1>
        <p className="mt-[var(--spacing-32)] max-w-[480px] font-body text-[15px] leading-[1.5] text-steel-gray">
          {siteConfig.description}
        </p>
        <div className="mt-[var(--spacing-59)] flex flex-wrap gap-[var(--spacing-23)]">
          <OutlineButton href="#contact">Get a quote</OutlineButton>
          <OutlineButton href="#portfolio">View our work</OutlineButton>
        </div>
        <div className="mt-[var(--spacing-99)] hidden sm:block">
          <p className="label-micro text-pure-white">Scroll to explore</p>
          <div className="ml-[2px] mt-4 h-[60px] w-px bg-pure-white" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
