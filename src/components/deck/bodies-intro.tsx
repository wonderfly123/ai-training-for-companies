import { site } from "@/content/site";
import { metrics } from "@/content/metrics";
import type { Slide as SlideData } from "@/content/deck";
import { MonoLabel } from "@/components/ui/mono-label";
import { Figure } from "@/components/ui/figure";
import { SlideTitle } from "./slide";

type Extract<K extends SlideData["kind"]> = globalThis.Extract<SlideData, { kind: K }>;

export function TitleBody() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
      <div>
        <h1 className="mt-5 font-sans text-5xl font-medium leading-[0.98] tracking-[-0.03em] text-ink sm:text-6xl lg:text-7xl">
          {site.tagline}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          {site.description}
        </p>
      </div>
      <div className="border-t border-ink pt-4 font-mono text-xs leading-relaxed text-ink-muted">
        <p>{site.name}</p>
        <p>{site.founder.name}, {site.founder.title}</p>
        <p className="mt-4">14 slides. About six minutes.</p>
      </div>
    </div>
  );
}

export function ProblemBody({ slide }: { slide: Extract<"problem"> }) {
  return (
    <div>
      <SlideTitle>{slide.heading}</SlideTitle>
      <div className="mt-12 grid gap-px border border-rule bg-rule md:grid-cols-3">
        {slide.points.map((p) => (
          <div key={p.n} className="bg-paper p-6">
            <span className="font-mono text-xs text-accent">{p.n}</span>
            <h3 className="mt-3 font-sans text-2xl font-medium text-ink">{p.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FdeBody({ slide }: { slide: Extract<"fde"> }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
      <div>
        <SlideTitle>{slide.heading}</SlideTitle>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">{slide.definition}</p>
      </div>
      <ul className="self-end border-t border-ink">
        {slide.points.map((p, i) => (
          <li key={p} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-rule py-4">
            <span className="font-mono text-xs text-ink-muted pt-1">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-base leading-relaxed text-ink">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TeacherBody({ slide }: { slide: Extract<"teacher"> }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
      <div className="flex flex-col gap-6">
        <Figure
          label={`${site.founder.name}, headshot`}
          caption={site.founder.name}
          aspect="aspect-[4/5] max-h-[46vh]"
        />
      </div>
      <div>
        <SlideTitle>{slide.heading}</SlideTitle>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">{slide.body}</p>
        <div className="mt-8 grid grid-cols-2 gap-px border border-rule bg-rule sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-paper p-4">
              <p className="tabular font-mono text-2xl text-ink">{m.value}</p>
              <p className="mt-1 font-mono text-[10px] leading-snug text-ink-muted">{m.label}</p>
            </div>
          ))}
        </div>
        <dl className="mt-6 border-t border-ink">
          {slide.roles.map((r) => (
            <div key={r.org} className="grid gap-1 border-b border-rule py-2.5 sm:grid-cols-[14rem_1fr] sm:gap-4">
              <dt className="font-sans text-sm font-medium text-ink">{r.org}</dt>
              <dd className="text-sm text-ink-muted">
                {r.role}. {r.note}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
