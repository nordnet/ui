import React, { ReactNode } from 'react';
import { StoryFn } from '@storybook/addons';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../src';
import { DocsContainer } from '@storybook/addon-docs/blocks';

const theme = createTheme();

export const ThemeDecorator = (storyFn: StoryFn<ReactNode>) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export const DocsWrapper = ({ children, ...rest }: any) => (
  <DocsContainer {...rest}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </DocsContainer>
);
