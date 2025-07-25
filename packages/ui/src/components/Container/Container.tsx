import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

type ContainerProps = ViewProps & {
  padding?: number;
  maxWidth?: number;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  padding = 16,
  maxWidth = 600,
  style,
  ...props
}) => {
  return (
    <View
      style={[styles.container, { padding, maxWidth }, style]}
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
  },
});
