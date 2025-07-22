import type { DefaultTheme } from 'styled-components';
import type { ZIndex } from '@/types/styled';
import { palette } from './palettes';
import { hexToRgba } from '@/utils/hexToRgba';

const createZIndex = <K extends keyof ZIndex>(_: K, value: number): number & { readonly __brand: K } => value as number & { readonly __brand: K };

const zIndexValues = {
  above: createZIndex('above', -1),
  default: createZIndex('default', 1),
  absolute: createZIndex('absolute', 10),
  input: createZIndex('input', 20),
  header: createZIndex('header', 40),
  navigation: createZIndex('navigation', 30),
  popover: createZIndex('popover', 50),
  tooltip: createZIndex('tooltip', 50),
  backdrop: createZIndex('backdrop', 60),
  modal: createZIndex('modal', 80),
  toast: createZIndex('toast', 90),
} as const;

const commonStyles = {
  fonts: {
    primary: '"Noto Sans", monospace',
    monospace: '"JetBrains Mono", monospace',
    accent: 'Unbounded, monospace',
  },
  typography: {
    lineHeights: {
      heading: 1.2,
      body: 1.5,
    },
    fontSizes: {
      h1: '2.75em',
      h2: '2.25em',
      h3: '1.875em',
      h4: '1.25em',
      h5: '1.125em',
      h6: '1em',
      body1: '1.125em',
      body2: '1.25em',
      caption: '0.875em',
    },
    fontWeights: {
      h1: 700,
      h2: 700,
      h3: 800,
      h4: 800,
      h5: 800,
      h6: 600,
      body1: 400,
      body2: 500,
      caption: 400,
    }
  },
  breakpoints: {
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1500px',
  },
  transition: {
    timingFunc: {
      easeInOutQuart: 'cubic-bezier(0.77,0,0.175,1)',
      easeOutExpo: 'cubic-bezier(0.19,1,0.22,1)',
    },
    duration: {base: '280ms', slow: '600ms', fast: '140ms' },
  },
  baseSpacing: 0.5,
  spacing: (factor: number) => `${0.5 * factor}rem`,
  radii: {
    base: '8px',
    small: '4px',
    large: '24px',
    round: '100%',
    pill: '9999px'
  },
  zIndex: zIndexValues,
  shadow: {
    elevation: {
      flat: '0 0 0 2px',
      xs: '0 0 4px',
      sm: '0 2px 8px',
      md: '0 4px 16px',
      lg: '0 6px 32px',
    },
  }
};

export const lightTheme: DefaultTheme = {
  ...commonStyles,
  mode: 'light',
  colors: {
    primary: palette.main[500],
    accent: palette.accent[500],
    body: palette.grey[100],
    header: palette.base.white,
    text: palette.neutral[700],
    headline: palette.neutral[600],
    border: palette.main[200],
    disabled: palette.grey[500],
    caption: palette.neutral[500],
    shadow: {
      main: hexToRgba(palette.main[700], 24),
      light: hexToRgba(palette.main[500], 24),
      flat: palette.main[200],
      flatLight: palette.main[100],
    },
    link: {
      primary: {
        default: palette.main[500],
        hover: palette.main[700],
        focus: palette.main[900],
      },
      accent: {
        default: palette.accent[500],
        hover: palette.accent[700],
        focus: palette.accent[900],
      },
      neutral: {
        default: palette.neutral[700],
        hover: palette.neutral[500],
        focus: palette.neutral[500],
      },
    },
    button: {
      default: palette.main[500],
      defaultText: palette.base.white,
      hover: palette.main[700],
      focus: palette.main[800],
      fab: palette.grey[300],
    },
    burgerMenu: {
      bunTop: palette.neutral[500],
      bunTopActive: palette.main[500],
      bunMid: palette.neutral[600],
      bunMidActive: palette.main[600],
      bunBot: palette.neutral[700],
      bunBotActive: palette.main[700],
    },
    card: {
      neutral: palette.neutral[100],
      price: palette.main[100],
      skill: palette.base.white,
    },
    illustration: {
      hearts: palette.lilac[500],
      circle: {
        big: palette.main[300],
        small: palette.accent[300],
      },
      button: {
        bg: palette.accent[500],
        text: palette.accent[100],
        shadow: palette.grey[800]
      },
      shape: {
        bg: {
          main700: palette.main[700],
          main300: palette.main[300],
          main100: palette.main[100],
        },
        lines: {
          main700: palette.base.white,
          main300: palette.base.white,
          main100: palette.main[300],
        }
      },
      web: {
        body: palette.grey[100],
        head: palette.grey[300],
        dots: palette.grey[200],
        block: palette.grey[200],
        code: palette.grey[400],
      },
      nika: {
        main: palette.main[500],
        accent: palette.peach[500],
        accentShadow: hexToRgba(palette.peach[600], 60) || 'rgba(0,0,0,0.16%)',
      }
    }
  },
};

export const darkTheme: DefaultTheme = {
  ...commonStyles,
  mode: 'dark',
  colors: {
    primary: palette.peach[300],
    accent: palette.accent[300],
    body: palette.neutral[800],
    header: palette.neutral[700],
    text: palette.grey[300],
    headline: palette.grey[200],
    border: palette.neutral[700],
    disabled: palette.grey[600],
    caption: palette.grey[500],
    shadow: {
      main: hexToRgba(palette.peach[300], 32),
      light: hexToRgba(palette.grey[300], 50),
      flat: palette.neutral[500],
      flatLight: palette.neutral[800],
    },
    link: {
      primary: {
        default: palette.peach[300],
        hover: palette.peach[200],
        focus: palette.peach[400],
      },
      accent: {
        default: palette.accent[300],
        hover: palette.accent[200],
        focus: palette.accent[400],
      },
      neutral: {
        default: palette.grey[100],
        hover: palette.grey[200],
        focus: palette.grey[200],
      },
    },
    button: {
      default: palette.grey[200],
      defaultText: palette.neutral[900],
      hover: palette.peach[300],
      focus: palette.peach[400],
      fab: palette.grey[700],
    },
    burgerMenu: {
      bunTop: palette.neutral[400],
      bunTopActive: palette.peach[400],
      bunMid: palette.neutral[300],
      bunMidActive: palette.peach[300],
      bunBot: palette.neutral[200],
      bunBotActive: palette.peach[200],
    },
    card: {
      neutral: palette.neutral[900],
      price: palette.neutral[900],
      skill: palette.neutral[900],
    },
    illustration: {
      hearts: palette.lilac[500],
      circle: {
        big: palette.neutral[500], // lines for main shape
        small: palette.grey[300],
      },
      button: {
        bg: palette.accent[200],
        text: palette.neutral[700],
        shadow: palette.grey[200]
      },
      shape: {
        bg: {
          main700: palette.neutral[700],
          main300: palette.neutral[500],
          main100: palette.grey[800],
        },
        lines: {
          main700: palette.neutral[900],
          main300: palette.neutral[900],
          main100: palette.neutral[500],
        }
      },
      web: {
        body: palette.grey[900],
        head: palette.grey[700],
        dots: palette.grey[800],
        block: palette.grey[800],
        code: palette.grey[600],
      },
      nika: {
        main: palette.main[500],
        accent: '#F38F80',
        accentShadow: hexToRgba(palette.peach[600], 60) || 'rgba(0,0,0,0.16%)',
      }
    }
  },
};