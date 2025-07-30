import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  LayoutChangeEvent,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useTheme } from "../../theme/ThemeContext";

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  duration?: number;
  style?: ViewStyle;
  headerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  contentStyle?: ViewStyle;
  arrow?: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  onToggle,
  duration = 300,
  style,
  headerStyle,
  titleStyle,
  contentStyle,
  arrow,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(defaultOpen);
  const [measuredHeight, setMeasuredHeight] = useState(0);
  const animHeight = useRef(new Animated.Value(0)).current;
  const animRotate = useRef(new Animated.Value(defaultOpen ? 1 : 0)).current;

  const toggle = () => {
    const next = !open;
    setOpen(next);
    onToggle?.(next);
    Animated.timing(animHeight, {
      toValue: next ? measuredHeight : 0,
      duration,
      useNativeDriver: false,
    }).start();
    Animated.timing(animRotate, {
      toValue: next ? 1 : 0,
      duration,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (measuredHeight) {
      animHeight.setValue(open ? measuredHeight : 0);
      animRotate.setValue(open ? 1 : 0);
    }
  }, [measuredHeight]);

  const onLayout = (e: LayoutChangeEvent) => {
    if (!measuredHeight) {
      setMeasuredHeight(e.nativeEvent.layout.height);
    }
  };

  const rotate = animRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
      ...style,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing.sm,
      backgroundColor: theme.colors.background,
      ...headerStyle,
    },
    title: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
      ...titleStyle,
    },
    contentWrapper: {
      overflow: "hidden",
    },
    content: {
      padding: theme.spacing.sm,
      backgroundColor: theme.colors.background,
      ...contentStyle,
    },
    arrow: {
      transform: [{ rotate }],
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggle} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Animated.View style={styles.arrow}>
          {arrow || <Text style={{ color: theme.colors.text }}>⌄</Text>}
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={[styles.contentWrapper, { height: animHeight }]}>
        <View onLayout={onLayout}>{children}</View>
      </Animated.View>
    </View>
  );
};
