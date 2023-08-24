const path = require('path');
const srcPath = path.join(process.cwd(), 'src');
const storiesDir = process.env.STORYBOOK_DIRECTORY
  ? path.join(srcPath, process.env.STORYBOOK_DIRECTORY)
  : srcPath;

module.exports = {
  stories: ['../docs/**/*.stories.mdx', path.join(storiesDir, '**/*.stories.@(js|jsx|ts|tsx|mdx)')],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-addon-intl',
    'storybook-dark-mode',
    'storybook-addon-designs',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  docs: {
    docsPage: 'automatic',
  },
  features: {
    postcss: false,
  },
};
