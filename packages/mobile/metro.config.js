/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

const watchFolders = [
  //Relative path to packages directory
  // path.resolve(__dirname + '/..'),
  path.resolve(__dirname + '/../common'),
  // path.resolve(__dirname, '../../'),
];

console.log('__dirname', path.resolve(__dirname + '/../common'));

module.exports = {
  // projectRoot: path.resolve(__dirname + '/../..'),
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  watchFolders,
};
