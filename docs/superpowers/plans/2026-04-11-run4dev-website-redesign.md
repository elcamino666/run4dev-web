# Run4Dev Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the Run4Dev website from technical feature-focused to pain-first, outcome-focused content with renamed pages (Services→Solutions, Cortex→Technology), new Telegram teaser and case study sections, simplified contact form, and full EN/DE/IT translations.

**Architecture:** Content-driven restructure of an existing Astro 5 + Tailwind CSS 4 site. The i18n type interface gets updated first, then content files, then page files and components. Existing visual design and component library are preserved. Two new components are added (TelegramTeaser, CaseStudyCard).

**Tech Stack:** Astro 5, Tailwind CSS 4, TypeScript, existing component library

**Spec:** `docs/superpowers/specs/2026-04-11-run4dev-website-redesign.md`

---

## File Structure

### Files to Create
- `src/components/TelegramTeaser.astro` — Coming soon section with waitlist email capture
- `src/components/CaseStudyCard.astro` — Anonymized case study display card
- `src/pages/[lang]/solutions.astro` — Replaces services.astro
- `src/pages/[lang]/technology.astro` — Replaces cortex-framework.astro

### Files to Modify
- `src/i18n/types.ts` — Update SiteContent interface for new page structure
- `src/i18n/en.ts` — Rewrite all English content
- `src/i18n/de.ts` — Rewrite all German content
- `src/i18n/it.ts` — Rewrite all Italian content
- `src/components/Navbar.astro` — Update nav links (solutions, technology)
- `src/components/ContactForm.astro` — Remove service dropdown, update labels
- `src/pages/[lang]/index.astro` — Add case study and Telegram teaser sections
- `src/pages/[lang]/about.astro` — Update content references, add CTA
- `src/pages/[lang]/contact.astro` — Add Telegram waitlist section below form

### Files to Delete
- `src/pages/[lang]/services.astro` — Replaced by solutions.astro
- `src/pages/[lang]/cortex-framework.astro` — Replaced by technology.astro

---

## Task 1: Update i18n Type Interface

**Files:**
- Modify: `src/i18n/types.ts`

- [ ] **Step 1: Replace the SiteContent interface**

Replace the entire contents of `src/i18n/types.ts` with:

```ts
export interface SiteContent {
  nav: {
    home: string;
    solutions: string;
    technology: string;
    about: string;
    contact: string;
    bookCall: string;
  };
  home: {
    hero: {
      h1: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    trustBar: string[];
    painSolution: {
      headline: string;
      description: string;
      cards: Array<{ title: string; description: string }>;
    };
    caseStudy: {
      label: string;
      headline: string;
      clientType: string;
      resultHeadline: string;
      description: string;
    };
    metricsHeadline: string;
    metrics: Array<{ value: string; suffix: string; label: string }>;
    howItWorks: {
      headline: string;
      subtitle: string;
      steps: Array<{ title: string; description: string }>;
    };
    telegramTeaser: {
      label: string;
      headline: string;
      description: string;
      points: string[];
      cta: string;
      emailPlaceholder: string;
    };
    cta: {
      headline: string;
      description: string;
      button: string;
      note: string;
    };
  };
  technology: {
    hero: {
      h1: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    whyItMatters: {
      headline: string;
      cards: Array<{ title: string; description: string }>;
    };
    underTheHood: {
      headline: string;
      features: Array<{ title: string; description: string }>;
    };
    codeExample: {
      headline: string;
      code: string;
    };
    useCases: {
      headline: string;
      items: Array<{ title: string; description: string }>;
    };
    cta: {
      headline: string;
      button: string;
    };
  };
  solutions: {
    hero: {
      h1: string;
      subtitle: string;
    };
    items: Array<{
      pain: string;
      title: string;
      description: string;
      result: string;
      deliverables: string;
    }>;
    cta: {
      headline: string;
      description: string;
      button: string;
    };
  };
  about: {
    hero: {
      h1: string;
      intro: string;
    };
    story: {
      headline: string;
      content: string;
    };
    setsApartHeadline: string;
    differentiators: Array<{
      title: string;
      description: string;
    }>;
    company: {
      name: string;
      location: string;
      focus: string;
      technology: string;
      email: string;
    };
    cta: {
      headline: string;
      button: string;
    };
  };
  contact: {
    hero: {
      h1: string;
      subtitle: string;
    };
    form: {
      name: string;
      email: string;
      company: string;
      companyOptional: string;
      challenge: string;
      budget: string;
      budgetOptions: string[];
      submit: string;
    };
    info: {
      email: string;
      location: string;
      responseTime: string;
      bookCallDirect: string;
    };
    telegramWaitlist: {
      headline: string;
      description: string;
      emailPlaceholder: string;
      cta: string;
    };
  };
  footer: {
    privacy: string;
    imprint: string;
  };
  seo: {
    home: { title: string; description: string; ogTitle: string };
    technology: { title: string; description: string };
    solutions: { title: string; description: string };
    about: { title: string; description: string };
    contact: { title: string; description: string };
  };
}
```

