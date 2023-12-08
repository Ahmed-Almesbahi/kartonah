import React from 'react';
import debounce from 'lodash/debounce'; // 4.0.8
import {Button as Buttonz} from 'react-native-ui-lib';

const withPreventDoubleClick = WrappedComponent => {
  class PreventDoubleClick extends React.PureComponent {
    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress();
    };

    onPress = debounce(this.debouncedOnPress, 300, {
      leading: true,
      trailing: false,
    });

    render() {
      return <WrappedComponent {...this.props} onPress={this.onPress} />;
    }
  }

  PreventDoubleClick.displayName = `withPreventDoubleClick(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;
  return PreventDoubleClick;
};

const ButtonO = withPreventDoubleClick(Buttonz);

const Button = props => {
  return <ButtonO {...props} />;
};

export default Button;
