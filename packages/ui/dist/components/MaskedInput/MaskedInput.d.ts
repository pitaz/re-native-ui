import React from 'react';
import { TextInputProps } from 'react-native';
export interface MaskedInputProps extends Omit<TextInputProps, 'onChangeText'> {
    label?: string;
    value: string;
    onChangeText: (val: string) => void;
    error?: string;
    maskType: 'phone' | 'card' | 'custom';
    maskPattern?: (val: string) => string;
}
export declare const MaskedInput: React.FC<MaskedInputProps>;
