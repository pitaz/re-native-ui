---
title: TagInput
description: A tag input component for adding and removing multiple tags or labels
---

# TagInput

The TagInput component provides an interface for adding and removing multiple tags or labels. It's perfect for categories, keywords, skills, and any scenario where users need to manage a list of text items.

## Basic Usage

```tsx
import { TagInput } from "re-native-ui";

const [tags, setTags] = useState(["react", "typescript"]);

<TagInput
  label="Skills"
  tags={tags}
  onChange={setTags}
  placeholder="Add a skill"
/>;
```

## Props

| Prop          | Type                       | Default       | Description                              |
| ------------- | -------------------------- | ------------- | ---------------------------------------- |
| `label`       | `string`                   | -             | Label text displayed above the input     |
| `tags`        | `string[]`                 | -             | Array of current tags                    |
| `onChange`    | `(tags: string[]) => void` | -             | Callback function when tags change       |
| `placeholder` | `string`                   | `'Add a tag'` | Placeholder text for the input field     |
| `error`       | `string`                   | -             | Error message to display below the input |
| `maxTags`     | `number`                   | -             | Maximum number of tags allowed           |

## Examples

### Basic Tag Input

```tsx
const [skills, setSkills] = useState(["JavaScript", "React"]);

<TagInput
  label="Skills"
  tags={skills}
  onChange={setSkills}
  placeholder="Add a skill"
/>;
```

### Tag Input with Maximum Tags

```tsx
const [categories, setCategories] = useState(["Technology"]);

<TagInput
  label="Categories"
  tags={categories}
  onChange={setCategories}
  placeholder="Add category"
  maxTags={5}
/>;
```

### Tag Input with Error State

```tsx
const [keywords, setKeywords] = useState(["react-native"]);
const [error, setError] = useState("");

<TagInput
  label="Keywords"
  tags={keywords}
  onChange={(newTags) => {
    setKeywords(newTags);
    if (newTags.length > 10) {
      setError("Maximum 10 keywords allowed");
    } else {
      setError("");
    }
  }}
  placeholder="Add keyword"
  error={error}
/>;
```

### Tag Input with Custom Styling

```tsx
const [interests, setInterests] = useState(["Music", "Travel"]);

<TagInput
  label="Interests"
  tags={interests}
  onChange={setInterests}
  placeholder="Add an interest"
  style={{
    borderWidth: 2,
    borderColor: "#007AFF",
    borderRadius: 8,
  }}
/>;
```

## Use Cases

### Skills Management

```tsx
const [profile, setProfile] = useState({
  name: "",
  title: "",
  skills: ["JavaScript", "React", "TypeScript"],
  experience: "",
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Professional Profile</Text>

    <Input
      label="Full Name"
      value={profile.name}
      onChangeText={(value) => setProfile((prev) => ({ ...prev, name: value }))}
    />

    <Input
      label="Job Title"
      value={profile.title}
      onChangeText={(value) =>
        setProfile((prev) => ({ ...prev, title: value }))
      }
    />

    <TagInput
      label="Skills"
      tags={profile.skills}
      onChange={(skills) => setProfile((prev) => ({ ...prev, skills }))}
      placeholder="Add a skill"
      maxTags={15}
    />

    <TextArea
      label="Experience"
      value={profile.experience}
      onChangeText={(value) =>
        setProfile((prev) => ({ ...prev, experience: value }))
      }
      rows={6}
    />

    <Button disabled={!profile.name || !profile.title} onPress={saveProfile}>
      Save Profile
    </Button>
  </Stack>
</Container>;
```

### Blog Post Categories

