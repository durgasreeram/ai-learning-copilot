/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Theme, AccentColor } from '../types';
import { LOCAL_STORAGE_KEYS } from '../constants';

interface ThemeContextType {
  theme: Theme;
  accentColor: AccentColor;
  setTheme: (theme: Theme) => void;
  setAccentColor: (color: AccentColor) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always default to 'dark' for Lumina unless explicit 'light' is saved
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) as Theme;
    return saved || 'dark';
  });

  const [accentColor, setAccentColorState] = useState<AccentColor>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCENT_COLOR) as AccentColor;
    return saved || 'purple';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    // Set theme class
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    // Remove previous accent classes
    root.classList.remove('accent-purple', 'accent-blue', 'accent-indigo');
    root.classList.add(`accent-${accentColor}`);
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCENT_COLOR, accentColor);
  }, [accentColor]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const setAccentColor = (newAccent: AccentColor) => {
    setAccentColorState(newAccent);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, accentColor, setTheme, setAccentColor, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
