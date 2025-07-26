import React from 'react';
export interface SelectOption {
    label: string;
    value: string;
}
export interface SelectProps {
    label?: string;
    placeholder?: string;
    options: SelectOption[];
    value: string | null;
    onChange: (value: string) => void;
    error?: string;
}
export declare const Select: React.FC<SelectProps>;
