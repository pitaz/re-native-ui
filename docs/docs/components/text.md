---
title: Text
description: A styled text component with predefined variants
---

# Text

The Text component provides styled text with predefined variants for consistent typography across your application. It extends React Native's Text component with theme-aware styling.

## Basic Usage

```tsx
import { Text } from "re-native-ui";

<Text>Default body text</Text>;
```

## Props

| Prop       | Type                                               | Default  | Description                |
| ---------- | -------------------------------------------------- | -------- | -------------------------- |
| `children` | `ReactNode`                                        | -        | Text content to display    |
| `variant`  | `'heading' \| 'subheading' \| 'body' \| 'caption'` | `'body'` | Text style variant         |
| `style`    | `StyleProp<TextStyle>`                             | -        | Additional styles to apply |

**Note:** The Text component extends all props from React Native's `Text` component, so you can use any standard Text props like `numberOfLines`, `onPress`, etc.

## Variants

### Heading

```tsx
<Text variant="heading">Main Heading</Text>
```

**Style:** Large font size, bold weight, primary text color

### Subheading

```tsx
<Text variant="subheading">Section Subheading</Text>
```

**Style:** Large font size, semi-bold weight, primary text color

### Body (Default)

```tsx
<Text variant="body">Regular body text</Text>
```

**Style:** Medium font size, normal weight, primary text color

### Caption

```tsx
<Text variant="caption">Small caption text</Text>
```

**Style:** Small font size, normal weight, muted text color

## Examples

### Basic Text Usage

```tsx
<Stack spacing={8}>
  <Text variant="heading">Welcome to Our App</Text>
  <Text variant="subheading">Get started with these features</Text>
  <Text variant="body">
    This is the main content area where you can read important information.
  </Text>
  <Text variant="caption">Last updated: January 2024</Text>
</Stack>
```

### Custom Styling

```tsx
<Text
  variant="body"
  style={{
    color: "#007AFF",
    textDecorationLine: "underline",
    fontStyle: "italic",
  }}
>
  Custom styled text
</Text>
```

### Interactive Text

```tsx
<Text
  variant="body"
  onPress={() => console.log("Text pressed!")}
  style={{ color: "#007AFF" }}
>
  Clickable text
</Text>
```

### Text with Number of Lines

```tsx
<Text variant="body" numberOfLines={2} ellipsizeMode="tail">
  This is a very long text that will be truncated after two lines and show an
  ellipsis at the end to indicate there's more content.
</Text>
```

### Formatted Text

```tsx
<Stack spacing={4}>
  <Text variant="heading">Product Details</Text>
  <Text variant="body">
    Price: <Text style={{ fontWeight: "bold" }}>$29.99</Text>
  </Text>
  <Text variant="caption">Free shipping on orders over $50</Text>
</Stack>
```

## Use Cases

### Page Headers

```tsx
<Container>
  <Stack spacing={12}>
    <Text variant="heading">User Profile</Text>
    <Text variant="subheading">Manage your account settings</Text>
    <Text variant="body">
      Update your personal information and preferences below.
    </Text>
  </Stack>
</Container>
```

### Form Labels and Help Text

```tsx
<Stack spacing={8}>
  <Text variant="body" style={{ fontWeight: "600" }}>
    Email Address
  </Text>
  <Input placeholder="Enter your email" />
  <Text variant="caption">We'll never share your email with anyone else.</Text>
</Stack>
```

### Error Messages

```tsx
<Text variant="caption" style={{ color: "#FF3B30" }}>
  Please enter a valid email address
</Text>
```

### Success Messages

```tsx
<Text variant="body" style={{ color: "#34C759" }}>
  Your changes have been saved successfully!
</Text>
```

### Navigation Items

```tsx
<Stack direction="row" spacing={16}>
  <Text
    variant="body"
    onPress={() => navigate("Home")}
    style={{ color: "#007AFF" }}
  >
    Home
  </Text>
  <Text
    variant="body"
    onPress={() => navigate("Profile")}
    style={{ color: "#007AFF" }}
  >
    Profile
  </Text>
</Stack>
```

## Best Practices

1. **Use appropriate variants**: Choose the variant that best represents the text's purpose and hierarchy
2. **Maintain consistency**: Use the same variant for similar types of content throughout your app
3. **Combine with other components**: Use Text with Container, Stack, and other layout components for structured content
4. **Accessibility**: Always provide meaningful text content for screen readers

## Accessibility

The Text component inherits all accessibility features from React Native's `Text` component:

- Supports `accessibilityLabel` and `accessibilityHint`
- Works with screen readers
- Maintains proper text scaling for accessibility settings

```tsx
<Text
  variant="heading"
  accessibilityLabel="Main page heading"
  accessibilityHint="Describes the main content of this page"
>
  Welcome to Our App
</Text>
```

## Theme Integration

The Text component automatically uses colors from your theme:

- `heading` and `subheading` use `theme.colors.text`
- `body` uses `theme.colors.text`
- `caption` uses `theme.colors.muted`

This ensures consistent theming across light and dark modes.
