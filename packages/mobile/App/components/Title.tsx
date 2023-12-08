import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import styles from 'theme/styles';

const Title = ({
  title,
  subText = ' ',
  border = false,
}: {
  title: string;
  subText?: string;
  border?: boolean;
}) => {
  return (
    <>
      <View
        row
        spread
        centerV
        marginH-10
        marginV-8
        padding-8
        style={border ? styles.tabTitle : {}}>
        <Text text1>{title}</Text>
        <Text text80 header>
          {subText}
        </Text>
      </View>
      <View style={styles.fancyLine} />
    </>
  );
};

export default Title;