- [ ] **Step 2: Verify TypeScript compiles (expect errors in en/de/it.ts — that's correct)**

Run: `npx astro check 2>&1 | head -5`
Expected: Type errors in en.ts, de.ts, it.ts because they still have the old shape. This confirms the new types are active.

- [ ] **Step 3: Commit**

```bash
git add src/i18n/types.ts
git commit -m "refactor: update SiteContent interface for redesign"
```

---

## Task 2: Write English Content

**Files:**
- Modify: `src/i18n/en.ts`

- [ ] **Step 1: Replace the entire English content file**

Replace the full contents of `src/i18n/en.ts` with:

```ts
import type { SiteContent } from './types';

export const en: SiteContent = {
  nav: {
    home: 'Home',
    solutions: 'Solutions',
    technology: 'Technology',
    about: 'About',
    contact: 'Contact',
    bookCall: 'Book a Call',
  },
  home: {
    hero: {
      h1: 'Your Team Is Stuck Doing Work AI Should Handle',
      subtitle: 'We build custom AI agents that take over repetitive workflows, cut operational costs, and let your team focus on growth.',
      ctaPrimary: 'Book a Free Strategy Call',
      ctaSecondary: 'See Our Solutions',
    },
    trustBar: [
      'Based in Germany',
      'Enterprise-grade security',
      '< 30 min response',
      'GDPR compliant',
    ],
    painSolution: {
      headline: 'Your Team Deserves Better Than Repetitive Work',
      description: 'Companies waste 40% of employee time on tasks AI handles better. We deploy agents that work 24/7 with zero errors.',
      cards: [
        {
          title: 'Stop Losing Time to Manual Work',
          description: 'We build AI agents tailored to your exact workflows. Customer support, data processing, reporting \u2014 handled automatically.',
        },
        {
          title: 'Cut Operational Costs',
          description: 'End-to-end process automation that connects your existing systems. No more manual data transfer between tools.',
        },
        {
          title: 'Scale Without Hiring',
          description: 'AI agents that grow with your business. Handle 10x the workload without adding headcount.',
        },
      ],
    },
    caseStudy: {
      label: 'Real Results',
      headline: 'What We\u2019ve Built',
      clientType: 'A workforce management company',
      resultHeadline: 'Reduced manual operations time by 80%',
      description: 'Deployed specialized AI agents handling assignments, worker management, and daily operations across a multi-tenant platform. Processes that took hours now complete in minutes. Real-time cost tracking ensures budget predictability.',
    },
    metricsHeadline: 'Proven Results, Measurable Impact',
    metrics: [
      { value: '10', suffix: 'x', label: 'Faster process execution' },
      { value: '60', suffix: '%', label: 'Average cost reduction' },
      { value: '24/7', suffix: '', label: 'Always-on AI agents' },
      { value: '80', suffix: '%', label: 'Less manual work for your team' },
    ],
    howItWorks: {
      headline: 'From Idea to Deployed AI in 4 Steps',
      subtitle: 'How It Works',
      steps: [
        {
          title: 'Discovery',
          description: 'We audit your operations and find the highest-ROI automation opportunities.',
        },
        {
          title: 'Design',
          description: 'We architect the AI agent system tailored to your needs.',
        },
        {
          title: 'Build & Test',
          description: 'We develop, test, and validate against real scenarios.',
        },
        {
          title: 'Deploy & Optimize',
          description: 'Your agents go live with monitoring and continuous improvement.',
        },
      ],
    },
    telegramTeaser: {
      label: 'Coming Soon',
      headline: 'Your Personal AI Assistant on Telegram',
      description: 'A full AI assistant that runs locally on your machine. Chat with it on Telegram. It can code, search, manage files, automate tasks \u2014 anything you need. Your data never leaves your device.',
      points: ['Runs locally', 'Telegram interface', 'Your data stays yours'],
      cta: 'Join the Waitlist',
      emailPlaceholder: 'your@email.com',
    },
    cta: {
      headline: 'Ready to Automate?',
      description: 'Book a free 30-minute strategy session. We\u2019ll identify your top automation opportunities and show you the expected ROI.',
      button: 'Book Your Free Strategy Call',
      note: 'Average response time: 32 minutes',
    },
  },
  technology: {
    hero: {
      h1: 'Built on Technology We Engineered From the Ground Up',
      subtitle: 'Our proprietary Cortex engine is why our AI solutions work in production \u2014 not just in demos.',
      ctaPrimary: 'See Our Solutions',
      ctaSecondary: 'Talk to Our Team',
    },
    whyItMatters: {
      headline: 'Why It Matters to You',
      cards: [
        {
          title: 'Your agents won\u2019t break in production',
          description: 'Cortex is type-safe and battle-tested. Built-in error handling, sandboxing, and retry logic mean your AI agents handle edge cases gracefully.',
        },
        {
          title: 'You\u2019re never locked into one AI provider',
          description: 'Cortex works with Claude, GPT, Gemini, and more. If a provider raises prices or goes down, we switch without rebuilding.',
        },
        {
          title: 'You see exactly what you\u2019re paying for',
          description: 'Every AI call is tracked down to the token. Real-time cost dashboards so there are no surprise bills.',
        },
      ],
    },
    underTheHood: {
      headline: 'Under the Hood',
      features: [
        { title: 'Hierarchical Agent Delegation', description: 'Orchestrator agents automatically delegate to specialized sub-agents.' },
        { title: 'Sandboxed Code Execution', description: 'AI agents run scripts in isolated environments with memory limits and timeouts.' },
        { title: 'Real-Time Streaming', description: 'Server-Sent Events for live agent reasoning and tool execution.' },
        { title: 'Role-Based Access Control', description: 'Tools and actions gated by user roles and permissions.' },
        { title: 'Human-in-the-Loop', description: 'Agents pause for human approval before sensitive operations.' },
        { title: 'Lifecycle Hooks', description: 'Tap into every agent event for custom logging, alerting, or analytics.' },
        { title: 'Debug Dashboard', description: 'Visual debugging with live event tracing and cost analysis.' },
        { title: 'Multi-Model Cost Optimization', description: 'Automatic provider selection based on task complexity and budget.' },
      ],
    },
    codeExample: {
      headline: 'Clean API, Powerful Engine',
      code: `import { createCortex, Model } from "@run4dev/cortex";

const { defineAgent, defineTool, createRuntime } = createCortex<{
  userId: string;
  role: "admin" | "user";
}>();

const agent = defineAgent({
  name: "support-agent",
  model: Model.Sonnet4,
  systemPrompt: ({ context }) =>
    \`You help \${context.role} users with their requests.\`,
  tools: [searchDocs, createTicket],
  subAgents: [billingAgent, escalationAgent],
});

const runtime = createRuntime();
const result = await runtime.run({
  agent,
  messages,
  context: { userId: "u_123", role: "admin" },
});
console.log(result.cost.totalCostUsd);`,
    },
    useCases: {
      headline: 'What Teams Build with Cortex',
      items: [
        {
          title: 'Customer Support Automation',
          description: 'Resolve tickets 80% faster with agents that search knowledge bases and escalate intelligently.',
        },
        {
          title: 'Data Processing Pipelines',
          description: 'Zero manual data handling. Agents extract, transform, validate, and route data across systems.',
        },
        {
          title: 'Internal Operations',
          description: 'Automate HR onboarding, IT helpdesk, and inventory management workflows.',
        },
        {
          title: 'Complex Business Logic',
          description: 'Orchestrate multi-step approval chains, compliance checks, and automated reporting.',
        },
      ],
    },
    cta: {
      headline: 'Want to See How This Would Work for You?',
      button: 'Book a Strategy Call',
    },
  },
  solutions: {
    hero: {
      h1: 'Every Business Has Processes That Shouldn\u2019t Need People',
      subtitle: 'We find the bottlenecks draining your team\u2019s time and replace them with AI agents that work faster, cheaper, and around the clock.',
    },
    items: [
      {
        pain: 'Your team is drowning in repetitive tasks',
        title: 'Custom AI Agent Development',
        description: 'We build agents tailored to your exact workflows \u2014 customer support, data processing, reporting, operations. Each agent is purpose-built with the right tools and the right guardrails for your use case.',
        result: 'Teams reclaim 20+ hours per week',
        deliverables: 'Custom agent architecture, tool development, testing suite, deployment, documentation.',
      },
      {
        pain: 'Your systems don\u2019t talk to each other',
        title: 'Process Automation & Integration',
        description: 'We connect your AI agents to your existing systems \u2014 CRMs, ERPs, databases, APIs, communication tools. End-to-end automation from trigger to action, with human oversight where you need it.',
        result: 'Zero manual data transfer between systems',
        deliverables: 'System integration, API connectors, workflow automation, monitoring dashboards.',
      },
      {
        pain: 'You don\u2019t know where to start with AI',
        title: 'AI Strategy & Consulting',
        description: 'We audit your operations, map automation opportunities, and build a prioritized roadmap with clear ROI projections for each initiative. No commitment required.',
        result: 'Clear plan with projected ROI before you spend a euro',
        deliverables: 'Process audit report, automation opportunity matrix, ROI projections, implementation roadmap.',
      },
      {
        pain: 'You need more than just AI',
        title: 'Web & App Development',
        description: 'Beyond AI, we build the digital products your business needs. Custom web applications, mobile apps, dashboards \u2014 engineered for performance and exceptional user experience.',
        result: 'One team, end to end \u2014 no vendor juggling',
        deliverables: 'Full-stack web/mobile development, UI/UX design, API development, cloud deployment.',
      },
      {
        pain: 'You need it to keep working after launch',
        title: 'Ongoing Support & Optimization',
        description: 'AI agents improve over time. We monitor performance, optimize costs, and evolve your agents as your business grows. Dedicated support with guaranteed response times.',
        result: 'AI that gets better over time, not stale',
        deliverables: 'Monitoring, cost optimization reports, quarterly reviews, priority support, agent upgrades.',
      },
    ],
    cta: {
      headline: 'Not Sure Which Solution Fits?',
      description: 'Book a free strategy call and we\u2019ll figure it out together.',
      button: 'Book Your Free Strategy Call',
    },
  },
  about: {
    hero: {
      h1: 'We Didn\u2019t Set Out to Build an AI Framework',
      intro: 'We were solving real client problems \u2014 time tracking, workforce management, operations \u2014 when we realized we kept building the same agent infrastructure over and over. So we built Cortex.',
    },
    story: {
      headline: 'Our Story',
      content: 'We didn\u2019t set out to build an AI framework. We were solving real client problems \u2014 time tracking, workforce management, operations \u2014 when we realized we kept building the same agent infrastructure over and over. Cortex was born from that frustration. A clean, typed, multi-provider engine that handles the hard parts so we can focus on the business logic.\n\nToday, Cortex powers every automation project we deliver. And we\u2019re building something new \u2014 a personal AI assistant that runs locally and talks to you on Telegram. Because we believe everyone deserves an AI that works for them, not the other way around.',
    },
    setsApartHeadline: 'What Sets Us Apart',
    differentiators: [
      {
        title: 'We use what we sell.',
        description: 'Cortex runs in production every day on real client projects. Every feature exists because a real project needed it.',
      },
      {
        title: 'German engineering, global reach.',
        description: 'Based in Regensburg with enterprise-grade standards for security, reliability, and data privacy. GDPR by default.',
      },
      {
        title: 'One team, end to end.',
        description: 'We don\u2019t just do AI. We build the web apps, APIs, integrations, and infrastructure around it.',
      },
      {
        title: 'Transparent from day one.',
        description: 'Real-time cost tracking isn\u2019t just a feature we sell \u2014 it\u2019s how we run every project. You always know what you\u2019re paying for.',
      },
    ],
    company: {
      name: 'Run4Dev',
      location: 'Steinweg 4, 93059 Regensburg, Germany',
      focus: 'AI Agent Development, Process Automation, Web & App Development',
      technology: 'Cortex Engine (TypeScript, Node.js)',
      email: 'eni@run4dev.com',
    },
    cta: {
      headline: 'Ready to Work With Us?',
      button: 'Get in Touch',
    },
  },
  contact: {
    hero: {
      h1: 'Let\u2019s Figure Out What AI Can Do For You',
      subtitle: 'Whether you have a specific project in mind or just want to explore what\u2019s possible \u2014 we\u2019ll give you honest answers, not a sales pitch.',
    },
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      companyOptional: '(optional)',
      challenge: 'What\u2019s your biggest operational challenge?',
      budget: 'Budget range',
      budgetOptions: [
        '< \u20ac10K',
        '\u20ac10K\u2013\u20ac50K',
        '\u20ac50K\u2013\u20ac100K',
        '> \u20ac100K',
        'Not sure yet',
      ],
      submit: 'Get in Touch',
    },
    info: {
      email: 'eni@run4dev.com',
      location: 'Regensburg, Germany',
      responseTime: 'We typically respond within 30 minutes during business hours',
      bookCallDirect: 'Or book a call directly',
    },
    telegramWaitlist: {
      headline: 'Looking for a Personal AI Assistant?',
      description: 'Our Telegram-based AI agent is coming soon. Runs locally, talks to you on Telegram, your data stays yours.',
      emailPlaceholder: 'your@email.com',
      cta: 'Join the Waitlist',
    },
  },
  footer: {
    privacy: 'Privacy Policy',
    imprint: 'Imprint',
  },
  seo: {
    home: {
      title: 'Run4Dev | AI Agents & Process Automation | Germany',
      description: 'Run4Dev builds custom AI agents that automate business processes. Reduce costs, save time, scale without hiring. Based in Regensburg, Germany.',
      ogTitle: 'Run4Dev \u2014 AI Agents That Automate Your Business',
    },
    technology: {
      title: 'Our Technology | Cortex AI Engine | Run4Dev',
      description: 'Cortex is Run4Dev\u2019s proprietary AI engine. Multi-provider, type-safe, production-grade. The technology behind our automation solutions.',
    },
    solutions: {
      title: 'AI Automation Solutions | Custom AI Agents | Run4Dev',
      description: 'Custom AI agent development, process automation, strategy consulting, and web development. Enterprise-grade AI solutions by Run4Dev.',
    },
    about: {
      title: 'About Run4Dev | AI Engineering Team in Germany',
      description: 'Run4Dev is an AI and software engineering company based in Regensburg, Germany. Creators of the Cortex engine. Full-stack AI automation.',
    },
    contact: {
      title: 'Contact Run4Dev | Book a Free AI Strategy Call',
      description: 'Get in touch with Run4Dev for AI automation, process optimization, or a free strategy session. Response time under 30 minutes.',
    },
  },
};
```

- [ ] **Step 2: Verify the file compiles against the new types**

Run: `npx tsc --noEmit src/i18n/en.ts 2>&1 | head -10`
Expected: No errors (or only errors from de.ts/it.ts imports).

- [ ] **Step 3: Commit**

```bash
git add src/i18n/en.ts
git commit -m "content: rewrite English copy with pain-first messaging"
```

---

## Task 3: Write German Content

**Files:**
- Modify: `src/i18n/de.ts`

- [ ] **Step 1: Replace the entire German content file**

Replace the full contents of `src/i18n/de.ts` with:

```ts
import type { SiteContent } from './types';

