---
title: TextArea
description: A multi-line text input component for longer text content
---

# TextArea

The TextArea component provides a multi-line text input field for longer text content. It's perfect for comments, descriptions, messages, and any scenario where users need to enter multiple lines of text.

## Basic Usage

```tsx
import { TextArea } from "re-native-ui";

const [message, setMessage] = useState("");

<TextArea
  label="Message"
  placeholder="Enter your message here..."
  value={message}
  onChangeText={setMessage}
/>;
```

## Props

| Prop    | Type                   | Default | Description                                  |
| ------- | ---------------------- | ------- | -------------------------------------------- |
| `label` | `string`               | -       | Label text displayed above the text area     |
| `error` | `string`               | -       | Error message to display below the text area |
| `rows`  | `number`               | `4`     | Number of visible rows for the text area     |
| `style` | `StyleProp<TextStyle>` | -       | Additional styles to apply                   |

**Note:** The TextArea component extends all props from React Native's `TextInput` component, so you can use any standard TextInput props like `placeholder`, `value`, `onChangeText`, `multiline`, etc.

## Examples

### Basic TextArea

```tsx
const [description, setDescription] = useState("");

<TextArea
  label="Description"
  placeholder="Enter a description..."
  value={description}
  onChangeText={setDescription}
/>;
```

### TextArea with Custom Rows

```tsx
const [bio, setBio] = useState("");

<TextArea
  label="Bio"
  placeholder="Tell us about yourself..."
  value={bio}
  onChangeText={setBio}
  rows={6}
/>;
```

### TextArea with Error State

```tsx
const [comment, setComment] = useState("");
const [error, setError] = useState("");

<TextArea
  label="Comment"
  placeholder="Write your comment..."
  value={comment}
  onChangeText={(value) => {
    setComment(value);
    if (value.length < 10) {
      setError("Comment must be at least 10 characters long");
    } else {
      setError("");
    }
  }}
  error={error}
/>;
```

### TextArea with Character Limit

```tsx
const [review, setReview] = useState("");
const maxLength = 500;

<Stack spacing={8}>
  <TextArea
    label="Product Review"
    placeholder="Share your experience with this product..."
    value={review}
    onChangeText={setReview}
    maxLength={maxLength}
    rows={5}
  />
  <Text variant="caption" style={{ textAlign: "right" }}>
    {review.length}/{maxLength} characters
  </Text>
</Stack>;
```

### TextArea with Custom Styling

```tsx
const [notes, setNotes] = useState("");

<TextArea
  label="Notes"
  placeholder="Add your notes here..."
  value={notes}
  onChangeText={setNotes}
  rows={8}
  style={{
    borderWidth: 2,
    borderColor: "#007AFF",
    borderRadius: 8,
    padding: 12,
  }}
/>;
```

## Use Cases

### Contact Form

```tsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Contact Us</Text>

    <Input
      label="Name"
      value={formData.name}
      onChangeText={(value) =>
        setFormData((prev) => ({ ...prev, name: value }))
      }
    />

    <Input
      label="Email"
      value={formData.email}
      onChangeText={(value) =>
        setFormData((prev) => ({ ...prev, email: value }))
      }
      keyboardType="email-address"
    />

    <Input
      label="Subject"
      value={formData.subject}
      onChangeText={(value) =>
        setFormData((prev) => ({ ...prev, subject: value }))
      }
    />

    <TextArea
      label="Message"
      placeholder="Tell us how we can help you..."
      value={formData.message}
      onChangeText={(value) =>
        setFormData((prev) => ({ ...prev, message: value }))
      }
      rows={6}
    />

    <Button
      disabled={!formData.name || !formData.email || !formData.message}
      onPress={handleSubmit}
    >
      Send Message
    </Button>
  </Stack>
</Container>;
```

### Product Review Form

```tsx
const [review, setReview] = useState({
  rating: 0,
  title: "",
  content: "",
});

const maxLength = 1000;

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Write a Review</Text>

    <Stack spacing={8}>
      <Text variant="body">Rating</Text>
      <Stack direction="row" spacing={8}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => setReview((prev) => ({ ...prev, rating: star }))}
          >
            <Text
              style={{
                fontSize: 24,
                color: star <= review.rating ? "#FFD700" : "#ccc",
              }}
            >
              ★
            </Text>
          </TouchableOpacity>
        ))}
      </Stack>
    </Stack>

    <Input
      label="Review Title"
      placeholder="Summarize your experience"
      value={review.title}
      onChangeText={(value) => setReview((prev) => ({ ...prev, title: value }))}
    />

    <Stack spacing={8}>
      <TextArea
        label="Review Content"
        placeholder="Share your detailed experience with this product..."
        value={review.content}
        onChangeText={(value) =>
          setReview((prev) => ({ ...prev, content: value }))
        }
        rows={8}
        maxLength={maxLength}
      />
      <Text variant="caption" style={{ textAlign: "right" }}>
        {review.content.length}/{maxLength} characters
      </Text>
    </Stack>

    <Button
      disabled={!review.rating || !review.title || !review.content}
      onPress={submitReview}
    >
      Submit Review
    </Button>
  </Stack>
</Container>;
```

### Blog Post Editor

