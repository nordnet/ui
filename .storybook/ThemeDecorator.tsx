import React, { ReactNode } from 'react';
import { StoryFn } from '@storybook/addons';
import { ThemeProvider } from 'styled-components';
import { DocsContainer } from '@storybook/addon-docs';
import { useDarkMode } from 'storybook-dark-mode';
import { createGlobalStyle } from 'styled-components';
import { createTheme } from '../src';

const themes = {};

const getTheme = (darkMode) => {
  const key = `dark:${darkMode}`;
  if (!themes[key]) {
    themes[key] = createTheme({
      darkColors: darkMode,
      ...(darkMode ? { tokensTheme: 'dark' } : {}),
    });
  }
  return themes[key];
};

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    background: ${(p) => p.theme.color.buttonTextLight};
}

#root {
    background:  ${(p) => p.theme.color.background};
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    padding: 12px;
}

.sbdocs.sbdocs-content {
    max-width: 1440px;
}
`;

export const ThemeDecorator = (storyFn: StoryFn<ReactNode>) => {
  const theme = getTheme(useDarkMode());
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  );
};

export const DocsWrapper = ({ children, ...rest }: any) => (
  <DocsContainer {...rest}>
    <ThemeProvider theme={getTheme(useDarkMode())}>{children}</ThemeProvider>
  </DocsContainer>
);
