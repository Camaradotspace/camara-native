import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { DARK_THEME, theme as DEFAULT_THEME } from "../../theme/theme";

interface ICamaraThemeProvider {
  children: React.ReactNode;
  theme: "light" | "dark";
}

export const CamaraNativeThemeProvider: React.FC<ICamaraThemeProvider> = ({
  children,
  theme,
}) => {
  return (
    <ThemeProvider theme={theme === "dark" ? DARK_THEME : DEFAULT_THEME}>
      {children}
    </ThemeProvider>
  );
};
