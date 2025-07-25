import React from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

type ButtonVariant = 'solid' | 'outline';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  disabled = false,
  loading = false,
  variant = 'solid',
}) => {
  const theme = useTheme();

  const baseStyle: ViewStyle = {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const solidStyle: ViewStyle = {
    backgroundColor: theme.colors.primary,
  };

  const outlineStyle: ViewStyle = {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    backgroundColor: 'transparent',
  };

  const textStyle: TextStyle = {
    color: variant === 'solid' ? '#fff' : theme.colors.primary,
    fontWeight: 'bold',
    fontSize: theme.fontSizes.md,
  };

  const combinedStyle = [
    baseStyle,
    variant === 'solid' ? solidStyle : outlineStyle,
    disabled && { opacity: 0.6 },
  ];

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled || loading} style={combinedStyle}>
      {loading ? <ActivityIndicator color="#fff" /> : <Text style={textStyle}>{children}</Text>}
    </TouchableOpacity>
  );
};
