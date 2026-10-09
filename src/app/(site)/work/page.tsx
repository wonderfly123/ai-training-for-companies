import type { Metadata } from "next";
import { CaseStudyGrid } from "@/components/site/case-study-grid";
import { ContactCta } from "@/components/site/contact-cta";

export const metadata: Metadata = {
  title: "AI Systems Built In-House, Case Studies",
  description:
    "Five AI and automation systems running real businesses: a customer service text agent, an operations app, a CRM lead pipeline, a hologram control app, and a client site.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <CaseStudyGrid
        eyebrow="The work"
        title="Five systems in production"
        lede="Each one was built for a business I own or a client I served, and each one is still running. Click through for the problem, what was built, the stack, the result, and what a cohort learns from it."
      />
      <ContactCta />
    </>
  );
}
