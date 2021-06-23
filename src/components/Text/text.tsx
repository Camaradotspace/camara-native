// import React from "react";
// import { Text as RNText, TextStyle, StyleProp } from "react-native";
// import { CamaraTheme, theme } from "../../theme/theme";
// import {
//   color,
//   ColorProps,
//   createText,
//   opacity,
//   OpacityProps,
//   ShadowProps,
//   spacing,
//   SpacingProps,
//   textShadow,
//   typography,
//   TypographyProps,
//   useRestyle,
//   useTheme,
//   VariantProps,
//   visible,
//   VisibleProps,
// } from "@shopify/restyle";

import { createText } from "@shopify/restyle";
import { CamaraTheme } from "../../theme/theme";

// interface TextProps extends React.ComponentProps<typeof RNText> {
//   variant?: keyof typeof theme.textVariants;
//   color?: keyof typeof theme.colors;
//   style?: StyleProp<TextStyle>;
//   children: React.ReactNode;
// }

// export const Text = createText<CamaraTheme>();

// export const Text: React.FC<TextProps> = ({
//   style,
//   variant = "body",
//   color = "textPrimary",
//   children,
//   ...rest
// }) => {
//   const theme = useTheme<CamaraTheme>();

//   return (
//     <RNText
//       style={{
//         color: theme.colors[color] || color,
//         ...(theme.textVariants[variant] as {}),
//         ...(style as {}),
//       }}
//       {...rest}>
//       {children}
//     </RNText>
//   );
// };

// type Props = ColorProps<CamaraTheme> &
//   TypographyProps<CamaraTheme> &
//   SpacingProps<CamaraTheme> &
//   OpacityProps<CamaraTheme> &
//   VisibleProps<CamaraTheme> &
//   ShadowProps<CamaraTheme> &
//   VariantProps<CamaraTheme, "textVariants"> & {
//     children: React.ReactNode;
//     style?: StyleProp<TextStyle>;
//   };

// const restyleFunctions = [
//   spacing,
//   color,
//   opacity,
//   visible,
//   typography,
//   textShadow,
// ];

// export const Text = ({ children, ...rest }: Props) => {
//   const props = useRestyle(restyleFunctions, rest);
//   return <RNText {...props}>{children}</RNText>;
// };

export const Text = createText<CamaraTheme>();
