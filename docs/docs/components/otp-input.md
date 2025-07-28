---
title: OTPInput
description: A one-time password input component with individual digit boxes
---

# OTPInput

The OTPInput component provides a specialized input interface for one-time passwords, verification codes, and PIN numbers. It displays individual input boxes for each digit and automatically moves focus between them as the user types.

## Basic Usage

```tsx
import { OTPInput } from "react-native-ui";

const [otp, setOtp] = useState("");

<OTPInput
  label="Enter verification code"
  value={otp}
  onChangeText={setOtp}
  length={6}
/>;
```

## Props

| Prop           | Type                      | Default | Description                              |
| -------------- | ------------------------- | ------- | ---------------------------------------- |
| `length`       | `number`                  | `6`     | Number of digits in the OTP              |
| `value`        | `string`                  | -       | Current OTP value                        |
| `onChangeText` | `(value: string) => void` | -       | Callback function when OTP changes       |
| `error`        | `string`                  | -       | Error message to display below the input |
| `label`        | `string`                  | -       | Label text displayed above the input     |

**Note:** The OTPInput component extends all props from React Native's `TextInput` component (except `onChangeText`), so you can use any standard TextInput props like `placeholder`, `style`, etc.

## Examples

### Basic OTP Input

```tsx
const [verificationCode, setVerificationCode] = useState("");

<OTPInput
  label="Verification Code"
  value={verificationCode}
  onChangeText={setVerificationCode}
/>;
```

### Custom Length OTP

```tsx
const [pin, setPin] = useState("");

<OTPInput label="4-Digit PIN" value={pin} onChangeText={setPin} length={4} />;
```

### OTP with Error State

```tsx
const [otp, setOtp] = useState("");
const [error, setError] = useState("");

<OTPInput
  label="Enter OTP"
  value={otp}
  onChangeText={(value) => {
    setOtp(value);
    if (value.length === 6 && value !== "123456") {
      setError("Invalid verification code");
    } else {
      setError("");
    }
  }}
  error={error}
/>;
```

### OTP with Custom Styling

```tsx
const [code, setCode] = useState("");

<OTPInput
  label="Security Code"
  value={code}
  onChangeText={setCode}
  length={8}
  style={{
    backgroundColor: "#f8f9fa",
    borderColor: "#007AFF",
    borderWidth: 2,
  }}
/>;
```

### OTP with Auto-Submit

```tsx
const [otp, setOtp] = useState("");

const handleOtpChange = (value: string) => {
  setOtp(value);
  if (value.length === 6) {
    // Auto-submit when all digits are entered
    verifyOtp(value);
  }
};

<OTPInput
  label="Enter 6-digit code"
  value={otp}
  onChangeText={handleOtpChange}
/>;
```

## Use Cases

### Phone Verification

```tsx
const [phoneNumber, setPhoneNumber] = useState("");
const [verificationCode, setVerificationCode] = useState("");
const [step, setStep] = useState<"phone" | "verify">("phone");

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Phone Verification</Text>

    {step === "phone" ? (
      <Stack spacing={16}>
        <Input
          label="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          placeholder="Enter your phone number"
        />

        <Button
          onPress={() => {
            sendVerificationCode(phoneNumber);
            setStep("verify");
          }}
          disabled={!phoneNumber}
        >
          Send Verification Code
        </Button>
      </Stack>
    ) : (
      <Stack spacing={16}>
        <Text variant="body">
          We've sent a verification code to {phoneNumber}
        </Text>

        <OTPInput
          label="Enter verification code"
          value={verificationCode}
          onChangeText={setVerificationCode}
        />

        <Stack direction="row" spacing={12}>
          <Button variant="outline" onPress={() => setStep("phone")}>
            Back
          </Button>
          <Button
            onPress={() => verifyCode(verificationCode)}
            disabled={verificationCode.length !== 6}
          >
            Verify
          </Button>
        </Stack>
      </Stack>
    )}
  </Stack>
</Container>;
```

### Two-Factor Authentication

```tsx
const [totpCode, setTotpCode] = useState("");
const [isVerifying, setIsVerifying] = useState(false);

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Two-Factor Authentication</Text>

    <Box p="md" bg="muted" style={{ borderRadius: 8 }}>
      <Stack spacing={12}>
        <Text variant="body">
          Enter the 6-digit code from your authenticator app
        </Text>

        <OTPInput
          label="Authentication Code"
          value={totpCode}
          onChangeText={setTotpCode}
        />

        <Button
          onPress={async () => {
            setIsVerifying(true);
            try {
              await verifyTOTP(totpCode);
              // Navigate to dashboard
            } catch (error) {
              // Handle error
            } finally {
              setIsVerifying(false);
            }
          }}
          disabled={totpCode.length !== 6 || isVerifying}
          loading={isVerifying}
        >
          Verify
        </Button>
      </Stack>
    </Box>
  </Stack>
</Container>;
```

### Password Reset

