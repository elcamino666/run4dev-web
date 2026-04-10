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
