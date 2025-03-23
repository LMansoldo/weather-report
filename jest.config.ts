import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.app.json',
      useESM: true,
      isolatedModules: true
    }],
  },
  moduleNameMapper: {
    '@helpers/(.*)': '<rootDir>/src/weather-dashboard/models/helpers/$1',
    '@enums/(.*)': '<rootDir>/src/weather-dashboard/models/enums/$1',
    '@models/(.*)': '<rootDir>/src/weather-dashboard/models/$1',
    '@interfaces/(.*)': '<rootDir>/src/weather-dashboard/models/interfaces/$1',
    '@services/(.*)': '<rootDir>/src/weather-dashboard/services/$1',
		'@constants/(.*)': '<rootDir>/src/weather-dashboard/models/constants/$1',
    '@components/(.*)': '<rootDir>/src/weather-dashboard/views/components/$1',
    '@views/(.*)': '<rootDir>/src/weather-dashboard/views/$1',
    '@viewmodels/(.*)': '<rootDir>/src/weather-dashboard/viewmodels/$1',
    '@utils/(.*)': '<rootDir>/src/weather-dashboard/utils/$1',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	transformIgnorePatterns: [
    '/node_modules/(?!(@testing-library|@babel)/)',
  ],
};

export default config;