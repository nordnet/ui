import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Decorator } from '@storybook/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createTheme } from '../src/theme';

const GlobalStyles = createGlobalStyle`
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

const decorator: Decorator = withThemeFromJSXProvider({
  themes: {
    light: getTheme(false),
    dark: getTheme(true),
  },
  defaultTheme: 'light',
  Provider: ThemeProvider,
  GlobalStyles,
});

export default decorator;
