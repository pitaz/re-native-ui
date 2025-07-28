import React from 'react';
interface DatePickerProps {
    label?: string;
    value?: Date;
    onChange: (date: Date) => void;
    error?: string;
    minimumYear?: number;
    maximumYear?: number;
}
export declare const DatePicker: React.FC<DatePickerProps>;
export {};
