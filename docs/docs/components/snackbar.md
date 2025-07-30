---
id: snackbar
title: Snackbar
sidebar_label: Snackbar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Snackbar

A notification component that slides up from the bottom or top of the screen with optional action buttons.

## Overview

The `Snackbar` component provides a way to display temporary notifications that slide up from the bottom or top of the screen. It includes support for action buttons and can be used with a provider pattern for global snackbar management.

## Features

- **Smooth Animations**: Slides up from bottom or top with smooth transitions
- **Multiple Types**: Success, error, info, and warning variants with different colors
- **Action Buttons**: Optional action buttons for user interaction
- **Position Control**: Can appear at top or bottom of screen
- **Auto-dismiss**: Automatically hides after a configurable duration
- **Provider Pattern**: Global snackbar management with context
- **Hook Support**: Easy-to-use hook for showing snackbars
- **Theme Integration**: Follows the design system theme

## Basic Usage

### Direct Usage

```tsx
import { Snackbar } from "react-native-ui";

function MyComponent() {
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  return (
    <>
      <Button onPress={() => setSnackbarVisible(true)}>Show Snackbar</Button>

      {snackbarVisible && (
        <Snackbar
          message="This is a snackbar message"
          type="info"
          onClose={() => setSnackbarVisible(false)}
        />
      )}
    </>
  );
}
```

### With Provider Pattern

```tsx
import { SnackbarProvider, useSnackbar } from "react-native-ui";

function App() {
  return (
    <SnackbarProvider>
      <MyComponent />
    </SnackbarProvider>
  );
}

function MyComponent() {
  const { showSnackbar } = useSnackbar();

  const handleShowSnackbar = () => {
    showSnackbar({
      message: "Operation completed successfully!",
      type: "success",
      duration: 3000,
    });
  };

  return <Button onPress={handleShowSnackbar}>Show Snackbar</Button>;
}
```

## Props

### Snackbar Props

| Prop            | Type                                          | Default      | Description                                 |
| --------------- | --------------------------------------------- | ------------ | ------------------------------------------- |
| `message`       | `string`                                      | **Required** | The message to display in the snackbar      |
| `type`          | `'success' \| 'error' \| 'info' \| 'warning'` | `'info'`     | The visual type of the snackbar             |
| `actionLabel`   | `string`                                      | `undefined`  | Label for the action button                 |
| `onActionPress` | `() => void`                                  | `undefined`  | Callback for action button press            |
| `duration`      | `number`                                      | `3000`       | Duration in milliseconds before auto-hiding |
| `onClose`       | `() => void`                                  | `undefined`  | Callback fired when snackbar is closed      |
| `position`      | `'top' \| 'bottom'`                           | `'bottom'`   | Position of the snackbar on screen          |

### SnackbarProvider Props

| Prop       | Type              | Default      | Description              |
| ---------- | ----------------- | ------------ | ------------------------ |
| `children` | `React.ReactNode` | **Required** | Child components to wrap |

## Examples

### Basic Snackbar

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React, { useState } from "react";
import { Button } from "react-native";
import { Snackbar } from "react-native-ui";

function BasicSnackbar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onPress={() => setVisible(true)} title="Show Snackbar" />

      {visible && (
        <Snackbar
          message="This is a basic snackbar message"
          type="info"
          onClose={() => setVisible(false)}
        />
      )}
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<Snackbar
  message="This is a basic snackbar message"
  type="info"
  onClose={() => {}}
/>
```

</TabItem>
</Tabs>

### Success Snackbar

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React, { useState } from "react";
import { Button } from "react-native";
import { Snackbar } from "react-native-ui";

function SuccessSnackbar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onPress={() => setVisible(true)} title="Show Success" />

      {visible && (
        <Snackbar
          message="Data saved successfully!"
          type="success"
          duration={2000}
          onClose={() => setVisible(false)}
        />
      )}
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<Snackbar
  message="Data saved successfully!"
  type="success"
  duration={2000}
  onClose={() => {}}
/>
```

</TabItem>
</Tabs>