export const de: SiteContent = {
  nav: {
    home: 'Startseite',
    solutions: 'L\u00f6sungen',
    technology: 'Technologie',
    about: '\u00dcber uns',
    contact: 'Kontakt',
    bookCall: 'Gespr\u00e4ch buchen',
  },
  home: {
    hero: {
      h1: 'Ihr Team verschwendet Zeit mit Aufgaben, die KI erledigen sollte',
      subtitle: 'Wir entwickeln ma\u00dfgeschneiderte KI-Agenten, die repetitive Workflows \u00fcbernehmen, Betriebskosten senken und Ihrem Team freie Hand f\u00fcr Wachstum geben.',
      ctaPrimary: 'Kostenloses Strategiegespr\u00e4ch buchen',
      ctaSecondary: 'Unsere L\u00f6sungen ansehen',
    },
    trustBar: [
      'Standort Deutschland',
      'Enterprise-Sicherheit',
      '< 30 Min. Reaktionszeit',
      'DSGVO-konform',
    ],
    painSolution: {
      headline: 'Ihr Team verdient Besseres als repetitive Arbeit',
      description: 'Unternehmen verschwenden 40 % der Arbeitszeit mit Aufgaben, die KI besser erledigt. Wir setzen Agenten ein, die rund um die Uhr fehlerfrei arbeiten.',
      cards: [
        {
          title: 'Schluss mit manueller Zeitverschwendung',
          description: 'Wir entwickeln KI-Agenten f\u00fcr Ihre genauen Workflows. Kundensupport, Datenverarbeitung, Reporting \u2014 automatisch erledigt.',
        },
        {
          title: 'Betriebskosten senken',
          description: 'End-to-End-Prozessautomatisierung, die Ihre bestehenden Systeme verbindet. Keine manuelle Daten\u00fcbertragung mehr.',
        },
        {
          title: 'Skalieren ohne einzustellen',
          description: 'KI-Agenten, die mit Ihrem Unternehmen wachsen. Bew\u00e4ltigen Sie die 10-fache Arbeitslast ohne zus\u00e4tzliches Personal.',
        },
      ],
    },
    caseStudy: {
      label: 'Echte Ergebnisse',
      headline: 'Was wir gebaut haben',
      clientType: 'Ein Workforce-Management-Unternehmen',
      resultHeadline: 'Manuelle Betriebszeit um 80 % reduziert',
      description: 'Spezialisierte KI-Agenten f\u00fcr Einsatzplanung, Mitarbeiterverwaltung und den t\u00e4glichen Betrieb einer Multi-Mandanten-Plattform. Prozesse, die Stunden dauerten, werden jetzt in Minuten erledigt. Echtzeit-Kostentracking gew\u00e4hrleistet Budget-Planbarkeit.',
    },
    metricsHeadline: 'Bewiesene Ergebnisse, messbare Wirkung',
    metrics: [
      { value: '10', suffix: 'x', label: 'Schnellere Prozessausf\u00fchrung' },
      { value: '60', suffix: '%', label: 'Durchschnittliche Kostensenkung' },
      { value: '24/7', suffix: '', label: 'KI-Agenten immer im Einsatz' },
      { value: '80', suffix: '%', label: 'Weniger manuelle Arbeit f\u00fcr Ihr Team' },
    ],
    howItWorks: {
      headline: 'Von der Idee zum KI-Agenten in 4 Schritten',
      subtitle: 'So funktioniert\u2019s',
      steps: [
        {
          title: 'Analyse',
          description: 'Wir pr\u00fcfen Ihre Abl\u00e4ufe und identifizieren die Automatisierungen mit dem h\u00f6chsten ROI.',
        },
        {
          title: 'Design',
          description: 'Wir entwerfen das KI-Agenten-System passend zu Ihren Anforderungen.',
        },
        {
          title: 'Entwicklung & Test',
          description: 'Wir entwickeln, testen und validieren anhand realer Szenarien.',
        },
        {
          title: 'Deployment & Optimierung',
          description: 'Ihre Agenten gehen live \u2014 mit Monitoring und kontinuierlicher Verbesserung.',
        },
      ],
    },
    telegramTeaser: {
      label: 'Bald verf\u00fcgbar',
      headline: 'Ihr pers\u00f6nlicher KI-Assistent auf Telegram',
      description: 'Ein vollwertiger KI-Assistent, der lokal auf Ihrem Rechner l\u00e4uft. Chatten Sie \u00fcber Telegram. Er kann coden, suchen, Dateien verwalten, Aufgaben automatisieren \u2014 alles, was Sie brauchen. Ihre Daten verlassen nie Ihr Ger\u00e4t.',
      points: ['L\u00e4uft lokal', 'Telegram-Interface', 'Ihre Daten bleiben bei Ihnen'],
      cta: 'Auf die Warteliste',
      emailPlaceholder: 'ihre@email.de',
    },
    cta: {
      headline: 'Bereit zu automatisieren?',
      description: 'Buchen Sie ein kostenloses 30-Min\u00fctiges Strategiegespr\u00e4ch. Wir identifizieren Ihre Top-Automatisierungschancen und zeigen den erwarteten ROI.',
      button: 'Kostenloses Strategiegespr\u00e4ch buchen',
      note: 'Durchschnittliche Antwortzeit: 32 Minuten',
    },
  },
  technology: {
    hero: {
      h1: 'Aufgebaut auf Technologie, die wir selbst entwickelt haben',
      subtitle: 'Unsere propriet\u00e4re Cortex-Engine ist der Grund, warum unsere KI-L\u00f6sungen in der Produktion funktionieren \u2014 nicht nur in Demos.',
      ctaPrimary: 'Unsere L\u00f6sungen ansehen',
      ctaSecondary: 'Mit unserem Team sprechen',
    },
    whyItMatters: {
      headline: 'Warum das f\u00fcr Sie wichtig ist',
      cards: [
        {
          title: 'Ihre Agenten fallen in der Produktion nicht aus',
          description: 'Cortex ist typsicher und praxiserprobt. Integrierte Fehlerbehandlung, Sandboxing und Retry-Logik sorgen daf\u00fcr, dass Ihre KI-Agenten Grenzf\u00e4lle zuverl\u00e4ssig bew\u00e4ltigen.',
        },
        {
          title: 'Sie sind nie an einen KI-Anbieter gebunden',
          description: 'Cortex funktioniert mit Claude, GPT, Gemini und mehr. Wenn ein Anbieter die Preise erh\u00f6ht oder ausf\u00e4llt, wechseln wir ohne Neuentwicklung.',
        },
        {
          title: 'Sie sehen genau, wof\u00fcr Sie zahlen',
          description: 'Jeder KI-Aufruf wird bis zum Token getrackt. Echtzeit-Kosten-Dashboards \u2014 keine \u00dcberraschungen bei der Rechnung.',
        },
      ],
    },
    underTheHood: {
      headline: 'Unter der Haube',
      features: [
        { title: 'Hierarchische Agenten-Delegation', description: 'Orchestrator-Agenten delegieren automatisch an spezialisierte Sub-Agenten.' },
        { title: 'Sandboxed Code-Ausf\u00fchrung', description: 'KI-Agenten f\u00fchren Scripts in isolierten Umgebungen mit Speicherlimits und Timeouts aus.' },
        { title: 'Echtzeit-Streaming', description: 'Server-Sent Events f\u00fcr Live-Agenten-Reasoning und Tool-Ausf\u00fchrung.' },
        { title: 'Rollenbasierte Zugriffskontrolle', description: 'Tools und Aktionen gesteuert durch Benutzerrollen und Berechtigungen.' },
        { title: 'Human-in-the-Loop', description: 'Agenten pausieren f\u00fcr menschliche Freigabe bei sensiblen Operationen.' },
        { title: 'Lifecycle-Hooks', description: 'Zugriff auf jedes Agenten-Event f\u00fcr Custom-Logging, Alerting oder Analytics.' },
        { title: 'Debug-Dashboard', description: 'Visuelles Debugging mit Live-Event-Tracing und Kostenanalyse.' },
        { title: 'Multi-Modell-Kostenoptimierung', description: 'Automatische Anbieterauswahl basierend auf Aufgabenkomplexit\u00e4t und Budget.' },
      ],
    },
    codeExample: {
      headline: 'Saubere API, leistungsstarke Engine',
      code: `import { createCortex, Model } from "@run4dev/cortex";

const { defineAgent, defineTool, createRuntime } = createCortex<{
  userId: string;
  role: "admin" | "user";
}>();

const agent = defineAgent({
  name: "support-agent",
  model: Model.Sonnet4,
  systemPrompt: ({ context }) =>
    \`You help \${context.role} users with their requests.\`,
  tools: [searchDocs, createTicket],
  subAgents: [billingAgent, escalationAgent],
});

const runtime = createRuntime();
const result = await runtime.run({
  agent,
  messages,
  context: { userId: "u_123", role: "admin" },
});
console.log(result.cost.totalCostUsd);`,
    },
    useCases: {
      headline: 'Was Teams mit Cortex bauen',
      items: [
        {
          title: 'Kundensupport-Automatisierung',
          description: 'Tickets 80 % schneller l\u00f6sen mit Agenten, die Wissensdatenbanken durchsuchen und intelligent eskalieren.',
        },
        {
          title: 'Datenverarbeitungs-Pipelines',
          description: 'Null manuelle Datenverarbeitung. Agenten extrahieren, transformieren, validieren und routen Daten zwischen Systemen.',
        },
        {
          title: 'Interne Prozesse',
          description: 'HR-Onboarding, IT-Helpdesk und Lagerverwaltungs-Workflows automatisieren.',
        },
        {
          title: 'Komplexe Gesch\u00e4ftslogik',
          description: 'Mehrstufige Freigabeketten, Compliance-Pr\u00fcfungen und automatisiertes Reporting orchestrieren.',
        },
      ],
    },
    cta: {
      headline: 'M\u00f6chten Sie sehen, wie das f\u00fcr Sie funktioniert?',
      button: 'Strategiegespr\u00e4ch buchen',
    },
  },
  solutions: {
    hero: {
      h1: 'Jedes Unternehmen hat Prozesse, die keine Menschen brauchen',
      subtitle: 'Wir finden die Engp\u00e4sse, die Ihrem Team Zeit rauben, und ersetzen sie durch KI-Agenten, die schneller, g\u00fcnstiger und rund um die Uhr arbeiten.',
    },
    items: [
      {
        pain: 'Ihr Team ertrinkt in repetitiven Aufgaben',
        title: 'Ma\u00dfgeschneiderte KI-Agenten-Entwicklung',
        description: 'Wir entwickeln Agenten f\u00fcr Ihre genauen Workflows \u2014 Kundensupport, Datenverarbeitung, Reporting, Operations. Jeder Agent ist ma\u00dfgeschneidert mit den richtigen Tools und Leitplanken.',
        result: 'Teams gewinnen 20+ Stunden pro Woche zur\u00fcck',
        deliverables: 'Custom-Agenten-Architektur, Tool-Entwicklung, Testsuite, Deployment, Dokumentation.',
      },
      {
        pain: 'Ihre Systeme sprechen nicht miteinander',
        title: 'Prozessautomatisierung & Integration',
        description: 'Wir verbinden Ihre KI-Agenten mit Ihren bestehenden Systemen \u2014 CRMs, ERPs, Datenbanken, APIs, Kommunikationstools. End-to-End-Automatisierung mit menschlicher Kontrolle, wo Sie sie brauchen.',
        result: 'Null manuelle Daten\u00fcbertragung zwischen Systemen',
        deliverables: 'Systemintegration, API-Connectoren, Workflow-Automatisierung, Monitoring-Dashboards.',
      },
      {
        pain: 'Sie wissen nicht, wo Sie mit KI anfangen sollen',
        title: 'KI-Strategie & Beratung',
        description: 'Wir analysieren Ihre Abl\u00e4ufe, identifizieren Automatisierungschancen und erstellen eine priorisierte Roadmap mit klaren ROI-Prognosen. Unverbindlich.',
        result: 'Klarer Plan mit ROI-Prognose, bevor Sie einen Euro ausgeben',
        deliverables: 'Prozess-Audit-Bericht, Automatisierungs-Chancen-Matrix, ROI-Prognosen, Umsetzungs-Roadmap.',
      },
      {
        pain: 'Sie brauchen mehr als nur KI',
        title: 'Web- & App-Entwicklung',
        description: '\u00dcber KI hinaus entwickeln wir die digitalen Produkte, die Ihr Unternehmen braucht. Web-Applikationen, Mobile Apps, Dashboards \u2014 f\u00fcr Performance und exzellente User Experience.',
        result: 'Ein Team, von Anfang bis Ende \u2014 kein Anbieter-Jonglieren',
        deliverables: 'Full-Stack Web/Mobile-Entwicklung, UI/UX-Design, API-Entwicklung, Cloud-Deployment.',
      },
      {
        pain: 'Es muss auch nach dem Launch funktionieren',
        title: 'Laufender Support & Optimierung',
        description: 'KI-Agenten werden mit der Zeit besser. Wir \u00fcberwachen Performance, optimieren Kosten und entwickeln Ihre Agenten weiter, wenn Ihr Unternehmen w\u00e4chst.',
        result: 'KI, die mit der Zeit besser wird, nicht veraltet',
        deliverables: 'Monitoring, Kostenoptimierungs-Reports, Quartals-Reviews, Priority-Support, Agenten-Upgrades.',
      },
    ],
    cta: {
      headline: 'Nicht sicher, welche L\u00f6sung passt?',
      description: 'Buchen Sie ein kostenloses Strategiegespr\u00e4ch und wir finden es gemeinsam heraus.',
      button: 'Kostenloses Strategiegespr\u00e4ch buchen',
    },
  },
  about: {
    hero: {
      h1: 'Wir wollten kein KI-Framework bauen',
      intro: 'Wir haben reale Kundenprobleme gel\u00f6st \u2014 Zeiterfassung, Workforce Management, Operations \u2014 als wir merkten, dass wir immer wieder die gleiche Agenten-Infrastruktur bauten. Also haben wir Cortex entwickelt.',
    },
    story: {
      headline: 'Unsere Geschichte',
      content: 'Wir wollten kein KI-Framework bauen. Wir haben reale Kundenprobleme gel\u00f6st \u2014 Zeiterfassung, Workforce Management, Operations \u2014 als wir merkten, dass wir immer wieder die gleiche Agenten-Infrastruktur bauten. Cortex entstand aus dieser Frustration. Eine saubere, typsichere, Multi-Provider-Engine, die die schwierigen Teile \u00fcbernimmt, damit wir uns auf die Gesch\u00e4ftslogik konzentrieren k\u00f6nnen.\n\nHeute treibt Cortex jedes Automatisierungsprojekt an, das wir liefern. Und wir bauen etwas Neues \u2014 einen pers\u00f6nlichen KI-Assistenten, der lokal l\u00e4uft und mit Ihnen \u00fcber Telegram spricht. Weil wir glauben, dass jeder eine KI verdient, die f\u00fcr ihn arbeitet \u2014 nicht umgekehrt.',
    },
    setsApartHeadline: 'Was uns unterscheidet',
    differentiators: [
      {
        title: 'Wir nutzen, was wir verkaufen.',
        description: 'Cortex l\u00e4uft jeden Tag in der Produktion auf echten Kundenprojekten. Jedes Feature existiert, weil ein reales Projekt es brauchte.',
      },
      {
        title: 'Deutsche Ingenieurskunst, globale Reichweite.',
        description: 'Sitz in Regensburg mit Enterprise-Standards f\u00fcr Sicherheit, Zuverl\u00e4ssigkeit und Datenschutz. DSGVO-konform von Anfang an.',
      },
      {
        title: 'Ein Team, von Anfang bis Ende.',
        description: 'Wir machen nicht nur KI. Wir bauen die Web-Apps, APIs, Integrationen und die Infrastruktur drumherum.',
      },
      {
        title: 'Transparent vom ersten Tag.',
        description: 'Echtzeit-Kostentracking ist nicht nur ein Feature, das wir verkaufen \u2014 so f\u00fchren wir jedes Projekt. Sie wissen immer, wof\u00fcr Sie zahlen.',
      },
    ],
    company: {
      name: 'Run4Dev',
      location: 'Steinweg 4, 93059 Regensburg, Deutschland',
      focus: 'KI-Agenten-Entwicklung, Prozessautomatisierung, Web- & App-Entwicklung',
      technology: 'Cortex Engine (TypeScript, Node.js)',
      email: 'eni@run4dev.com',
    },
    cta: {
      headline: 'Bereit, mit uns zu arbeiten?',
      button: 'Kontakt aufnehmen',
    },
  },
  contact: {
    hero: {
      h1: 'Lassen Sie uns herausfinden, was KI f\u00fcr Sie tun kann',
      subtitle: 'Ob Sie ein konkretes Projekt im Sinn haben oder einfach erkunden m\u00f6chten, was m\u00f6glich ist \u2014 wir geben Ihnen ehrliche Antworten, keinen Sales-Pitch.',
    },
    form: {
      name: 'Name',
      email: 'E-Mail',
      company: 'Unternehmen',
      companyOptional: '(optional)',
      challenge: 'Was ist Ihre gr\u00f6\u00dfte operative Herausforderung?',
      budget: 'Budgetrahmen',
      budgetOptions: [
        '< 10.000 \u20ac',
        '10.000\u201350.000 \u20ac',
        '50.000\u2013100.000 \u20ac',
        '> 100.000 \u20ac',
        'Noch nicht sicher',
      ],
      submit: 'Nachricht senden',
    },
    info: {
      email: 'eni@run4dev.com',
      location: 'Regensburg, Deutschland',
      responseTime: 'Wir antworten in der Regel innerhalb von 30 Minuten w\u00e4hrend der Gesch\u00e4ftszeiten',
      bookCallDirect: 'Oder buchen Sie direkt ein Gespr\u00e4ch',
    },
    telegramWaitlist: {
      headline: 'Suchen Sie einen pers\u00f6nlichen KI-Assistenten?',
      description: 'Unser Telegram-basierter KI-Agent kommt bald. L\u00e4uft lokal, spricht \u00fcber Telegram mit Ihnen, Ihre Daten bleiben bei Ihnen.',
      emailPlaceholder: 'ihre@email.de',
      cta: 'Auf die Warteliste',
    },
  },
  footer: {
    privacy: 'Datenschutz',
    imprint: 'Impressum',
  },
  seo: {
    home: {
      title: 'Run4Dev | KI-Agenten & Prozessautomatisierung | Deutschland',
      description: 'Run4Dev entwickelt ma\u00dfgeschneiderte KI-Agenten, die Gesch\u00e4ftsprozesse automatisieren. Kosten senken, Zeit sparen, skalieren ohne einzustellen. Sitz in Regensburg.',
      ogTitle: 'Run4Dev \u2014 KI-Agenten, die Ihr Unternehmen automatisieren',
    },
    technology: {
      title: 'Unsere Technologie | Cortex KI-Engine | Run4Dev',
      description: 'Cortex ist Run4Devs propriet\u00e4re KI-Engine. Multi-Provider, typsicher, produktionsreif. Die Technologie hinter unseren Automatisierungsl\u00f6sungen.',
    },
    solutions: {
      title: 'KI-Automatisierungsl\u00f6sungen | Ma\u00dfgeschneiderte KI-Agenten | Run4Dev',
      description: 'Ma\u00dfgeschneiderte KI-Agenten-Entwicklung, Prozessautomatisierung, Strategieberatung und Webentwicklung. Enterprise-KI-L\u00f6sungen von Run4Dev.',
    },
    about: {
      title: '\u00dcber Run4Dev | KI-Engineering-Team in Deutschland',
      description: 'Run4Dev ist ein KI- und Software-Engineering-Unternehmen mit Sitz in Regensburg. Entwickler der Cortex-Engine. Full-Stack KI-Automatisierung.',
    },
    contact: {
      title: 'Kontakt Run4Dev | Kostenloses KI-Strategiegespr\u00e4ch',
      description: 'Kontaktieren Sie Run4Dev f\u00fcr KI-Automatisierung, Prozessoptimierung oder ein kostenloses Strategiegespr\u00e4ch. Antwortzeit unter 30 Minuten.',
    },
  },
};
```

- [ ] **Step 2: Commit**

```bash
git add src/i18n/de.ts
git commit -m "content: rewrite German copy with pain-first messaging"
```

---

## Task 4: Write Italian Content

**Files:**
- Modify: `src/i18n/it.ts`

- [ ] **Step 1: Replace the entire Italian content file**

Replace the full contents of `src/i18n/it.ts` with:

```ts
import type { SiteContent } from './types';

