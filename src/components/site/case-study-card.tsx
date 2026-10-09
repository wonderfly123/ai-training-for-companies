import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";
import { MonoLabel } from "@/components/ui/mono-label";

interface CaseStudyCardProps {
  study: CaseStudy;
  n: number;
}

export function CaseStudyCard({ study, n }: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex flex-col justify-between gap-6 bg-paper p-6 transition-colors hover:bg-paper-deep"
    >
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <MonoLabel>{String(n).padStart(2, "0")}</MonoLabel>
          <MonoLabel>{study.role}</MonoLabel>
        </div>
        <p className="mt-4 font-sans text-sm font-semibold text-ink">{study.company}</p>
        <h3 className="mt-1 font-sans text-xl font-medium leading-snug tracking-[-0.01em] text-ink">
          {study.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{study.summary}</p>
      </div>
      <div className="flex">
        <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.14em] text-ink group-hover:text-accent">
          Read &rarr;
        </span>
      </div>
    </Link>
  );
}
