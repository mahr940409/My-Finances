import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
  return (
    <button onClick={toggleLang} className="border px-2 py-1">
      {lang === 'en' ? 'ES' : 'EN'}
    </button>
  );
};
