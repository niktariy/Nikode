import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { type Theme } from '../../store/themeSlice';

const ThemeInitializer: React.FC = () => {
  const { currentTheme } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const applyThemeToHtml = (theme: Theme) => {
      if (theme === 'os-default') {
        if (mediaQuery.matches) {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
        }
      } else {
        document.documentElement.setAttribute('data-theme', theme);
      }
    };

    applyThemeToHtml(currentTheme);

    const handleChange = () => {
      if (currentTheme === 'os-default') {
        applyThemeToHtml('os-default');
      }
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [currentTheme]);

  return null; // Этот компонент не рендерит ничего в DOM
};

export default ThemeInitializer;