---
title: RadioGroup
description: A radio button group component for single selection from multiple options
---

# RadioGroup

The RadioGroup component provides a set of radio buttons for single selection from multiple options. It's perfect for forms, surveys, and preference selection.

## Basic Usage

```tsx
import { RadioGroup } from "re-native-ui";

const [selectedValue, setSelectedValue] = useState("option1");

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

<RadioGroup
  label="Select an option"
  value={selectedValue}
  onChange={setSelectedValue}
  options={options}
/>;
```

## Props

| Prop       | Type                                | Default | Description                                    |
| ---------- | ----------------------------------- | ------- | ---------------------------------------------- |
| `label`    | `string`                            | -       | Label text displayed above the radio group     |
| `value`    | `string \| number`                  | -       | Currently selected option value                |
| `onChange` | `(value: string \| number) => void` | -       | Callback function when selection changes       |
| `options`  | `RadioOption[]`                     | -       | Array of radio options                         |
| `error`    | `string`                            | -       | Error message to display below the radio group |

### RadioOption Type

```tsx
type RadioOption = {
  label: string;
  value: string | number;
};
```

## Examples

### Basic Radio Group

```tsx
const [gender, setGender] = useState("");

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

<RadioGroup
  label="Gender"
  value={gender}
  onChange={setGender}
  options={genderOptions}
/>;
```

### Radio Group with Error State

```tsx
const [experience, setExperience] = useState("");
const [error, setError] = useState("");

const experienceOptions = [
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
];

<RadioGroup
  label="Experience Level"
  value={experience}
  onChange={(value) => {
    setExperience(value);
    setError(""); // Clear error when user makes a selection
  }}
  options={experienceOptions}
  error={error}
/>;
```

### Numeric Values

```tsx
const [age, setAge] = useState(0);

const ageOptions = [
  { label: "18-25", value: 1 },
  { label: "26-35", value: 2 },
  { label: "36-45", value: 3 },
  { label: "46+", value: 4 },
];

<RadioGroup
  label="Age Range"
  value={age}
  onChange={setAge}
  options={ageOptions}
/>;
```

### Multiple Radio Groups

```tsx
const [preferences, setPreferences] = useState({
  theme: "",
  language: "",
  notifications: "",
});

const themeOptions = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "Auto", value: "auto" },
];

const languageOptions = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
];

const notificationOptions = [
  { label: "All notifications", value: "all" },
  { label: "Important only", value: "important" },
  { label: "None", value: "none" },
];

<Stack spacing={20}>
  <RadioGroup
    label="Theme Preference"
    value={preferences.theme}
    onChange={(value) => setPreferences((prev) => ({ ...prev, theme: value }))}
    options={themeOptions}
  />

  <RadioGroup
    label="Language"
    value={preferences.language}
    onChange={(value) =>
      setPreferences((prev) => ({ ...prev, language: value }))
    }
    options={languageOptions}
  />

  <RadioGroup
    label="Notification Settings"
    value={preferences.notifications}
    onChange={(value) =>
      setPreferences((prev) => ({ ...prev, notifications: value }))
    }
    options={notificationOptions}
  />
</Stack>;
```

### Radio Group with Custom Styling

```tsx
const [plan, setPlan] = useState("");

const planOptions = [
  { label: "Basic Plan - $9/month", value: "basic" },
  { label: "Pro Plan - $19/month", value: "pro" },
  { label: "Enterprise Plan - $49/month", value: "enterprise" },
];

<Box p="md" bg="background" style={{ borderRadius: 8 }}>
  <RadioGroup
    label="Choose Your Plan"
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
  accountType: "",
  newsletter: "",
});

const accountTypeOptions = [
  { label: "Personal Account", value: "personal" },
  { label: "Business Account", value: "business" },
  { label: "Student Account", value: "student" },
];

const newsletterOptions = [
  { label: "Yes, send me updates", value: "yes" },
  { label: "No, thanks", value: "no" },
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

    <RadioGroup
      label="Account Type"
      value={formData.accountType}
      onChange={(value) =>
        setFormData((prev) => ({ ...prev, accountType: value }))
      }
      options={accountTypeOptions}
    />

    <RadioGroup
      label="Newsletter Subscription"
      value={formData.newsletter}
      onChange={(value) =>
        setFormData((prev) => ({ ...prev, newsletter: value }))
      }
      options={newsletterOptions}
    />

    <Button
      disabled={!formData.email || !formData.password || !formData.accountType}
      onPress={handleSubmit}
    >
      Create Account
    </Button>
  </Stack>
</Container>;
```

### Survey Form

