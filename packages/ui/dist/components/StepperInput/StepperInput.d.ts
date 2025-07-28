import React from 'react';
export interface StepperInputProps {
    label?: string;
    value: number;
    onChange: (val: number) => void;
    step?: number;
    min?: number;
    max?: number;
    error?: string;
    disabled?: boolean;
}
export declare const StepperInput: React.FC<StepperInputProps>;
