import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import {
  View,
  Text,
  Picker,
  Assets,
  Image,
  Colors,
  Typography,
} from 'react-native-ui-lib';

import styles from 'theme/styles';
import {FONT, INPUT_FONT_SIZE} from 'utils/constants';
const PickerField = ({
  title,
  value,
  setSelected,
  data,
  style,
}: {
  title: string;
  value: object | undefined;
  setSelected: (s: object) => void;
  data: {value: string; label: string}[];
  style?: any;
}) => {
  const {t} = useTranslation();
  return (
    <Picker
      useSafeArea
      // showSearch
      // style={[styles.button]}
      value={value}
      searchPlaceholder={t('Search for ...')}
      topBarProps={{title: <Text text80>{title}</Text>}}
      onChange={(s: object) => setSelected(s)}
      renderPicker={(item: {label: string}) => {
        return (
          <View flex style={{padding: 0}}>
            <Text
              style={[
                styles.textFieldTitle,
                styles.inputLabel,
                {marginBottom: 0, lineHeight: 25},
              ]}>
              {title}
            </Text>
            <View style={[styles.pickerField, {height: 40}]} row spread centerV>
              <Text text80 style={{lineHeight: 24, fontSize: INPUT_FONT_SIZE}}>
                {item?.label}
              </Text>
              <Image marginL-5 source={Assets.icons.pickerIcon} />
            </View>
          </View>
        );
      }}>
      {data?.map(option => (
        <Picker.Item
          key={option.value}
          value={option.value}
          label={option.label}
          renderItem={(item, props, itemLabel) => (
            <View style={styles2.container} flex row spread centerV>
              <Text
                text80
                numberOfLines={1}
                style={[
                  styles2.labelText,
                  props.disabled && styles2.labelTextDisabled,
                ]}>
                {itemLabel}
              </Text>
              {props.selectedIndicator}
            </View>
          )}
          // getItemLabel={(item) => item.label}
        />
      ))}
    </Picker>
  );
};

const styles2 = StyleSheet.create({
  container: {
    height: 40.5,
    paddingHorizontal: 23,
    borderColor: Colors.rgba(Colors.dark10, 0.1),
    borderBottomWidth: 1,
  },
  labelText: {
    ...Typography.text70,
    color: Colors.dark10,
    flex: 1,
    fontFamily: FONT,
    // textAlign: 'left',
  },
  labelTextDisabled: {
    color: Colors.dark60,
  },
});

export default PickerField;
