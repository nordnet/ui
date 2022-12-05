import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsWrapper, ThemeDecorator } from './ThemeDecorator';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { DocsPage } from '@storybook/addon-docs';

const customViewports = {
  tablet: {
    name: 'Tablet',
    styles: {
      width: '760px',
      height: '100%',
    },
  },
  tabletLg: {
    name: 'Tablet Lg',
    styles: {
      width: '976px',
      height: '100%',
    },
  },
  desktopSm: {
    name: 'Desktop Sm',
    styles: {
      width: '1280px',
      height: '100%',
    },
  },
  desktopLg: {
    name: 'Desktop Lg',
    styles: {
      width: '1360px',
      height: '100%',
    },
  },
  desktopXl: {
    name: 'Desktop Xl',
    styles: {
      width: '1620px',
      height: '100%',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: { ...INITIAL_VIEWPORTS, ...customViewports } },
  docs: {
    container: DocsWrapper,
    page: DocsPage,
  },
};

setIntlConfig({
  locales: ['sv', 'nb', 'da', 'fi', 'en'],
  defaultLocale: 'en',
  getMessages: () => {},
  getFormats: () => {},
  // Solves problem with snapshots for time component
  timeZone: 'UTC',
});

export const decorators = [ThemeDecorator, withIntl];