```tsx
const [post, setPost] = useState({
  title: "",
  content: "",
  categories: ["Technology"],
  tags: ["react", "javascript"],
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Create Blog Post</Text>

    <Input
      label="Title"
      value={post.title}
      onChangeText={(value) => setPost((prev) => ({ ...prev, title: value }))}
    />

    <TagInput
      label="Categories"
      tags={post.categories}
      onChange={(categories) => setPost((prev) => ({ ...prev, categories }))}
      placeholder="Add category"
      maxTags={3}
    />

    <TagInput
      label="Tags"
      tags={post.tags}
      onChange={(tags) => setPost((prev) => ({ ...prev, tags }))}
      placeholder="Add tag"
      maxTags={10}
    />

    <TextArea
      label="Content"
      value={post.content}
      onChangeText={(value) => setPost((prev) => ({ ...prev, content: value }))}
      rows={12}
    />

    <Button disabled={!post.title || !post.content} onPress={publishPost}>
      Publish Post
    </Button>
  </Stack>
</Container>;
```

### Project Management

```tsx
const [project, setProject] = useState({
  name: "",
  description: "",
  team: ["John Doe", "Jane Smith"],
  technologies: ["React", "Node.js"],
  status: "In Progress",
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Project Details</Text>

    <Input
      label="Project Name"
      value={project.name}
      onChangeText={(value) => setProject((prev) => ({ ...prev, name: value }))}
    />

    <TextArea
      label="Description"
      value={project.description}
      onChangeText={(value) =>
        setProject((prev) => ({ ...prev, description: value }))
      }
      rows={4}
    />

    <TagInput
      label="Team Members"
      tags={project.team}
      onChange={(team) => setProject((prev) => ({ ...prev, team }))}
      placeholder="Add team member"
    />

    <TagInput
      label="Technologies"
      tags={project.technologies}
      onChange={(technologies) =>
        setProject((prev) => ({ ...prev, technologies }))
      }
      placeholder="Add technology"
    />

    <Select
      label="Status"
      placeholder="Select status"
      value={project.status}
      onChange={(status) => setProject((prev) => ({ ...prev, status }))}
      options={[
        { label: "Planning", value: "Planning" },
        { label: "In Progress", value: "In Progress" },
        { label: "Review", value: "Review" },
        { label: "Completed", value: "Completed" },
      ]}
    />

    <Button
      disabled={!project.name || !project.description}
      onPress={saveProject}
    >
      Save Project
    </Button>
  </Stack>
</Container>;
```

### Event Planning

```tsx
const [event, setEvent] = useState({
  title: "",
  date: new Date(),
  attendees: ["Alice Johnson", "Bob Wilson"],
  topics: ["Networking", "Technology Trends"],
  location: "",
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Event Planning</Text>

    <Input
      label="Event Title"
      value={event.title}
      onChangeText={(value) => setEvent((prev) => ({ ...prev, title: value }))}
    />

    <DatePicker
      label="Event Date"
      value={event.date}
      onChange={(date) => setEvent((prev) => ({ ...prev, date }))}
    />

    <TagInput
      label="Attendees"
      tags={event.attendees}
      onChange={(attendees) => setEvent((prev) => ({ ...prev, attendees }))}
      placeholder="Add attendee"
    />

    <TagInput
      label="Discussion Topics"
      tags={event.topics}
      onChange={(topics) => setEvent((prev) => ({ ...prev, topics }))}
      placeholder="Add topic"
    />

    <Input
      label="Location"
      value={event.location}
      onChangeText={(value) =>
        setEvent((prev) => ({ ...prev, location: value }))
      }
    />

    <Button disabled={!event.title || !event.location} onPress={createEvent}>
      Create Event
    </Button>
  </Stack>
</Container>;
```

### Product Management

