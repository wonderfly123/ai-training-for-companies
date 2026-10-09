import type { Stat } from "./case-studies";

interface Point {
  n: string;
  title: string;
  body: string;
}

export type Slide =
  | { kind: "title" }
  | { kind: "problem"; heading: string; points: Point[] }
  | { kind: "fde"; heading: string; definition: string; points: string[] }
  | {
      kind: "teacher";
      heading: string;
      body: string;
      stats: Stat[];
      roles: { org: string; role: string; note: string }[];
    }
  | { kind: "case-study"; slug: string }
  | {
      kind: "enterprise";
      heading: string;
      items: { org: string; role: string; proof: string[] }[];
    }
  | { kind: "program"; heading: string }
  | { kind: "outcomes"; heading: string; intro: string }
  | { kind: "pricing"; heading: string; note: string; includes: string[] }
  | { kind: "fit"; heading: string }
  | { kind: "next"; heading: string; body: string; steps: string[] };

/** Fourteen slides. Written to be read cold, without a presenter. */
export const deck: Slide[] = [
  { kind: "title" },
  {
    kind: "problem",
    heading: "Most companies have bought AI three times and own none of it",
    points: [
      {
        n: "01",
        title: "The tools",
        body: "Seats were purchased. A few people use them for email. Nothing in the operation changed.",
      },
      {
        n: "02",
        title: "The consultant",
        body: "Something got built. Then they left, and every change since is a new invoice from someone who no longer remembers how it works.",
      },
      {
        n: "03",
        title: "The strategy deck",
        body: "There is a roadmap on a slide. Nobody inside can build the first item on it.",
      },
    ],
  },
  {
    kind: "fde",
    heading: "The fix is a small team inside your company that builds and owns the systems",
    definition:
      "A forward deployed engineer sits with operations, understands the real workflow, and ships software that fixes it. Enterprise software companies place them at customer sites. You can grow them in-house.",
    points: [
      "They know your business, so they build the right thing the first time.",
      "They stay, so the systems get maintained and the next one gets built.",
      "They cost what you already pay them, not a retainer.",
      "Four of them can automate more of a 200-person company than any vendor will.",
    ],
  },
  {
    kind: "teacher",
    heading: "Taught by someone who did this for his own companies",
    body: "I co-own three operating businesses and built the AI systems that run them, on nights and weekends, while holding an enterprise engineering job. Everything in this deck is in production and I can show you the code.",
    stats: [
      { label: "Businesses operated", value: "3" },
      { label: "Windansea summer revenue", value: "~$400K" },
      { label: "Fortune 500 deal closed", value: "$300K" },
      { label: "Process savings at Northrop", value: "$10M+" },
    ],
    roles: [
      { org: "Snowflake", role: "Solutions Engineer", note: "Current" },
      {
        org: "SnapLogic",
        role: "Enterprise Sales Engineer",
        note: "Led AI agent bootcamps, built their first GTM sales agent",
      },
      {
        org: "Northrop Grumman",
        role: "Systems Engineer",
        note: "Six years. Managed dev teams on NATO and Global Hawk programs",
      },
      {
        org: "Wonderfly, Windansea Coconuts, WD Capital",
        role: "Co-owner",
        note: "Built the operations and AI systems for all three",
      },
    ],
  },
  { kind: "case-study", slug: "wonderfly" },
  { kind: "case-study", slug: "windansea-coconuts" },
  { kind: "case-study", slug: "wd-capital" },
  { kind: "case-study", slug: "hologram-pilates" },
  {
    kind: "enterprise",
    heading: "And trained enterprise teams to do it",
    items: [
      {
        org: "SnapLogic",
        role: "Enterprise Sales Engineer, 2024 to 2026",
        proof: [
          "Led AgentCreator Bootcamps teaching customer teams to build AI agents on their own data",
          "Built the company's first GTM sales AI agent",
          "Closed a $300K Fortune 500 deal",
        ],
      },
      {
        org: "Snowflake",
        role: "Solutions Engineer, 2026 to present",
        proof: [
          "Designs data and AI architectures with enterprise engineering teams",
          "Sees what works and what stalls across dozens of companies",
        ],
      },
      {
        org: "Northrop Grumman",
        role: "Systems Engineer, 2019 to 2024",
        proof: [
          "Managed development teams on NATO, MESA, Global Hawk, and SABR",
          "Process improvements credited with $10M+ in savings",
          "SECRET clearance",
        ],
      },
    ],
  },
  { kind: "program", heading: "Eight weeks, one shipped system" },
  {
    kind: "outcomes",
    heading: "What your team can do when it ends",
    intro:
      "Not a certificate. A list of things they could not do in week one and can do unsupervised in week nine.",
  },
  {
    kind: "pricing",
    heading: "One fee, one cohort, one system in production",
    note: "Follow-on advisory after the cohort is quoted per engagement. No per-seat charges, no software to license.",
    includes: [
      "Eight weeks of instruction and working sessions, on site or remote",
      "Code review and architecture guidance on your real project",
      "One AI system deployed to production inside your company",
      "Runbook, monitoring, and a ranked list of the next three systems",
      "Thirty days of questions answered after the cohort ends",
    ],
  },
  { kind: "fit", heading: "Who this is for, and who it is not for" },
  {
    kind: "next",
    heading: "Next step",
    body: "Reply to the email this came with, or write to the address below. Tell me the one workflow in your company that wastes the most human time. That is the first conversation.",
    steps: [
      "A 30-minute call about that workflow",
      "A one-page proposal naming the system and the cohort",
      "Week one",
    ],
  },
];
