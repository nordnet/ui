module.exports = {
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.mocks.ts'],
  setupFiles: ['./jest.setup.ts'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'md', 'mdx'],
  transformIgnorePatterns: ['node_modules/(?!(@statecharts|react-syntax-highlighter)/.*)'],
  moduleNameMapper: {
    '\\.(mdx?)$': '<rootDir>/src/mdMock.ts',
    '\\.(jpg|png|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
