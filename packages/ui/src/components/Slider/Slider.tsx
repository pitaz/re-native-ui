import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  LayoutChangeEvent,
  GestureResponderEvent,
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

export interface SliderProps {
  label?: string;
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
  error?: string;
  disabled?: boolean;
}

export const Slider: React.FC<SliderProps> = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  error,
  disabled,
}) => {
  const theme = useTheme();
  const [sliderWidth, setSliderWidth] = React.useState(0);

  const clamp = (val: number) => Math.min(Math.max(val, min), max);

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !disabled,
      onMoveShouldSetPanResponder: () => !disabled,
      onPanResponderMove: (e: GestureResponderEvent, gestureState) => {
        const relativeX = gestureState.moveX - gestureState.x0;
        const percent = Math.min(Math.max(relativeX / sliderWidth, 0), 1);
        const newValue = Math.round((min + percent * (max - min)) / step) * step;
        onChange(clamp(newValue));
      },
    })
  ).current;

  const handleLayout = useCallback((e: LayoutChangeEvent) => {
    setSliderWidth(e.nativeEvent.layout.width);
  }, []);

  const getThumbPosition = () => {
    const ratio = (value - min) / (max - min);
    return Math.max(0, Math.min(ratio * sliderWidth, sliderWidth));
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
    track: {
      height: 6,
      borderRadius: 3,
      backgroundColor: theme.colors.border,
      position: 'relative',
      justifyContent: 'center',
    },
    fill: {
      height: 6,
      borderRadius: 3,
      backgroundColor: theme.colors.primary,
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
    },
    thumb: {
      position: 'absolute',
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: theme.colors.primary,
      top: -7,
      marginLeft: -10,
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
      <View
        style={styles.track}
        onLayout={handleLayout}
        {...panResponder.panHandlers}
      >
        <View style={[styles.fill, { width: getThumbPosition() }]} />
        <View style={[styles.thumb, { left: getThumbPosition() }]} />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