```tsx
const [post, setPost] = useState({
  title: "",
  excerpt: "",
  content: "",
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Create New Post</Text>

    <Input
      label="Title"
      placeholder="Enter post title"
      value={post.title}
      onChangeText={(value) => setPost((prev) => ({ ...prev, title: value }))}
    />

    <TextArea
      label="Excerpt"
      placeholder="Brief summary of your post..."
      value={post.excerpt}
      onChangeText={(value) => setPost((prev) => ({ ...prev, excerpt: value }))}
      rows={3}
      maxLength={200}
    />

    <TextArea
      label="Content"
      placeholder="Write your post content here..."
      value={post.content}
      onChangeText={(value) => setPost((prev) => ({ ...prev, content: value }))}
      rows={12}
    />

    <Stack direction="row" spacing={12}>
      <Button variant="outline" onPress={saveDraft}>
        Save Draft
      </Button>
      <Button onPress={publishPost}>Publish Post</Button>
    </Stack>
  </Stack>
</Container>;
```

### Feedback Form

```tsx
const [feedback, setFeedback] = useState({
  category: "",
  description: "",
  suggestions: "",
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Send Feedback</Text>

    <Select
      label="Feedback Category"
      placeholder="Select category"
      value={feedback.category}
      onChange={(value) =>
        setFeedback((prev) => ({ ...prev, category: value }))
      }
      options={[
        { label: "Bug Report", value: "bug" },
        { label: "Feature Request", value: "feature" },
        { label: "General Feedback", value: "general" },
        { label: "Other", value: "other" },
      ]}
    />

    <TextArea
      label="Description"
      placeholder="Please describe the issue or suggestion..."
      value={feedback.description}
      onChangeText={(value) =>
        setFeedback((prev) => ({ ...prev, description: value }))
      }
      rows={6}
    />

    <TextArea
      label="Additional Suggestions"
      placeholder="Any additional comments or suggestions..."
      value={feedback.suggestions}
      onChangeText={(value) =>
        setFeedback((prev) => ({ ...prev, suggestions: value }))
      }
      rows={4}
    />

    <Button
      disabled={!feedback.category || !feedback.description}
      onPress={submitFeedback}
    >
      Submit Feedback
    </Button>
  </Stack>
</Container>;
```

### Meeting Notes

```tsx
const [meeting, setMeeting] = useState({
  title: "",
  attendees: "",
  agenda: "",
  notes: "",
  actionItems: "",
});

<Container>
  <Stack spacing={20}>
    <Text variant="heading">Meeting Notes</Text>

    <Input
      label="Meeting Title"
      value={meeting.title}
      onChangeText={(value) =>
        setMeeting((prev) => ({ ...prev, title: value }))
      }
    />

    <Input
      label="Attendees"
      placeholder="List meeting participants"
      value={meeting.attendees}
      onChangeText={(value) =>
        setMeeting((prev) => ({ ...prev, attendees: value }))
      }
    />

    <TextArea
      label="Agenda"
      placeholder="Meeting agenda items..."
      value={meeting.agenda}
      onChangeText={(value) =>
        setMeeting((prev) => ({ ...prev, agenda: value }))
      }
      rows={4}
    />

    <TextArea
      label="Notes"
      placeholder="Meeting notes and discussion points..."
      value={meeting.notes}
      onChangeText={(value) =>
        setMeeting((prev) => ({ ...prev, notes: value }))
      }
      rows={8}
    />

    <TextArea
      label="Action Items"
      placeholder="Action items and next steps..."
      value={meeting.actionItems}
      onChangeText={(value) =>
        setMeeting((prev) => ({ ...prev, actionItems: value }))
      }
      rows={4}
    />

    <Stack direction="row" spacing={12}>
      <Button variant="outline" onPress={saveNotes}>
        Save Notes
      </Button>
      <Button onPress={shareNotes}>Share Notes</Button>
    </Stack>
  </Stack>
</Container>;
```

## Best Practices

1. **Use appropriate row counts**: Choose row counts that match the expected content length
2. **Provide clear placeholders**: Use descriptive placeholders to guide users
3. **Handle character limits**: Consider adding character counters for longer content
4. **Validate input**: Use error states to provide feedback on validation
5. **Accessibility**: Ensure text areas are accessible to screen readers

## Accessibility

The TextArea component inherits all accessibility features from React Native's `TextInput` component:

- Supports `accessibilityLabel` and `accessibilityHint`
- Works with screen readers
- Maintains proper focus management

```tsx
<TextArea
  label="Message"
  placeholder="Enter your message"
  value={message}
  onChangeText={setMessage}
  accessibilityLabel="Message text area"
  accessibilityHint="Enter your message in this multi-line text field"
/>
```

## Theme Integration

The TextArea component automatically uses colors from your theme through the Input component:

- Text color uses `theme.colors.text`
- Border color uses `theme.colors.border`
- Error text is red for visibility
- Label text uses `theme.colors.text`

## Performance

The TextArea component is optimized for performance:

- Minimal re-renders
- Efficient text input handling
- Lightweight implementation

## Comparison with Other Components

- **TextArea vs Input**: TextArea is for multi-line text, Input is for single-line text
- **TextArea vs Text**: TextArea is for user input, Text is for display only
- **TextArea vs TextArea**: TextArea provides a simpler API than raw TextInput for multi-line content
