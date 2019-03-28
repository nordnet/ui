module.exports = api => {
  const presets = [
    '@babel/preset-react',
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        modules: api.env('esm') ? false : 'auto',
        targets: {
          node: 'current',
          browsers: ['last 2 versions'],
        },
      },
    ],
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-styled-components',
    'ramda',
    [
      'babel-plugin-transform-remove-imports',
      {
        test: 'types$',
      },
    ],
  ];

  const ignore = ['**/*.types.ts'];
  if (process.env.NODE_ENV !== 'test') ignore.unshift('src/**/*.test.ts', 'src/**/*.test.ts.snap');

  return {
    comments: false,
    presets,
    plugins,
    env: {
      test: {
        plugins: ['require-context-hook'],
      },
    },
    ignore,
  };
};
