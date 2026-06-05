const PARTICLE_COUNT = 130;

const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  left: `${(i * 6.2 + (i % 7) * 4.1) % 100}%`,
  top: `${(i * 8.4 + (i % 9) * 5.8) % 100}%`,
  size: i % 3 === 0 ? 2.5 : i % 3 === 1 ? 1.75 : 1.25,
  delay: `${(i % 12) * 0.45}s`,
  opacity: 0.18 + (i % 7) * 0.06,
}));

export function ParticleField({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 right-0 w-full overflow-hidden lg:w-[45%] ${className}`}
      aria-hidden="true"
    >
      <div className="particle-field-glow absolute inset-0" />
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="particle-dot absolute rounded-full bg-pure-white"
          style={{
            left: p.left,
            top: p.top,
            width: `calc(${p.size}px * var(--particle-size-scale, 1))`,
            height: `calc(${p.size}px * var(--particle-size-scale, 1))`,
            opacity: `calc(${p.opacity} * var(--particle-dot-scale, 1))`,
            animationDelay: p.delay,
          }}
        />
      ))}
      <svg
        className="particle-ring absolute right-[10%] top-1/2 h-[180px] w-[180px] -translate-y-1/2 opacity-60"
        viewBox="0 0 180 180"
        fill="none"
      >
        <circle
          cx="90"
          cy="90"
          r="88"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeDasharray="414"
          strokeDashoffset="103"
          transform="rotate(-90 90 90)"
        />
      </svg>
    </div>
  );
}
