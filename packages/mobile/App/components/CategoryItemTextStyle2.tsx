import React from 'react';
import {Text, Colors, Avatar, View} from 'react-native-ui-lib';
import {vendrosByCategoryRow} from 'typescript/api.types';
import {UPLOAD_URL} from 'utils/constants';

const CategoryItemText = ({
  item,
  onPress,
  isActive,
}: {
  item: vendrosByCategoryRow;
  isActive?: boolean;
  onPress: () => void;
}) => {
  return (
    <View centerV centerH>
      <Avatar
        onPress={onPress}
        size={70}
        imageStyle={
          isActive ? {borderWidth: 1, borderColor: Colors.secondary} : {}
        }
        containerStyle={[
          {
            marginHorizontal: 10,
            marginBottom: 5,
          },
          isActive ? {borderWidth: 1, borderColor: Colors.secondary} : {},
        ]}
        backgroundColor={Colors.primary}
        label={item.elment_trans[0]?.title}
        source={{uri: `${UPLOAD_URL}${item.photo}`}}
        animate={true}
      />

      <Text text90 color={Colors.secondary} style={{fontWeight: 'normal'}}>
        {item.elment_trans[0]?.title}
      </Text>
    </View>
  );
};

export default CategoryItemText;
