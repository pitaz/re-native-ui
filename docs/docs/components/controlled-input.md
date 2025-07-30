---
id: controlled-input
title: ControlledInput
sidebar_label: ControlledInput
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ControlledInput

A form-controlled input component that integrates with React Hook Form.

## Overview

The `ControlledInput` component wraps the base `Input` component with React Hook Form's `Controller` to provide seamless form integration. It automatically handles form state, validation, and error display.

## Features

- **React Hook Form Integration**: Built on top of React Hook Form's Controller
- **Automatic Error Handling**: Displays validation errors automatically
- **Form State Management**: Handles value changes, blur events, and validation
- **TypeScript Support**: Full TypeScript support with proper typing
- **Validation Rules**: Supports all React Hook Form validation rules
- **Performance Optimized**: Efficient re-renders and form state management

## Basic Usage

```tsx
import { ControlledInput } from "react-native-ui";

function MyForm() {
  return (
    <ControlledInput
      name="email"
      label="Email"
      placeholder="Enter your email"
      control={control}
      rules={{ required: true }}
    />
  );
}
```

## Props

The `ControlledInput` component accepts all props from the base `Input` component, plus the following additional props:

| Prop      | Type           | Default      | Description                          |
| --------- | -------------- | ------------ | ------------------------------------ |
| `name`    | `string`       | **Required** | The field name for form registration |
| `control` | `Control<any>` | **Required** | React Hook Form control object       |
| `rules`   | `any`          | **Required** | Validation rules for the field       |

## Examples

### Basic Controlled Input

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import { useForm } from "react-hook-form";
import { ControlledInput, Button } from "react-native-ui";

function BasicControlledInput() {
  const { control, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
  };

  return (
    <>
      <ControlledInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        control={control}
        rules={{ required: "Email is required" }}
      />
      <ControlledInput
        name="password"
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        control={control}
        rules={{ required: "Password is required" }}
      />
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<ControlledInput
  name="email"
  label="Email"
  placeholder="Enter your email"
  control={control}
  rules={{ required: "Email is required" }}
/>
```

</TabItem>
</Tabs>

### Input with Validation Rules

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import { useForm } from "react-hook-form";
import { ControlledInput, Button } from "react-native-ui";

function ValidatedInput() {
  const { control, handleSubmit } = useForm({
    defaultValues: { username: "", email: "", age: "" },
  });

  return (
    <>
      <ControlledInput
        name="username"
        label="Username"
        placeholder="Enter your username"
        control={control}
        rules={{
          required: "Username is required",
          minLength: {
            value: 3,
            message: "Username must be at least 3 characters",
          },
          maxLength: {
            value: 20,
            message: "Username must be less than 20 characters",
          },
        }}
      />
      <ControlledInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
      />
      <ControlledInput
        name="age"
        label="Age"
        placeholder="Enter your age"
        keyboardType="numeric"
        control={control}
        rules={{
          required: "Age is required",
          min: {
            value: 18,
            message: "Must be at least 18 years old",
          },
          max: {
            value: 100,
            message: "Invalid age",
          },
        }}
      />
      <Button onPress={handleSubmit((data) => console.log(data))}>
        Submit
      </Button>
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<ControlledInput
  name="username"
  label="Username"
  placeholder="Enter your username"
  control={control}
  rules={{
    required: "Username is required",
    minLength: {
      value: 3,
      message: "Username must be at least 3 characters",
    },
    maxLength: {
      value: 20,
      message: "Username must be less than 20 characters",
    },
  }}
/>
```

</TabItem>
</Tabs>

### Input with Custom Validation

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import { useForm } from "react-hook-form";
import { ControlledInput, Button } from "react-native-ui";

function CustomValidationInput() {
  const { control, handleSubmit } = useForm({
    defaultValues: { password: "", confirmPassword: "" },
  });

  return (
    <>
      <ControlledInput
        name="password"
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            message: "Password must contain uppercase, lowercase, and number",
          },
        }}
      />
      <ControlledInput
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm your password"
        secureTextEntry
        control={control}
        rules={{
          required: "Please confirm your password",
          validate: (value, formValues) => {
            return value === formValues.password || "Passwords do not match";
          },
        }}
      />
      <Button onPress={handleSubmit((data) => console.log(data))}>
        Create Account
      </Button>
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<ControlledInput
  name="password"
  label="Password"
  placeholder="Enter your password"
  secureTextEntry
  control={control}
  rules={{
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      message: "Password must contain uppercase, lowercase, and number",
    },
  }}
