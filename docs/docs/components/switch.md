---
title: Switch
description: A toggle switch component for boolean values
---

# Switch

The Switch component provides a toggle switch for boolean values with customizable styling and error handling. It's perfect for settings, preferences, and feature toggles.

## Basic Usage

```tsx
import { Switch } from "re-native-ui";

const [isEnabled, setIsEnabled] = useState(false);

<Switch
  label="Enable notifications"
  value={isEnabled}
  onChange={setIsEnabled}
/>;
```

## Props

| Prop       | Type                       | Default | Description                                 |
| ---------- | -------------------------- | ------- | ------------------------------------------- |
| `label`    | `string`                   | -       | Label text displayed next to the switch     |
| `value`    | `boolean`                  | -       | Current state of the switch                 |
| `onChange` | `(value: boolean) => void` | -       | Callback function when switch state changes |
| `error`    | `string`                   | -       | Error message to display below the switch   |

## Examples

### Basic Switch

```tsx
const [isEnabled, setIsEnabled] = useState(false);

<Switch value={isEnabled} onChange={setIsEnabled} />;
```

### Switch with Label

```tsx
const [notifications, setNotifications] = useState(true);

<Switch
  label="Push Notifications"
  value={notifications}
  onChange={setNotifications}
/>;
```

### Switch with Error State

```tsx
const [autoSave, setAutoSave] = useState(false);
const [error, setError] = useState("");

<Switch
  label="Auto Save"
  value={autoSave}
  onChange={(value) => {
    setAutoSave(value);
    if (value) {
      setError("Auto save will consume more storage space");
    } else {
      setError("");
    }
  }}
  error={error}
/>;
```

### Multiple Switches

```tsx
const [settings, setSettings] = useState({
  notifications: true,
  darkMode: false,
  autoPlay: true,
  location: false,
});

const updateSetting = (key: string, value: boolean) => {
  setSettings((prev) => ({ ...prev, [key]: value }));
};

<Stack spacing={16}>
  <Switch
    label="Push Notifications"
    value={settings.notifications}
    onChange={(value) => updateSetting("notifications", value)}
  />

  <Switch
    label="Dark Mode"
    value={settings.darkMode}
    onChange={(value) => updateSetting("darkMode", value)}
  />

  <Switch
    label="Auto Play Videos"
    value={settings.autoPlay}
    onChange={(value) => updateSetting("autoPlay", value)}
  />

  <Switch
    label="Location Services"
    value={settings.location}
    onChange={(value) => updateSetting("location", value)}
  />
</Stack>;
```

### Switch with Custom Styling

```tsx
const [isEnabled, setIsEnabled] = useState(false);

<Box p="md" bg="background" style={{ borderRadius: 8 }}>
  <Switch label="Premium Features" value={isEnabled} onChange={setIsEnabled} />
  {isEnabled && (
    <Text variant="caption" style={{ color: "#007AFF", marginTop: 8 }}>
      Premium features are now enabled!
    </Text>
  )}
</Box>;
```

## Use Cases

### Settings Screen

```tsx
<Container>
  <Stack spacing={20}>
    <Text variant="heading">Settings</Text>

    <Stack spacing={16}>
      <Text variant="subheading">Notifications</Text>
      <Switch
        label="Push Notifications"
        value={settings.pushNotifications}
        onChange={(value) => updateSetting("pushNotifications", value)}
      />
      <Switch
        label="Email Notifications"
        value={settings.emailNotifications}
        onChange={(value) => updateSetting("emailNotifications", value)}
      />
      <Switch
        label="SMS Notifications"
        value={settings.smsNotifications}
        onChange={(value) => updateSetting("smsNotifications", value)}
      />
    </Stack>

    <Divider />

    <Stack spacing={16}>
      <Text variant="subheading">Privacy</Text>
      <Switch
        label="Location Services"
        value={settings.locationServices}
        onChange={(value) => updateSetting("locationServices", value)}
      />
      <Switch
        label="Analytics"
        value={settings.analytics}
        onChange={(value) => updateSetting("analytics", value)}
      />
    </Stack>
  </Stack>
</Container>
```

### Feature Toggle

