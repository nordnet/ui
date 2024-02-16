import React from 'react';
import { DocsContainer } from '@storybook/addon-docs';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';
import { createGlobalStyle } from 'styled-components';
import { createTheme } from '../src';

const GlobalStyle = createGlobalStyle`
#storybook-root,
.sbdocs-preview {
  background: ${(p) => p.theme.colorTokens.neutral.background_default};
}

#storybook-root {
  padding: 20px;
}

.sbdocs-content {
  max-width: 1440px;
}
`;

const themes = {};
export const getTheme = (theme: 'light' | 'dark' | 'a11y') => {
  if (theme !== 'a11y' && theme !== 'dark' && theme !== 'light') {
    return null;
  }

  const key = `theme-${theme}`;
  if (!themes[key]) {
    themes[key] = createTheme({
      darkColors: theme === 'dark',
      tokensTheme: theme,
      featureToggles: {
        shadows: true,
      },
    });
  }
  return themes[key];
};

export const DocsWrapper = ({ children, context }) => {
  const isDarkMode = useDarkMode();
  const theme = getTheme(isDarkMode ? 'dark' : 'light');

  return (
    <DocsContainer context={context}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DocsContainer>
  );
};

export const ThemeDecorator = (storyFn) => {
  const isDarkMode = useDarkMode();
  const theme = getTheme(isDarkMode ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  );
};
