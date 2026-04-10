import type { SiteContent } from './types';

export const en: SiteContent = {
  nav: {
    home: 'Home',
    cortex: 'Cortex Framework',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    bookCall: 'Book a Call',
  },
  home: {
    hero: {
      h1: 'We Build AI Agents That Automate Your Business Processes',
      subtitle: 'Run4Dev engineers intelligent AI systems that take over repetitive workflows, reduce operational costs, and let your team focus on what matters. Powered by our proprietary Cortex framework.',
      ctaPrimary: 'Book a Free Strategy Call',
      ctaSecondary: 'See Cortex in Action',
    },
    trustBar: [
      'Response time: < 30 min',
      'Based in Germany',
      'Enterprise-grade security',
      'Multi-provider AI',
    ],
    valueProposition: {
      headline: 'Intelligent Automation That Delivers Real ROI',
      description: 'Most companies waste 40% of employee time on tasks AI can handle. Our Cortex framework deploys specialized AI agents that work 24/7, making zero errors on processes that used to drain your team.',
      cards: [
        {
          title: 'AI Agent Development',
          description: 'Custom AI agents built for your specific workflows. From customer support to data processing, our agents integrate with your existing tools and learn your business logic.',
        },
        {
          title: 'Process Automation',
          description: 'End-to-end automation of repetitive business processes. We analyze your operations, identify bottlenecks, and deploy AI-powered solutions that scale with your growth.',
        },
        {
          title: 'Cortex Framework',
          description: 'Our open-source agent orchestration engine. Multi-provider (Claude, GPT, Gemini), built-in cost tracking, hierarchical agent delegation, and enterprise-grade sandboxing.',
        },
      ],
    },
    metricsHeadline: 'Proven Results, Measurable Impact',
    metrics: [
      { value: '10', suffix: 'x', label: 'Faster process execution vs. manual workflows' },
      { value: '60', suffix: '%', label: 'Average cost reduction for automated processes' },
      { value: '24/7', suffix: '', label: 'AI agents work around the clock, zero downtime' },
      { value: '3', suffix: '+', label: 'AI providers supported (Claude, GPT, Gemini)' },
    ],
    howItWorks: {
      headline: 'From Idea to Deployed AI Agent in 4 Steps',
      subtitle: 'How It Works',
      steps: [
        {
          title: 'Discovery',
          description: 'We audit your operations, identify the highest-ROI automation opportunities, and map out the processes that AI agents can take over.',
        },
        {
          title: 'Architecture',
          description: 'Our engineers design the agent system using Cortex\u2014defining tools, delegation chains, and provider strategy tailored to your needs.',
        },
        {
          title: 'Build & Test',
          description: 'We develop, sandbox-test, and iterate. Every agent is validated against real scenarios before deployment, with built-in cost controls.',
        },
        {
          title: 'Deploy & Optimize',
          description: 'Agents go live with real-time monitoring, cost tracking, and continuous optimization. You see results from day one.',
        },
      ],
    },
    cta: {
      headline: 'Ready to Automate? Let\u2019s Talk.',
      description: 'Book a free 30-minute strategy session. We\u2019ll identify your top 3 automation opportunities and show you the expected ROI.',
      button: 'Book Your Free Strategy Call',
      note: 'Average response time: 32 minutes',
    },
  },
  cortex: {
    hero: {
      h1: 'Cortex: The AI Agent Framework Built for Enterprise Automation',
      subtitle: 'A TypeScript-first orchestration engine that lets you define, deploy, and manage intelligent AI agents across multiple providers. Zero-config setup. Built-in cost tracking. Enterprise-grade sandboxing.',
      ctaPrimary: 'Get Started with Cortex',
      ctaSecondary: 'View Documentation',
    },
    features: {
      headline: 'Everything You Need to Build Production AI Agents',
      items: [
        {
          title: 'Multi-Provider Intelligence',
          description: 'Seamlessly switch between Claude, GPT, and Gemini\u2014or use them together. One codebase, any LLM. The centralized Model Registry auto-configures providers with zero setup.',
        },
        {
          title: 'Hierarchical Agent Delegation',
          description: 'Build orchestrator agents that automatically delegate to specialized sub-agents. Each agent has its own tools, system prompt, and model. The framework generates delegation tools automatically.',
        },
        {
          title: 'Typed Context System',
          description: 'Define your business context once with TypeScript generics. Every agent, tool, and prompt builder gets full type safety\u2014from your database models to role-based permissions.',
        },
        {
          title: 'Deferred Tool Discovery',
          description: 'Agents don\u2019t need 100 tools loaded at once. Cortex\u2019s hierarchical tool category tree lets agents search and activate tools on demand, keeping context windows lean and responses fast.',
        },
        {
          title: 'Script Sandbox',
          description: 'Let AI agents write and execute JavaScript in a secure Worker Thread sandbox. Memory limits, timeouts, and tool-call caps prevent runaway scripts. Perfect for complex multi-step computations.',
        },
        {
          title: 'Real-Time Cost Tracking',
          description: 'Every token is tracked. Every API call is priced. Get per-agent, per-model cost breakdowns including prompt caching. Set budgets and monitor spending in real-time.',
        },
        {
          title: 'Streaming & SSE',
          description: 'Built-in Server-Sent Events for real-time streaming to your frontend. See agent reasoning, tool executions, and results as they happen. Sync mode available for batch processing.',
        },
        {
          title: 'Debug UI',
          description: 'Visual debugging with a built-in event bus. Trace agent runs, inspect tool calls, monitor delegations, and analyze costs\u2014all in a live dashboard.',
        },
        {
          title: 'Human-in-the-Loop',
          description: 'Confirmation flows let agents pause and request human approval before executing sensitive actions. Resume seamlessly after confirmation.',
        },
        {
          title: 'Lifecycle Hooks',
          description: 'Tap into onRoundComplete, onToolCall, onComplete, and onError hooks. Build custom logging, alerting, or analytics on top of every agent interaction.',
        },
      ],
    },
    codeExample: {
      headline: 'Get Running in Under 10 Lines',
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

const runtime = createRuntime(); // zero-config, auto-resolves providers
const result = await runtime.run({
  agent,
  messages,
  context: { userId: "u_123", role: "admin" },
});
console.log(result.cost.totalCostUsd); // every token tracked`,
    },
    useCases: {
      headline: 'What Teams Build with Cortex',
      items: [
        {
          title: 'Customer Support Automation',
          description: 'Deploy agents that resolve tickets, search knowledge bases, and escalate complex issues\u2014reducing response times by 80%.',
        },
        {
          title: 'Data Processing Pipelines',
          description: 'Agents that extract, transform, validate, and route data across systems. Human-in-the-loop for exceptions.',
        },
        {
          title: 'Internal Operations',
          description: 'HR onboarding, IT helpdesk, inventory management\u2014any repetitive internal process becomes an agent workflow.',
        },
        {
          title: 'Multi-Step Business Logic',
          description: 'Orchestrator agents that coordinate specialized sub-agents for complex approval chains, compliance checks, and reporting.',
        },
      ],
    },
  },
  services: {
    hero: {
      h1: 'AI Automation Services That Scale With Your Business',
      subtitle: 'From strategic consulting to full-stack agent deployment, we provide everything you need to transform manual processes into intelligent, automated workflows.',
    },
    deliverablesLabel: 'What you get:',
    items: [
      {
        title: 'AI Strategy & Consulting',
        description: 'Not sure where to start? We audit your operations, map automation opportunities, and build a prioritized roadmap with clear ROI projections for each initiative.',
        deliverables: 'Process audit report, automation opportunity matrix, ROI projections, implementation roadmap, technology stack recommendation.',
        imageAlt: 'Two professionals reviewing a holographic data dashboard',
      },
      {
        title: 'Custom AI Agent Development',
        description: 'We design and build AI agents tailored to your exact business logic. Using our Cortex framework, each agent is purpose-built with the right tools, the right model, and the right guardrails for your use case.',
        deliverables: 'Custom agent architecture, tool development, provider optimization, testing suite, deployment configuration, documentation.',
        imageAlt: 'Developer working on code with an AI agent visualization on screen',
      },
      {
        title: 'Process Automation & Integration',
        description: 'We connect your AI agents to your existing systems\u2014CRMs, ERPs, databases, APIs, communication tools. End-to-end automation from trigger to action, with human oversight where you need it.',
        deliverables: 'System integration, API connectors, workflow automation, monitoring dashboards, alerts, SLA guarantees.',
        imageAlt: 'Central Cortex hub connected to icons of common business tools',
      },
      {
        title: 'Web & App Development',
        description: 'Beyond AI, we build the digital products your business needs. Custom web applications, mobile apps, and dashboards\u2014all engineered for performance, scalability, and exceptional user experience.',
        deliverables: 'Full-stack web/mobile development, UI/UX design, API development, cloud deployment, ongoing maintenance.',
        imageAlt: 'Modern web and mobile app mockups on multiple devices',
      },
      {
        title: 'Ongoing Support & Optimization',
        description: 'AI agents improve over time. We monitor performance, optimize costs, retrain on new data, and evolve your agents as your business grows. Dedicated support with guaranteed response times.',
        deliverables: '24/7 monitoring, cost optimization reports, quarterly strategy reviews, priority support, agent upgrades.',
        imageAlt: 'Performance monitoring dashboard with optimization metrics',
      },
    ],
  },
  about: {
    hero: {
      h1: 'The Team Behind the AI Agents',
      intro: 'Run4Dev is a software engineering company based in Regensburg, Germany. We started building web and mobile apps\u2014and we were good at it. Then we saw how much time businesses wasted on processes that AI could automate in seconds. So we built Cortex.',
    },
    story: {
      headline: 'Our Story',
      content: 'We didn\u2019t set out to build an AI framework. We were solving real client problems\u2014time tracking, workforce management, operations\u2014when we realized we kept building the same agent infrastructure over and over. Cortex was born from that frustration. A clean, typed, multi-provider framework that handles the hard parts so you can focus on the business logic.\n\nToday, Cortex powers all of our automation projects, and we\u2019re making it available to enterprises that want to move fast without reinventing the wheel.',
    },
    differentiators: [
      {
        title: 'We build what we sell.',
        description: 'Cortex isn\u2019t a marketing exercise\u2014it\u2019s the same framework we use on every project. Every feature was born from a real production need.',
      },
      {
        title: 'German engineering, global reach.',
        description: 'Based in Germany with enterprise-grade standards for security, reliability, and data privacy. Serving clients worldwide.',
      },
      {
        title: 'Full-stack capability.',
        description: 'We don\u2019t just do AI. We build the web apps, the APIs, the integrations, and the infrastructure around it. One team, end to end.',
      },
      {
        title: 'Transparent pricing.',
        description: 'Our cost tracking isn\u2019t just for our clients\u2014it\u2019s built into Cortex. You see exactly what every agent run costs, down to the token.',
      },
    ],
    company: {
      name: 'Run4Dev',
      location: 'Steinweg 4, 93059 Regensburg, Germany',
      focus: 'AI Agent Development, Process Automation, Web & App Development',
      technology: 'Cortex Framework (TypeScript, Node.js)',
      email: 'eni@run4dev.com',
    },
  },
  contact: {
    hero: {
      h1: 'Let\u2019s Build Something Extraordinary',
      subtitle: 'Ready to automate your business processes with AI? Whether you have a clear project in mind or just want to explore what\u2019s possible, we\u2019d love to hear from you.',
    },
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      service: 'What are you looking for?',
      serviceOptions: [
        'AI Agent Development',
        'Process Automation',
        'Web & App Development',
        'Cortex Framework',
        'Strategy Consultation',
        'Other',
      ],
      message: 'Tell us about your project',
      budget: 'Budget range',
      budgetOptions: [
        '< \u20AC10K',
        '\u20AC10K\u2013\u20AC50K',
        '\u20AC50K\u2013\u20AC100K',
        '> \u20AC100K',
        'Not sure yet',
      ],
      submit: 'Send Message',
    },
    info: {
      email: 'eni@run4dev.com',
      location: 'Steinweg 4, 93059 Regensburg, Germany',
      responseTime: '< 30 minutes during business hours',
    },
  },
  footer: {
    privacy: 'Privacy Policy',
    imprint: 'Imprint',
  },
  seo: {
    home: {
      title: 'Run4Dev | AI Agents & Process Automation | Cortex Framework',
      description: 'Run4Dev builds intelligent AI agents that automate business processes. Powered by Cortex, our multi-provider framework. Strategy, development, deployment. Based in Germany.',
      ogTitle: 'Run4Dev \u2014 AI Agents That Automate Your Business',
    },
    cortex: {
      title: 'Cortex Framework | Enterprise AI Agent Orchestration | Run4Dev',
      description: 'Cortex is a TypeScript AI agent framework with multi-provider support (Claude, GPT, Gemini), hierarchical delegation, cost tracking, and enterprise sandboxing. By Run4Dev.',
    },
    services: {
      title: 'AI Automation Services | Custom AI Agents & Integration | Run4Dev',
      description: 'AI strategy consulting, custom agent development, process automation, system integration, and web/app development. Enterprise-grade solutions by Run4Dev.',
    },
    about: {
      title: 'About Run4Dev | AI Engineering Team in Germany',
      description: 'Run4Dev is an AI and software engineering company based in Regensburg, Germany. Creators of the Cortex agent framework. Full-stack AI automation.',
    },
    contact: {
      title: 'Contact Run4Dev | Book a Free AI Strategy Call',
      description: 'Get in touch with Run4Dev for AI agent development, process automation, or a free strategy session. Response time under 30 minutes. Regensburg, Germany.',
    },
  },
};
