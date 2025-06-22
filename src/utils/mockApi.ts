import enTranslation from '../locales/en/translation.json';
import ruTranslation from '../locales/ru/translation.json';
import type { ISkillCategory } from '../types/common';

interface SkillsApiResponse {
  title: string;
  desc: string;
  categories: ISkillCategory[];
}

export const fetchSkillsData = (language: string): Promise<SkillsApiResponse> => {
  return new Promise((resolve, reject) => {
    let data: SkillsApiResponse | undefined;
    if (language === 'en') {
      data = enTranslation.skills as SkillsApiResponse;
    } else if (language === 'ru') {
      data = ruTranslation.skills as SkillsApiResponse;
    }

    if (data) {
      resolve(data);
    } else {
      reject(new Error('Unsupported language or missing skills data'));
    }
  });
}; 