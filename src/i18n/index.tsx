import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, LanguageType } from './locales.ts';

interface I18nContextType {
  t: (key: string) => string;
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  availableLanguages: { code: LanguageType; name: string }[];
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageType>(() => {
    return (localStorage.getItem('gw_ui_language') as LanguageType) || 'en';
  });

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
    localStorage.setItem('gw_ui_language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let current: any = translations[language] || translations['en'];
    
    for (const k of keys) {
      if (current[k] === undefined) {
        // Fallback to English
        let fallback: any = translations['en'];
        for (const fbK of keys) {
          if (fallback[fbK] === undefined) return key;
          fallback = fallback[fbK];
        }
        return fallback as string;
      }
      current = current[k];
    }
    return current as string;
  };

  const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'fi', name: 'Suomi' },
    { code: 'es', name: 'Español' },
    { code: 'zh', name: '中文' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'ar', name: 'العربية' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'ru', name: 'Русский' },
    { code: 'pt', name: 'Português' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
  ] as { code: LanguageType; name: string }[];

  return (
    <I18nContext.Provider value={{ t, language, setLanguage, availableLanguages }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useTranslation must be used within I18nProvider');
  return context;
};
