---
title: StepperInput
description: A numeric input component with increment and decrement buttons
---

# StepperInput

The StepperInput component provides a numeric input interface with increment and decrement buttons. It's perfect for quantities, ratings, and any scenario where users need to adjust numeric values with precise control.

## Basic Usage

```tsx
import { StepperInput } from "re-native-ui";

const [quantity, setQuantity] = useState(1);

<StepperInput
  label="Quantity"
  value={quantity}
  onChange={setQuantity}
  min={1}
  max={10}
/>;
```

## Props

| Prop       | Type                      | Default    | Description                                |
| ---------- | ------------------------- | ---------- | ------------------------------------------ |
| `label`    | `string`                  | -          | Label text displayed above the stepper     |
| `value`    | `number`                  | -          | Current numeric value                      |
| `onChange` | `(value: number) => void` | -          | Callback function when value changes       |
| `step`     | `number`                  | `1`        | Increment/decrement step size              |
| `min`      | `number`                  | `0`        | Minimum allowed value                      |
| `max`      | `number`                  | `Infinity` | Maximum allowed value                      |
| `error`    | `string`                  | -          | Error message to display below the stepper |
| `disabled` | `boolean`                 | `false`    | Whether the stepper is disabled            |

## Examples

### Basic Stepper Input

```tsx
const [quantity, setQuantity] = useState(1);

<StepperInput
  label="Quantity"
  value={quantity}
  onChange={setQuantity}
  min={1}
  max={10}
/>;
```

### Stepper with Custom Step

```tsx
const [rating, setRating] = useState(3);

<StepperInput
  label="Rating"
  value={rating}
  onChange={setRating}
  step={0.5}
  min={0}
  max={5}
/>;
```

### Stepper with Error State

```tsx
const [guests, setGuests] = useState(2);
const [error, setError] = useState("");

<StepperInput
  label="Number of Guests"
  value={guests}
  onChange={(value) => {
    setGuests(value);
    if (value > 8) {
      setError("Maximum 8 guests allowed");
    } else {
      setError("");
    }
  }}
  min={1}
  max={10}
  error={error}
/>;
```

### Disabled Stepper

```tsx
const [items, setItems] = useState(0);

<StepperInput
  label="Items"
  value={items}
  onChange={setItems}
  disabled={true}
/>;
```

### Multiple Steppers

```tsx
const [order, setOrder] = useState({
  quantity: 1,
  rating: 5,
  priority: 1,
});

<Stack spacing={16}>
  <StepperInput
    label="Quantity"
    value={order.quantity}
    onChange={(value) => setOrder((prev) => ({ ...prev, quantity: value }))}
    min={1}
    max={100}
  />

  <StepperInput
    label="Rating"
    value={order.rating}
    onChange={(value) => setOrder((prev) => ({ ...prev, rating: value }))}
    step={0.5}
    min={0}
    max={5}
  />

  <StepperInput
    label="Priority"
    value={order.priority}
    onChange={(value) => setOrder((prev) => ({ ...prev, priority: value }))}
    min={1}
    max={5}
  />
</Stack>;
```

## Use Cases

### Shopping Cart

```tsx
const [cart, setCart] = useState({
  items: [
    { id: 1, name: "Product A", quantity: 2, price: 29.99 },
    { id: 2, name: "Product B", quantity: 1, price: 19.99 },
  ],
});

const updateQuantity = (itemId: number, newQuantity: number) => {
  setCart((prev) => ({
    ...prev,
    items: prev.items.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ),
  }));
};

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Shopping Cart</Text>

    {cart.items.map((item) => (
      <Box key={item.id} p="md" bg="background" style={{ borderRadius: 8 }}>
        <Stack spacing={12}>
          <Text variant="body">{item.name}</Text>

          <Stack
            direction="row"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Text variant="body">${item.price}</Text>

            <StepperInput
              value={item.quantity}
              onChange={(quantity) => updateQuantity(item.id, quantity)}
              min={1}
              max={10}
            />
          </Stack>

          <Text variant="body">
            Total: ${(item.price * item.quantity).toFixed(2)}
          </Text>
        </Stack>
      </Box>
    ))}

    <Button onPress={checkout}>Checkout</Button>
  </Stack>
</Container>;
```

