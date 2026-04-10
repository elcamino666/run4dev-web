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
