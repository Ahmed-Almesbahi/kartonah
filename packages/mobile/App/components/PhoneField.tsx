import React, {useEffect, useState} from 'react';
import {View, Text, Colors} from 'react-native-ui-lib';
import styles from 'theme/styles';
import PhoneInput from 'react-native-phone-number-input';
import {I18nManager} from 'react-native';
import {useTranslation} from 'react-i18next';
import gPhoneNumber from 'google-libphonenumber';

const phoneUtil = gPhoneNumber.PhoneNumberUtil.getInstance();

const PhoneField = ({
  title,
  countryFilterPlaceholder,
  onChangeText,
  onChangeFormattedText,
  value,
  defaultCode,
  codeTextStyle,
  phoneTextInput,
  separatedStyle,
}: {
  title: string;
  countryFilterPlaceholder?: string;
  onChangeText?: any;
  onChangeFormattedText?: any;
  value?: any;
  defaultCode?: string;
  codeTextStyle?: any;
  phoneTextInput?: any;
  separatedStyle?: boolean;
}) => {
  const {t} = useTranslation();
  const [init, setInit] = useState(true);
  // const [field, meta, helpers] = useField('phone');

  const initPhoneNumber = () => {
    try {
      const number = phoneUtil?.parseAndKeepRawInput(value);
      // console.log('getCountryCode', number.getCountryCode());
      // console.log('getNationalNumber', number.getNationalNumber());
      // console.log(
      //   'getRegionCodeForNumber',
      //   phoneUtil.getRegionCodeForNumber(number),
      // );

      return number;
    } catch (e) {
      console.log('e', e);
    }
  };

  const getNationalNumber = () => {
    try {
      return initPhoneNumber()?.getNationalNumber()?.toString();
    } catch (e) {
      console.log('e', e);
    }
  };

  const getDefaultCountryCode = () => {
    try {
      return phoneUtil.getRegionCodeForNumber(initPhoneNumber());
    } catch (e) {
      console.log('e', e);
    }
  };

  useEffect(() => {
    setInit(false);
    // getValue();
  }, []);
  const isRtl = I18nManager.isRTL;
  return (
    <>
      {separatedStyle ? (
        <View row>
          <Text
            style={[styles.textFieldTitle, styles.inputLabel, {fontSize: 12}]}>
            {t('Country code')}
          </Text>
          <Text
            style={[styles.textFieldTitle, styles.inputLabel, {fontSize: 12}]}
            marginL-20>
            {t('Phone no.')}
          </Text>
        </View>
      ) : (
        <Text style={[styles.textFieldTitle, styles.inputLabel]}>{title}</Text>
      )}
      <PhoneInput
        defaultCode={
          init && value && value != '' && value != null && value.length > 9
            ? getDefaultCountryCode()
            : defaultCode
        }
        layout="first"
        onChangeText={onChangeText}
        onChangeFormattedText={onChangeFormattedText}
        defaultValue={
          init && value && value != '' && value != null && value.length > 9
            ? getNationalNumber()
            : value
        }
        placeholder=" "
        containerStyle={[
          separatedStyle
            ? styles.phoneSeperatedContainer
            : styles.phoneContainer,
          isRtl ? {flexDirection: 'row-reverse'} : {},
        ]}
        // countryPickerButtonStyle={{flexDirection: 'row-reverse'}}
        textContainerStyle={[
          separatedStyle
            ? styles.phoneTextSeperatedContainer
            : styles.phoneTextContainer,
          isRtl ? {flexDirection: 'row-reverse', textAlign: 'left'} : {},
        ]}
        textInputStyle={[
          styles.phoneTextInput,
          phoneTextInput,
          isRtl ? {textAlign: 'left'} : {},
        ]}
        codeTextStyle={[
          styles.codeTextStyle,
          codeTextStyle,
          isRtl ? {marginLeft: 10} : {},
        ]}
        flagButtonStyle={
          separatedStyle
            ? {
                backgroundColor: Colors.light,
                borderRadius: 5,
                borderWidth: 1,
                marginRight: 10,
                borderColor: Colors.inputBorder,
              }
            : {}
        }
        textInputProps={{selectionColor: undefined}}
        countryPickerProps={{
          filterProps: {placeholder: countryFilterPlaceholder},
        }}
      />
    </>
  );
};

export default PhoneField;
