import { createGlobalStyle } from 'styled-components';
import { hexToRgba } from '../utils/hexToRgba';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --c-max-w: 96vw;
    --c-pad: 0 ${({ theme }) => theme.spacing(2)};
    
    @media (width > ${({ theme }) => theme.breakpoints.xl}) {
      --c-pad: 0 ${({ theme }) => theme.spacing(3)};
    }

    @media (width > ${({ theme }) => theme.breakpoints.xl}) {
      --c-max-w: 1520px;
      --c-pad: 0 ${({ theme }) => theme.spacing(4)};
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
  }

  #root {
    width: 100%;
  }

  .container {
    width: 100%;
    max-width: var(--c-max-w);
    margin: 0 auto;
    padding: var(--c-pad);
  }

  a, button {
    &, &:focus-visible {
      outline: inset thick;
      /* outline-offset: 5px; */
      outline-color: transparent;
    }

    @media (forced-colors: active) {
      border: 2px solid currentColor;
    }
  }

  code {
    padding: 0.125em 0.25em;
    border-radius: ${({ theme }) => theme.radii.small};
    font-family: ${({ theme }) => theme.fonts.monospace};
    font-weight: 500;
    background-color: ${({ theme }) => hexToRgba(theme.colors.border, 50)};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default GlobalStyle; 