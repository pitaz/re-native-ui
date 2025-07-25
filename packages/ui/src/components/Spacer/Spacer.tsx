import React from "react";
import { View, ViewStyle } from "react-native";

type SpacerProps = {
  size?: number | string;
  direction?: "horizontal" | "vertical";
};

export const Spacer: React.FC<SpacerProps> = ({
  size = 8,
  direction = "vertical",
}) => {
  const style: ViewStyle =
    direction === "vertical" ? { height: size } as ViewStyle : { width: size } as ViewStyle;

  return <View style={style} />;
};
