---
id: controlled-select
title: ControlledSelect
sidebar_label: ControlledSelect
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ControlledSelect

A form-controlled select component that integrates with React Hook Form.

## Overview

The `ControlledSelect` component wraps the base `Select` component with React Hook Form's `Controller` to provide seamless form integration. It automatically handles form state, validation, and error display for dropdown selections.

## Features

- **React Hook Form Integration**: Built on top of React Hook Form's Controller
- **Automatic Error Handling**: Displays validation errors automatically
- **Form State Management**: Handles value changes and validation
- **TypeScript Support**: Full TypeScript support with proper typing
- **Validation Rules**: Supports all React Hook Form validation rules
- **Performance Optimized**: Efficient re-renders and form state management
- **Option Management**: Easy integration with option arrays

## Basic Usage

```tsx
import { ControlledSelect } from "react-native-ui";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
];

function MyForm() {
  return (
    <ControlledSelect
      name="category"
      label="Category"
      options={options}
      control={control}
      rules={{ required: true }}
    />
  );
}
```

## Props

The `ControlledSelect` component accepts all props from the base `Select` component, plus the following additional props:

| Prop      | Type             | Default      | Description                          |
| --------- | ---------------- | ------------ | ------------------------------------ |
| `name`    | `string`         | **Required** | The field name for form registration |
| `control` | `Control<any>`   | **Required** | React Hook Form control object       |
| `rules`   | `any`            | **Required** | Validation rules for the field       |
| `options` | `SelectOption[]` | **Required** | Array of options for the select      |

## Examples

### Basic Controlled Select

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import { useForm } from "react-hook-form";
import { ControlledSelect, Button } from "react-native-ui";

