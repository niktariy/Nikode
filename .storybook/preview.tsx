import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../src/styles/themes';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import GlobalStyle from '../src/styles/GlobalStyle';

import '../src/index.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true, // Отключаем встроенный аддон backgrounds
      default: 'light',
      values: [
        { name: 'light', value: lightTheme.colors.body },
        { name: 'dark', value: darkTheme.colors.body }
      ]
    }
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: GlobalStyle,
    }),
    (Story, context) => {
      useEffect(() => {
        const updateBackground = () => {
          const color = context.globals.theme === 'dark' 
            ? darkTheme.colors.body 
            : lightTheme.colors.body;

          // Обновляем фон в основном контейнере
          document.documentElement.style.setProperty('--sb-background', color);

          // Находим все возможные контейнеры и обновляем их фон
          const containers = [
            document.querySelector('.sb-show-main'),
            document.querySelector('#storybook-root'),
            document.querySelector('.docs-story')
          ];

          containers.forEach(container => {
            if (container instanceof HTMLElement) {
              container.style.backgroundColor = color;
            }
          });
        };

        // Вызываем функцию обновления фона
        updateBackground();

        // Добавляем CSS переменную для фона
        const style = document.createElement('style');
        style.textContent = `
          #storybook-root, .sb-show-main, .docs-story {
            background-color: var(--sb-background) !important;
          }
        `;
        document.head.appendChild(style);

        return () => {
          document.head.removeChild(style);
        };
      }, [context.globals.theme]);

      return (
        <div style={{ padding: '2rem' }}>
          <Story />
        </div>
      );
    }
  ],
};

export default preview; 