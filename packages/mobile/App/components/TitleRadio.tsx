import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {View, Text, Button, Colors, Image, Assets} from 'react-native-ui-lib';
import styles from 'theme/styles';

const Title = ({
  title,
  border = false,
  selected,
  onPress,
  icon,
  iconPosition,
  rightContent,
}: {
  title: string;
  border?: boolean;
  selected: boolean;
  onPress: () => void;
  icon: ImageSourcePropType;
  iconPosition?: 'left' | 'right';
  rightContent?: any;
}) => {
  return (
    <Button
      paddingV-0
      paddingH-0
      onPress={onPress}
      backgroundColor="transparent">
      <View
        flex
        row
        spread
        centerV
        padding-0
        style={border ? styles.tabTitle : {}}>
        <View row spread centerV>
          <Button
            avoidMinWidth
            onPress={onPress}
            style={styles.filterRadio}
            backgroundColor={selected ? Colors.primary : Colors.white}>
            {selected && (
              <Image
                tintColor={Colors.black}
                source={Assets.icons.checkSmall}
              />
            )}
          </Button>
          {iconPosition == 'left' ? (
            <Image marginL-10 source={icon} style={{width: 30, height: 30}} />
          ) : null}
          <Text marginL-10 text1>
            {title}
          </Text>
        </View>

        {rightContent && rightContent()}
        {iconPosition != 'left' ? (
          <Image source={icon} style={{width: 30, height: 30}} />
        ) : null}
      </View>
    </Button>
  );
};

export default Title;
