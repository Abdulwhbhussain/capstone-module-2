const defaults = {
  jest: {
    moduleNameMapper: {
      "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
    }
  },
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {},
};

module.exports = defaults;
