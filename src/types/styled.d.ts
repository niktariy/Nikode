import 'styled-components';
import { commonStyles } from '../styles/themes';

export type BorderRadius = {
  readonly base: string;
  readonly small: string;
  readonly large: string;
  readonly round: string;
  readonly pill: string;
};

const BREAKPOINTS = {
  sm: 'sm',
  md: 'md', 
  lg: 'lg',
  xl: 'xl'
} as const;

type Breakpoint = keyof typeof BREAKPOINTS;

export type Breakpoints = {
  readonly [key in Breakpoint]: string;
};

type ZIndexLevel = 'above' | 'default' | 'absolute' | 'input' | 'popover' | 'tooltip' | 'header' | 'backdrop' | 'navigation' | 'modal' | 'toast';

export type ZIndex = {
  readonly [K in ZIndexLevel]: number & { readonly __brand: K };
} & {
  readonly above: number & { readonly __brand: 'above' };
  readonly default: number & { readonly __brand: 'default' };
  readonly absolute: number & { readonly __brand: 'absolute' };
  readonly input: number & { readonly __brand: 'input' };
  readonly popover: number & { readonly __brand: 'popover' };
  readonly tooltip: number & { readonly __brand: 'tooltip' };
  readonly header: number & { readonly __brand: 'header' };
  readonly backdrop: number & { readonly __brand: 'backdrop' };
  readonly navigation: number & { readonly __brand: 'navigation' };
  readonly modal: number & { readonly __brand: 'modal' };
  readonly toast: number & { readonly __brand: 'toast' };
};

export type LinkColors = {
  readonly default: string;
  readonly hover: string;
  readonly focus: string;
}

export type ShadowElevation = {
  readonly flat: string;
  readonly xs: string;
  readonly sm: string;
  readonly md: string;
  readonly lg: string;
};

export type ShadowColors = {
  readonly main: string;
  readonly light: string;
  readonly flat: string;
  readonly flatLight: string;
};

export type TimingFunctions = {
  readonly easeInOutQuart: string;
  readonly easeOutExpo: string;
};

export type Durations = {
  readonly base: string;
  readonly fast: string;
  readonly slow: string;
}

interface LinkColorGroup {
  readonly primary: LinkColors;
  readonly accent: LinkColors;
  readonly neutral: LinkColors;
}

interface ButtonColors {
  readonly default: string;
  readonly defaultText: string;
  readonly hover: string;
  readonly focus: string;
  readonly fab: string;
}

interface BurgerMenuColors {
  readonly bunTop: string;
  readonly bunTopActive: string;
  readonly bunMid: string;
  readonly bunMidActive: string;
  readonly bunBot: string;
  readonly bunBotActive: string;
}

interface IllustrationColors {
  readonly circle: {
    readonly big: string;
    readonly small: string;
  };
  readonly button: {
    readonly bg: string;
    readonly text: string;
    readonly shadow: string;
  };
  readonly shape: {
    readonly bg: {
      readonly main: string;
      readonly accent: string;
    };
    readonly lines: {
      readonly main: string;
      readonly accent: string;
    };
  };
  readonly web: {
    readonly body: string;
    readonly head: string;
    readonly dots: string;
    readonly block: string;
    readonly code: string;
  };
  readonly nika: {
    readonly main: string;
    readonly accent: string;
    readonly accentShadow: string;
  };
}

interface CardColors {
  readonly neutral: string;
  readonly price: string;
  readonly skill: string;
}

interface ThemeColors {
  readonly primary: string;
  readonly accent: string;
  readonly body: string;
  readonly header: string;
  readonly text: string;
  readonly headline: string;
  readonly border: string;
  readonly disabled: string;
  readonly caption: string;
  readonly shadow: ShadowColors;
  readonly link: LinkColorGroup;
  readonly button: ButtonColors;
  readonly burgerMenu: BurgerMenuColors;
  readonly illustration: IllustrationColors;
  readonly card: CardColors;
}

declare module 'styled-components' {
  type TypographyType = typeof commonStyles.typography;

  export interface DefaultTheme {
    readonly mode: 'light' | 'dark';
    readonly colors: ThemeColors;
    readonly fonts: {
      readonly primary: string;
      readonly monospace: string;
      readonly accent: string;
    };
    readonly breakpoints: Breakpoints;
    readonly transition: {
      readonly timingFunc: TimingFunctions;
      readonly duration: Durations;
    };
    readonly baseSpacing: number;
    readonly spacing: <T extends number>(factor: T) => string;
    readonly shadow: {
      readonly elevation: ShadowElevation;
    };
    readonly radii: BorderRadius;
    readonly zIndex: ZIndex;
    readonly typography: TypographyType;
  }
}