export const it: SiteContent = {
  nav: {
    home: 'Home',
    solutions: 'Soluzioni',
    technology: 'Tecnologia',
    about: 'Chi Siamo',
    contact: 'Contatti',
    bookCall: 'Prenota una Call',
  },
  home: {
    hero: {
      h1: 'Il Tuo Team Perde Tempo in Attivit\u00e0 che l\u2019IA Dovrebbe Gestire',
      subtitle: 'Creiamo agenti IA personalizzati che si occupano dei workflow ripetitivi, riducono i costi operativi e lasciano al tuo team lo spazio per crescere.',
      ctaPrimary: 'Prenota una Consulenza Gratuita',
      ctaSecondary: 'Scopri le Nostre Soluzioni',
    },
    trustBar: [
      'Sede in Germania',
      'Sicurezza enterprise',
      '< 30 min di risposta',
      'Conforme al GDPR',
    ],
    painSolution: {
      headline: 'Il Tuo Team Merita di Meglio del Lavoro Ripetitivo',
      description: 'Le aziende sprecano il 40% del tempo dei dipendenti in attivit\u00e0 che l\u2019IA gestisce meglio. Implementiamo agenti che lavorano 24/7 senza errori.',
      cards: [
        {
          title: 'Basta Perdere Tempo nel Lavoro Manuale',
          description: 'Creiamo agenti IA su misura per i tuoi workflow. Supporto clienti, elaborazione dati, reportistica \u2014 gestiti automaticamente.',
        },
        {
          title: 'Riduci i Costi Operativi',
          description: 'Automazione dei processi end-to-end che connette i tuoi sistemi esistenti. Niente pi\u00f9 trasferimento manuale di dati.',
        },
        {
          title: 'Scala Senza Assumere',
          description: 'Agenti IA che crescono con la tua azienda. Gestisci 10 volte il carico di lavoro senza aggiungere personale.',
        },
      ],
    },
    caseStudy: {
      label: 'Risultati Reali',
      headline: 'Cosa Abbiamo Costruito',
      clientType: 'Un\u2019azienda di workforce management',
      resultHeadline: 'Tempo operativo manuale ridotto dell\u201980%',
      description: 'Agenti IA specializzati per la gestione degli incarichi, dei lavoratori e delle operazioni quotidiane su una piattaforma multi-tenant. Processi che richiedevano ore ora si completano in minuti. Il tracking dei costi in tempo reale garantisce prevedibilit\u00e0 del budget.',
    },
    metricsHeadline: 'Risultati Provati, Impatto Misurabile',
    metrics: [
      { value: '10', suffix: 'x', label: 'Esecuzione processi pi\u00f9 veloce' },
      { value: '60', suffix: '%', label: 'Riduzione media dei costi' },
      { value: '24/7', suffix: '', label: 'Agenti IA sempre attivi' },
      { value: '80', suffix: '%', label: 'Meno lavoro manuale per il tuo team' },
    ],
    howItWorks: {
      headline: 'Dall\u2019Idea all\u2019Agente IA in 4 Passi',
      subtitle: 'Come Funziona',
      steps: [
        {
          title: 'Analisi',
          description: 'Analizziamo le tue operazioni e troviamo le opportunit\u00e0 di automazione con il ROI pi\u00f9 alto.',
        },
        {
          title: 'Progettazione',
          description: 'Progettiamo il sistema di agenti IA su misura per le tue esigenze.',
        },
        {
          title: 'Sviluppo & Test',
          description: 'Sviluppiamo, testiamo e validiamo su scenari reali.',
        },
        {
          title: 'Deploy & Ottimizzazione',
          description: 'I tuoi agenti vanno in produzione con monitoraggio e miglioramento continuo.',
        },
      ],
    },
    telegramTeaser: {
      label: 'In Arrivo',
      headline: 'Il Tuo Assistente IA Personale su Telegram',
      description: 'Un assistente IA completo che gira localmente sul tuo computer. Chatta su Telegram. Pu\u00f2 programmare, cercare, gestire file, automatizzare attivit\u00e0 \u2014 tutto ci\u00f2 che ti serve. I tuoi dati non lasciano mai il tuo dispositivo.',
      points: ['Gira localmente', 'Interfaccia Telegram', 'I tuoi dati restano tuoi'],
      cta: 'Iscriviti alla Lista d\u2019Attesa',
      emailPlaceholder: 'tua@email.it',
    },
    cta: {
      headline: 'Pronto ad Automatizzare?',
      description: 'Prenota una sessione strategica gratuita di 30 minuti. Identificheremo le tue migliori opportunit\u00e0 di automazione e ti mostreremo il ROI atteso.',
      button: 'Prenota la Tua Consulenza Gratuita',
      note: 'Tempo medio di risposta: 32 minuti',
    },
  },
  technology: {
    hero: {
      h1: 'Costruito su Tecnologia che Abbiamo Ingegnerizzato da Zero',
      subtitle: 'Il nostro motore proprietario Cortex \u00e8 il motivo per cui le nostre soluzioni IA funzionano in produzione \u2014 non solo nelle demo.',
      ctaPrimary: 'Scopri le Nostre Soluzioni',
      ctaSecondary: 'Parla con il Nostro Team',
    },
    whyItMatters: {
      headline: 'Perch\u00e9 \u00c8 Importante per Te',
      cards: [
        {
          title: 'I tuoi agenti non si rompono in produzione',
          description: 'Cortex \u00e8 type-safe e testato sul campo. Gestione errori integrata, sandboxing e logica di retry \u2014 i tuoi agenti IA gestiscono i casi limite con grazia.',
        },
        {
          title: 'Non sei mai vincolato a un solo provider IA',
          description: 'Cortex funziona con Claude, GPT, Gemini e altri. Se un provider alza i prezzi o va gi\u00f9, switchiamo senza ricostruire nulla.',
        },
        {
          title: 'Vedi esattamente per cosa paghi',
          description: 'Ogni chiamata IA \u00e8 tracciata fino al singolo token. Dashboard dei costi in tempo reale \u2014 nessuna sorpresa in fattura.',
        },
      ],
    },
    underTheHood: {
      headline: 'Sotto il Cofano',
      features: [
        { title: 'Delegazione Gerarchica degli Agenti', description: 'Gli agenti orchestratori delegano automaticamente a sub-agenti specializzati.' },
        { title: 'Esecuzione Codice in Sandbox', description: 'Gli agenti IA eseguono script in ambienti isolati con limiti di memoria e timeout.' },
        { title: 'Streaming in Tempo Reale', description: 'Server-Sent Events per il reasoning live degli agenti e l\u2019esecuzione dei tool.' },
        { title: 'Controllo Accessi Basato sui Ruoli', description: 'Tool e azioni filtrati per ruoli utente e permessi.' },
        { title: 'Human-in-the-Loop', description: 'Gli agenti si fermano per l\u2019approvazione umana prima di operazioni sensibili.' },
        { title: 'Lifecycle Hooks', description: 'Accesso a ogni evento degli agenti per logging personalizzato, alerting o analytics.' },
        { title: 'Dashboard di Debug', description: 'Debug visuale con tracing degli eventi live e analisi dei costi.' },
        { title: 'Ottimizzazione Costi Multi-Modello', description: 'Selezione automatica del provider in base alla complessit\u00e0 del task e al budget.' },
      ],
    },
    codeExample: {
      headline: 'API Pulita, Motore Potente',
      code: `import { createCortex, Model } from "@run4dev/cortex";

const { defineAgent, defineTool, createRuntime } = createCortex<{
  userId: string;
  role: "admin" | "user";
}>();

const agent = defineAgent({
  name: "support-agent",
  model: Model.Sonnet4,
  systemPrompt: ({ context }) =>
    \`You help \${context.role} users with their requests.\`,
  tools: [searchDocs, createTicket],
  subAgents: [billingAgent, escalationAgent],
});

const runtime = createRuntime();
const result = await runtime.run({
  agent,
  messages,
  context: { userId: "u_123", role: "admin" },
});
console.log(result.cost.totalCostUsd);`,
    },
    useCases: {
      headline: 'Cosa Costruiscono i Team con Cortex',
      items: [
        {
          title: 'Automazione Supporto Clienti',
          description: 'Risolvi i ticket l\u201980% pi\u00f9 velocemente con agenti che cercano nelle knowledge base e scalano intelligentemente.',
        },
        {
          title: 'Pipeline di Elaborazione Dati',
          description: 'Zero gestione manuale dei dati. Gli agenti estraggono, trasformano, validano e instradano i dati tra i sistemi.',
        },
        {
          title: 'Operazioni Interne',
          description: 'Automatizza i workflow di onboarding HR, helpdesk IT e gestione inventario.',
        },
        {
          title: 'Logica di Business Complessa',
          description: 'Orchestra catene di approvazione multi-step, verifiche di compliance e reportistica automatizzata.',
        },
      ],
    },
    cta: {
      headline: 'Vuoi Vedere Come Funzionerebbe per Te?',
      button: 'Prenota una Consulenza Strategica',
    },
  },
  solutions: {
    hero: {
      h1: 'Ogni Azienda Ha Processi Che Non Dovrebbero Richiedere Persone',
      subtitle: 'Troviamo i colli di bottiglia che rubano tempo al tuo team e li sostituiamo con agenti IA che lavorano pi\u00f9 velocemente, a minor costo e senza sosta.',
    },
    items: [
      {
        pain: 'Il tuo team affoga in attivit\u00e0 ripetitive',
        title: 'Sviluppo Agenti IA Personalizzati',
        description: 'Creiamo agenti su misura per i tuoi workflow \u2014 supporto clienti, elaborazione dati, reporting, operations. Ogni agente \u00e8 costruito con gli strumenti giusti e le giuste protezioni.',
        result: 'I team recuperano 20+ ore a settimana',
        deliverables: 'Architettura agenti custom, sviluppo tool, suite di test, deployment, documentazione.',
      },
      {
        pain: 'I tuoi sistemi non comunicano tra loro',
        title: 'Automazione Processi & Integrazione',
        description: 'Connettiamo i tuoi agenti IA ai sistemi esistenti \u2014 CRM, ERP, database, API, strumenti di comunicazione. Automazione end-to-end con supervisione umana dove serve.',
        result: 'Zero trasferimento manuale di dati tra sistemi',
        deliverables: 'Integrazione sistemi, connettori API, automazione workflow, dashboard di monitoraggio.',
      },
      {
        pain: 'Non sai da dove iniziare con l\u2019IA',
        title: 'Strategia IA & Consulenza',
        description: 'Analizziamo le tue operazioni, mappiamo le opportunit\u00e0 di automazione e creiamo una roadmap prioritizzata con proiezioni ROI chiare. Senza impegno.',
        result: 'Piano chiaro con proiezione ROI prima di spendere un euro',
        deliverables: 'Report audit processi, matrice opportunit\u00e0, proiezioni ROI, roadmap di implementazione.',
      },
      {
        pain: 'Hai bisogno di pi\u00f9 della sola IA',
        title: 'Sviluppo Web & App',
        description: 'Oltre all\u2019IA, costruiamo i prodotti digitali di cui la tua azienda ha bisogno. Applicazioni web, app mobile, dashboard \u2014 progettati per performance e user experience eccezionale.',
        result: 'Un team, dall\u2019inizio alla fine \u2014 niente giocoleria tra fornitori',
        deliverables: 'Sviluppo full-stack web/mobile, design UI/UX, sviluppo API, deployment cloud.',
      },
      {
        pain: 'Deve continuare a funzionare dopo il lancio',
        title: 'Supporto Continuo & Ottimizzazione',
        description: 'Gli agenti IA migliorano nel tempo. Monitoriamo le performance, ottimizziamo i costi e facciamo evolvere i tuoi agenti mentre la tua azienda cresce.',
        result: 'IA che migliora nel tempo, non che diventa obsoleta',
        deliverables: 'Monitoraggio, report ottimizzazione costi, revisioni trimestrali, supporto prioritario, upgrade agenti.',
      },
    ],
    cta: {
      headline: 'Non Sei Sicuro Quale Soluzione Fa per Te?',
      description: 'Prenota una consulenza gratuita e lo scopriamo insieme.',
      button: 'Prenota la Tua Consulenza Gratuita',
    },
  },
  about: {
    hero: {
      h1: 'Non Volevamo Costruire un Framework IA',
      intro: 'Stavamo risolvendo problemi reali dei clienti \u2014 time tracking, workforce management, operations \u2014 quando ci siamo resi conto che continuavamo a ricostruire la stessa infrastruttura per agenti. Cos\u00ec abbiamo creato Cortex.',
    },
    story: {
      headline: 'La Nostra Storia',
      content: 'Non volevamo costruire un framework IA. Stavamo risolvendo problemi reali dei clienti \u2014 time tracking, workforce management, operations \u2014 quando ci siamo resi conto che continuavamo a ricostruire la stessa infrastruttura per agenti. Cortex \u00e8 nato da quella frustrazione. Un motore pulito, tipizzato, multi-provider che gestisce le parti difficili cos\u00ec possiamo concentrarci sulla logica di business.\n\nOggi Cortex alimenta ogni progetto di automazione che realizziamo. E stiamo costruendo qualcosa di nuovo \u2014 un assistente IA personale che gira localmente e parla con te su Telegram. Perch\u00e9 crediamo che tutti meritino un\u2019IA che lavori per loro, non il contrario.',
    },
    setsApartHeadline: 'Cosa Ci Distingue',
    differentiators: [
      {
        title: 'Usiamo ci\u00f2 che vendiamo.',
        description: 'Cortex gira in produzione ogni giorno su progetti reali dei clienti. Ogni feature esiste perch\u00e9 un progetto reale ne aveva bisogno.',
      },
      {
        title: 'Ingegneria tedesca, portata globale.',
        description: 'Sede a Regensburg con standard enterprise per sicurezza, affidabilit\u00e0 e privacy dei dati. Conforme al GDPR fin dall\u2019inizio.',
      },
      {
        title: 'Un team, dall\u2019inizio alla fine.',
        description: 'Non facciamo solo IA. Costruiamo le web app, le API, le integrazioni e l\u2019infrastruttura intorno ad essa.',
      },
      {
        title: 'Trasparenti dal primo giorno.',
        description: 'Il tracking dei costi in tempo reale non \u00e8 solo una feature che vendiamo \u2014 \u00e8 come gestiamo ogni progetto. Sai sempre per cosa stai pagando.',
      },
    ],
    company: {
      name: 'Run4Dev',
      location: 'Steinweg 4, 93059 Regensburg, Germania',
      focus: 'Sviluppo Agenti IA, Automazione Processi, Sviluppo Web & App',
      technology: 'Cortex Engine (TypeScript, Node.js)',
      email: 'eni@run4dev.com',
    },
    cta: {
      headline: 'Pronto a Lavorare con Noi?',
      button: 'Contattaci',
    },
  },
  contact: {
    hero: {
      h1: 'Scopriamo Cosa l\u2019IA Pu\u00f2 Fare per Te',
      subtitle: 'Che tu abbia un progetto specifico in mente o voglia solo esplorare le possibilit\u00e0 \u2014 ti diamo risposte oneste, non un pitch di vendita.',
    },
    form: {
      name: 'Nome',
      email: 'Email',
      company: 'Azienda',
      companyOptional: '(opzionale)',
      challenge: 'Qual \u00e8 la tua sfida operativa pi\u00f9 grande?',
      budget: 'Range di budget',
      budgetOptions: [
        '< 10.000 \u20ac',
        '10.000\u201350.000 \u20ac',
        '50.000\u2013100.000 \u20ac',
        '> 100.000 \u20ac',
        'Non ancora sicuro',
      ],
      submit: 'Invia Messaggio',
    },
    info: {
      email: 'eni@run4dev.com',
      location: 'Regensburg, Germania',
      responseTime: 'Rispondiamo generalmente entro 30 minuti durante l\u2019orario lavorativo',
      bookCallDirect: 'Oppure prenota una call direttamente',
    },
    telegramWaitlist: {
      headline: 'Cerchi un Assistente IA Personale?',
      description: 'Il nostro agente IA su Telegram arriva presto. Gira localmente, parla con te su Telegram, i tuoi dati restano tuoi.',
      emailPlaceholder: 'tua@email.it',
      cta: 'Iscriviti alla Lista d\u2019Attesa',
    },
  },
  footer: {
    privacy: 'Privacy',
    imprint: 'Note Legali',
  },
  seo: {
    home: {
      title: 'Run4Dev | Agenti IA & Automazione Processi | Germania',
      description: 'Run4Dev crea agenti IA personalizzati che automatizzano i processi aziendali. Riduci i costi, risparmia tempo, scala senza assumere. Sede a Regensburg, Germania.',
      ogTitle: 'Run4Dev \u2014 Agenti IA che Automatizzano la Tua Azienda',
    },
    technology: {
      title: 'La Nostra Tecnologia | Cortex AI Engine | Run4Dev',
      description: 'Cortex \u00e8 il motore IA proprietario di Run4Dev. Multi-provider, type-safe, production-grade. La tecnologia dietro le nostre soluzioni di automazione.',
    },
    solutions: {
      title: 'Soluzioni di Automazione IA | Agenti IA Personalizzati | Run4Dev',
      description: 'Sviluppo agenti IA personalizzati, automazione processi, consulenza strategica e sviluppo web. Soluzioni IA enterprise di Run4Dev.',
    },
    about: {
      title: 'Chi \u00c8 Run4Dev | Team di Ingegneria IA in Germania',
      description: 'Run4Dev \u00e8 un\u2019azienda di ingegneria IA e software con sede a Regensburg, Germania. Creatori del motore Cortex. Automazione IA full-stack.',
    },
    contact: {
      title: 'Contatta Run4Dev | Prenota una Consulenza IA Gratuita',
      description: 'Contatta Run4Dev per automazione IA, ottimizzazione processi o una sessione strategica gratuita. Tempo di risposta sotto i 30 minuti.',
    },
  },
};
```

- [ ] **Step 2: Commit**

```bash
git add src/i18n/it.ts
git commit -m "content: rewrite Italian copy with pain-first messaging"
```

---

## Task 5: Create New Components

**Files:**
- Create: `src/components/CaseStudyCard.astro`
- Create: `src/components/TelegramTeaser.astro`

- [ ] **Step 1: Create CaseStudyCard component**

Create `src/components/CaseStudyCard.astro`:

```astro
---
interface Props {
  label: string;
  clientType: string;
  resultHeadline: string;
  description: string;
}

