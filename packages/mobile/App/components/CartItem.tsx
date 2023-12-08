import React, {useState} from 'react';
import {View, Colors, Text, Card, Button, Image, Assets} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import CartItemProduct from 'components/CartItemProduct';
import {useNavigation} from 'react-native-navigation-hooks';
import {actions} from '../app-redux/reducers/cart';
import {useDispatch, useSelector} from 'react-redux';
import {usePush} from 'utils/hooks';
const CartItem = ({vendor}) => {
    const {t} = useTranslation();
    const {showOverlay} = useNavigation();
    const push = usePush();
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const [lastIndex, setLastIndex] = useState(undefined);
    const [refArray, setRefArray] = useState([]);
    // console.log('object', vendor);

    const closeDrawer = index => {
        refArray[index]?.closeDrawer();
    };

    const addRef = (ref, index) => {
        refArray[index] = ref;
        setRefArray(refArray);
    };

    const closeLast = index => {
        if (lastIndex !== undefined && lastIndex !== index) {
            closeDrawer(lastIndex);
        }
        setLastIndex(index);
    };

    const onSwipeableWillOpen = props => {
        closeLast(props.index);
    };

    const totalQty = () => {
        let qty = 0;
        cartItems
            .filter(i => i.product.vendorId === vendor.id)
            .map(c => {
                if (c.status) {
                    qty = qty + c.quantity;
                }
            });
        return qty;
    };

    return (
        <Card borderRadius={0} marginT-10>
            <View marginH-20 row spread>
                <View row centerV>
                    <Text text80 marginV-10 secondary>
                        {t('Trader')}:{' '}
                    </Text>
                    <Button
                        link
                        avoidInnerPadding
                        onPress={() => {
                            push('Kartonah.Screens.VendorDetails', {vendor: vendor});
                        }}>
                        <Text text2 bold marginH-10 style={{lineHeight: 29}}>
                            {vendor?.brandName}
                        </Text>
                    </Button>
                    <Image
                        // marginB-10
                        tintColor={Colors.secondary}
                        supportRTL
                        // styles={{width: 6, height: 6, resizeMode: 'contain'}}
                        source={Assets.icons.cheveronRight}
                    />
                </View>

                {/* <Button
          onPress={() =>
            showOverlay('Kartonah.Overlay.AlertDelete', {
              onConfirm: () => {
                actions.emptyVendor(dispatch, vendor.id);
              },
            })
          }
          avoidMinWidth
          paddingR-0
          backgroundColor={Colors.white}>
          <Image tintColor={Colors.secondary} source={Assets.icons.trash} />
        </Button> */}
            </View>
            <View style={styles.fancySeparator} backgroundColor={Colors.light} />
            {totalQty() < vendor.minBill && (
                <View backgroundColor="#FEF0D5" marginH-20 marginT-10 padding-10 br20 row centerV>
                    <Image source={Assets.icons.error} marginH-10 style={{width: 30, height: 30}} />
                    <Text text80 flex>
                        {t('Current quantity does not meet the minimum requirement')}
                        {t(', please add more')} <Text bold>{vendor.minBill - totalQty()}</Text> {t('units')}
                    </Text>
                </View>
            )}

            {cartItems
                .filter(i => i.product.vendorId === vendor.id)
                .map((i, index) => (
                    <CartItemProduct
                        key={i.variation.id}
                        item={i}
                        addRef={addRef}
                        index={index}
                        onSwipeableWillOpen={onSwipeableWillOpen}
                    />
                ))}
        </Card>
    );
};

export default CartItem;
