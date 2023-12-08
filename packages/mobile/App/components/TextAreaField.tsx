import React from 'react';
import {TextArea, Text, View} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {TextFieldPropsType} from 'typescript/types';
const TextAreaField = ({
  title,
  placeholder,
  onChangeText,
  onBlur,
  value,
}: TextFieldPropsType) => {
  return (
    <>
      <Text style={[styles.textFieldTitle, styles.inputLabel]}>{title}</Text>
      <View style={styles.textAreaField}>
        <TextArea
          onChangeText={onChangeText}
          value={value}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </View>
    </>
  );
};

export default TextAreaField;
