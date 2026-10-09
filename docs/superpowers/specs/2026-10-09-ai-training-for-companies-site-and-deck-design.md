# AI Training For Companies: Pitch Deck and Website

Date: 2026-10-09
Status: approved by Jordan in conversation

## Purpose

Jordan Millhausen is launching an AI consulting company that trains teams at mid-market companies to become internal AI engineers (forward deployed engineers, FDEs). Two deliverables: a cold-outbound pitch deck that is read, not presented, and a marketing website. Both share one codebase and one design system.

## Positioning

- Name: AI Training For Companies. Domain: aitrainingforcompanies.com (whois showed available on 2026-10-09; verify before purchase).
- One line: Your team builds the AI. We teach them how.
- Claim: companies buy AI tools and hire consultants and nothing sticks because nobody inside understands it. The fix is a small internal team that builds and owns the systems. Jordan has done this as an owner-operator of three businesses and has trained enterprise teams at SnapLogic and Snowflake.
- Buyer: CEO, COO, or head of operations/technology at ops-heavy companies with 50 to 500 employees (venues, hospitality, real estate, logistics, services).
- Offer: eight-week cohort, 4 to 8 people, ends with one real system shipped inside their company. Placeholder price $40,000 per cohort, stored as one constant.
- Name choice was driven by SEO and AEO: literal match for what a buyer types into Google or asks an answer engine.

## Proof (real numbers approved for use)

| Company | Role | What was built | Numbers |
|---|---|---|---|
| Wonderfly | Co-owner | Claude SMS customer-service agent over OpenPhone with confidence-based human handoff to Discord, usage dashboard, model switching; operational systems; multi-brand content engine (research, brief, draft, asset, publish, analytics, learns from rejections) | Built on weekends; three brands |
| Windansea Coconuts | Co-owner | Next.js ops app wiring Pipedrive, Square, ClickUp, Gmail: closed-won deals create tasks and intake links, wholesale invoices auto-tracked, decal orders generate PDFs, daily Claude-written and versioned Run of Show documents | ~$400K revenue each of the last two summers |
| WD Capital | Co-founder | PropertyRadar to HubSpot lead pipeline (normalize, filter, score, store, upsert, notify) with per-lead locks, replay, and admin monitoring dashboard; replaced Zapier; investor onboarding; skip-trace import across six states; parcel-scout land deal engine | Serviced million-dollar transactions |
| Hologram Pilates (Proto) | Builder | Custom app controlling sound, lights, and video playback on a Proto hologram unit for a live-instructor Pilates studio pilot | Pilot at a franchise gym |
| Applegate Ventures | Client build | Cash home-buyer and investor site with offer and investor forms, email routing | Client cites $12M+ acquired, 59% average IRR |
| SnapLogic | Enterprise Sales Engineer | Led AgentCreator Bootcamps, built first GTM sales AI agent | Closed $300K Fortune 500 deal |
| Snowflake | Solutions Engineer | Current role | Named |
| Northrop Grumman | Systems Engineer | Managed dev teams on NATO, MESA, Global Hawk, SABR | $10M+ process savings |

Education: B.S. Mechanical Engineering, University of Maryland (2018). Location: Baltimore, MD.

## Deck

Cold outbound. Fourteen slides. Rendered at /deck in the site, keyboard and click navigation, print stylesheet for PDF export.

1. Title and one line
2. The problem: tools bought, consultants gone, nothing owned
3. What an FDE is, plainly, and why you want one inside
4. Who's teaching: Jordan, owner-operator and enterprise SE, real numbers
5. Wonderfly case study
6. Windansea Coconuts case study
7. WD Capital case study
8. Hologram Pilates case study
9. Enterprise: SnapLogic, Snowflake, Northrop
10. The program, week by week
11. What your team can do after
12. Pricing and engagement options
13. Who it's for and who it's not for
14. Next step and contact

Case study slide layout, identical across slides: Problem, What was built, Stack, Result, What your team learns from it. Screenshot placeholder is a labeled box stating the exact screen to drop in.

## Program (eight weeks)

