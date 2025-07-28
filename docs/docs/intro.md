---
sidebar_position: 1
---

# React Native UI Library

A comprehensive, customizable UI component library for React Native applications that provides everything you need to build beautiful, accessible, and performant mobile apps.

## Why React Native UI Library?

Building a React Native app from scratch can be time-consuming and challenging. This library provides:

- **🚀 Rapid Development**: Pre-built, production-ready components that work out of the box
- **🎨 Consistent Design**: Unified design system with customizable theming
- **♿ Accessibility First**: WCAG compliant components with proper screen reader support
- **📱 Native Performance**: Optimized for React Native with minimal overhead
- **🔧 Developer Experience**: Full TypeScript support, comprehensive documentation, and intuitive APIs
- **🎯 Flexible & Extensible**: Easy to customize and extend for your specific needs

## Features

- 🎨 **Modern Design**: Clean, accessible components with modern design principles
- 🌙 **Dark Mode**: Built-in dark mode support with easy theming
- 📱 **React Native**: Optimized for React Native with native performance
- ♿ **Accessible**: WCAG compliant components with proper accessibility features
- 🎯 **TypeScript**: Full TypeScript support with comprehensive type definitions
- 🔧 **Customizable**: Flexible theming system for easy customization
- 📦 **Lightweight**: Tree-shakeable components to keep your bundle size small
- 📋 **Form Management**: Built-in support for React Hook Form integration
- 🎛️ **Rich Components**: Comprehensive set of 20+ components for all your UI needs
- 🔄 **Theme Switching**: Dynamic theme switching with smooth transitions

## Quick Start

Install the library:

```bash
npm install react-native-ui
# or
yarn add react-native-ui
# or
pnpm add react-native-ui
```

Wrap your app with the ThemeProvider:

```tsx
import React from "react";
import { SafeAreaView } from "react-native";
import {
  ThemeProvider,
  Container,
  Box,
  Text,
  Button,
  Stack,
} from "react-native-ui";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Box p="md" bg="background">
            <Stack spacing={16}>
              <Text variant="heading">Welcome to React Native UI</Text>
              <Text variant="body">
                Start building beautiful apps with our comprehensive component
                library.
              </Text>
              <Button onPress={() => console.log("Hello!")}>Get Started</Button>
            </Stack>
          </Box>
        </Container>
      </SafeAreaView>
    </ThemeProvider>
  );
}
```

## What's Included

### Layout Components

Build responsive layouts with ease:

- **Container** - Responsive wrapper with configurable padding and max-width
- **Box** - Flexible container with theme-based styling
- **Stack** - Arrange children with consistent spacing
- **Spacer** - Add vertical or horizontal space
- **Divider** - Visual separator line

### Typography

Consistent text styling across your app:

- **Text** - Themed text component with multiple variants (heading, subheading, body, caption)

### Form Components

Complete form building toolkit:

- **Input** - Standard text input with label and error support
- **TextArea** - Multi-line text input
- **PasswordInput** - Secure text input with show/hide toggle
- **Select** - Dropdown selection with modal interface
- **CheckBox** - Single checkbox with label
- **RadioGroup** - Group of radio buttons for single selection
- **Switch** - Toggle switch component
- **Slider** - Range slider for numeric values
- **StepperInput** - Numeric input with increment/decrement buttons

### Specialized Input Components

Advanced input components for specific use cases:

- **OTPInput** - One-time password input with individual digit boxes
- **DatePicker** - Modal-based date selection
- **MaskedInput** - Text input with automatic formatting (phone, credit card, etc.)
- **TagInput** - Multi-tag input with add/remove functionality
- **SearchInput** - Search input with clear functionality

### Interactive Components

Engaging user interactions:

- **Button** - Customizable button with multiple variants (solid, outline, ghost) and states

### Form Management

Advanced form handling:

- **FormProvider** - Context provider for form state management
- **ControlledInput** - Form-controlled input component with React Hook Form integration

## Key Benefits

### 🎯 **Developer Experience**

