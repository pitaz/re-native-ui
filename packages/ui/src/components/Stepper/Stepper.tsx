import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useTheme } from "../../theme/ThemeContext";

export interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepPress?: (index: number) => void;
  style?: ViewStyle;
  stepStyle?: ViewStyle;
  labelStyle?: TextStyle;
  connectorStyle?: ViewStyle;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepPress,
  style,
  stepStyle,
  labelStyle,
  connectorStyle,
}) => {
  const theme = useTheme();
  return (
    <View style={[styles.container, style]}>
      {steps.map((label, idx) => {
        const completed = idx < currentStep;
        const active = idx === currentStep;
        const circleColor = completed
          ? theme.colors.primary
          : active
          ? theme.colors.primary
          : theme.colors.border;
        const textColor = active ? theme.colors.primary : theme.colors.text;
        return (
          <React.Fragment key={idx}>
            <TouchableOpacity
              onPress={() => onStepPress?.(idx)}
              activeOpacity={onStepPress ? 0.6 : 1}
              style={[styles.step, stepStyle]}
            >
              <View
                style={[
                  styles.circle,
                  {
                    borderColor: circleColor,
                    backgroundColor: active ? circleColor : "transparent",
                  },
                ]}
              />
              <Text style={[styles.label, { color: textColor }, labelStyle]}>
                {label}
              </Text>
            </TouchableOpacity>
            {idx < steps.length - 1 && (
              <View
                style={[
                  styles.connector,
                  {
                    backgroundColor: completed
                      ? theme.colors.primary
                      : theme.colors.border,
                  },
                  connectorStyle,
                ]}
              />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  step: {
    alignItems: "center",
    flex: 1,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    textAlign: "center",
  },
  connector: {
    height: 2,
    flex: 1,
  },
});
