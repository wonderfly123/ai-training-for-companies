export interface Step {
  n: string;
  title: string;
  body: string;
}

export interface Program {
  name: string;
  /** The three-step summary used on the home page. */
  steps: Step[];
  outcomes: string[];
  fit: string[];
  notFit: string[];
  deliverable: string;
}

export const program: Program = {
  name: "The program",
  steps: [
    {
      n: "01",
      title: "Pick the system",
      body: "We map your operations and choose one workflow where people retype, wait, or guess.",
    },
    {
      n: "02",
      title: "Your team builds it",
      body: "Your people write the code and wire the integrations. We teach, review, and keep it on the rails.",
    },
    {
      n: "03",
      title: "Your team owns it",
      body: "It ships with monitoring, handoff, and a runbook. The people who built it keep building."
    },
  ],
  deliverable:
    "One working AI system running inside your company, owned and understood by the people who built it, plus a runbook and a list of what to build next.",
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
    "Teams that cannot free up the time",
    "Projects that need a data platform built first",
    "Anyone looking for a slide deck about AI strategy without shipping anything",
  ],
};
