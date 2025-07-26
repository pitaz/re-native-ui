import React from 'react';
import { Control } from 'react-hook-form';
import { InputProps } from '../Input/Input';
type ControlledInputProps = InputProps & {
    name: string;
    control: Control<any>;
    rules: any;
};
export declare const ControlledInput: ({ name, control, rules, ...rest }: ControlledInputProps) => React.JSX.Element;
export {};
