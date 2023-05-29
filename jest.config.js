const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

module.exports = createJestConfig({
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^theme/(.*)$': '<rootDir>/src/theme/$1',
    '^lib/(.*)$': '<rootDir>/src/lib/$1',
    '^layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^__mocks__/(.*)$': '<rootDir>/src/__mocks__/$1',
  },
})
