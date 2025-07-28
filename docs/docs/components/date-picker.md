---
title: DatePicker
description: A modal-based date picker component with year, month, and day selection
---

# DatePicker

The DatePicker component provides a modal-based date selection interface with separate columns for year, month, and day. It's perfect for forms, settings, and any scenario where users need to select a specific date.

## Basic Usage

```tsx
import { DatePicker } from "react-native-ui";

const [selectedDate, setSelectedDate] = useState(new Date());

<DatePicker
  label="Select Date"
  value={selectedDate}
  onChange={setSelectedDate}
/>;
```

## Props

| Prop          | Type                   | Default        | Description                                |
| ------------- | ---------------------- | -------------- | ------------------------------------------ |
| `label`       | `string`               | -              | Label text displayed above the date picker |
| `value`       | `Date`                 | `new Date()`   | Currently selected date                    |
| `onChange`    | `(date: Date) => void` | -              | Callback function when date changes        |
| `error`       | `string`               | -              | Error message to display below the picker  |
| `minimumYear` | `number`               | `1950`         | Minimum year available for selection       |
| `maximumYear` | `number`               | `current year` | Maximum year available for selection       |

## Examples

### Basic Date Picker

```tsx
const [birthDate, setBirthDate] = useState(new Date());

<DatePicker label="Date of Birth" value={birthDate} onChange={setBirthDate} />;
```

### Date Picker with Custom Year Range

```tsx
const [eventDate, setEventDate] = useState(new Date());

<DatePicker
  label="Event Date"
  value={eventDate}
  onChange={setEventDate}
  minimumYear={2020}
  maximumYear={2030}
/>;
```

### Date Picker with Error State

```tsx
const [appointmentDate, setAppointmentDate] = useState(new Date());
const [error, setError] = useState("");

<DatePicker
  label="Appointment Date"
  value={appointmentDate}
  onChange={(date) => {
    setAppointmentDate(date);
    const today = new Date();
    if (date < today) {
      setError("Appointment date cannot be in the past");
    } else {
      setError("");
    }
  }}
  error={error}
/>;
```

### Date Picker with Past Date Range

```tsx
const [historicalDate, setHistoricalDate] = useState(new Date());

<DatePicker
  label="Historical Date"
  value={historicalDate}
  onChange={setHistoricalDate}
  minimumYear={1900}
  maximumYear={2000}
/>;
```

### Date Picker with Future Date Range

```tsx
const [futureDate, setFutureDate] = useState(new Date());

<DatePicker
  label="Future Date"
  value={futureDate}
  onChange={setFutureDate}
  minimumYear={new Date().getFullYear()}
  maximumYear={new Date().getFullYear() + 10}
/>;
```

## Use Cases

### User Registration Form

```tsx
const [userData, setUserData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  birthDate: new Date(),
  phone: "",
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Create Account</Text>

    <Input
      label="First Name"
      value={userData.firstName}
      onChangeText={(value) =>
        setUserData((prev) => ({ ...prev, firstName: value }))
      }
    />

    <Input
      label="Last Name"
      value={userData.lastName}
      onChangeText={(value) =>
        setUserData((prev) => ({ ...prev, lastName: value }))
      }
    />

    <Input
      label="Email"
      value={userData.email}
      onChangeText={(value) =>
        setUserData((prev) => ({ ...prev, email: value }))
      }
      keyboardType="email-address"
    />

    <DatePicker
      label="Date of Birth"
      value={userData.birthDate}
      onChange={(date) => setUserData((prev) => ({ ...prev, birthDate: date }))}
      minimumYear={1900}
      maximumYear={new Date().getFullYear() - 13}
    />

    <Input
      label="Phone Number"
      value={userData.phone}
      onChangeText={(value) =>
        setUserData((prev) => ({ ...prev, phone: value }))
      }
      keyboardType="phone-pad"
    />

    <Button
      disabled={!userData.firstName || !userData.lastName || !userData.email}
      onPress={handleSubmit}
    >
      Create Account
    </Button>
  </Stack>
</Container>;
```

### Event Booking System

