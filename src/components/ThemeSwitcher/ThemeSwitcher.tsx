import React from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import './theme-switcher.less';

export default function ThemeSwitcher() {
  const context = useTheme();

  function toggleTheme() {
    if (!context) return;

    context.toggleTheme();
  }

  return (
    <div className='theme-switcher'>
      <input
        className='theme-switcher__checkbox'
        checked={context?.theme === 'dark'}
        onChange={toggleTheme}
        type="checkbox"
        hidden
        id="theme-switcher"
      />

      <label
        htmlFor="theme-switcher"
        className='theme-switcher__toggle'
      />
    </div>
  );
}
