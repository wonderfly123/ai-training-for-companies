import { describe, it, expect } from "vitest";
import { organization, person, service, faqPage } from "@/lib/json-ld";
import { faq } from "@/content/faq";
import { site } from "@/content/site";

describe("json-ld", () => {
  it("faqPage mirrors every faq item", () => {
    const j = faqPage(faq);
    expect(j["@type"]).toBe("FAQPage");
    expect(j.mainEntity).toHaveLength(faq.length);
    expect(j.mainEntity[0]["@type"]).toBe("Question");
    expect(j.mainEntity[0].acceptedAnswer.text).toBe(faq[0].answer);
  });

  it("organization has name and url", () => {
    const j = organization();
    expect(j["@type"]).toBe("Organization");
    expect(j.name).toBe(site.name);
    expect(j.url).toBe(site.url);
  });

  it("person has name and jobTitle", () => {
    const j = person();
    expect(j["@type"]).toBe("Person");
    expect(j.name).toBe(site.founder.name);
    expect(j.jobTitle.length).toBeGreaterThan(0);
  });

  it("service carries the cohort price", () => {
    const j = service();
    expect(j["@type"]).toBe("Service");
    expect(j.provider["@type"]).toBe("Organization");
    expect(j.offers.price).toBe(String(site.pricing.cohortUsd));
    expect(j.offers.priceCurrency).toBe("USD");
  });
});
