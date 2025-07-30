---
id: accordion
title: Accordion
sidebar_label: Accordion
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Accordion

A collapsible content component with smooth animations.

## Overview

The `Accordion` component provides a way to show and hide content with smooth expand/collapse animations. It's perfect for organizing content into collapsible sections, FAQs, or any expandable content areas.

## Features

- **Smooth Animations**: Animated height transitions and arrow rotation
- **Customizable Duration**: Configurable animation duration
- **Default State**: Can be open or closed by default
- **Custom Styling**: Full control over header, content, and arrow styling
- **Custom Arrow**: Support for custom arrow components
- **Theme Integration**: Follows the design system theme
- **Accessibility**: Proper touch targets and screen reader support

## Basic Usage

```tsx
import { Accordion } from "react-native-ui";

function MyComponent() {
  return (
    <Accordion title="Section Title">
      <Text>This is the collapsible content.</Text>
    </Accordion>
  );
}
```

## Props

| Prop           | Type                      | Default      | Description                                     |
| -------------- | ------------------------- | ------------ | ----------------------------------------------- |
| `title`        | `string`                  | **Required** | The title displayed in the accordion header     |
| `children`     | `React.ReactNode`         | **Required** | The content to be shown/hidden                  |
| `defaultOpen`  | `boolean`                 | `false`      | Whether the accordion should be open by default |
| `onToggle`     | `(open: boolean) => void` | `undefined`  | Callback fired when accordion is toggled        |
| `duration`     | `number`                  | `300`        | Animation duration in milliseconds              |
| `style`        | `ViewStyle`               | `undefined`  | Style for the container                         |
| `headerStyle`  | `ViewStyle`               | `undefined`  | Style for the header                            |
| `titleStyle`   | `TextStyle`               | `undefined`  | Style for the title text                        |
| `contentStyle` | `ViewStyle`               | `undefined`  | Style for the content area                      |
| `arrow`        | `React.ReactNode`         | `undefined`  | Custom arrow component                          |

## Examples

### Basic Accordion

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import { Text } from "react-native";
import { Accordion } from "react-native-ui";

