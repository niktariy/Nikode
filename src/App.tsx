import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from './store';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeInitializer from './components/ThemeInitializer/ThemeInitializer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { routes } from './routes';

const App: React.FC = () => {
  const { currentTheme } = useSelector((state: RootState) => state.theme);
  const selectedTheme = currentTheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <ThemeInitializer />
      <Router>
        <Header routes={routes} />
        <main>
          <Routes>
            {routes.map(route => (
              <Route path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
