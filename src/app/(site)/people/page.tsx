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

      {people.map((p, i) => (
        <section key={p.slug} id={p.slug} className="border-b border-rule">
          <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <div>
              <Figure n={i + 1} label={p.headshotLabel} caption={p.name} aspect="aspect-[4/5]" priority={i === 0} />
            </div>
            <div>
              <MonoLabel>{p.title}</MonoLabel>
              <h2 className="mt-3 font-sans text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
                {p.name}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">{p.lede}</p>
              <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-ink-muted">
                {p.bio.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
              <ol className="mt-10 border-t border-ink">
                {p.career.map((c) => (
                  <li
                    key={`${c.org}-${c.when}`}
                    className="grid gap-2 border-b border-rule py-5 sm:grid-cols-[8rem_15rem_1fr] sm:gap-6"
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
              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.14em] text-ink hover:text-ink-muted"
              >
                LinkedIn &rarr;
              </a>
            </div>
          </Container>
        </section>
      ))}

      <ContactCta />
    </>
  );
}
