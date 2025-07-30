import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Modal,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutChangeEvent,
  ViewStyle,
  TextStyle,
  SafeAreaView,
} from "react-native";
import { useTheme } from "../../theme/ThemeContext";

export interface SlideDownToastProps {
  message: string;
  visible: boolean;
  variant?: "success" | "error" | "info" | "warning";
  duration?: number;
  onHide?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const SlideDownToast: React.FC<SlideDownToastProps> = ({
  message,
  visible,
  variant = "info",
  duration = 3000,
  onHide,
  style,
  textStyle,
}) => {
  const theme = useTheme();
  const [height, setHeight] = useState(0);
  const anim = useRef(new Animated.Value(0)).current;

  const colors = {
    success: theme.colors.success ?? "#4CAF50",
    error: theme.colors.error ?? "#F44336",
    info: theme.colors.primary,
    warning: theme.colors.warning ?? "#FF9800",
  };
  const backgroundColor = colors[variant];

  useEffect(() => {
    anim.setValue(-height);
  }, [height]);

  useEffect(() => {
    if (!visible) return;
    Animated.sequence([
      Animated.timing(anim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.delay(duration),
      Animated.timing(anim, {
        toValue: -height,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => onHide?.());
  }, [visible, duration]);

  const onLayout = (e: LayoutChangeEvent) => {
    setHeight(e.nativeEvent.layout.height);
  };

  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="none"
      onRequestClose={onHide}
    >
      <TouchableWithoutFeedback onPress={onHide}>
        <Animated.View
          onLayout={onLayout}
          style={[
            styles.container,
            { transform: [{ translateY: anim }], backgroundColor },
            style,
          ]}
        >
          <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
            <Text
              style={[styles.text, { color: theme.colors.text }, textStyle]}
            >
              {message}
            </Text>
          </SafeAreaView>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    alignItems: "center",
    height: 100,
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    paddingVertical: 12,
    textAlign: "center",
    width: "100%",
  },
});
