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

  return { comments: false, presets, plugins, ignore: ['**/*.types.ts'] };
};
