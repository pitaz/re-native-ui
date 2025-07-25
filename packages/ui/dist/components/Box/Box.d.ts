import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
interface BoxProps extends ViewProps {
    children?: React.ReactNode;
    bg?: keyof ReturnType<typeof useTheme>['colors'];
    p?: keyof ReturnType<typeof useTheme>['spacing'];
}
export declare const Box: React.FC<BoxProps>;
export {};