```tsx
const [email, setEmail] = useState("");
const [resetCode, setResetCode] = useState("");
const [newPassword, setNewPassword] = useState("");
const [step, setStep] = useState<"email" | "code" | "password">("email");

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Reset Password</Text>

    {step === "email" && (
      <Stack spacing={16}>
        <Input
          label="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Enter your email"
        />

        <Button
          onPress={() => {
            sendResetCode(email);
            setStep("code");
          }}
          disabled={!email}
        >
          Send Reset Code
        </Button>
      </Stack>
    )}

    {step === "code" && (
      <Stack spacing={16}>
        <Text variant="body">We've sent a reset code to {email}</Text>

        <OTPInput
          label="Enter reset code"
          value={resetCode}
          onChangeText={setResetCode}
        />

        <Stack direction="row" spacing={12}>
          <Button variant="outline" onPress={() => setStep("email")}>
            Back
          </Button>
          <Button
            onPress={() => setStep("password")}
            disabled={resetCode.length !== 6}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    )}

    {step === "password" && (
      <Stack spacing={16}>
        <PasswordInput
          label="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <Stack direction="row" spacing={12}>
          <Button variant="outline" onPress={() => setStep("code")}>
            Back
          </Button>
          <Button
            onPress={() => resetPassword(resetCode, newPassword)}
            disabled={!newPassword}
          >
            Reset Password
          </Button>
        </Stack>
      </Stack>
    )}
  </Stack>
</Container>;
```

### Banking PIN Setup

```tsx
const [pin, setPin] = useState("");
const [confirmPin, setConfirmPin] = useState("");
const [step, setStep] = useState<"create" | "confirm">("create");

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Set Up Security PIN</Text>

    {step === "create" && (
      <Stack spacing={16}>
        <Text variant="body">
          Create a 4-digit PIN for secure access to your account
        </Text>

        <OTPInput
          label="Enter PIN"
          value={pin}
          onChangeText={setPin}
          length={4}
        />

        <Button onPress={() => setStep("confirm")} disabled={pin.length !== 4}>
          Continue
        </Button>
      </Stack>
    )}

    {step === "confirm" && (
      <Stack spacing={16}>
        <Text variant="body">Confirm your 4-digit PIN</Text>

        <OTPInput
          label="Confirm PIN"
          value={confirmPin}
          onChangeText={setConfirmPin}
          length={4}
        />

        <Stack direction="row" spacing={12}>
          <Button variant="outline" onPress={() => setStep("create")}>
            Back
          </Button>
          <Button
            onPress={() => {
              if (pin === confirmPin) {
                savePin(pin);
              } else {
                // Show error
              }
            }}
            disabled={confirmPin.length !== 4}
          >
            Set PIN
          </Button>
        </Stack>
      </Stack>
    )}
  </Stack>
</Container>;
```

### Email Verification

```tsx
const [email, setEmail] = useState("");
const [verificationCode, setVerificationCode] = useState("");
const [isResending, setIsResending] = useState(false);

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Verify Your Email</Text>

    <Stack spacing={16}>
      <Input
        label="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Enter your email"
      />

      <Button onPress={() => sendEmailVerification(email)} disabled={!email}>
        Send Verification Code
      </Button>

      <Divider />

      <OTPInput
        label="Enter verification code"
        value={verificationCode}
        onChangeText={setVerificationCode}
      />

      <Stack direction="row" spacing={12}>
        <Button
          variant="outline"
          onPress={async () => {
            setIsResending(true);
            await sendEmailVerification(email);
            setIsResending(false);
          }}
          disabled={isResending}
        >
          {isResending ? "Resending..." : "Resend Code"}
        </Button>

        <Button
          onPress={() => verifyEmailCode(verificationCode)}
          disabled={verificationCode.length !== 6}
        >
          Verify Email
        </Button>
      </Stack>
    </Stack>
  </Stack>
</Container>;
```

## Best Practices

1. **Use appropriate lengths**: 4-6 digits for most use cases, 8+ for high-security scenarios
2. **Provide clear instructions**: Use descriptive labels and helper text
3. **Handle errors gracefully**: Show validation errors clearly
4. **Auto-submit when complete**: Consider auto-submitting when all digits are entered
5. **Accessibility**: Ensure OTP inputs are accessible to screen readers

## Accessibility

The OTPInput component includes built-in accessibility features:

- Proper `accessibilityRole="text"`
- `accessibilityState` for focused states
- Support for `accessibilityLabel` and `accessibilityHint`

```tsx
<OTPInput
  label="Verification Code"
  value={otp}
  onChangeText={setOtp}
  accessibilityLabel="One-time password input"
  accessibilityHint="Enter the 6-digit verification code"
/>
```

## Theme Integration

The OTPInput component automatically uses colors from your theme:

- Border color uses `theme.colors.border`
- Focused border color uses `theme.colors.primary`
- Text color uses `theme.colors.text`
- Background color uses `theme.colors.background`
- Error text is red for visibility

## Performance

The OTPInput component is optimized for performance:

- Efficient focus management
- Minimal re-renders
- Optimized input handling
- Lightweight implementation

## Comparison with Other Components

- **OTPInput vs Input**: OTPInput is specialized for codes/PINs, Input is for general text
- **OTPInput vs TextArea**: OTPInput is for short codes, TextArea is for longer text
- **OTPInput vs PasswordInput**: OTPInput shows individual digits, PasswordInput masks the entire input
