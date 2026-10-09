import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { OfferingsGrid } from "./offerings-grid";

export function OfferingsSummary() {
  return (
    <section className="border-b border-rule">
      <Container className="py-20">
        <SectionHeading
          eyebrow="Offerings"
          title="Three ways to train your team"
          lede="A day at your office, three days over Zoom, or eight weeks to a system in production. Your team builds. We teach, review, and support it after."
        />
        <div className="mt-12">
          <OfferingsGrid compact />
        </div>
        <div className="mt-8">
          <Button href="/offerings" variant="ghost">
            Formats, outcomes, and pricing
          </Button>
        </div>
      </Container>
    </section>
  );
}
