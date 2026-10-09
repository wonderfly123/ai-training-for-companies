import type { Metadata } from "next";
import { site } from "@/content/site";
import { Hero } from "@/components/site/hero";
import { ProofStrip } from "@/components/site/proof-strip";
import { Problem } from "@/components/site/problem";
import { HowItWorks } from "@/components/site/how-it-works";
import { FluencyBlock } from "@/components/site/fluency-block";
import { CaseStudyGrid } from "@/components/site/case-study-grid";
import { OfferingsSummary } from "@/components/site/offerings-summary";
import { AboutBlock } from "@/components/site/about-block";
import { FaqList } from "@/components/site/faq-list";
import { ContactCta } from "@/components/site/contact-cta";
import { JsonLd } from "@/components/site/json-ld";
import { faqPage } from "@/lib/json-ld";
import { faq } from "@/content/faq";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | Train your team to build AI in-house` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPage(faq)} />
      <Hero />
      <ProofStrip />
      <Problem />
      <HowItWorks />
      <FluencyBlock />
      <CaseStudyGrid />
      <OfferingsSummary />
      <AboutBlock />
      <FaqList />
      <ContactCta />
    </>
  );
}
