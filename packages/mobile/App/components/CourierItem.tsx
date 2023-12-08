import React from 'react';
import Card from 'react-native-ui-lib/card';
import Text from 'react-native-ui-lib/text';
import View from 'react-native-ui-lib/view';
import Image from 'react-native-ui-lib/image';
import Button from 'react-native-ui-lib/button';
import Switch from 'react-native-ui-lib/switch';
import {Assets, Colors, Drawer} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {deleteCourier, updateCourier} from 'app-redux/actions/api';
import {toast} from 'utils/helper';
import {useNavigation} from 'react-native-navigation-hooks';
import {couriersRow} from 'typescript/api.types';
import {ShippingMethods} from 'utils/constants';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const CourierItem = ({
  item,
  active,
  onPress,
  onCardPress,
  selected,
  addRef,
  index,
  onSwipeableWillOpen,
  drawer = true,
}: {
  item: couriersRow;
  active: boolean;
  selected?: boolean;
  onPress: () => void;
  onCardPress: () => void;
  drawer: boolean;
}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {showModal, showOverlay} = useNavigation();

  const getContent = () => {
    return (
      <Card
        enableShadow={false}
        style={[
          active ? styles.courierItemActive : styles.courierItem,
          drawer ? {} : {marginTop: 20},
          ,
        ]}
        borderRadius={5}
        marginH-10
        // marginT-10
        onPress={onCardPress}
        selected={selected}
        backgroundColor={active ? '#FFFEF6' : Colors.white}
        elevation={0}>
        <View padding-10>
          <View centerV row>
            <Image marginR-10 source={require('images/icon-truck.png')} />
            <Text secondary text4 bold>
              {item.title ? item?.title : item?.cargo?.full_name}
            </Text>
            {item.isDefault ? (
              <Button
                avoidMinWidth
                style={styles.buttonMini}
                paddingL-5
                paddingR-5
                paddingT-2
                paddingB-2
                marginL-10
                onPress={() => {
                  dispatch(updateCourier({...item, isDefault: 1})).then(
                    ({data}) => {
                      console.log('data', data);
                      if (data.success) {
                        toast(data.msg, 'success');
                      } else {
                        toast(data.msg, 'error');
                      }
                    },
                  );
                }}
                backgroundColor={Colors.secondary}>
                <Text white text3>
                  {t('default')}
                </Text>
              </Button>
            ) : null}
          </View>
          <View marginV-10>
            <Text bold secondary>
              {
                ShippingMethods.find((f) => f.value == item.shippingMethod)
                  ?.label
              }
            </Text>
            <Text bold secondary>
              {item.code}
            </Text>
          </View>
          <View marginB-10 row spread>
            <Text bold secondary>
              {item.country.titleEN}
            </Text>
            <Switch
              offColor={Colors.light}
              value={active}
              onValueChange={onPress}
            />
          </View>
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
                showModal('Kartonah.Screens.NewCourier', {edit: true, item});
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
            dispatch(deleteCourier(item.id));
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
        ref={(r) => addRef(r, index)}
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

export default gestureHandlerRootHOC(CourierItem);
