import 'styled-components';
import { commonStyles } from '../styles/themes';

export type BorderRadius = {
  base: string;
  small: string;
  large: string;
  round: string;
  pill: string;
};

type Breakpoint =
  | 'sm' | 'md' | 'lg' | 'xl';

export type Breakpoints = {
  [key in Breakpoint]: string;
};

export type ZIndex = {
  above: number;
  default: number;
  absolute: number;
  input: number;
  popover: number;
  tooltip: number;
  header: number;
  backdrop: number;
  navigation: number;
  modal: number;
  toast: number;
};

export type LinkColors = {
  default: string;
  hover: string;
  focus: string;
}

export type ShadowElevation = {
  flat: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

export type ShadowColors = {
  main?: string | null;
  accent?: string | null;
  fill?: string | null;
  fillLight?: string | null;
};

export type TimingFunctions = {
  easeInOutQuart: string;
  easeOutExpo: string;
};

declare module 'styled-components' {
  type TypographyType = typeof commonStyles.typography;

  export interface DefaultTheme {
    mode: 'light' | 'dark';
    colors: {
      primary: string;
      accent: string;
      body: string;
      header: string;
      text: string;
      headline: string;
      border: string;
      disabled: string;
      caption: string;
      shadow: ShadowColors;
      link: {
        primary: LinkColors,
        accent: LinkColors,
        neutral: LinkColors,
      },
      button: {
        default: string;
        defaultText: string;
        hover: string;
        focus: string;
      };
      burgerMenu: {
        bunTop: string;
        bunTopActive: string;
        bunMid: string;
        bunMidActive: string;
        bunBot: string;
        bunBotActive: string;
      }
      illustration: {
        circle: {
          big: string;
          small: string;
        };
        button: {
          bg: string;
          text: string;
          shadow: string;
        };
        shape: {
          bg: {
            main: string;
            accent: string;
          };
          lines: {
            main: string;
            accent: string;
          };
        };
        web: {
          body: string;
          head: string;
          dots: string;
          block: string;
          code: string;
        };
        nika: {
          main: string;
          accent: string;
          accentShadow: string;
        };
      };
    };
    fonts: {
      primary: string;
      monospace: string;
      accent: string;
    };
    breakpoints: Breakpoints;
    transition: {
      timingFunc: TimingFunctions;
      durationBase: string;
    };
    baseSpacing: number;
    spacing: (factor: number) => string;
    shadow: {
      elevation: ShadowElevation;
    };
    radii: BorderRadius;
    zIndex: ZIndex;
    typography: TypographyType;
  }
} 