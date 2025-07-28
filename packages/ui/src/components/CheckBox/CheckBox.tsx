import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

export interface CheckBoxProps {
  label?: string;
  value: boolean;
  onChange: (val: boolean) => void;
  error?: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ label, value, onChange, error }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      marginBottom: theme.spacing.md,
    },
    checkboxWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    box: {
      width: 22,
      height: 22,
      borderWidth: 1.5,
      borderColor: error ? theme.colors.error : (value ? theme.colors.primary : theme.colors.border),
      backgroundColor: value ? theme.colors.primary : theme.colors.background,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
      shadowColor: value ? theme.colors.primary : 'transparent',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: value ? 0.2 : 0,
      shadowRadius: 4,
      elevation: value ? 2 : 0,
    },
    check: {
      width: 12,
      height: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkMark: {
      width: 8,
      height: 4,
      borderLeftWidth: 2,
      borderBottomWidth: 2,
      borderColor: theme.colors.background,
      transform: [{ rotate: '-45deg' }],
      marginTop: -1,
    },
    label: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
      flex: 1,
    },
    error: {
      color: theme.colors.error,
      fontSize: theme.fontSizes.sm,
      marginTop: 4,
      marginLeft: 34, // Align with label text
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.checkboxWrapper} 
        onPress={() => onChange(!value)}
        activeOpacity={0.7}
      >
        <View style={styles.box}>
          {value && (
            <View style={styles.check}>
              <View style={styles.checkMark} />
            </View>
          )}
        </View>
        {label && <Text style={styles.label}>{label}</Text>}
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
