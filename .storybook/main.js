import path from 'path';

const srcPath = path.join(process.cwd(), 'src');
const storiesDir = process.env.STORYBOOK_DIRECTORY
  ? path.join(srcPath, process.env.STORYBOOK_DIRECTORY)
  : srcPath;

const config = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: ['../docs/**/*.mdx', path.join(storiesDir, '**/*.stories.@(js|jsx|ts|tsx)')],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    'storybook-addon-intl',
    'storybook-dark-mode',
  ],
  docs: {
    autodocs: true,
  },
  core: {
    disableTelemetry: true,
  },
  staticDirs: ['../static'],
};

export default config;
