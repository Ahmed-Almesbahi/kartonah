import React from 'react';
import {View, Image, Button, Assets, Text, Colors} from 'react-native-ui-lib';
import styles from 'theme/styles';
const SettingsButton = ({
  onPress,
  title,
  last,
  subTitle,
}: {
  onPress: () => void;
  title: string;
  last?: boolean;
  subTitle?: string;
}) => {
  return (
    <>
      <Button
        onPress={onPress}
        style={styles.accountButton}
        backgroundColor="transparent">
        <View centerV flex row spread>
          <View centerV>
            {!!subTitle && (
              <Text text3 color={Colors.grey30}>
                {subTitle}
              </Text>
            )}
            <Text marginV-5 text2>
              {title}
            </Text>
          </View>
          <Image
            tintColor={Colors.light}
            marginL-5
            source={Assets.icons.cheveronRight}
          />
        </View>
      </Button>
      {!last && (
        <View paddingH-20>
          <View style={styles.fancySeparator} backgroundColor={Colors.light} />
        </View>
      )}
    </>
  );
};

export default SettingsButton;
