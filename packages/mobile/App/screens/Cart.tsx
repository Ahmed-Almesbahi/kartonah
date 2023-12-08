import React, {useEffect, useState} from 'react';
import {View, Colors, Text, Assets, Image, Button} from 'react-native-ui-lib';
import {DeviceEventEmitter, FlatList} from 'react-native';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
// import {cartItems, vendor} from 'data/demos';
import CartItem from 'components/CartItem';
import styles from 'theme/styles';

import {useSelector} from 'react-redux';
import CartFooter from 'components/CartFooter';
import {Navigation} from 'react-native-navigation';
import analytics from '@react-native-firebase/analytics';
import Intercom from 'react-native-intercom';
import BottomTabsBg from 'components/BottomTabsBg';
import EmptyResult from 'components/EmptyResult';
import SkeletonCart from 'components/Skeletons/SkeletonCart';
import {auth as authScreen} from 'navigation/appRoots';
import {setUpInterCom} from 'utils/helper';
import HeaderSearch from 'components/HeaderSearch';

const Cart = () => {
    const [show, setShow] = useState(true);
    const {t} = useTranslation();
    const cart = useSelector(state => state.cart);
    const userId = useSelector(state => state.auth.id);

    useEffect(() => {
        // setUpInterCom();

        // Register the listener to all events related to our component
        const registerComponentDidAppearListener = Navigation.events().registerComponentDidAppearListener(
            async event => {
                if (event.componentId === 'Kartonah.Screens.Cart') {
                    setShow(true);
                }
                await analytics().logScreenView({
                    screen_name: event.componentName,
                    screen_class: event.componentName,
                });
                Intercom.logEvent('viewed_screen', {extra: event.componentName});
            },
        );
        const registerComponentDidDisappearListener = Navigation.events().registerComponentDidDisappearListener(
            event => {
                if (event.componentId === 'Kartonah.Screens.Cart') {
                    setShow(false);
                }
            },
        );
        return () => {
            // Make sure to unregister the listener during cleanup
            registerComponentDidDisappearListener.remove();
            registerComponentDidAppearListener.remove();
        };
    }, []);

    // useEffect(() => {
    //   const unsubscribe = DeviceEventEmitter.addListener('onPressCart', () => {
    //     // setShow(true);
    //   });
    //   return () => {
    //     unsubscribe.remove();
    //   };
    // }, []);

    const renderCartItem = ({item}, index) => {
        return <CartItem key={item.id} vendor={item} />;
    };

    return (
        <View backgroundColor={Colors.light} flex>
            {/* <Header white title={t('My Cart')} /> */}
            <HeaderSearch hideSearch showChat title={t('My cart')} />

            {show ? (
                <FlatList
                    style={styles.productFlatList}
                    bounces={false}
                    data={cart.vendors?.length > 0 ? cart.vendors : []}
                    renderItem={renderCartItem}
                    ListFooterComponent={cart.vendors.length == 0 ? null : () => <CartFooter />}
                    contentContainerStyle={{flexGrow: 1}}
                    ListEmptyComponent={
                        <EmptyResult
                            icon={<Image source={Assets.images.emptyCart} />}
                            msg={
                                <>
                                    <Text marginT-20 text60 color={Colors.dark40}>
                                        {t('Empty Cart')}
                                    </Text>

                                    <Text text80 color={Colors.dark40}>
                                        {t('Your cart is empty.')}
                                    </Text>
                                    <Text text80 color={Colors.dark40}>
                                        {t('Please add a few items.')}
                                    </Text>
                                    {!userId && (
                                        <Button marginT-20 br20 primary onPress={() => authScreen()}>
                                            <Text text80>{t('Login first')}</Text>
                                        </Button>
                                    )}
                                </>
                            }
                        />
                    }
                />
            ) : (
                <SkeletonCart />
            )}

            <BottomTabsBg />
        </View>
    );
};

Cart.screenName = 'Kartonah.Screens.Cart';

export default Cart;
