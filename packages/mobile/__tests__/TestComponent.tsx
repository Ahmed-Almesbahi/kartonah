import React, {ComponentType} from 'react';
import {
  withNativeNavigation,
  InjectedNavigationProps,
} from 'react-native-navigation-test-renderer';

interface Props extends InjectedNavigationProps {
  test?: string;
  Screen: ComponentType;
}

const TestComponent = ({Screen}: Props) => <Screen />;

export default withNativeNavigation(TestComponent);
