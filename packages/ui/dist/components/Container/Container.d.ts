import React from 'react';
import { ViewProps } from 'react-native';
type ContainerProps = ViewProps & {
    padding?: number;
    maxWidth?: number;
};
export declare const Container: React.FC<ContainerProps>;
export {};
