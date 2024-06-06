import React from 'react';
import './header.less';
import Logo from '../Logo/Logo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
