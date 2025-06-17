import type { DefaultTheme } from 'styled-components';
import { palette, shadow } from './palettes';
import { hexToRgba } from '../utils/hexToRgba';

const commonStyles = {
  fonts: {
    primary: '"Noto Sans", sans-serif',
    monospace: '"JetBrains Mono", monospace',
    accent: '"Roboto Mono", monospace',
  },
  breakpoints: {
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1500px',
  },
  transition: {
    timingFunc: 'cubic-bezier(0.4, 0, 0.2, 1)',
    durationBase: '280ms',
  },
  baseSpacing: 8,
  spacing: (factor: number) => `${8 * factor}px`,
  radii: {
    base: '8px',
    small: '4px',
    large: '24px',
    round: '100%',
    pill: '9999px'
  },
  zIndex: {
    default: 1,
    absolute: 10,
    input: 20,
    popover: 30,
    tooltip: 40,
    header: 50,
    backdrop: 60,
    navigation: 70,
    modal: 80,
    toast: 90,
  },
};

export const lightTheme: DefaultTheme = {
  ...commonStyles,
  mode: 'light',
  shadow: {
    elevation: shadow.elevation,
    color: {
      main: shadow.color.mainOnLight,
      accent: shadow.color.accentOnLight,
    },
    button: {
      hover: shadow.elevation.md + ' ' + shadow.color.accentOnLight,
      focus: shadow.elevation.sm + ' ' + shadow.color.mainOnLight,
    },
    header: shadow.elevation.lg + ' ' + shadow.color.accentOnLight,
  },
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
    link: {
      primary: {
        default: palette.main[700],
        hover: palette.main[900],
        focus: palette.main[900],
      },
      accent: {
        default: palette.accent[700],
        hover: palette.accent[900],
        focus: palette.accent[900],
      },
      neutral: {
        default: palette.neutral[800],
        hover: palette.neutral[900],
        focus: palette.neutral[900],
      },
    },
    button: {
      default: palette.accent[500],
      defaultText: palette.base.white,
      hover: palette.accent[700],
      focus: palette.main[500],
    },
    burgerMenu: {
      bunTop: palette.neutral[700],
      bunTopActive: palette.main[500],
      bunMid: palette.neutral[600],
      bunMidActive: palette.main[600],
      bunBot: palette.neutral[500],
      bunBotActive: palette.main[700],
    },
    illustration: {
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
          main: palette.main[100],
          accent: palette.main[500],
        },
        lines: {
          main: palette.main[300],
          accent: palette.base.white,
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
  shadow: {
    elevation: shadow.elevation,
    color: {
      main: shadow.color.mainOnDark,
      accent: shadow.color.accentOnDark,
    },
    button: {
      hover: shadow.elevation.md + ' ' + shadow.color.accentOnDark,
      focus: shadow.elevation.sm + ' ' + shadow.color.mainOnDark,
    },
    header: shadow.elevation.lg + ' ' + shadow.color.accentOnDark
  },
  colors: {
    primary: palette.peach[300],
    accent: palette.accent[300],
    body: palette.neutral[900],
    header: palette.neutral[800],
    text: palette.grey[300],
    headline: palette.grey[200],
    border: palette.neutral[700],
    disabled: palette.grey[600],
    caption: palette.grey[500],
    link: {
      primary: {
        default: palette.main[500],
        hover: palette.main[300],
        focus: palette.main[300],
      },
      accent: {
        default: palette.accent[500],
        hover: palette.accent[300],
        focus: palette.accent[300],
      },
      neutral: {
        default: palette.grey[100],
        hover: palette.grey[300],
        focus: palette.grey[300],
      },
    },
    button: {
      default: palette.accent[300],
      defaultText: palette.neutral[900],
      hover: palette.accent[200],
      focus: palette.peach[300],
    },
    burgerMenu: {
      bunTop: palette.neutral[200],
      bunTopActive: palette.peach[400],
      bunMid: palette.neutral[300],
      bunMidActive: palette.peach[300],
      bunBot: palette.neutral[400],
      bunBotActive: palette.peach[200],
    },
    illustration: {
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
          main: palette.grey[800],
          accent: palette.neutral[700],
        },
        lines: {
          main: palette.neutral[500],
          accent: palette.neutral[900],
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