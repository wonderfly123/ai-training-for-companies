import type { ReactNode } from "react";

interface MonoLabelProps {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}

/** Small uppercase monospace label, used for figure numbers and margin notes. */
export function MonoLabel({ children, className = "", accent = false }: MonoLabelProps) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
        accent ? "text-accent" : "text-ink-muted"
      } ${className}`}
    >
      {children}
    </span>
  );
}
