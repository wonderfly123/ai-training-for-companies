export interface Stat {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  company: string;
  role: string;
  title: string;
  summary: string;
  problem: string;
  built: string[];
  stack: string[];
  result: string;
  numbers: Stat[];
  lessons: string[];
  screenshot: { label: string; src?: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "wonderfly",
    company: "Wonderfly",
    role: "Co-owner",
    title: "A customer service agent that answers texts on weekends",
    summary:
      "Wonderfly runs event venues in Baltimore. Customers text questions at all hours and most of the bookings come in on weekends when nobody is at a desk.",
    problem:
      "Customers text the venue about availability, pricing, and party packages. Most of those messages arrive evenings and weekends. Staff answered them Monday, by which point the customer had booked somewhere else.",
    built: [
      "An SMS agent on the venue's phone lines that answers questions from a knowledge base and live booking data, written to collect leads rather than pretend to book.",
      "Confidence-based handoff. When the agent is unsure, it stops, flags the conversation, and posts an alert to the team's Discord. The database flag is the source of truth, so a failed alert never blocks a reply.",
      "A dashboard for staff to read conversations, take over a thread, toggle the agent per line or globally, and watch response time and token cost.",
      "Business-hours gating, test mode, and a model switcher so the team can try a new model without a deploy.",
      "A separate content engine that researches competitors, writes briefs and drafts for three brands, schedules posts, pulls analytics, and feeds top performers and rejections back into next week's briefs.",
    ],
    stack: [
      "Next.js",
      "Supabase",
      "Claude via the Anthropic SDK",
      "OpenPhone webhooks",
      "Discord webhooks",
      "Vercel cron",
      "Neon Postgres and Drizzle (content engine)",
      "Meta Graph API, Firecrawl, Apify (content engine)",
    ],
    result:
      "Weekend texts get an answer in seconds instead of on Monday. Staff only touch the conversations the agent flags. The whole thing was built in evenings and weekends by a co-owner, not a vendor.",
    numbers: [
      { label: "Built", value: "Nights and weekends" },
      { label: "Brands on the content engine", value: "3" },
      { label: "Human handoff", value: "Confidence threshold to Discord" },
    ],
    lessons: [
      "How to wire an LLM to a real phone line and a real database",
      "Why the agent's job is to answer and collect, not to act, until it has earned it",
      "Human in the loop as a system design, not a disclaimer",
      "Tracking cost and latency from day one",
    ],
    screenshot: {
      label: "Wonderfly agent dashboard, conversation view with handoff flag",
    },
  },
  {
    slug: "windansea-coconuts",
    company: "Windansea Coconuts",
    role: "Co-owner",
    title: "Operations that run without anyone retyping anything",
    summary:
      "Windansea Coconuts sells branded coconuts to resorts, weddings, and corporate events. Two owners, no full-time staff, and roughly $400K of revenue each of the last two summers.",
    problem:
      "Every closed deal meant copying details from the CRM into a task tracker, emailing the client an intake form, chasing the answers, and then typing them again into a run sheet for the crew. Wholesale invoices lived in a separate system nobody checked. Mistakes showed up on event day.",
    built: [
      "A webhook that fires when a deal closes in Pipedrive. It creates the event task in ClickUp, generates a unique intake link, and emails the client from the owner's address with the event lead copied.",
      "An intake form that pre-fills from the task and writes answers and file uploads straight back to it. Fields show and hide based on the package.",
      "A printable Banquet Event Order rendered from the task for staff and vendors.",
      "Square invoice webhooks that detect wholesale orders, including misspellings, and open tracking tasks with every line item.",
      "A decal order form that produces a one-page PDF and emails the vendor.",
      "A daily 7 AM job where Claude reads each upcoming event's fields, attachments, comments, and matching email threads, then writes or updates a versioned Run of Show as a Word document, keeping any edits people made by hand and listing what it could not confirm.",
    ],
    stack: [
      "Next.js on Vercel",
      "Pipedrive and Square webhooks",
      "ClickUp API",
      "Gmail SMTP and IMAP",
      "Claude structured outputs",
      "pdf-lib and docx generation",
      "Vitest",
    ],
    result:
      "A closed deal becomes a tracked event with a completed intake form and a current run sheet without anyone retyping it. Failures email the owner with the payload, so nothing fails silently.",
    numbers: [
      { label: "Summer revenue", value: "~$400K, two years running" },
      { label: "Systems connected", value: "4" },
      { label: "Run of Show", value: "Written daily by Claude" },
    ],
    lessons: [
      "Webhooks as the backbone of business automation",
      "Idempotency, retries, and dry-run modes before you trust a bot with production data",
      "Using an LLM to write documents from messy sources, with a confirm-before-event list instead of guesses",
      "Replacing a pile of integrations with one app you own",
    ],
    screenshot: {
      label: "Windansea intake form and generated Run of Show document",
    },
  },
  {
    slug: "wd-capital",
    company: "WD Capital",
    role: "Co-founder",
    title: "A lead pipeline that replaced Zapier and showed its work",
    summary:
      "WD Capital is a real estate brokerage and syndication company. Deal flow depends on finding distressed and off-market properties before anyone else and getting them into the CRM clean.",
    problem:
      "New property leads arrived as webhooks from a data provider. A chain of Zapier steps tried to clean and push them into HubSpot. It was slow, duplicated records when two webhooks arrived together, failed quietly, and nobody could see what had happened to a given lead.",
    built: [
      "A single pipeline: normalize, filter, score, store, upsert to HubSpot, notify. Every inbound payload is stored raw and parsed with its status and the HubSpot IDs it produced.",
      "Per-lead processing locks so concurrent webhooks cannot create duplicate leads.",
      "An admin dashboard listing every delivery with a detail view and a replay button that re-runs a stored payload through the pipeline.",
      "Mapping of foreclosure stage, sale date, and property type to HubSpot's allowed values, with an email alert when an invariant breaks.",
      "Investor onboarding forms that write to HubSpot, plus a skip-trace import across six states.",
      "A separate deal-finding engine that mines county parcel data near substations and highway interchanges to surface cheap industrial land worth a letter.",
    ],
    stack: [
      "Next.js 16 on Vercel",
      "Neon Postgres",
      "HubSpot CRM API with a custom Leads object",
      "PropertyRadar webhooks",
      "Vercel cron",
      "Python and ArcGIS REST (parcel engine)",
    ],
    result:
      "Zapier is gone. Leads land in HubSpot in seconds with a full audit trail, and any failure can be replayed from the dashboard. The company has serviced million-dollar transactions on top of this pipeline.",
    numbers: [
      { label: "Transactions serviced", value: "Million-dollar" },
      { label: "Zapier steps remaining", value: "0" },
      { label: "Skip-trace states", value: "6" },
    ],
    lessons: [
      "When to replace no-code glue with code you own",
      "Locks, dedupe, and replay as the difference between a demo and an operation",
      "Building the monitoring dashboard before you need it",
      "Scoring and filtering data so humans only see what is worth their time",
    ],
    screenshot: {
      label: "WD Capital admin webhook dashboard with replay",
    },
  },
  {
    slug: "hologram-pilates",
    company: "Hologram Pilates (Proto)",
    role: "Builder and partner",
    title: "Controlling a hologram, the lights, and the sound from one app",
    summary:
      "A Pilates studio pilot where a Proto hologram unit plays a recorded instructor while a certified instructor in the room corrects form. Tested inside a franchise gym before committing to a standalone studio.",
    problem:
      "A class needs the hologram video, the room lights, and the sound to move together on the instructor's cue. The vendor's web console was a browser round trip to the cloud with no control over lights or room audio, and a frozen hologram reads as broken to a room full of people.",
    built: [
      "A custom control app that drives video playback on the Proto unit, the room lighting, and the sound from one surface the live instructor operates mid-class.",
      "Block-based class structure with hold loops that repeat without a visible cut, so the instructor can pause on a cue without the figure freezing.",
      "An operating plan for the pilot: three test rounds, KPIs that decide the business (rebooking within 14 days above 40 percent, zero-glitch class rate above 95 percent), and a list of every unconfirmed assumption marked as unconfirmed.",
    ],
    stack: [
      "Proto hologram unit and Proto Cloud",
      "Custom control application",
      "Lighting and audio control",
      "Pre-recorded instructor video in stacked blocks",
    ],
    result:
      "The instructor runs the room from one app instead of juggling a vendor console, a music app, and the light switches. The pilot has a measurement plan, so the decision to open a studio is made on data, not on how cool the hologram looks.",
    numbers: [
      { label: "Systems controlled", value: "Video, lights, sound" },
      { label: "Decision KPI", value: "Rebooking within 14 days" },
      { label: "Pilot rounds", value: "3" },
    ],
    lessons: [
      "Reading vendor docs and APIs to find what the product can actually do",
      "Designing for failure in front of a live audience",
      "Picking the one number that decides whether the thing works",
      "Writing down what is unconfirmed so nobody mistakes a guess for a decision",
    ],
    screenshot: {
      label: "Hologram Pilates control app, class playback screen",
    },
  },
  {
    slug: "applegate-ventures",
    company: "Applegate Ventures",
    role: "Client build",
    title: "A home-buying and investor site with lead routing, built for a client",
    summary:
      "Applegate Ventures buys homes as-is for cash in four states and partners with investors on deals. They needed a site that turns visitors into offer requests and investor conversations.",
    problem:
      "Two different audiences, sellers and investors, landed on one generic page with a contact email. Nothing captured what the seller's property was or how much an investor wanted to deploy, so every lead started with a phone call to find out.",
    built: [
      "A Next.js site with separate seller and investor paths: how it works, get an offer, invest with us, about.",
      "Offer and investor forms with validation on the server, field limits, and email delivery that labels which form the lead came from.",
      "Proof sections built from the client's real track record: $12M+ acquired and a 59 percent average IRR on completed deals.",
    ],
    stack: ["Next.js 16", "Tailwind CSS 4", "Nodemailer SMTP", "Vercel"],
    result:
      "Leads arrive with the property details or investment range already filled in. The site shipped in days, not months, because it was built on the same patterns used across the other businesses.",
    numbers: [
      { label: "Client track record", value: "$12M+ acquired" },
      { label: "Average IRR cited", value: "59%" },
      { label: "Lead paths", value: "Seller and investor" },
    ],
    lessons: [
      "Shipping a complete, validated lead funnel fast",
      "Server-side validation at the boundary, every time",
      "Reusing patterns across projects so each build gets faster",
    ],
    screenshot: {
      label: "Applegate Ventures homepage and offer form",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
