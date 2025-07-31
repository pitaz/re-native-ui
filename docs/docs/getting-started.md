# Getting Started

Welcome to Re Native UI! This library provides a comprehensive set of customizable components for building beautiful React Native applications with consistent design patterns and excellent developer experience.

## Installation

Install the library using your preferred package manager:

```bash
npm install re-native-ui
# or
yarn add re-native-ui
# or
pnpm add re-native-ui
```

## Basic Setup

Wrap your app with the `ThemeProvider` to enable theming and access to all components:

```tsx
import React from "react";
import { ThemeProvider } from "re-native-ui";

export default function App() {
  return <ThemeProvider>{/* Your app content */}</ThemeProvider>;
}
```

## Quick Start

Here's a simple example using some basic components:

```tsx
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import {
  Container,
  Box,
  Text,
  Button,
  Input,
  Stack,
  Spacer,
  Divider,
} from "re-native-ui";

export default function MyApp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login attempt:", { email, password });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Box p="md">
          <Text variant="heading">Welcome to My App</Text>
          <Spacer size={16} />
          <Divider />
          <Spacer size={16} />
          <Stack spacing={16}>
            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Button onPress={handleLogin}>Get Started</Button>
          </Stack>
        </Box>
      </Container>
    </SafeAreaView>
  );
}
```

## Component Categories

The library includes a comprehensive set of components organized into the following categories:

### Layout Components

- **Container** - Responsive wrapper with configurable padding and max-width
- **Box** - Flexible container with theme-based styling
- **Stack** - Arranges children with consistent spacing
- **Spacer** - Adds vertical or horizontal space
- **Divider** - Visual separator line

### Typography

- **Text** - Themed text component with multiple variants

### Form Components

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

- **OTPInput** - One-time password input with individual digit boxes
- **DatePicker** - Modal-based date selection
- **MaskedInput** - Text input with automatic formatting
- **TagInput** - Multi-tag input with add/remove functionality
- **SearchInput** - Search input with clear functionality

### Interactive Components

- **Button** - Customizable button with multiple variants and states

### Form Management

- **FormProvider** - Context provider for form state management
- **ControlledInput** - Form-controlled input component

## Advanced Example

Here's a more complex example showcasing multiple components:

