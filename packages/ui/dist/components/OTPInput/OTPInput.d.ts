import React from 'react';
import { TextInputProps } from 'react-native';
export interface OTPInputProps extends Omit<TextInputProps, 'onChangeText'> {
    length?: number;
    value: string;
    onChangeText: (val: string) => void;
    error?: string;
    label?: string;
}
export declare const OTPInput: React.FC<OTPInputProps>;
