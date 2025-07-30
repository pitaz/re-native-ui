---
id: snackbar
title: Snackbar
sidebar_label: Snackbar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Snackbar

A toast notification component that displays brief messages to users. The Snackbar system includes a provider, hook, and individual snackbar component for flexible usage.

## Import

```tsx
import { Snackbar, SnackbarProvider, useSnackbar } from "react-native-ui";
```

## Basic Usage

### Using SnackbarProvider and useSnackbar Hook

```tsx
import React from "react";
import { SnackbarProvider, useSnackbar, Button } from "react-native-ui";

const MyComponent = () => {
  const { showSnackbar } = useSnackbar();

  const handleShowSnackbar = () => {
    showSnackbar({
      message: "This is a success message!",
      type: "success",
      duration: 3000,
    });
  };

  return <Button onPress={handleShowSnackbar}>Show Snackbar</Button>;
};

const App = () => {
  return (
    <SnackbarProvider>
      <MyComponent />
    </SnackbarProvider>
  );
};
```

### Using Snackbar Component Directly

```tsx
import React, { useState } from "react";
import { Snackbar, Button } from "react-native-ui";

const MyComponent = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onPress={() => setVisible(true)}>Show Snackbar</Button>

      <Snackbar
        message="This is a message"
        type="info"
        visible={visible}
        onClose={() => setVisible(false)}
        duration={3000}
      />
    </>
  );
};
```

## Components

### SnackbarProvider

A context provider that manages snackbar state and provides the `showSnackbar` function to child components.

#### Props

- **children**: `React.ReactNode` - Child components that will have access to the snackbar context

### Snackbar

The individual snackbar component that displays the message.

#### Props

| Prop            | Type                                          | Default    | Description                                 |
| --------------- | --------------------------------------------- | ---------- | ------------------------------------------- |
| `message`       | `string`                                      | -          | The message to display                      |
| `type`          | `'success' \| 'error' \| 'info' \| 'warning'` | `'info'`   | The type of snackbar                        |
| `actionLabel`   | `string`                                      | -          | Optional action button label                |
| `onActionPress` | `() => void`                                  | -          | Callback when action button is pressed      |
| `duration`      | `number`                                      | `3000`     | Duration in milliseconds before auto-hiding |
| `onClose`       | `() => void`                                  | -          | Callback when snackbar closes               |
| `position`      | `'top' \| 'bottom'`                           | `'bottom'` | Position of the snackbar                    |

### useSnackbar Hook

A hook that provides access to the `showSnackbar` function.

#### Returns

- **showSnackbar**: `(options: SnackbarOptions) => void` - Function to show a snackbar

#### SnackbarOptions

```tsx
type SnackbarOptions = {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  actionLabel?: string;
  onActionPress?: () => void;
  duration?: number;
  position?: "top" | "bottom";
};
```

## Examples

### Different Types of Snackbars

```tsx
const SnackbarTypes = () => {
  const { showSnackbar } = useSnackbar();

  return (
    <Stack spacing="md">
      <Button
        onPress={() =>
          showSnackbar({
            message: "Operation completed successfully!",
            type: "success",
          })
        }
      >
        Success Snackbar
      </Button>

      <Button
        onPress={() =>
          showSnackbar({
            message: "Something went wrong!",
            type: "error",
          })
        }
      >
        Error Snackbar
      </Button>

      <Button
        onPress={() =>
          showSnackbar({
            message: "Please check your internet connection.",
            type: "warning",
          })
        }
      >
        Warning Snackbar
      </Button>

      <Button
        onPress={() =>
          showSnackbar({
            message: "New message received.",
            type: "info",
          })
        }
      >
        Info Snackbar
      </Button>
    </Stack>
  );
};
```

### Snackbar with Action Button

```tsx
const SnackbarWithAction = () => {
  const { showSnackbar } = useSnackbar();

  const handleUndo = () => {
    // Handle undo action
    console.log("Undo pressed");
  };

  return (
    <Button
      onPress={() =>
        showSnackbar({
          message: "Item deleted",
          type: "success",
          actionLabel: "UNDO",
          onActionPress: handleUndo,
          duration: 5000,
        })
      }
    >
      Delete Item
    </Button>
  );
};
```

### Top Position Snackbar

```tsx
const TopSnackbar = () => {
  const { showSnackbar } = useSnackbar();

  return (
    <Button
      onPress={() =>
        showSnackbar({
          message: "New notification at the top!",
          type: "info",
          position: "top",
          duration: 2000,
        })
      }
    >
      Show Top Snackbar
    </Button>
  );
};
```

### Custom Duration

```tsx
const CustomDuration = () => {
  const { showSnackbar } = useSnackbar();

  return (
    <Button
      onPress={() =>
        showSnackbar({
          message: "This will stay visible for 10 seconds",
          type: "info",
          duration: 10000,
        })
      }
    >
      Long Duration Snackbar
    </Button>
  );
};
```

### Direct Snackbar Usage

```tsx
const DirectSnackbar = () => {
  const [visible, setVisible] = useState(false);
  const [snackbarConfig, setSnackbarConfig] = useState({
    message: "",
    type: "info" as const,
  });

  const showSnackbar = (
    message: string,
    type: "success" | "error" | "info" | "warning" = "info"
  ) => {
    setSnackbarConfig({ message, type });
    setVisible(true);
  };

  return (
    <>
      <Stack spacing="md">
        <Button onPress={() => showSnackbar("Success message!", "success")}>
          Success
        </Button>
        <Button onPress={() => showSnackbar("Error message!", "error")}>
          Error
        </Button>
      </Stack>

      <Snackbar
        {...snackbarConfig}
        visible={visible}
        onClose={() => setVisible(false)}
        duration={3000}
      />
    </>
  );
};
```

## Styling

The Snackbar component uses predefined colors for different types:

- **Success**: `#16a34a` (green)
- **Error**: `#dc2626` (red)
- **Info**: `#2563eb` (blue)
- **Warning**: `#f59e0b` (orange)

## Best Practices

1. **Keep messages concise**: Snackbar messages should be brief and to the point
2. **Use appropriate types**: Choose the right type based on the message context
3. **Provide actions when needed**: Use action buttons for undo operations or additional actions
4. **Consider duration**: Longer messages might need longer display times
5. **Position strategically**: Use top position for notifications that don't interfere with user actions

## Accessibility

The Snackbar component includes proper accessibility features:

- Screen reader announcements
- Proper contrast ratios for text readability
- Touch target sizes for action buttons

## Integration with Forms

```tsx
const FormWithSnackbar = () => {
  const { showSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      // Submit form logic
      await submitForm(email);
      showSnackbar("Form submitted successfully!", "success");
    } catch (error) {
      showSnackbar("Failed to submit form. Please try again.", "error");
    }
  };

  return (
    <Stack spacing="md">
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <Button onPress={handleSubmit}>Submit</Button>
    </Stack>
  );
};
```
