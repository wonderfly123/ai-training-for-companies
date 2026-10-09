import { program } from "@/content/program";
import { site } from "@/content/site";
import type { Slide as SlideData } from "@/content/deck";
import { MonoLabel } from "@/components/ui/mono-label";
import { formatUsd } from "@/components/site/pricing-block";
import { SlideTitle } from "./slide";

type Extract<K extends SlideData["kind"]> = globalThis.Extract<SlideData, { kind: K }>;

export function ProgramBody({ slide }: { slide: Extract<"program"> }) {
  return (
    <div>
      <SlideTitle>{slide.heading}</SlideTitle>
      <p className="mt-4 max-w-2xl text-base text-ink-muted">{program.summary}</p>
      <ol className="mt-8 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
        {program.weeks.map((w) => (
          <li key={w.n} className="bg-paper p-4">
            <span className="font-mono text-[11px] text-accent">WEEK {String(w.n).padStart(2, "0")}</span>
            <h3 className="mt-1 font-sans text-lg font-medium text-ink">{w.title}</h3>
            <p className="mt-2 text-[13px] leading-snug text-ink-muted">{w.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function OutcomesBody({ slide }: { slide: Extract<"outcomes"> }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
      <div>
        <SlideTitle>{slide.heading}</SlideTitle>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">{slide.intro}</p>
      </div>
      <ol className="border-t border-ink">
        {program.outcomes.map((o, i) => (
          <li key={o} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-rule py-3">
            <span className="font-mono text-xs text-ink-muted pt-1">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-base leading-snug text-ink">{o}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function PricingBody({ slide }: { slide: Extract<"pricing"> }) {
  return (
    <div>
      <SlideTitle>{slide.heading}</SlideTitle>
      <div className="mt-10 grid gap-px border border-rule bg-rule lg:grid-cols-[1fr_1.4fr]">
        <div className="bg-paper p-8">
          <MonoLabel>One cohort</MonoLabel>
          <p className="tabular mt-4 font-mono text-5xl text-ink lg:text-6xl">{formatUsd(site.pricing.cohortUsd)}</p>
          <p className="mt-3 font-mono text-xs text-ink-muted">
            {site.pricing.weeks} weeks &middot; {site.pricing.cohortSize} &middot; one system shipped
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-muted">{slide.note}</p>
        </div>
        <div className="bg-paper p-8">
          <MonoLabel>Included</MonoLabel>
          <ul className="mt-4 divide-y divide-rule border-t border-rule">
            {slide.includes.map((item) => (
              <li key={item} className="flex gap-3 py-3 text-base text-ink">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function FitBody({ slide }: { slide: Extract<"fit"> }) {
  return (
    <div>
      <SlideTitle>{slide.heading}</SlideTitle>
      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <MonoLabel accent>A fit</MonoLabel>
          <ol className="mt-3 border-t border-ink">
            {program.fit.map((f, i) => (
              <li key={f} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-rule py-3">
                <span className="font-mono text-xs text-ink-muted pt-1">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base leading-snug text-ink">{f}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <MonoLabel>Not a fit</MonoLabel>
          <ol className="mt-3 border-t border-ink">
            {program.notFit.map((f, i) => (
              <li key={f} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-rule py-3">
                <span className="font-mono text-xs text-ink-muted pt-1">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base leading-snug text-ink-muted">{f}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export function NextBody({ slide }: { slide: Extract<"next"> }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
      <div>
        <MonoLabel accent>{slide.heading}</MonoLabel>
        <SlideTitle className="mt-4">{slide.body}</SlideTitle>
        <div className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-3">
          <a href={`mailto:${site.contact.email}`} className="font-mono text-xl text-ink underline-offset-4 hover:text-accent hover:underline">
            {site.contact.email}
          </a>
          <a href={site.founder.linkedin} className="font-mono text-sm text-ink-muted hover:text-accent" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="font-mono text-sm text-ink-muted">{site.url.replace("https://", "")}</span>
        </div>
      </div>
      <ol className="self-end border-t border-ink">
        {slide.steps.map((s, i) => (
          <li key={s} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-rule py-4">
            <span className="font-mono text-xs text-ink-muted pt-1">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-lg text-ink">{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
