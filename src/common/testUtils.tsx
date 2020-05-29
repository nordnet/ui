import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { createTheme } from '..';

export const PageProviders = ({ children }) => {
  return (
    <HashRouter>
      <ThemeProvider theme={createTheme()}>
        <IntlProvider locale="en">{children}</IntlProvider>
      </ThemeProvider>
    </HashRouter>
  );
};
