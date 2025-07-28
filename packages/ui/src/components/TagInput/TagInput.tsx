import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

export interface TagInputProps {
  label?: string;
  tags: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
  error?: string;
  maxTags?: number;
}

export const TagInput: React.FC<TagInputProps> = ({
  label,
  tags,
  onChange,
  placeholder = 'Add a tag',
  error,
  maxTags,
}) => {
  const theme = useTheme();
  const [input, setInput] = useState('');
  const inputRef = useRef<TextInput>(null);

  const handleAddTag = () => {
    const trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) {
      if (!maxTags || tags.length < maxTags) {
        onChange([...tags, trimmed]);
      }
    }
    setInput('');
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (e.nativeEvent.key === 'Backspace' && input === '' && tags.length) {
      onChange(tags.slice(0, -1));
    }
  };

  const handleInputChange = (text: string) => {
    if (text.endsWith(' ') || text.endsWith(',') || text.endsWith('\n')) {
      handleAddTag();
    } else {
      setInput(text);
    }
  };

  const removeTag = (index: number) => {
    const updated = [...tags];
    updated.splice(index, 1);
    onChange(updated);
  };

  const styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    label: {
      marginBottom: theme.spacing.xs,
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text,
    },
    tagContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: error ? 'red' : theme.colors.border,
      borderRadius: 6,
      backgroundColor: theme.colors.background,
    },
    tag: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 4,
      paddingHorizontal: 8,
      backgroundColor: theme.colors.primary,
      borderRadius: 16,
    },
    tagText: {
      color: theme.colors.primary,
      fontSize: theme.fontSizes.sm,
      marginRight: 6,
    },
    removeBtn: {
      paddingHorizontal: 4,
    },
    input: {
      flexGrow: 1,
      minWidth: 80,
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
    },
    error: {
      marginTop: 4,
      color: 'red',
      fontSize: theme.fontSizes.sm,
    },
  });

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <ScrollView horizontal={false} contentContainerStyle={styles.tagContainer}>
        {tags.map((tag, idx) => (
          <View key={idx} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
            <TouchableOpacity onPress={() => removeTag(idx)} style={styles.removeBtn}>
              <Text style={{ color: theme.colors.primary }}>×</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TextInput
          ref={inputRef}
          value={input}
          onChangeText={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.muted}
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={handleAddTag}
        />
      </ScrollView>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
