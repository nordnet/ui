import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DocsContainer } from '@storybook/addon-docs';
import { useDarkMode } from 'storybook-dark-mode';
import { createTheme } from '../src';

const themes = {};

const getTheme = (darkMode) => {
  const key = `dark:${darkMode}`;
  if (!themes[key]) {
    themes[key] = createTheme({
      darkColors: darkMode,
      ...(darkMode ? { tokensTheme: 'dark' } : {}),
      featureToggles: {
        roundedCorners: true,
      },
    });
  }
  return themes[key];
};

const DocsWrapper = ({ children, context }) => (
  <DocsContainer context={context}>
    <ThemeProvider theme={getTheme(useDarkMode())}>{children}</ThemeProvider>
  </DocsContainer>
);

export default DocsWrapper;
