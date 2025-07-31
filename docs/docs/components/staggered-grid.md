# StaggeredGrid

A masonry-style grid component that displays items in a staggered layout, perfect for displaying content with varying heights like images, cards, or posts.

## Import

```tsx
import { StaggeredGrid } from "re-native-ui";
```

## Basic Usage

```tsx
import React from "react";
import { StaggeredGrid } from "re-native-ui";

const data = [
  { id: "1", height: 200, title: "Item 1" },
  { id: "2", height: 150, title: "Item 2" },
  { id: "3", height: 300, title: "Item 3" },
  { id: "4", height: 180, title: "Item 4" },
];

const MyComponent = () => {
  return (
    <StaggeredGrid
      data={data}
      renderItem={({ item }) => (
        <View
          style={{
            height: item.height,
            backgroundColor: "#f0f0f0",
            padding: 16,
            borderRadius: 8,
          }}
        >
          <Text>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      spacing="md"
      getItemHeight={(item, columnWidth) => item.height}
    />
  );
};
```

## Props

### `data`

- **Type**: `ItemT[]`
- **Required**: Yes
- **Description**: Array of items to render in the staggered grid

### `renderItem`

- **Type**: `(props: { item: ItemT; index: number }) => React.ReactNode`
- **Required**: Yes
- **Description**: Function that renders each item in the grid

### `keyExtractor`

- **Type**: `(item: ItemT, index: number) => string`
- **Required**: Yes
- **Description**: Function that extracts a unique key for each item

### `numColumns`

- **Type**: `number | Responsive<number>`
- **Default**: `2`
- **Description**: Number of columns to display. Can be a fixed number or responsive object

### `spacing`

- **Type**: `keyof Theme['spacing'] | number`
- **Default**: `'sm'`
- **Description**: Spacing between grid items. Can be a theme spacing key or raw number

### `getItemHeight`

- **Type**: `(item: ItemT, columnWidth: number) => number`
- **Required**: Yes
- **Description**: Function that calculates the height of each item based on the item data and column width

### `style`

- **Type**: `ViewStyle`
- **Required**: No
- **Description**: Additional styles for the grid container

## Responsive Behavior

The `numColumns` prop supports responsive values that change based on screen size:

```tsx
<StaggeredGrid
  data={data}
  renderItem={renderItem}
  keyExtractor={keyExtractor}
  getItemHeight={getItemHeight}
  numColumns={{
    sm: 1, // 1 column on small screens
    md: 2, // 2 columns on medium screens
    lg: 3, // 3 columns on large screens
  }}
/>
```

## Examples

### Photo Gallery with Varying Aspect Ratios

```tsx
const PhotoGallery = () => {
  const photos = [
    {
      id: "1",
      uri: "https://example.com/photo1.jpg",
      aspectRatio: 1.5, // Landscape
    },
    {
      id: "2",
      uri: "https://example.com/photo2.jpg",
      aspectRatio: 0.8, // Portrait
    },
    {
      id: "3",
      uri: "https://example.com/photo3.jpg",
      aspectRatio: 1, // Square
    },
    {
      id: "4",
      uri: "https://example.com/photo4.jpg",
      aspectRatio: 2, // Wide
    },
  ];

  return (
    <StaggeredGrid
      data={photos}
      renderItem={({ item }) => (
        <View style={{ width: "100%", aspectRatio: item.aspectRatio }}>
          <Image
            source={{ uri: item.uri }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </View>
      )}
      keyExtractor={(item) => item.id}
      numColumns={{ sm: 1, md: 2, lg: 3 }}
      spacing="md"
      getItemHeight={(photo, colW) => colW / photo.aspectRatio}
    />
  );
};
```

### Card Layout with Dynamic Heights

```tsx
const CardGrid = () => {
  const cards = [
    {
      id: "1",
      title: "Short Card",
      content: "This is a short card with minimal content.",
      color: "#ff6b6b",
    },
    {
      id: "2",
      title: "Medium Card",
      content:
        "This card has more content and will be taller than the short card. It includes multiple lines of text to demonstrate the varying heights.",
      color: "#4ecdc4",
    },
    {
      id: "3",
      title: "Long Card",
      content:
        "This is a very long card with lots of content. It will be significantly taller than the other cards. This demonstrates how the staggered grid handles items with different heights naturally.",
      color: "#45b7d1",
    },
  ];

  return (
    <StaggeredGrid
      data={cards}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: item.color,
            padding: 16,
            borderRadius: 8,
            minHeight: 100,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            {item.title}
          </Text>
          <Text style={{ color: "white", marginTop: 8 }}>{item.content}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      spacing="md"
      getItemHeight={(card, colW) => {
        // Estimate height based on content length
        const baseHeight = 100;
        const contentLength = card.content.length;
        const additionalHeight = Math.floor(contentLength / 50) * 20;
        return baseHeight + additionalHeight;
      }}
    />
  );
};
```

### Social Media Feed

