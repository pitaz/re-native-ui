---
title: Slider
description: A customizable slider component for selecting values within a range
---

# Slider

The Slider component provides a draggable slider interface for selecting values within a specified range. It's perfect for settings, volume controls, and any scenario where users need to select a value from a continuous range.

## Basic Usage

```tsx
import { Slider } from "re-native-ui";

const [value, setValue] = useState(50);

<Slider label="Volume" value={value} onChange={setValue} min={0} max={100} />;
```

## Props

| Prop       | Type                      | Default | Description                                 |
| ---------- | ------------------------- | ------- | ------------------------------------------- |
| `label`    | `string`                  | -       | Label text displayed above the slider       |
| `value`    | `number`                  | -       | Current value of the slider                 |
| `onChange` | `(value: number) => void` | -       | Callback function when slider value changes |
| `min`      | `number`                  | `0`     | Minimum value of the slider range           |
| `max`      | `number`                  | `100`   | Maximum value of the slider range           |
| `step`     | `number`                  | `1`     | Step increment for the slider               |
| `error`    | `string`                  | -       | Error message to display below the slider   |
| `disabled` | `boolean`                 | `false` | Whether the slider is disabled              |

## Examples

### Basic Slider

```tsx
const [volume, setVolume] = useState(50);

<Slider label="Volume" value={volume} onChange={setVolume} min={0} max={100} />;
```

### Slider with Custom Range

```tsx
const [brightness, setBrightness] = useState(75);

<Slider
  label="Brightness"
  value={brightness}
  onChange={setBrightness}
  min={0}
  max={100}
/>;
```

### Slider with Step Increments

```tsx
const [rating, setRating] = useState(3);

<Slider
  label="Rating"
  value={rating}
  onChange={setRating}
  min={1}
  max={5}
  step={1}
/>;
```

### Slider with Error State

```tsx
const [price, setPrice] = useState(50);
const [error, setError] = useState("");

<Slider
  label="Price Range"
  value={price}
  onChange={(value) => {
    setPrice(value);
    if (value < 20) {
      setError("Price must be at least $20");
    } else {
      setError("");
    }
  }}
  min={0}
  max={200}
  error={error}
/>;
```

### Disabled Slider

```tsx
const [value, setValue] = useState(30);

<Slider
  label="Disabled Slider"
  value={value}
  onChange={setValue}
  disabled={true}
/>;
```

### Multiple Sliders

```tsx
const [settings, setSettings] = useState({
  volume: 50,
  brightness: 75,
  contrast: 60,
});

<Stack spacing={20}>
  <Slider
    label="Volume"
    value={settings.volume}
    onChange={(value) => setSettings((prev) => ({ ...prev, volume: value }))}
    min={0}
    max={100}
  />

  <Slider
    label="Brightness"
    value={settings.brightness}
    onChange={(value) =>
      setSettings((prev) => ({ ...prev, brightness: value }))
    }
    min={0}
    max={100}
  />

  <Slider
    label="Contrast"
    value={settings.contrast}
    onChange={(value) => setSettings((prev) => ({ ...prev, contrast: value }))}
    min={0}
    max={100}
  />
</Stack>;
```

### Slider with Value Display

```tsx
const [temperature, setTemperature] = useState(22);

<Stack spacing={8}>
  <Stack
    direction="row"
    style={{ justifyContent: "space-between", alignItems: "center" }}
  >
    <Text variant="body">Temperature</Text>
    <Text variant="body">{temperature}°C</Text>
  </Stack>

  <Slider
    value={temperature}
    onChange={setTemperature}
    min={10}
    max={35}
    step={0.5}
  />

  <Stack direction="row" style={{ justifyContent: "space-between" }}>
    <Text variant="caption">10°C</Text>
    <Text variant="caption">35°C</Text>
  </Stack>
</Stack>;
```

## Use Cases

### Audio/Video Controls

