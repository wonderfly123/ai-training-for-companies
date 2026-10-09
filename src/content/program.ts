export interface Week {
  n: number;
  title: string;
  body: string;
}

export interface Step {
  n: string;
  title: string;
  body: string;
}

export interface Program {
  name: string;
  /** The three-step summary used on the home page. */
  steps: Step[];
  summary: string;
  weeks: Week[];
  outcomes: string[];
  fit: string[];
  notFit: string[];
  deliverable: string;
}

export const program: Program = {
  name: "The eight-week cohort",
  summary:
    "Four to eight people from your company, one real system picked from your own operations, shipped to production by week eight. Your team builds it. I teach, review, and keep it on the rails.",
  steps: [
    {
      n: "01",
      title: "Pick the system",
      body: "We map your operations and choose one workflow where people retype, wait, or guess. Small enough to ship in eight weeks, real enough to matter.",
    },
    {
      n: "02",
      title: "Your team builds it",
      body: "Four to eight of your people write the code, wire the integrations, and make the decisions. I teach, review, and keep it on the rails.",
    },
    {
      n: "03",
      title: "Your team owns it",
      body: "It ships to production with monitoring, human handoff, and a runbook. The people who built it keep building. No retainer, no vendor.",
    },
  ],
  deliverable:
    "One working AI system running inside your company, owned and understood by the people who built it, plus a runbook and a list of what to build next.",
  weeks: [
    {
      n: 1,
      title: "Foundations",
      body: "How LLM APIs actually work. Prompts as code, structured outputs, tool calls, context limits, cost and latency. Everyone ships a small working script by Friday.",
    },
    {
      n: 2,
      title: "Pick the system",
      body: "Map your operations. Find the workflow where people retype, wait, or guess. Choose one that is worth automating and small enough to ship. Write the spec together.",
    },
    {
      n: 3,
      title: "Integrations",
      body: "Webhooks, CRMs, email, payments, task trackers. The glue that makes AI useful in a business. Connect the systems the project needs and store every payload.",
    },
    {
      n: 4,
      title: "Agents and tools",
      body: "Tool use, retrieval, and when an agent is the wrong answer and a cron job is enough. Build the core of the system.",
    },
    {
      n: 5,
      title: "Human in the loop",
      body: "Confidence thresholds, handoff, alerts, audit trails, dry-run modes. Decide what the system is allowed to do alone and what it must ask about.",
    },
    {
      n: 6,
      title: "Build week",
      body: "Heads down. Ship the first working version end to end against real data, behind a flag.",
    },
    {
      n: 7,
      title: "Evaluate and harden",
      body: "Test sets, failure modes, retries, idempotency, monitoring, and cost tracking. Break it on purpose and fix what breaks.",
    },
    {
      n: 8,
      title: "Deploy and own",
      body: "Production deploy, runbook, handoff to the wider team, and a ranked list of the next three systems to build. The cohort presents what they shipped to leadership.",
    },
  ],
  outcomes: [
    "Call an LLM API from your own code with structured outputs and tool use",
    "Connect AI to the systems your business already runs on through webhooks and APIs",
    "Decide when to use an agent, a scheduled job, or a plain form",
    "Design human handoff, alerts, and audit trails so the system is safe to leave running",
    "Test, monitor, and track the cost of an AI system in production",
    "Read vendor documentation and evaluate a tool or model without a sales call",
    "Scope the next project and ship it without outside help",
  ],
  fit: [
    "50 to 500 employees with operations that run on people retyping things between systems",
    "A CEO, COO, or head of operations who wants the capability in-house, not rented",
    "At least four people who can give the program real time, from ops, engineering, or analytics",
    "One workflow you already know is broken and are willing to fix in public",
  ],
  notFit: [
    "Companies that want a vendor to build it and walk away",
    "Teams that cannot free up time during the eight weeks",
    "Projects that need a data platform built first",
    "Anyone looking for a slide deck about AI strategy without shipping anything",
  ],
};
