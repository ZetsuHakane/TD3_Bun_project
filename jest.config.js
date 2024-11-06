// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.[tj]sx?$': ['ts-jest', { /* Place ts-jest options here */ }],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testMatch: ['**/tests/**/*.test.ts', '**/tests/**/*.test.tsx'],
  };
  
