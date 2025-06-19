import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    transition-property: background-color, color;
    transition-duration: ${({ theme }) => theme.transition.durationBase};
    transition-timing-function: ${({ theme }) => theme.transition.timingFunc.easeInOutQuart};
  }

  #root {
    width: 100%;
  }

  .container {
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
`;

export default GlobalStyle; 