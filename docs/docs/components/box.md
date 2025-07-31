---
title: Box
description: A flexible container component with theme-aware styling
---

# Box

The Box component is a versatile container that provides theme-aware styling for background colors and padding. It extends React Native's View component with convenient props for common styling needs.

## Basic Usage

```tsx
import { Box } from "re-native-ui";

<Box>
  <Text>Content inside a box</Text>
</Box>;
```

## Props

| Prop       | Type                   | Default | Description                             |
| ---------- | ---------------------- | ------- | --------------------------------------- |
| `children` | `ReactNode`            | -       | Content to display inside the box       |
| `bg`       | `keyof ThemeColors`    | -       | Background color using theme color keys |
| `p`        | `keyof ThemeSpacing`   | -       | Padding using theme spacing keys        |
| `style`    | `StyleProp<ViewStyle>` | -       | Additional styles to apply              |

**Note:** The Box component extends all props from React Native's `View` component, so you can use any standard View props like `backgroundColor`, `padding`, `borderRadius`, etc.

## Examples

### Basic Box

```tsx
<Box>
  <Text variant="body">Simple box with default styling</Text>
</Box>
```

### Box with Background Color

```tsx
<Box bg="primary">
  <Text variant="body" style={{ color: "white" }}>
    Box with primary background color
  </Text>
</Box>
```

### Box with Padding

```tsx
<Box p="md">
  <Text variant="body">Box with medium padding from theme</Text>
</Box>
```

### Box with Background and Padding

```tsx
<Box bg="background" p="lg">
  <Text variant="heading">Styled Box</Text>
  <Text variant="body">This box has both background color and padding.</Text>
</Box>
```

### Custom Styled Box

```tsx
<Box
  bg="secondary"
  p="md"
  style={{
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  }}
>
  <Text variant="heading" style={{ color: "white" }}>
    Card Style Box
  </Text>
  <Text variant="body" style={{ color: "white" }}>
    With custom border radius and shadow
  </Text>
</Box>
```

### Box with Different Background Colors

```tsx
<Stack spacing={12}>
  <Box bg="primary" p="md">
    <Text style={{ color: "white" }}>Primary Background</Text>
  </Box>

  <Box bg="secondary" p="md">
    <Text style={{ color: "white" }}>Secondary Background</Text>
  </Box>

  <Box bg="background" p="md">
    <Text>Background Color</Text>
  </Box>

  <Box bg="muted" p="md">
    <Text>Muted Background</Text>
  </Box>
</Stack>
```

### Box with Different Padding Sizes

```tsx
<Stack spacing={8}>
  <Box bg="background" p="xs">
    <Text variant="caption">Extra Small Padding</Text>
  </Box>

  <Box bg="background" p="sm">
    <Text variant="body">Small Padding</Text>
  </Box>

  <Box bg="background" p="md">
    <Text variant="body">Medium Padding</Text>
  </Box>

  <Box bg="background" p="lg">
    <Text variant="body">Large Padding</Text>
  </Box>

  <Box bg="background" p="xl">
    <Text variant="body">Extra Large Padding</Text>
  </Box>
</Stack>
```

## Use Cases

### Card Component

```tsx
<Box
  bg="background"
  p="md"
  style={{
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    marginBottom: 16,
  }}
>
  <Stack spacing={8}>
    <Text variant="heading">Card Title</Text>
    <Text variant="body">
      Card content goes here. This is a simple card layout using the Box
      component.
    </Text>
    <Stack direction="row" spacing={8}>
      <Button size="sm" variant="outline">
        Edit
      </Button>
      <Button size="sm" variant="ghost">
        Delete
      </Button>
    </Stack>
  </Stack>
</Box>
```

### Section Container

```tsx
<Box bg="muted" p="lg">
  <Stack spacing={16}>
    <Text variant="heading">Section Title</Text>
    <Text variant="body">
      This section has a muted background to distinguish it from the main
      content area. The Box component makes it easy to create visual separation
      between different parts of your UI.
    </Text>
    <Button>Action Button</Button>
  </Stack>
</Box>
```

### Alert/Notification Box

```tsx
<Box
  bg="primary"
  p="md"
  style={{
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#0056b3",
  }}
>
  <Stack spacing={4}>
    <Text variant="body" style={{ color: "white", fontWeight: "600" }}>
      Success!
    </Text>
    <Text variant="body" style={{ color: "white" }}>
      Your changes have been saved successfully.
    </Text>
  </Stack>
</Box>
```

### Form Section

```tsx
<Box bg="background" p="lg">
  <Stack spacing={20}>
    <Text variant="heading">Personal Information</Text>

    <Stack spacing={12}>
      <Input label="First Name" placeholder="Enter your first name" />
      <Input label="Last Name" placeholder="Enter your last name" />
      <Input
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
      />
    </Stack>

    <Stack direction="row" spacing={12}>
      <Button variant="outline" style={{ flex: 1 }}>
        Cancel
      </Button>
      <Button style={{ flex: 1 }}>Save Changes</Button>
    </Stack>
  </Stack>
</Box>
```

### Profile Avatar Container

```tsx
<Box
  bg="primary"
  style={{
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Text variant="heading" style={{ color: "white" }}>
    JD
  </Text>
</Box>
```

### Status Indicator

```tsx
<Stack direction="row" spacing={8} style={{ alignItems: "center" }}>
  <Box
    bg="primary"
    style={{
      width: 12,
      height: 12,
      borderRadius: 6,
    }}
  />
  <Text variant="body">Online</Text>
</Stack>
```

## Best Practices

1. **Use theme colors**: Leverage the `bg` prop with theme color keys for consistent theming
2. **Use theme spacing**: Use the `p` prop with theme spacing keys for consistent padding
3. **Combine with other components**: Use Box with Stack, Container, and other layout components
4. **Custom styling**: Use the `style` prop for additional customizations beyond theme values
5. **Accessibility**: Box inherits accessibility features from View component

## Accessibility

The Box component inherits all accessibility features from React Native's `View` component:

- Supports `accessibilityLabel` and `accessibilityHint`
- Maintains proper focus management
- Works with screen readers

```tsx
<Box
  bg="background"
  p="md"
  accessibilityLabel="Content section"
  accessibilityHint="Contains the main content of this page"
>
  <Text>Accessible content</Text>
</Box>
```

## Theme Integration

The Box component automatically uses colors and spacing from your theme:

- `bg` prop uses `theme.colors[bg]`
- `p` prop uses `theme.spacing[p]`

This ensures consistent theming across light and dark modes and maintains design system consistency.

## Performance

The Box component is optimized for performance:

- Minimal re-renders
- Efficient style calculation
- Lightweight implementation

## Comparison with Other Components

- **Box vs Container**: Box is for styling individual elements, Container is for layout constraints
- **Box vs Stack**: Box is for single item styling, Stack is for arranging multiple items
- **Box vs View**: Box adds theme-aware styling on top of View functionality
