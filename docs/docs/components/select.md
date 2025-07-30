---
title: Select
description: A dropdown select component with modal-based option selection
---

# Select

The Select component provides a dropdown interface for selecting from a list of options. It uses a modal overlay to display the available choices, making it perfect for forms and settings where space is limited.

## Basic Usage

```tsx
import { Select } from "re-native-ui";

const [selectedValue, setSelectedValue] = useState("");

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

<Select
  label="Choose an option"
  placeholder="Select an option"
  value={selectedValue}
  onChange={setSelectedValue}
  options={options}
/>;
```

## Props

| Prop          | Type                      | Default | Description                                 |
| ------------- | ------------------------- | ------- | ------------------------------------------- |
| `label`       | `string`                  | -       | Label text displayed above the select       |
| `placeholder` | `string`                  | -       | Placeholder text when no option is selected |
| `options`     | `SelectOption[]`          | -       | Array of select options                     |
| `value`       | `string \| null`          | -       | Currently selected option value             |
| `onChange`    | `(value: string) => void` | -       | Callback function when selection changes    |
| `error`       | `string`                  | -       | Error message to display below the select   |

### SelectOption Type

```tsx
type SelectOption = {
  label: string;
  value: string;
};
```

## Examples

### Basic Select

```tsx
const [country, setCountry] = useState("");

const countryOptions = [
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "United Kingdom", value: "uk" },
  { label: "Australia", value: "au" },
];

<Select
  label="Country"
  placeholder="Select your country"
  value={country}
  onChange={setCountry}
  options={countryOptions}
/>;
```

### Select with Error State

```tsx
const [category, setCategory] = useState("");
const [error, setError] = useState("");

const categoryOptions = [
  { label: "Technology", value: "tech" },
  { label: "Health", value: "health" },
  { label: "Education", value: "education" },
  { label: "Entertainment", value: "entertainment" },
];

<Select
  label="Category"
  placeholder="Choose a category"
  value={category}
  onChange={(value) => {
    setCategory(value);
    setError(""); // Clear error when user makes a selection
  }}
  options={categoryOptions}
  error={error}
/>;
```

### Multiple Selects

```tsx
const [formData, setFormData] = useState({
  country: "",
  state: "",
  city: "",
});

const countryOptions = [
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
];

const stateOptions = [
  { label: "California", value: "ca" },
  { label: "New York", value: "ny" },
  { label: "Texas", value: "tx" },
];

const cityOptions = [
  { label: "Los Angeles", value: "la" },
  { label: "San Francisco", value: "sf" },
  { label: "San Diego", value: "sd" },
];

<Stack spacing={16}>
  <Select
    label="Country"
    placeholder="Select country"
    value={formData.country}
    onChange={(value) => setFormData((prev) => ({ ...prev, country: value }))}
    options={countryOptions}
  />

  <Select
    label="State"
    placeholder="Select state"
    value={formData.state}
    onChange={(value) => setFormData((prev) => ({ ...prev, state: value }))}
    options={stateOptions}
  />

  <Select
    label="City"
    placeholder="Select city"
    value={formData.city}
    onChange={(value) => setFormData((prev) => ({ ...prev, city: value }))}
    options={cityOptions}
  />
</Stack>;
```

### Select with Custom Styling

```tsx
const [plan, setPlan] = useState("");

const planOptions = [
  { label: "Basic Plan - $9/month", value: "basic" },
  { label: "Pro Plan - $19/month", value: "pro" },
  { label: "Enterprise Plan - $49/month", value: "enterprise" },
];

<Box p="md" bg="background" style={{ borderRadius: 8 }}>
  <Select
    label="Choose Your Plan"
    placeholder="Select a plan"
    value={plan}
    onChange={setPlan}
    options={planOptions}
  />
  {plan && (
    <Text variant="caption" style={{ color: "#007AFF", marginTop: 8 }}>
      You selected the {plan} plan
    </Text>
  )}
</Box>;
```

## Use Cases

### User Registration Form

