# Run4Dev Website Redesign — Design Spec

**Date**: 2026-04-11
**Project**: run4dev.com corporate website
**Framework**: Astro 5 + Tailwind CSS 4 (existing)
**Languages**: EN / DE / IT (path-based i18n, existing infrastructure)

---

## 1. Strategic Context

### Business Model
Run4Dev is an AI automation company based in Regensburg, Germany. Revenue comes from **custom AI automation services** built using the proprietary Cortex engine. Cortex is not open source and is not sold directly — it is the competitive advantage powering client solutions.

A second product — a **local AI assistant accessible via Telegram** — is under development and will be teased on the website with a waitlist.

### Target Audiences
- **Primary: Enterprise / B2B buyers** — CTOs, engineering leads, operations managers looking for AI automation. Conversion goal: book a strategy call.
- **Secondary: Individuals / small businesses** — interested in a personal AI assistant. Conversion goal: join the Telegram agent waitlist.

### Conversion Goals
- Enterprise visitors → "Book a Free Strategy Call" (primary CTA throughout)
- Individual visitors → "Join the Waitlist" (Telegram AI assistant teaser)

### Design Direction
Keep the existing Anthropic-inspired light design (cream/warm tones, serif headings, particle hero). No visual redesign — the changes are structural and content-focused.

---

## 2. Site Structure

### Navigation
- Logo: "Run4Dev" (text, keep current)
- Links: Home, Solutions, Technology, About, Contact
- Language switcher: EN / DE / IT
- CTA button: "Book a Call"

### Pages
1. **Home** — `/[lang]/`
2. **Solutions** — `/[lang]/solutions` (replaces `/[lang]/services`)
3. **Technology** — `/[lang]/technology` (replaces `/[lang]/cortex-framework`)
4. **About** — `/[lang]/about`
5. **Contact** — `/[lang]/contact`

### Key Structural Changes
- "Services" page → renamed "Solutions" (outcome framing)
- "Cortex Framework" page → renamed "Technology" (internal engine, not a product)
- Remove service type dropdown from contact form
- Add Telegram AI assistant teaser section (homepage + contact page)
- Add anonymized case study section (homepage)

---

## 3. Page Designs

### 3.1 Homepage

The homepage tells a story: you have a problem → we solve it → here's proof → here's how → something exciting is coming → take action.

**Section 1: Hero**
- Headline: "Your Team Is Stuck Doing Work AI Should Handle"
- Subtitle: "We build custom AI agents that take over repetitive workflows, cut operational costs, and let your team focus on growth."
- Primary CTA: "Book a Free Strategy Call" → links to `/[lang]/contact`
- Secondary CTA: "See Our Solutions" → links to `/[lang]/solutions`
- Trust bar: "Based in Germany" / "Enterprise-grade security" / "< 30 min response" / "GDPR compliant"
- Component: ParticleHero (existing)

**Section 2: Pain + Solution Cards**
- Section headline: "Your Team Deserves Better Than Repetitive Work"
- Section subtitle: "Companies waste 40% of employee time on tasks AI handles better. We deploy agents that work 24/7 with zero errors."
- 3 GlowCards:
  - Card 1: "Stop Losing Time to Manual Work" — We build AI agents tailored to your exact workflows. Customer support, data processing, reporting — handled automatically.
  - Card 2: "Cut Operational Costs" — End-to-end process automation that connects your existing systems. No more manual data transfer between tools.
  - Card 3: "Scale Without Hiring" — AI agents that grow with your business. Handle 10x the workload without adding headcount.

**Section 3: Case Study Teaser**
- Label: "Real Results"
- Headline: "What We've Built"
- Anonymized case study card:
  - Client type: "A workforce management company"
  - Result headline: "Reduced manual operations time by 80%"
  - Description: Deployed specialized AI agents handling assignments, worker management, and daily operations across a multi-tenant platform. Processes that took hours now complete in minutes. Real-time cost tracking ensures budget predictability.
- Component: GlowCard (existing)

**Section 4: Metrics**
- Headline: "Proven Results, Measurable Impact"
- 4 MetricCounters:
  - "10x" — Faster process execution
  - "60%" — Average cost reduction
  - "24/7" — Always-on AI agents
  - "80%" — Less manual work for your team
- Component: MetricCounter (existing)

**Section 5: How It Works**
- Label: "How It Works"
- Headline: "From Idea to Deployed AI in 4 Steps"
- 4 steps:
  1. Discovery — We audit your operations and find the highest-ROI automation opportunities
  2. Design — We architect the AI agent system tailored to your needs
  3. Build & Test — We develop, test, and validate against real scenarios
  4. Deploy & Optimize — Your agents go live with monitoring and continuous improvement
- Component: StepTimeline (existing)

**Section 6: Telegram AI Teaser**
- Label: "Coming Soon"
- Headline: "Your Personal AI Assistant on Telegram"
- Description: "A full AI assistant that runs locally on your machine. Chat with it on Telegram. It can code, search, manage files, automate tasks — anything you need. Your data never leaves your device."
- Key points: Runs locally / Telegram interface / Your data stays yours
- CTA: "Join the Waitlist" (email capture)
- Component: New section — styled as a highlighted card within a GlowCard or distinct container
- Note: Waitlist email capture uses a mailto: link to eni@run4dev.com as the initial implementation. Can be upgraded to Formspree or Resend later.

