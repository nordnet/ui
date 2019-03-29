module.exports = {
  testMatch: ['**/*.test.ts'],
  setupFiles: ['./jest.enzyme.js'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
};
