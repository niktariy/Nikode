import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
    },
    supportedLngs: ['en', 'ru'],
    fallbackLng: 'ru',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    detection: {
      order: ['localStorage', 'sessionStorage', 'navigator'], // Приоритет sessionStorage, затем navigator
      caches: ['sessionStorage'], // Сохраняем в sessionStorage
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
    },
    load: 'languageOnly',
  });

export default i18n; 