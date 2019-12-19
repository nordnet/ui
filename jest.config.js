module.exports = {
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  setupFiles: ['./jest.enzyme.js'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'md'],
  transformIgnorePatterns: ['node_modules/(?!(@statecharts|react-syntax-highlighter)/.*)'],
  moduleNameMapper: {
    '\\.(mdx?)$': '<rootDir>/src/mdMock.ts',
  },
  transform: {
    '^.+\\.stories\\.tsx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
};
