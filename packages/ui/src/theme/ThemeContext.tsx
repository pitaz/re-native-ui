import React, { createContext, useContext, useState, useMemo } from 'react';
import { Appearance } from 'react-native';
import { defaultLightTheme, defaultDarkTheme } from './defaultTheme';

export type ThemeType = typeof defaultLightTheme | typeof defaultDarkTheme;

const ThemeContext = createContext<ThemeType>(defaultLightTheme);
const ThemeToggleContext = createContext<() => void>(() => {});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = Appearance.getColorScheme();
  const [colorMode, setColorMode] = useState<'light' | 'dark'>(systemColorScheme ?? 'light');

  const toggleColorMode = () =>
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const theme = useMemo(() => {
    return colorMode === 'light' ? defaultLightTheme : defaultDarkTheme;
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeToggleContext.Provider value={toggleColorMode}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export const useToggleColorMode = () => useContext(ThemeToggleContext);
