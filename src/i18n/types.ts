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
