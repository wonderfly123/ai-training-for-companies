import type { Metadata } from "next";
import { site } from "@/content/site";
import { Hero } from "@/components/site/hero";
import { ProofStrip } from "@/components/site/proof-strip";
import { Problem } from "@/components/site/problem";
import { HowItWorks } from "@/components/site/how-it-works";
import { CaseStudyGrid } from "@/components/site/case-study-grid";
import { ProgramSummary } from "@/components/site/program-summary";
import { AboutBlock } from "@/components/site/about-block";
import { FaqList } from "@/components/site/faq-list";
import { ContactCta } from "@/components/site/contact-cta";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | Train your team to build AI in-house` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Problem />
      <HowItWorks />
      <CaseStudyGrid />
      <ProgramSummary />
      <AboutBlock />
      <FaqList />
      <ContactCta />
    </>
  );
}
