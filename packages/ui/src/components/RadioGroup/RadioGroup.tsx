import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

export type RadioOption = {
  label: string;
  value: string | number;
};

export interface RadioGroupProps {
  label?: string;
  value: string | number;
  onChange: (val: string | number) => void;
  options: RadioOption[];
  error?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  value,
  onChange,
  options,
  error,
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    label: {
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.xs,
    },
    outerCircle: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: theme.colors.border,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8,
    },
    innerCircle: {
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: theme.colors.primary,
    },
    optionLabel: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
    },
    error: {
      color: 'red',
      fontSize: theme.fontSizes.sm,
      marginTop: 4,
    },
  });

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.option}
          onPress={() => onChange(option.value)}
        >
          <View style={styles.outerCircle}>
            {value === option.value && <View style={styles.innerCircle} />}
          </View>
          <Text style={styles.optionLabel}>{option.label}</Text>
        </TouchableOpacity>
      ))}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