```tsx
const [features, setFeatures] = useState({
  beta: false,
  experimental: true,
  debug: false,
});

<Box p="lg" bg="muted">
  <Text variant="heading">Feature Flags</Text>
  <Spacer size={16} />

  <Stack spacing={12}>
    <Switch
      label="Beta Features"
      value={features.beta}
      onChange={(value) => setFeatures((prev) => ({ ...prev, beta: value }))}
    />
    <Switch
      label="Experimental Features"
      value={features.experimental}
      onChange={(value) =>
        setFeatures((prev) => ({ ...prev, experimental: value }))
      }
    />
    <Switch
      label="Debug Mode"
      value={features.debug}
      onChange={(value) => setFeatures((prev) => ({ ...prev, debug: value }))}
    />
  </Stack>
</Box>;
```

### Form Integration

```tsx
const [formData, setFormData] = useState({
  email: "",
  password: "",
  agreeToTerms: false,
  marketingEmails: true,
});

const [errors, setErrors] = useState({});

<Stack spacing={20}>
  <Input
    label="Email"
    value={formData.email}
    onChangeText={(value) => setFormData((prev) => ({ ...prev, email: value }))}
  />

  <PasswordInput
    label="Password"
    value={formData.password}
    onChangeText={(value) =>
      setFormData((prev) => ({ ...prev, password: value }))
    }
  />

  <Switch
    label="I agree to the Terms and Conditions"
    value={formData.agreeToTerms}
    onChange={(value) =>
      setFormData((prev) => ({ ...prev, agreeToTerms: value }))
    }
    error={errors.agreeToTerms}
  />

  <Switch
    label="Receive marketing emails"
    value={formData.marketingEmails}
    onChange={(value) =>
      setFormData((prev) => ({ ...prev, marketingEmails: value }))
    }
  />

  <Button disabled={!formData.agreeToTerms} onPress={handleSubmit}>
    Create Account
  </Button>
</Stack>;
```

### Permission Request

```tsx
const [permissions, setPermissions] = useState({
  camera: false,
  microphone: false,
  location: false,
});

const requestPermission = async (permission: string) => {
  // Request permission logic here
  const granted = await requestCameraPermission(); // Example
  setPermissions((prev) => ({ ...prev, [permission]: granted }));
};

<Stack spacing={16}>
  <Text variant="heading">Permissions</Text>
  <Text variant="body">
    Enable the following permissions to use all features:
  </Text>

  <Switch
    label="Camera Access"
    value={permissions.camera}
    onChange={() => requestPermission("camera")}
  />

  <Switch
    label="Microphone Access"
    value={permissions.microphone}
    onChange={() => requestPermission("microphone")}
  />

  <Switch
    label="Location Access"
    value={permissions.location}
    onChange={() => requestPermission("location")}
  />
</Stack>;
```

## Best Practices

1. **Use descriptive labels**: Make labels clear and descriptive
2. **Handle errors gracefully**: Use the error prop to show validation messages
3. **Group related switches**: Use sections or dividers to organize related switches
4. **Provide feedback**: Consider showing additional information when switches are toggled
5. **Accessibility**: Ensure switches are accessible to screen readers

## Accessibility

The Switch component includes built-in accessibility features:

- Proper `accessibilityRole="switch"`
- `accessibilityState` for checked/unchecked states
- Support for `accessibilityLabel` and `accessibilityHint`

```tsx
<Switch
  label="Dark Mode"
  value={isDarkMode}
  onChange={setIsDarkMode}
  accessibilityLabel="Toggle dark mode"
  accessibilityHint="Enables dark theme for the application"
/>
```

## Theme Integration

The Switch component automatically uses colors from your theme:

- Thumb color uses `theme.colors.primary` when enabled, `theme.colors.muted` when disabled
- Track color uses `theme.colors.primary` when enabled, `theme.colors.border` when disabled
- Label color uses `theme.colors.text`
- Error color is red for visibility

## Performance

The Switch component is optimized for performance:

- Minimal re-renders
- Efficient state management
- Lightweight implementation

## Comparison with Other Components

- **Switch vs CheckBox**: Switch is for boolean toggles, CheckBox is for multiple selections
- **Switch vs Button**: Switch is for settings/preferences, Button is for actions
- **Switch vs RadioGroup**: Switch is for single boolean values, RadioGroup is for multiple choice
