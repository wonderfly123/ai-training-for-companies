import type { Metadata } from "next";
import { CaseStudyGrid } from "@/components/site/case-study-grid";
import { ContactCta } from "@/components/site/contact-cta";

export const metadata: Metadata = {
  title: "AI Systems Built In-House, Case Studies",
  description:
    "Five AI and automation systems we built for clients: a customer service text agent, an operations app, a CRM lead pipeline, a hologram control app, and a client site.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <CaseStudyGrid
        eyebrow="Client work"
        title="Five client systems in production"
        lede="Each one was built for a client and is still running. Click through for the problem, what was built, the result, and what a cohort learns from it."
      />
      <ContactCta />
    </>
  );
}
