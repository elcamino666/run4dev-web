import type { SiteContent } from './types';

export const it: SiteContent = {
  nav: {
    home: 'Home',
    cortex: 'Cortex Framework',
    services: 'Servizi',
    about: 'Chi Siamo',
    contact: 'Contatti',
    bookCall: 'Prenota una Consulenza',
  },
  home: {
    hero: {
      h1: 'Creiamo Agenti IA che Automatizzano i Tuoi Processi Aziendali',
      subtitle: 'Run4Dev progetta sistemi IA intelligenti che gestiscono i workflow ripetitivi, riducono i costi operativi e permettono al tuo team di concentrarsi su ci\u00f2 che conta. Alimentato dal nostro framework proprietario Cortex.',
      ctaPrimary: 'Prenota una Consulenza Gratuita',
      ctaSecondary: 'Scopri Cortex in Azione',
    },
    trustBar: [
      'Tempo di risposta: < 30 min',
      'Sede in Germania',
      'Sicurezza enterprise',
      'IA multi-provider',
    ],
    valueProposition: {
      headline: 'Automazione Intelligente con ROI Reale',
      description: 'La maggior parte delle aziende spreca il 40% del tempo dei dipendenti in attivit\u00e0 che l\u2019IA pu\u00f2 gestire. Il nostro framework Cortex implementa agenti IA specializzati che lavorano 24/7 senza errori, su processi che prima rallentavano il tuo team.',
      cards: [
        {
          title: 'Sviluppo Agenti IA',
          description: 'Agenti IA personalizzati per i tuoi workflow specifici. Dal servizio clienti all\u2019elaborazione dati, i nostri agenti si integrano con i tuoi strumenti esistenti e apprendono la tua logica aziendale.',
        },
        {
          title: 'Automazione dei Processi',
          description: 'Automazione end-to-end dei processi aziendali ripetitivi. Analizziamo le tue operazioni, identifichiamo i colli di bottiglia e implementiamo soluzioni IA che scalano con la tua crescita.',
        },
        {
          title: 'Cortex Framework',
          description: 'Il nostro motore open-source di orchestrazione agenti. Multi-provider (Claude, GPT, Gemini), monitoraggio costi integrato, delegazione gerarchica degli agenti e sandboxing enterprise.',
        },
      ],
    },
    metricsHeadline: 'Risultati Provati, Impatto Misurabile',
    metrics: [
      { value: '10', suffix: 'x', label: 'Esecuzione processi pi\u00f9 veloce rispetto ai workflow manuali' },
      { value: '60', suffix: '%', label: 'Riduzione media dei costi per i processi automatizzati' },
      { value: '24/7', suffix: '', label: 'Gli agenti IA lavorano senza sosta, zero tempi di inattivit\u00e0' },
      { value: '3', suffix: '+', label: 'Provider IA supportati (Claude, GPT, Gemini)' },
    ],
    howItWorks: {
      headline: 'Dall\u2019Idea all\u2019Agente IA Operativo in 4 Step',
      subtitle: 'Come Funziona',
      steps: [
        {
          title: 'Discovery',
          description: 'Analizziamo le tue operazioni, identifichiamo le opportunit\u00e0 di automazione con il ROI pi\u00f9 alto e mappiamo i processi che gli agenti IA possono gestire.',
        },
        {
          title: 'Architettura',
          description: 'I nostri ingegneri progettano il sistema di agenti con Cortex\u2014definendo strumenti, catene di delegazione e strategia provider su misura per le tue esigenze.',
        },
        {
          title: 'Sviluppo & Test',
          description: 'Sviluppiamo, testiamo in sandbox e iteriamo. Ogni agente viene validato su scenari reali prima del deployment, con controlli di costo integrati.',
        },
        {
          title: 'Deploy & Ottimizzazione',
          description: 'Gli agenti vanno live con monitoraggio real-time, tracking dei costi e ottimizzazione continua. Vedrai risultati dal primo giorno.',
        },
      ],
    },
    cta: {
      headline: 'Pronto per l\u2019Automazione? Parliamone.',
      description: 'Prenota una sessione strategica gratuita di 30 minuti. Identificheremo le tue 3 migliori opportunit\u00e0 di automazione e ti mostreremo il ROI atteso.',
      button: 'Prenota la Tua Consulenza Gratuita',
      note: 'Tempo medio di risposta: 32 minuti',
    },
  },
  cortex: {
    hero: {
      h1: 'Cortex: Il Framework per Agenti IA Progettato per l\u2019Automazione Enterprise',
      subtitle: 'Un motore di orchestrazione TypeScript-first che ti permette di definire, distribuire e gestire agenti IA intelligenti su pi\u00f9 provider. Setup zero-config. Monitoraggio costi integrato. Sandboxing enterprise.',
      ctaPrimary: 'Inizia con Cortex',
      ctaSecondary: 'Visualizza Documentazione',
    },
    features: {
      headline: 'Tutto ci\u00f2 di cui hai bisogno per costruire Agenti IA di produzione',
      items: [
        {
          title: 'Intelligenza Multi-Provider',
          description: 'Passa senza interruzioni tra Claude, GPT e Gemini\u2014o usali insieme. Un unico codebase, qualsiasi LLM. Il Model Registry centralizzato configura i provider automaticamente.',
        },
        {
          title: 'Delegazione Gerarchica degli Agenti',
          description: 'Costruisci agenti orchestratore che delegano automaticamente ad agenti sub-specializzati. Ogni agente ha i propri strumenti, prompt di sistema e modello.',
        },
        {
          title: 'Sistema di Contesto Tipizzato',
          description: 'Definisci il tuo contesto aziendale una volta con i generics TypeScript. Ogni agente, strumento e prompt builder ottiene la piena sicurezza dei tipi.',
        },
        {
          title: 'Scoperta Strumenti Differita',
          description: 'Gli agenti non necessitano di 100 strumenti caricati contemporaneamente. L\u2019albero gerarchico delle categorie di Cortex permette agli agenti di cercare e attivare strumenti su richiesta.',
        },
        {
          title: 'Sandbox per Script',
          description: 'Gli agenti IA possono scrivere ed eseguire JavaScript in una sandbox sicura Worker Thread. Limiti di memoria, timeout e limiti di chiamate strumenti prevengono script fuori controllo.',
        },
        {
          title: 'Monitoraggio Costi Real-Time',
          description: 'Ogni token viene tracciato. Ogni chiamata API ha un prezzo. Ottieni breakdown dei costi per agente e modello, incluso il prompt caching.',
        },
        {
          title: 'Streaming & SSE',
          description: 'Server-Sent Events integrati per lo streaming real-time verso il tuo frontend. Visualizza il ragionamento dell\u2019agente, le esecuzioni degli strumenti e i risultati in tempo reale.',
        },
        {
          title: 'UI di Debug',
          description: 'Debug visuale con event bus integrato. Traccia le esecuzioni degli agenti, ispeziona le chiamate strumenti e analizza i costi in una dashboard live.',
        },
        {
          title: 'Human-in-the-Loop',
          description: 'I flussi di conferma permettono agli agenti di fermarsi e richiedere approvazione umana prima di eseguire azioni sensibili. Ripresa senza interruzioni dopo la conferma.',
        },
        {
          title: 'Lifecycle Hooks',
          description: 'Utilizza gli hook onRoundComplete, onToolCall, onComplete e onError. Costruisci logging personalizzato, alerting o analytics su ogni interazione degli agenti.',
        },
      ],
    },
    codeExample: {
      headline: 'Operativo in meno di 10 righe',
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
      headline: 'Cosa costruiscono i team con Cortex',
      items: [
        {
          title: 'Automazione Servizio Clienti',
          description: 'Agenti che risolvono ticket, cercano nelle basi di conoscenza ed escalano problemi complessi\u2014tempi di risposta ridotti dell\u201980%.',
        },
        {
          title: 'Pipeline di Elaborazione Dati',
          description: 'Agenti che estraggono, trasformano, validano e instradano dati tra sistemi. Human-in-the-loop per le eccezioni.',
        },
        {
          title: 'Operazioni Interne',
          description: 'Onboarding HR, helpdesk IT, gestione inventario\u2014ogni processo interno ripetitivo diventa un workflow di agenti.',
        },
        {
          title: 'Logica Aziendale Multi-Step',
          description: 'Agenti orchestratore che coordinano sub-agenti specializzati per catene di approvazione complesse, controlli di conformit\u00e0 e reportistica.',
        },
      ],
    },
  },
  services: {
    hero: {
      h1: 'Servizi di Automazione IA che Scalano con la Tua Azienda',
      subtitle: 'Dalla consulenza strategica al deployment completo degli agenti: forniamo tutto ci\u00f2 che serve per trasformare i processi manuali in workflow intelligenti e automatizzati.',
    },
    deliverablesLabel: 'Cosa ottieni:',
    items: [
      {
        title: 'Strategia IA & Consulenza',
        description: 'Non sai da dove iniziare? Analizziamo le tue operazioni, mappiamo le opportunit\u00e0 di automazione e creiamo una roadmap prioritizzata con proiezioni ROI chiare per ogni iniziativa.',
        deliverables: 'Report di audit dei processi, matrice opportunit\u00e0 di automazione, proiezioni ROI, roadmap di implementazione, raccomandazione technology stack.',
        imageAlt: 'Due professionisti che esaminano un dashboard dati olografico',
      },
      {
        title: 'Sviluppo Agenti IA Personalizzati',
        description: 'Progettiamo e costruiamo agenti IA su misura per la tua logica aziendale. Con il nostro framework Cortex, ogni agente \u00e8 costruito con gli strumenti giusti, il modello giusto e le giuste protezioni.',
        deliverables: 'Architettura agente personalizzata, sviluppo strumenti, ottimizzazione provider, suite di test, configurazione deployment, documentazione.',
        imageAlt: 'Sviluppatore al lavoro sul codice con visualizzazione agente IA sullo schermo',
      },
      {
        title: 'Automazione Processi & Integrazione',
        description: 'Connettiamo i tuoi agenti IA ai tuoi sistemi esistenti\u2014CRM, ERP, database, API, strumenti di comunicazione. Automazione end-to-end dal trigger all\u2019azione, con supervisione umana dove necessario.',
        deliverables: 'Integrazione sistemi, connettori API, automazione workflow, dashboard di monitoraggio, avvisi, garanzie SLA.',
        imageAlt: 'Hub Cortex centrale connesso a icone di strumenti aziendali comuni',
      },
      {
        title: 'Sviluppo Web & App',
        description: 'Oltre all\u2019IA, costruiamo i prodotti digitali di cui la tua azienda ha bisogno. Applicazioni web personalizzate, app mobile e dashboard\u2014tutto progettato per performance, scalabilit\u00e0 e esperienza utente eccezionale.',
        deliverables: 'Sviluppo full-stack web/mobile, design UI/UX, sviluppo API, deployment cloud, manutenzione continua.',
        imageAlt: 'Mockup moderni di web e mobile app su dispositivi multipli',
      },
      {
        title: 'Supporto Continuo & Ottimizzazione',
        description: 'Gli agenti IA migliorano nel tempo. Monitoriamo le performance, ottimizziamo i costi, rialleniamo su nuovi dati e facciamo evolvere i tuoi agenti mentre la tua azienda cresce.',
        deliverables: 'Monitoraggio 24/7, report di ottimizzazione costi, revisioni strategiche trimestrali, supporto prioritario, upgrade agenti.',
        imageAlt: 'Dashboard di monitoraggio performance con metriche di ottimizzazione',
      },
    ],
  },
  about: {
    hero: {
      h1: 'Il Team Dietro gli Agenti IA',
      intro: 'Run4Dev \u00e8 un\u2019azienda di ingegneria software con sede a Regensburg, Germania. Abbiamo iniziato costruendo web e mobile app\u2014ed eravamo bravi. Poi abbiamo visto quanto tempo le aziende sprecavano in processi che l\u2019IA poteva automatizzare in pochi secondi. Cos\u00ec abbiamo costruito Cortex.',
    },
    story: {
      headline: 'La Nostra Storia',
      content: 'Non ci eravamo proposti di costruire un framework IA. Stavamo risolvendo problemi reali dei clienti\u2014rilevazione presenze, gestione del personale, operazioni\u2014quando ci siamo resi conto che continuavamo a ricostruire la stessa infrastruttura per agenti. Cortex \u00e8 nato da quella frustrazione. Un framework pulito, tipizzato e multi-provider che gestisce le parti difficili per permetterti di concentrarti sulla logica aziendale.\n\nOggi Cortex alimenta tutti i nostri progetti di automazione, e lo stiamo rendendo disponibile alle aziende che vogliono muoversi velocemente senza reinventare la ruota.',
    },
    differentiators: [
      {
        title: 'Costruiamo ci\u00f2 che vendiamo.',
        description: 'Cortex non \u00e8 un esercizio di marketing\u2014\u00e8 lo stesso framework che usiamo in ogni progetto. Ogni funzionalit\u00e0 \u00e8 nata da una reale esigenza produttiva.',
      },
      {
        title: 'Ingegneria tedesca, portata globale.',
        description: 'Sede in Germania con standard enterprise per sicurezza, affidabilit\u00e0 e privacy dei dati. Serviamo clienti in tutto il mondo.',
      },
      {
        title: 'Competenza full-stack.',
        description: 'Non facciamo solo IA. Costruiamo le web app, le API, le integrazioni e l\u2019infrastruttura attorno. Un team, dall\u2019inizio alla fine.',
      },
      {
        title: 'Prezzi trasparenti.',
        description: 'Il nostro monitoraggio dei costi non \u00e8 solo per i clienti\u2014\u00e8 integrato in Cortex. Vedi esattamente quanto costa ogni esecuzione di un agente, fino al singolo token.',
      },
    ],
    company: {
      name: 'Run4Dev',
      location: 'Steinweg 4, 93059 Regensburg, Germany',
      focus: 'Sviluppo Agenti IA, Automazione Processi, Sviluppo Web & App',
      technology: 'Cortex Framework (TypeScript, Node.js)',
      email: 'eni@run4dev.com',
    },
  },
  contact: {
    hero: {
      h1: 'Creiamo Qualcosa di Straordinario',
      subtitle: 'Pronto ad automatizzare i tuoi processi aziendali con l\u2019IA? Che tu abbia un progetto chiaro in mente o voglia semplicemente esplorare le possibilit\u00e0, ci farebbe piacere sentirti.',
    },
    form: {
      name: 'Nome',
      email: 'Email',
      company: 'Azienda',
      service: 'Cosa cerchi?',
      serviceOptions: [
        'Sviluppo Agenti IA',
        'Automazione Processi',
        'Sviluppo Web & App',
        'Framework Cortex',
        'Consulenza Strategica',
        'Altro',
      ],
      message: 'Raccontaci del tuo progetto',
      budget: 'Range di budget',
      budgetOptions: [
        '< \u20AC10K',
        '\u20AC10K\u2013\u20AC50K',
        '\u20AC50K\u2013\u20AC100K',
        '> \u20AC100K',
        'Non ancora sicuro',
      ],
      submit: 'Invia Messaggio',
    },
    info: {
      email: 'eni@run4dev.com',
      location: 'Steinweg 4, 93059 Regensburg, Germany',
      responseTime: '< 30 minuti durante l\u2019orario lavorativo',
    },
  },
  footer: {
    privacy: 'Privacy Policy',
    imprint: 'Imprint',
  },
  seo: {
    home: {
      title: 'Run4Dev | Agenti IA & Automazione Processi | Framework Cortex',
      description: 'Run4Dev crea agenti IA intelligenti che automatizzano i processi aziendali. Alimentato da Cortex, il nostro framework multi-provider. Strategia, sviluppo, deployment.',
      ogTitle: 'Run4Dev \u2014 Agenti IA che automatizzano il tuo business',
    },
    cortex: {
      title: 'Framework Cortex | Orchestrazione Agenti IA Enterprise | Run4Dev',
      description: 'Cortex \u00e8 un framework TypeScript per agenti IA con supporto multi-provider (Claude, GPT, Gemini), delegazione gerarchica, monitoraggio costi e sandboxing enterprise.',
    },
    services: {
      title: 'Servizi Automazione IA | Agenti IA Personalizzati & Integrazione | Run4Dev',
      description: 'Consulenza strategica IA, sviluppo agenti personalizzati, automazione processi, integrazione sistemi e sviluppo web/app. Soluzioni enterprise di Run4Dev.',
    },
    about: {
      title: 'Chi \u00e8 Run4Dev | Team di Ingegneria IA in Germania',
      description: 'Run4Dev \u00e8 un\u2019azienda di ingegneria IA e software con sede a Regensburg, Germania. Creatori del framework Cortex per agenti. Automazione IA full-stack.',
    },
    contact: {
      title: 'Contatta Run4Dev | Prenota una Consulenza IA Gratuita',
      description: 'Contatta Run4Dev per sviluppo agenti IA, automazione processi o una sessione strategica gratuita. Tempo di risposta sotto i 30 minuti. Regensburg, Germania.',
    },
  },
};
