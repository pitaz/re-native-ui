import React from "react";
import { View, ViewStyle } from "react-native";

type DividerProps = {
  thickness?: number;
  color?: string;
  direction?: "horizontal" | "vertical";
  length?: number | string;
};

export const Divider: React.FC<DividerProps> = ({
  thickness = 1,
  color = "#E0E0E0",
  direction = "horizontal",
  length = "100%",
}) => {
  const style: ViewStyle =
    direction === "horizontal"
      ? { height: thickness, width: length, backgroundColor: color } as ViewStyle
      : { width: thickness, height: length, backgroundColor: color } as ViewStyle;

  return <View style={style} />;
};