function BasicControlledSelect() {
  const { control, handleSubmit } = useForm({
    defaultValues: { category: "", country: "" },
  });

  const categories = [
    { label: "Technology", value: "tech" },
    { label: "Design", value: "design" },
    { label: "Marketing", value: "marketing" },
    { label: "Sales", value: "sales" },
  ];

  const countries = [
    { label: "United States", value: "us" },
    { label: "Canada", value: "ca" },
    { label: "United Kingdom", value: "uk" },
    { label: "Australia", value: "au" },
  ];

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
  };

  return (
    <>
      <ControlledSelect
        name="category"
        label="Category"
        options={categories}
        control={control}
        rules={{ required: "Category is required" }}
      />
      <ControlledSelect
        name="country"
        label="Country"
        options={countries}
        control={control}
        rules={{ required: "Country is required" }}
      />
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<ControlledSelect
  name="category"
  label="Category"
  options={categories}
  control={control}
  rules={{ required: "Category is required" }}
/>
```

</TabItem>
</Tabs>

### Select with Validation Rules

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import { useForm } from "react-hook-form";
import { ControlledSelect, Button } from "react-native-ui";

function ValidatedSelect() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      experience: "",
      skills: [],
      priority: "",
    },
  });

  const experienceLevels = [
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
    { label: "Expert", value: "expert" },
  ];

  const skills = [
    { label: "React", value: "react" },
    { label: "TypeScript", value: "typescript" },
    { label: "Node.js", value: "nodejs" },
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
  ];

  const priorities = [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
    { label: "Critical", value: "critical" },
  ];

  return (
    <>
      <ControlledSelect
        name="experience"
        label="Experience Level"
        options={experienceLevels}
        control={control}
        rules={{
          required: "Experience level is required",
          validate: (value) => {
            return value !== "beginner" || "Must have some experience";
          },
        }}
      />
      <ControlledSelect
        name="skills"
        label="Skills (Multiple)"
        options={skills}
        multiple
        control={control}
        rules={{
          required: "At least one skill is required",
          validate: (value) => {
            return (value && value.length >= 2) || "Select at least 2 skills";
          },
        }}
      />
      <ControlledSelect
        name="priority"
        label="Priority"
        options={priorities}
        control={control}
        rules={{
          required: "Priority is required",
          validate: (value) => {
            return (
              value !== "critical" || "Critical priority requires approval"
            );
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
<ControlledSelect
  name="experience"
  label="Experience Level"
  options={experienceLevels}
  control={control}
  rules={{
    required: "Experience level is required",
    validate: (value) => {
      return value !== "beginner" || "Must have some experience";
    },
  }}
/>
```

</TabItem>
</Tabs>

### Select with Custom Validation

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import { useForm } from "react-hook-form";
import { ControlledSelect, Button } from "react-native-ui";

function CustomValidationSelect() {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      department: "",
      manager: "",
      location: "",
    },
  });

  const departments = [
    { label: "Engineering", value: "engineering" },
    { label: "Design", value: "design" },
    { label: "Marketing", value: "marketing" },
    { label: "Sales", value: "sales" },
  ];

  const managers = [
    { label: "John Doe", value: "john", department: "engineering" },
    { label: "Jane Smith", value: "jane", department: "design" },
    { label: "Bob Johnson", value: "bob", department: "marketing" },
    { label: "Alice Brown", value: "alice", department: "sales" },
  ];

  const locations = [
    { label: "New York", value: "nyc" },
    { label: "San Francisco", value: "sf" },
    { label: "London", value: "london" },
    { label: "Remote", value: "remote" },
  ];

  const selectedDepartment = watch("department");

  return (
    <>
      <ControlledSelect
        name="department"
        label="Department"
        options={departments}
        control={control}
        rules={{
          required: "Department is required",
        }}
      />
      <ControlledSelect
        name="manager"
        label="Manager"
        options={managers.filter((m) => m.department === selectedDepartment)}
        control={control}
        rules={{
          required: "Manager is required",
          validate: (value) => {
            if (!selectedDepartment) return "Select department first";
            const manager = managers.find((m) => m.value === value);
            return (
              manager?.department === selectedDepartment ||
              "Manager must be from selected department"
            );
          },
        }}
      />
      <ControlledSelect
        name="location"
        label="Location"
        options={locations}
        control={control}
        rules={{
          required: "Location is required",
          validate: (value) => {
            return value !== "remote" || "Remote work requires approval";
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
<ControlledSelect
  name="department"
  label="Department"
  options={departments}
  control={control}
  rules={{
    required: "Department is required",
  }}
/>
```

</TabItem>
</Tabs>

### Select with Dynamic Options

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ControlledSelect, Button } from "react-native-ui";

function DynamicOptionsSelect() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      country: "",
      state: "",
      city: "",
    },
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const countries = [
    { label: "United States", value: "us" },
    { label: "Canada", value: "ca" },
    { label: "United Kingdom", value: "uk" },
  ];

  const usStates = [
    { label: "California", value: "ca" },
    { label: "New York", value: "ny" },
    { label: "Texas", value: "tx" },
  ];

  const caProvinces = [
    { label: "Ontario", value: "on" },
    { label: "Quebec", value: "qc" },
    { label: "British Columbia", value: "bc" },
  ];

  const ukRegions = [
    { label: "England", value: "england" },
    { label: "Scotland", value: "scotland" },
    { label: "Wales", value: "wales" },
  ];

  const handleCountryChange = (country: string) => {
    switch (country) {
      case "us":
        setStates(usStates);
        break;
      case "ca":
        setStates(caProvinces);
        break;
      case "uk":
        setStates(ukRegions);
        break;
      default:
        setStates([]);
    }
    setCities([]);
  };

  return (
    <>
      <ControlledSelect
        name="country"
        label="Country"
        options={countries}
        control={control}
        rules={{
          required: "Country is required",
        }}
        onChange={(value) => handleCountryChange(value)}
      />
      <ControlledSelect
        name="state"
        label="State/Province/Region"
        options={states}
        control={control}
        rules={{
          required: "State/Province/Region is required",
        }}
        disabled={states.length === 0}
      />
      <ControlledSelect
        name="city"
        label="City"
        options={cities}
        control={control}
        rules={{
          required: "City is required",
        }}
        disabled={cities.length === 0}
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
<ControlledSelect
  name="country"
  label="Country"
  options={countries}
  control={control}
  rules={{
    required: "Country is required",
  }}
  onChange={(value) => handleCountryChange(value)}
/>
```

</TabItem>
</Tabs>

## Advanced Usage

### Select with Async Options Loading

```tsx
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ControlledSelect, Button } from "react-native-ui";

function AsyncOptionsSelect() {
  const { control, handleSubmit } = useForm({
    defaultValues: { user: "" },
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mockUsers = [
        { label: "John Doe", value: "john" },
        { label: "Jane Smith", value: "jane" },
        { label: "Bob Johnson", value: "bob" },
      ];
      setUsers(mockUsers);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <ControlledSelect
        name="user"
        label="Select User"
        options={users}
        control={control}
        rules={{
          required: "User is required",
        }}
        loading={loading}
        placeholder={loading ? "Loading users..." : "Select a user"}
      />
      <Button onPress={handleSubmit((data) => console.log(data))}>
        Submit
      </Button>
    </>
  );
}
```

### Select with Form Context

```tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { ControlledSelect, Button } from "react-native-ui";

function FormWithContext() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useFormContext();
  const selectedCategory = watch("category");

  const categories = [
    { label: "Technology", value: "tech" },
    { label: "Design", value: "design" },
    { label: "Marketing", value: "marketing" },
  ];

  const subcategories = {
    tech: [
      { label: "Web Development", value: "web" },
      { label: "Mobile Development", value: "mobile" },
      { label: "Data Science", value: "data" },
    ],
    design: [
      { label: "UI/UX Design", value: "uiux" },
      { label: "Graphic Design", value: "graphic" },
      { label: "Product Design", value: "product" },
    ],
    marketing: [
      { label: "Digital Marketing", value: "digital" },
      { label: "Content Marketing", value: "content" },
      { label: "Social Media", value: "social" },
    ],
  };

  return (
    <>
      <ControlledSelect
        name="category"
        label="Category"
        options={categories}
        control={control}
        rules={{
          required: "Category is required",
        }}
      />

      {selectedCategory && (
        <ControlledSelect
          name="subcategory"
          label="Subcategory"
          options={subcategories[selectedCategory] || []}
          control={control}
          rules={{
            required: "Subcategory is required",
          }}
        />
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

### Select with Custom Error Display

```tsx
import React from "react";
import { useForm } from "react-hook-form";
import { ControlledSelect, Button, Text } from "react-native-ui";

function CustomErrorSelect() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { priority: "" },
  });

  const priorities = [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
    { label: "Critical", value: "critical" },
  ];

  return (
    <>
      <ControlledSelect
        name="priority"
        label="Priority"
        options={priorities}
        control={control}
        rules={{
          required: "Priority is required",
          validate: (value) => {
            return (
              value !== "critical" || "Critical priority requires approval"
            );
          },
        }}
      />

      {/* Custom error display */}
      {errors.priority && (
        <Text style={{ color: "red", fontSize: 12, marginTop: 4 }}>
          ⚠️ {errors.priority.message}
        </Text>
      )}

      <Button onPress={handleSubmit((data) => console.log(data))}>
        Submit
      </Button>
    </>
  );
}
```

## Validation Rules

The `ControlledSelect` component supports all React Hook Form validation rules:

### Basic Rules

- `required` - Field is required
- `validate` - Custom validation function

### Custom Rules

```tsx
const rules = {
  required: "This field is required",
  validate: (value) => {
    return value !== "invalid" || "Invalid selection";
  },
};
```

## Best Practices

1. **Always Provide Rules**: Define validation rules for all select fields
2. **Use Descriptive Labels**: Provide clear option labels
3. **Handle Dynamic Options**: Update options based on other field values
4. **Optimize Performance**: Use `useFormContext` when working with nested forms
5. **Type Safety**: Use TypeScript for better type safety
6. **Error Handling**: Display errors appropriately and handle edge cases
7. **Loading States**: Show loading states for async option loading

## Related Components

- **Select** - Base select component
- **ControlledInput** - Form-controlled input component
- **FormProvider** - Form provider component

## API Reference

### ControlledSelectProps

```tsx
type ControlledSelectProps = {
  name: string;
  control: Control<any>;
  rules: any;
  options: SelectOption[];
};
```

### SelectOption

```tsx
interface SelectOption {
  label: string;
  value: string | number;
}
```

### Methods

The component doesn't expose any public methods beyond the standard React component lifecycle methods.

### Events

The component supports all standard `Select` events through React Hook Form:

- `onChange` - Handled automatically by React Hook Form
- All other `Select` events
