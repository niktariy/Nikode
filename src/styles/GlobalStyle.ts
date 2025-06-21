import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    max-width: 96vw;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing(2)};
    
    @media (width > ${({ theme }) => theme.breakpoints.xl}) {
      padding: 0 ${({ theme }) => theme.spacing(3)};
    }

    @media (width > ${({ theme }) => theme.breakpoints.xl}) {
      max-width: 1520px;
      padding: 0 ${({ theme }) => theme.spacing(4)};
    }
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
`;

export default GlobalStyle; 