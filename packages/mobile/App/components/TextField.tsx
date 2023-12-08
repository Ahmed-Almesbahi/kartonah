import React from 'react';
import {TextField, Colors, Assets} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {TextFieldPropsType} from 'typescript/types';
const TextInput = ({
  title,
  placeholder,
  secureTextEntry,
  error,
  onChangeText,
  onBlur,
  value,
  rightIconSource,
  style,
  floatingPlaceholder,
}: TextFieldPropsType) => {
  return (
    <TextField
      style={[styles.textField, style]}
      titleStyle={styles.textFieldTitle}
      titleColor={Colors.secondary}
      title={title}
      enableErrors={error ? true : false}
      error={error}
      // prefix="$"
      // prefixStyle={{
      //   paddingTop: 7,
      // }}
      floatingPlaceholder={floatingPlaceholder ? true : false}
      rightIconStyle={{marginTop: 7}}
      rightIconSource={rightIconSource}
      onChangeText={onChangeText}
      value={value}
      onBlur={onBlur}
      hideUnderline
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderColor={Colors.getColorTint(Colors.secondary, 30)}
    />
  );
};

export default TextInput;
