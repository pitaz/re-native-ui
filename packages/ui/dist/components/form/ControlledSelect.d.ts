import React from 'react';
import { Control } from 'react-hook-form';
import { SelectOption } from '../Select/Select';
type ControlledSelectProps = {
    name: string;
    control: Control<any>;
    rules: any;
    options: SelectOption[];
};
export declare const ControlledSelect: ({ name, control, rules, options, ...rest }: ControlledSelectProps) => React.JSX.Element;
export {};
