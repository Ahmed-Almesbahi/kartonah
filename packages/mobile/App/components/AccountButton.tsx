import React from 'react';
import {ImageSourcePropType} from 'react-native';
import View from 'react-native-ui-lib/view';
import Image from 'react-native-ui-lib/image';
import Button from 'react-native-ui-lib/button';
import Assets from 'react-native-ui-lib/src/assets';
import Text from 'react-native-ui-lib/text';
import styles from 'theme/styles';
import {Colors} from 'react-native-ui-lib';
const AccountButton = ({
  onPress,
  title,
  extraText,
  icon,
}: {
  onPress: () => void;
  title: string;
  extraText?: string;
  icon: ImageSourcePropType;
}) => {
  return (
    <Button
      onPress={onPress}
      style={styles.accountButton}
      backgroundColor="transparent">
      <View centerV flex row spread>
        <View centerV row>
          <Image
            marginR-10
            source={icon}
            tintColor={Colors.dark30}
            width={25}
            height={25}
          />
          <Text text2>{title}</Text>
        </View>
        <View centerV row>
          {!!extraText && (
            <Text marginR-10 text4 bold>
              {extraText}
            </Text>
          )}
          <Image marginL-5 supportRTL source={Assets.icons.cheveronRight} />
        </View>
      </View>
    </Button>
  );
};

export default AccountButton;
