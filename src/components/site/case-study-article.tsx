import type { CaseStudy } from "@/content/case-studies";
import { Container } from "@/components/ui/container";
import { MonoLabel } from "@/components/ui/mono-label";
import { Figure } from "@/components/ui/figure";
import { KvTable } from "@/components/ui/kv-table";
import { NumberedList } from "@/components/ui/numbered-list";

interface CaseStudyArticleProps {
  study: CaseStudy;
  n: number;
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 border-t border-ink py-8 lg:grid-cols-[12rem_1fr] lg:gap-10">
      <MonoLabel>{label}</MonoLabel>
      <div>{children}</div>
    </div>
  );
}

export function CaseStudyArticle({ study, n }: CaseStudyArticleProps) {
  return (
    <article>
      <Container className="py-16 lg:py-20">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <MonoLabel>Case {String(n).padStart(2, "0")}</MonoLabel>
          <MonoLabel>{study.company}</MonoLabel>
          <MonoLabel>{study.role}</MonoLabel>
        </div>
        <h1 className="mt-4 max-w-3xl font-sans text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
          {study.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{study.summary}</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Figure n={n} label={study.screenshot.label} src={study.screenshot.src} caption={study.screenshot.label} aspect="aspect-[16/10]" />
          <KvTable rows={study.numbers} />
        </div>

        <div className="mt-12">
          <Block label="Problem">
            <p className="max-w-2xl text-lg leading-relaxed text-ink">{study.problem}</p>
          </Block>
          <Block label="What was built">
            <NumberedList items={study.built} />
          </Block>
          <Block label="Stack">
            <ul className="flex flex-wrap gap-2">
              {study.stack.map((s) => (
                <li key={s} className="border border-rule px-2.5 py-1 font-mono text-xs text-ink">
                  {s}
                </li>
              ))}
            </ul>
          </Block>
          <Block label="Result">
            <p className="max-w-2xl text-lg leading-relaxed text-ink">{study.result}</p>
          </Block>
          <Block label="What your team learns from it">
            <NumberedList items={study.lessons} dense />
          </Block>
        </div>
      </Container>
    </article>
  );
}
