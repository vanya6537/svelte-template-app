module.exports = {
  transform: {
    '^.+\\.svelte$': 'jest-transform-svelte',
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'svelte'],
  testPathIgnorePatterns: ['node_modules'],
  bail: false,
  verbose: true,
  transformIgnorePatterns: ['node_modules/?!(svelte-paginate)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
