import type { Metadata } from "next";
import { site } from "@/content/site";
import { about } from "@/content/about";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Figure } from "@/components/ui/figure";
import { MonoLabel } from "@/components/ui/mono-label";
import { ContactCta } from "@/components/site/contact-cta";

export const metadata: Metadata = {
  title: `About ${site.founder.name}`,
  description: `${site.founder.name} co-owns three operating businesses and built the AI systems that run them. Solutions Engineer at Snowflake, formerly SnapLogic and Northrop Grumman. Based in ${site.founder.city}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="ruled border-b border-rule">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_1.5fr] lg:gap-20 lg:py-24">
          <Figure
            n={1}
            label={`${site.founder.name}, headshot`}
            caption={`${site.founder.name}, ${site.founder.city}`}
            aspect="aspect-[4/5]"
            priority
          />
          <div>
            <SectionHeading
              as="h1"
              eyebrow="About"
              title={site.founder.name}
              lede={about.lede}
            />
            <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-ink-muted">
              {about.bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-rule">
        <Container className="py-20">
          <SectionHeading eyebrow="Record" title="Where the proof comes from" />
          <ol className="mt-10 border-t border-ink">
            {about.career.map((c) => (
              <li
                key={`${c.org}-${c.when}`}
                className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[8rem_16rem_1fr] sm:gap-6"
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
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
