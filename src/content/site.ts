export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  founder: {
    name: string;
    title: string;
    linkedin: string;
    headshotAlt: string;
  };
  contact: {
    email: string;
    phone: string;
    calendar: string;
  };
  pricing: {
    cohortUsd: number;
    cohortSize: string;
    weeks: number;
  };
}

/**
 * Single source of truth for anything that will be swapped later.
 * Every PLACEHOLDER value is intentional until the domain, email,
 * and booking link exist.
 */
export const site: SiteConfig = {
  name: "AI Training For Companies",
  tagline: "We train your team to build AI systems in-house.",
  description:
    "An eight-week program that trains a small team inside your company to build, deploy, and own AI systems. Taught by consultants who have shipped these systems for clients in events, consumer products, real estate, and fitness.",
  url: "https://aitrainingforcompanies.com",
  founder: {
    name: "Jordan Millhausen",
    title: "Founder",
    linkedin: "https://www.linkedin.com/in/jordan-millhausen",
    headshotAlt: "Jordan Millhausen",
  },
  contact: {
    email: "jordan@wonderflyathletics.com",
    phone: "PLACEHOLDER",
    calendar: "PLACEHOLDER",
  },
  pricing: {
    cohortUsd: 40000,
    cohortSize: "4 to 8 people",
    weeks: 8,
  },
};
