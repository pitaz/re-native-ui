import React from 'react';
export type RadioOption = {
    label: string;
    value: string | number;
};
export interface RadioGroupProps {
    label?: string;
    value: string | number;
    onChange: (val: string | number) => void;
    options: RadioOption[];
    error?: string;
}
export declare const RadioGroup: React.FC<RadioGroupProps>;