```tsx
const [mediaControls, setMediaControls] = useState({
  volume: 50,
  playbackSpeed: 1.0,
  quality: 720,
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Media Controls</Text>

    <Stack spacing={8}>
      <Stack
        direction="row"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Text variant="body">Volume</Text>
        <Text variant="body">{mediaControls.volume}%</Text>
      </Stack>
      <Slider
        value={mediaControls.volume}
        onChange={(value) =>
          setMediaControls((prev) => ({ ...prev, volume: value }))
        }
        min={0}
        max={100}
      />
    </Stack>

    <Stack spacing={8}>
      <Stack
        direction="row"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Text variant="body">Playback Speed</Text>
        <Text variant="body">{mediaControls.playbackSpeed}x</Text>
      </Stack>
      <Slider
        value={mediaControls.playbackSpeed}
        onChange={(value) =>
          setMediaControls((prev) => ({ ...prev, playbackSpeed: value }))
        }
        min={0.5}
        max={2.0}
        step={0.1}
      />
    </Stack>

    <Stack spacing={8}>
      <Stack
        direction="row"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Text variant="body">Video Quality</Text>
        <Text variant="body">{mediaControls.quality}p</Text>
      </Stack>
      <Slider
        value={mediaControls.quality}
        onChange={(value) =>
          setMediaControls((prev) => ({ ...prev, quality: value }))
        }
        min={360}
        max={1080}
        step={180}
      />
    </Stack>
  </Stack>
</Container>;
```

### Image Editor Controls

```tsx
const [imageSettings, setImageSettings] = useState({
  brightness: 0,
  contrast: 0,
  saturation: 0,
  blur: 0,
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Image Adjustments</Text>

    <Stack spacing={16}>
      <Stack spacing={8}>
        <Stack
          direction="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text variant="body">Brightness</Text>
          <Text variant="body">{imageSettings.brightness}</Text>
        </Stack>
        <Slider
          value={imageSettings.brightness}
          onChange={(value) =>
            setImageSettings((prev) => ({ ...prev, brightness: value }))
          }
          min={-100}
          max={100}
        />
      </Stack>

      <Stack spacing={8}>
        <Stack
          direction="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text variant="body">Contrast</Text>
          <Text variant="body">{imageSettings.contrast}</Text>
        </Stack>
        <Slider
          value={imageSettings.contrast}
          onChange={(value) =>
            setImageSettings((prev) => ({ ...prev, contrast: value }))
          }
          min={-100}
          max={100}
        />
      </Stack>

      <Stack spacing={8}>
        <Stack
          direction="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text variant="body">Saturation</Text>
          <Text variant="body">{imageSettings.saturation}</Text>
        </Stack>
        <Slider
          value={imageSettings.saturation}
          onChange={(value) =>
            setImageSettings((prev) => ({ ...prev, saturation: value }))
          }
          min={-100}
          max={100}
        />
      </Stack>

      <Stack spacing={8}>
        <Stack
          direction="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text variant="body">Blur</Text>
          <Text variant="body">{imageSettings.blur}</Text>
        </Stack>
        <Slider
          value={imageSettings.blur}
          onChange={(value) =>
            setImageSettings((prev) => ({ ...prev, blur: value }))
          }
          min={0}
          max={20}
          step={0.5}
        />
      </Stack>
    </Stack>

    <Stack direction="row" spacing={12}>
      <Button variant="outline" onPress={resetSettings}>
        Reset
      </Button>
      <Button onPress={applySettings}>Apply Changes</Button>
    </Stack>
  </Stack>
</Container>;
```

### Filter Controls

```tsx
const [filters, setFilters] = useState({
  priceMin: 0,
  priceMax: 1000,
  rating: 0,
  distance: 10,
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Search Filters</Text>

    <Stack spacing={16}>
      <Stack spacing={8}>
        <Stack
          direction="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text variant="body">Minimum Price</Text>
          <Text variant="body">${filters.priceMin}</Text>
        </Stack>
        <Slider
          value={filters.priceMin}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, priceMin: value }))
          }
          min={0}
          max={1000}
          step={10}
        />
      </Stack>

      <Stack spacing={8}>
        <Stack
          direction="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text variant="body">Maximum Price</Text>
          <Text variant="body">${filters.priceMax}</Text>
        </Stack>
        <Slider
          value={filters.priceMax}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, priceMax: value }))
          }
          min={0}
          max={1000}
          step={10}
        />
      </Stack>

      <Stack spacing={8}>
        <Stack
          direction="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text variant="body">Minimum Rating</Text>
          <Text variant="body">{filters.rating} stars</Text>
        </Stack>
        <Slider
          value={filters.rating}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, rating: value }))
          }
          min={0}
          max={5}
          step={0.5}
        />
      </Stack>

      <Stack spacing={8}>
        <Stack
          direction="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text variant="body">Distance</Text>
          <Text variant="body">{filters.distance} miles</Text>
        </Stack>
        <Slider
          value={filters.distance}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, distance: value }))
          }
          min={1}
          max={50}
          step={1}
        />
      </Stack>
    </Stack>

    <Button onPress={applyFilters}>Apply Filters</Button>
  </Stack>
</Container>;
```

