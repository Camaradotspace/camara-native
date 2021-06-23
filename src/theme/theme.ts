import { BoxProps, TextProps } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#000000",
  blackWrapper: "#0B0B0B",
  white: "#FFFFFF",
  whiteWrapper: "#F0F2F3",

  borderWhite: "#DADCE0",
  borderBlack: "#222",
  blue: "#81b0ff",
  yellow: "#f5dd4b",
};

type BaseThemeType = typeof BaseTheme & {
  textVariants: { [key: string]: TextProps<typeof BaseTheme> };
  buttonVariants: { [key: string]: BoxProps<typeof BaseTheme> };
};

const createTheme = <T extends BaseThemeType>(themeObject: T): T => themeObject;

const BaseTheme = {
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    wrapperBg: palette.whiteWrapper,
    phoneViewBorder: palette.borderWhite,
    textPrimary: palette.black,
    label: palette.blue,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

const theme = createTheme({
  ...BaseTheme,
  cardVariants: {},
  buttonVariants: {
    defaults: {
      padding: "m",
    },
    primary: {
      backgroundColor: "label",
      borderColor: "cardPrimaryBackground",
      borderWidth: 2,
    },
  },
  textVariants: {
    defaults: {
      fontFamily: "System",
      fontSize: 16,
      lineHeight: 24,
      color: "textPrimary",
    },
    header: {
      fontFamily: "System",
      fontWeight: "bold",
      fontSize: 34,
      lineHeight: 42.5,
      color: "textPrimary",
    },
    subheader: {
      fontFamily: "System",
      fontWeight: "600",
      fontSize: 28,
      lineHeight: 36,
      color: "textPrimary",
    },
    body: {
      fontFamily: "System",
      fontSize: 16,
      lineHeight: 24,
      color: "textPrimary",
    },
    buttonLabel: {
      fontFamily: "System",
      fontSize: 14,
      lineHeight: 24,
      color: "textPrimary",
    },
  },
});

const DARK_THEME: CamaraTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    cardPrimaryBackground: palette.purpleDark,
    wrapperBg: palette.blackWrapper,
    phoneViewBorder: palette.borderBlack,
    textPrimary: palette.white,
    label: palette.yellow,
  },
  // textVariants: {
  //   ...theme.textVariants,
  //   header: {
  //     ...theme.textVariants.header,
  //     color: palette.white,
  //   },
  //   subheader: {
  //     ...theme.textVariants.subheader,
  //     color: palette.white,
  //   },
  //   body: {
  //     ...theme.textVariants.body,
  //   },
  //   buttonLabel: {
  //     ...theme.textVariants.buttonLabel,
  //     color: "label",
  //   },
  // },
};

export type CamaraTheme = typeof theme;
export { theme, DARK_THEME };