const { label, clientType, resultHeadline, description } = Astro.props;
---

<div class="bg-bg-surface/30 border border-border rounded-2xl p-8 md:p-10 scroll-reveal">
  <p class="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
    {label}
  </p>
  <p class="text-sm text-text-muted mb-2">{clientType}</p>
  <h3 class="text-2xl md:text-3xl font-bold text-text-primary mb-4">
    {resultHeadline}
  </h3>
  <p class="text-text-secondary leading-relaxed">{description}</p>
</div>
```

- [ ] **Step 2: Create TelegramTeaser component**

Create `src/components/TelegramTeaser.astro`:

```astro
---
interface Props {
  label: string;
  headline: string;
  description: string;
  points: string[];
  cta: string;
  emailPlaceholder: string;
}

const { label, headline, description, points, cta, emailPlaceholder } = Astro.props;
---

<div class="bg-gradient-to-br from-bg-surface/40 to-accent/5 border border-border rounded-2xl p-8 md:p-12 text-center scroll-reveal">
  <p class="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
    {label}
  </p>
  <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-4">
    {headline}
  </h2>
  <p class="text-text-secondary max-w-xl mx-auto mb-6 leading-relaxed">
    {description}
  </p>
  <div class="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-text-muted">
    {points.map((point) => (
      <span class="flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
        {point}
      </span>
    ))}
  </div>
  <form
    action={`mailto:eni@run4dev.com?subject=Telegram%20Waitlist`}
    method="GET"
    class="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
  >
    <input
      type="email"
      name="body"
      placeholder={emailPlaceholder}
      required
      class="w-full sm:flex-1 bg-white border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors"
    />
    <button
      type="submit"
      class="w-full sm:w-auto px-6 py-3 bg-accent text-white font-semibold rounded-xl transition-all duration-300 hover:bg-accent/90 hover:scale-[1.02] cursor-pointer whitespace-nowrap"
    >
      {cta}
    </button>
  </form>
