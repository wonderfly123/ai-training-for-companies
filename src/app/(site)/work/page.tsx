import type { Metadata } from "next";
import { CaseStudyGrid } from "@/components/site/case-study-grid";
import { ContactCta } from "@/components/site/contact-cta";

export const metadata: Metadata = {
  title: "AI Systems Built In-House, Case Studies",
  description:
    "AI and automation systems we built for clients: a GTM sales agent, a customer success platform that surfaces churn risk, a customer service text agent, an operations app, and a CRM lead pipeline with a public lead-routing site.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <CaseStudyGrid
        eyebrow="Client work"
        title="Selected client systems"
        lede="Each one was built for a client and is still running. Click through for the problem, what was built, the result, and what a cohort learns from it."
      />
      <ContactCta />
    </>
  );
}
