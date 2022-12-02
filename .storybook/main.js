module.exports = {
  stories: ['../docs/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-addon-intl',
    'storybook-dark-mode',
  ],

  webpackFinal: async (config) => {
    config.entry.unshift(require.resolve('core-js/es/weak-set'));
    config.entry.unshift(require.resolve('focus-within-polyfill'));
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.jsx?$/,
      loader: require.resolve('babel-loader'),
      include: [
        path.resolve(__dirname, '..', 'node_modules', 'use-ssr'),
        path.resolve(__dirname, '..', 'node_modules', 'color'),
      ],
    });

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    config.resolve.extensions.push('.ts', '.tsx', '.d.ts', '.md', '.mdx', '.mjs');
    return config;
  },
};