</div>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/CaseStudyCard.astro src/components/TelegramTeaser.astro
git commit -m "feat: add CaseStudyCard and TelegramTeaser components"
```

---

## Task 6: Update Navbar

**Files:**
- Modify: `src/components/Navbar.astro`

- [ ] **Step 1: Update nav links in Navbar.astro**

In `src/components/Navbar.astro`, replace the `navLinks` array (lines 14-20):

```ts
const navLinks = [
  { label: t.nav.home, path: '/' },
  { label: t.nav.solutions, path: '/solutions' },
  { label: t.nav.technology, path: '/technology' },
  { label: t.nav.about, path: '/about' },
  { label: t.nav.contact, path: '/contact' },
];
```

- [ ] **Step 2: Update the CTA button href to link to contact page**

In the same file, replace both CTA button `href="#"` occurrences (desktop ~line 99 and mobile ~line 157) with:

```
href={getLocalizedPath(lang, '/contact')}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.astro
git commit -m "refactor: update navbar links for solutions and technology pages"
```

---

## Task 7: Update ContactForm Component

**Files:**
- Modify: `src/components/ContactForm.astro`

- [ ] **Step 1: Replace the entire ContactForm component**

Replace the full contents of `src/components/ContactForm.astro` with:

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<form action="#" method="POST" class="space-y-6">
  <!-- Name -->
  <div>
    <label for="contact-name" class="block text-sm font-medium text-text-muted mb-2">
      {t.contact.form.name} <span class="text-accent">*</span>
    </label>
    <input
      type="text"
      id="contact-name"
      name="name"
      required
      class="w-full bg-white border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors"
    />
  </div>

  <!-- Email -->
  <div>
    <label for="contact-email" class="block text-sm font-medium text-text-muted mb-2">
      {t.contact.form.email} <span class="text-accent">*</span>
    </label>
    <input
      type="email"
      id="contact-email"
      name="email"
      required
      class="w-full bg-white border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors"
    />
  </div>

  <!-- Company (optional) -->
  <div>
    <label for="contact-company" class="block text-sm font-medium text-text-muted mb-2">
      {t.contact.form.company} <span class="text-text-muted/50 text-xs">{t.contact.form.companyOptional}</span>
    </label>
    <input
      type="text"
      id="contact-company"
      name="company"
      class="w-full bg-white border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors"
    />
  </div>

  <!-- Challenge textarea -->
  <div>
    <label for="contact-challenge" class="block text-sm font-medium text-text-muted mb-2">
      {t.contact.form.challenge} <span class="text-accent">*</span>
    </label>
    <textarea
      id="contact-challenge"
      name="challenge"
      rows={5}
      required
      class="w-full bg-white border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors resize-y"
    ></textarea>
  </div>

  <!-- Budget dropdown -->
  <div>
    <label for="contact-budget" class="block text-sm font-medium text-text-muted mb-2">
      {t.contact.form.budget}
    </label>
    <select
      id="contact-budget"
      name="budget"
      class="w-full bg-white border border-border rounded-xl px-4 py-3 text-text-primary focus:border-accent focus:outline-none transition-colors"
    >
      <option value="" disabled selected>--</option>
      {t.contact.form.budgetOptions.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  </div>

  <!-- Submit button -->
  <div>
    <button
      type="submit"
      class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-bg-dark text-bg-primary font-semibold rounded-full transition-all duration-300 hover:bg-bg-dark/90 hover:scale-[1.02] cursor-pointer"
    >
      {t.contact.form.submit}
    </button>
  </div>
</form>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ContactForm.astro
git commit -m "refactor: simplify contact form — remove service dropdown, add challenge textarea"
```

