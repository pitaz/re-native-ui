---
id: slide-down-toast
title: SlideDownToast
sidebar_label: SlideDownToast
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SlideDownToast

A toast notification component that slides down from the top of the screen.

## Overview

The `SlideDownToast` component provides a way to display temporary notifications that slide down from the top of the screen. It's perfect for showing success messages, errors, warnings, or informational content to users.

## Features

- **Smooth Animations**: Slides down from the top with smooth transitions
- **Multiple Variants**: Success, error, info, and warning variants with different colors
- **Auto-dismiss**: Automatically hides after a configurable duration
- **Manual Dismiss**: Can be dismissed by tapping anywhere on the toast
- **Customizable Duration**: Configurable display duration
- **Theme Integration**: Follows the design system theme
- **Safe Area Support**: Respects device safe areas
- **Modal Overlay**: Appears above all other content

## Basic Usage

```tsx
import { SlideDownToast } from "react-native-ui";

function MyComponent() {
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
  };

  return (
    <>
      <Button onPress={showToast}>Show Toast</Button>

      <SlideDownToast
        message="Operation completed successfully!"
        variant="success"
        visible={toastVisible}
        onHide={() => setToastVisible(false)}
      />
    </>
  );
}
```

## Props

| Prop        | Type                                          | Default      | Description                                 |
| ----------- | --------------------------------------------- | ------------ | ------------------------------------------- |
| `message`   | `string`                                      | **Required** | The message to display in the toast         |
| `visible`   | `boolean`                                     | **Required** | Whether the toast is visible                |
| `variant`   | `'success' \| 'error' \| 'info' \| 'warning'` | `'info'`     | The visual variant of the toast             |
| `duration`  | `number`                                      | `3000`       | Duration in milliseconds before auto-hiding |
| `onHide`    | `() => void`                                  | `undefined`  | Callback fired when toast is hidden         |
| `style`     | `ViewStyle`                                   | `undefined`  | Custom style for the toast container        |
| `textStyle` | `TextStyle`                                   | `undefined`  | Custom style for the toast text             |

## Examples

### Basic Toast

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React, { useState } from "react";
import { Button } from "react-native";
import { SlideDownToast } from "react-native-ui";

