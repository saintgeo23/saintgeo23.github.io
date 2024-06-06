import React, { useContext } from 'react';
import './language-switcher.less';
import { useLanguage } from '../../providers/LanguageProvider';
import type { Language } from '../../providers/LanguageProvider';

export default function LanguageSwitcher() {
  const context = useLanguage();

  function changeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
    if (context) context.changeLanguage(e.target.value as Language);
  }

  return (
    <select
      className="language-switcher"
      name="lang"
      value={context?.lang || 'en'}
      onChange={changeLanguage}
      >
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
}
