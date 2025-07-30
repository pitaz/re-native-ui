import React from "react";
import { View, ViewStyle } from "react-native";

type StackProps = {
  children: React.ReactNode[];
  direction?: "row" | "column";
  spacing?: number;
  style?: ViewStyle;
};

export const Stack: React.FC<StackProps> = ({
  children,
  direction = "column",
  spacing = 8,
  style,
}) => {
  const isRow = direction === "row";

  return (
    <View style={[{ flexDirection: direction }, style]}>
      {React.Children.map(children, (child, index) => {
        const isLast = index === React.Children.count(children) - 1;
        const spacingStyle = isRow
          ? { marginRight: isLast ? 0 : spacing }
          : { marginBottom: isLast ? 0 : spacing };

        return <View style={spacingStyle}>{child}</View>;
      })}
    </View>
  );
};
