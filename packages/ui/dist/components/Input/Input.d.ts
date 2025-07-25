import React from 'react';
import { TextInputProps } from 'react-native';
interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    rightElement?: React.ReactNode;
}
export declare const Input: React.FC<InputProps>;
export {};
