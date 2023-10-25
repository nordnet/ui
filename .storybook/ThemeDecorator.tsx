import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';
import { createGlobalStyle } from 'styled-components';
import { getTheme } from '../src';

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
  const isDarkMode = useDarkMode();
  const theme = getTheme(isDarkMode ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  );
};

export default ThemeDecorator;
