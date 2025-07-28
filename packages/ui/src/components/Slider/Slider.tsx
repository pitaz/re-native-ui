import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  LayoutChangeEvent,
  Animated,
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
  showTooltip?: boolean;
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
  showTooltip = false,
}) => {
  const theme = useTheme();
  const [sliderWidth, setSliderWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const clamp = (val: number) => Math.min(Math.max(val, min), max);

  const getPositionForValue = (val: number) => {
    const ratio = (val - min) / (max - min);
    return ratio * sliderWidth;
  };

  const getValueForPosition = (pos: number) => {
    const ratio = Math.min(Math.max(pos / sliderWidth, 0), 1);
    const rawValue = min + ratio * (max - min);
    return Math.round(rawValue / step) * step;
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !disabled,
      onMoveShouldSetPanResponder: () => !disabled,
      onPanResponderGrant: () => {
        animatedValue.stopAnimation();
      },
      onPanResponderMove: (e, gestureState) => {
        if (sliderWidth === 0) return;
        
        // Get the slider's position on screen
        const sliderElement = e.target;
        if (sliderElement) {
          sliderElement.measure((x, y, width, height, pageX, pageY) => {
            const touchX = e.nativeEvent.pageX;
            const relativeX = touchX - pageX;
            const clamped = clamp(getValueForPosition(relativeX));
            onChange(clamped);
            animatedValue.setValue(getPositionForValue(clamped));
          });
        }
      },
    })
  ).current;

  useEffect(() => {
    if (sliderWidth === 0) return;
    const pos = getPositionForValue(value);
    Animated.timing(animatedValue, {
      toValue: pos,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [value, sliderWidth, animatedValue]);

  const handleLayout = useCallback((e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    setSliderWidth(width);
    if (width > 0) {
      animatedValue.setValue(getPositionForValue(value));
    }
  }, [value, animatedValue]);

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
      height: 20,
      borderRadius: 10,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      position: 'relative',
    },
    fill: {
      height: 6,
      borderRadius: 3,
      backgroundColor: theme.colors.primary,
      position: 'absolute',
      left: 0,
      top: 7,
      bottom: 7,
    },
    thumb: {
      position: 'absolute',
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: theme.colors.primary,
      top: 0,
      marginLeft: -10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    tooltipContainer: {
      position: 'absolute',
      bottom: 30,
      transform: [{ translateX: -20 }],
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 4,
    },
    tooltipText: {
      color: 'white',
      fontSize: 12,
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
        <Animated.View style={[styles.fill, { width: animatedValue }]} />
        
        {showTooltip && (
          <Animated.View style={[styles.tooltipContainer, { left: animatedValue }]}>
            <Text style={styles.tooltipText}>{value}</Text>
          </Animated.View>
        )}

        <Animated.View style={[styles.thumb, { left: animatedValue }]} />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
