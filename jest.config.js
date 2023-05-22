const defaults = {
  jest: {
    resetMocks: false,
    setupFiles: ['jest-localstorage-mock'],
  },
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {},
};

module.exports = defaults;