---

## Task 8: Update Homepage

**Files:**
- Modify: `src/pages/[lang]/index.astro`

- [ ] **Step 1: Replace the entire homepage**

Replace the full contents of `src/pages/[lang]/index.astro` with:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import ParticleHero from '../../components/ParticleHero.astro';
import TrustBar from '../../components/TrustBar.astro';
import GlowCard from '../../components/GlowCard.astro';
import MetricCounter from '../../components/MetricCounter.astro';
import CaseStudyCard from '../../components/CaseStudyCard.astro';
import StepTimeline from '../../components/StepTimeline.astro';
import TelegramTeaser from '../../components/TelegramTeaser.astro';
import CTASection from '../../components/CTASection.astro';
import { useTranslations, getLocalizedPath, type Lang } from '../../i18n';

export function getStaticPaths() {
  return [
    { params: { lang: 'en' } },
    { params: { lang: 'de' } },
    { params: { lang: 'it' } },
  ];
}

const lang = Astro.params.lang as Lang;
const t = useTranslations(lang);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Run4Dev",
  url: "https://run4dev.com",
  logo: "https://run4dev.com/favicon.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Steinweg 4",
    addressLocality: "Regensburg",
    postalCode: "93059",
    addressCountry: "DE",
  },
  email: "eni@run4dev.com",
};
---

<BaseLayout
  title={t.seo.home.title}
  description={t.seo.home.description}
  ogTitle={t.seo.home.ogTitle}
  jsonLd={jsonLd}
  page=""
>
  <!-- Hero Section -->
  <ParticleHero>
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto text-text-primary">
      {t.home.hero.h1}
    </h1>
    <p class="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mt-6">
      {t.home.hero.subtitle}
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4">
      <a
        href={getLocalizedPath(lang, '/contact')}
        class="bg-bg-dark text-bg-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-bg-dark/90 hover:scale-[1.02]"
      >
        {t.home.hero.ctaPrimary}
      </a>
      <a
        href={getLocalizedPath(lang, '/solutions')}
        class="border border-text-primary text-text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-bg-dark hover:text-bg-primary"
      >
        {t.home.hero.ctaSecondary}
      </a>
    </div>
    <div class="mt-8">
      <TrustBar items={t.home.trustBar} />
    </div>
  </ParticleHero>

  <!-- Pain + Solution Cards -->
  <section class="py-24 md:py-32">
    <div class="max-w-[1200px] mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-text-primary">
        {t.home.painSolution.headline}
      </h2>
      <p class="text-text-secondary text-center max-w-2xl mx-auto mt-4">
        {t.home.painSolution.description}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {t.home.painSolution.cards.map((card) => (
          <GlowCard>
            <h3 class="text-xl font-semibold text-text-primary mb-3">{card.title}</h3>
            <p class="text-text-secondary">{card.description}</p>
          </GlowCard>
        ))}
      </div>
    </div>
  </section>

  <!-- Case Study -->
  <section class="py-24 bg-bg-surface/20">
    <div class="max-w-[800px] mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12">
        {t.home.caseStudy.headline}
      </h2>
      <CaseStudyCard
        label={t.home.caseStudy.label}
        clientType={t.home.caseStudy.clientType}
        resultHeadline={t.home.caseStudy.resultHeadline}
        description={t.home.caseStudy.description}
      />
    </div>
  </section>

  <!-- Metrics -->
  <section class="py-24">
    <div class="max-w-[1200px] mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12">
        {t.home.metricsHeadline}
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        {t.home.metrics.map((metric) => (
          <MetricCounter value={metric.value} suffix={metric.suffix} label={metric.label} />
        ))}
      </div>
    </div>
  </section>

  <!-- How It Works -->
  <section class="py-24 md:py-32">
    <div class="max-w-[1200px] mx-auto px-6">
      <p class="text-accent text-sm font-semibold uppercase tracking-wider text-center mb-4">
        {t.home.howItWorks.subtitle}
      </p>
      <h2 class="text-3xl md:text-4xl font-bold text-center text-text-primary mb-16">
        {t.home.howItWorks.headline}
      </h2>
      <StepTimeline steps={t.home.howItWorks.steps} />
    </div>
  </section>

  <!-- Telegram Teaser -->
  <section class="py-24">
    <div class="max-w-[800px] mx-auto px-6">
      <TelegramTeaser
        label={t.home.telegramTeaser.label}
        headline={t.home.telegramTeaser.headline}
        description={t.home.telegramTeaser.description}
        points={t.home.telegramTeaser.points}
        cta={t.home.telegramTeaser.cta}
        emailPlaceholder={t.home.telegramTeaser.emailPlaceholder}
      />
    </div>
  </section>

  <!-- Final CTA -->
  <CTASection
    headline={t.home.cta.headline}
    description={t.home.cta.description}
    buttonText={t.home.cta.button}
    buttonHref={getLocalizedPath(lang, '/contact')}
    note={t.home.cta.note}
  />
</BaseLayout>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/[lang]/index.astro
git commit -m "feat: redesign homepage with case study and Telegram teaser"
```

---

## Task 9: Create Solutions Page & Delete Old Services Page

**Files:**
- Create: `src/pages/[lang]/solutions.astro`
- Delete: `src/pages/[lang]/services.astro`

- [ ] **Step 1: Create the new Solutions page**

Create `src/pages/[lang]/solutions.astro`:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import GlowCard from '../../components/GlowCard.astro';
import CTASection from '../../components/CTASection.astro';
import { useTranslations, getLocalizedPath, type Lang } from '../../i18n';

export function getStaticPaths() {
  return [
    { params: { lang: 'en' } },
    { params: { lang: 'de' } },
    { params: { lang: 'it' } },
  ];
}

const lang = Astro.params.lang as Lang;
const t = useTranslations(lang);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: t.solutions.items.map((s, i) => ({
    "@type": "Service",
    position: i + 1,
    name: s.title,
    description: s.description,
    provider: { "@type": "Organization", name: "Run4Dev" },
    areaServed: "Worldwide",
  })),
};
---

<BaseLayout
  title={t.seo.solutions.title}
  description={t.seo.solutions.description}
  jsonLd={jsonLd}
  page="solutions"
>
  <!-- Hero Section -->
  <section class="relative py-32 md:py-40 text-center pt-24">
    <div class="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-surface/20 to-bg-primary" aria-hidden="true"></div>
    <div class="relative mx-auto max-w-[1200px] px-6 pt-24">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto text-text-primary">
        {t.solutions.hero.h1}
      </h1>
      <p class="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mt-6">
        {t.solutions.hero.subtitle}
      </p>
    </div>
  </section>

  <!-- Solutions List -->
  <section class="py-24">
    <div class="max-w-[1200px] mx-auto px-6 space-y-12">
      {t.solutions.items.map((solution) => (
        <GlowCard>
          <div class="space-y-4">
            <p class="text-accent font-semibold text-sm uppercase tracking-wider">
              {solution.pain}
            </p>
            <h3 class="text-2xl font-bold text-text-primary">{solution.title}</h3>
            <p class="text-text-secondary leading-relaxed">{solution.description}</p>
            <p class="text-lg font-semibold text-text-primary">
              Result: <span class="text-accent">{solution.result}</span>
            </p>
            <p class="text-sm text-text-muted">
              <span class="font-semibold text-text-secondary">Deliverables: </span>
              {solution.deliverables}
            </p>
          </div>
        </GlowCard>
      ))}
    </div>
  </section>

  <!-- CTA Section -->
  <CTASection
    headline={t.solutions.cta.headline}
    description={t.solutions.cta.description}
    buttonText={t.solutions.cta.button}
    buttonHref={getLocalizedPath(lang, '/contact')}
  />
</BaseLayout>
```

- [ ] **Step 2: Delete the old services page**

```bash
git rm src/pages/[lang]/services.astro
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/[lang]/solutions.astro
git commit -m "feat: add Solutions page, remove old Services page"
```

---

## Task 10: Create Technology Page & Delete Old Cortex Page

**Files:**
- Create: `src/pages/[lang]/technology.astro`
- Delete: `src/pages/[lang]/cortex-framework.astro`

- [ ] **Step 1: Create the new Technology page**

