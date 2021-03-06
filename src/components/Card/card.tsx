import {
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
} from "@shopify/restyle";
import { CamaraTheme } from "../../theme/theme";

type CardProps = SpacingProps<CamaraTheme> &
  VariantProps<CamaraTheme, "cardVariants">;

export const Card = createRestyleComponent<CardProps, CamaraTheme>([
  spacing,
  createVariant({ themeKey: "cardVariants" }),
]);
