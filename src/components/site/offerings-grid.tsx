import { offerings, formatUsd } from "@/content/offerings";
import { MonoLabel } from "@/components/ui/mono-label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface OfferingsGridProps {
  compact?: boolean;
}

export function OfferingsGrid({ compact = false }: OfferingsGridProps) {
  return (
    <div className="grid gap-px border border-rule bg-rule lg:grid-cols-3">
      {offerings.map((o) => (
        <div key={o.slug} id={o.slug} className="flex flex-col bg-paper p-8">
          <MonoLabel>{o.duration}</MonoLabel>
          <h3 className="mt-3 font-sans text-2xl font-medium tracking-[-0.01em] text-ink">
            <Link href={`/offerings/${o.slug}`} className="hover:text-ink-muted">{o.name}</Link>
          </h3>
          <p className="mt-1 font-mono text-xs text-ink-muted">{o.format}</p>
          <p className="mt-5 text-base leading-relaxed text-ink">{o.outcome}</p>
          <p className="mt-4 font-mono text-xs text-ink-muted">For: {o.who}</p>
          {!compact && (
            <ul className="mt-6 divide-y divide-rule border-t border-rule">
              {o.includes.map((item) => (
                <li key={item} className="py-2.5 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-auto pt-8">
            <p className="tabular font-mono text-3xl text-ink">{formatUsd(o.priceUsd)}</p>
            {!compact && (
              <div className="mt-5">
                <Button href={`/offerings/${o.slug}`} variant="ghost">
                  Details and what you walk away with
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
