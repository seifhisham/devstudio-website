export function SectionDivider() {
  return (
    <div
      className="section-separator mx-auto w-full max-w-[var(--page-max-width)]"
      aria-hidden="true"
    >
      <div className="section-separator-glow" />
      <div className="section-separator-line" />
    </div>
  );
}
