import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';

export const ThemeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
