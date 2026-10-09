import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 border px-5 py-3 font-sans text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50";
const variants = {
  primary: "border-ink bg-ink text-paper hover:bg-accent hover:border-accent",
  ghost: "border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
};

export function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  disabled,
  className = "",
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
