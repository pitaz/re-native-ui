---
title: Spacer
description: A simple spacing component for adding consistent gaps between elements
---

# Spacer

The Spacer component provides a simple way to add consistent spacing between elements. It's a lightweight utility component that creates either vertical or horizontal space.

## Basic Usage

```tsx
import { Spacer } from "react-native-ui";

<Text>First element</Text>
<Spacer />
<Text>Second element</Text>
```

## Props

| Prop        | Type                         | Default      | Description                                 |
| ----------- | ---------------------------- | ------------ | ------------------------------------------- |
| `size`      | `number \| string`           | `8`          | Size of the spacer (in pixels or CSS units) |
| `direction` | `'horizontal' \| 'vertical'` | `'vertical'` | Direction of the spacer (width or height)   |

## Examples

### Basic Vertical Spacer (Default)

```tsx
<Text variant="heading">Title</Text>
<Spacer />
<Text variant="body">Content with default 8px spacing</Text>
```

### Custom Size Vertical Spacer

```tsx
<Text variant="heading">Title</Text>
<Spacer size={16} />
<Text variant="body">Content with 16px spacing</Text>
<Spacer size={32} />
<Text variant="caption">More content with 32px spacing</Text>
```

### Horizontal Spacer

```tsx
<Stack direction="row" style={{ alignItems: "center" }}>
  <Text variant="body">Left text</Text>
  <Spacer direction="horizontal" size={20} />
  <Text variant="body">Right text</Text>
</Stack>
```

### Different Spacing Sizes

```tsx
<Stack>
  <Text variant="body">Small spacing</Text>
  <Spacer size={4} />
  <Text variant="body">4px gap</Text>

  <Spacer size={8} />
  <Text variant="body">Medium spacing</Text>
  <Spacer size={8} />
  <Text variant="body">8px gap</Text>

  <Spacer size={16} />
  <Text variant="body">Large spacing</Text>
  <Spacer size={16} />
  <Text variant="body">16px gap</Text>

  <Spacer size={24} />
  <Text variant="body">Extra large spacing</Text>
  <Spacer size={24} />
  <Text variant="body">24px gap</Text>
</Stack>
```

### Mixed Direction Spacers

```tsx
<Stack>
  <Text variant="heading">Section Title</Text>
  <Spacer size={12} />

  <Stack direction="row" style={{ alignItems: "center" }}>
    <Text variant="body">Label:</Text>
    <Spacer direction="horizontal" size={8} />
    <Text variant="body">Value</Text>
  </Stack>

  <Spacer size={16} />

  <Stack direction="row" style={{ alignItems: "center" }}>
    <Text variant="body">Another Label:</Text>
    <Spacer direction="horizontal" size={8} />
    <Text variant="body">Another Value</Text>
  </Stack>
</Stack>
```

### Form Layout with Spacers

```tsx
<Stack>
  <Text variant="heading">Contact Form</Text>
  <Spacer size={16} />

  <Input label="Name" placeholder="Enter your name" />
  <Spacer size={12} />

  <Input label="Email" placeholder="Enter your email" />
  <Spacer size={12} />

  <Input label="Phone" placeholder="Enter your phone" />
  <Spacer size={20} />

  <Stack direction="row" spacing={12}>
    <Button variant="outline" style={{ flex: 1 }}>
      Cancel
    </Button>
    <Button style={{ flex: 1 }}>Submit</Button>
  </Stack>
</Stack>
```

### Card Layout with Spacers

```tsx
<Box bg="background" p="md" style={{ borderRadius: 8 }}>
  <Text variant="heading">Card Title</Text>
  <Spacer size={8} />
  <Text variant="body">Card description goes here.</Text>
  <Spacer size={16} />

  <Stack direction="row" spacing={8}>
    <Button size="sm" variant="outline">
      Edit
    </Button>
    <Spacer direction="horizontal" size={8} />
    <Button size="sm" variant="ghost">
      Delete
    </Button>
  </Stack>
</Box>
```

