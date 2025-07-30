import React from "react";
import { ListRenderItem, ViewStyle } from "react-native";
import { useTheme } from "../../theme/ThemeContext";
type Breakpoint = keyof ReturnType<typeof useTheme>["breakpoints"];
type Responsive<T> = Partial<Record<Breakpoint, T>>;
export interface GridListProps<ItemT> {
    data: ItemT[];
    renderItem: ListRenderItem<ItemT>;
    keyExtractor: (item: ItemT, index: number) => string;
    numColumns?: number | Responsive<number>;
    spacing?: keyof ReturnType<typeof useTheme>["spacing"] | number;
    style?: ViewStyle;
}
export declare function GridList<ItemT>({ data, renderItem, keyExtractor, numColumns, spacing, style, }: GridListProps<ItemT>): React.JSX.Element;
export {};