```tsx
const SocialFeed = () => {
  const posts = [
    {
      id: "1",
      author: "John Doe",
      content: "Just had an amazing day!",
      imageUrl: "https://example.com/image1.jpg",
      hasImage: true,
    },
    {
      id: "2",
      author: "Jane Smith",
      content:
        "Working on some exciting new features for our app. Can't wait to share more details with everyone!",
      hasImage: false,
    },
    {
      id: "3",
      author: "Bob Johnson",
      content: "Beautiful sunset today",
      imageUrl: "https://example.com/image3.jpg",
      hasImage: true,
    },
  ];

  return (
    <StaggeredGrid
      data={posts}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            padding: 16,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <Text style={{ fontWeight: "bold", marginBottom: 8 }}>
            {item.author}
          </Text>
          <Text style={{ marginBottom: 12 }}>{item.content}</Text>
          {item.hasImage && (
            <Image
              source={{ uri: item.imageUrl }}
              style={{ width: "100%", height: 200, borderRadius: 8 }}
              resizeMode="cover"
            />
          )}
        </View>
      )}
      keyExtractor={(item) => item.id}
      numColumns={{ sm: 1, md: 2 }}
      spacing="lg"
      getItemHeight={(post, colW) => {
        const baseHeight = 120; // Author + content + padding
        const imageHeight = post.hasImage ? 200 : 0;
        const contentLines = Math.ceil(post.content.length / 30);
        const contentHeight = contentLines * 20;
        return baseHeight + imageHeight + contentHeight;
      }}
    />
  );
};
```

### Pinterest-Style Layout

```tsx
const PinterestLayout = () => {
  const pins = [
    {
      id: "1",
      title: "Amazing Recipe",
      imageUrl: "https://example.com/recipe1.jpg",
      aspectRatio: 0.8,
    },
    {
      id: "2",
      title: "Travel Destination",
      imageUrl: "https://example.com/travel1.jpg",
      aspectRatio: 1.2,
    },
    {
      id: "3",
      title: "DIY Project",
      imageUrl: "https://example.com/diy1.jpg",
      aspectRatio: 1.5,
    },
  ];

  return (
    <StaggeredGrid
      data={pins}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          <Image
            source={{ uri: item.imageUrl }}
            style={{ width: "100%", aspectRatio: item.aspectRatio }}
            resizeMode="cover"
          />
          <View style={{ padding: 12 }}>
            <Text style={{ fontWeight: "600", fontSize: 14 }}>
              {item.title}
            </Text>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id}
      numColumns={{ sm: 2, md: 3, lg: 4 }}
      spacing="sm"
      getItemHeight={(pin, colW) => {
        const imageHeight = colW / pin.aspectRatio;
        const titleHeight = 60; // Title + padding
        return imageHeight + titleHeight;
      }}
    />
  );
};
```

## Theme Integration

The StaggeredGrid component integrates with your theme's spacing system:

```tsx
// Using theme spacing keys
<StaggeredGrid
  data={data}
  renderItem={renderItem}
  keyExtractor={keyExtractor}
  getItemHeight={getItemHeight}
  spacing="lg" // Uses theme.spacing.lg
/>

// Using custom spacing
<StaggeredGrid
  data={data}
  renderItem={renderItem}
  keyExtractor={keyExtractor}
  getItemHeight={getItemHeight}
  spacing={24} // Uses 24 pixels
/>
```

## Performance Considerations

- The StaggeredGrid component uses efficient layout algorithms to minimize reflows
- Items are positioned using absolute positioning for optimal performance
- The component calculates heights efficiently to avoid layout thrashing
- Responsive calculations are optimized to minimize re-renders

## Height Calculation Tips

The `getItemHeight` function is crucial for proper layout. Here are some tips:

### For Images with Known Aspect Ratios

```tsx
getItemHeight={(item, colW) => colW / item.aspectRatio}
```

### For Text Content

```tsx
getItemHeight={(item, colW) => {
  const baseHeight = 100;
  const contentLength = item.content.length;
  const charsPerLine = Math.floor(colW / 10); // Approximate characters per line
  const lines = Math.ceil(contentLength / charsPerLine);
  const lineHeight = 20;
  return baseHeight + (lines * lineHeight);
}}
```

### For Mixed Content

```tsx
getItemHeight={(item, colW) => {
  let height = 80; // Base height (padding, margins, etc.)

  if (item.image) {
    height += colW / item.imageAspectRatio;
  }

  if (item.title) {
    height += 24; // Title height
  }

  if (item.content) {
    const contentLines = Math.ceil(item.content.length / 30);
    height += contentLines * 18;
  }

  return height;
}}
```

## Accessibility

- Each grid item should have proper accessibility labels
- Consider using `accessibilityRole` and `accessibilityLabel` in your `renderItem` function
- Ensure proper focus management for interactive items

```tsx
<StaggeredGrid
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
  getItemHeight={getItemHeight}
/>
```

## Comparison with Regular Grid

| Feature      | Grid             | StaggeredGrid         |
| ------------ | ---------------- | --------------------- |
| Layout       | Uniform columns  | Masonry-style         |
| Item Heights | Fixed or uniform | Variable              |
| Use Case     | Cards, lists     | Photos, mixed content |
| Performance  | Excellent        | Good                  |
| Responsive   | Yes              | Yes                   |

## Best Practices

1. **Accurate Height Calculation**: Ensure your `getItemHeight` function returns accurate heights
2. **Optimize Images**: Use appropriate image sizes and formats for better performance
3. **Consider Loading States**: Show placeholders while content loads
4. **Test Responsive Behavior**: Verify layout works well across different screen sizes
5. **Accessibility**: Provide proper labels and focus management for interactive items
