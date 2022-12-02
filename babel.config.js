module.exports = (api) => {
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
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    'babel-plugin-styled-components',
    'ramda',
    [
      'babel-plugin-transform-remove-imports',
      {
        test: /.*\.types$/,
      },
    ],
  ];

  return {
    comments: false,
    presets,
    env: {
      production: {
        plugins: [...plugins, ['react-remove-properties', { properties: ['data-testid'] }]],
      },
      esm: {
        plugins: [...plugins, ['react-remove-properties', { properties: ['data-testid'] }]],
      },
      development: {
        plugins,
      },
      test: {
        plugins: [...plugins, '@babel/plugin-transform-runtime'],
      },
    },
  };
};