```tsx
const [booking, setBooking] = useState({
  eventName: "",
  eventDate: new Date(),
  attendees: "",
  notes: "",
});

const today = new Date();
const maxDate = new Date();
maxDate.setFullYear(today.getFullYear() + 1); // Allow booking up to 1 year ahead

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Book Event</Text>

    <Input
      label="Event Name"
      value={booking.eventName}
      onChangeText={(value) =>
        setBooking((prev) => ({ ...prev, eventName: value }))
      }
    />

    <DatePicker
      label="Event Date"
      value={booking.eventDate}
      onChange={(date) => setBooking((prev) => ({ ...prev, eventDate: date }))}
      minimumYear={today.getFullYear()}
      maximumYear={maxDate.getFullYear()}
    />

    <Input
      label="Number of Attendees"
      value={booking.attendees}
      onChangeText={(value) =>
        setBooking((prev) => ({ ...prev, attendees: value }))
      }
      keyboardType="numeric"
    />

    <TextArea
      label="Additional Notes"
      value={booking.notes}
      onChangeText={(value) =>
        setBooking((prev) => ({ ...prev, notes: value }))
      }
      rows={4}
    />

    <Button
      disabled={!booking.eventName || !booking.attendees}
      onPress={handleBooking}
    >
      Book Event
    </Button>
  </Stack>
</Container>;
```

### Travel Booking Form

```tsx
const [travel, setTravel] = useState({
  destination: "",
  departureDate: new Date(),
  returnDate: new Date(),
  passengers: "",
});

const today = new Date();
const minDate = new Date();
minDate.setDate(today.getDate() + 1); // Earliest departure is tomorrow

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Book Your Trip</Text>

    <Input
      label="Destination"
      value={travel.destination}
      onChangeText={(value) =>
        setTravel((prev) => ({ ...prev, destination: value }))
      }
    />

    <DatePicker
      label="Departure Date"
      value={travel.departureDate}
      onChange={(date) =>
        setTravel((prev) => ({ ...prev, departureDate: date }))
      }
      minimumYear={minDate.getFullYear()}
      maximumYear={minDate.getFullYear() + 2}
    />

    <DatePicker
      label="Return Date"
      value={travel.returnDate}
      onChange={(date) => setTravel((prev) => ({ ...prev, returnDate: date }))}
      minimumYear={travel.departureDate.getFullYear()}
      maximumYear={travel.departureDate.getFullYear() + 2}
    />

    <Input
      label="Number of Passengers"
      value={travel.passengers}
      onChangeText={(value) =>
        setTravel((prev) => ({ ...prev, passengers: value }))
      }
      keyboardType="numeric"
    />

    <Button
      disabled={!travel.destination || !travel.passengers}
      onPress={handleTravelBooking}
    >
      Search Flights
    </Button>
  </Stack>
</Container>;
```

### Appointment Scheduling

```tsx
const [appointment, setAppointment] = useState({
  patientName: "",
  appointmentDate: new Date(),
  appointmentTime: "",
  reason: "",
});

const today = new Date();
const minDate = new Date();
minDate.setDate(today.getDate() + 1); // Appointments start from tomorrow

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Schedule Appointment</Text>

    <Input
      label="Patient Name"
      value={appointment.patientName}
      onChangeText={(value) =>
        setAppointment((prev) => ({ ...prev, patientName: value }))
      }
    />

    <DatePicker
      label="Appointment Date"
      value={appointment.appointmentDate}
      onChange={(date) =>
        setAppointment((prev) => ({ ...prev, appointmentDate: date }))
      }
      minimumYear={minDate.getFullYear()}
      maximumYear={minDate.getFullYear() + 1}
    />

    <Select
      label="Appointment Time"
      placeholder="Select time"
      value={appointment.appointmentTime}
      onChange={(value) =>
        setAppointment((prev) => ({ ...prev, appointmentTime: value }))
      }
      options={[
        { label: "9:00 AM", value: "09:00" },
        { label: "10:00 AM", value: "10:00" },
        { label: "11:00 AM", value: "11:00" },
        { label: "2:00 PM", value: "14:00" },
        { label: "3:00 PM", value: "15:00" },
        { label: "4:00 PM", value: "16:00" },
      ]}
    />

    <TextArea
      label="Reason for Visit"
      value={appointment.reason}
      onChangeText={(value) =>
        setAppointment((prev) => ({ ...prev, reason: value }))
      }
      rows={4}
    />

    <Button
      disabled={!appointment.patientName || !appointment.appointmentTime}
      onPress={scheduleAppointment}
    >
      Schedule Appointment
    </Button>
  </Stack>
</Container>;
```

