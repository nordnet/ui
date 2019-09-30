const path = require('path');

module.exports = ({ config, mode }) => {
  config.entry.unshift(require.resolve('core-js/es/weak-set'));
  config.entry.unshift(require.resolve('focus-within-polyfill'));
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx', '.d.ts', '.md');
  return config;
};
