import React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TextInputProps
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, error, style, rightIcon, leftIcon, ...props }) => {
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
    inputWithrightIcon: {
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
    leftIcon: {
      position: 'absolute',
      left: 12,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightIcon: {
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
        <View style={styles.leftIcon}>
          {leftIcon && leftIcon}
        </View>
        <TextInput 
          style={[rightIcon ? styles.inputWithrightIcon : styles.input, style]} 
          placeholderTextColor={theme.colors.muted} 
          {...props} 
        />
        <View style={styles.rightIcon}>
          {rightIcon && rightIcon}
        </View>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