**Section 7: Final CTA**
- Headline: "Ready to Automate?"
- Subtitle: "Book a free 30-minute strategy session. We'll identify your top automation opportunities and show you the expected ROI."
- CTA: "Book Your Free Strategy Call"
- Note: "Average response time: 32 minutes"
- Component: CTASection (existing)

---

### 3.2 Solutions Page

Replaces the current Services page. Each section leads with the client's pain, then presents the solution and expected result.

**Hero**
- Headline: "Every Business Has Processes That Shouldn't Need People"
- Subtitle: "We find the bottlenecks draining your team's time and replace them with AI agents that work faster, cheaper, and around the clock."
- No particles (keep differentiated from homepage hero)

**Solution 1: "Your team is drowning in repetitive tasks"**
- Solution: Custom AI Agent Development
- Description: We build agents tailored to your exact workflows — customer support, data processing, reporting, operations. Each agent is purpose-built with the right tools and the right guardrails for your use case.
- Result: "Teams reclaim 20+ hours per week"
- Deliverables: Custom agent architecture, tool development, testing suite, deployment, documentation

**Solution 2: "Your systems don't talk to each other"**
- Solution: Process Automation & Integration
- Description: We connect your AI agents to your existing systems — CRMs, ERPs, databases, APIs, communication tools. End-to-end automation from trigger to action, with human oversight where you need it.
- Result: "Zero manual data transfer between systems"
- Deliverables: System integration, API connectors, workflow automation, monitoring dashboards

**Solution 3: "You don't know where to start with AI"**
- Solution: AI Strategy & Consulting
- Description: We audit your operations, map automation opportunities, and build a prioritized roadmap with clear ROI projections for each initiative. No commitment required.
- Result: "Clear plan with projected ROI before you spend a euro"
- Deliverables: Process audit report, automation opportunity matrix, ROI projections, implementation roadmap

**Solution 4: "You need more than just AI"**
- Solution: Web & App Development
- Description: Beyond AI, we build the digital products your business needs. Custom web applications, mobile apps, dashboards — engineered for performance and exceptional user experience.
- Result: "One team, end to end — no vendor juggling"
- Deliverables: Full-stack web/mobile development, UI/UX design, API development, cloud deployment

**Solution 5: "You need it to keep working after launch"**
- Solution: Ongoing Support & Optimization
- Description: AI agents improve over time. We monitor performance, optimize costs, and evolve your agents as your business grows. Dedicated support with guaranteed response times.
- Result: "AI that gets better over time, not stale"
- Deliverables: Monitoring, cost optimization reports, quarterly reviews, priority support, agent upgrades

**Bottom CTA**
- Headline: "Not Sure Which Solution Fits?"
- Subtitle: "Book a free strategy call and we'll figure it out together."
- CTA: "Book Your Free Strategy Call"

---

### 3.3 Technology Page

Replaces the current Cortex Framework page. Explains why solutions are better because of the engine behind them — builds confidence without trying to sell the framework itself.

**Hero**
- Headline: "Built on Technology We Engineered From the Ground Up"
- Subtitle: "Our proprietary Cortex engine is why our AI solutions work in production — not just in demos."
- Primary CTA: "See Our Solutions" → links to Solutions page
- Secondary CTA: "Talk to Our Team" → links to Contact

**Section: Why It Matters to You**
3 cards, outcome-focused:
- Card 1: "Your agents won't break in production" — Cortex is type-safe and battle-tested. Built-in error handling, sandboxing, and retry logic mean your AI agents handle edge cases gracefully.
- Card 2: "You're never locked into one AI provider" — Cortex works with Claude, GPT, Gemini, and more. If a provider raises prices or goes down, we switch without rebuilding.
- Card 3: "You see exactly what you're paying for" — Every AI call is tracked down to the token. Real-time cost dashboards so there are no surprise bills.

**Section: Under the Hood**
For technical buyers (CTOs, engineering leads) who want to dig deeper. Clean grid of features:
- Hierarchical agent delegation
- Sandboxed code execution
- Real-time streaming (SSE)
- Role-based access control
- Human-in-the-loop confirmations
- Lifecycle hooks & observability
- Debug dashboard
- Multi-model cost optimization

Each feature gets a title and one-sentence description. No deep technical docs — just enough to signal depth.

**Section: Code Example**
Keep the existing TypeScript code block showing the Cortex API. This is for the technical champion who will recommend Run4Dev to their CTO. Shows the API is clean and well-designed.

**Section: Use Cases**
Keep existing 4 use cases but rewrite with outcome focus:
- Customer Support Automation — "Resolve tickets 80% faster"
- Data Processing Pipelines — "Zero manual data handling"
- Internal Operations — "Automate HR, IT, inventory workflows"
- Complex Business Logic — "Orchestrate multi-step approval chains"

