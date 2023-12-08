import React from 'react';
import {TextField, Colors} from 'react-native-ui-lib';
import styles from 'theme/styles';
const OTPInput = ({
  formik,
  name,
  forwardRef,
}: {
  formik: any;
  name: string;
  forwardRef: any;
}) => {
  return (
    <TextField
      style={styles.otpField}
      onChangeText={formik.handleChange(name)}
      onBlur={formik.handleBlur(name)}
      enableErrors
      hideUnderline
      ref={forwardRef}
      placeholderColor={Colors.getColorTint(Colors.secondary, 30)}
    />
  );
};

export default OTPInput;