1. Foundations: how LLM APIs actually work, prompts as code, structured outputs, cost and latency
2. Pick the system: map the company's operations, choose one workflow worth automating, write the spec
3. Integrations: webhooks, CRMs, email, payments, the glue that makes AI useful in a business
4. Agents and tools: tool use, retrieval, when to use an agent and when a cron job is enough
5. Human in the loop: confidence thresholds, handoff, alerts, audit trails
6. Build week: ship the first working version
7. Evaluate and harden: test sets, failure modes, monitoring, retries, dry runs
8. Deploy and own: production deploy, runbooks, handoff to the team, what to build next

## Website

Next.js (App Router) on Vercel, Tailwind CSS, TypeScript strict. Pages:

- `/` home: hero, proof strip, problem, how it works, case study cards, program summary, about, FAQ (AEO), contact CTA
- `/program` full eight-week curriculum, outcomes, pricing, who it is for and not for
- `/work` case study index; `/work/[slug]` one page per case study (wonderfly, windansea-coconuts, wd-capital, hologram-pilates, applegate-ventures)
- `/about` Jordan bio and career proof
- `/deck` the presentation
- `/contact` form: name, company, role, team size, email, message. POST to `/api/contact`, validated server side, sent via nodemailer SMTP. Honeypot field. Returns JSON.

SEO and AEO: literal title tags and meta descriptions, canonical URLs, Open Graph tags, JSON-LD for Organization, Person, Service, and FAQPage, `sitemap.xml` and `robots.txt` generated by Next metadata routes. FAQ answers written as direct one-paragraph answers to literal questions ("What is a forward deployed engineer?", "How much does AI training for a company cost?", "How long does it take to train an AI engineer?").

## Design system: engineering notebook

- Paper: `#F4F1EA`. Ink: `#161616`. Rule lines: `#D9D4C7`. Accent (marker orange): `#D5451B`. Muted ink: `#5C5A54`.
- Type: IBM Plex Sans for headlines and body, IBM Plex Mono for numbers, labels, figure captions, and diagrams. Loaded via `next/font/google`.
- Elements: faint horizontal rule lines on section backgrounds, numbered figures ("Fig. 3"), mono labels in the margin, hairline borders, square corners.
- Forbidden: gradients, glassmorphism, stock photos, robot imagery, emoji, decorative blur, marketing superlatives ("unlock", "supercharge", "revolutionize", "seamless", "cutting-edge").
- Images: real screenshots only. Until Jordan supplies them, a `Placeholder` component renders a bordered box with mono text naming the screen.

## Repo layout

```
consulting/
  src/app/              routes, layouts, metadata routes, api/contact
  src/components/       ui primitives, site sections, deck components
  src/content/          site.ts (contact + pricing placeholders), case-studies.ts, program.ts, faq.ts, deck.ts
  src/lib/              validation, email, json-ld helpers
  tests/                vitest: content integrity, contact validation, json-ld
  docs/superpowers/     specs and plans
  public/               favicon, placeholder image dir
  config/               none needed beyond next/tailwind/tsconfig at root (framework requirement)
```

Files stay under 500 lines. Public functions have typed interfaces. All config placeholders (email, phone, LinkedIn, calendar link, price) live in `src/content/site.ts`.

## Error handling

- Contact API: reject invalid or missing fields with 400 and a field map; on SMTP failure return 502 with a generic message and log the error; never expose SMTP details. Honeypot filled returns 200 silently.
- Deck: unknown slide index clamps to range. Works without JavaScript as a scrollable page.
- Missing env vars: contact route returns 503 with a clear message in dev; build does not depend on them.

## Testing

- Vitest. Content tests: every case study has all required fields, slugs unique, deck references only existing case studies, no forbidden marketing words in copy.
- Contact validation unit tests: valid payload passes, missing email fails, honeypot short-circuits.
- `npm run build` and `npm run lint` must pass.

## Out of scope

- Domain purchase, DNS, Vercel project creation (Jordan does these).
- Real screenshots and headshot (placeholders until supplied).
- CMS, blog, analytics, newsletter.
