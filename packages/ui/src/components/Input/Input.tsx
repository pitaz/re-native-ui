import React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TextInputProps
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  rightElement?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, error, style, rightElement, ...props }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    label: {
      marginBottom: theme.spacing.xs,
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text,
    },
    input: {
      borderWidth: 1,
      borderColor: error ? 'red' : theme.colors.border,
      borderRadius: 6,
      paddingVertical: 10,
      paddingHorizontal: 12,
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
      backgroundColor: theme.colors.background,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputWithRightElement: {
      flex: 1,
      borderWidth: 1,
      borderColor: error ? 'red' : theme.colors.border,
      borderRadius: 6,
      paddingVertical: 10,
      paddingHorizontal: 12,
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
      backgroundColor: theme.colors.background,
    },
    error: {
      marginTop: 4,
      color: 'red',
      fontSize: theme.fontSizes.sm,
    },
    rightElement: {
      position: 'absolute',
      right: 12,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput 
          style={[rightElement ? styles.inputWithRightElement : styles.input, style]} 
          placeholderTextColor={theme.colors.muted} 
          {...props} 
        />
        {/* rightElement should be positioned absolutely on the right side of the input */}
        <View style={styles.rightElement}>
          {rightElement && rightElement}
        </View>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
