/**
 * Copy for the PowerPoint deck only. Short lines, one idea per slide.
 * The website has its own longer copy; do not share text between them.
 */
export interface PitchCase {
  company: string;
  title: string;
  problem: string;
  built: string;
  result: string;
}

export const pitch = {
  problemHeading: "Why AI stalls inside companies",
  problem: [
    "Tools get bought. Nothing changes.",
    "A consultant builds it, then leaves.",
    "Nobody inside can build the roadmap.",
  ],
  fixHeading: "The fix is a team inside your company",
  fix: [
    "Four to eight of your people, trained to build and own AI systems.",
    "They know the business, so they build the right thing first.",
    "They stay, so the systems get maintained and the next one gets built.",
  ],
  offeringsHeading: "Three ways to work with us",
  offeringsSub: "Your team builds. We teach, review, and support it after.",
  outcomesHeading: "What your team can do after",
  outcomes: [
    "Build on LLM APIs with structured outputs and tool use",
    "Connect AI to your CRM, email, and operations systems",
    "Design human handoff, alerts, and audit trails",
    "Test, monitor, and track the cost of a system in production",
    "Scope and ship the next project without outside help",
  ],
  proofHeading: "Built for clients, running today",
  cases: [
    {
      company: "Wonderfly",
      title: "A customer service agent that answers texts around the clock",
      problem: "Customers text evenings and weekends. Staff replied Monday. Bookings were lost.",
      built: "An SMS agent on the venue's phone lines that answers from live data and hands off to a human when unsure.",
      result: "Replies in seconds, any hour. Staff only touch the conversations it flags.",
    },
    {
      company: "Windansea Coconuts",
      title: "Event operations with no retyping",
      problem: "Every closed deal was copied by hand into tasks, intake forms, and crew run sheets.",
      built: "Webhooks from the CRM create the event, send the intake, and write a daily Run of Show with Claude.",
      result: "A closed deal becomes a staffed event with a current run sheet, with nobody retyping it.",
    },
    {
      company: "WD Capital",
      title: "A lead pipeline that replaced Zapier",
      problem: "Property leads arrived through a chain of Zapier steps that duplicated records and failed silently.",
      built: "One pipeline that scores, dedupes, and pushes leads to HubSpot, with a dashboard and replay.",
      result: "Zapier is gone. Every lead has an audit trail. Million-dollar transactions run on it.",
    },
  ] satisfies PitchCase[],
  priceHeading: "Fixed fees. No per-seat charges.",
  nextHeading: "Next step",
  next: "Tell us the one workflow in your company that wastes the most human time.",
};
