import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';

const THUMB_RADIUS = 8;

const Thumb = () => {
  return <View style={styles.root} />;
};

const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 2,
    borderColor: Colors.white,
    backgroundColor: Colors.primary,
    shadowColor: '#000',
    elevation: 1,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});

export default memo(Thumb);
