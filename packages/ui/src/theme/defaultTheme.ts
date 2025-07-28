export const defaultLightTheme = {
  colors: {
    primary: "#1E90FF",
    text: "#000",
    background: "#FFF",
    muted: "#888",
    border: "#E0E0E0",
    error: "#FF0000",
  },
  mode: "light" as const,
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  fontSizes: { xs: 12, sm: 14, md: 16, lg: 20, xl: 24 },
};

export const defaultDarkTheme = {
  ...defaultLightTheme,
  colors: {
    ...defaultLightTheme.colors,
    text: "#FFF",
    background: "#121212",
    border: "#333",
    muted: "#AAA",
  },
  mode: "dark" as const,
};
