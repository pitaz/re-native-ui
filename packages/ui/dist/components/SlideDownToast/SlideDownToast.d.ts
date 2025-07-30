import React from "react";
import { ViewStyle, TextStyle } from "react-native";
export interface SlideDownToastProps {
    message: string;
    visible: boolean;
    variant?: "success" | "error" | "info" | "warning";
    duration?: number;
    onHide?: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}
export declare const SlideDownToast: React.FC<SlideDownToastProps>;
