import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface BoxProps extends ViewProps {
  children?: React.ReactNode;
  bg?: keyof ReturnType<typeof useTheme>['colors'];
  p?: keyof ReturnType<typeof useTheme>['spacing'];
}

export const Box: React.FC<BoxProps> = ({ children, bg, p, style, ...props }) => {
  const theme = useTheme();

  const themedStyle = StyleSheet.create({
    box: {
      backgroundColor: bg ? theme.colors[bg] : undefined,
      padding: p ? theme.spacing[p] : undefined,
    },
  });

  return (
    <View style={[themedStyle.box, style]} {...props}>
      {children}
    </View>
  );
};
