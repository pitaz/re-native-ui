import React from "react";
import { ViewStyle, TextStyle } from "react-native";
export interface StepperProps {
    steps: string[];
    currentStep: number;
    onStepPress?: (index: number) => void;
    style?: ViewStyle;
    stepStyle?: ViewStyle;
    labelStyle?: TextStyle;
    connectorStyle?: ViewStyle;
}
export declare const Stepper: React.FC<StepperProps>;
