import type { Metadata } from "next";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MonoLabel } from "@/components/ui/mono-label";
import { ContactForm } from "@/components/site/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Ask about an ${site.pricing.weeks}-week AI training cohort for your company. Tell Jordan the workflow that wastes the most human time and he will reply within two business days.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="ruled">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:py-24">
        <div>
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Start with the workflow, not the technology"
            lede="Tell me the one process in your company where people retype, wait, or guess. I will tell you honestly whether an eight-week cohort can fix it."
          />
          <dl className="mt-10 space-y-5 border-t border-ink pt-6">
            <div>
              <dt><MonoLabel>Email</MonoLabel></dt>
              <dd>
                <a href={`mailto:${site.contact.email}`} className="text-lg text-ink hover:text-accent">
                  {site.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt><MonoLabel>LinkedIn</MonoLabel></dt>
              <dd>
                <a href={site.founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg text-ink hover:text-accent">
                  {site.founder.name}
                </a>
              </dd>
            </div>
            <div>
              <dt><MonoLabel>Based in</MonoLabel></dt>
              <dd className="text-lg text-ink">{site.founder.city}. Cohorts run on site or remote.</dd>
            </div>
          </dl>
        </div>
        <div className="bg-paper">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
