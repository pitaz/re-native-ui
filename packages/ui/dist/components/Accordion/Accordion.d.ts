import React from "react";
import { ViewStyle, TextStyle } from "react-native";
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
export declare const Accordion: React.FC<AccordionProps>;
