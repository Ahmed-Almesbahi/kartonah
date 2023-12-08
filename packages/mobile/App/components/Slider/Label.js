import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors, Text} from 'react-native-ui-lib';
const Label = ({text, ...restProps}) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text text80 style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: Colors.white,
  },
});

export default memo(Label);
