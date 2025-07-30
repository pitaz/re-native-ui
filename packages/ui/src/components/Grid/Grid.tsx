import React from "react";
import {
  FlatList,
  ListRenderItem,
  useWindowDimensions,
  View,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { useTheme } from "../../theme/ThemeContext";

type Breakpoint = keyof ReturnType<typeof useTheme>["breakpoints"];
type Responsive<T> = Partial<Record<Breakpoint, T>>;

function useResponsiveValue<T>(
  responsive: Responsive<T> | undefined,
  defaultValue: T
): T {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const points = Object.entries(theme.breakpoints).sort(
    ([, a], [, b]) => a - b
  ) as [Breakpoint, number][];
  let value = defaultValue;
  for (const [key, minW] of points) {
    if (width >= minW && responsive?.[key] !== undefined) {
      value = responsive[key] as T;
    }
  }
  return value;
}

export interface GridListProps<ItemT> {
  data: ItemT[];
  renderItem: ListRenderItem<ItemT>;
  keyExtractor: (item: ItemT, index: number) => string;
  numColumns?: number | Responsive<number>;
  spacing?: keyof ReturnType<typeof useTheme>["spacing"] | number;
  style?: ViewStyle;
}

export function GridList<ItemT>({
  data,
  renderItem,
  keyExtractor,
  numColumns,
  spacing = "sm",
  style,
}: GridListProps<ItemT>) {
  const theme = useTheme();
  const cols =
    typeof numColumns === "number"
      ? numColumns
      : useResponsiveValue(numColumns, 1);
  const gap = typeof spacing === "number" ? spacing : theme.spacing[spacing];
  const half = gap / 2;

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      numColumns={cols}
      contentContainerStyle={[{ margin: -half }, style]}
      columnWrapperStyle={{ marginBottom: gap }}
      renderItem={(info) => (
        <View style={{ flex: 1, padding: half }}>{renderItem(info)}</View>
      )}
    />
  );
}

const styles = StyleSheet.create({});
