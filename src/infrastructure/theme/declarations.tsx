import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    fontWeights: {
      regular: number;
      medium: number;
      bold: number;
    };
    fontSizes: {
      caption: string;
      button: string;
      body: string;
      title: string;
      h5: string;
      h4: string;
      h3: string;
      h2: string;
      h1: string;
    };
    sizes: string[];
    space: string[];
    lineHeights: {
      title: string;
      copy: string;
    };
    colors: {
      ui: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
        black: string;
        disabled: string;
        error: string;
        success: string;
      };
      bg: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: string;
        secondary: string;
        black: string;
        white: string;
        disabled: string;
        inverse: string;
        error: string;
        success: string;
      };
    };
  }
}
