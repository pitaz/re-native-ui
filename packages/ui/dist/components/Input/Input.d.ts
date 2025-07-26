import React from 'react';
import { TextInputProps } from 'react-native';
export interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
}
export declare const Input: React.FC<InputProps>;
