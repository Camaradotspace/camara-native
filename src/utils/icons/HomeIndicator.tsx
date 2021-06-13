import React from "react";
import Svg, { Rect } from "react-native-svg";

interface IHomeIndicator {
  theme?: "light" | "dark";
}

export const HomeIndicator = ({ theme }: IHomeIndicator) => {
  return (
    <Svg width="134" height="5" viewBox="0 0 134 5" fill="none">
      <Rect
        width="134"
        height="5"
        rx="2.5"
        fill={theme === "dark" ? "black" : "white"}
      />
    </Svg>
  );
};
