---
id: form
title: Form
sidebar_label: Form
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Form

A form provider component that integrates with React Hook Form and Yup validation.

## Overview

The `FormProvider` component provides a wrapper around React Hook Form's `FormProvider` with built-in Yup validation support. It simplifies form setup and provides a consistent way to handle form state, validation, and submission.

## Features

- **React Hook Form Integration**: Built on top of React Hook Form for efficient form management
- **Yup Validation**: Built-in support for Yup schema validation
- **TypeScript Support**: Full TypeScript support with generic types
- **Automatic Validation**: Real-time validation with `onChange` mode
- **Error Handling**: Automatic error display and management
- **Performance Optimized**: Efficient re-renders and form state management

## Basic Usage

```tsx
import { FormProvider } from "react-native-ui";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

function MyForm() {
  return (
    <FormProvider defaultValues={{ email: "", password: "" }} schema={schema}>
      {/* Form fields go here */}
    </FormProvider>
  );
}
```

## Props

| Prop            | Type                  | Default      | Description                        |
| --------------- | --------------------- | ------------ | ---------------------------------- |
| `defaultValues` | `DefaultValues<T>`    | **Required** | Initial values for the form fields |
| `children`      | `React.ReactNode`     | **Required** | Form fields and content            |
| `schema`        | `yup.ObjectSchema<T>` | `undefined`  | Yup validation schema              |

## Examples

