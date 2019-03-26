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
    /** @todo think about different way of removing types import */
    ['babel-plugin-styled-components', { ignore: ['react'] }],
    'ramda',
  ];

  return { comments: false, presets, plugins };
};
