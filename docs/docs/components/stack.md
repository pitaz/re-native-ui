---
title: Stack
description: A flexible layout component for arranging elements with consistent spacing
---

# Stack

The Stack component provides a simple and flexible way to arrange elements with consistent spacing. It's perfect for creating vertical or horizontal layouts with uniform gaps between items.

## Basic Usage

```tsx
import { Stack } from "re-native-ui";

<Stack>
  <Text>First item</Text>
  <Text>Second item</Text>
  <Text>Third item</Text>
</Stack>;
```

## Props

| Prop        | Type                | Default    | Description                                       |
| ----------- | ------------------- | ---------- | ------------------------------------------------- |
| `children`  | `ReactNode[]`       | -          | Array of child elements to stack                  |
| `direction` | `'row' \| 'column'` | `'column'` | Direction to stack items (vertical or horizontal) |
| `spacing`   | `number`            | `8`        | Space between items (in pixels)                   |
| `style`     | `ViewStyle`         | -          | Additional styles to apply                        |

## Examples

### Vertical Stack (Default)

```tsx
<Stack spacing={12}>
  <Text variant="heading">Title</Text>
  <Text variant="body">Description text</Text>
  <Button onPress={() => console.log("Pressed")}>Action</Button>
</Stack>
```

### Horizontal Stack

```tsx
<Stack direction="row" spacing={16}>
  <Button variant="outline">Cancel</Button>
  <Button>Save</Button>
</Stack>
```

### Different Spacing Values

```tsx
<Stack spacing={4}>
  <Text variant="caption">Small spacing</Text>
  <Text variant="caption">4px between items</Text>
</Stack>

<Stack spacing={16}>
  <Text variant="body">Medium spacing</Text>
  <Text variant="body">16px between items</Text>
</Stack>

<Stack spacing={32}>
  <Text variant="heading">Large spacing</Text>
  <Text variant="body">32px between items</Text>
</Stack>
```

### Nested Stacks

```tsx
<Stack spacing={20}>
  <Stack spacing={8}>
    <Text variant="heading">Section 1</Text>
    <Text variant="body">Content for section 1</Text>
  </Stack>

  <Stack spacing={8}>
    <Text variant="heading">Section 2</Text>
    <Text variant="body">Content for section 2</Text>
  </Stack>
</Stack>
```

### Mixed Direction Stacks

```tsx
<Stack spacing={16}>
  <Text variant="heading">Form Section</Text>

  <Stack direction="row" spacing={12}>
    <Input placeholder="First Name" style={{ flex: 1 }} />
    <Input placeholder="Last Name" style={{ flex: 1 }} />
  </Stack>

  <Input placeholder="Email" />
  <Button>Submit</Button>
</Stack>
```

### With Custom Styling

```tsx
<Stack
  spacing={16}
  style={{
    padding: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  }}
>
  <Text variant="heading">Styled Container</Text>
  <Text variant="body">This stack has custom background and padding.</Text>
  <Button>Action Button</Button>
</Stack>
```

## Use Cases

### Form Layout

```tsx
<Container>
  <Stack spacing={20}>
    <Text variant="heading">Sign Up</Text>

    <Stack spacing={12}>
      <Input label="Email" placeholder="Enter your email" />
      <PasswordInput label="Password" placeholder="Enter your password" />
      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm your password"
      />
    </Stack>

    <Stack direction="row" spacing={12}>
      <Button variant="outline" style={{ flex: 1 }}>
        Cancel
      </Button>
      <Button style={{ flex: 1 }}>Sign Up</Button>
    </Stack>
  </Stack>
</Container>
```

### Card Layout

```tsx
<Stack spacing={16}>
  {cards.map((card, index) => (
    <Box key={index} p="md" bg="background" borderRadius={8}>
      <Stack spacing={8}>
        <Text variant="heading">{card.title}</Text>
        <Text variant="body">{card.description}</Text>
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
  ))}
</Stack>
```

### Navigation Bar

```tsx
<Stack
  direction="row"
  spacing={20}
  style={{
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  }}
>
  <Text variant="heading">App Title</Text>
  <Stack direction="row" spacing={12}>
    <Text onPress={() => navigate("Home")}>Home</Text>
    <Text onPress={() => navigate("Profile")}>Profile</Text>
    <Text onPress={() => navigate("Settings")}>Settings</Text>
  </Stack>
</Stack>
```

### Settings List

```tsx
<Stack spacing={0}>
  {settings.map((setting, index) => (
    <Stack key={index} spacing={8} style={{ padding: 16 }}>
      <Stack direction="row" spacing={12}>
        <Text variant="body" style={{ flex: 1 }}>
          {setting.title}
        </Text>
        <Text variant="caption">{setting.value}</Text>
      </Stack>
      {setting.description && (
        <Text variant="caption">{setting.description}</Text>
      )}
      {index < settings.length - 1 && <Divider />}
    </Stack>
  ))}
</Stack>
```

### Profile Header

```tsx
<Stack spacing={16} style={{ padding: 20 }}>
  <Stack direction="row" spacing={16}>
    <Box
      width={80}
      height={80}
      borderRadius={40}
      bg="primary"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Text variant="heading" style={{ color: "white" }}>
        JD
      </Text>
    </Box>

    <Stack spacing={4} style={{ flex: 1 }}>
      <Text variant="heading">John Doe</Text>
      <Text variant="caption">john.doe@example.com</Text>
      <Text variant="caption">Member since 2023</Text>
    </Stack>
  </Stack>

  <Stack direction="row" spacing={12}>
    <Button variant="outline" style={{ flex: 1 }}>
      Edit Profile
    </Button>
    <Button style={{ flex: 1 }}>Share Profile</Button>
  </Stack>
</Stack>
```

## Best Practices

1. **Use consistent spacing**: Stick to common values like 8, 12, 16, or 20px for consistent layouts
2. **Combine with other components**: Use Stack with Container, Box, and other layout components for complex layouts
3. **Consider responsive design**: Use flex properties for responsive layouts within horizontal stacks
4. **Accessibility**: Stack maintains proper focus order and accessibility features

## Accessibility

The Stack component maintains accessibility features:

- Preserves focus order of child elements
- Works with screen readers
- Maintains proper touch targets

```tsx
<Stack
  spacing={12}
  accessibilityLabel="Form section"
  accessibilityHint="Contains form fields for user input"
>
  <Input accessibilityLabel="Email input" />
  <Button accessibilityLabel="Submit button">Submit</Button>
</Stack>
```

## Performance

The Stack component is optimized for performance:

- Minimal re-renders
- Efficient spacing calculation
- Lightweight implementation

## Comparison with Other Layout Components

- **Stack vs Container**: Stack focuses on spacing between items, Container focuses on overall layout constraints
- **Stack vs Box**: Stack arranges multiple items, Box is for single item styling
- **Stack vs Flexbox**: Stack provides a simpler API for common spacing patterns
