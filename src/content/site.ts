export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  founder: {
    name: string;
    title: string;
    city: string;
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
 * Single source of truth for anything Jordan will swap later.
 * Every PLACEHOLDER value below is intentional until the domain,
 * email, and booking link exist.
 */
export const site: SiteConfig = {
  name: "AI Training For Companies",
  tagline: "Your team builds the AI. We teach them how.",
  description:
    "An eight-week program that trains a small team inside your company to build and own AI systems. Taught by an owner-operator who built the AI that runs his own businesses.",
  url: "https://aitrainingforcompanies.com",
  founder: {
    name: "Jordan Millhausen",
    title: "Founder",
    city: "Baltimore, MD",
    linkedin: "https://www.linkedin.com/in/PLACEHOLDER",
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