### Basic Form

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import { FormProvider, ControlledInput, Button } from "react-native-ui";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function BasicForm() {
  return (
    <FormProvider defaultValues={{ email: "", password: "" }} schema={schema}>
      <ControlledInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        rules={{ required: true }}
      />
      <ControlledInput
        name="password"
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        rules={{ required: true }}
      />
      <Button onPress={() => console.log("Form submitted")}>Submit</Button>
    </FormProvider>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<FormProvider defaultValues={{ email: "", password: "" }} schema={schema}>
  <ControlledInput
    name="email"
    label="Email"
    placeholder="Enter your email"
    rules={{ required: true }}
  />
  <ControlledInput
    name="password"
    label="Password"
    placeholder="Enter your password"
    secureTextEntry
    rules={{ required: true }}
  />
  <Button onPress={() => console.log("Form submitted")}>Submit</Button>
</FormProvider>
```

</TabItem>
</Tabs>

### Form with Complex Validation

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import {
  FormProvider,
  ControlledInput,
  ControlledSelect,
  Button,
} from "react-native-ui";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup
    .number()
    .min(18, "Must be at least 18")
    .max(100, "Invalid age")
    .required("Age is required"),
  country: yup.string().required("Country is required"),
});

const countries = [
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "United Kingdom", value: "uk" },
];

function ComplexForm() {
  return (
    <FormProvider
      defaultValues={{
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        country: "",
      }}
      schema={schema}
    >
      <ControlledInput
        name="firstName"
        label="First Name"
        placeholder="Enter your first name"
        rules={{ required: true }}
      />
      <ControlledInput
        name="lastName"
        label="Last Name"
        placeholder="Enter your last name"
        rules={{ required: true }}
      />
      <ControlledInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        rules={{ required: true }}
      />
      <ControlledInput
        name="age"
        label="Age"
        placeholder="Enter your age"
        keyboardType="numeric"
        rules={{ required: true }}
      />
      <ControlledSelect
        name="country"
        label="Country"
        options={countries}
        rules={{ required: true }}
      />
      <Button onPress={() => console.log("Form submitted")}>Submit</Button>
    </FormProvider>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<FormProvider
  defaultValues={{
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    country: "",
  }}
  schema={schema}
>
  <ControlledInput
    name="firstName"
    label="First Name"
    placeholder="Enter your first name"
    rules={{ required: true }}
  />
  <ControlledInput
    name="lastName"
    label="Last Name"
    placeholder="Enter your last name"
    rules={{ required: true }}
  />
  <ControlledInput
    name="email"
    label="Email"
    placeholder="Enter your email"
    keyboardType="email-address"
    autoCapitalize="none"
    rules={{ required: true }}
  />
  <ControlledInput
    name="age"
    label="Age"
    placeholder="Enter your age"
    keyboardType="numeric"
    rules={{ required: true }}
  />
  <ControlledSelect
    name="country"
    label="Country"
    options={countries}
    rules={{ required: true }}
  />
  <Button onPress={() => console.log("Form submitted")}>Submit</Button>
</FormProvider>
```

</TabItem>
</Tabs>

### Form with Custom Validation Rules

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import { FormProvider, ControlledInput, Button } from "react-native-ui";
import * as yup from "yup";

const schema = yup.object({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter"
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(/^(?=.*\d)/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

function CustomValidationForm() {
  return (
    <FormProvider
      defaultValues={{
        username: "",
        password: "",
        confirmPassword: "",
      }}
      schema={schema}
    >
      <ControlledInput
        name="username"
        label="Username"
        placeholder="Enter your username"
        autoCapitalize="none"
        autoCorrect={false}
        rules={{ required: true }}
      />
      <ControlledInput
        name="password"
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        rules={{ required: true }}
      />
      <ControlledInput
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm your password"
        secureTextEntry
        rules={{ required: true }}
      />
      <Button onPress={() => console.log("Form submitted")}>
        Create Account
      </Button>
    </FormProvider>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<FormProvider
  defaultValues={{
    username: "",
    password: "",
    confirmPassword: "",
  }}
  schema={schema}
>
  <ControlledInput
    name="username"
    label="Username"
    placeholder="Enter your username"
    autoCapitalize="none"
    autoCorrect={false}
    rules={{ required: true }}
  />
  <ControlledInput
    name="password"
    label="Password"
    placeholder="Enter your password"
    secureTextEntry
    rules={{ required: true }}
  />
  <ControlledInput
    name="confirmPassword"
    label="Confirm Password"
    placeholder="Confirm your password"
    secureTextEntry
    rules={{ required: true }}
  />
  <Button onPress={() => console.log("Form submitted")}>Create Account</Button>
</FormProvider>
```

</TabItem>
</Tabs>

## Advanced Usage

### Form with Form Submission

```tsx
import React from "react";
import { FormProvider, ControlledInput, Button } from "react-native-ui";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

function FormWithSubmission() {
  const methods = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    // Handle form submission
  };

  return (
    <FormProvider {...methods}>
      <ControlledInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        rules={{ required: true }}
      />
      <ControlledInput
        name="password"
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        rules={{ required: true }}
      />
      <Button onPress={methods.handleSubmit(onSubmit)}>Submit</Button>
    </FormProvider>
  );
}
```

### Form with Conditional Validation

```tsx
import React, { useState } from "react";
import { FormProvider, ControlledInput, Switch, Button } from "react-native-ui";
import * as yup from "yup";

function ConditionalValidationForm() {
  const [hasPhone, setHasPhone] = useState(false);

  const schema = yup.object({
    email: yup.string().email().required(),
    phone: hasPhone
      ? yup.string().required("Phone is required when enabled")
      : yup.string(),
  });

  return (
    <FormProvider defaultValues={{ email: "", phone: "" }} schema={schema}>
      <ControlledInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        rules={{ required: true }}
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
          rules={{ required: hasPhone }}
        />
      )}

      <Button onPress={() => console.log("Form submitted")}>Submit</Button>
    </FormProvider>
  );
}
```

## Integration with React Hook Form

The `FormProvider` component is built on top of React Hook Form and provides access to all its features:

```tsx
import React from "react";
import { FormProvider, ControlledInput, Button } from "react-native-ui";
import { useFormContext } from "react-hook-form";

function FormWithHookForm() {
  const {
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
  };

  return (
    <>
      <ControlledInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        rules={{ required: true }}
      />

      <Button onPress={handleSubmit(onSubmit)} disabled={!isValid}>
        Submit
      </Button>

      {Object.keys(errors).length > 0 && (
        <Text>Please fix the errors above</Text>
      )}
    </>
  );
}
```

## Best Practices

1. **Define Schemas**: Always define Yup schemas for complex validation
2. **Use Controlled Components**: Use `ControlledInput` and `ControlledSelect` for form fields
3. **Provide Default Values**: Always provide default values for all form fields
4. **Handle Submission**: Use `handleSubmit` for form submission
5. **Error Handling**: Display validation errors appropriately
6. **Performance**: Use `useFormContext` to access form methods when needed

## Related Components

- **ControlledInput** - Form-controlled input component
- **ControlledSelect** - Form-controlled select component
- **Input** - Base input component
- **Select** - Base select component

## API Reference

### FormProvider Props

```tsx
type FormProps<T extends FieldValues> = {
  defaultValues: DefaultValues<T>;
  children: React.ReactNode;
  schema?: yup.ObjectSchema<T>;
};
```

### Methods

The component provides access to all React Hook Form methods through `useFormContext`:

- `handleSubmit` - Handle form submission
- `watch` - Watch form values
- `setValue` - Set form values programmatically
- `reset` - Reset form to default values
- `formState` - Access form state (errors, isValid, etc.)

### Events

- Form submission events through `handleSubmit`
- Field change events through `watch`
- Validation events through `formState`
