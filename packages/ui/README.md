# re-native-ui

A comprehensive React Native UI component library built with TypeScript, featuring modern design patterns and extensive customization options.

## Features

- **TypeScript Support**: Full TypeScript support with comprehensive type definitions
- **Modern Components**: 25+ pre-built components for common UI patterns
- **Customizable**: Extensive theming and styling options
- **Form Integration**: Built-in support for react-hook-form
- **Accessible**: Components follow accessibility best practices
- **Cross-platform**: Works seamlessly on iOS and Android

## Installation

```bash
npm install re-native-ui
# or
yarn add re-native-ui
```

## Quick Start

```tsx
import React from "react";
import { View } from "react-native";
import { Button, Text, Box, ThemeProvider } from "re-native-ui";

export default function App() {
  return (
    <ThemeProvider>
      <Box padding={20}>
        <Text variant="h1" marginBottom={16}>
          Welcome to React Native UI
        </Text>
        <Button
          title="Get Started"
          onPress={() => console.log("Button pressed!")}
        />
      </Box>
    </ThemeProvider>
  );
}
```

## Components

### Layout Components

- **Box** - Flexible container with padding, margin, and styling
- **Container** - Centered container with max-width
- **Stack** - Vertical or horizontal stack layout
- **Grid** - Responsive grid system
- **StaggeredGrid** - Masonry-style grid layout
- **Spacer** - Flexible spacing component
- **Divider** - Visual separator

### Form Components

- **Input** - Text input with validation
- **PasswordInput** - Secure password input
- **TextArea** - Multi-line text input
- **Select** - Dropdown selection
- **CheckBox** - Checkbox input
- **RadioGroup** - Radio button group
- **Switch** - Toggle switch
- **Slider** - Range slider
- **StepperInput** - Number input with increment/decrement
- **DatePicker** - Date selection picker
- **MaskedInput** - Input with format masking
- **OTPInput** - One-time password input
- **TagInput** - Tag/keyword input

### Form Management

- **Form** - Form wrapper with validation
- **ControlledInput** - Controlled input component
- **ControlledSelect** - Controlled select component

### Interactive Components

- **Button** - Primary, secondary, and outline button variants
- **Accordion** - Collapsible content sections

### Feedback Components

- **Snackbar** - Toast notifications
- **SlideDownToast** - Animated toast messages

### Typography

- **Text** - Typography component with variants

## Theming

The library includes a comprehensive theming system:

```tsx
import { ThemeProvider, createTheme } from "re-native-ui";

const customTheme = createTheme({
  colors: {
    primary: "#007AFF",
    secondary: "#5856D6",
    success: "#34C759",
    warning: "#FF9500",
    error: "#FF3B30",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 24,
      fontWeight: "600",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

## Form Integration

The library integrates seamlessly with react-hook-form:

```tsx
import { useForm } from "react-hook-form";
import { Form, ControlledInput, Button } from "re-native-ui";

export default function LoginForm() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput
        name="email"
        control={control}
        placeholder="Email"
        rules={{ required: "Email is required" }}
      />
      <ControlledInput
        name="password"
        control={control}
        placeholder="Password"
        secureTextEntry
        rules={{ required: "Password is required" }}
      />
      <Button title="Login" type="submit" />
    </Form>
  );
}
```

## Advanced Usage

### Custom Styling

```tsx
import { Box, Text } from "re-native-ui";

export default function CustomComponent() {
  return (
    <Box
      backgroundColor="primary"
      borderRadius={8}
      padding={16}
      shadowColor="#000"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.25}
      shadowRadius={3.84}
      elevation={5}
    >
      <Text color="white" textAlign="center">
        Custom styled component
      </Text>
    </Box>
  );
}
```

### Snackbar Notifications

```tsx
import { useSnackbar } from "re-native-ui";

export default function MyComponent() {
  const { showSnackbar } = useSnackbar();

  const handleSuccess = () => {
    showSnackbar({
      message: "Operation completed successfully!",
      type: "success",
      duration: 3000,
    });
  };

  return <Button title="Show Success" onPress={handleSuccess} />;
}
```

## API Reference

For detailed API documentation, visit our [documentation site](https://rnativeui.dev).

## Contributing

We welcome contributions! Please see our [contributing guide](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- [Documentation](https://rnativeui.dev)
- [Report Issues](https://github.com/pitaz/react-native-ui/issues)
- [Discussions](https://github.com/pitaz/react-native-ui/discussions)

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.