**Bottom CTA**
- Headline: "Want to See How This Would Work for You?"
- CTA: "Book a Strategy Call"

---

### 3.4 About Page

**Hero**
- Headline: "We Didn't Set Out to Build an AI Framework"
- Subtitle: "We were solving real client problems — time tracking, workforce management, operations — when we realized we kept building the same agent infrastructure over and over. So we built Cortex."

**Our Story**
Keep the current authentic narrative. Add forward-looking closing: "Today, Cortex powers every automation project we deliver. And we're building something new — a personal AI assistant that runs locally and talks to you on Telegram. Because we believe everyone deserves an AI that works for them, not the other way around."

**What Sets Us Apart — 4 cards, client-benefit framing:**
1. "We use what we sell" — Cortex runs in production every day on real client projects. Every feature exists because a real project needed it.
2. "German engineering, global reach" — Based in Regensburg with enterprise-grade standards for security, reliability, and data privacy. GDPR by default.
3. "One team, end to end" — We don't just do AI. We build the web apps, APIs, integrations, and infrastructure around it.
4. "Transparent from day one" — Real-time cost tracking isn't just a feature we sell — it's how we run every project. You always know what you're paying for.

**Company Details**
- Name: Run4Dev
- Location: Steinweg 4, 93059 Regensburg, Germany
- Focus: AI Agent Development, Process Automation, Web & App Development
- Email: eni@run4dev.com

**Bottom CTA:** "Ready to Work With Us?" → Contact page

---

### 3.5 Contact Page

**Hero**
- Headline: "Let's Figure Out What AI Can Do For You"
- Subtitle: "Whether you have a specific project in mind or just want to explore what's possible — we'll give you honest answers, not a sales pitch."

**Two-column layout:**

**Left: Contact Form (5 fields)**
- Name (text input, required)
- Email (email input, required)
- Company (text input, optional)
- "What's your biggest operational challenge?" (textarea, required)
- Budget range (dropdown: < €10K / €10K–€50K / €50K–€100K / > €100K / Not sure yet)
- Submit button: "Get in Touch"

**Right: Direct Info**
- Email: eni@run4dev.com
- Location: Regensburg, Germany
- Response time: "We typically respond within 30 minutes during business hours"
- Optional: "Book a call directly" link (placeholder for Calendly/Cal.com)

**Below form: Telegram Waitlist**
- Headline: "Looking for a Personal AI Assistant?"
- Description: "Our Telegram-based AI agent is coming soon. Runs locally, talks to you on Telegram, your data stays yours."
- Email capture: single email field + "Join the Waitlist" button

---

## 4. Content & i18n

### Content Changes
All content in the i18n TypeScript files needs to be rewritten to match this spec. The `SiteContent` type interface in `src/i18n/types.ts` needs to be updated to reflect:
- Renamed pages (services → solutions, cortex → technology)
- New sections (case study, Telegram teaser, Telegram waitlist on contact)
- Removed fields (service type dropdown from contact form)
- Changed fields (contact form textarea label, submit button text)
- New homepage metrics (replace "3+ providers" with "80% less manual work")

### Translation Approach
- Write English content first based on this spec
- Translate to German and Italian
- German content should emphasize Datenschutz (data privacy) and GDPR compliance more prominently — German enterprise buyers value this
- Italian content follows English tone

### SEO Updates
- Update title tags and meta descriptions per page per language
- Update JSON-LD structured data (Organization on all pages, Service on Solutions page)
- Update hreflang tags for renamed URLs
- Update sitemap for new URL structure

---

## 5. Navigation & Routing Changes

### URL Changes
| Current | New |
|---------|-----|
| `/[lang]/services` | `/[lang]/solutions` |
| `/[lang]/cortex-framework` | `/[lang]/technology` |
| `/[lang]/about` | `/[lang]/about` (no change) |
| `/[lang]/contact` | `/[lang]/contact` (no change) |

### File Changes
| Current File | Action |
|-------------|--------|
| `src/pages/[lang]/services.astro` | Rename to `solutions.astro`, rewrite content |
| `src/pages/[lang]/cortex-framework.astro` | Rename to `technology.astro`, rewrite content |
| `src/pages/[lang]/about.astro` | Update content |
| `src/pages/[lang]/contact.astro` | Update content, simplify form, add waitlist |
| `src/pages/[lang]/index.astro` | Update content, add case study + Telegram teaser sections |

### New Components Needed
- `TelegramTeaser.astro` — Coming soon section with waitlist email capture
- `CaseStudyCard.astro` — Anonymized case study display card

### Component Reuse
All existing components (ParticleHero, GlowCard, MetricCounter, StepTimeline, CTASection, ContactForm, Navbar, Footer) remain. Navbar links and ContactForm fields get updated through content/props.

---

## 6. What's Explicitly NOT in Scope

- No visual/design system changes (keep current light theme, fonts, colors, components)
- No pricing page (services are custom-quoted)
- No blog or content marketing pages (future phase)
- No Telegram bot integration (product not ready)
- No backend for waitlist (use Formspree/Resend placeholder or simple mailto)
- No new animations or interaction patterns
- No image/photo assets (keep existing placeholder system)
