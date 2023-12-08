import React from 'react';
import {I18nManager} from 'react-native';
import {View, Text, Picker, Assets, Image, Colors} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {fixPickerMultiItems} from 'utils/helper';
const FilterPicker = ({
  title,
  value,
  setSelected,
  data,
}: {
  title: string;
  value: object | undefined;
  setSelected: (s: object) => void;
  data: {value: string; label: string}[];
}) => {
  const getLable = (id) => {
    let x = '';
    data?.map((option) => {
      if (option.value == id) {
        x = option.label;
      }
    });
    return x;
  };

  // console.log('data', data);

  // getDerivedStateFromProps

  return (
    <Picker
      useSafeArea
      // useNativePicker
      placeholder={title}
      mode="MULTI"
      showSearch
      // style={styles.button}
      style={{
        // borderWidth: 1,
        // borderColor: 'red',

        textAlign: I18nManager.isRTL ? 'right' : 'left',
        // margin: 0,
      }}
      // placeholderColor={Colors.dark40}
      containerStyle={{
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.inputBorder,
        // height: 60,
        //   padding: 0,
        //   margin: 0,
      }}
      padding-0
      margin-0
      value={value}
      topBarProps={{title}}
      supportRTL
      title={title}
      floatingPlaceholderStyle={{
        // fontSize: 15,
        color: Colors.dark10,
        fontWeight: 'bold',
      }}
      // selectionLimit={3}
      onChange={(s: object) => {
        console.log('onChange', s);
        setSelected(s);
      }}
      floatingPlaceholder
      rightIconSource={Assets.icons.cheveronDown}
      hideUnderline={true}
      enableErrors={false}
      // renderPicker={(item) => {
      //   let _item = fixPickerMultiItems(item);
      //   return (
      //     <View style={styles.filterItem} paddingV-5 row spread centerV>
      //       <Text secondary>{title}</Text>
      //       <View centerV row>
      //         {_item?.length > 0 &&
      //           _item.slice(0, 4).map((id) => (
      //             <Text key={id} text3 muted>
      //               {getLable(id)}
      //               {/* {id.label} */}
      //               {','}
      //             </Text>
      //           ))}
      //         {/* <Text text3>{item?.label}</Text> */}
      //         <Image marginL-5 supportRTL source={Assets.icons.cheveronRight} />
      //       </View>
      //     </View>
      //   );
      // }}
    >
      {data?.map((option) => (
        <Picker.Item
          key={option.value}
          value={option.value}
          label={option.label}
          isSelected={true}
        />
      ))}
    </Picker>
  );
};

export default FilterPicker;
