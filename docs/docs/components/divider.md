---
title: Divider
description: A simple divider component for creating visual separation between elements
---

# Divider

The Divider component creates visual separation between elements with customizable thickness, color, and direction. It's perfect for creating clean, organized layouts.

## Basic Usage

```tsx
import { Divider } from "react-native-ui";

<Text>Content above</Text>
<Divider />
<Text>Content below</Text>
```

## Props

| Prop        | Type                         | Default        | Description                                  |
| ----------- | ---------------------------- | -------------- | -------------------------------------------- |
| `thickness` | `number`                     | `1`            | Thickness of the divider (in pixels)         |
| `color`     | `string`                     | `"#E0E0E0"`    | Color of the divider                         |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Direction of the divider                     |
| `length`    | `number \| string`           | `"100%"`       | Length of the divider (pixels or percentage) |

## Examples

### Basic Horizontal Divider (Default)

```tsx
<Text variant="heading">Section Title</Text>
<Divider />
<Text variant="body">Section content goes here.</Text>
```

### Custom Thickness

```tsx
<Text variant="heading">Thin Divider</Text>
<Divider thickness={1} />
<Text variant="body">1px thickness</Text>

<Spacer size={16} />

<Text variant="heading">Thick Divider</Text>
<Divider thickness={4} />
<Text variant="body">4px thickness</Text>
```

### Custom Colors

```tsx
<Text variant="heading">Gray Divider</Text>
<Divider color="#E0E0E0" />
<Text variant="body">Default gray color</Text>

<Spacer size={16} />

<Text variant="heading">Colored Divider</Text>
<Divider color="#007AFF" />
<Text variant="body">Blue divider</Text>

<Spacer size={16} />

<Text variant="heading">Dark Divider</Text>
<Divider color="#333333" />
<Text variant="body">Dark divider for contrast</Text>
```

### Vertical Divider

```tsx
<Stack direction="row" style={{ alignItems: "center" }}>
  <Text variant="body">Left content</Text>
  <Spacer direction="horizontal" size={16} />
  <Divider direction="vertical" length={20} />
  <Spacer direction="horizontal" size={16} />
  <Text variant="body">Right content</Text>
</Stack>
```

### Custom Length

```tsx
<Stack spacing={16}>
  <Text variant="heading">Full Width Divider</Text>
  <Divider length="100%" />
  <Text variant="body">Spans the full width</Text>

  <Text variant="heading">Half Width Divider</Text>
  <Divider length="50%" />
  <Text variant="body">Spans half the width</Text>

  <Text variant="heading">Fixed Width Divider</Text>
  <Divider length={200} />
  <Text variant="body">200px wide divider</Text>
</Stack>
```

### Styled Dividers

```tsx
<Stack spacing={16}>
  <Text variant="heading">Subtle Divider</Text>
  <Divider thickness={1} color="#F0F0F0" />
  <Text variant="body">Very light gray for subtle separation</Text>

  <Text variant="heading">Bold Divider</Text>
  <Divider thickness={3} color="#333333" />
  <Text variant="body">Thick dark divider for strong separation</Text>

  <Text variant="heading">Colored Divider</Text>
  <Divider thickness={2} color="#FF6B6B" />
  <Text variant="body">Red divider for emphasis</Text>
</Stack>
```

## Use Cases

### List Separators

```tsx
<Stack>
  {items.map((item, index) => (
    <React.Fragment key={index}>
      <Stack spacing={8}>
        <Text variant="heading">{item.title}</Text>
        <Text variant="body">{item.description}</Text>
      </Stack>
      {index < items.length - 1 && <Divider />}
    </React.Fragment>
  ))}
</Stack>
```

### Form Sections

```tsx
<Stack spacing={20}>
  <Stack spacing={12}>
    <Text variant="heading">Personal Information</Text>
    <Input label="First Name" placeholder="Enter first name" />
    <Input label="Last Name" placeholder="Enter last name" />
  </Stack>

  <Divider />

  <Stack spacing={12}>
    <Text variant="heading">Contact Information</Text>
    <Input label="Email" placeholder="Enter email" />
    <Input label="Phone" placeholder="Enter phone" />
  </Stack>
</Stack>
```

### Navigation Menu

```tsx
<Stack spacing={0}>
  <Stack direction="row" spacing={12} style={{ padding: 16 }}>
    <Text variant="body">Home</Text>
    <Divider direction="vertical" length={20} />
    <Text variant="body">Profile</Text>
    <Divider direction="vertical" length={20} />
    <Text variant="body">Settings</Text>
  </Stack>
</Stack>
```

### Card Layout

```tsx
<Box bg="background" p="md" style={{ borderRadius: 8 }}>
  <Stack spacing={12}>
    <Text variant="heading">Card Title</Text>
    <Text variant="body">Card description goes here.</Text>

    <Divider />

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

### Settings List

```tsx
<Stack spacing={0}>
  {settings.map((setting, index) => (
    <React.Fragment key={index}>
      <Stack spacing={8} style={{ padding: 16 }}>
        <Stack direction="row" spacing={12}>
          <Text variant="body" style={{ flex: 1 }}>
            {setting.title}
          </Text>
          <Text variant="caption">{setting.value}</Text>
        </Stack>
        {setting.description && (
          <Text variant="caption">{setting.description}</Text>
        )}
      </Stack>
      {index < settings.length - 1 && <Divider />}
    </React.Fragment>
  ))}
</Stack>
```

### Header with Divider

```tsx
<Stack spacing={12}>
  <Stack direction="row" spacing={16} style={{ alignItems: "center" }}>
    <Text variant="heading">Page Title</Text>
    <Divider direction="vertical" length={24} />
    <Text variant="caption">Last updated: Today</Text>
  </Stack>

  <Divider />

  <Text variant="body">Page content goes here...</Text>
</Stack>
```

### Tab Navigation

```tsx
<Stack>
  <Stack direction="row" spacing={0}>
    {tabs.map((tab, index) => (
      <React.Fragment key={index}>
        <Box
          p="md"
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: tab.active ? "#f0f0f0" : "transparent",
          }}
        >
          <Text variant="body">{tab.label}</Text>
        </Box>
        {index < tabs.length - 1 && (
          <Divider direction="vertical" length={40} />
        )}
      </React.Fragment>
    ))}
  </Stack>
  <Divider />
</Stack>
```

## Best Practices

1. **Use consistent styling**: Stick to consistent thickness and colors throughout your app
2. **Consider context**: Use lighter colors for subtle separation, darker colors for strong separation
3. **Combine with spacing**: Use Divider with Spacer or Stack for better visual hierarchy
4. **Accessibility**: Divider is purely visual and doesn't affect accessibility

## Performance

The Divider component is highly optimized:

- Minimal re-renders
- Lightweight implementation
- No complex calculations

## Comparison with Other Components

- **Divider vs Spacer**: Divider creates visual separation, Spacer creates space
- **Divider vs border**: Divider is more flexible and reusable
- **Divider vs View with style**: Divider provides a more semantic way to create separators

## Accessibility

The Divider component is purely visual and doesn't affect accessibility:

- No semantic meaning
- Screen readers ignore it
- Doesn't interfere with focus order

## Tips

- Use dividers to create clear visual separation between different sections
- Consider using different thicknesses for different levels of separation
- Use vertical dividers sparingly to avoid cluttered layouts
- Combine dividers with proper spacing for better visual hierarchy
