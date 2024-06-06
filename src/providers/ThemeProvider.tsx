import React, { FC, ReactNode, createContext, useContext, useLayoutEffect, useState } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderType {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderType> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => localStorage.getItem('theme') as Theme || 'light');

  useLayoutEffect(() => {
    localStorage.setItem('theme', theme);
    const html = document.body.parentElement;
    html.classList.add(theme);

    return () => html.classList.remove(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
