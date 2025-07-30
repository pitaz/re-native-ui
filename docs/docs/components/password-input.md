---
id: password-input
title: PasswordInput
sidebar_label: PasswordInput
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PasswordInput

A secure text input component with show/hide password functionality.

## Overview

The `PasswordInput` component extends the base `Input` component to provide secure password entry with a toggle to show or hide the password text. It includes a right icon that allows users to toggle password visibility.

## Features

- **Secure Text Entry**: Automatically masks password input
- **Show/Hide Toggle**: Right icon to toggle password visibility
- **Error Handling**: Supports error messages and styling
- **Accessibility**: Proper accessibility labels and hints
- **Theme Integration**: Follows the design system theme

## Basic Usage

```tsx
import { PasswordInput } from "react-native-ui";

function MyComponent() {
  const [password, setPassword] = useState("");

  return (
    <PasswordInput
      label="Password"
      placeholder="Enter your password"
      value={password}
      onChangeText={setPassword}
    />
  );
}
```

## Props

The `PasswordInput` component accepts all props from React Native's `TextInput` component, plus the following additional props:

| Prop    | Type     | Default     | Description                              |
| ------- | -------- | ----------- | ---------------------------------------- |
| `label` | `string` | `undefined` | Label text displayed above the input     |
| `error` | `string` | `undefined` | Error message to display below the input |

## Examples

### Basic Password Input

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React, { useState } from "react";
import { PasswordInput } from "react-native-ui";

function BasicPasswordInput() {
  const [password, setPassword] = useState("");

  return (
    <PasswordInput
      label="Password"
      placeholder="Enter your password"
      value={password}
      onChangeText={setPassword}
    />
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<PasswordInput
  label="Password"
  placeholder="Enter your password"
  value=""
  onChangeText={() => {}}
/>
```

</TabItem>
</Tabs>

### Password Input with Error

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React, { useState } from "react";
import { PasswordInput } from "react-native-ui";

function PasswordInputWithError() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (text: string) => {
    setPassword(text);
    if (text.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
    }
  };

  return (
    <PasswordInput
      label="Password"
      placeholder="Enter your password"
      value={password}
      onChangeText={validatePassword}
      error={error}
    />
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<PasswordInput
  label="Password"
  placeholder="Enter your password"
  value="123"
  onChangeText={() => {}}
  error="Password must be at least 6 characters"
/>
```

</TabItem>
</Tabs>

### Password Input with Custom Styling

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React, { useState } from "react";
import { PasswordInput } from "react-native-ui";

function StyledPasswordInput() {
  const [password, setPassword] = useState("");

  return (
    <PasswordInput
      label="Secure Password"
      placeholder="Enter your secure password"
      value={password}
      onChangeText={setPassword}
      style={{
        backgroundColor: "#f5f5f5",
        borderRadius: 8,
        paddingHorizontal: 16,
      }}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<PasswordInput
  label="Secure Password"
  placeholder="Enter your secure password"
  value=""
  onChangeText={() => {}}
  style={{
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingHorizontal: 16,
  }}
  autoCapitalize="none"
  autoCorrect={false}
/>
```

</TabItem>
</Tabs>

## Form Integration

### With React Hook Form

```tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { PasswordInput } from "react-native-ui";

interface FormData {
  password: string;
}

function PasswordForm() {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Password:", data.password);
  };

  return (
    <Controller
      name="password"
      control={control}
      rules={{ required: "Password is required" }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={value}
          onChangeText={onChange}
          error={error?.message}
        />
      )}
    />
  );
}
```

### With Form Validation

```tsx
import React, { useState } from "react";
import { PasswordInput } from "react-native-ui";

function ValidatedPasswordInput() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (text: string) => {
    setPassword(text);

    if (!text) {
      setError("Password is required");
    } else if (text.length < 8) {
      setError("Password must be at least 8 characters");
    } else if (!/(?=.*[a-z])/.test(text)) {
      setError("Password must contain at least one lowercase letter");
    } else if (!/(?=.*[A-Z])/.test(text)) {
      setError("Password must contain at least one uppercase letter");
    } else if (!/(?=.*\d)/.test(text)) {
      setError("Password must contain at least one number");
    } else {
      setError("");
    }
  };

  return (
    <PasswordInput
      label="Password"
      placeholder="Enter your password"
      value={password}
      onChangeText={validatePassword}
      error={error}
    />
  );
}
```

## Accessibility

The `PasswordInput` component includes proper accessibility features:

- **Accessibility Label**: Uses the `label` prop for screen readers
- **Accessibility Hint**: Provides context about the password field
- **Secure Text Entry**: Properly announces secure text entry to assistive technologies
- **Toggle Button**: The show/hide button is properly labeled for screen readers

## Best Practices

1. **Always provide a label**: Helps users understand what the field is for
2. **Use appropriate placeholders**: Give users a hint about the expected input
3. **Validate passwords**: Implement proper password validation
4. **Handle errors gracefully**: Show clear error messages
5. **Consider password requirements**: Display password requirements to users

## Related Components

- **Input** - Base input component that PasswordInput extends
- **TextArea** - Multi-line text input
- **OTPInput** - For one-time password entry
- **MaskedInput** - For formatted input like phone numbers

## API Reference

### PasswordInputProps

```tsx
interface PasswordInputProps extends TextInputProps {
  label?: string;
  error?: string;
}
```

### Methods

The component doesn't expose any public methods beyond the standard React component lifecycle methods.

### Events

The component supports all standard `TextInput` events:

- `onChangeText`
- `onFocus`
- `onBlur`
- `onSubmitEditing`
- And all other `TextInput` events