### Game Settings

```tsx
const [gameSettings, setGameSettings] = useState({
  difficulty: 2,
  musicVolume: 70,
  sfxVolume: 80,
  sensitivity: 50,
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Game Settings</Text>

    <Stack spacing={16}>
      <Stack spacing={8}>
        <Stack
          direction="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text variant="body">Difficulty</Text>
          <Text variant="body">
            {gameSettings.difficulty === 1
              ? "Easy"
              : gameSettings.difficulty === 2
              ? "Normal"
              : "Hard"}
          </Text>
        </Stack>
        <Slider
          value={gameSettings.difficulty}
          onChange={(value) =>
            setGameSettings((prev) => ({ ...prev, difficulty: value }))
          }
          min={1}
          max={3}
          step={1}
        />
      </Stack>

      <Stack spacing={8}>
        <Stack
          direction="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text variant="body">Music Volume</Text>
          <Text variant="body">{gameSettings.musicVolume}%</Text>
        </Stack>
        <Slider
          value={gameSettings.musicVolume}
          onChange={(value) =>
            setGameSettings((prev) => ({ ...prev, musicVolume: value }))
          }
          min={0}
          max={100}
        />
      </Stack>

      <Stack spacing={8}>
        <Stack
          direction="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text variant="body">Sound Effects Volume</Text>
          <Text variant="body">{gameSettings.sfxVolume}%</Text>
        </Stack>
        <Slider
          value={gameSettings.sfxVolume}
          onChange={(value) =>
            setGameSettings((prev) => ({ ...prev, sfxVolume: value }))
          }
          min={0}
          max={100}
        />
      </Stack>

      <Stack spacing={8}>
        <Stack
          direction="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text variant="body">Mouse Sensitivity</Text>
          <Text variant="body">{gameSettings.sensitivity}%</Text>
        </Stack>
        <Slider
          value={gameSettings.sensitivity}
          onChange={(value) =>
            setGameSettings((prev) => ({ ...prev, sensitivity: value }))
          }
          min={10}
          max={100}
        />
      </Stack>
    </Stack>

    <Stack direction="row" spacing={12}>
      <Button variant="outline" onPress={resetToDefaults}>
        Reset to Defaults
      </Button>
      <Button onPress={saveSettings}>Save Settings</Button>
    </Stack>
  </Stack>
</Container>;
```

## Best Practices

1. **Use appropriate ranges**: Set min/max values that make sense for your use case
2. **Choose meaningful steps**: Use step values that provide useful increments
3. **Provide visual feedback**: Show the current value alongside the slider
4. **Handle edge cases**: Consider what happens at min/max values
5. **Accessibility**: Ensure sliders are accessible to screen readers

## Accessibility

The Slider component includes built-in accessibility features:

- Proper `accessibilityRole="slider"`
- `accessibilityState` for value and disabled states
- Support for `accessibilityLabel` and `accessibilityHint`

```tsx
<Slider
  label="Volume Control"
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
  accessibilityLabel="Volume slider"
  accessibilityHint="Adjust the volume level from 0 to 100"
/>
```

## Theme Integration

The Slider component automatically uses colors from your theme:

- Track background uses `theme.colors.border`
- Fill color uses `theme.colors.primary`
- Thumb color uses `theme.colors.primary`
- Label text uses `theme.colors.text`
- Error text is red for visibility

## Performance

The Slider component is optimized for performance:

- Efficient gesture handling with PanResponder
- Minimal re-renders during dragging
- Optimized layout calculations
- Lightweight implementation

## Comparison with Other Components

- **Slider vs Input**: Slider is for continuous values, Input is for precise text input
- **Slider vs Switch**: Slider is for range selection, Switch is for boolean toggles
- **Slider vs RadioGroup**: Slider is for continuous values, RadioGroup is for discrete choices