### Historical Data Entry

```tsx
const [historicalRecord, setHistoricalRecord] = useState({
  eventName: "",
  eventDate: new Date(),
  location: "",
  description: "",
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Add Historical Record</Text>

    <Input
      label="Event Name"
      value={historicalRecord.eventName}
      onChangeText={(value) =>
        setHistoricalRecord((prev) => ({ ...prev, eventName: value }))
      }
    />

    <DatePicker
      label="Event Date"
      value={historicalRecord.eventDate}
      onChange={(date) =>
        setHistoricalRecord((prev) => ({ ...prev, eventDate: date }))
      }
      minimumYear={1000}
      maximumYear={new Date().getFullYear()}
    />

    <Input
      label="Location"
      value={historicalRecord.location}
      onChangeText={(value) =>
        setHistoricalRecord((prev) => ({ ...prev, location: value }))
      }
    />

    <TextArea
      label="Description"
      value={historicalRecord.description}
      onChangeText={(value) =>
        setHistoricalRecord((prev) => ({ ...prev, description: value }))
      }
      rows={6}
    />

    <Button
      disabled={!historicalRecord.eventName || !historicalRecord.location}
      onPress={saveHistoricalRecord}
    >
      Save Record
    </Button>
  </Stack>
</Container>;
```

### Subscription Management

```tsx
const [subscription, setSubscription] = useState({
  planName: "",
  startDate: new Date(),
  endDate: new Date(),
  autoRenew: false,
});

const today = new Date();

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Manage Subscription</Text>

    <Select
      label="Plan"
      placeholder="Select plan"
      value={subscription.planName}
      onChange={(value) =>
        setSubscription((prev) => ({ ...prev, planName: value }))
      }
      options={[
        { label: "Basic Plan - $9/month", value: "basic" },
        { label: "Pro Plan - $19/month", value: "pro" },
        { label: "Enterprise Plan - $49/month", value: "enterprise" },
      ]}
    />

    <DatePicker
      label="Start Date"
      value={subscription.startDate}
      onChange={(date) =>
        setSubscription((prev) => ({ ...prev, startDate: date }))
      }
      minimumYear={today.getFullYear()}
      maximumYear={today.getFullYear() + 5}
    />

    <DatePicker
      label="End Date"
      value={subscription.endDate}
      onChange={(date) =>
        setSubscription((prev) => ({ ...prev, endDate: date }))
      }
      minimumYear={subscription.startDate.getFullYear()}
      maximumYear={subscription.startDate.getFullYear() + 5}
    />

    <Switch
      label="Auto-renew subscription"
      value={subscription.autoRenew}
      onChange={(value) =>
        setSubscription((prev) => ({ ...prev, autoRenew: value }))
      }
    />

    <Button disabled={!subscription.planName} onPress={updateSubscription}>
      Update Subscription
    </Button>
  </Stack>
</Container>;
```

## Best Practices

1. **Set appropriate year ranges**: Use `minimumYear` and `maximumYear` to limit valid dates
2. **Provide clear labels**: Use descriptive labels to indicate what the date represents
3. **Handle validation**: Use error states to validate date selections
4. **Consider user context**: Set reasonable defaults based on the use case
5. **Accessibility**: Ensure date pickers are accessible to screen readers

## Accessibility

The DatePicker component includes built-in accessibility features:

- Proper `accessibilityRole="button"`
- `accessibilityState` for modal states
- Support for `accessibilityLabel` and `accessibilityHint`

```tsx
<DatePicker
  label="Select Date"
  value={selectedDate}
  onChange={setSelectedDate}
  accessibilityLabel="Date picker button"
  accessibilityHint="Opens a modal to select a date"
/>
```

## Theme Integration

The DatePicker component automatically uses colors from your theme:

- Background color uses `theme.colors.background`
- Text color uses `theme.colors.text`
- Border color uses `theme.colors.border`
- Primary color uses `theme.colors.primary`
- Error text is red for visibility

## Performance

The DatePicker component is optimized for performance:

- Modal only renders when open
- Efficient date calculations
- Minimal re-renders
- Lightweight implementation

## Comparison with Other Components

- **DatePicker vs Input**: DatePicker is for date selection, Input is for text input
- **DatePicker vs Select**: DatePicker is for dates, Select is for predefined options
- **DatePicker vs Slider**: DatePicker is for specific dates, Slider is for range selection
