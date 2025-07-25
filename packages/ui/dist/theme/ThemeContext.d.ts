import React from 'react';
import { defaultLightTheme, defaultDarkTheme } from './defaultTheme';
export type ThemeType = typeof defaultLightTheme | typeof defaultDarkTheme;
export declare const ThemeProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useTheme: () => ThemeType;
export declare const useToggleColorMode: () => () => void;
