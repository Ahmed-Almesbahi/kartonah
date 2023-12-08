import React from 'react';

import {Colors, Text} from 'react-native-ui-lib';

const ErrorText = ({formik, name, ...rest}: {formik: any; name: string}) => {
  // return formik.errors[name] && formik.touched[name] ? (
  return formik.errors[name] ? (
    <Text text80 {...rest} color={Colors.red10}>
      {formik.errors[name]}
    </Text>
  ) : null;
};

export default ErrorText;
