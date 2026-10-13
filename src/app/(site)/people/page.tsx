import type { Metadata } from "next";
import { site } from "@/content/site";
import { about, people } from "@/content/about";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Figure } from "@/components/ui/figure";
import { MonoLabel } from "@/components/ui/mono-label";
import { ContactCta } from "@/components/site/contact-cta";

export const metadata: Metadata = {
  title: "People",
  description: `The team at ${site.name}: consultants who build AI systems for clients and teach client teams to build the next ones.`,
  alternates: { canonical: "/people" },
};

export default function PeoplePage() {
  return (
    <>
      <section className="border-b border-rule">
        <Container className="py-16 lg:py-24">
          <SectionHeading as="h1" eyebrow="People" title={about.lede} lede={about.intro} />
        </Container>
      </section>

      <section className="border-b border-rule">
        <Container className="grid gap-px border-x border-rule bg-rule py-0 sm:grid-cols-2">
          {people.map((p, i) => (
            <div key={p.slug} id={p.slug} className="flex flex-col bg-paper p-8 lg:p-10">
              <Figure label={p.headshotLabel} src={p.headshot} aspect="aspect-[4/5]" priority={i === 0} />
              <MonoLabel className="mt-8">{p.title}</MonoLabel>
              <h2 className="mt-2 font-sans text-3xl font-medium tracking-[-0.02em] text-ink">{p.name}</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">{p.lede}</p>
              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block pt-6 font-mono text-xs uppercase tracking-[0.14em] text-ink hover:text-ink-muted"
              >
                LinkedIn &rarr;
              </a>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-b border-rule">
        <Container className="py-20">
          <SectionHeading eyebrow="Background" title="Where the experience comes from" />
          {people.map((p) => {
            const career = p.career.filter((c) => !c.when.includes("PLACEHOLDER"));
            if (career.length === 0) return null;
            return (
              <div key={p.slug} className="mt-12">
                <MonoLabel>{p.name}</MonoLabel>
                <ol className="mt-3 border-t border-ink">
                  {career.map((c) => (
                    <li
                      key={`${c.org}-${c.when}`}
                      className="grid gap-2 border-b border-rule py-5 sm:grid-cols-[9rem_16rem_1fr] sm:gap-8"
                    >
                      <MonoLabel className="sm:pt-1.5">{c.when}</MonoLabel>
                      <div>
                        <p className="font-sans text-lg font-medium text-ink">{c.org}</p>
                        <p className="text-sm text-ink-muted">{c.role}</p>
                      </div>
                      <ul className="space-y-1 text-base text-ink-muted">
                        {c.notes.map((n) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
