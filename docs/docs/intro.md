---
sidebar_position: 1
---

# React Native UI Library

A comprehensive, customizable UI component library for React Native applications.

## Features

- 🎨 **Modern Design**: Clean, accessible components with modern design principles
- 🌙 **Dark Mode**: Built-in dark mode support with easy theming
- 📱 **React Native**: Optimized for React Native with native performance
- ♿ **Accessible**: WCAG compliant components with proper accessibility features
- 🎯 **TypeScript**: Full TypeScript support with comprehensive type definitions
- 🔧 **Customizable**: Flexible theming system for easy customization
- 📦 **Lightweight**: Tree-shakeable components to keep your bundle size small

## Quick Start

```bash
npm install react-native-ui
# or
yarn add react-native-ui
```

```tsx
import { ThemeProvider, Box, Text, Button } from "react-native-ui";

export default function App() {
  return (
    <ThemeProvider>
      <Box p="md" bg="background">
        <Text variant="heading">Welcome to React Native UI</Text>
        <Button onPress={() => console.log("Hello!")}>Get Started</Button>
      </Box>
    </ThemeProvider>
  );
}
```

## What's Included

- **Layout Components**: Box, Container, Stack, Spacer, Divider
- **Typography**: Text component with multiple variants
- **Form Components**: Input, TextArea, PasswordInput, Select
- **Interactive**: Button, Checkbox
- **Form Management**: FormProvider, ControlledInput with react-hook-form integration

## Getting Started

Ready to dive in? Check out our [Getting Started guide](./getting-started) to learn how to set up and use the library in your project.

## Theming

Learn how to customize the appearance of your components with our [Theming guide](./theming).

## Components

Explore all available components in our [Components section](./components/input).

## Support

- 📖 [Documentation](./getting-started)
- 🐛 [Report Issues](https://github.com/pitaz/react-native-ui-library/issues)
- 💬 [GitHub Discussions](https://github.com/pitaz/react-native-ui-library/discussions)
