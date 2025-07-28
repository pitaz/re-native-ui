import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutChangeEvent,
  Animated,
  TouchableOpacity,
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

  const handleTouch = (e: any) => {
    if (sliderWidth === 0 || disabled) return;
    
    const touchX = e.nativeEvent.pageX;
    const trackElement = e.target;
    
    trackElement.measure((x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
      const relativeX = touchX - pageX;
      const clamped = clamp(getValueForPosition(relativeX));
      onChange(clamped);
      animatedValue.setValue(getPositionForValue(clamped));
    });
  };

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
      height: 40,
      borderRadius: 20,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      position: 'relative',
      alignItems: 'center',
    },
    fill: {
      height: 6,
      borderRadius: 3,
      backgroundColor: theme.colors.primary,
      position: 'absolute',
      left: 0,
      top: 17,
      bottom: 17,
    },
    thumb: {
      position: 'absolute',
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: theme.colors.primary,
      top: 8,
      marginLeft: -12,
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
      <TouchableOpacity
        style={styles.track}
        onLayout={handleLayout}
        onPress={handleTouch}
        activeOpacity={1}
      >
        <Animated.View style={[styles.fill, { width: animatedValue }]} />
        
        {showTooltip && (
          <Animated.View style={[styles.tooltipContainer, { left: animatedValue }]}>
            <Text style={styles.tooltipText}>{value}</Text>
          </Animated.View>
        )}

        <Animated.View style={[styles.thumb, { left: animatedValue }]} />
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
