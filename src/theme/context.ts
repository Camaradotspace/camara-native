import { createContext } from "react";
import { theme, CamaraTheme } from "./theme";

const ThemeContext = createContext<CamaraTheme>(theme);

export default ThemeContext;
