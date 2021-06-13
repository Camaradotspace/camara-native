import React from "react";
import Svg, { Path } from "react-native-svg";

interface IBattery {
  theme?: "light" | "dark";
}

export const Battery = ({ theme }: IBattery) => {
  return (
    <Svg width="25" height="12" viewBox="0 0 25 12" fill="none">
      <Path
        opacity="0.35"
        d="M0.5 3.00004C0.5 1.80342 1.47005 0.833374 2.66667 0.833374H19.3333C20.53 0.833374 21.5 1.80342 21.5 3.00004V9.00004C21.5 10.1967 20.53 11.1667 19.3333 11.1667H2.66667C1.47005 11.1667 0.5 10.1967 0.5 9.00004V3.00004Z"
        stroke={theme === "dark" ? "black" : "white"}
      />
      <Path
        opacity="0.4"
        d="M23 4.00006V8.00006C23.8047 7.66128 24.328 6.87319 24.328 6.00006C24.328 5.12693 23.8047 4.33884 23 4.00006Z"
        fill={theme === "dark" ? "black" : "white"}
      />
      <Path
        d="M2 3.66671C2 2.93033 2.59695 2.33337 3.33333 2.33337H18.6667C19.403 2.33337 20 2.93033 20 3.66671V8.33337C20 9.06975 19.403 9.66671 18.6667 9.66671H3.33333C2.59695 9.66671 2 9.06975 2 8.33337V3.66671Z"
        fill={theme === "dark" ? "black" : "white"}
      />
    </Svg>
  );
};
