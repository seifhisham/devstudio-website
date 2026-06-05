const PARTICLES = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: `${(i * 7.3) % 100}%`,
  top: `${(i * 11.7 + (i % 5) * 8) % 100}%`,
  size: i % 3 === 0 ? 2 : i % 3 === 1 ? 1.5 : 1,
  delay: `${(i % 12) * 0.5}s`,
  opacity: 0.15 + (i % 7) * 0.08,
}));

export function ParticleField({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 right-0 w-full overflow-hidden lg:w-[45%] ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "var(--gradient-electric-cobalt)",
          maskImage:
            "radial-gradient(ellipse 70% 80% at 70% 50%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 80% at 70% 50%, black 20%, transparent 70%)",
        }}
      />
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="particle-dot absolute rounded-full bg-pure-white"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay,
          }}
        />
      ))}
      <svg
        className="absolute right-[10%] top-1/2 h-[180px] w-[180px] -translate-y-1/2 opacity-60"
        viewBox="0 0 180 180"
        fill="none"
      >
        <circle
          cx="90"
          cy="90"
          r="88"
          stroke="#1954ec"
          strokeWidth="1"
          strokeDasharray="414"
          strokeDashoffset="103"
          transform="rotate(-90 90 90)"
        />
      </svg>
    </div>
  );
}