```tsx
import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import {
  Container,
  Box,
  Text,
  Button,
  Input,
  TextArea,
  Select,
  RadioGroup,
  Switch,
  Slider,
  Stack,
  Spacer,
  Divider,
  TagInput,
  DatePicker,
  MaskedInput,
} from "re-native-ui";

export default function AdvancedExample() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    category: "",
    experience: "",
    skills: [],
    birthDate: new Date(),
    notifications: false,
    rating: 3,
  });

  const categoryOptions = [
    { label: "Frontend Developer", value: "frontend" },
    { label: "Backend Developer", value: "backend" },
    { label: "Full Stack Developer", value: "fullstack" },
    { label: "Mobile Developer", value: "mobile" },
  ];

  const experienceOptions = [
    { label: "Beginner (0-2 years)", value: "beginner" },
    { label: "Intermediate (3-5 years)", value: "intermediate" },
    { label: "Advanced (5+ years)", value: "advanced" },
  ];

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Container>
          <Box p="md">
            <Text variant="heading">User Profile</Text>
            <Spacer size={20} />

            <Stack spacing={20}>
              {/* Basic Information */}
              <Box p="md" bg="muted" style={{ borderRadius: 8 }}>
                <Text variant="subheading">Basic Information</Text>
                <Spacer size={12} />
                <Stack spacing={12}>
                  <Input
                    label="Full Name"
                    value={formData.name}
                    onChangeText={(value) =>
                      setFormData((prev) => ({ ...prev, name: value }))
                    }
                    placeholder="Enter your full name"
                  />
                  <Input
                    label="Email"
                    value={formData.email}
                    onChangeText={(value) =>
                      setFormData((prev) => ({ ...prev, email: value }))
                    }
                    placeholder="Enter your email"
                    keyboardType="email-address"
                  />
                  <MaskedInput
                    label="Phone Number"
                    value={formData.phone}
                    onChangeText={(value) =>
                      setFormData((prev) => ({ ...prev, phone: value }))
                    }
                    maskType="phone"
                    placeholder="(555) 123-4567"
                  />
                </Stack>
              </Box>

              {/* Professional Information */}
              <Box p="md" bg="muted" style={{ borderRadius: 8 }}>
                <Text variant="subheading">Professional Information</Text>
                <Spacer size={12} />
                <Stack spacing={12}>
                  <Select
                    label="Category"
                    placeholder="Select your category"
                    value={formData.category}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, category: value }))
                    }
                    options={categoryOptions}
                  />
                  <RadioGroup
                    label="Experience Level"
                    value={formData.experience}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, experience: value }))
                    }
                    options={experienceOptions}
                  />
                  <TagInput
                    label="Skills"
                    tags={formData.skills}
                    onChange={(skills) =>
                      setFormData((prev) => ({ ...prev, skills }))
                    }
                    placeholder="Add a skill"
                    maxTags={10}
                  />
                </Stack>
              </Box>

              {/* Additional Information */}
              <Box p="md" bg="muted" style={{ borderRadius: 8 }}>
                <Text variant="subheading">Additional Information</Text>
                <Spacer size={12} />
                <Stack spacing={12}>
                  <TextArea
                    label="Bio"
                    value={formData.bio}
                    onChangeText={(value) =>
                      setFormData((prev) => ({ ...prev, bio: value }))
                    }
                    placeholder="Tell us about yourself..."
                    rows={4}
                  />
                  <DatePicker
                    label="Date of Birth"
                    value={formData.birthDate}
                    onChange={(date) =>
                      setFormData((prev) => ({ ...prev, birthDate: date }))
                    }
                  />
                  <Stack spacing={8}>
                    <Text variant="body">Rating: {formData.rating}</Text>
                    <Slider
                      value={formData.rating}
                      onChange={(value) =>
                        setFormData((prev) => ({ ...prev, rating: value }))
                      }
                      min={1}
                      max={5}
                      step={0.5}
                    />
                  </Stack>
                  <Switch
                    label="Enable Notifications"
                    value={formData.notifications}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, notifications: value }))
                    }
                  />
                </Stack>
              </Box>

              <Button onPress={handleSubmit}>Save Profile</Button>
            </Stack>
          </Box>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
```

## Form Management with React Hook Form

For complex forms, you can integrate with React Hook Form:

```tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Box,
  Text,
  Button,
  Input,
  Stack,
  FormProvider,
  ControlledInput,
} from "re-native-ui";

export default function FormExample() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <Container>
      <Box p="md">
        <Text variant="heading">Login Form</Text>
        <Spacer size={20} />

        <Stack spacing={16}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Email"
                value={value}
                onChangeText={onChange}
                error={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Password"
                value={value}
                onChangeText={onChange}
                secureTextEntry
                error={errors.password?.message}
              />
            )}
          />

          <Button onPress={handleSubmit(onSubmit)}>Login</Button>
        </Stack>
      </Box>
    </Container>
  );
}
```

## Theming

Customize the appearance of your components using the theme system:

```tsx
import { ThemeProvider } from "re-native-ui";

const customTheme = {
  colors: {
    primary: "#007AFF",
    secondary: "#5856D6",
    success: "#34C759",
    warning: "#FF9500",
    error: "#FF3B30",
    background: "#FFFFFF",
    surface: "#F2F2F7",
    text: "#000000",
    textSecondary: "#8E8E93",
    border: "#C6C6C8",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  fontSizes: {
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
  },
};

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>{/* Your app content */}</ThemeProvider>
  );
}
```

## Best Practices

1. **Always wrap your app with ThemeProvider** - This enables theming and ensures all components work correctly
2. **Use Container for page layouts** - Provides consistent padding and max-width constraints
3. **Group related components with Stack** - Maintains consistent spacing between components
4. **Handle form validation** - Use error props to provide user feedback
5. **Follow accessibility guidelines** - Use accessibilityLabel and accessibilityHint props
6. **Customize with themes** - Use the theme system for consistent styling across your app

## Next Steps

- Learn about [theming](./theming) to customize the appearance
- Explore individual [components](./components/input) for detailed usage
- Check out the example app for complete implementation examples

## Support

If you encounter any issues or have questions:

1. Check the [component documentation](./components/input) for detailed usage examples
2. Review the [theming guide](./theming) for customization options
3. Look at the example app for complete implementation patterns
4. Open an issue on GitHub for bugs or feature requests
