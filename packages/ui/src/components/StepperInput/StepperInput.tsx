import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

export interface StepperInputProps {
  label?: string;
  value: number;
  onChange: (val: number) => void;
  step?: number;
  min?: number;
  max?: number;
  error?: string;
  disabled?: boolean;
}

export const StepperInput: React.FC<StepperInputProps> = ({
  label,
  value,
  onChange,
  step = 1,
  min = 0,
  max = Infinity,
  error,
  disabled,
}) => {
  const theme = useTheme();

  const increase = () => {
    if (value + step <= max) onChange(value + step);
  };

  const decrease = () => {
    if (value - step >= min) onChange(value - step);
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
    stepperContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: error ? 'red' : theme.colors.border,
      borderRadius: 6,
      overflow: 'hidden',
      backgroundColor: theme.colors.background,
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      backgroundColor: theme.colors.background,
    },
    buttonText: {
      fontSize: theme.fontSizes.lg,
      color: theme.colors.text,
    },
    valueContainer: {
      flex: 1,
      paddingVertical: 10,
      alignItems: 'center',
    },
    valueText: {
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
      <View style={styles.stepperContainer}>
        <TouchableOpacity onPress={decrease} style={styles.button} disabled={disabled || value <= min}>
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>
        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>{value}</Text>
        </View>
        <TouchableOpacity onPress={increase} style={styles.button} disabled={disabled || value >= max}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
