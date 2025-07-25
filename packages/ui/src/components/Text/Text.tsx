import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

type Variant = 'heading' | 'subheading' | 'body' | 'caption';

interface CustomTextProps extends TextProps {
  variant?: Variant;
  children: React.ReactNode;
}

export const Text: React.FC<CustomTextProps> = ({
  variant = 'body',
  style,
  children,
  ...props
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    heading: {
      fontSize: theme.fontSizes.xl,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    subheading: {
      fontSize: theme.fontSizes.lg,
      fontWeight: '600',
      color: theme.colors.text,
    },
    body: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
    },
    caption: {
      fontSize: theme.fontSizes.sm,
      color: theme.colors.muted,
    },
  });

  return (
    <RNText style={[styles[variant], style]} {...props}>
      {children}
    </RNText>
  );
};
