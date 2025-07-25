import React from 'react';
import { TextInputProps } from 'react-native';
interface TextAreaProps extends TextInputProps {
    label?: string;
    error?: string;
    rows?: number;
}
export declare const TextArea: React.FC<TextAreaProps>;
export {};
