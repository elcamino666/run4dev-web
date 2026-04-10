import type { SiteContent } from './types';

export const de: SiteContent = {
  nav: {
    home: 'Startseite',
    cortex: 'Cortex Framework',
    services: 'Leistungen',
    about: '\u00dcber uns',
    contact: 'Kontakt',
    bookCall: 'Gespr\u00e4ch buchen',
  },
  home: {
    hero: {
      h1: 'Wir entwickeln KI-Agenten, die Ihre Gesch\u00e4ftsprozesse automatisieren',
      subtitle: 'Run4Dev entwickelt intelligente KI-Systeme, die repetitive Workflows \u00fcbernehmen, Betriebskosten senken und Ihrem Team freie Hand f\u00fcr das Wesentliche geben. Angetrieben von unserem propriet\u00e4ren Cortex-Framework.',
      ctaPrimary: 'Kostenloses Strategiegespr\u00e4ch buchen',
      ctaSecondary: 'Cortex in Aktion erleben',
    },
    trustBar: [
      'Reaktionszeit: < 30 Min.',
      'Standort Deutschland',
      'Enterprise-Sicherheit',
      'Multi-Provider-KI',
    ],
    valueProposition: {
      headline: 'Intelligente Automatisierung mit echtem ROI',
      description: 'Die meisten Unternehmen verschwenden 40 % der Arbeitszeit mit Aufgaben, die KI erledigen kann. Unser Cortex-Framework setzt spezialisierte KI-Agenten ein, die rund um die Uhr fehlerfrei arbeiten \u2014 bei Prozessen, die Ihr Team bisher ausgebremst haben.',
      cards: [
        {
          title: 'KI-Agenten-Entwicklung',
          description: 'Ma\u00dfgeschneiderte KI-Agenten f\u00fcr Ihre spezifischen Workflows. Von Kundenservice bis Datenverarbeitung \u2014 unsere Agenten integrieren sich in Ihre bestehenden Tools und lernen Ihre Gesch\u00e4ftslogik.',
        },
        {
          title: 'Prozessautomatisierung',
          description: 'End-to-End-Automatisierung repetitiver Gesch\u00e4ftsprozesse. Wir analysieren Ihre Abl\u00e4ufe, identifizieren Engp\u00e4sse und setzen KI-L\u00f6sungen ein, die mit Ihrem Wachstum skalieren.',
        },
        {
          title: 'Cortex Framework',
          description: 'Unsere Open-Source-Agenten-Orchestrierungsengine. Multi-Provider (Claude, GPT, Gemini), integriertes Kostentracking, hierarchische Agenten-Delegation und Enterprise-Sandboxing.',
        },
      ],
    },
    metricsHeadline: 'Bewiesene Ergebnisse, messbarer Einfluss',
    metrics: [
      { value: '10', suffix: 'x', label: 'Schnellere Prozessausf\u00fchrung als manuelle Workflows' },
      { value: '60', suffix: '%', label: 'Durchschnittliche Kostenreduktion bei automatisierten Prozessen' },
      { value: '24/7', suffix: '', label: 'KI-Agenten arbeiten rund um die Uhr, ohne Ausfallzeiten' },
      { value: '3', suffix: '+', label: 'KI-Anbieter unterst\u00fctzt (Claude, GPT, Gemini)' },
    ],
    howItWorks: {
      headline: 'Von der Idee zum einsatzbereiten KI-Agenten in 4 Schritten',
      subtitle: 'So funktioniert es',
      steps: [
        {
          title: 'Analyse',
          description: 'Wir pr\u00fcfen Ihre Abl\u00e4ufe, identifizieren die Automatisierungspotenziale mit dem h\u00f6chsten ROI und kartieren die Prozesse, die KI-Agenten \u00fcbernehmen k\u00f6nnen.',
        },
        {
          title: 'Architektur',
          description: 'Unsere Ingenieure entwerfen das Agentensystem mit Cortex \u2014 inklusive Tools, Delegationsketten und Provider-Strategie, zugeschnitten auf Ihre Anforderungen.',
        },
        {
          title: 'Entwicklung & Test',
          description: 'Wir entwickeln, testen im Sandbox und iterieren. Jeder Agent wird an realen Szenarien validiert, mit integrierten Kostenkontrollen.',
        },
        {
          title: 'Deployment & Optimierung',
          description: 'Agenten gehen live mit Echtzeit-Monitoring, Kostentracking und kontinuierlicher Optimierung. Sie sehen Ergebnisse ab dem ersten Tag.',
        },
      ],
    },
    cta: {
      headline: 'Bereit f\u00fcr Automatisierung? Lassen Sie uns sprechen.',
      description: 'Buchen Sie ein kostenloses 30-min\u00fctiges Strategiegespr\u00e4ch. Wir identifizieren Ihre Top-3-Automatisierungschancen und zeigen Ihnen den erwarteten ROI.',
      button: 'Kostenloses Strategiegespr\u00e4ch buchen',
      note: 'Durchschnittliche Reaktionszeit: 32 Minuten',
    },
  },
  cortex: {
    hero: {
      h1: 'Cortex: Das KI-Agenten-Framework f\u00fcr Enterprise-Automatisierung',
      subtitle: 'Eine TypeScript-basierte Orchestrierungsengine, mit der Sie intelligente KI-Agenten \u00fcber mehrere Anbieter hinweg definieren, bereitstellen und verwalten. Zero-Config-Setup. Integriertes Kostentracking. Enterprise-Sandboxing.',
      ctaPrimary: 'Mit Cortex starten',
      ctaSecondary: 'Dokumentation ansehen',
    },
    features: {
      headline: 'Alles, was Sie f\u00fcr produktionsreife KI-Agenten brauchen',
      items: [
        {
          title: 'Multi-Provider-Intelligenz',
          description: 'Nahtloser Wechsel zwischen Claude, GPT und Gemini\u2014oder alle gleichzeitig nutzen. Eine Codebasis, jedes LLM. Die zentrale Model Registry konfiguriert Anbieter automatisch.',
        },
        {
          title: 'Hierarchische Agenten-Delegation',
          description: 'Erstellen Sie Orchestrator-Agenten, die automatisch an spezialisierte Sub-Agenten delegieren. Jeder Agent hat eigene Tools, System-Prompts und Modelle.',
        },
        {
          title: 'Typisiertes Kontextsystem',
          description: 'Definieren Sie Ihren Gesch\u00e4ftskontext einmal mit TypeScript-Generics. Jeder Agent, jedes Tool und jeder Prompt-Builder erh\u00e4lt volle Typsicherheit.',
        },
        {
          title: 'Deferred Tool Discovery',
          description: 'Agenten ben\u00f6tigen nicht 100 Tools gleichzeitig. Der hierarchische Tool-Kategoriebaum von Cortex l\u00e4sst Agenten Tools bei Bedarf suchen und aktivieren.',
        },
        {
          title: 'Skript-Sandbox',
          description: 'KI-Agenten k\u00f6nnen JavaScript in einer sicheren Worker-Thread-Sandbox schreiben und ausf\u00fchren. Speicherlimits, Timeouts und Tool-Call-Caps verhindern unkontrollierte Skripte.',
        },
        {
          title: 'Echtzeit-Kostentracking',
          description: 'Jeder Token wird erfasst. Jeder API-Call wird bepreist. Erhalten Sie Kosten-Breakdowns pro Agent und Modell, inklusive Prompt-Caching.',
        },
        {
          title: 'Streaming & SSE',
          description: 'Integrierte Server-Sent Events f\u00fcr Echtzeit-Streaming an Ihr Frontend. Sehen Sie Agent-Reasoning, Tool-Ausf\u00fchrungen und Ergebnisse live.',
        },
        {
          title: 'Debug-UI',
          description: 'Visuelles Debugging mit integriertem Event-Bus. Verfolgen Sie Agent-L\u00e4ufe, inspizieren Sie Tool-Calls und analysieren Sie Kosten in einem Live-Dashboard.',
        },
        {
          title: 'Human-in-the-Loop',
          description: 'Best\u00e4tigungsflows erm\u00f6glichen es Agenten, vor der Ausf\u00fchrung sensibler Aktionen menschliche Freigabe anzufordern. Nahtlose Wiederaufnahme nach Best\u00e4tigung.',
        },
        {
          title: 'Lifecycle Hooks',
          description: 'Nutzen Sie onRoundComplete, onToolCall, onComplete und onError Hooks. Erstellen Sie individuelles Logging, Alerting oder Analytics f\u00fcr jede Agenten-Interaktion.',
        },
      ],
    },
    codeExample: {
      headline: 'In unter 10 Zeilen einsatzbereit',
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
      headline: 'Was Teams mit Cortex bauen',
      items: [
        {
          title: 'Kundenservice-Automatisierung',
          description: 'Agenten, die Tickets l\u00f6sen, Wissensdatenbanken durchsuchen und komplexe F\u00e4lle eskalieren\u2014Reaktionszeiten um 80% reduziert.',
        },
        {
          title: 'Datenverarbeitungs-Pipelines',
          description: 'Agenten, die Daten extrahieren, transformieren, validieren und \u00fcber Systeme hinweg weiterleiten. Human-in-the-Loop bei Ausnahmen.',
        },
        {
          title: 'Interne Abl\u00e4ufe',
          description: 'HR-Onboarding, IT-Helpdesk, Bestandsverwaltung\u2014jeder repetitive interne Prozess wird zum Agenten-Workflow.',
        },
        {
          title: 'Mehrstufige Gesch\u00e4ftslogik',
          description: 'Orchestrator-Agenten, die spezialisierte Sub-Agenten f\u00fcr komplexe Freigabeketten, Compliance-Checks und Reporting koordinieren.',
        },
      ],
    },
  },
  services: {
    hero: {
      h1: 'KI-Automatisierungsdienste, die mit Ihrem Unternehmen wachsen',
      subtitle: 'Von strategischer Beratung bis zum Full-Stack-Agenten-Deployment: Wir liefern alles, was Sie brauchen, um manuelle Prozesse in intelligente, automatisierte Workflows zu transformieren.',
    },
    deliverablesLabel: 'Das erhalten Sie:',
    items: [
      {
        title: 'KI-Strategie & Beratung',
        description: 'Unsicher, wo Sie anfangen sollen? Wir pr\u00fcfen Ihre Abl\u00e4ufe, kartieren Automatisierungschancen und erstellen eine priorisierte Roadmap mit klaren ROI-Prognosen f\u00fcr jede Initiative.',
        deliverables: 'Prozess-Audit-Report, Automatisierungs-Chancen-Matrix, ROI-Prognosen, Implementierungs-Roadmap, Technologie-Stack-Empfehlung.',
        imageAlt: 'Zwei Fachleute pr\u00fcfen ein holographisches Daten-Dashboard',
      },
      {
        title: 'Individuelle KI-Agenten-Entwicklung',
        description: 'Wir entwerfen und bauen KI-Agenten, die exakt auf Ihre Gesch\u00e4ftslogik zugeschnitten sind. Mit unserem Cortex-Framework wird jeder Agent mit den richtigen Tools, dem richtigen Modell und den richtigen Leitplanken entwickelt.',
        deliverables: 'Individuelle Agenten-Architektur, Tool-Entwicklung, Provider-Optimierung, Test-Suite, Deployment-Konfiguration, Dokumentation.',
        imageAlt: 'Entwickler arbeitet am Code mit KI-Agenten-Visualisierung auf dem Bildschirm',
      },
      {
        title: 'Prozessautomatisierung & Integration',
        description: 'Wir verbinden Ihre KI-Agenten mit Ihren bestehenden Systemen\u2014CRMs, ERPs, Datenbanken, APIs, Kommunikationstools. End-to-End-Automatisierung vom Trigger bis zur Aktion, mit menschlicher Kontrolle wo n\u00f6tig.',
        deliverables: 'Systemintegration, API-Konnektoren, Workflow-Automatisierung, Monitoring-Dashboards, Alerts, SLA-Garantien.',
        imageAlt: 'Zentraler Cortex-Hub verbunden mit Icons g\u00e4ngiger Business-Tools',
      },
      {
        title: 'Web- & App-Entwicklung',
        description: '\u00dcber KI hinaus entwickeln wir die digitalen Produkte, die Ihr Unternehmen braucht. Individuelle Webanwendungen, mobile Apps und Dashboards\u2014alle f\u00fcr Performance, Skalierbarkeit und au\u00dfergew\u00f6hnliche User Experience optimiert.',
        deliverables: 'Full-Stack Web-/Mobile-Entwicklung, UI/UX-Design, API-Entwicklung, Cloud-Deployment, laufende Wartung.',
        imageAlt: 'Moderne Web- und Mobile-App-Mockups auf mehreren Ger\u00e4ten',
      },
      {
        title: 'Laufender Support & Optimierung',
        description: 'KI-Agenten verbessern sich mit der Zeit. Wir \u00fcberwachen die Performance, optimieren Kosten, trainieren mit neuen Daten und entwickeln Ihre Agenten weiter, w\u00e4hrend Ihr Unternehmen w\u00e4chst.',
        deliverables: '24/7-Monitoring, Kostenoptimierungs-Reports, vierterlj\u00e4hrliche Strategie-Reviews, Priority-Support, Agenten-Upgrades.',
        imageAlt: 'Performance-Monitoring-Dashboard mit Optimierungsmetriken',
      },
    ],
  },
  about: {
    hero: {
      h1: 'Das Team hinter den KI-Agenten',
      intro: 'Run4Dev ist ein Software-Engineering-Unternehmen mit Sitz in Regensburg. Wir haben mit Web- und Mobile-Apps angefangen\u2014und waren gut darin. Dann haben wir gesehen, wie viel Zeit Unternehmen mit Prozessen verschwenden, die KI in Sekunden automatisieren kann. Also haben wir Cortex gebaut.',
    },
    story: {
      headline: 'Unsere Geschichte',
      content: 'Wir wollten kein KI-Framework bauen. Wir l\u00f6sten echte Kundenprobleme\u2014Zeiterfassung, Personalverwaltung, Betriebsabl\u00e4ufe\u2014als wir merkten, dass wir immer wieder die gleiche Agenten-Infrastruktur bauten. Cortex entstand aus dieser Frustration. Ein sauberes, typisiertes, Multi-Provider-Framework, das die schwierigen Teile \u00fcbernimmt, damit Sie sich auf die Gesch\u00e4ftslogik konzentrieren k\u00f6nnen.\n\nHeute treibt Cortex alle unsere Automatisierungsprojekte an, und wir machen es Unternehmen zug\u00e4nglich, die schnell vorankommen wollen, ohne das Rad neu zu erfinden.',
    },
    differentiators: [
      {
        title: 'Wir nutzen, was wir verkaufen.',
        description: 'Cortex ist keine Marketing-\u00dcbung\u2014es ist dasselbe Framework, das wir in jedem Projekt einsetzen. Jede Funktion entstand aus einem echten Produktionsbedarf.',
      },
      {
        title: 'Deutsche Ingenieurskunst, globale Reichweite.',
        description: 'Sitz in Deutschland mit Enterprise-Standards f\u00fcr Sicherheit, Zuverl\u00e4ssigkeit und Datenschutz. Kunden weltweit.',
      },
      {
        title: 'Full-Stack-Kompetenz.',
        description: 'Wir machen nicht nur KI. Wir bauen die Web-Apps, die APIs, die Integrationen und die Infrastruktur drumherum. Ein Team, von Anfang bis Ende.',
      },
      {
        title: 'Transparente Preise.',
        description: 'Unser Kostentracking ist nicht nur f\u00fcr unsere Kunden\u2014es ist in Cortex eingebaut. Sie sehen genau, was jeder Agenten-Lauf kostet, bis zum Token.',
      },
    ],
    company: {
      name: 'Run4Dev',
      location: 'Steinweg 4, 93059 Regensburg, Germany',
      focus: 'KI-Agenten-Entwicklung, Prozessautomatisierung, Web- & App-Entwicklung',
      technology: 'Cortex Framework (TypeScript, Node.js)',
      email: 'eni@run4dev.com',
    },
  },
  contact: {
    hero: {
      h1: 'Lassen Sie uns etwas Au\u00dfergew\u00f6hnliches schaffen',
      subtitle: 'Bereit, Ihre Gesch\u00e4ftsprozesse mit KI zu automatisieren? Ob Sie ein konkretes Projekt im Sinn haben oder einfach erkunden m\u00f6chten, was m\u00f6glich ist \u2014 wir freuen uns auf Ihre Nachricht.',
    },
    form: {
      name: 'Name',
      email: 'E-Mail',
      company: 'Unternehmen',
      service: 'Wonach suchen Sie?',
      serviceOptions: [
        'KI-Agenten-Entwicklung',
        'Prozessautomatisierung',
        'Web- & App-Entwicklung',
        'Cortex Framework',
        'Strategieberatung',
        'Sonstiges',
      ],
      message: 'Erz\u00e4hlen Sie uns von Ihrem Projekt',
      budget: 'Budgetrahmen',
      budgetOptions: [
        '< \u20AC10K',
        '\u20AC10K\u2013\u20AC50K',
        '\u20AC50K\u2013\u20AC100K',
        '> \u20AC100K',
        'Noch unsicher',
      ],
      submit: 'Nachricht senden',
    },
    info: {
      email: 'eni@run4dev.com',
      location: 'Steinweg 4, 93059 Regensburg, Germany',
      responseTime: '< 30 Minuten w\u00e4hrend der Gesch\u00e4ftszeiten',
    },
  },
  footer: {
    privacy: 'Datenschutz',
    imprint: 'Impressum',
  },
  seo: {
    home: {
      title: 'Run4Dev | KI-Agenten & Prozessautomatisierung | Cortex Framework',
      description: 'Run4Dev entwickelt intelligente KI-Agenten zur Automatisierung von Gesch\u00e4ftsprozessen. Angetrieben von Cortex, unserem Multi-Provider-Framework. Strategie, Entwicklung, Deployment.',
      ogTitle: 'Run4Dev \u2014 KI-Agenten, die Ihr Business automatisieren',
    },
    cortex: {
      title: 'Cortex Framework | Enterprise KI-Agenten-Orchestrierung | Run4Dev',
      description: 'Cortex ist ein TypeScript-KI-Agenten-Framework mit Multi-Provider-Support (Claude, GPT, Gemini), hierarchischer Delegation, Kostentracking und Enterprise-Sandboxing.',
    },
    services: {
      title: 'KI-Automatisierungsdienste | Individuelle KI-Agenten & Integration | Run4Dev',
      description: 'KI-Strategieberatung, individuelle Agenten-Entwicklung, Prozessautomatisierung, Systemintegration und Web-/App-Entwicklung. Enterprise-L\u00f6sungen von Run4Dev.',
    },
    about: {
      title: '\u00dcber Run4Dev | KI-Engineering-Team in Deutschland',
      description: 'Run4Dev ist ein KI- und Software-Engineering-Unternehmen mit Sitz in Regensburg. Entwickler des Cortex-Agenten-Frameworks. Full-Stack-KI-Automatisierung.',
    },
    contact: {
      title: 'Kontakt Run4Dev | Kostenloses KI-Strategiegespr\u00e4ch buchen',
      description: 'Kontaktieren Sie Run4Dev f\u00fcr KI-Agenten-Entwicklung, Prozessautomatisierung oder ein kostenloses Strategiegespr\u00e4ch. Reaktionszeit unter 30 Minuten. Regensburg.',
    },
  },
};
