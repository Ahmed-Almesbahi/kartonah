import React, {useState} from 'react';
import {Text} from 'react-native-ui-lib';
import styles from 'theme/styles';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';
const PhoneField = ({
  title,
  countryFilterPlaceholder,
  countryCode,
  onSelectCountry,
}: {
  title: string;
  countryFilterPlaceholder?: string;
  countryCode: CountryCode;
  onSelectCountry: (country: {cca2: CountryCode}) => void;
}) => {
  const [countryCode1, setCountryCode] = useState<CountryCode>(
    countryCode ? countryCode : 'EG',
  );
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    onSelectCountry(country);
  };
  return (
    <>
      <Text style={[styles.textFieldTitle, styles.inputLabel]}>{title}</Text>
      <CountryPicker
        countryCode={countryCode1}
        withFilter
        withFlag
        withCountryNameButton
        withAlphaFilter
        withEmoji
        filterProps={{placeholder: countryFilterPlaceholder}}
        onSelect={onSelect}
        containerButtonStyle={styles.countryContainer}
      />
    </>
  );
};

export default PhoneField;
