export interface AgendaItem {
  label: string;
  body: string;
}

export interface Offering {
  slug: string;
  name: string;
  format: string;
  duration: string;
  who: string;
  outcome: string;
  priceUsd: number;
  includes: string[];
  /** How the time is spent. */
  agenda: AgendaItem[];
  /** What the company has at the end. */
  walkAway: string[];
  /** What needs to be true before day one. */
  before: string[];
}

export const offerings: Offering[] = [
  {
    slug: "virtual",
    name: "One-day virtual workshop",
    format: "Remote, over Zoom",
    duration: "1 day, 6 hours",
    who: "Any team already using ChatGPT or Copilot that wants more from it, in one office or spread out",
    outcome:
      "Everyone moves from chatting with AI to running Claude Code, Codex, and agents on their own work, and leaves with one repetitive task handed off.",
    priceUsd: 7500,
    includes: [
      "Six hours live over Zoom",
      "Claude Code or Codex set up on each person's machine",
      "Hands-on time on each person's real tasks, with us reviewing",
      "A written workflow and review checklist for each person",
    ],
    agenda: [
      {
        label: "Hour 1",
        body: "Setup. Everyone gets Claude Code or Codex installed and connected to the files and tools they work in.",
      },
      {
        label: "Hours 2 to 3",
        body: "How the best AI users work. The difference between asking a chatbot and handing a multi-step task to an agent, shown live, then done by each person on a task they brought.",
      },
      {
        label: "Hours 4 to 5",
        body: "Each person picks one repetitive part of their week and scripts it or hands it to an agent. We review as they go.",
      },
      {
        label: "Hour 6",
        body: "Checking the output. What to hand off, what to keep, how to review agent work, and a short written workflow each person keeps.",
      },
    ],
    walkAway: [
      "Everyone set up with Claude Code or Codex and using it on their own work",
      "One repetitive task per person handed to an agent or a script",
      "A written workflow and review checklist each person keeps",
      "A short list of workflows worth building a real system around",
    ],
    before: [
      "Each person brings one task they do every week",
      "Laptops where people can install software, or someone from IT on hand to approve it",
      "Access to the files and tools those tasks touch",
    ],
  },
  {
    slug: "workshop",
    name: "One-day on-site workshop",
    format: "In person, at your office",
    duration: "1 day, 8 hours",
    who: "Leadership and the people who run operations, deciding what to build first",
    outcome:
      "Map your operations, see how the best AI users actually work, and leave with a plan and a working prototype of your first system.",
    priceUsd: 15000,
    includes: [
      "Operations mapping session with your team",
      "Hands-on session on working with AI the way the best users do",
      "Live build of one prototype against your real workflow",
      "Ranked list of the next three systems, with scope and effort",
      "Written plan delivered within a week",
    ],
    agenda: [
      {
        label: "Morning",
        body: "Map how work actually moves through your company. We find the places where people retype, wait, or guess, and rank them by what they cost you.",
      },
      {
        label: "Midday",
        body: "How the best AI users work. Your team already has ChatGPT or Copilot. We show the difference between asking a chatbot and running Claude Code, Codex, and agents on real tasks, then do it on yours.",
      },
      {
        label: "Afternoon",
        body: "We build a working prototype of one system from the morning's list, live, with your people at the keyboard.",
      },
      {
        label: "Close",
        body: "A ranked list of the next three systems, with rough scope and effort, and a decision on what to build first.",
      },
    ],
    walkAway: [
      "A written map of your operations and where AI pays off, delivered within a week",
      "A working prototype of one system, running against your real workflow",
      "A ranked list of the next three systems with scope and effort",
      "Everyone in the room set up with the tools and a workflow they used that day",
    ],
    before: [
      "The people who run operations in the room, plus whoever decides what gets built",
      "Access to one real workflow: the spreadsheet, inbox, or system it lives in",
      "A conference room and a projector. We bring the rest",
    ],
  },
  {
    slug: "intensive",
    name: "Three-day on-site intensive",
    format: "In person, at your office",
    duration: "3 days, all day",
    who: "The 4 to 8 people who will build and run your first system, at least one comfortable with code or data",
    outcome:
      "Your team builds and deploys a working AI system against your real data in three days, and each person leaves working with AI differently.",
    priceUsd: 25000,
    includes: [
      "Three full days at your office, building with your team",
      "One working system connected to your real data",
      "Each person working with Claude Code or Codex on their own tasks",
      "Deployment and runbook",
      "Two weeks of questions answered after the session",
    ],
    agenda: [
      {
        label: "Day 1",
        body: "Foundations and the pick. How LLM APIs actually work, structured outputs, tool use. Then the shift from chatbots to Claude Code, Codex, and agents, applied to each person's own work. Map the workflow and pick the system to build.",
      },
      {
        label: "Day 2",
        body: "Build. Set up the AI data pipeline that feeds the system from your real data, and connect it to the tools you already run on. Design the human handoff: what it does alone, what it asks about.",
      },
      {
        label: "Day 3",
        body: "Harden and deploy. Tests, failure modes, monitoring, cost. Ship it, write the runbook, show leadership what was built, and rank what to build next.",
      },
    ],
    walkAway: [
      "One working AI system, deployed, connected to your real data",
      "A runbook your team can operate from",
      "Each participant using Claude Code or Codex on their own work, not just in the session",
      "A ranked list of what to build next",
      "Two weeks of questions answered after the session",
    ],
    before: [
      "Four to eight people out of their regular work for three full days",
      "At least one person comfortable with code or data",
      "Access to the data and systems the project touches",
      "A room at your office for the three days",
    ],
  },
];

export function getOffering(slug: string): Offering | undefined {
  return offerings.find((o) => o.slug === slug);
}

export function formatUsd(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}