### Restaurant Order

```tsx
const [order, setOrder] = useState({
  appetizers: 0,
  mainCourse: 1,
  desserts: 0,
  drinks: 2,
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Place Your Order</Text>

    <Stack spacing={16}>
      <StepperInput
        label="Appetizers"
        value={order.appetizers}
        onChange={(value) =>
          setOrder((prev) => ({ ...prev, appetizers: value }))
        }
        min={0}
        max={5}
      />

      <StepperInput
        label="Main Course"
        value={order.mainCourse}
        onChange={(value) =>
          setOrder((prev) => ({ ...prev, mainCourse: value }))
        }
        min={1}
        max={3}
      />

      <StepperInput
        label="Desserts"
        value={order.desserts}
        onChange={(value) => setOrder((prev) => ({ ...prev, desserts: value }))}
        min={0}
        max={3}
      />

      <StepperInput
        label="Drinks"
        value={order.drinks}
        onChange={(value) => setOrder((prev) => ({ ...prev, drinks: value }))}
        min={0}
        max={5}
      />
    </Stack>

    <Button disabled={order.mainCourse === 0} onPress={placeOrder}>
      Place Order
    </Button>
  </Stack>
</Container>;
```

### Hotel Booking

```tsx
const [booking, setBooking] = useState({
  rooms: 1,
  adults: 2,
  children: 0,
  nights: 3,
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Hotel Booking</Text>

    <Stack spacing={16}>
      <StepperInput
        label="Number of Rooms"
        value={booking.rooms}
        onChange={(value) => setBooking((prev) => ({ ...prev, rooms: value }))}
        min={1}
        max={5}
      />

      <StepperInput
        label="Adults"
        value={booking.adults}
        onChange={(value) => setBooking((prev) => ({ ...prev, adults: value }))}
        min={1}
        max={10}
      />

      <StepperInput
        label="Children"
        value={booking.children}
        onChange={(value) =>
          setBooking((prev) => ({ ...prev, children: value }))
        }
        min={0}
        max={8}
      />

      <StepperInput
        label="Number of Nights"
        value={booking.nights}
        onChange={(value) => setBooking((prev) => ({ ...prev, nights: value }))}
        min={1}
        max={30}
      />
    </Stack>

    <Button onPress={bookHotel}>Book Now</Button>
  </Stack>
</Container>;
```

### Rating System

```tsx
const [review, setReview] = useState({
  overall: 4,
  food: 5,
  service: 4,
  atmosphere: 3,
  value: 4,
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Rate Your Experience</Text>

    <Stack spacing={16}>
      <StepperInput
        label="Overall Rating"
        value={review.overall}
        onChange={(value) => setReview((prev) => ({ ...prev, overall: value }))}
        step={0.5}
        min={0}
        max={5}
      />

      <StepperInput
        label="Food Quality"
        value={review.food}
        onChange={(value) => setReview((prev) => ({ ...prev, food: value }))}
        step={0.5}
        min={0}
        max={5}
      />

      <StepperInput
        label="Service"
        value={review.service}
        onChange={(value) => setReview((prev) => ({ ...prev, service: value }))}
        step={0.5}
        min={0}
        max={5}
      />

      <StepperInput
        label="Atmosphere"
        value={review.atmosphere}
        onChange={(value) =>
          setReview((prev) => ({ ...prev, atmosphere: value }))
        }
        step={0.5}
        min={0}
        max={5}
      />

      <StepperInput
        label="Value for Money"
        value={review.value}
        onChange={(value) => setReview((prev) => ({ ...prev, value: value }))}
        step={0.5}
        min={0}
        max={5}
      />
    </Stack>

    <Button onPress={submitReview}>Submit Review</Button>
  </Stack>
</Container>;
```

