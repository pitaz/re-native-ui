import React from 'react';
export interface SliderProps {
    label?: string;
    value: number;
    onChange: (val: number) => void;
    min?: number;
    max?: number;
    step?: number;
    error?: string;
    disabled?: boolean;
    showTooltip?: boolean;
}
export declare const Slider: React.FC<SliderProps>;
