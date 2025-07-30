---
title: Container
description: A responsive container component for layout management
---

# Container

The Container component provides a responsive wrapper for content with configurable padding and maximum width constraints. It's designed to center content and provide consistent spacing across different screen sizes.

## Basic Usage

```tsx
import { Container } from "re-native-ui";

<Container>
  <Text>Your content goes here</Text>
</Container>;
```

## Props

| Prop       | Type                   | Default | Description                                |
| ---------- | ---------------------- | ------- | ------------------------------------------ |
| `children` | `ReactNode`            | -       | Content to be wrapped                      |
| `padding`  | `number`               | `16`    | Padding applied to all sides (in pixels)   |
| `maxWidth` | `number`               | `600`   | Maximum width of the container (in pixels) |
| `style`    | `StyleProp<ViewStyle>` | -       | Additional styles to apply                 |

**Note:** The Container component extends all props from React Native's `View` component, so you can use any standard View props like `backgroundColor`, `borderRadius`, etc.

## Examples

### Basic Container

```tsx
<Container>
  <Text variant="heading">Welcome to our app</Text>
  <Text variant="body">
    This content is centered and has consistent padding.
  </Text>
</Container>
```

### Custom Padding

```tsx
<Container padding={24}>
  <Text variant="heading">More Spacious Content</Text>
  <Text variant="body">
    This container has 24px padding instead of the default 16px.
  </Text>
</Container>
```

### Custom Maximum Width

```tsx
<Container maxWidth={800} padding={20}>
  <Text variant="heading">Wider Container</Text>
  <Text variant="body">
    This container can grow up to 800px wide, useful for larger screens.
  </Text>
</Container>
```

### With Custom Styling

```tsx
<Container
  padding={16}
  maxWidth={500}
  style={{
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  }}
>
  <Text variant="heading">Styled Container</Text>
  <Text variant="body">
    This container has custom background, border radius, and shadow.
  </Text>
</Container>
```

### Nested Containers

```tsx
<Container padding={20}>
  <Text variant="heading">Outer Container</Text>

  <Container padding={12} style={{ backgroundColor: "#e8f4fd" }}>
    <Text variant="body">Inner Container</Text>
    <Text variant="caption">This is nested inside the outer container.</Text>
  </Container>
</Container>
```

### Responsive Layout

```tsx
<Container maxWidth={400}>
  <Stack spacing={16}>
    <Box p="md" bg="background" borderRadius={8}>
      <Text variant="heading">Card 1</Text>
      <Text variant="body">First card content</Text>
    </Box>

    <Box p="md" bg="background" borderRadius={8}>
      <Text variant="heading">Card 2</Text>
      <Text variant="body">Second card content</Text>
    </Box>
  </Stack>
</Container>
```

## Use Cases

### Page Layout

```tsx
<SafeAreaView style={{ flex: 1 }}>
  <Container>
    <Stack spacing={16}>
      <Text variant="heading">Page Title</Text>
      <Text variant="body">Page content goes here...</Text>
      <Button onPress={handleAction}>Action Button</Button>
    </Stack>
  </Container>
</SafeAreaView>
```

### Form Container

```tsx
<Container padding={24} maxWidth={450}>
  <Stack spacing={20}>
    <Text variant="heading">Sign Up</Text>

    <Input label="Email" placeholder="Enter your email" />
    <PasswordInput label="Password" placeholder="Enter your password" />

    <Button onPress={handleSignUp}>Create Account</Button>
  </Stack>
</Container>
```

### Content Cards

```tsx
<Container padding={16}>
  <Stack spacing={12}>
    {items.map((item, index) => (
      <Container
        key={index}
        padding={16}
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#e0e0e0",
        }}
      >
        <Text variant="heading">{item.title}</Text>
        <Text variant="body">{item.description}</Text>
      </Container>
    ))}
  </Stack>
</Container>
```

## Best Practices

1. **Use consistent padding**: Stick to common values like 16, 20, or 24px for consistent spacing
2. **Consider screen sizes**: Use appropriate `maxWidth` values for different content types
3. **Combine with other components**: Use Container with Stack, Box, and other layout components for complex layouts
4. **Accessibility**: Container inherits accessibility features from View component

## Accessibility

The Container component inherits all accessibility features from React Native's `View` component:

- Supports `accessibilityLabel` and `accessibilityHint`
- Maintains proper focus management
- Works with screen readers

```tsx
<Container
  accessibilityLabel="Main content area"
  accessibilityHint="Contains the main page content"
>
  <Text>Accessible content</Text>
</Container>
```
