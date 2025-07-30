import React from "react";
import { ViewStyle } from "react-native";
type StackProps = {
    children: React.ReactNode[];
    direction?: "row" | "column";
    spacing?: number;
    style?: ViewStyle;
};
export declare const Stack: React.FC<StackProps>;
export {};
