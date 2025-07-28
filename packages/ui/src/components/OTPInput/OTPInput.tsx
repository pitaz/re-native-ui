import React, { useRef, useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

export interface OTPInputProps extends Omit<TextInputProps, 'onChangeText'> {
  length?: number;
  value: string;
  onChangeText: (val: string) => void;
  error?: string;
  label?: string;
}

export const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  value,
  onChangeText,
  error,
  label,
  ...inputProps
}) => {
  const theme = useTheme();
  const [focusedIndex, setFocusedIndex] = useState(0);
  const inputs = useRef<Array<TextInput | null>>([]);

  const styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    label: {
      marginBottom: theme.spacing.xs,
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text,
    },
    inputRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    inputBox: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 6,
      width: 40,
      height: 50,
      textAlign: 'center',
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
      backgroundColor: theme.colors.background,
    },
    inputBoxFocused: {
      borderColor: theme.colors.primary,
    },
    error: {
      marginTop: 4,
      color: 'red',
      fontSize: theme.fontSizes.sm,
    },
  });

  const handleChange = (text: string, index: number) => {
    if (!/^[0-9]?$/.test(text)) return;

    const updated = value.split('');
    updated[index] = text;
    const newValue = updated.join('');
    onChangeText(newValue);

    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace' && !value[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputRow}>
        {Array.from({ length }).map((_, i) => (
          <TextInput
            key={i}
            ref={(ref) => {
              inputs.current[i] = ref;
            }}
            value={value[i] || ''}
            onChangeText={(text) => handleChange(text, i)}
            onKeyPress={(e) => handleKeyPress(e, i)}
            style={[
              styles.inputBox,
              focusedIndex === i && styles.inputBoxFocused,
            ]}
            onFocus={() => setFocusedIndex(i)}
            keyboardType="numeric"
            maxLength={1}
            {...inputProps}
          />
        ))}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
