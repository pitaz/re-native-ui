import React from 'react';
import { View, Text, StyleSheet, Switch as RNSwitch } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

export interface SwitchProps {
  label?: string;
  value: boolean;
  onChange: (val: boolean) => void;
  error?: string;
}

export const Switch: React.FC<SwitchProps> = ({ label, value, onChange, error }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    labelContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    label: {
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
      <View style={styles.labelContainer}>
        {label && <Text style={styles.label}>{label}</Text>}
        <RNSwitch
          value={value}
          onValueChange={onChange}
          thumbColor={value ? theme.colors.primary : theme.colors.muted}
          trackColor={{
            false: theme.colors.border,
            true: theme.colors.primary,
          }}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
