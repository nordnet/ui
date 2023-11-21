import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeDecorator, DocsWrapper } from './ThemeDecorator';

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

export const decorators = [ThemeDecorator];

const preview = {
  parameters: {
    intl: {
      locales: ['sv', 'nb', 'da', 'fi', 'en'],
      defaultLocale: 'sv',
      getMessages: () => {},
      getFormats: () => {},
      timeZone: 'UTC',
    },
    viewport: { viewports: { ...INITIAL_VIEWPORTS, ...customViewports } },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      container: DocsWrapper,
    },
    options: {
      storySort: {
        order: [
          'Design System',
          'Atoms',
          'Molecules',
          'Organisms',
          '*',
          'DEPRECATED',
          ['Atoms', 'Molecules', 'Organisms'],
        ],
      },
    },
  },
};

export default preview;