Create `src/pages/[lang]/technology.astro`:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import GlowCard from '../../components/GlowCard.astro';
import CodeBlock from '../../components/CodeBlock.astro';
import CTASection from '../../components/CTASection.astro';
import { useTranslations, getLocalizedPath, type Lang } from '../../i18n';

export function getStaticPaths() {
  return [
    { params: { lang: 'en' } },
    { params: { lang: 'de' } },
    { params: { lang: 'it' } },
  ];
}

const lang = Astro.params.lang as Lang;
const t = useTranslations(lang);
---

<BaseLayout
  title={t.seo.technology.title}
  description={t.seo.technology.description}
  page="technology"
>
  <!-- Hero Section -->
  <section class="relative py-32 md:py-40 text-center pt-24">
    <div class="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-surface/20 to-bg-primary" aria-hidden="true"></div>
    <div class="relative mx-auto max-w-[1200px] px-6 pt-24">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto text-text-primary">
        {t.technology.hero.h1}
      </h1>
      <p class="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mt-6">
        {t.technology.hero.subtitle}
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4">
        <a
          href={getLocalizedPath(lang, '/solutions')}
          class="bg-bg-dark text-bg-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-bg-dark/90 hover:scale-[1.02]"
        >
          {t.technology.hero.ctaPrimary}
        </a>
        <a
          href={getLocalizedPath(lang, '/contact')}
          class="border border-text-primary text-text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-bg-dark hover:text-bg-primary"
        >
          {t.technology.hero.ctaSecondary}
        </a>
      </div>
    </div>
  </section>

  <!-- Why It Matters -->
  <section class="py-24 md:py-32">
    <div class="max-w-[1200px] mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12">
        {t.technology.whyItMatters.headline}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.technology.whyItMatters.cards.map((card) => (
          <GlowCard>
            <h3 class="text-lg font-semibold text-text-primary mb-3">{card.title}</h3>
            <p class="text-text-secondary">{card.description}</p>
          </GlowCard>
        ))}
      </div>
    </div>
  </section>

  <!-- Under the Hood -->
  <section class="py-24 bg-bg-surface/30">
    <div class="max-w-[1200px] mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12">
        {t.technology.underTheHood.headline}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.technology.underTheHood.features.map((feature) => (
          <div class="scroll-reveal">
            <h3 class="text-sm font-semibold text-text-primary mb-1">{feature.title}</h3>
            <p class="text-sm text-text-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <!-- Code Example -->
  <section class="py-24">
    <div class="max-w-3xl mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12">
        {t.technology.codeExample.headline}
      </h2>
      <CodeBlock code={t.technology.codeExample.code} title="cortex-agent.ts" />
    </div>
  </section>

  <!-- Use Cases -->
  <section class="py-24 md:py-32">
    <div class="max-w-[1200px] mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12">
        {t.technology.useCases.headline}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.technology.useCases.items.map((useCase) => (
          <GlowCard>
            <h3 class="text-xl font-semibold text-text-primary mb-3">{useCase.title}</h3>
            <p class="text-text-secondary">{useCase.description}</p>
          </GlowCard>
        ))}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <CTASection
    headline={t.technology.cta.headline}
    description=""
    buttonText={t.technology.cta.button}
    buttonHref={getLocalizedPath(lang, '/contact')}
  />
</BaseLayout>
```

- [ ] **Step 2: Delete the old cortex-framework page**

```bash
git rm src/pages/[lang]/cortex-framework.astro
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/[lang]/technology.astro
git commit -m "feat: add Technology page, remove old Cortex Framework page"
```

---

## Task 11: Update About Page

**Files:**
- Modify: `src/pages/[lang]/about.astro`

- [ ] **Step 1: Replace the About page**

Replace the full contents of `src/pages/[lang]/about.astro` with:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import GlowCard from '../../components/GlowCard.astro';
import CTASection from '../../components/CTASection.astro';
import { useTranslations, getLocalizedPath, type Lang } from '../../i18n';

export function getStaticPaths() {
  return [
    { params: { lang: 'en' } },
    { params: { lang: 'de' } },
    { params: { lang: 'it' } },
  ];
}

const lang = Astro.params.lang as Lang;
const t = useTranslations(lang);
---

<BaseLayout
  title={t.seo.about.title}
  description={t.seo.about.description}
  page="about"
>
  <!-- Hero Section -->
  <section class="relative py-32 md:py-40 text-center pt-24">
    <div class="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-surface/20 to-bg-primary" aria-hidden="true"></div>
    <div class="relative mx-auto max-w-[1200px] px-6 pt-24">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto text-text-primary">
        {t.about.hero.h1}
      </h1>
      <p class="text-lg text-text-secondary max-w-2xl mx-auto mt-6">
        {t.about.hero.intro}
      </p>
    </div>
  </section>

  <!-- Our Story -->
  <section class="py-24">
    <div class="max-w-3xl mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-8">
        {t.about.story.headline}
      </h2>
      {t.about.story.content.split('\n\n').map((paragraph) => (
        <p class="text-text-secondary leading-relaxed mb-6">{paragraph}</p>
      ))}
    </div>
  </section>

  <!-- What Sets Us Apart -->
  <section class="py-24 md:py-32 bg-bg-surface/30">
    <div class="max-w-[1200px] mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12">
        {t.about.setsApartHeadline}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.about.differentiators.map((item) => (
          <GlowCard>
            <h3 class="text-lg font-semibold text-text-primary mb-3">{item.title}</h3>
            <p class="text-text-secondary">{item.description}</p>
          </GlowCard>
        ))}
      </div>
    </div>
  </section>

  <!-- Company Details -->
  <section class="py-24">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="max-w-2xl mx-auto">
        <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <dt class="text-sm font-medium text-text-muted mb-1">Company</dt>
            <dd class="text-lg text-text-secondary">{t.about.company.name}</dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-text-muted mb-1">Location</dt>
            <dd class="text-lg text-text-secondary">{t.about.company.location}</dd>
          </div>
          <div class="sm:col-span-2">
            <dt class="text-sm font-medium text-text-muted mb-1">Focus</dt>
            <dd class="text-lg text-text-secondary">{t.about.company.focus}</dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-text-muted mb-1">Core Technology</dt>
            <dd class="text-lg text-text-secondary">{t.about.company.technology}</dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-text-muted mb-1">Email</dt>
            <dd class="text-lg">
              <a href={`mailto:${t.about.company.email}`} class="text-accent hover:underline">
                {t.about.company.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <CTASection
    headline={t.about.cta.headline}
    description=""
    buttonText={t.about.cta.button}
    buttonHref={getLocalizedPath(lang, '/contact')}
  />
</BaseLayout>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/[lang]/about.astro
git commit -m "refactor: update About page with per-page CTA and i18n headline"
```

---

## Task 12: Update Contact Page

**Files:**
- Modify: `src/pages/[lang]/contact.astro`

- [ ] **Step 1: Replace the Contact page with two-column layout and Telegram waitlist**

Replace the full contents of `src/pages/[lang]/contact.astro` with:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import GlowCard from '../../components/GlowCard.astro';
import ContactForm from '../../components/ContactForm.astro';
import TelegramTeaser from '../../components/TelegramTeaser.astro';
import { useTranslations, getLocalizedPath, type Lang } from '../../i18n';

export function getStaticPaths() {
  return [
    { params: { lang: 'en' } },
    { params: { lang: 'de' } },
    { params: { lang: 'it' } },
  ];
}

const lang = Astro.params.lang as Lang;
const t = useTranslations(lang);
---

<BaseLayout
  title={t.seo.contact.title}
  description={t.seo.contact.description}
  page="contact"
>
  <!-- Hero Section -->
  <section class="relative py-32 md:py-40 text-center pt-24">
    <div class="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-surface/20 to-bg-primary" aria-hidden="true"></div>
    <div class="relative mx-auto max-w-[1200px] px-6 pt-24">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto text-text-primary">
        {t.contact.hero.h1}
      </h1>
      <p class="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mt-6">
        {t.contact.hero.subtitle}
      </p>
    </div>
  </section>

  <!-- Contact Content: Form + Info -->
  <section class="py-24">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Left: Form (2/3 width) -->
        <div class="md:col-span-2">
          <GlowCard>
            <ContactForm />
          </GlowCard>
        </div>

        <!-- Right: Info (1/3 width) -->
        <div class="space-y-8">
          <div>
            <h3 class="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Email</h3>
            <a href={`mailto:${t.contact.info.email}`} class="text-accent hover:underline text-lg">
              {t.contact.info.email}
            </a>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Location</h3>
            <p class="text-text-secondary text-lg">{t.contact.info.location}</p>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Response Time</h3>
            <p class="text-text-secondary">{t.contact.info.responseTime}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Telegram Waitlist -->
  <section class="py-24">
    <div class="max-w-[800px] mx-auto px-6">
      <TelegramTeaser
        label={t.contact.telegramWaitlist.headline}
        headline={t.contact.telegramWaitlist.headline}
        description={t.contact.telegramWaitlist.description}
        points={[]}
        cta={t.contact.telegramWaitlist.cta}
        emailPlaceholder={t.contact.telegramWaitlist.emailPlaceholder}
      />
    </div>
  </section>
</BaseLayout>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/[lang]/contact.astro
git commit -m "feat: update Contact page with two-column layout and Telegram waitlist"
```

---

## Task 13: Verify Build & Test All Pages

- [ ] **Step 1: Run the Astro build to verify no errors**

```bash
npx astro build 2>&1 | tail -20
```

Expected: Build succeeds with no TypeScript or template errors.

- [ ] **Step 2: Start dev server and verify all pages load**

```bash
npm run dev
```

Visit each page and verify it renders:
- `http://localhost:4321/en/` — Homepage with all 7 sections
- `http://localhost:4321/en/solutions` — Solutions page with 5 pain/solution cards
- `http://localhost:4321/en/technology` — Technology page with Cortex features
- `http://localhost:4321/en/about` — About page with story and differentiators
- `http://localhost:4321/en/contact` — Contact page with simplified form and Telegram waitlist
- `http://localhost:4321/de/` — German homepage
- `http://localhost:4321/it/` — Italian homepage

Verify:
- Navigation links work (Solutions, Technology, About, Contact)
- Language switcher works between EN/DE/IT
- All CTAs link to correct pages
- No broken component imports
- Scroll reveal animations fire on all sections

- [ ] **Step 3: Commit any fixes if needed, then final commit**

```bash
git add -A
git commit -m "chore: verify build and fix any remaining issues"
```

- [ ] **Step 4: Push to remote**

```bash
git push origin main
```
