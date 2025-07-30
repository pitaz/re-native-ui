import React from "react";
import { ViewStyle } from "react-native";
import { useTheme } from "../../theme/ThemeContext";
type Breakpoint = keyof ReturnType<typeof useTheme>["breakpoints"];
type Responsive<T> = Partial<Record<Breakpoint, T>>;
export interface StaggeredGridProps<ItemT> {
    data: ItemT[];
    renderItem: (props: {
        item: ItemT;
        index: number;
    }) => React.ReactNode;
    keyExtractor: (item: ItemT, index: number) => string;
    /** number or responsive map of columns */
    numColumns?: number | Responsive<number>;
    /** theme spacing key or raw number for gutter */
    spacing?: keyof ReturnType<typeof useTheme>["spacing"] | number;
    /** calculate item height given item and column width */
    getItemHeight: (item: ItemT, columnWidth: number) => number;
    style?: ViewStyle;
}
export declare function StaggeredGrid<ItemT>({ data, renderItem, keyExtractor, numColumns, spacing, getItemHeight, style, }: StaggeredGridProps<ItemT>): React.JSX.Element;
export {};
