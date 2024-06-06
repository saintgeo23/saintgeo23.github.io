import React, { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import i18n from '../i18n';

export type Language = 'en' | 'ru';

interface LanguageContextType {
  lang: Language;
  changeLanguage: (newLang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderType {
  children: ReactNode;
}

const LanguageProvider: FC<LanguageProviderType> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => localStorage.getItem('lang') as Language || 'en');

  useEffect(() => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
  }, [lang]);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
  };

  return <LanguageContext.Provider value={{ lang, changeLanguage }}>{children}</LanguageContext.Provider>;
};

const useLanguage = () => useContext(LanguageContext);

export { LanguageProvider, useLanguage };
