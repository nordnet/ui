import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DocsContainer } from '@storybook/addon-docs';
import { useDarkMode } from 'storybook-dark-mode';
import { getTheme } from '../src';

const DocsWrapper = ({ children, context }) => {
  const isDarkMode = useDarkMode();
  const theme = getTheme(isDarkMode ? 'dark' : 'light');

  return (
    <DocsContainer context={context}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DocsContainer>
  );
};

export default DocsWrapper;
