# Button

The Button component provides a customizable, accessible button with various styles and states.

## Basic Usage

```tsx
import { Button } from "re-native-ui";

<Button onPress={() => console.log("Button pressed!")}>Click Me</Button>;
```

## Props

| Prop           | Type                              | Default     | Description                        |
| -------------- | --------------------------------- | ----------- | ---------------------------------- |
| `children`     | `ReactNode`                       | -           | Button content                     |
| `onPress`      | `() => void`                      | -           | Press handler                      |
| `disabled`     | `boolean`                         | `false`     | Disabled state                     |
| `loading`      | `boolean`                         | `false`     | Loading state                      |
| `variant`      | `'solid' \| 'outline' \| 'ghost'` | `'solid'`   | Button style variant               |
| `size`         | `'sm' \| 'md' \| 'lg'`            | `'md'`      | Button size                        |
| `bg`           | `string`                          | `'primary'` | Background color (theme color key) |
| `color`        | `string`                          | `'white'`   | Text color (theme color key)       |
| `borderColor`  | `string`                          | -           | Border color (for outline variant) |
| `borderWidth`  | `number`                          | `1`         | Border width (for outline variant) |
| `borderRadius` | `number \| string`                | `8`         | Border radius                      |
| `px`           | `string \| number`                | `'md'`      | Horizontal padding                 |
| `py`           | `string \| number`                | `'sm'`      | Vertical padding                   |
| `style`        | `StyleProp<ViewStyle>`            | -           | Additional styles                  |

## Variants

### Solid (Default)

```tsx
<Button variant="solid" bg="primary">
  Solid Button
</Button>
```

### Outline

```tsx
<Button variant="outline" borderColor="primary" color="primary">
  Outline Button
</Button>
```

### Ghost

```tsx
<Button variant="ghost" color="primary">
  Ghost Button
</Button>
```

## Sizes

```tsx
<Stack spacing={8}>
  <Button size="sm">Small Button</Button>
  <Button size="md">Medium Button</Button>
  <Button size="lg">Large Button</Button>
</Stack>
```

## States

### Disabled

```tsx
<Button disabled onPress={() => console.log("This won't fire")}>
  Disabled Button
</Button>
```

### Loading

```tsx
<Button loading onPress={() => console.log("Loading...")}>
  Loading Button
</Button>
```

## Custom Styling

```tsx
<Button
  bg="secondary"
  color="white"
  borderRadius={20}
  px="xl"
  py="md"
  style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 } }}
  onPress={() => console.log("Custom styled button")}
>
  Custom Button
</Button>
```

## Accessibility

The Button component includes built-in accessibility features:

- Proper `accessibilityRole="button"`
- `accessibilityState` for disabled and loading states
- Support for `accessibilityLabel` and `accessibilityHint`

```tsx
<Button
  accessibilityLabel="Submit form"
  accessibilityHint="Submits the current form data"
  onPress={handleSubmit}
>
  Submit
</Button>
```

## Examples

### Form Submit Button

```tsx
<Button
  variant="solid"
  bg="primary"
  size="lg"
  loading={isSubmitting}
  disabled={!isValid}
  onPress={handleSubmit}
>
  {isSubmitting ? "Submitting..." : "Submit Form"}
</Button>
```

### Action Buttons

```tsx
<Stack direction="row" spacing={8}>
  <Button variant="outline" onPress={handleCancel}>
    Cancel
  </Button>
  <Button variant="solid" bg="primary" onPress={handleSave}>
    Save
  </Button>
</Stack>
```

### Icon Button

```tsx
<Button
  variant="ghost"
  size="sm"
  onPress={handleDelete}
  style={{ width: 40, height: 40, borderRadius: 20 }}
>
  🗑️
</Button>
```
