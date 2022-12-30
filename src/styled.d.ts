import "styled-components";
interface IPalette {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    fontFamilies: string[];
    spacing: (multiplier: number) => string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      background: {
        default: string;
        paper: string;
      };
    };
  }
}