```tsx
const [formData, setFormData] = useState({
  email: "",
  password: "",
  country: "",
  language: "",
  timezone: "",
});

const countryOptions = [
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "United Kingdom", value: "uk" },
  { label: "Australia", value: "au" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
];

const languageOptions = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Chinese", value: "zh" },
];

const timezoneOptions = [
  { label: "UTC-8 (Pacific Time)", value: "utc-8" },
  { label: "UTC-5 (Eastern Time)", value: "utc-5" },
  { label: "UTC+0 (GMT)", value: "utc+0" },
  { label: "UTC+1 (Central European)", value: "utc+1" },
  { label: "UTC+8 (China Standard)", value: "utc+8" },
];

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Create Account</Text>

    <Input
      label="Email"
      value={formData.email}
      onChangeText={(value) =>
        setFormData((prev) => ({ ...prev, email: value }))
      }
    />

    <PasswordInput
      label="Password"
      value={formData.password}
      onChangeText={(value) =>
        setFormData((prev) => ({ ...prev, password: value }))
      }
    />

    <Select
      label="Country"
      placeholder="Select your country"
      value={formData.country}
      onChange={(value) => setFormData((prev) => ({ ...prev, country: value }))}
      options={countryOptions}
    />

    <Select
      label="Language"
      placeholder="Select your preferred language"
      value={formData.language}
      onChange={(value) =>
        setFormData((prev) => ({ ...prev, language: value }))
      }
      options={languageOptions}
    />

    <Select
      label="Timezone"
      placeholder="Select your timezone"
      value={formData.timezone}
      onChange={(value) =>
        setFormData((prev) => ({ ...prev, timezone: value }))
      }
      options={timezoneOptions}
    />

    <Button
      disabled={!formData.email || !formData.password || !formData.country}
      onPress={handleSubmit}
    >
      Create Account
    </Button>
  </Stack>
</Container>;
```

### Settings Configuration

```tsx
const [settings, setSettings] = useState({
  theme: "",
  currency: "",
  dateFormat: "",
  notificationFrequency: "",
});

const themeOptions = [
  { label: "Light Theme", value: "light" },
  { label: "Dark Theme", value: "dark" },
  { label: "Auto (System)", value: "auto" },
];

const currencyOptions = [
  { label: "US Dollar ($)", value: "usd" },
  { label: "Euro (€)", value: "eur" },
  { label: "British Pound (£)", value: "gbp" },
  { label: "Japanese Yen (¥)", value: "jpy" },
];

const dateFormatOptions = [
  { label: "MM/DD/YYYY", value: "mm/dd/yyyy" },
  { label: "DD/MM/YYYY", value: "dd/mm/yyyy" },
  { label: "YYYY-MM-DD", value: "yyyy-mm-dd" },
];

const notificationOptions = [
  { label: "Immediately", value: "immediate" },
  { label: "Daily Digest", value: "daily" },
  { label: "Weekly Digest", value: "weekly" },
  { label: "Never", value: "never" },
];

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Settings</Text>

    <Stack spacing={16}>
      <Text variant="subheading">Appearance</Text>
      <Select
        label="Theme"
        placeholder="Choose theme"
        value={settings.theme}
        onChange={(value) => setSettings((prev) => ({ ...prev, theme: value }))}
        options={themeOptions}
      />
    </Stack>

    <Divider />

    <Stack spacing={16}>
      <Text variant="subheading">Regional</Text>
      <Select
        label="Currency"
        placeholder="Select currency"
        value={settings.currency}
        onChange={(value) =>
          setSettings((prev) => ({ ...prev, currency: value }))
        }
        options={currencyOptions}
      />

      <Select
        label="Date Format"
        placeholder="Choose date format"
        value={settings.dateFormat}
        onChange={(value) =>
          setSettings((prev) => ({ ...prev, dateFormat: value }))
        }
        options={dateFormatOptions}
      />
    </Stack>

    <Divider />

    <Stack spacing={16}>
      <Text variant="subheading">Notifications</Text>
      <Select
        label="Notification Frequency"
        placeholder="Select frequency"
        value={settings.notificationFrequency}
        onChange={(value) =>
          setSettings((prev) => ({ ...prev, notificationFrequency: value }))
        }
        options={notificationOptions}
      />
    </Stack>
  </Stack>
</Container>;
```

### Filter Interface

