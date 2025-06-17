import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './store';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setTheme, type Theme } from './store/themeSlice';
import ThemeInitializer from './components/ThemeInitializer/ThemeInitializer';

import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import MentoringPage from './pages/MentoringPage';
import DevelopmentPage from './pages/DevelopmentPage';
import PortfolioPage from './pages/PortfolioPage';
import Header from './components/Header/Header';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state: RootState) => state.theme);
  const selectedTheme = currentTheme === 'light' ? lightTheme : darkTheme;

  const handleThemeChange = (theme: Theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <ThemeInitializer />
      <Router>
        <Header currentTheme={currentTheme} onThemeChange={handleThemeChange} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/mentoring" element={<MentoringPage />} />
            <Route path="/development" element={<DevelopmentPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
