import React from 'react';
import Card from 'react-native-ui-lib/card';
import Text from 'react-native-ui-lib/text';
import View from 'react-native-ui-lib/view';
import Image from 'react-native-ui-lib/image';
import Button from 'react-native-ui-lib/button';
import Switch from 'react-native-ui-lib/switch';
import {Assets, Colors, Drawer} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {AddressItemType} from 'typescript/types';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {deleteAddress, updateAddress} from 'app-redux/actions/api';
import {useNavigation} from 'react-native-navigation-hooks';
import {useDispatchRequest} from '@redux-requests/react';
import {AddressesRow} from 'typescript/api.types';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const AddressItem = ({
  item,
  active,
  onCardPress,
  onPress,
  selected,
  addRef,
  index,
  onSwipeableWillOpen,
  drawer = true,
}: {
  item: AddressesRow;
  active: boolean;
  selected?: boolean;
  onPress: () => void;
  onCardPress: () => void;
  drawer: boolean;
}) => {
  const {t} = useTranslation();
  const dispatch = useDispatchRequest();
  const {showModal, showOverlay} = useNavigation();

  const getContent = () => {
    return (
      <Card
        enableShadow={false}
        style={[
          active ? styles.courierItemActive : styles.courierItem,
          drawer ? {} : {marginTop: 20},
        ]}
        borderRadius={5}
        marginH-10
        // marginT-10
        padding-10
        onPress={onCardPress}
        selected={selected}
        selectionOptions={
          {
            // iconColor: Colors.grey10,
            // color: Colors.grey10,
            // borderWidth: 0,
            // indicatorSize: 25,
            // borderWidth: 1,
          }
        }
        backgroundColor={active ? '#FFFEF6' : Colors.white}
        elevation={0}>
        <View centerV row>
          <Image marginR-10 source={require('images/icon-work.png')} />
          <Text secondary text4 bold>
            {item.firstName} {item.lastName}
          </Text>
          {active && (
            <Button
              avoidMinWidth
              style={styles.buttonMini}
              paddingL-5
              paddingR-5
              paddingT-2
              paddingB-2
              marginL-10
              backgroundColor={Colors.secondary}>
              <Text white text3>
                {t('default')}
              </Text>
            </Button>
          )}
        </View>
        <View marginV-10>
          <Text text80 bold secondary>
            {item.receiverMobile}
          </Text>
        </View>
        <View marginB-10 row spread>
          <Text text80 bold secondary>
            {item.apartment},{item.road},{item.city?.titleEN} {item.postalCode}{' '}
            , {item.region} , {item?.country?.titleEN}
          </Text>
          <Switch
            offColor={Colors.light}
            value={active}
            onValueChange={onPress}
          />
        </View>
        {selected ? null : (
          <View
            absR
            backgroundColor={active ? Colors.primary : '#C3CADE'}
            centerV
            centerH
            style={{
              width: 30,
              height: 30,
              borderBottomLeftRadius: 5,
              borderTopRightRadius: 5,
            }}>
            <Button
              avoidMinWidth
              link
              onPress={() => {
                showModal('Kartonah.Screens.NewAddress', {edit: true, item});
              }}>
              <Image source={Assets.icons.pencil} />
            </Button>
          </View>
        )}
      </Card>
    );
  };

  if (drawer) {
    let obj = {
      icon: Assets.icons.delete,
      style: {paddingVertical: 10},
      background: Colors.red30,
      onPress: () => {
        showOverlay('Kartonah.Overlay.AlertDelete', {
          onConfirm: () => {
            dispatch(deleteAddress(item.id)).catch(e => {
              console.log('a', e);
              console.log('e', e.message);
            });
          },
        });
      },
    };
    return (
      <Drawer
        itemsIconSize={15}
        rightItems={[obj]}
        leftItem={obj}
        style={{marginTop: 10}}
        ref={r => addRef(r, index)}
        index={index} // sent for the 'closeLast' functionality
        onSwipeableWillOpen={onSwipeableWillOpen} // sent for the 'closeLast' functionality
      >
        {getContent()}
      </Drawer>
    );
  } else {
    return getContent();
  }
};

export default gestureHandlerRootHOC(AddressItem);
