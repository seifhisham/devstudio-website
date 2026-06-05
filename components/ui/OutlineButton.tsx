import Link from "next/link";

type OutlineButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function OutlineButton({ href, children, className = "" }: OutlineButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center border border-pure-white px-[25px] py-[20px] text-[13px] font-normal leading-[1.2] text-pure-white transition-opacity hover:opacity-70 ${className}`}
    >
      {children}
    </Link>
  );
}
