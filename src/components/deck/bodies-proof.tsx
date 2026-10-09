import type { CaseStudy } from "@/content/case-studies";
import type { Slide as SlideData } from "@/content/deck";
import { MonoLabel } from "@/components/ui/mono-label";
import { Figure } from "@/components/ui/figure";
import { SlideTitle } from "./slide";

type Extract<K extends SlideData["kind"]> = globalThis.Extract<SlideData, { kind: K }>;

function Label({ children }: { children: string }) {
  return <MonoLabel className="mb-2 block">{children}</MonoLabel>;
}

export function CaseStudyBody({ study, n }: { study: CaseStudy; n: number }) {
  return (
    <div className="flex h-full flex-col gap-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-3xl">
          <div className="flex gap-6">
            <MonoLabel accent>{study.company}</MonoLabel>
            <MonoLabel>{study.role}</MonoLabel>
          </div>
          <SlideTitle className="mt-3 lg:text-4xl">{study.title}</SlideTitle>
        </div>
        <dl className="flex gap-8">
          {study.numbers.slice(0, 3).map((s) => (
            <div key={s.label} className="min-w-[7rem]">
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">{s.label}</dt>
              <dd className="tabular mt-1 font-mono text-base text-ink">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="grid flex-1 gap-8 lg:grid-cols-[1fr_1.1fr_1fr]">
        <div className="flex flex-col gap-6">
          <div>
            <Label>Problem</Label>
            <p className="text-sm leading-relaxed text-ink">{study.problem}</p>
          </div>
          <div>
            <Label>Result</Label>
            <p className="text-sm leading-relaxed text-ink">{study.result}</p>
          </div>
        </div>
        <div>
          <Label>What was built</Label>
          <ol className="border-t border-ink">
            {study.built.slice(0, 4).map((b, i) => (
              <li key={i} className="grid grid-cols-[1.75rem_1fr] gap-2 border-b border-rule py-2">
                <span className="font-mono text-[11px] text-ink-muted pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[13px] leading-snug text-ink">{b}</span>
              </li>
            ))}
          </ol>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {study.stack.slice(0, 6).map((s) => (
              <span key={s} className="border border-rule px-1.5 py-0.5 font-mono text-[10px] text-ink-muted">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Figure n={n} label={study.screenshot.label} src={study.screenshot.src} aspect="aspect-[16/10]" />
          <div>
            <Label>What your team learns from it</Label>
            <ul className="space-y-1">
              {study.lessons.slice(0, 4).map((l) => (
                <li key={l} className="flex gap-2 text-[13px] leading-snug text-ink">
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent" aria-hidden />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EnterpriseBody({ slide }: { slide: Extract<"enterprise"> }) {
  return (
    <div>
      <SlideTitle>{slide.heading}</SlideTitle>
      <div className="mt-12 grid gap-px border border-rule bg-rule lg:grid-cols-3">
        {slide.items.map((it) => (
          <div key={it.org} className="bg-paper p-6">
            <h3 className="font-sans text-2xl font-medium text-ink">{it.org}</h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{it.role}</p>
            <ul className="mt-5 space-y-2 border-t border-ink pt-4">
              {it.proof.map((p) => (
                <li key={p} className="flex gap-2 text-sm leading-relaxed text-ink">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-accent" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
