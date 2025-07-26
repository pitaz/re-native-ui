# Search Input

The SearchInput component provides a specialized input field for search functionality with built-in search icon and clear button.

## Basic Usage

```tsx
import { SearchInput } from "react-native-ui";

const [searchQuery, setSearchQuery] = useState("");

<SearchInput
  value={searchQuery}
  onChangeText={setSearchQuery}
  placeholder="Search..."
  onSearch={(query) => console.log("Searching for:", query)}
/>;
```

## Props

| Prop             | Type                      | Default       | Description           |
| ---------------- | ------------------------- | ------------- | --------------------- |
| `value`          | `string`                  | -             | Input value           |
| `onChangeText`   | `(text: string) => void`  | -             | Text change handler   |
| `onSearch`       | `(query: string) => void` | -             | Search submit handler |
| `placeholder`    | `string`                  | `'Search...'` | Placeholder text      |
| `label`          | `string`                  | -             | Input label           |
| `error`          | `string`                  | -             | Error message         |
| `disabled`       | `boolean`                 | `false`       | Disabled state        |
| `clearable`      | `boolean`                 | `true`        | Show clear button     |
| `autoFocus`      | `boolean`                 | `false`       | Auto focus on mount   |
| `returnKeyType`  | `ReturnKeyType`           | `'search'`    | Return key type       |
| `keyboardType`   | `KeyboardType`            | `'default'`   | Keyboard type         |
| `autoCapitalize` | `AutoCapitalize`          | `'none'`      | Auto capitalization   |
| `autoCorrect`    | `boolean`                 | `false`       | Auto correction       |
| `style`          | `StyleProp<ViewStyle>`    | -             | Additional styles     |

## Examples

### Basic Search

```tsx
const [query, setQuery] = useState("");

<SearchInput
  value={query}
  onChangeText={setQuery}
  placeholder="Search products..."
  onSearch={(searchQuery) => {
    console.log("Searching for:", searchQuery);
    // Perform search logic here
  }}
/>;
```

### With Label and Error

```tsx
const [searchTerm, setSearchTerm] = useState("");
const [error, setError] = useState("");

<SearchInput
  label="Search Users"
  value={searchTerm}
  onChangeText={setSearchTerm}
  error={error}
  placeholder="Enter username or email..."
  onSearch={(query) => {
    if (query.length < 3) {
      setError("Search term must be at least 3 characters");
      return;
    }
    setError("");
    // Perform search
  }}
/>;
```

### Disabled State

```tsx
<SearchInput
  value=""
  onChangeText={() => {}}
  disabled={true}
  placeholder="Search is disabled"
/>
```

### Custom Styling

```tsx
<SearchInput
  value={searchQuery}
  onChangeText={setSearchQuery}
  placeholder="Custom styled search..."
  style={{
    backgroundColor: "#f5f5f5",
    borderRadius: 25,
    marginHorizontal: 16,
  }}
/>
```

### Without Clear Button

```tsx
<SearchInput
  value={searchQuery}
  onChangeText={setSearchQuery}
  clearable={false}
  placeholder="Search without clear button..."
/>
```

## Search Functionality

The SearchInput component provides several ways to handle search:

### On Text Change

```tsx
const [results, setResults] = useState([]);

<SearchInput
  value={searchQuery}
  onChangeText={(text) => {
    setSearchQuery(text);
    // Debounced search
    if (text.length > 2) {
      performSearch(text);
    }
  }}
  placeholder="Search with debouncing..."
/>;
```

### On Search Submit

```tsx
<SearchInput
  value={searchQuery}
  onChangeText={setSearchQuery}
  onSearch={(query) => {
    // This fires when user presses search/enter
    performSearch(query);
  }}
  placeholder="Press enter to search..."
/>
```

### Combined Approach

```tsx
const [searchQuery, setSearchQuery] = useState("");
const [isSearching, setIsSearching] = useState(false);

<SearchInput
  value={searchQuery}
  onChangeText={setSearchQuery}
  onSearch={(query) => {
    setIsSearching(true);
    performSearch(query).finally(() => {
      setIsSearching(false);
    });
  }}
  placeholder="Search..."
/>;
{
  isSearching && <Text>Searching...</Text>;
}
```

## Accessibility

The SearchInput component includes built-in accessibility features:

- Proper `accessibilityRole="search"`
- `accessibilityLabel` and `accessibilityHint` support
- Clear button accessibility

```tsx
<SearchInput
  value={searchQuery}
  onChangeText={setSearchQuery}
  placeholder="Search products"
  accessibilityLabel="Search products"
  accessibilityHint="Enter product name to search"
/>
```

## Integration with Lists

```tsx
const [searchQuery, setSearchQuery] = useState("");
const [filteredItems, setFilteredItems] = useState(items);

useEffect(() => {
  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setFilteredItems(filtered);
}, [searchQuery]);

return (
  <Stack spacing={16}>
    <SearchInput
      value={searchQuery}
      onChangeText={setSearchQuery}
      placeholder="Filter items..."
    />
    <FlatList
      data={filteredItems}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={(item) => item.id}
    />
  </Stack>
);
```

## Custom Search Icon

```tsx
<SearchInput
  value={searchQuery}
  onChangeText={setSearchQuery}
  placeholder="Custom search..."
  // You can customize the search icon by passing a custom component
  searchIcon={<CustomSearchIcon />}
/>
```
