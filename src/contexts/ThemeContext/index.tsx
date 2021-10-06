import React, { createContext, useContext, useEffect, useState } from 'react';

export interface IThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: '',
  setTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<React.ReactNode> = ({ children }) => {
  const perferColorScheme = window.matchMedia('(prefers-color-scheme: light)')
    .matches
    ? 'light'
    : 'dark';
  const initialTheme = localStorage.getItem('theme') ?? perferColorScheme;
  const [theme, setTheme] = useState<string>(initialTheme);

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement;

    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
