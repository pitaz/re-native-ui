import React from 'react';
export interface SwitchProps {
    label?: string;
    value: boolean;
    onChange: (val: boolean) => void;
    error?: string;
}
export declare const Switch: React.FC<SwitchProps>;
