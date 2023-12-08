import React from 'react';
import Card from 'react-native-ui-lib/card';
import Text from 'react-native-ui-lib/text';
import View from 'react-native-ui-lib/view';
import Image from 'react-native-ui-lib/image';
import Button from 'react-native-ui-lib/button';
import {Assets, Colors} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {CardItemType} from 'typescript/types';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {deleteCard} from 'app-redux/actions/api';
import {useNavigation} from 'react-native-navigation-hooks';

const CardItem = ({item, onCardPress}: {item: CardItemType}) => {
  const dispatch = useDispatch();
  const {showModal} = useNavigation();
  const {t} = useTranslation();
  return (
    <Card
      enableShadow={false}
      borderRadius={20}
      marginH-10
      marginT-10
      padding-10
      onPress={() => {
        onCardPress();
      }}
      elevation={0}>
      <View centerV row spread>
        <View centerV row>
          <Image source={require('images/icon-mastercard-alt.png')} />
          <Text text80 marginL-10 secondary textMuted>
            {item.type ? item.type : 'visa'}
          </Text>
        </View>
        <Button
          avoidMinWidth
          onPress={() => dispatch(deleteCard(item.id))}
          backgroundColor="trasparent">
          <Image source={Assets.icons.trash} />
        </Button>
      </View>
      <View paddingV-10>
        <View style={styles.fancySeparator} backgroundColor={Colors.light} />
      </View>
      <View marginV-10>
        <Text text2 bold secondary>
          **** **** **** {item.cardNumber.substr(item.cardNumber.length - 4)}
        </Text>
      </View>
      <View marginV-10 centerV row spread>
        <View>
          <Text text80 secondary textMuted>
            {t('Name')}
          </Text>
          <Text text2 secondary>
            {item.cardName}
          </Text>
        </View>
        <View row>
          <Text text80 secondary textMuted>
            {t('Valid Until')}
          </Text>
          <Text marginL-10 text2 secondary>
            {item.cardExpire}
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default CardItem;
