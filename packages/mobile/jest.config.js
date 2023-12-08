module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '__tests__/.*\\.(test|spec)?\\.(ts|tsx)$',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './node_modules/react-native-ui-lib/jest-setup.js',
    './node_modules/react-native-reanimated/mock.js',
    './__tests__/jest.setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|rn-range-slider|@react-native-community/viewpager)',
  ],
};
