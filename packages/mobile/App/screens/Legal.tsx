import React from 'react';
import {View, Colors, KeyboardAwareScrollView, Text} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';

const Legal = ({page}) => {
  const {t} = useTranslation();
  return (
    <View flex backgroundColor={Colors.white}>
      <Header showBack white title={t('Legal ')} />
      <KeyboardAwareScrollView>
        <Text margin-10 marginB-0 text80>
          Occasion：Suitable for Autumn Winter and Spring.Simple solid
          pattern,this sweater can be worn alone, as well as goes well with
          coat, jacket, skirt, jeans and leggings.
        </Text>
        <Text margin-10 marginB-0 text80>
          Occasion：Suitable for Autumn Winter and Spring.Simple solid
          pattern,this sweater can be worn alone, as well as goes well with
          coat, jacket, skirt, jeans and leggings.
        </Text>
        <Text margin-10 marginB-0 text80>
          Occasion：Suitable for Autumn Winter and Spring.Simple solid
          pattern,this sweater can be worn alone, as well as goes well with
          coat, jacket, skirt, jeans and leggings.
        </Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

Legal.screenName = 'Kartonah.Screens.Legal';

Legal.options = {
  bottomTabs: {
    visible: false,
  },
};

export default Legal;
