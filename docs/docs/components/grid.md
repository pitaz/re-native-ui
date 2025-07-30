# Grid

A responsive grid component that displays items in a customizable number of columns with proper spacing and responsive behavior.

## Import

```tsx
import { GridList } from "react-native-ui";
```

## Basic Usage

```tsx
import React from "react";
import { GridList } from "react-native-ui";

const data = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "4", title: "Item 4" },
];

const MyComponent = () => {
  return (
    <GridList
      data={data}
      renderItem={({ item }) => (
        <View style={{ padding: 16, backgroundColor: "#f0f0f0" }}>
          <Text>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      spacing="md"
    />
  );
};
```

## Props

### `data`

- **Type**: `ItemT[]`
- **Required**: Yes
- **Description**: Array of items to render in the grid

### `renderItem`

- **Type**: `ListRenderItem<ItemT>`
- **Required**: Yes
- **Description**: Function that renders each item in the grid

### `keyExtractor`

- **Type**: `(item: ItemT, index: number) => string`
- **Required**: Yes
- **Description**: Function that extracts a unique key for each item

### `numColumns`

- **Type**: `number | Responsive<number>`
- **Default**: `1`
- **Description**: Number of columns to display. Can be a fixed number or responsive object

### `spacing`

- **Type**: `keyof Theme['spacing'] | number`
- **Default**: `'sm'`
- **Description**: Spacing between grid items. Can be a theme spacing key or raw number

### `style`

- **Type**: `ViewStyle`
- **Required**: No
- **Description**: Additional styles for the grid container

## Responsive Behavior

The `numColumns` prop supports responsive values that change based on screen size:

```tsx
<GridList
  data={data}
  renderItem={renderItem}
  keyExtractor={keyExtractor}
  numColumns={{
    sm: 1, // 1 column on small screens
    md: 2, // 2 columns on medium screens
    lg: 3, // 3 columns on large screens
  }}
/>
```

## Examples

### Basic Grid with 2 Columns

```tsx
const BasicGrid = () => {
  const items = [
    { id: "1", title: "Card 1", color: "#ff6b6b" },
    { id: "2", title: "Card 2", color: "#4ecdc4" },
    { id: "3", title: "Card 3", color: "#45b7d1" },
    { id: "4", title: "Card 4", color: "#96ceb4" },
  ];

  return (
    <GridList
      data={items}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: item.color,
            padding: 20,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {item.title}
          </Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      spacing="md"
    />
  );
};
```

### Responsive Grid

```tsx
const ResponsiveGrid = () => {
  const photos = [
    { id: "1", url: "https://example.com/photo1.jpg" },
    { id: "2", url: "https://example.com/photo2.jpg" },
    { id: "3", url: "https://example.com/photo3.jpg" },
    { id: "4", url: "https://example.com/photo4.jpg" },
  ];

  return (
    <GridList
      data={photos}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item.url }}
          style={{ width: "100%", height: 200, borderRadius: 8 }}
          resizeMode="cover"
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={{
        sm: 1, // 1 column on phones
        md: 2, // 2 columns on tablets
        lg: 3, // 3 columns on desktop
      }}
      spacing="lg"
    />
  );
};
```

### Grid with Custom Spacing

```tsx
const CustomSpacingGrid = () => {
  return (
    <GridList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={3}
      spacing={16} // Custom spacing in pixels
      style={{ padding: 20 }}
    />
  );
};
```

## Theme Integration

The Grid component integrates with your theme's spacing system:

```tsx
// Using theme spacing keys
<GridList
  data={data}
  renderItem={renderItem}
  keyExtractor={keyExtractor}
  spacing="lg" // Uses theme.spacing.lg
/>

// Using custom spacing
<GridList
  data={data}
  renderItem={renderItem}
  keyExtractor={keyExtractor}
  spacing={24} // Uses 24 pixels
/>
```

## Performance Considerations

- The Grid component uses React Native's `FlatList` internally for optimal performance
- Items are rendered efficiently with proper recycling
- Responsive calculations are optimized to minimize re-renders

## Accessibility

- Each grid item should have proper accessibility labels
- Consider using `accessibilityRole` and `accessibilityLabel` in your `renderItem` function

```tsx
<GridList
  data={data}
  renderItem={({ item }) => (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={`${item.title} card`}
    >
      <View style={styles.card}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )}
  keyExtractor={keyExtractor}
/>
```
