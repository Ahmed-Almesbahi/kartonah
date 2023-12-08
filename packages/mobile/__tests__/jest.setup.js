import mockNavigation from 'react-native-navigation-test-renderer';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.doMock('react-native-navigation', () => ({
  Navigation: mockNavigation,
}));
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});
jest.mock('react-native-share', () => ({
  default: jest.fn(),
}));
