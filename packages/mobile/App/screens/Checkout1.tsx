import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {View, Colors, Button, Text, Image, Assets, TabBar, KeyboardAwareScrollView} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import CheckoutHeader from 'components/CheckoutHeader';
import {CourierItemType, AddressItemType} from 'typescript/types';
import {useNavigation} from 'react-native-navigation-hooks';
import AddressItem from 'components/AddressItem';
import CourierItem from 'components/CourierItem';
// import {addresses, couriers} from 'data/demos';
import {useDispatchRequest, useQuery} from '@redux-requests/react';
import {
    fetchAddresses,
    fetchCouriers,
    FETCH_ADDRESSES,
    FETCH_COURIERS,
    updateAddress,
    updateCourier,
} from 'app-redux/actions/api';
import {actions} from 'app-redux/reducers/cart';
import {useSelector} from 'react-redux';
import {FONT} from 'utils/constants';
import {toast} from 'utils/helper';
import {usePush} from 'utils/hooks';

const Checkout1 = () => {
    const cart = useSelector(state => state.cart);
    const {t} = useTranslation();
    const {showModal, showOverlay} = useNavigation();
    const push = usePush();
    const dispatch = useDispatchRequest();
    const [visible, openDialog] = useState(false);

    const [active, setActiveCourier] = useState(0);
    const [tab, setTab] = useState(cart.shipmentAdrsId > 0 ? 1 : 0);
    const [activeA, setActiveAddress] = useState(0);
    const userId = useSelector(state => state.auth.id);

    const [lastIndex, setLastIndex] = useState(undefined);
    const [refArray, setRefArray] = useState([]);
    const closeDrawer = index => {
        refArray[index].closeDrawer();
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

    const addresses = useQuery({
        type: FETCH_ADDRESSES,
        action: fetchAddresses,
        variables: [userId],
        autoLoad: true,
    });
    const couriers = useQuery({
        type: FETCH_COURIERS,
        action: fetchCouriers,
        variables: [],
        autoLoad: true,
    });

    useEffect(() => {
        if (cart.shipmentAdrsId > 0 || cart.courierId > 0) {
            // do nothing , already selected by default
        } else {
            let found = false;
            if (couriers.data?.rows?.length > 0) {
                //get the default
                let d = couriers.data?.rows.find(c => c.isDefault == 1);
                if (d?.id > 0) {
                    found = true;
                    actions.selectShippingMethod(dispatch, 'courierId', d.id);
                }
            }
            if (addresses.data?.rows?.length > 0 && !found) {
                //get the default
                let d = addresses.data?.rows.find(c => c.isDefault == 1);
                if (d?.id > 0) {
                    actions.selectShippingMethod(dispatch, 'shipmentAdrsId', d.id);
                }
            }

            console.log('found', couriers.data?.rows);
            console.log('found', found);
        }
    }, [addresses.data, couriers.data]);

    const FlatListFooter = () => (
        <Button
            margin-10
            outline
            fullWidth
            outlineColor={Colors.light}
            onPress={() => showModal('Kartonah.Screens.NewCourier')}
            style={styles.button}>
            <Image marginR-5 source={Assets.icons.addIcon} />
            <Text secondary>{t('Add new Courier')}</Text>
        </Button>
    );
    const FlatListFooterA = () => (
        <Button
            margin-10
            outline
            fullWidth
            outlineColor={Colors.light}
            onPress={() => showModal('Kartonah.Screens.NewAddress')}
            style={styles.button}>
            <Image marginR-5 source={Assets.icons.addIcon} />
            <Text secondary>{t('Add new Address')}</Text>
        </Button>
    );
    const renderAddressItem = ({item, index}: {item: AddressItemType; index: number}) => (
        <AddressItem
            key={item.id}
            item={item}
            // drawer={}
            active={index === activeA}
            addRef={addRef}
            index={index}
            onSwipeableWillOpen={onSwipeableWillOpen}
            selected={cart.shipmentAdrsId === item.id}
            onCardPress={() => {
                actions.selectShippingMethod(dispatch, 'shipmentAdrsId', item.id);
            }}
            onPress={() => {
                dispatch(updateAddress({...item, userId, isDefault: item.isDefault ? 0 : 1}));
                // actions.selectShippingMethod(dispatch, 'shipmentAdrsId', item.id);
                setActiveAddress(index);
            }}
        />
    );
    const renderCourierItem = ({item, index}: {item: CourierItemType; index: number}) => (
        <CourierItem
            key={item.id}
            item={item}
            active={index === active}
            addRef={addRef}
            index={index}
            onSwipeableWillOpen={onSwipeableWillOpen}
            selected={cart.courierId === item.id}
            // drawer={false}
            // active={item.isDefault === 1}
            onCardPress={() => {
                actions.selectShippingMethod(dispatch, 'courierId', item.id);
            }}
            onPress={() => {
                dispatch(updateCourier({...item, userId, isDefault: item.isDefault ? 0 : 1}));
                setActiveCourier(index);
            }}
        />
    );

    return (
        <View flex backgroundColor={Colors.light}>
            <KeyboardAwareScrollView contentInsetAdjustmentBehavior="always">
                <CheckoutHeader white title={t('Checkout (1/3)')} currentStep={1} />
                <TabBar selectedIndex={tab} onChangeIndex={(index: number) => setTab(index)} enableShadow>
                    {[t('Outside Turkey'), t('Inside Turkey')].map((_tab, index) => (
                        <TabBar.Item
                            key={index}
                            selectedLabelStyle={{fontFamily: FONT, color: Colors.primary}}
                            labelStyle={{color: Colors.dark20}}
                            label={_tab}
                        />
                    ))}
                </TabBar>
                {tab === 0 && (
                    <View marginT-10 backgroundColor={Colors.white}>
                        <FlatList
                            ListFooterComponent={FlatListFooter}
                            bounces={false}
                            // data={couriers}
                            data={couriers.data?.rows}
                            renderItem={renderCourierItem}
                        />
                    </View>
                )}
                {tab === 1 && (
                    <View marginT-10 backgroundColor={Colors.white}>
                        <FlatList
                            ListFooterComponent={FlatListFooterA}
                            bounces={false}
                            // data={addresses}
                            data={addresses.data?.rows}
                            renderItem={renderAddressItem}
                        />
                    </View>
                )}

                {(cart.shipmentAdrsId > 0 || cart.courierId > 0) && (
                    <View padding-20>
                        <Button
                            style={styles.button}
                            marginV-20
                            backgroundColor={Colors.secondary}
                            onPress={() => {
                                showOverlay('Kartonah.Screens.CartSummary', {
                                    onConfirm: () => {
                                        push('Kartonah.Screens.Checkout2');
                                    },
                                });
                                // openDialog(true);
                            }}>
                            <Text white>{t('Continue')}</Text>
                            <Image tintColor={Colors.white} marginL-10 supportRTL source={Assets.icons.arrowRight} />
                        </Button>
                    </View>
                )}
            </KeyboardAwareScrollView>
        </View>
    );
};

Checkout1.screenName = 'Kartonah.Screens.Checkout1';

Checkout1.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Checkout1;
