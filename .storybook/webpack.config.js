const path = require('path');
const tsConfig = require('../tsconfig.json');

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
    loaders: [
      {
        loader: 'babel-loader',
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      {
        loader: 'react-docgen-typescript-loader',
        // For some reason loader doesn't like moduleResolution field
        // @hack
        options: { compilerOptions: { ...tsConfig.compilerOptions, moduleResolution: undefined } },
      },
    ],
  });
  config.module.rules.push({
    test: /\.jsx?$/,
    loader: require.resolve('babel-loader'),
    include: [path.resolve(__dirname, '..', 'node_modules', 'use-ssr')],
  });
  config.resolve.extensions.push('.ts', '.tsx', '.d.ts', '.md');
  return config;
};
