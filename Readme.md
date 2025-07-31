# React Native UI Library

A comprehensive, modern UI component library for React Native with TypeScript support, theming capabilities, and accessibility features.

## Features

- **TypeScript Support**: Fully typed components with excellent IntelliSense
- **Theme System**: Flexible theming with light/dark mode support
- **Accessibility**: Built-in accessibility features and ARIA support
- **Modern Design**: Clean, consistent design system
- **Cross-Platform**: Works seamlessly on iOS and Android
- **Customizable**: Easy to customize and extend
- **Performance**: Optimized for performance with minimal bundle size

## Components

The library includes a wide range of components:

- **Form Components**: Input, TextArea, Select, CheckBox, Switch, RadioGroup
- **Layout Components**: Container, Box, Stack, Grid, Spacer, Divider
- **Interactive Components**: Button, Slider, StepperInput, TagInput
- **Feedback Components**: Snackbar, SlideDownToast, SnackbarProvider
- **Specialized Components**: DatePicker, OTPInput, PasswordInput, MaskedInput
- **Utility Components**: Accordion, StaggeredGrid

## Getting Started

### Installation

Install the package using npm or yarn:

```bash
npm install re-native-ui
```

or

```bash
yarn add re-native-ui
```

### Basic Setup

Wrap your app with the ThemeProvider to enable theming:

```tsx
import { ThemeProvider } from "re-native-ui";

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Using Components

Import and use components directly:

```tsx
import { Text, Button, Input } from "re-native-ui";

function MyComponent() {
  return (
    <Container>
      <Text>Hello World</Text>
      <Input placeholder="Enter your name" />
      <Button onPress={() => console.log("Pressed!")}>Click Me</Button>
    </Container>
  );
}
```

### Theming

The library comes with built-in light and dark themes, and you can create custom themes:

```tsx
import { ThemeProvider, defaultLightTheme } from "re-native-ui";

const customTheme = {
  ...defaultLightTheme,
  colors: {
    ...defaultLightTheme.colors,
    primary: "#007AFF",
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Project Structure

```
react-native-ui/
├── packages/
│   └── ui/                 # Main UI library
│       ├── src/
│       │   ├── components/ # All UI components
│       │   └── theme/      # Theme system
│       └── package.json
├── docs/                   # Documentation site
├── example/                # Example React Native app
└── package.json
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to:

- Report bugs
- Suggest new features
- Submit pull requests
- Set up the development environment

## Documentation

For detailed documentation, visit our [documentation site](https://your-docs-url.com) or check the `docs/` directory.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Issues**: Report bugs and request features on GitHub
- **Discussions**: Join community discussions
- **Documentation**: Check our comprehensive documentation

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.
