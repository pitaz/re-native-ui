import React from 'react';
import { TextProps } from 'react-native';
type Variant = 'heading' | 'subheading' | 'body' | 'caption';
interface CustomTextProps extends TextProps {
    variant?: Variant;
    children: React.ReactNode;
}
export declare const Text: React.FC<CustomTextProps>;
export {};
