module.exports = {
  transform: {
    '^.+\\.svelte$': 'jest-transform-svelte',
    // eslint-disable-next-line global-require
    '^.+\\.js$': '<rootDir>/jest.transform.js',
  },
  moduleFileExtensions: ['js', 'svelte'],
  testPathIgnorePatterns: ['node_modules'],
  bail: false,
  verbose: true,
  transformIgnorePatterns: [
    'node_modules/?!(svelte-paginate)',
    'node_modules/?!(svelte-spinner)',
    'node_modules/?!(svelte-select)',
  ],
  moduleNameMapper: {
    '^@([A-Z].*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  // setupFilesAfterEnv: [
  //   "<rootDir>/jest.setup.js"
  // ]
};