/>
```

</TabItem>
</Tabs>

### Input with Conditional Validation

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ControlledInput, Switch, Button } from "react-native-ui";

function ConditionalValidationInput() {
  const [hasPhone, setHasPhone] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: { email: "", phone: "" },
  });

  return (
    <>
      <ControlledInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
      />

      <Switch
        label="Include phone number"
        value={hasPhone}
        onChange={setHasPhone}
      />

      {hasPhone && (
        <ControlledInput
          name="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          control={control}
          rules={{
            required: hasPhone ? "Phone number is required" : false,
            pattern: {
              value: /^[\+]?[1-9][\d]{0,15}$/,
              message: "Invalid phone number",
            },
          }}
        />
      )}

      <Button onPress={handleSubmit((data) => console.log(data))}>
        Submit
      </Button>
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<ControlledInput
  name="email"
  label="Email"
  placeholder="Enter your email"
  keyboardType="email-address"
  autoCapitalize="none"
  control={control}
  rules={{
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  }}
/>
```

</TabItem>
</Tabs>

## Advanced Usage

### Input with Async Validation

```tsx
import React from "react";
import { useForm } from "react-hook-form";
import { ControlledInput, Button } from "react-native-ui";

function AsyncValidationInput() {
  const { control, handleSubmit } = useForm({
    defaultValues: { username: "" },
  });

  const checkUsernameAvailability = async (username: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return username !== "admin"; // Username 'admin' is taken
  };

  return (
    <>
      <ControlledInput
        name="username"
        label="Username"
        placeholder="Choose a username"
        autoCapitalize="none"
        autoCorrect={false}
        control={control}
        rules={{
          required: "Username is required",
          minLength: {
            value: 3,
            message: "Username must be at least 3 characters",
          },
          validate: async (value) => {
            if (value.length < 3) return true; // Skip validation if too short
            const isAvailable = await checkUsernameAvailability(value);
            return isAvailable || "Username is already taken";
          },
        }}
      />
      <Button onPress={handleSubmit((data) => console.log(data))}>
        Check Availability
      </Button>
    </>
  );
}
```

### Input with Custom Error Display

```tsx
import React from "react";
import { useForm } from "react-hook-form";
import { ControlledInput, Button, Text } from "react-native-ui";

function CustomErrorInput() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
  });

  return (
    <>
      <ControlledInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
      />

      {/* Custom error display */}
      {errors.email && (
        <Text style={{ color: "red", fontSize: 12, marginTop: 4 }}>
          ⚠️ {errors.email.message}
        </Text>
      )}

      <Button onPress={handleSubmit((data) => console.log(data))}>
        Submit
      </Button>
    </>
  );
}
```

### Input with Form Context

```tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { ControlledInput, Button } from "react-native-ui";

function FormWithContext() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useFormContext();
  const email = watch("email");

  return (
    <>
      <ControlledInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
      />

      {email && (
        <Text style={{ fontSize: 12, color: "gray" }}>
          You entered: {email}
        </Text>
      )}

      <Button
        onPress={handleSubmit((data) => console.log(data))}
        disabled={!isValid}
      >
        Submit
      </Button>
    </>
  );
}
```

## Validation Rules

The `ControlledInput` component supports all React Hook Form validation rules:

### Basic Rules

- `required` - Field is required
- `min` - Minimum value (for numbers)
- `max` - Maximum value (for numbers)
- `minLength` - Minimum length (for strings)
- `maxLength` - Maximum length (for strings)
- `pattern` - Regular expression pattern

### Custom Rules

- `validate` - Custom validation function
- `validate: async` - Async validation function

### Example Rules

```tsx
const rules = {
  required: "This field is required",
  minLength: {
    value: 3,
    message: "Must be at least 3 characters",
  },
  maxLength: {
    value: 20,
    message: "Must be less than 20 characters",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email address",
  },
  validate: (value) => {
    return value.length >= 3 || "Must be at least 3 characters";
  },
};
```

## Best Practices

1. **Always Provide Rules**: Define validation rules for all form fields
2. **Use Descriptive Messages**: Provide clear error messages
3. **Handle Async Validation**: Use async validation for server-side checks
4. **Optimize Performance**: Use `useFormContext` when working with nested forms
5. **Type Safety**: Use TypeScript for better type safety
6. **Error Handling**: Display errors appropriately and handle edge cases

## Related Components

- **Input** - Base input component
- **ControlledSelect** - Form-controlled select component
- **FormProvider** - Form provider component
- **PasswordInput** - Secure input component

## API Reference

### ControlledInputProps

```tsx
type ControlledInputProps = InputProps & {
  name: string;
  control: Control<any>;
  rules: any;
};
```

### Methods

The component doesn't expose any public methods beyond the standard React component lifecycle methods.

### Events

The component supports all standard `Input` events through React Hook Form:

- `onChangeText` - Handled automatically by React Hook Form
- `onBlur` - Handled automatically by React Hook Form
- `onFocus` - Standard input focus event
- All other `Input` events
