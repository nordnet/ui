module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:jest/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    },
    sourceType: 'module',
    useJSXTextNode: true
  },
  plugins: ['react', 'jest', 'react-hooks', '@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.d.ts', '.js', '.jsx']
      }
    }
  },
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'no-use-before-define': 'off',
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 'off',
    'prefer-destructuring': 0,
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 2,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/jsx-curly-newline': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: false
    }],
    'jsx-a11y/anchor-is-valid': [// remove this rule when Link component only render links
    'warn', {
      components: ['Link'],
      specialLink: ['to']
    }]
  },
  overrides: [{
    files: ['src/**/*.stories.tsx', '*.ts', '*.tsx'],
    rules: {
      'import/no-extraneous-dependencies': 0,
      'import/no-unresolved': 0,
      'no-undef': 0,
    }
  }]
};