export interface Offering {
  slug: string;
  name: string;
  format: string;
  duration: string;
  who: string;
  outcome: string;
  /** PLACEHOLDER prices for the workshop and intensive. Cohort price from Jordan. */
  priceUsd: number;
  includes: string[];
}

export const offerings: Offering[] = [
  {
    slug: "workshop",
    name: "One-day workshop",
    format: "In person, at your office",
    duration: "1 day",
    who: "Leadership and the people who run operations",
    outcome:
      "Map your operations, pick the first three systems worth building, and leave with a plan and a working prototype of one.",
    priceUsd: 15000,
    includes: [
      "Operations mapping session with your team",
      "Live build of one prototype against your real workflow",
      "Ranked list of the next three systems, with scope and effort",
      "Written plan delivered within a week",
    ],
  },
  {
    slug: "intensive",
    name: "Three-day intensive",
    format: "Remote, over Zoom",
    duration: "3 days, 4 hours per day",
    who: "A team of 4 to 8",
    outcome:
      "Build a working AI system against your real data: LLM APIs, integrations, human handoff, and deployment.",
    priceUsd: 7500,
    includes: [
      "Twelve hours of hands-on instruction and building",
      "One working system connected to your real data",
      "Deployment and runbook",
      "Two weeks of questions answered after the session",
    ],
  },
  {
    slug: "cohort",
    name: "Eight-week cohort",
    format: "On site or remote",
    duration: "8 weeks",
    who: "A team of 4 to 8",
    outcome:
      "One system shipped to production inside your company, owned and understood by the people who built it.",
    priceUsd: 40000,
    includes: [
      "Eight weeks of instruction and working sessions",
      "Code and architecture review on your real project",
      "One AI system deployed to production",
      "Runbook, monitoring, and a ranked list of the next three systems",
      "Thirty days of support after the cohort",
    ],
  },
];

export function formatUsd(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}
