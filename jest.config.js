const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['<rootDir>/e2e']
}

module.exports = createJestConfig(customJestConfig)