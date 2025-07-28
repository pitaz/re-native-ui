---
title: MaskedInput
description: A text input component with built-in formatting for phone numbers, credit cards, and custom patterns
---

# MaskedInput

The MaskedInput component provides automatic formatting for text input fields, making it perfect for phone numbers, credit card numbers, and other structured data that benefits from visual formatting.

## Basic Usage

```tsx
import { MaskedInput } from "react-native-ui";

const [phoneNumber, setPhoneNumber] = useState("");

<MaskedInput
  label="Phone Number"
  value={phoneNumber}
  onChangeText={setPhoneNumber}
  maskType="phone"
/>;
```

## Props

| Prop           | Type                            | Default | Description                                  |
| -------------- | ------------------------------- | ------- | -------------------------------------------- |
| `label`        | `string`                        | -       | Label text displayed above the input         |
| `value`        | `string`                        | -       | Current input value                          |
| `onChangeText` | `(value: string) => void`       | -       | Callback function when input changes         |
| `error`        | `string`                        | -       | Error message to display below the input     |
| `maskType`     | `'phone' \| 'card' \| 'custom'` | -       | Type of formatting to apply                  |
| `maskPattern`  | `(val: string) => string`       | -       | Custom formatting function (for custom mask) |

**Note:** The MaskedInput component extends all props from React Native's `TextInput` component (except `onChangeText`), so you can use any standard TextInput props like `placeholder`, `style`, etc.

## Examples

### Phone Number Input

```tsx
const [phone, setPhone] = useState("");

<MaskedInput
  label="Phone Number"
  value={phone}
  onChangeText={setPhone}
  maskType="phone"
  placeholder="(555) 123-4567"
/>;
```

### Credit Card Input

```tsx
const [cardNumber, setCardNumber] = useState("");

<MaskedInput
  label="Card Number"
  value={cardNumber}
  onChangeText={setCardNumber}
  maskType="card"
  placeholder="1234 5678 9012 3456"
/>;
```

### Custom Mask Pattern

```tsx
const [ssn, setSsn] = useState("");

const formatSSN = (val: string) => {
  const digits = val.replace(/\D/g, "").slice(0, 9);
  if (digits.length <= 3) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`;
};

<MaskedInput
  label="Social Security Number"
  value={ssn}
  onChangeText={setSsn}
  maskType="custom"
  maskPattern={formatSSN}
  placeholder="123-45-6789"
/>;
```

### Masked Input with Error State

```tsx
const [phone, setPhone] = useState("");
const [error, setError] = useState("");

<MaskedInput
  label="Phone Number"
  value={phone}
  onChangeText={(value) => {
    setPhone(value);
    if (value.replace(/\D/g, "").length < 10) {
      setError("Please enter a complete phone number");
    } else {
      setError("");
    }
  }}
  maskType="phone"
  error={error}
/>;
```

### Multiple Masked Inputs

```tsx
const [formData, setFormData] = useState({
  phone: "",
  cardNumber: "",
  zipCode: "",
});

const formatZipCode = (val: string) => {
  const digits = val.replace(/\D/g, "").slice(0, 5);
  return digits;
};

<Stack spacing={16}>
  <MaskedInput
    label="Phone Number"
    value={formData.phone}
    onChangeText={(value) => setFormData((prev) => ({ ...prev, phone: value }))}
    maskType="phone"
  />

  <MaskedInput
    label="Credit Card"
    value={formData.cardNumber}
    onChangeText={(value) =>
      setFormData((prev) => ({ ...prev, cardNumber: value }))
    }
    maskType="card"
  />

  <MaskedInput
    label="ZIP Code"
    value={formData.zipCode}
    onChangeText={(value) =>
      setFormData((prev) => ({ ...prev, zipCode: value }))
    }
    maskType="custom"
    maskPattern={formatZipCode}
  />
