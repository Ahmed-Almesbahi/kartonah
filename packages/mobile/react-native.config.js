module.exports = {
  project: {
    ios: {},
    android: {},
  },
  dependencies: {
    '@react-native-community/picker': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
  },
  assets: ['./assets/fonts/'],
};