```tsx
const [survey, setSurvey] = useState({
  satisfaction: "",
  recommendation: "",
  improvement: "",
});

const satisfactionOptions = [
  { label: "Very Satisfied", value: "very_satisfied" },
  { label: "Satisfied", value: "satisfied" },
  { label: "Neutral", value: "neutral" },
  { label: "Dissatisfied", value: "dissatisfied" },
  { label: "Very Dissatisfied", value: "very_dissatisfied" },
];

const recommendationOptions = [
  { label: "Definitely", value: "definitely" },
  { label: "Probably", value: "probably" },
  { label: "Not sure", value: "not_sure" },
  { label: "Probably not", value: "probably_not" },
  { label: "Definitely not", value: "definitely_not" },
];

const improvementOptions = [
  { label: "User Interface", value: "ui" },
  { label: "Performance", value: "performance" },
  { label: "Features", value: "features" },
  { label: "Customer Support", value: "support" },
  { label: "Documentation", value: "documentation" },
];

<Container>
  <Stack spacing={24}>
    <Text variant="heading">Customer Satisfaction Survey</Text>

    <RadioGroup
      label="How satisfied are you with our product?"
      value={survey.satisfaction}
      onChange={(value) =>
        setSurvey((prev) => ({ ...prev, satisfaction: value }))
      }
      options={satisfactionOptions}
    />

    <RadioGroup
      label="Would you recommend our product to others?"
      value={survey.recommendation}
      onChange={(value) =>
        setSurvey((prev) => ({ ...prev, recommendation: value }))
      }
      options={recommendationOptions}
    />

    <RadioGroup
      label="What area should we improve the most?"
      value={survey.improvement}
      onChange={(value) =>
        setSurvey((prev) => ({ ...prev, improvement: value }))
      }
      options={improvementOptions}
    />

    <Button onPress={handleSubmitSurvey}>Submit Survey</Button>
  </Stack>
</Container>;
```

### Settings Configuration

```tsx
const [settings, setSettings] = useState({
  displayMode: "",
  dataSync: "",
  privacy: "",
});

const displayModeOptions = [
  { label: "List View", value: "list" },
  { label: "Grid View", value: "grid" },
  { label: "Compact View", value: "compact" },
];

const dataSyncOptions = [
  { label: "Sync automatically", value: "auto" },
  { label: "Sync on WiFi only", value: "wifi" },
  { label: "Manual sync only", value: "manual" },
];

const privacyOptions = [
  { label: "Public profile", value: "public" },
  { label: "Friends only", value: "friends" },
  { label: "Private", value: "private" },
];

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Display Settings</Text>

    <RadioGroup
      label="Default Display Mode"
      value={settings.displayMode}
      onChange={(value) =>
        setSettings((prev) => ({ ...prev, displayMode: value }))
      }
      options={displayModeOptions}
    />

    <Divider />

    <Text variant="heading">Data Settings</Text>

    <RadioGroup
      label="Data Synchronization"
      value={settings.dataSync}
      onChange={(value) =>
        setSettings((prev) => ({ ...prev, dataSync: value }))
      }
      options={dataSyncOptions}
    />

    <Divider />

    <Text variant="heading">Privacy Settings</Text>

    <RadioGroup
      label="Profile Visibility"
      value={settings.privacy}
      onChange={(value) => setSettings((prev) => ({ ...prev, privacy: value }))}
      options={privacyOptions}
    />
  </Stack>
</Container>;
```

### Quiz Application

```tsx
const [currentQuestion, setCurrentQuestion] = useState(0);
const [answers, setAnswers] = useState({});

const questions = [
  {
    question: "What is the capital of France?",
    options: [
      { label: "London", value: "london" },
      { label: "Paris", value: "paris" },
      { label: "Berlin", value: "berlin" },
      { label: "Madrid", value: "madrid" },
    ],
    correct: "paris",
  },
  // ... more questions
];

const currentQ = questions[currentQuestion];

<Container>
  <Stack spacing={20}>
    <Text variant="heading">
      Question {currentQuestion + 1} of {questions.length}
    </Text>
    <Text variant="body">{currentQ.question}</Text>

    <RadioGroup
      value={answers[currentQuestion] || ""}
      onChange={(value) =>
        setAnswers((prev) => ({ ...prev, [currentQuestion]: value }))
      }
      options={currentQ.options}
    />

    <Stack direction="row" spacing={12}>
      <Button
        variant="outline"
        onPress={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
        disabled={currentQuestion === 0}
      >
        Previous
      </Button>
      <Button
        onPress={() =>
          setCurrentQuestion((prev) => Math.min(questions.length - 1, prev + 1))
        }
        disabled={currentQuestion === questions.length - 1}
      >
        Next
      </Button>
    </Stack>
  </Stack>
</Container>;
```

## Best Practices

1. **Use clear labels**: Make option labels descriptive and easy to understand
2. **Group related options**: Use logical groupings for better organization
3. **Handle errors gracefully**: Use the error prop to show validation messages
4. **Provide default values**: Consider providing sensible defaults when appropriate
5. **Accessibility**: Ensure radio groups are accessible to screen readers

## Accessibility

The RadioGroup component includes built-in accessibility features:

- Proper `accessibilityRole="radio"`
- `accessibilityState` for checked/unchecked states
- Support for `accessibilityLabel` and `accessibilityHint`

```tsx
<RadioGroup
  label="Select your preference"
  value={selectedValue}
  onChange={setSelectedValue}
  options={options}
  accessibilityLabel="Radio button group for preference selection"
  accessibilityHint="Select one option from the available choices"
/>
```

## Theme Integration

The RadioGroup component automatically uses colors from your theme:

- Outer circle border uses `theme.colors.border`
- Inner circle (selected state) uses `theme.colors.primary`
- Label text uses `theme.colors.text`
- Error text is red for visibility

## Performance

The RadioGroup component is optimized for performance:

- Minimal re-renders
- Efficient option rendering
- Lightweight implementation

## Comparison with Other Components

- **RadioGroup vs CheckBox**: RadioGroup is for single selection, CheckBox is for multiple selections
- **RadioGroup vs Switch**: RadioGroup is for multiple choice, Switch is for boolean toggles
- **RadioGroup vs Select**: RadioGroup shows all options, Select uses a dropdown
