type CircleStatProps = {
  value: string;
  label: string;
  progress?: number;
};

export function CircleStat({ value, label, progress = 0.75 }: CircleStatProps) {
  const circumference = 2 * Math.PI * 88;
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="flex flex-col items-start">
      <div className="relative h-[180px] w-[180px]">
        <svg className="h-full w-full" viewBox="0 0 180 180" fill="none" aria-hidden="true">
          <circle
            cx="90"
            cy="90"
            r="88"
            stroke="var(--accent)"
            strokeWidth="1"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 90 90)"
          />
        </svg>
        <span className="tabular-nums absolute inset-0 flex items-center justify-center font-body text-[52px] font-light text-pure-white">
          {value}
        </span>
      </div>
      <p className="label-micro mt-[var(--spacing-23)] max-w-[140px] text-steel-gray">
        {label}
      </p>
    </div>
  );
}
