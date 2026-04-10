import { en } from './en';
import { de } from './de';
import { it } from './it';
import type { SiteContent } from './types';

export type Lang = 'en' | 'de' | 'it';

const translations: Record<Lang, SiteContent> = { en, de, it };

export function useTranslations(lang: Lang): SiteContent {
  return translations[lang] ?? translations.en;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'de' || lang === 'it') return lang;
  return 'en';
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `/${lang}${path.startsWith('/') ? path : '/' + path}`;
}

export type { SiteContent };
