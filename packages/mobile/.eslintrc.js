module.exports = {
  root: true,
  extends: '@react-native-community',
  
  env: {
    jasmine: true,
    jest: true,
    'detox/detox': true
  },
  plugins: [
    "detox"
  ]
};
