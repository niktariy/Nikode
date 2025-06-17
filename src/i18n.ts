import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';

i18n
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
    fallbackLng: 'ru',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['sessionStorage', 'navigator'], // Приоритет sessionStorage, затем navigator
      caches: ['sessionStorage'], // Сохраняем в sessionStorage
      lookupSessionStorage: 'i18nextLng',
      lookupLocalStorage: 'i18nextLng', // Добавляем на всякий случай
    },
    supportedLngs: ['en', 'ru'],
    load: 'languageOnly',
  });

export default i18n; 