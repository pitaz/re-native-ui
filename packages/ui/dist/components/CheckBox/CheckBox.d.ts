import React from 'react';
export interface CheckBoxProps {
    label?: string;
    value: boolean;
    onChange: (val: boolean) => void;
    error?: string;
}
export declare const CheckBox: React.FC<CheckBoxProps>;
