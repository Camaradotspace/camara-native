import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  VariantProps,
  createVariant,
  // createRestyleComponent,
} from "@shopify/restyle";

import { Text } from "../Text";
import { CamaraTheme, theme } from "../../theme/theme";

const buttonVariant = createVariant({ themeKey: "buttonVariants" });

// const ButtonContainer = createRestyleComponent<
//   VariantProps<CamaraTheme, "buttonVariants"> &
//     React.ComponentProps<typeof View>,
//   CamaraTheme
// >([buttonVariant], View);

const restyleFunctions = [
  buttonVariant as any,
  spacing,
  border,
  backgroundColor,
];

type Props = SpacingProps<CamaraTheme> &
  BorderProps<CamaraTheme> &
  VariantProps<CamaraTheme, "buttonVariants"> &
  BackgroundColorProps<CamaraTheme> & {
    onPress: () => void;
    label: string;
    variant?: keyof typeof theme.buttonVariants;
  };

export const Button = ({
  onPress,
  label,
  variant = "primary",
  ...rest
}: Props) => {
  const props = useRestyle(restyleFunctions, { ...rest, variant });

  return (
    <TouchableOpacity onPress={onPress}>
      <View {...props}>
        <Text variant="buttonLabel">{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
