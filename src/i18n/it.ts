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
