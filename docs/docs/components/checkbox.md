# Checkbox

The Checkbox component provides a customizable checkbox input with proper accessibility support.

## Basic Usage

```tsx
import { Checkbox } from "re-native-ui";

const [isChecked, setIsChecked] = useState(false);

<Checkbox
  checked={isChecked}
  onValueChange={setIsChecked}
  label="Accept terms and conditions"
/>;
```

## Props

| Prop            | Type                       | Default     | Description                      |
| --------------- | -------------------------- | ----------- | -------------------------------- |
| `checked`       | `boolean`                  | `false`     | Checked state                    |
| `onValueChange` | `(value: boolean) => void` | -           | Value change handler             |
| `label`         | `string`                   | -           | Checkbox label                   |
| `disabled`      | `boolean`                  | `false`     | Disabled state                   |
| `size`          | `'sm' \| 'md' \| 'lg'`     | `'md'`      | Checkbox size                    |
| `color`         | `string`                   | `'primary'` | Checkbox color (theme color key) |
| `borderColor`   | `string`                   | `'border'`  | Border color (theme color key)   |
| `borderWidth`   | `number`                   | `2`         | Border width                     |
| `borderRadius`  | `number`                   | `4`         | Border radius                    |
| `style`         | `StyleProp<ViewStyle>`     | -           | Additional styles                |

## Examples

### Basic Checkbox

```tsx
const [agreed, setAgreed] = useState(false);

<Checkbox
  checked={agreed}
  onValueChange={setAgreed}
  label="I agree to the terms and conditions"
/>;
```

### Disabled State

```tsx
<Checkbox checked={true} disabled={true} label="This checkbox is disabled" />
```

### Different Sizes

```tsx
<Stack spacing={12}>
  <Checkbox
    size="sm"
    checked={true}
    onValueChange={() => {}}
    label="Small checkbox"
  />
  <Checkbox
    size="md"
    checked={true}
    onValueChange={() => {}}
    label="Medium checkbox"
  />
  <Checkbox
    size="lg"
    checked={true}
    onValueChange={() => {}}
    label="Large checkbox"
  />
</Stack>
```

### Custom Colors

```tsx
<Checkbox
  checked={true}
  onValueChange={() => {}}
  color="secondary"
  borderColor="secondary"
  label="Custom colored checkbox"
/>
```

### Multiple Checkboxes

```tsx
const [preferences, setPreferences] = useState({
  email: false,
  push: false,
  sms: false,
});

const handlePreferenceChange = (key: string, value: boolean) => {
  setPreferences((prev) => ({ ...prev, [key]: value }));
};

<Stack spacing={8}>
  <Checkbox
    checked={preferences.email}
    onValueChange={(value) => handlePreferenceChange("email", value)}
    label="Email notifications"
  />
  <Checkbox
    checked={preferences.push}
    onValueChange={(value) => handlePreferenceChange("push", value)}
    label="Push notifications"
  />
  <Checkbox
    checked={preferences.sms}
    onValueChange={(value) => handlePreferenceChange("sms", value)}
    label="SMS notifications"
  />
</Stack>;
```

## Accessibility

The Checkbox component includes built-in accessibility features:

- Proper `accessibilityRole="checkbox"`
- `accessibilityState` for checked and disabled states
- `accessibilityLabel` from the label prop
- Support for `accessibilityHint`

```tsx
<Checkbox
  checked={isChecked}
  onValueChange={setIsChecked}
  label="Accept terms and conditions"
  accessibilityHint="Required to proceed with registration"
/>
```

## Form Integration

The Checkbox works well with form libraries like react-hook-form:

```tsx
import { useForm, Controller } from "react-hook-form";
import { Checkbox } from "re-native-ui";

const { control, handleSubmit } = useForm();

<Controller
  name="agreed"
  control={control}
  defaultValue={false}
  render={({ field: { onChange, value } }) => (
    <Checkbox
      checked={value}
      onValueChange={onChange}
      label="I agree to the terms and conditions"
    />
  )}
/>;
```

## Custom Styling

```tsx
<Checkbox
  checked={true}
  onValueChange={() => {}}
  label="Custom styled checkbox"
  style={{
    marginVertical: 8,
    paddingHorizontal: 16,
  }}
  color="secondary"
  borderWidth={3}
  borderRadius={6}
/>
```
