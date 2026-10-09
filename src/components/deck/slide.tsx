import type { ReactNode } from "react";
import { site } from "@/content/site";

interface SlideProps {
  n: number;
  total: number;
  children: ReactNode;
  /** Section label printed in the header, e.g. "Case 02". */
  section?: string;
  ruled?: boolean;
}

/** One slide: a viewport-high page with a mono header and footer. */
export function Slide({ n, total, children, section, ruled = false }: SlideProps) {
  return (
    <section
      id={String(n)}
      data-slide={n}
      className={`slide relative flex min-h-screen snap-start flex-col border-b border-rule px-6 py-6 sm:px-12 sm:py-8 lg:px-16 ${
        ruled ? "ruled" : ""
      }`}
      aria-label={`Slide ${n} of ${total}`}
    >
      <header className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
        <span>{site.name}</span>
        <span>{section}</span>
        <span className="tabular">
          {String(n).padStart(2, "0")} / {total}
        </span>
      </header>
      <div className="flex flex-1 flex-col justify-center py-8">{children}</div>
      <footer className="flex items-baseline justify-between font-mono text-[11px] text-ink-muted">
        <span>{site.contact.email}</span>
        <span>{site.url.replace("https://", "")}</span>
      </footer>
    </section>
  );
}

export function SlideTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`max-w-4xl font-sans text-3xl font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}
