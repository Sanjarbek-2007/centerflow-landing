import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import uz from './locales/uz.json';
import ru from './locales/ru.json';

export const SUPPORTED_LANGS = ['uz', 'ru', 'en'] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

const resources = {
  uz: { translation: uz },
  ru: { translation: ru },
  en: { translation: en }
};

function initialLang(): SupportedLang {
  const stored = localStorage.getItem('centerflow_lang');
  if (stored && (SUPPORTED_LANGS as readonly string[]).includes(stored)) return stored as SupportedLang;
  const browser = navigator.language?.slice(0, 2);
  if (browser && (SUPPORTED_LANGS as readonly string[]).includes(browser)) return browser as SupportedLang;
  return 'uz';
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('centerflow_lang', lng);
  document.documentElement.lang = lng;
});

document.documentElement.lang = i18n.language;

export default i18n;