## Use Cases

### Page Sections

```tsx
<Container>
  <Text variant="heading">Welcome Page</Text>
  <Spacer size={16} />

  <Text variant="subheading">Getting Started</Text>
  <Spacer size={8} />
  <Text variant="body">Follow these steps to get started with our app.</Text>
  <Spacer size={24} />

  <Text variant="subheading">Features</Text>
  <Spacer size={8} />
  <Text variant="body">Discover what makes our app special.</Text>
  <Spacer size={24} />

  <Button>Get Started</Button>
</Container>
```

### List Items with Spacing

```tsx
<Stack>
  {items.map((item, index) => (
    <React.Fragment key={index}>
      <Box bg="background" p="md" style={{ borderRadius: 8 }}>
        <Text variant="heading">{item.title}</Text>
        <Spacer size={4} />
        <Text variant="body">{item.description}</Text>
      </Box>
      {index < items.length - 1 && <Spacer size={12} />}
    </React.Fragment>
  ))}
</Stack>
```

### Navigation Bar with Spacers

```tsx
<Stack
  direction="row"
  style={{
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    alignItems: "center",
  }}
>
  <Text variant="heading">App Title</Text>
  <Spacer direction="horizontal" size={20} />
  <Text onPress={() => navigate("Home")}>Home</Text>
  <Spacer direction="horizontal" size={16} />
  <Text onPress={() => navigate("Profile")}>Profile</Text>
  <Spacer direction="horizontal" size={16} />
  <Text onPress={() => navigate("Settings")}>Settings</Text>
</Stack>
```

### Form Field Groups

```tsx
<Stack>
  <Text variant="heading">Personal Information</Text>
  <Spacer size={16} />

  <Input label="First Name" placeholder="Enter first name" />
  <Spacer size={12} />
  <Input label="Last Name" placeholder="Enter last name" />
  <Spacer size={20} />

  <Text variant="heading">Contact Information</Text>
  <Spacer size={16} />

  <Input label="Email" placeholder="Enter email" keyboardType="email-address" />
  <Spacer size={12} />
  <Input label="Phone" placeholder="Enter phone" keyboardType="phone-pad" />
  <Spacer size={24} />

  <Button>Save Information</Button>
</Stack>
```

### Status Indicators with Spacing

```tsx
<Stack direction="row" style={{ alignItems: "center" }}>
  <Box
    bg="primary"
    style={{
      width: 8,
      height: 8,
      borderRadius: 4,
    }}
  />
  <Spacer direction="horizontal" size={8} />
  <Text variant="body">Online</Text>
  <Spacer direction="horizontal" size={16} />
  <Text variant="caption">Last seen 2 minutes ago</Text>
</Stack>
```

## Best Practices

1. **Use consistent spacing**: Stick to common values like 4, 8, 12, 16, 20, or 24px for consistent layouts
2. **Combine with other components**: Use Spacer with Stack, Container, and other layout components
3. **Consider semantic meaning**: Use Spacer when you need simple spacing, use Stack when you need more complex layouts
4. **Accessibility**: Spacer is purely visual and doesn't affect accessibility

## Performance

The Spacer component is highly optimized:

- Minimal re-renders
- Lightweight implementation
- No complex calculations

## Comparison with Other Components

- **Spacer vs Stack**: Spacer is for simple gaps, Stack is for complex layouts with consistent spacing
- **Spacer vs margin/padding**: Spacer provides a more semantic way to add spacing
- **Spacer vs View with style**: Spacer is more concise and purpose-built for spacing

## Accessibility

The Spacer component is purely visual and doesn't affect accessibility:

- No semantic meaning
- Screen readers ignore it
- Doesn't interfere with focus order

## Tips

- Use Spacer when you need simple, consistent spacing between elements
- Consider using Stack with spacing prop for more complex layouts
- Combine Spacer with other layout components for flexible designs
- Use consistent spacing values throughout your app for visual harmony
