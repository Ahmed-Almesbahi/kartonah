import React from 'react';
import {View, Image, Text, Colors} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import {ImageSourcePropType} from 'react-native';
const TrackOrderItemH = ({
  stage,
  currentStage,
  icon,
}: {
  stage: number;
  currentStage: number;
  icon: ImageSourcePropType;
}) => {
  const {t} = useTranslation();
  const isActive = stage == currentStage?true:false;
  
  
  return (
    <View marginB-20 row>
      <View  center backgroundColor={isActive?Colors.secondary:currentStage < stage?Colors.white :Colors.light} style={isActive?{padding:20,height:55,width:55}:currentStage < stage?{padding:10,height:41,width:41,borderWidth:2,borderColor:Colors.light}:{padding:10,height:41,width:41}} marginR-10 br20>
        <Image source={icon} style={isActive?{width:34,height:34}:{width:28,height:28}} tintColor={isActive?Colors.primary:Colors.dark10} />
      </View>

    </View>
  );
};

export default TrackOrderItemH;
