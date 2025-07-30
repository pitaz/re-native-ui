// components/StaggeredGrid/StaggeredGrid.tsx

import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  useWindowDimensions,
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
  const points = Object.entries(theme.breakpoints)
    .map(([k, v]) => ({ key: k as Breakpoint, minW: v }))
    .sort((a, b) => a.minW - b.minW);
  let value = defaultValue;
  for (const { key, minW } of points) {
    if (width >= minW && responsive?.[key] !== undefined) {
      value = responsive[key] as T;
    }
  }
  return value;
}

export interface StaggeredGridProps<ItemT> {
  data: ItemT[];
  renderItem: (props: { item: ItemT; index: number }) => React.ReactNode;
  keyExtractor: (item: ItemT, index: number) => string;
  /** number or responsive map of columns */
  numColumns?: number | Responsive<number>;
  /** theme spacing key or raw number for gutter */
  spacing?: keyof ReturnType<typeof useTheme>["spacing"] | number;
  /** calculate item height given item and column width */
  getItemHeight: (item: ItemT, columnWidth: number) => number;
  style?: ViewStyle;
}

export function StaggeredGrid<ItemT>({
  data,
  renderItem,
  keyExtractor,
  numColumns,
  spacing = "sm",
  getItemHeight,
  style,
}: StaggeredGridProps<ItemT>) {
  const theme = useTheme();
  const { width: screenW } = useWindowDimensions();
  const cols =
    typeof numColumns === "number"
      ? numColumns
      : useResponsiveValue(numColumns, 2);
  const gap = typeof spacing === "number" ? spacing : theme.spacing[spacing];
  const columnGutter = gap;
  const columnWidth = (screenW - columnGutter * (cols - 1)) / cols;

  // Build columns by shortest-first (waterfall)
  const columns: { item: ItemT; index: number; height: number }[][] =
    Array.from({ length: cols }, () => []);
  const heights = Array(cols).fill(0);

  data.forEach((item, index) => {
    const h = getItemHeight(item, columnWidth);
    const col = heights.indexOf(Math.min(...heights));
    columns[col].push({ item, index, height: h });
    heights[col] += h + gap;
  });

  return (
    <ScrollView
      contentContainerStyle={[styles.wrapper, style]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={[styles.row, { marginHorizontal: -gap / 2 }]}>
        {columns.map((colItems, colIdx) => (
          <View
            key={colIdx}
            style={{
              flex: 1,
              paddingHorizontal: gap / 2,
            }}
          >
            {colItems.map(({ item, index: idx }) => (
              <View key={keyExtractor(item, idx)} style={{ marginBottom: gap }}>
                {renderItem({ item, index: idx })}
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
