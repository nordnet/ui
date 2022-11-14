module.exports = {
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.mocks.js'],
  setupFiles: ['./jest.setup.js'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'md'],
  transformIgnorePatterns: ['node_modules/(?!(@statecharts|react-syntax-highlighter)/.*)'],
  moduleNameMapper: {
    '\\.(mdx?)$': '<rootDir>/src/mdMock.ts',
    '\\.(jpg|png|svg)$': '<rootDir>/__mocks__/fileMock.js',
    'react-markdown': '<rootDir>/node_modules/react-markdown/react-markdown.min.js',
  },
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
  },
};
