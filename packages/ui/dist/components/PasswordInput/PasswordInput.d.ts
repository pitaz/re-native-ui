import React from 'react';
import { TextInputProps } from 'react-native';
interface PasswordInputProps extends TextInputProps {
    label?: string;
    error?: string;
}
export declare const PasswordInput: React.FC<PasswordInputProps>;
export {};
