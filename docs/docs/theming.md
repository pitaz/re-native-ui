# Theming

The React Native UI Library includes a powerful theming system that allows you to customize colors, spacing, typography, and more.

## Theme Provider

All components use the theme context provided by `ThemeProvider`. Wrap your app with this provider to enable theming:

```tsx
import { ThemeProvider } from "re-native-ui";

export default function App() {
  return <ThemeProvider>{/* Your app content */}</ThemeProvider>;
}
```

## Default Theme

The library comes with a default theme that includes:

### Colors

- `primary`: Primary brand color
- `secondary`: Secondary brand color
- `background`: App background color
- `surface`: Surface/card background color
- `text`: Primary text color
- `textSecondary`: Secondary text color
- `border`: Border color
- `error`: Error state color
- `success`: Success state color
- `warning`: Warning state color

### Spacing

- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `xxl`: 48px

### Typography Variants

- `heading`: Large heading text
- `subheading`: Medium heading text
- `body`: Regular body text
- `caption`: Small caption text
- `button`: Button text

## Using Theme Values

Components automatically use theme values for styling:

```tsx
import { Box, Text, Button } from "re-native-ui";

// Box uses theme spacing
<Box p="md" bg="background">
  <Text variant="heading" color="text">
    Hello World
  </Text>
  <Button bg="primary" color="white">
    Click Me
  </Button>
</Box>;
```

## Dark Mode

The library supports dark mode out of the box. Use the `useToggleColorMode` hook to toggle between light and dark themes:

```tsx
import { useToggleColorMode, Button } from "re-native-ui";

function ThemeToggle() {
  const toggleTheme = useToggleColorMode();

  return <Button onPress={toggleTheme}>Toggle Theme</Button>;
}
```

## Custom Themes

You can create custom themes by extending the default theme:

```tsx
import { ThemeProvider, createTheme } from "re-native-ui";

const customTheme = createTheme({
  colors: {
    primary: "#FF6B6B",
    secondary: "#4ECDC4",
    background: "#F7F7F7",
    // ... other color overrides
  },
  spacing: {
    md: 20, // Override default 16px
    // ... other spacing overrides
  },
});

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>{/* Your app content */}</ThemeProvider>
  );
}
```

## Theme Context

You can access the current theme in your components using the `useTheme` hook:

```tsx
import { useTheme } from "re-native-ui";

function MyComponent() {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        padding: theme.spacing.md,
      }}
    >
      {/* Component content */}
    </View>
  );
}
```

## Responsive Design

The theme system supports responsive design through breakpoints:

```tsx
import { Box } from "re-native-ui";

<Box p={{ xs: "sm", md: "lg" }} width={{ xs: "100%", md: "50%" }}>
  Responsive content
</Box>;
```

This creates a responsive layout that adapts to different screen sizes.
