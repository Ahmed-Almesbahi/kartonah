import React from 'react';
import Card from 'react-native-ui-lib/card';
import Text from 'react-native-ui-lib/text';
import View from 'react-native-ui-lib/view';
import Image from 'react-native-ui-lib/image';
import {TextInput} from 'react-native';

import {Assets, Colors, Drawer, TextField} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {CardItemType} from 'typescript/types';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {deleteCard} from 'app-redux/actions/api';
import {useNavigation} from 'react-native-navigation-hooks';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
// import TextField from 'components/TextField';

const CardItemSmall = ({
  item,
  onCardPress,
  selected,
  addRef,
  index,
  onSwipeableWillOpen,
  formik,
}: {
  item: CardItemType;
  selected?: boolean;

  onCardPress: () => void;
}) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {showOverlay, showModal} = useNavigation();

  let obj = {
    icon: Assets.icons.pencil,
    style: {paddingVertical: 10},
    background: Colors.green30,
    onPress: () => {
      showModal('Kartonah.Screens.NewCard', {edit: true, item});
    },
  };

  return (
    <Drawer
      itemsIconSize={15}
      rightItems={[
        obj,
        {
          icon: Assets.icons.delete,
          style: {paddingVertical: 10},
          background: Colors.red30,
          onPress: () => {
            showOverlay('Kartonah.Overlay.AlertDelete', {
              onConfirm: () => {
                dispatch(deleteCard(item.id));
              },
            });
          },
        },
      ]}
      leftItem={obj}
      style={{marginTop: 10}}
      ref={(r) => addRef(r, index)}
      index={index} // sent for the 'closeLast' functionality
      onSwipeableWillOpen={onSwipeableWillOpen} // sent for the 'closeLast' functionality
    >
      <Card
        enableShadow={false}
        borderRadius={5}
        marginH-10
        // marginT-10
        //   padding-10
        onPress={onCardPress}
        selected={selected}
        elevation={0}>
        <View centerV row spread backgroundColor={Colors.light} padding-10>
          {/* <View centerV row>
          <Image source={require('images/icon-mastercard-alt.png')} />
          <Text marginL-10 secondary textMuted>
            {item.type ? item.type : 'visa'}
          </Text>
        </View> */}
          <Text text2 bold secondary>
            **** **** **** {item.cardNumber?.substr(item.cardNumber.length - 4)}
          </Text>
          <View
            centerV
            row
            bg-white
            style={{borderWidth: 1, borderColor: '#cccccc', borderRadius: 5}}>
            <TextInput
              style={{width: 50, height: 20, marginBottom: 0, paddingBottom: 0}}
              keyboardType="numeric"
              placeholder={t('CVV')}
              onChangeText={formik.handleChange('cvv')}
              value={formik.values.cvv}
            />
            {/* <Image source={require('images/icon-mastercard-alt.png')} /> */}
            {/* <Text marginL-10 secondary textMuted>
              {item.type ? item.type : 'visa'}
            </Text> */}
          </View>
          {/* <Button
          avoidMinWidth
          onPress={() => dispatch(deleteCard(item.id))}
          backgroundColor="trasparent">
          <Image source={Assets.icons.trash} />
        </Button> */}
        </View>
      </Card>
    </Drawer>
  );
};

export default gestureHandlerRootHOC(CardItemSmall);