- **Intuitive APIs**: Components follow consistent patterns and naming conventions
- **TypeScript Support**: Full type safety with comprehensive type definitions
- **Comprehensive Documentation**: Detailed guides, examples, and API references
- **Hot Reload Friendly**: Components work seamlessly with React Native's hot reload

### 🎨 **Design System**

- **Consistent Theming**: Unified color palette, spacing, and typography
- **Flexible Customization**: Easy to adapt to your brand's design language
- **Dark Mode Ready**: Built-in support for light and dark themes
- **Responsive Design**: Components adapt to different screen sizes

### ♿ **Accessibility**

- **Screen Reader Support**: Proper accessibility labels and hints
- **Keyboard Navigation**: Full keyboard accessibility
- **WCAG Compliance**: Components follow accessibility guidelines
- **Focus Management**: Proper focus handling and visual indicators

### 📱 **Performance**

- **Optimized Rendering**: Efficient component updates and re-renders
- **Minimal Bundle Size**: Tree-shakeable components reduce app size
- **Native Performance**: Leverages React Native's native capabilities
- **Memory Efficient**: Proper cleanup and memory management

## Real-World Examples

### User Profile Form

```tsx
import React, { useState } from "react";
import {
  Container,
  Box,
  Text,
  Input,
  TextArea,
  Select,
  DatePicker,
  TagInput,
  Button,
  Stack,
} from "react-native-ui";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    skills: [],
    birthDate: new Date(),
  });

  return (
    <Container>
      <Box p="md">
        <Stack spacing={20}>
          <Text variant="heading">Edit Profile</Text>

          <Input
            label="Full Name"
            value={formData.name}
            onChangeText={(value) =>
              setFormData((prev) => ({ ...prev, name: value }))
            }
            placeholder="Enter your full name"
          />

          <TextArea
            label="Bio"
            value={formData.bio}
            onChangeText={(value) =>
              setFormData((prev) => ({ ...prev, bio: value }))
            }
            placeholder="Tell us about yourself..."
            rows={4}
          />

          <TagInput
            label="Skills"
            tags={formData.skills}
            onChange={(skills) => setFormData((prev) => ({ ...prev, skills }))}
            placeholder="Add a skill"
          />

          <DatePicker
            label="Date of Birth"
            value={formData.birthDate}
            onChange={(date) =>
              setFormData((prev) => ({ ...prev, birthDate: date }))
            }
          />

          <Button onPress={() => console.log("Save profile")}>
            Save Profile
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
```

### Settings Screen

```tsx
import React, { useState } from "react";
import {
  Container,
  Box,
  Text,
  Switch,
  Slider,
  RadioGroup,
  Stack,
  Divider,
} from "react-native-ui";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [language, setLanguage] = useState("en");

  const languageOptions = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
  ];

  return (
    <Container>
      <Box p="md">
        <Stack spacing={20}>
          <Text variant="heading">Settings</Text>

          <Box p="md" bg="muted" style={{ borderRadius: 8 }}>
            <Stack spacing={16}>
              <Text variant="subheading">Preferences</Text>

              <Stack
                direction="row"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text variant="body">Enable Notifications</Text>
                <Switch value={notifications} onChange={setNotifications} />
              </Stack>

              <Stack
                direction="row"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text variant="body">Dark Mode</Text>
                <Switch value={darkMode} onChange={setDarkMode} />
              </Stack>
            </Stack>
          </Box>

          <Box p="md" bg="muted" style={{ borderRadius: 8 }}>
            <Stack spacing={16}>
              <Text variant="subheading">Appearance</Text>

              <Stack spacing={8}>
                <Text variant="body">Font Size: {fontSize}px</Text>
                <Slider
                  value={fontSize}
                  onChange={setFontSize}
                  min={12}
                  max={24}
                  step={1}
                />
              </Stack>

              <RadioGroup
                label="Language"
                value={language}
                onChange={setLanguage}
                options={languageOptions}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
```

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
- 📧 [Contact Us](mailto:support@react-native-ui.com)

## Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/pitaz/react-native-ui-library/blob/main/CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/pitaz/react-native-ui-library/blob/main/LICENSE) file for details.
