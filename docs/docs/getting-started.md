# Getting Started

Welcome to the React Native UI Library! This library provides a comprehensive set of customizable components for building beautiful React Native applications.

## Installation

```bash
npm install react-native-ui
# or
yarn add react-native-ui
```

## Basic Setup

Wrap your app with the `ThemeProvider` to enable theming:

```tsx
import { ThemeProvider } from "react-native-ui";

export default function App() {
  return <ThemeProvider>{/* Your app content */}</ThemeProvider>;
}
```

## Quick Start

Here's a simple example using some basic components:

```tsx
import React from "react";
import { SafeAreaView } from "react-native";
import {
  Container,
  Box,
  Text,
  Button,
  Input,
  Stack,
  Spacer,
} from "react-native-ui";

export default function MyApp() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Box p="md">
          <Text variant="heading">Welcome to My App</Text>
          <Spacer size={16} />
          <Stack spacing={12}>
            <Input
              label="Email"
              placeholder="Enter your email"
              keyboardType="email-address"
            />
            <Button onPress={() => console.log("Button pressed!")}>
              Get Started
            </Button>
          </Stack>
        </Box>
      </Container>
    </SafeAreaView>
  );
}
```

## Available Components

The library includes the following components:

- **Layout**: `Box`, `Container`, `Stack`, `Spacer`, `Divider`
- **Typography**: `Text`
- **Forms**: `Input`, `TextArea`, `PasswordInput`, `Select`
- **Interactive**: `Button`
- **Form Management**: `FormProvider`, `ControlledInput`

## Next Steps

- Learn about [theming](./theming) to customize the appearance
- Explore individual [components](./components/input) for detailed usage
- Check out the example app for complete implementation examples