### Task Management

```tsx
const [task, setTask] = useState({
  priority: 3,
  estimatedHours: 4,
  actualHours: 0,
  complexity: 2,
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Task Details</Text>

    <Stack spacing={16}>
      <StepperInput
        label="Priority (1-5)"
        value={task.priority}
        onChange={(value) => setTask((prev) => ({ ...prev, priority: value }))}
        min={1}
        max={5}
      />

      <StepperInput
        label="Estimated Hours"
        value={task.estimatedHours}
        onChange={(value) =>
          setTask((prev) => ({ ...prev, estimatedHours: value }))
        }
        step={0.5}
        min={0.5}
        max={40}
      />

      <StepperInput
        label="Actual Hours"
        value={task.actualHours}
        onChange={(value) =>
          setTask((prev) => ({ ...prev, actualHours: value }))
        }
        step={0.5}
        min={0}
        max={40}
      />

      <StepperInput
        label="Complexity (1-5)"
        value={task.complexity}
        onChange={(value) =>
          setTask((prev) => ({ ...prev, complexity: value }))
        }
        min={1}
        max={5}
      />
    </Stack>

    <Button onPress={saveTask}>Save Task</Button>
  </Stack>
</Container>;
```

### Fitness Tracking

```tsx
const [workout, setWorkout] = useState({
  sets: 3,
  reps: 12,
  weight: 50,
  restMinutes: 2,
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Workout Log</Text>

    <Stack spacing={16}>
      <StepperInput
        label="Number of Sets"
        value={workout.sets}
        onChange={(value) => setWorkout((prev) => ({ ...prev, sets: value }))}
        min={1}
        max={10}
      />

      <StepperInput
        label="Reps per Set"
        value={workout.reps}
        onChange={(value) => setWorkout((prev) => ({ ...prev, reps: value }))}
        min={1}
        max={50}
      />

      <StepperInput
        label="Weight (lbs)"
        value={workout.weight}
        onChange={(value) => setWorkout((prev) => ({ ...prev, weight: value }))}
        step={5}
        min={0}
        max={500}
      />

      <StepperInput
        label="Rest Between Sets (minutes)"
        value={workout.restMinutes}
        onChange={(value) =>
          setWorkout((prev) => ({ ...prev, restMinutes: value }))
        }
        min={0}
        max={10}
      />
    </Stack>

    <Button onPress={logWorkout}>Log Workout</Button>
  </Stack>
</Container>;
```

## Best Practices

1. **Set appropriate ranges**: Use `min` and `max` to limit valid values
2. **Choose meaningful steps**: Use step values that make sense for your use case
3. **Handle validation**: Use error states to validate input values
4. **Provide clear labels**: Use descriptive labels to indicate what the value represents
5. **Accessibility**: Ensure stepper inputs are accessible to screen readers

## Accessibility

The StepperInput component includes built-in accessibility features:

- Proper `accessibilityRole="button"` for increment/decrement buttons
- `accessibilityState` for disabled states
- Support for `accessibilityLabel` and `accessibilityHint`

```tsx
<StepperInput
  label="Quantity"
  value={quantity}
  onChange={setQuantity}
  accessibilityLabel="Quantity stepper"
  accessibilityHint="Use plus and minus buttons to adjust quantity"
/>
```

## Theme Integration

The StepperInput component automatically uses colors from your theme:

- Border color uses `theme.colors.border`
- Text color uses `theme.colors.text`
- Background color uses `theme.colors.background`
- Error text is red for visibility

## Performance

The StepperInput component is optimized for performance:

- Efficient value updates
- Minimal re-renders
- Optimized button handling
- Lightweight implementation

## Comparison with Other Components

- **StepperInput vs Slider**: StepperInput provides precise control, Slider is for range selection
- **StepperInput vs Input**: StepperInput is for numeric values with buttons, Input is for text input
- **StepperInput vs Switch**: StepperInput is for numeric values, Switch is for boolean toggles
