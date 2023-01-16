import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    white: string;

    blue: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
    };

    gray: {
      100: string;
      200: string;
      300: string;
    };
  }
}
