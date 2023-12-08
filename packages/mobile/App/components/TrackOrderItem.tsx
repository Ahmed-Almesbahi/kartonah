import React from 'react';
import {View, Image, Text, Colors} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import {ImageSourcePropType} from 'react-native';
const TrackOrderItem = ({
  title,
  stage,
  currentStage,
  date,
  icon,
}: {
  title: string;
  stage: number;
  currentStage: number;
  date: string;
  icon: ImageSourcePropType;
}) => {
  const {t} = useTranslation();
  return (
    <View marginB-20 row>
      <View padding-10 center backgroundColor={Colors.light} marginR-10 br10>
        <Image source={icon} />
      </View>
      <View paddingT-10>
        <Text
          text2
          marginB-10
          secondary={stage <= currentStage}
          textMuted={stage > currentStage}>
          {title}
        </Text>
        <Text text3 textMted>
          {t('at')} {date}
        </Text>
      </View>
    </View>
  );
};

export default TrackOrderItem;
