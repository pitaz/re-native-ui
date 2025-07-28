import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

export interface MaskedInputProps extends Omit<TextInputProps, 'onChangeText'> {
  label?: string;
  value: string;
  onChangeText: (val: string) => void;
  error?: string;
  maskType: 'phone' | 'card' | 'custom';
  maskPattern?: (val: string) => string; // For custom masks
}

const formatPhone = (val: string) => {
  const digits = val.replace(/\D/g, '').slice(0, 10);
  const parts = [];
  if (digits.length > 0) parts.push('(' + digits.slice(0, 3));
  if (digits.length >= 4) parts.push(') ' + digits.slice(3, 6));
  if (digits.length >= 7) parts.push('-' + digits.slice(6, 10));
  return parts.join('');
};

const formatCard = (val: string) => {
  return val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
};

export const MaskedInput: React.FC<MaskedInputProps> = ({
  label,
  value,
  onChangeText,
  error,
  maskType,
  maskPattern,
  ...props
}) => {
  const theme = useTheme();

  const formatValue = (val: string) => {
    switch (maskType) {
      case 'phone':
        return formatPhone(val);
      case 'card':
        return formatCard(val);
      case 'custom':
        return maskPattern ? maskPattern(val) : val;
      default:
        return val;
    }
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
    input: {
      borderWidth: 1,
      borderColor: error ? 'red' : theme.colors.border,
      borderRadius: 6,
      paddingVertical: 12,
      paddingHorizontal: 14,
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
      backgroundColor: theme.colors.background,
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
      <TextInput
        value={value}
        onChangeText={(text) => onChangeText(formatValue(text))}
        style={styles.input}
        placeholderTextColor={theme.colors.muted}
        keyboardType="numeric"
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
