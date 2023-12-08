import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from 'theme/styles';

const Spinner = () => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Spinner;
