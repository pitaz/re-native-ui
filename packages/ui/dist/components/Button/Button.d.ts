import React from 'react';
type ButtonVariant = 'solid' | 'outline';
interface ButtonProps {
    children: React.ReactNode;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    variant?: ButtonVariant;
}
export declare const Button: React.FC<ButtonProps>;
export {};
