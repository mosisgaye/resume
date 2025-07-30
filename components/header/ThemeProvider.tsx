
import React from 'react';
import ThemeToggle from '../ThemeToggle';

interface ThemeProviderProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const ThemeProvider = ({ theme, setTheme }: ThemeProviderProps) => {
  return <ThemeToggle theme={theme} setTheme={setTheme} />;
};
