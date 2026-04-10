export interface SiteContent {
  nav: {
    home: string;
    cortex: string;
    services: string;
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
    valueProposition: {
      headline: string;
      description: string;
      cards: Array<{ title: string; description: string; }>;
    };
    metricsHeadline: string;
    metrics: Array<{ value: string; suffix: string; label: string; }>;
    howItWorks: {
      headline: string;
      subtitle: string;
      steps: Array<{ title: string; description: string; }>;
    };
    cta: {
      headline: string;
      description: string;
      button: string;
      note: string;
    };
  };
  cortex: {
    hero: {
      h1: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    features: {
      headline: string;
      items: Array<{ title: string; description: string; }>;
    };
    codeExample: {
      headline: string;
      code: string;
    };
    useCases: {
      headline: string;
      items: Array<{ title: string; description: string; }>;
    };
  };
  services: {
    hero: {
      h1: string;
      subtitle: string;
    };
    deliverablesLabel: string;
    items: Array<{
      title: string;
      description: string;
      deliverables: string;
      imageAlt: string;
    }>;
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
      service: string;
      serviceOptions: string[];
      message: string;
      budget: string;
      budgetOptions: string[];
      submit: string;
    };
    info: {
      email: string;
      location: string;
      responseTime: string;
    };
  };
  footer: {
    privacy: string;
    imprint: string;
  };
  seo: {
    home: { title: string; description: string; ogTitle: string; };
    cortex: { title: string; description: string; };
    services: { title: string; description: string; };
    about: { title: string; description: string; };
    contact: { title: string; description: string; };
  };
}