</Stack>;
```

## Use Cases

### Contact Information Form

```tsx
const [contact, setContact] = useState({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Contact Information</Text>

    <Input
      label="First Name"
      value={contact.firstName}
      onChangeText={(value) =>
        setContact((prev) => ({ ...prev, firstName: value }))
      }
    />

    <Input
      label="Last Name"
      value={contact.lastName}
      onChangeText={(value) =>
        setContact((prev) => ({ ...prev, lastName: value }))
      }
    />

    <MaskedInput
      label="Phone Number"
      value={contact.phone}
      onChangeText={(value) =>
        setContact((prev) => ({ ...prev, phone: value }))
      }
      maskType="phone"
      placeholder="(555) 123-4567"
    />

    <Input
      label="Email"
      value={contact.email}
      onChangeText={(value) =>
        setContact((prev) => ({ ...prev, email: value }))
      }
      keyboardType="email-address"
    />

    <Button
      disabled={!contact.firstName || !contact.lastName || !contact.phone}
      onPress={saveContact}
    >
      Save Contact
    </Button>
  </Stack>
</Container>;
```

### Payment Information Form

```tsx
const [payment, setPayment] = useState({
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  cardholderName: "",
});

const formatExpiry = (val: string) => {
  const digits = val.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
};

const formatCVV = (val: string) => {
  return val.replace(/\D/g, "").slice(0, 4);
};

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Payment Information</Text>

    <MaskedInput
      label="Card Number"
      value={payment.cardNumber}
      onChangeText={(value) =>
        setPayment((prev) => ({ ...prev, cardNumber: value }))
      }
      maskType="card"
      placeholder="1234 5678 9012 3456"
    />

    <Stack direction="row" spacing={12}>
      <MaskedInput
        label="Expiry Date"
        value={payment.expiryDate}
        onChangeText={(value) =>
          setPayment((prev) => ({ ...prev, expiryDate: value }))
        }
        maskType="custom"
        maskPattern={formatExpiry}
        placeholder="MM/YY"
        style={{ flex: 1 }}
      />

      <MaskedInput
        label="CVV"
        value={payment.cvv}
        onChangeText={(value) =>
          setPayment((prev) => ({ ...prev, cvv: value }))
        }
        maskType="custom"
        maskPattern={formatCVV}
        placeholder="123"
        style={{ flex: 1 }}
      />
    </Stack>

    <Input
      label="Cardholder Name"
      value={payment.cardholderName}
      onChangeText={(value) =>
        setPayment((prev) => ({ ...prev, cardholderName: value }))
      }
    />

    <Button
      disabled={!payment.cardNumber || !payment.expiryDate || !payment.cvv}
      onPress={processPayment}
    >
      Pay Now
    </Button>
  </Stack>
</Container>;
```

### Address Form

```tsx
const [address, setAddress] = useState({
  street: "",
  city: "",
  state: "",
  zipCode: "",
  phone: "",
});

const formatZipCode = (val: string) => {
  const digits = val.replace(/\D/g, "").slice(0, 5);
  return digits;
};

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Shipping Address</Text>

    <Input
      label="Street Address"
      value={address.street}
      onChangeText={(value) =>
        setAddress((prev) => ({ ...prev, street: value }))
      }
    />

    <Input
      label="City"
      value={address.city}
      onChangeText={(value) => setAddress((prev) => ({ ...prev, city: value }))}
    />

    <Input
      label="State"
      value={address.state}
      onChangeText={(value) =>
        setAddress((prev) => ({ ...prev, state: value }))
      }
    />

    <MaskedInput
      label="ZIP Code"
      value={address.zipCode}
      onChangeText={(value) =>
        setAddress((prev) => ({ ...prev, zipCode: value }))
      }
      maskType="custom"
      maskPattern={formatZipCode}
      placeholder="12345"
    />

    <MaskedInput
      label="Phone Number"
      value={address.phone}
      onChangeText={(value) =>
        setAddress((prev) => ({ ...prev, phone: value }))
      }
      maskType="phone"
      placeholder="(555) 123-4567"
    />

    <Button
      disabled={
        !address.street || !address.city || !address.state || !address.zipCode
      }
      onPress={saveAddress}
    >
      Save Address
    </Button>
  </Stack>
</Container>;
```

### Business Information Form

```tsx
const [business, setBusiness] = useState({
  businessName: "",
  ein: "",
  phone: "",
  fax: "",
});

const formatEIN = (val: string) => {
  const digits = val.replace(/\D/g, "").slice(0, 9);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}-${digits.slice(2)}`;
};

const formatFax = (val: string) => {
  const digits = val.replace(/\D/g, "").slice(0, 10);
  const parts = [];
  if (digits.length > 0) parts.push("(" + digits.slice(0, 3));
  if (digits.length >= 4) parts.push(") " + digits.slice(3, 6));
  if (digits.length >= 7) parts.push("-" + digits.slice(6, 10));
  return parts.join("");
};

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Business Information</Text>

    <Input
      label="Business Name"
      value={business.businessName}
      onChangeText={(value) =>
        setBusiness((prev) => ({ ...prev, businessName: value }))
      }
    />

    <MaskedInput
      label="Employer Identification Number (EIN)"
      value={business.ein}
      onChangeText={(value) => setBusiness((prev) => ({ ...prev, ein: value }))}
      maskType="custom"
      maskPattern={formatEIN}
      placeholder="12-3456789"
    />

    <MaskedInput
      label="Business Phone"
      value={business.phone}
      onChangeText={(value) =>
        setBusiness((prev) => ({ ...prev, phone: value }))
      }
      maskType="phone"
      placeholder="(555) 123-4567"
    />

    <MaskedInput
      label="Fax Number"
      value={business.fax}
      onChangeText={(value) => setBusiness((prev) => ({ ...prev, fax: value }))}
      maskType="custom"
      maskPattern={formatFax}
      placeholder="(555) 123-4567"
    />

    <Button
      disabled={!business.businessName || !business.ein}
      onPress={saveBusinessInfo}
    >
      Save Business Information
    </Button>
  </Stack>
</Container>;
```

### Government ID Form

```tsx
const [governmentId, setGovernmentId] = useState({
  ssn: "",
  driverLicense: "",
  passport: "",
});

const formatSSN = (val: string) => {
  const digits = val.replace(/\D/g, "").slice(0, 9);
  if (digits.length <= 3) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`;
};

const formatDriverLicense = (val: string) => {
  const alphanumeric = val.replace(/[^A-Za-z0-9]/g, "").slice(0, 8);
  return alphanumeric.toUpperCase();
};

const formatPassport = (val: string) => {
  const alphanumeric = val.replace(/[^A-Za-z0-9]/g, "").slice(0, 9);
  return alphanumeric.toUpperCase();
};

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Government Identification</Text>

    <MaskedInput
      label="Social Security Number"
      value={governmentId.ssn}
      onChangeText={(value) =>
        setGovernmentId((prev) => ({ ...prev, ssn: value }))
      }
      maskType="custom"
      maskPattern={formatSSN}
      placeholder="123-45-6789"
    />

    <MaskedInput
      label="Driver License Number"
      value={governmentId.driverLicense}
      onChangeText={(value) =>
        setGovernmentId((prev) => ({ ...prev, driverLicense: value }))
      }
      maskType="custom"
      maskPattern={formatDriverLicense}
      placeholder="A1234567"
    />

    <MaskedInput
      label="Passport Number"
      value={governmentId.passport}
      onChangeText={(value) =>
        setGovernmentId((prev) => ({ ...prev, passport: value }))
      }
      maskType="custom"
      maskPattern={formatPassport}
      placeholder="A12345678"
    />

    <Button
      disabled={
        !governmentId.ssn &&
        !governmentId.driverLicense &&
        !governmentId.passport
      }
      onPress={saveGovernmentId}
    >
      Save ID Information
    </Button>
  </Stack>
</Container>;
```

## Best Practices

1. **Use appropriate mask types**: Choose the right mask type for your data format
2. **Provide clear placeholders**: Use descriptive placeholders to show expected format
3. **Handle validation**: Use error states to validate formatted input
4. **Consider user experience**: Ensure formatting doesn't interfere with user input
5. **Accessibility**: Ensure masked inputs are accessible to screen readers

## Accessibility

The MaskedInput component includes built-in accessibility features:

- Proper `accessibilityRole="text"`
- `accessibilityState` for error states
- Support for `accessibilityLabel` and `accessibilityHint`

```tsx
<MaskedInput
  label="Phone Number"
  value={phone}
  onChangeText={setPhone}
  maskType="phone"
  accessibilityLabel="Phone number input"
  accessibilityHint="Enter your phone number with automatic formatting"
/>
```

## Theme Integration

The MaskedInput component automatically uses colors from your theme:

- Border color uses `theme.colors.border`
- Text color uses `theme.colors.text`
- Background color uses `theme.colors.background`
- Error text is red for visibility
- Placeholder color uses `theme.colors.muted`

## Performance

The MaskedInput component is optimized for performance:

- Efficient formatting functions
- Minimal re-renders
- Optimized input handling
- Lightweight implementation

## Comparison with Other Components

- **MaskedInput vs Input**: MaskedInput provides automatic formatting, Input is for plain text
- **MaskedInput vs OTPInput**: MaskedInput is for formatted text, OTPInput is for individual digits
- **MaskedInput vs TextArea**: MaskedInput is for single-line formatted text, TextArea is for multi-line text
