import { site } from "@/content/site";
import { deck } from "@/content/deck";
import { MonoLabel } from "@/components/ui/mono-label";
import { Button } from "@/components/ui/button";

export function formatUsd(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function PricingBlock() {
  const slide = deck.find((s) => s.kind === "pricing");
  const includes = slide && slide.kind === "pricing" ? slide.includes : [];
  const note = slide && slide.kind === "pricing" ? slide.note : "";
  return (
    <div className="grid gap-px border border-rule bg-rule lg:grid-cols-[1fr_1.4fr]">
      <div className="bg-paper p-8">
        <MonoLabel>One cohort</MonoLabel>
        <p className="tabular mt-4 font-mono text-5xl text-ink">{formatUsd(site.pricing.cohortUsd)}</p>
        <p className="mt-2 font-mono text-xs text-ink-muted">
          {site.pricing.weeks} weeks &middot; {site.pricing.cohortSize} &middot; one system shipped
        </p>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{note}</p>
        <div className="mt-8">
          <Button href="/contact">Ask about a cohort</Button>
        </div>
      </div>
      <div className="bg-paper p-8">
        <MonoLabel>Included</MonoLabel>
        <ul className="mt-4 divide-y divide-rule border-t border-rule">
          {includes.map((item) => (
            <li key={item} className="flex gap-3 py-3 text-base text-ink">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
