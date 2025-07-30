// components/Snackbar/Snackbar.tsx
import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

type SnackbarProps = {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  actionLabel?: string;
  onActionPress?: () => void;
  duration?: number;
  onClose?: () => void;
  position?: "top" | "bottom";
};

export const Snackbar: React.FC<SnackbarProps> = ({
  message,
  type = "info",
  actionLabel,
  onActionPress,
  duration = 3000,
  onClose,
  position = "bottom",
}) => {
  const translateY = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      Animated.timing(translateY, {
        toValue: 100,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        onClose?.();
      });
    }, duration);

    return () => clearTimeout(timeout);
  }, []);

  const bgColor = {
    success: "#16a34a",
    error: "#dc2626",
    info: "#2563eb",
    warning: "#f59e0b",
  }[type];

  const bottomPosition = position === "bottom" ? 20 : undefined;
  const topPosition = position === "top" ? 20 : undefined;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
          backgroundColor: bgColor,
          bottom: bottomPosition,
          top: topPosition,
        },
      ]}
    >
      <Text style={styles.message}>{message}</Text>
      {actionLabel && (
        <TouchableOpacity onPress={onActionPress}>
          <Text style={styles.action}>{actionLabel}</Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 20,
    right: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    justifyContent: "space-between",
    maxWidth: SCREEN_WIDTH - 40,
  },
  message: {
    color: "white",
    fontSize: 14,
    flex: 1,
  },
  action: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 16,
  },
});
