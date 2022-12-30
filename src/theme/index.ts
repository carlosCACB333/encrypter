import { DefaultTheme } from "styled-components";

const colors = {
  darkBlue: {
    100: "#609ED4",
    200: "#356EA9",
    300: "#0A3871",
    400: "#072B61",
    500: "#052051",
  },

  lightBlue: {
    100: "#F3F5FC",
    200: "#EFF1FA",
    300: "#E9ECF8",
    400: "#AAB2D5",
    500: "#757FB2",
  },

  gray: {
    50: "#fff",
    100: "#CED4DA",
    200: "#ADB5BD",
    300: "#868E96",
    400: "#495057",
    500: "#343A40",
  },
};

export const theme: DefaultTheme = {
  borderRadius: "32px",
  fontFamilies: ["'Inter'", "sans-serif"],
  spacing: (multiplier: number) => `${multiplier * 16}px`,
  palette: {
    common: {
      black: colors.gray[500],
      white: colors.gray[50],
    },
    primary: colors.darkBlue,
    secondary: colors.lightBlue,
    text: {
      primary: colors.gray[500],
      secondary: colors.gray[400],
      disabled: colors.gray[300],
    },
    background: {
      default: colors.lightBlue[100],
      paper: colors.gray[50],
    },
  },
};