### Snackbar with Action

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React, { useState } from "react";
import { Button } from "react-native";
import { Snackbar } from "react-native-ui";

function SnackbarWithAction() {
  const [visible, setVisible] = useState(false);

  const handleAction = () => {
    console.log("Action pressed!");
    setVisible(false);
  };

  return (
    <>
      <Button onPress={() => setVisible(true)} title="Show with Action" />

      {visible && (
        <Snackbar
          message="Item deleted from cart"
          type="info"
          actionLabel="UNDO"
          onActionPress={handleAction}
          onClose={() => setVisible(false)}
        />
      )}
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<Snackbar
  message="Item deleted from cart"
  type="info"
  actionLabel="UNDO"
  onActionPress={() => {}}
  onClose={() => {}}
/>
```

</TabItem>
</Tabs>

### Top Position Snackbar

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React, { useState } from "react";
import { Button } from "react-native";
import { Snackbar } from "react-native-ui";

function TopSnackbar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onPress={() => setVisible(true)} title="Show Top Snackbar" />

      {visible && (
        <Snackbar
          message="New message received"
          type="info"
          position="top"
          onClose={() => setVisible(false)}
        />
      )}
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<Snackbar
  message="New message received"
  type="info"
  position="top"
  onClose={() => {}}
/>
```

</TabItem>
</Tabs>

### Using Provider Pattern

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import { Button, View } from "react-native";
import { SnackbarProvider, useSnackbar } from "react-native-ui";

function SnackbarDemo() {
  return (
    <SnackbarProvider>
      <SnackbarButtons />
    </SnackbarProvider>
  );
}

function SnackbarButtons() {
  const { showSnackbar } = useSnackbar();

  const showSuccess = () => {
    showSnackbar({
      message: "Operation completed successfully!",
      type: "success",
      duration: 3000,
    });
  };

  const showError = () => {
    showSnackbar({
      message: "An error occurred. Please try again.",
      type: "error",
      duration: 4000,
    });
  };

  const showWithAction = () => {
    showSnackbar({
      message: "Item removed from favorites",
      type: "info",
      actionLabel: "UNDO",
      onActionPress: () => console.log("Undo pressed"),
      duration: 5000,
    });
  };

  return (
    <View>
      <Button onPress={showSuccess} title="Show Success" />
      <Button onPress={showError} title="Show Error" />
      <Button onPress={showWithAction} title="Show with Action" />
    </View>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<SnackbarProvider>
  <View>
    <Button onPress={() => {}} title="Show Success" />
    <Button onPress={() => {}} title="Show Error" />
    <Button onPress={() => {}} title="Show with Action" />
  </View>
</SnackbarProvider>
```

</TabItem>
</Tabs>

## Advanced Usage

### Custom Snackbar Types

```tsx
import React from "react";
import { Button, View } from "react-native";
import { SnackbarProvider, useSnackbar } from "react-native-ui";

function CustomSnackbarDemo() {
  return (
    <SnackbarProvider>
      <CustomSnackbarButtons />
    </SnackbarProvider>
  );
}

function CustomSnackbarButtons() {
  const { showSnackbar } = useSnackbar();

  const showDifferentTypes = () => {
    // Show success
    setTimeout(() => {
      showSnackbar({
        message: "Success message",
        type: "success",
        duration: 2000,
      });
    }, 0);

    // Show error after success
    setTimeout(() => {
      showSnackbar({
        message: "Error message",
        type: "error",
        duration: 2000,
      });
    }, 2500);

    // Show warning after error
    setTimeout(() => {
      showSnackbar({
        message: "Warning message",
        type: "warning",
        duration: 2000,
      });
    }, 5000);
  };

  return (
    <View>
      <Button onPress={showDifferentTypes} title="Show All Types" />
    </View>
  );
}
```

### Snackbar with Complex Actions

```tsx
import React, { useState } from "react";
import { Button } from "react-native";
import { SnackbarProvider, useSnackbar } from "react-native-ui";

function ComplexSnackbarDemo() {
  return (
    <SnackbarProvider>
      <ComplexSnackbarButtons />
    </SnackbarProvider>
  );
}

function ComplexSnackbarButtons() {
  const { showSnackbar } = useSnackbar();
  const [deletedItems, setDeletedItems] = useState<string[]>([]);

  const deleteItem = (itemId: string) => {
    // Simulate deletion
    setDeletedItems((prev) => [...prev, itemId]);

    showSnackbar({
      message: `Item ${itemId} deleted`,
      type: "info",
      actionLabel: "UNDO",
      onActionPress: () => {
        // Undo deletion
        setDeletedItems((prev) => prev.filter((id) => id !== itemId));
        showSnackbar({
          message: "Item restored",
          type: "success",
          duration: 2000,
        });
      },
      duration: 5000,
    });
  };

  return (
    <>
      <Button onPress={() => deleteItem("item-1")} title="Delete Item 1" />
      <Button onPress={() => deleteItem("item-2")} title="Delete Item 2" />
      <Text>Deleted items: {deletedItems.join(", ")}</Text>
    </>
  );
}
```

### Snackbar with Form Validation

```tsx
import React, { useState } from "react";
import { Button, TextInput } from "react-native";
import { SnackbarProvider, useSnackbar } from "react-native-ui";

function FormValidationDemo() {
  return (
    <SnackbarProvider>
      <FormValidation />
    </SnackbarProvider>
  );
}

function FormValidation() {
  const { showSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      showSnackbar({
        message: "Email is required",
        type: "error",
        duration: 3000,
      });
    } else if (!emailRegex.test(email)) {
      showSnackbar({
        message: "Please enter a valid email address",
        type: "warning",
        duration: 4000,
      });
    } else {
      showSnackbar({
        message: "Email is valid!",
        type: "success",
        duration: 2000,
      });
    }
  };

  return (
    <>
      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, margin: 10 }}
      />
      <Button onPress={validateEmail} title="Validate Email" />
    </>
  );
}
```

## Hooks

### useSnackbar

The `useSnackbar` hook provides access to the snackbar context and returns a `showSnackbar` function.

```tsx
import { useSnackbar } from "react-native-ui";

function MyComponent() {
  const { showSnackbar } = useSnackbar();

  const handleSuccess = () => {
    showSnackbar({
      message: "Success!",
      type: "success",
      duration: 3000,
    });
  };

  return <Button onPress={handleSuccess} title="Show Success" />;
}
```

## Accessibility

The `Snackbar` component includes proper accessibility features:

- **Screen Reader Support**: Proper accessibility labels and hints
- **Touch Targets**: Adequate touch target sizes for action buttons
- **Focus Management**: Proper focus handling during animations
- **Status Announcements**: Can announce snackbar messages to screen readers

## Best Practices

1. **Keep Messages Short**: Snackbar messages should be concise and clear
2. **Use Appropriate Types**: Choose the right type for the message
3. **Provide Actions When Needed**: Use action buttons for undo operations or important actions
4. **Set Appropriate Duration**: Longer messages need more time to read
5. **Don't Overuse**: Avoid showing too many snackbars in quick succession
6. **Consider Position**: Use top position for important notifications, bottom for confirmations

## Related Components

- **SlideDownToast** - Alternative notification component
- **Button** - For triggering snackbar messages
- **Container** - For wrapping snackbar-triggering content

## API Reference

### SnackbarProps

```tsx
type SnackbarProps = {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  actionLabel?: string;
  onActionPress?: () => void;
  duration?: number;
  onClose?: () => void;
  position?: "top" | "bottom";
};
```

### SnackbarProvider

```tsx
export const SnackbarProvider: React.FC<{ children: React.ReactNode }>;
```

### useSnackbar Hook

```tsx
export const useSnackbar = () => {
  return {
    showSnackbar: (options: SnackbarOptions) => void;
  };
};
```

### Methods

The components don't expose any public methods beyond the standard React component lifecycle methods.

### Events

- `onClose`: Fired when the snackbar is dismissed (either by timeout or user interaction)
- `onActionPress`: Fired when the action button is pressed
