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
    headshot: string;
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
    "Training for companies that want their own people to build AI: a one-day workshop at your office, a three-day remote intensive, or an eight-week cohort that ships a system to production. Taught by consultants who have built these systems for clients.",
  url: "https://aitrainingforcompanies.com",
  founder: {
    name: "Jordan Millhausen",
    title: "Founder",
    linkedin: "https://www.linkedin.com/in/jordan-millhausen",
    headshotAlt: "Jordan Millhausen",
    headshot: "/images/jordan-millhausen.jpg",
  },
  contact: {
    email: "millhausenjordan@gmail.com",
    phone: "PLACEHOLDER",
    calendar: "PLACEHOLDER",
  },
  pricing: {
    cohortUsd: 40000,
    cohortSize: "4 to 8 people",
    weeks: 8,
  },
};
