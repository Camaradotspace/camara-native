import React from "react";
import Svg, { Path } from "react-native-svg";

interface ITime {
  theme?: "light" | "dark";
}

export const Time = ({ theme }: ITime) => {
  return (
    <Svg width="29" height="12" viewBox="0 0 29 12" fill="none">
      <Path
        d="M4.32031 11.2563C7.0083 11.2563 8.60498 9.1543 8.60498 5.59473C8.60498 4.25439 8.34863 3.12646 7.85791 2.25488C7.14746 0.899902 5.92432 0.16748 4.37891 0.16748C2.0791 0.16748 0.453125 1.71289 0.453125 3.88086C0.453125 5.91699 1.91797 7.39648 3.93213 7.39648C5.16992 7.39648 6.17334 6.81787 6.67139 5.81445H6.69336C6.69336 5.81445 6.72266 5.81445 6.72998 5.81445C6.74463 5.81445 6.7959 5.81445 6.7959 5.81445C6.7959 8.23145 5.88037 9.67432 4.33496 9.67432C3.42676 9.67432 2.72363 9.17627 2.48193 8.37793H0.599609C0.914551 10.1138 2.38672 11.2563 4.32031 11.2563ZM4.38623 5.89502C3.17041 5.89502 2.30615 5.03076 2.30615 3.82227C2.30615 2.64307 3.21436 1.74219 4.39355 1.74219C5.57275 1.74219 6.48096 2.65771 6.48096 3.85156C6.48096 5.03076 5.59473 5.89502 4.38623 5.89502Z"
        fill={theme === "dark" ? "white" : "black"}
      />
      <Path
        d="M11.6961 11.1538C12.3919 11.1538 12.868 10.6558 12.868 9.99658C12.868 9.33008 12.3919 8.83936 11.6961 8.83936C11.0076 8.83936 10.5242 9.33008 10.5242 9.99658C10.5242 10.6558 11.0076 11.1538 11.6961 11.1538ZM11.6961 5.66064C12.3919 5.66064 12.868 5.16992 12.868 4.51074C12.868 3.84424 12.3919 3.35352 11.6961 3.35352C11.0076 3.35352 10.5242 3.84424 10.5242 4.51074C10.5242 5.16992 11.0076 5.66064 11.6961 5.66064Z"
        fill={theme === "dark" ? "white" : "black"}
      />
      <Path
        d="M19.7237 11H21.5328V9.02979H22.961V7.43311H21.5328V0.431152H18.8668C16.9991 3.24365 15.5123 5.59473 14.5602 7.34521V9.02979H19.7237V11ZM16.3106 7.36719C17.5411 5.19922 18.6397 3.46338 19.6505 1.96924H19.753V7.47705H16.3106V7.36719Z"
        fill={theme === "dark" ? "white" : "black"}
      />
      <Path
        d="M26.9896 11H28.8793V0.431152H26.997L24.2357 2.36475V4.18115L26.8651 2.33545H26.9896V11Z"
        fill={theme === "dark" ? "white" : "black"}
      />
    </Svg>
  );
};