```tsx
const [filters, setFilters] = useState({
  category: "",
  sortBy: "",
  priceRange: "",
});

const categoryOptions = [
  { label: "All Categories", value: "all" },
  { label: "Electronics", value: "electronics" },
  { label: "Clothing", value: "clothing" },
  { label: "Books", value: "books" },
  { label: "Home & Garden", value: "home" },
];

const sortOptions = [
  { label: "Relevance", value: "relevance" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Newest First", value: "newest" },
  { label: "Rating", value: "rating" },
];

const priceOptions = [
  { label: "Any Price", value: "any" },
  { label: "Under $10", value: "under_10" },
  { label: "$10 - $50", value: "10_50" },
  { label: "$50 - $100", value: "50_100" },
  { label: "Over $100", value: "over_100" },
];

<Box p="md" bg="muted">
  <Text variant="heading">Filters</Text>
  <Spacer size={16} />

  <Stack spacing={12}>
    <Select
      label="Category"
      placeholder="All categories"
      value={filters.category}
      onChange={(value) => setFilters((prev) => ({ ...prev, category: value }))}
      options={categoryOptions}
    />

    <Select
      label="Sort By"
      placeholder="Sort by"
      value={filters.sortBy}
      onChange={(value) => setFilters((prev) => ({ ...prev, sortBy: value }))}
      options={sortOptions}
    />

    <Select
      label="Price Range"
      placeholder="Any price"
      value={filters.priceRange}
      onChange={(value) =>
        setFilters((prev) => ({ ...prev, priceRange: value }))
      }
      options={priceOptions}
    />
  </Stack>

  <Spacer size={16} />
  <Button onPress={applyFilters}>Apply Filters</Button>
</Box>;
```

### Data Export Options

```tsx
const [exportSettings, setExportSettings] = useState({
  format: "",
  dateRange: "",
  includeMetadata: "",
});

const formatOptions = [
  { label: "CSV (Comma Separated Values)", value: "csv" },
  { label: "JSON (JavaScript Object Notation)", value: "json" },
  { label: "Excel (.xlsx)", value: "excel" },
  { label: "PDF Report", value: "pdf" },
];

const dateRangeOptions = [
  { label: "Last 7 days", value: "7days" },
  { label: "Last 30 days", value: "30days" },
  { label: "Last 3 months", value: "3months" },
  { label: "Last year", value: "1year" },
  { label: "All time", value: "all" },
];

const metadataOptions = [
  { label: "Include all metadata", value: "all" },
  { label: "Include basic metadata only", value: "basic" },
  { label: "No metadata", value: "none" },
];

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Export Data</Text>

    <Select
      label="Export Format"
      placeholder="Choose format"
      value={exportSettings.format}
      onChange={(value) =>
        setExportSettings((prev) => ({ ...prev, format: value }))
      }
      options={formatOptions}
    />

    <Select
      label="Date Range"
      placeholder="Select date range"
      value={exportSettings.dateRange}
      onChange={(value) =>
        setExportSettings((prev) => ({ ...prev, dateRange: value }))
      }
      options={dateRangeOptions}
    />

    <Select
      label="Metadata"
      placeholder="Choose metadata options"
      value={exportSettings.includeMetadata}
      onChange={(value) =>
        setExportSettings((prev) => ({ ...prev, includeMetadata: value }))
      }
      options={metadataOptions}
    />

    <Button
      disabled={!exportSettings.format || !exportSettings.dateRange}
      onPress={handleExport}
    >
      Export Data
    </Button>
  </Stack>
</Container>;
```

## Best Practices

1. **Use clear labels**: Make option labels descriptive and easy to understand
2. **Provide meaningful placeholders**: Use placeholders that guide users on what to select
3. **Handle errors gracefully**: Use the error prop to show validation messages
4. **Group related options**: Use logical groupings for better organization
5. **Accessibility**: Ensure selects are accessible to screen readers

## Accessibility

The Select component includes built-in accessibility features:

- Proper `accessibilityRole="button"`
- `accessibilityState` for expanded/collapsed states
- Support for `accessibilityLabel` and `accessibilityHint`

```tsx
<Select
  label="Choose your country"
  placeholder="Select country"
  value={selectedCountry}
  onChange={setSelectedCountry}
  options={countryOptions}
  accessibilityLabel="Country selection dropdown"
  accessibilityHint="Opens a list of countries to choose from"
/>
```

## Theme Integration

The Select component automatically uses colors from your theme:

- Background color uses `theme.colors.background`
- Text color uses `theme.colors.text`
- Border color uses `theme.colors.border`
- Error text is red for visibility

## Performance

The Select component is optimized for performance:

- Modal only renders when open
- Efficient option rendering with FlatList
- Minimal re-renders
- Lightweight implementation

## Comparison with Other Components

- **Select vs RadioGroup**: Select uses a dropdown, RadioGroup shows all options
- **Select vs Input**: Select is for predefined choices, Input is for free text
- **Select vs CheckBox**: Select is for single choice, CheckBox is for multiple selections