function BasicToast() {
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
  };

  return (
    <>
      <Button onPress={showToast} title="Show Info Toast" />

      <SlideDownToast
        message="This is an informational message"
        variant="info"
        visible={toastVisible}
        onHide={() => setToastVisible(false)}
      />
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<SlideDownToast
  message="This is an informational message"
  variant="info"
  visible={true}
  onHide={() => {}}
/>
```

</TabItem>
</Tabs>

### Success Toast

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React, { useState } from "react";
import { Button } from "react-native";
import { SlideDownToast } from "react-native-ui";

function SuccessToast() {
  const [toastVisible, setToastVisible] = useState(false);

  const showSuccess = () => {
    setToastVisible(true);
  };

  return (
    <>
      <Button onPress={showSuccess} title="Show Success Toast" />

      <SlideDownToast
        message="Data saved successfully!"
        variant="success"
        visible={toastVisible}
        duration={2000}
        onHide={() => setToastVisible(false)}
      />
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<SlideDownToast
  message="Data saved successfully!"
  variant="success"
  visible={true}
  duration={2000}
  onHide={() => {}}
/>
```

</TabItem>
</Tabs>

### Error Toast

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React, { useState } from "react";
import { Button } from "react-native";
import { SlideDownToast } from "react-native-ui";

function ErrorToast() {
  const [toastVisible, setToastVisible] = useState(false);

  const showError = () => {
    setToastVisible(true);
  };

  return (
    <>
      <Button onPress={showError} title="Show Error Toast" />

      <SlideDownToast
        message="An error occurred. Please try again."
        variant="error"
        visible={toastVisible}
        duration={4000}
        onHide={() => setToastVisible(false)}
      />
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<SlideDownToast
  message="An error occurred. Please try again."
  variant="error"
  visible={true}
  duration={4000}
  onHide={() => {}}
/>
```

</TabItem>
</Tabs>

### Warning Toast

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React, { useState } from "react";
import { Button } from "react-native";
import { SlideDownToast } from "react-native-ui";

function WarningToast() {
  const [toastVisible, setToastVisible] = useState(false);

  const showWarning = () => {
    setToastVisible(true);
  };

  return (
    <>
      <Button onPress={showWarning} title="Show Warning Toast" />

      <SlideDownToast
        message="Please check your internet connection"
        variant="warning"
        visible={toastVisible}
        duration={3000}
        onHide={() => setToastVisible(false)}
      />
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<SlideDownToast
  message="Please check your internet connection"
  variant="warning"
  visible={true}
  duration={3000}
  onHide={() => {}}
/>
```

</TabItem>
</Tabs>

### Custom Styled Toast

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React, { useState } from "react";
import { Button } from "react-native";
import { SlideDownToast } from "react-native-ui";

function CustomToast() {
  const [toastVisible, setToastVisible] = useState(false);

  const showCustomToast = () => {
    setToastVisible(true);
  };

  return (
    <>
      <Button onPress={showCustomToast} title="Show Custom Toast" />

      <SlideDownToast
        message="Custom styled toast message"
        variant="info"
        visible={toastVisible}
        style={{
          backgroundColor: "#6c5ce7",
          borderRadius: 8,
          margin: 16,
        }}
        textStyle={{
          fontSize: 16,
          fontWeight: "bold",
          color: "white",
        }}
        onHide={() => setToastVisible(false)}
      />
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<SlideDownToast
  message="Custom styled toast message"
  variant="info"
  visible={true}
  style={{
    backgroundColor: "#6c5ce7",
    borderRadius: 8,
    margin: 16,
  }}
  textStyle={{
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  }}
  onHide={() => {}}
/>
```

</TabItem>
</Tabs>

## Advanced Usage

### Toast with Different Durations

```tsx
import React, { useState } from "react";
import { Button, View } from "react-native";
import { SlideDownToast } from "react-native-ui";

function ToastWithDurations() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState<
    "success" | "error" | "info" | "warning"
  >("info");
  const [toastDuration, setToastDuration] = useState(3000);

  const showToast = (
    message: string,
    variant: typeof toastVariant,
    duration: number
  ) => {
    setToastMessage(message);
    setToastVariant(variant);
    setToastDuration(duration);
    setToastVisible(true);
  };

  return (
    <View>
      <Button
        onPress={() => showToast("Quick message", "info", 1000)}
        title="Quick Toast (1s)"
      />
      <Button
        onPress={() => showToast("Standard message", "success", 3000)}
        title="Standard Toast (3s)"
      />
      <Button
        onPress={() => showToast("Long message", "warning", 5000)}
        title="Long Toast (5s)"
      />

      <SlideDownToast
        message={toastMessage}
        variant={toastVariant}
        visible={toastVisible}
        duration={toastDuration}
        onHide={() => setToastVisible(false)}
      />
    </View>
  );
}
```

### Toast with Callback Actions

```tsx
import React, { useState } from "react";
import { Button } from "react-native";
import { SlideDownToast } from "react-native-ui";

function ToastWithActions() {
  const [toastVisible, setToastVisible] = useState(false);

  const handleSave = () => {
    // Simulate save operation
    setTimeout(() => {
      setToastVisible(true);
    }, 1000);
  };

  const handleToastHide = () => {
    setToastVisible(false);
    console.log("Toast was dismissed");
    // Perform any cleanup or follow-up actions
  };

  return (
    <>
      <Button onPress={handleSave} title="Save Data" />

      <SlideDownToast
        message="Data saved successfully! You can now continue."
        variant="success"
        visible={toastVisible}
        duration={3000}
        onHide={handleToastHide}
      />
    </>
  );
}
```

### Multiple Toast Types

```tsx
import React, { useState } from "react";
import { Button, View } from "react-native";
import { SlideDownToast } from "react-native-ui";

function MultipleToastTypes() {
  const [currentToast, setCurrentToast] = useState<{
    message: string;
    variant: "success" | "error" | "info" | "warning";
    visible: boolean;
  }>({
    message: "",
    variant: "info",
    visible: false,
  });

  const showToast = (message: string, variant: typeof currentToast.variant) => {
    setCurrentToast({ message, variant, visible: true });
  };

  return (
    <View>
      <Button
        onPress={() => showToast("Success message!", "success")}
        title="Success"
      />
      <Button
        onPress={() => showToast("Error message!", "error")}
        title="Error"
      />
      <Button onPress={() => showToast("Info message!", "info")} title="Info" />
      <Button
        onPress={() => showToast("Warning message!", "warning")}
        title="Warning"
      />

      <SlideDownToast
        message={currentToast.message}
        variant={currentToast.variant}
        visible={currentToast.visible}
        onHide={() => setCurrentToast((prev) => ({ ...prev, visible: false }))}
      />
    </View>
  );
}
```

## Accessibility

The `SlideDownToast` component includes proper accessibility features:

- **Screen Reader Support**: Proper accessibility labels and hints
- **Touch Target**: The entire toast area is touchable for dismissal
- **Focus Management**: Proper focus handling during animations
- **Status Announcements**: Can announce toast messages to screen readers

## Best Practices

1. **Keep Messages Short**: Toast messages should be concise and clear
2. **Use Appropriate Variants**: Choose the right variant for the message type
3. **Set Appropriate Duration**: Longer messages need more time to read
4. **Don't Overuse**: Avoid showing too many toasts in quick succession
5. **Provide Context**: Make sure the message provides enough context
6. **Handle Dismissal**: Always provide a way to dismiss toasts

## Related Components

- **Snackbar** - Alternative notification component
- **Button** - For triggering toast messages
- **Container** - For wrapping toast-triggering content

## API Reference

### SlideDownToastProps

```tsx
interface SlideDownToastProps {
  message: string;
  visible: boolean;
  variant?: "success" | "error" | "info" | "warning";
  duration?: number;
  onHide?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
```

### Methods

The component doesn't expose any public methods beyond the standard React component lifecycle methods.

### Events

- `onHide`: Fired when the toast is dismissed (either by timeout or user interaction)
