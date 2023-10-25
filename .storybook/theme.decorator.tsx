import React from 'react';
import { ThemeProvider } from 'styled-components';
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
      featureToggles: {
        roundedCorners: true,
      },
    });
  }
  return themes[key];
};

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

const ThemeDecorator = (storyFn) => {
  const theme = getTheme(useDarkMode());
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  );
};

export default ThemeDecorator;
