import type { Metadata } from "next";
import { program } from "@/content/program";
import { offerings } from "@/content/offerings";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { NumberedList } from "@/components/ui/numbered-list";
import { MonoLabel } from "@/components/ui/mono-label";
import { WeekList } from "@/components/site/week-list";
import { OfferingsGrid } from "@/components/site/offerings-grid";
import { ContactCta } from "@/components/site/contact-cta";
import { JsonLd } from "@/components/site/json-ld";
import { service } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "AI Training Offerings for Companies: Workshop, Intensive, Cohort",
  description:
    "Three ways to train your team to build AI: a one-day workshop at your office, a three-day remote intensive, or an eight-week cohort that ships a system to production. Formats, outcomes, and pricing.",
  alternates: { canonical: "/offerings" },
};

export default function OfferingsPage() {
  return (
    <>
      <JsonLd data={service()} />
      <section className="border-b border-rule">
        <Container className="py-16 lg:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Offerings"
            title="Three ways to train your team"
            lede="Pick the format that fits the time you have. Every one is hands-on, uses your real workflows, and ends with something built."
          />
        </Container>
      </section>

      <section className="border-b border-rule">
        <Container className="py-20">
          <OfferingsGrid />
        </Container>
      </section>

      <section className="border-b border-rule">
        <Container className="py-20">
          <SectionHeading
            eyebrow="The eight-week cohort, week by week"
            title="What happens, and when"
            lede={program.summary}
          />
          <div className="mt-10">
            <WeekList weeks={program.weeks} />
          </div>
        </Container>
      </section>

      <section className="border-b border-rule">
        <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeading
            eyebrow="Outcomes"
            title="What your team can do after"
            lede="Things they could not do on day one and can do unsupervised after."
          />
          <NumberedList items={program.outcomes} />
        </Container>
      </section>

      <section className="border-b border-rule">
        <Container className="py-20">
          <SectionHeading eyebrow="Fit" title="Who this is for, and who it is not for" />
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <MonoLabel>A fit</MonoLabel>
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
