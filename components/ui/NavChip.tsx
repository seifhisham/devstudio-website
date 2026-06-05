import Link from "next/link";

type NavChipBaseProps = {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
};

type NavChipLinkProps = NavChipBaseProps & {
  href: string;
  onClick?: () => void;
};

type NavChipButtonProps = NavChipBaseProps & {
  onClick?: () => void;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
  "aria-label"?: string;
};

export function NavChipLink({
  href,
  children,
  className = "",
  accent = false,
  onClick,
}: NavChipLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`nav-chip ${accent ? "nav-chip-accent" : ""} ${className}`}
    >
      {children}
    </Link>
  );
}

export function NavChipButton({
  children,
  className = "",
  accent = false,
  onClick,
  "aria-expanded": ariaExpanded,
  "aria-controls": ariaControls,
  "aria-label": ariaLabel,
}: NavChipButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      className={`nav-chip ${accent ? "nav-chip-accent" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