```tsx
const [product, setProduct] = useState({
  name: "",
  description: "",
  features: ["Fast Performance", "Easy to Use"],
  targetAudience: ["Developers", "Designers"],
  price: "",
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Product Information</Text>

    <Input
      label="Product Name"
      value={product.name}
      onChangeText={(value) => setProduct((prev) => ({ ...prev, name: value }))}
    />

    <TextArea
      label="Description"
      value={product.description}
      onChangeText={(value) =>
        setProduct((prev) => ({ ...prev, description: value }))
      }
      rows={4}
    />

    <TagInput
      label="Key Features"
      tags={product.features}
      onChange={(features) => setProduct((prev) => ({ ...prev, features }))}
      placeholder="Add feature"
    />

    <TagInput
      label="Target Audience"
      tags={product.targetAudience}
      onChange={(targetAudience) =>
        setProduct((prev) => ({ ...prev, targetAudience }))
      }
      placeholder="Add audience"
    />

    <Input
      label="Price"
      value={product.price}
      onChangeText={(value) =>
        setProduct((prev) => ({ ...prev, price: value }))
      }
      keyboardType="numeric"
    />

    <Button
      disabled={!product.name || !product.description || !product.price}
      onPress={saveProduct}
    >
      Save Product
    </Button>
  </Stack>
</Container>;
```

### Recipe Management

```tsx
const [recipe, setRecipe] = useState({
  name: "",
  ingredients: ["Flour", "Sugar", "Eggs"],
  instructions: "",
  tags: ["Dessert", "Quick"],
  cookingTime: "",
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Recipe Details</Text>

    <Input
      label="Recipe Name"
      value={recipe.name}
      onChangeText={(value) => setRecipe((prev) => ({ ...prev, name: value }))}
    />

    <TagInput
      label="Ingredients"
      tags={recipe.ingredients}
      onChange={(ingredients) =>
        setRecipe((prev) => ({ ...prev, ingredients }))
      }
      placeholder="Add ingredient"
    />

    <TextArea
      label="Instructions"
      value={recipe.instructions}
      onChangeText={(value) =>
        setRecipe((prev) => ({ ...prev, instructions: value }))
      }
      rows={8}
    />

    <TagInput
      label="Tags"
      tags={recipe.tags}
      onChange={(tags) => setRecipe((prev) => ({ ...prev, tags }))}
      placeholder="Add tag"
    />

    <Input
      label="Cooking Time"
      value={recipe.cookingTime}
      onChangeText={(value) =>
        setRecipe((prev) => ({ ...prev, cookingTime: value }))
      }
      placeholder="e.g., 30 minutes"
    />

    <Button
      disabled={!recipe.name || !recipe.instructions}
      onPress={saveRecipe}
    >
      Save Recipe
    </Button>
  </Stack>
</Container>;
```

## Best Practices

1. **Set appropriate limits**: Use `maxTags` to prevent overwhelming the interface
2. **Provide clear placeholders**: Use descriptive placeholders to guide users
3. **Handle validation**: Use error states to validate tag input
4. **Consider duplicates**: The component automatically prevents duplicate tags
5. **Accessibility**: Ensure tag inputs are accessible to screen readers

## Accessibility

The TagInput component includes built-in accessibility features:

- Proper `accessibilityRole="text"`
- `accessibilityState` for error states
- Support for `accessibilityLabel` and `accessibilityHint`

```tsx
<TagInput
  label="Skills"
  tags={skills}
  onChange={setSkills}
  accessibilityLabel="Skills input"
  accessibilityHint="Add or remove skills by typing and pressing space or comma"
/>
```

## Theme Integration

The TagInput component automatically uses colors from your theme:

- Border color uses `theme.colors.border`
- Text color uses `theme.colors.text`
- Background color uses `theme.colors.background`
- Tag background uses `theme.colors.primary`
- Error text is red for visibility
- Placeholder color uses `theme.colors.muted`

## Performance

The TagInput component is optimized for performance:

- Efficient tag rendering
- Minimal re-renders
- Optimized input handling
- Lightweight implementation

## Comparison with Other Components

- **TagInput vs Input**: TagInput manages multiple values, Input is for single values
- **TagInput vs Select**: TagInput allows custom values, Select uses predefined options
- **TagInput vs CheckBox**: TagInput is for text tags, CheckBox is for boolean selections
