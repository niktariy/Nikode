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
    @media (forced-colors: active) {
      border: 1px solid;

      &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.button.default};
      }
    }
  }
  
  a {
    outline-offset: 0.125em;
    
    &:focus-visible {
      outline-color: ${({ theme }) => theme.colors.accent};
    }
  }

  button{
    outline: 0 solid transparent;
    outline-offset: 0.25em;
    
    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.accent};
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