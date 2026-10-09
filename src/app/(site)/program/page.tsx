import type { Metadata } from "next";
import { program } from "@/content/program";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { NumberedList } from "@/components/ui/numbered-list";
import { MonoLabel } from "@/components/ui/mono-label";
import { WeekList } from "@/components/site/week-list";
import { PricingBlock } from "@/components/site/pricing-block";
import { ContactCta } from "@/components/site/contact-cta";

export const metadata: Metadata = {
  title: "AI Engineer Training Program for Companies, 8-Week Cohort",
  description: `An ${site.pricing.weeks}-week cohort that trains ${site.pricing.cohortSize} inside your company to build and own an AI system. Week-by-week curriculum, outcomes, and pricing.`,
  alternates: { canonical: "/program" },
};

export default function ProgramPage() {
  return (
    <>
      <section className="ruled border-b border-rule">
        <Container className="py-16 lg:py-24">
          <SectionHeading
            as="h1"
            eyebrow="The program"
            title={program.name}
            lede={program.summary}
          />
          <div className="mt-10 max-w-2xl border-l border-ink pl-5">
            <MonoLabel>Deliverable</MonoLabel>
            <p className="mt-2 text-lg leading-relaxed text-ink">{program.deliverable}</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-rule">
        <Container className="py-20">
          <SectionHeading eyebrow="Week by week" title="What happens, and when" />
          <div className="mt-10">
            <WeekList weeks={program.weeks} />
          </div>
        </Container>
      </section>

      <section className="border-b border-rule">
        <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeading
            eyebrow="Outcomes"
            title="What your team can do when it ends"
            lede="Not a certificate. Things they could not do in week one and can do unsupervised in week nine."
          />
          <NumberedList items={program.outcomes} />
        </Container>
      </section>

      <section className="border-b border-rule">
        <Container className="py-20">
          <SectionHeading eyebrow="Pricing" title="One fee, one cohort, one system in production" />
          <div className="mt-10">
            <PricingBlock />
          </div>
        </Container>
      </section>

      <section className="border-b border-rule">
        <Container className="py-20">
          <SectionHeading eyebrow="Fit" title="Who this is for, and who it is not for" />
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <MonoLabel accent>A fit</MonoLabel>
              <NumberedList items={program.fit} className="mt-3" />
            </div>
            <div>
              <MonoLabel>Not a fit</MonoLabel>
              <NumberedList items={program.notFit} className="mt-3" />
            </div>
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