function BasicAccordion() {
  return (
    <Accordion title="Frequently Asked Questions">
      <Text>
        This is the answer to the frequently asked question. It can contain any
        content including multiple paragraphs, images, or other components.
      </Text>
    </Accordion>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<Accordion title="Frequently Asked Questions">
  <Text>
    This is the answer to the frequently asked question. It can contain any
    content including multiple paragraphs, images, or other components.
  </Text>
</Accordion>
```

</TabItem>
</Tabs>

### Accordion with Default Open State

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import { Text } from "react-native";
import { Accordion } from "react-native-ui";

function OpenAccordion() {
  return (
    <Accordion title="Important Information" defaultOpen={true}>
      <Text>
        This accordion is open by default. Users can still collapse it by
        tapping the header.
      </Text>
    </Accordion>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<Accordion title="Important Information" defaultOpen={true}>
  <Text>
    This accordion is open by default. Users can still collapse it by tapping
    the header.
  </Text>
</Accordion>
```

</TabItem>
</Tabs>

### Accordion with Custom Styling

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import { Text } from "react-native";
import { Accordion } from "react-native-ui";

function StyledAccordion() {
  return (
    <Accordion
      title="Custom Styled Section"
      headerStyle={{
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
        marginBottom: 8,
      }}
      titleStyle={{
        fontWeight: "bold",
        color: "#333",
      }}
      contentStyle={{
        backgroundColor: "#fafafa",
        borderRadius: 8,
        borderLeft: "4px solid #007AFF",
      }}
    >
      <Text>
        This accordion has custom styling applied to the header, title, and
        content areas.
      </Text>
    </Accordion>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<Accordion
  title="Custom Styled Section"
  headerStyle={{
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 8,
  }}
  titleStyle={{
    fontWeight: "bold",
    color: "#333",
  }}
  contentStyle={{
    backgroundColor: "#fafafa",
    borderRadius: 8,
    borderLeft: "4px solid #007AFF",
  }}
>
  <Text>
    This accordion has custom styling applied to the header, title, and content
    areas.
  </Text>
</Accordion>
```

</TabItem>
</Tabs>

### Accordion with Custom Arrow

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import { Text } from "react-native";
import { Accordion } from "react-native-ui";

function CustomArrowAccordion() {
  const CustomArrow = ({ isOpen }: { isOpen: boolean }) => (
    <Text style={{ fontSize: 18, color: "#007AFF" }}>{isOpen ? "−" : "+"}</Text>
  );

  return (
    <Accordion
      title="Custom Arrow Accordion"
      arrow={<CustomArrow isOpen={false} />}
    >
      <Text>
        This accordion uses a custom plus/minus arrow instead of the default
        chevron.
      </Text>
    </Accordion>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<Accordion
  title="Custom Arrow Accordion"
  arrow={<Text style={{ fontSize: 18, color: "#007AFF" }}>+</Text>}
>
  <Text>
    This accordion uses a custom plus/minus arrow instead of the default
    chevron.
  </Text>
</Accordion>
```

</TabItem>
</Tabs>

### Multiple Accordions

<Tabs>
<TabItem value="tsx" label="TSX">

```tsx
import React from "react";
import { Text } from "react-native";
import { Accordion } from "react-native-ui";

function MultipleAccordions() {
  return (
    <>
      <Accordion title="Section 1">
        <Text>Content for section 1</Text>
      </Accordion>

      <Accordion title="Section 2">
        <Text>Content for section 2</Text>
      </Accordion>

      <Accordion title="Section 3">
        <Text>Content for section 3</Text>
      </Accordion>
    </>
  );
}
```

</TabItem>
<TabItem value="preview" label="Preview">

```tsx
<>
  <Accordion title="Section 1">
    <Text>Content for section 1</Text>
  </Accordion>

  <Accordion title="Section 2">
    <Text>Content for section 2</Text>
  </Accordion>

  <Accordion title="Section 3">
    <Text>Content for section 3</Text>
  </Accordion>
</>
```

</TabItem>
</Tabs>

## Advanced Usage

### Accordion with Toggle Callback

```tsx
import React, { useState } from "react";
import { Text } from "react-native";
import { Accordion } from "react-native-ui";

function AccordionWithCallback() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const handleToggle = (sectionId: string, isOpen: boolean) => {
    if (isOpen) {
      setOpenSections((prev) => [...prev, sectionId]);
    } else {
      setOpenSections((prev) => prev.filter((id) => id !== sectionId));
    }
  };

  return (
    <>
      <Accordion title="Section A" onToggle={(open) => handleToggle("A", open)}>
        <Text>Content for section A</Text>
      </Accordion>

      <Accordion title="Section B" onToggle={(open) => handleToggle("B", open)}>
        <Text>Content for section B</Text>
      </Accordion>

      <Text>Open sections: {openSections.join(", ")}</Text>
    </>
  );
}
```

### Accordion with Complex Content

```tsx
import React from "react";
import { Text, View } from "react-native";
import { Accordion, Button, Divider } from "react-native-ui";

function ComplexAccordion() {
  return (
    <Accordion title="Advanced Settings">
      <View>
        <Text style={{ marginBottom: 16 }}>
          Configure advanced settings for your application.
        </Text>

        <Divider />

        <Text style={{ marginVertical: 8 }}>
          • Setting 1: Enable notifications
        </Text>
        <Text style={{ marginVertical: 8 }}>
          • Setting 2: Auto-save documents
        </Text>
        <Text style={{ marginVertical: 8 }}>
          • Setting 3: Dark mode preference
        </Text>

        <Divider />

        <Button
          onPress={() => console.log("Settings saved")}
          style={{ marginTop: 16 }}
        >
          Save Settings
        </Button>
      </View>
    </Accordion>
  );
}
```

## Accessibility

The `Accordion` component includes proper accessibility features:

- **Touch Target**: The entire header is touchable with adequate size
- **Screen Reader Support**: Proper accessibility labels and hints
- **Keyboard Navigation**: Supports keyboard navigation
- **Focus Management**: Proper focus handling during animations

## Best Practices

1. **Clear Titles**: Use descriptive titles that indicate the content
2. **Appropriate Content**: Don't put too much content in a single accordion
3. **Consistent Styling**: Maintain consistent styling across accordions
4. **Performance**: Avoid complex animations or heavy content in accordions
5. **User Experience**: Consider whether content should be open by default

## Related Components

- **Container** - For wrapping accordion content
- **Text** - For accordion titles and content
- **Divider** - For separating content within accordions
- **Stack** - For organizing multiple accordions

## API Reference

### AccordionProps

```tsx
interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  duration?: number;
  style?: ViewStyle;
  headerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  contentStyle?: ViewStyle;
  arrow?: React.ReactNode;
}
```

### Methods

The component doesn't expose any public methods beyond the standard React component lifecycle methods.

### Events

- `onToggle`: Fired when the accordion is expanded or collapsed
