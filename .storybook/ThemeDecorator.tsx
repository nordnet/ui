import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../src';

const theme = createTheme();
export const ThemeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
