import React, {useEffect, useState} from 'react';
import {Image, View, Colors, Badge, Button, Text, Shadows, Assets} from 'react-native-ui-lib';
// import {Image} from 'react-native';

import Favorite from 'images/heart.png';
import FavoriteSelected from 'images/icon-awesome-heart-selected.png';

import Sales from 'images/sale-label.png';
import SalesSelected from 'images/sale-label-selected.png';
import Categories from 'images/categories-selected.png';
import CategoriesSelected from 'images/categories-selected.png';

import Home from 'images/home.png';
import HomeSelected from 'images/home.png';

import Cart from 'images/icon-cart.png';
import CartSelected from 'images/icon-cart-selected.png';

import Account from 'images/icon-account.png';
import AccountSelected from 'images/icon-account-selected.png';

import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {DeviceEventEmitter, I18nManager, Platform, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {useSelector} from 'react-redux';
import Tools from 'utils/Tools';
import {FONT, FONT_BOLD} from 'utils/constants';
import {bold} from 'theme';
import {useNavigation} from 'react-native-navigation-hooks';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BottomTabsBg = props => {
    const {popToRoot} = useNavigation();
    // const insets = useSafeAreaInsets();
    const {t} = useTranslation();
    const [page, setPage] = useState('Kartonah.Screens.Home2');
    // [Favorite, Sales, Home, Cart, Account].map((iconSource) => ({
    //   iconSource,
    //   iconStyle: {width: 25},
    // }))

    const cart = useSelector(state => state.cart);

    useEffect(() => {
        // Register the listener to all events related to our component
        const registerComponentDidAppearListener = Navigation.events().registerComponentDidAppearListener(
            async event => {
                setPage(event.componentId);
            },
        );

        return () => {
            registerComponentDidAppearListener.remove();
        };
    }, []);

    const getCartCount = () => {
        let total = 0;
        cart.vendors.map(vendor => {
            total = total + Tools.totalQtyByVendor(vendor.id, cart.cartItems);
        });
        return total;
    };

    const BottomButton = ({
        label,
        id,
        index,
        icon,
        selectedIcon,
        badge,
    }: {
        label: string;
        id: string;
        index: number;
        icon: any;
        selectedIcon: any;
        badge?: number;
    }) => {
        return (
            <View
                key={index}
                flex
                // {...this.getAlignment(i)}
            >
                <Button
                    link
                    avoidMinWidth
                    avoidInnerPadding
                    // size={Button.sizes.medium}
                    // primary
                    onPress={() => {
                        //cart
                        if (index === 3) {
                            DeviceEventEmitter.emit('onPressCart');
                        }
                        if (index === 2) {
                            popToRoot();
                            // DeviceEventEmitter.emit('onPressCategories');
                        }
                        if (index === 1) {
                            popToRoot();
                            DeviceEventEmitter.emit('onPressCategories');
                        }
                        //stocks
                        // if (index === 1) {
                        //     DeviceEventEmitter.emit('onPressStock');
                        // }
                        Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {
                            bottomTabs: {
                                currentTabIndex: index,
                            },
                        });
                    }}>
                    <View center>
                        {page == id ? (
                            <Image
                                source={icon}
                                tintColor={Colors.secondary}
                                key="selected"
                                style={{height: 25}}
                                resizeMode="contain"
                                // tintColor={Colors.secondary}
                            />
                        ) : (
                            <Image
                                source={icon}
                                tintColor={Colors.grey30}
                                style={{height: 25}}
                                resizeMode="contain"
                                // tintColor={Colors.grey30}
                            />
                        )}
                        <Text
                            text100
                            color={page == id ? Colors.secondary : Colors.grey30}
                            // style={{fontFamily: FONT_BOLD, fontWeight: bold}}
                        >
                            {label}
                        </Text>
                        {badge > 0 && (
                            <Badge
                                label={badge.toString()}
                                style={{position: 'absolute', right: -10, top: -5}}
                                backgroundColor={Colors.red30}
                                size={'small'}
                            />
                        )}
                    </View>
                </Button>
            </View>
        );
    };

    const home = () => {
        return (
            <View
                flex
                key={2}
                // {...this.getAlignment(i)}
            >
                <Button
                    link
                    size={Button.sizes.medium}
                    primary
                    onPress={() => {
                        // if (props?.onHomeClick) {
                        //   props?.onHomeClick();
                        // }
                        // Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {
                        //   bottomTabs: {
                        //     currentTabIndex: 2,
                        //   },
                        // });
                        DeviceEventEmitter.emit('onPressHome');
                        Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {
                            bottomTabs: {
                                currentTabIndex: 2,
                            },
                        });
                        // Navigation.popToRoot('Kartonah.Screens.Home', {
                        //   bottomTabs: {
                        //     currentTabIndex: 2,
                        //   },
                        // });
                    }}>
                    <View center>
                        <Image
                            source={page == 'home' ? HomeSelected : Home}
                            style={{width: 70, height: 70}}
                            // width={40}
                            // height={40}
                        />
                    </View>
                </Button>
            </View>
        );
    };

    let height = 68;
    let centered = true;
    let keepRelative = false;

    let list = [
        BottomButton({
            index: 0,
            id: 'Kartonah.Screens.Favorite',
            label: t('Favorite'),
            icon: Favorite,
            selectedIcon: FavoriteSelected,
        }),
        BottomButton({
            index: 1,
            id: 'Kartonah.Screens.Categories',
            label: t('Categories'),
            icon: Categories,
            selectedIcon: CategoriesSelected,
        }),
        BottomButton({
            index: 2,
            id: 'Kartonah.Screens.Home2',
            label: t('Home'),
            icon: Home,
            selectedIcon: Home,
        }),
        // home(),
        BottomButton({
            index: 3,
            id: 'Kartonah.Screens.Cart',
            label: t('My cart'),
            icon: Cart,
            selectedIcon: CartSelected,
            badge: getCartCount(),
        }),
        BottomButton({
            index: 4,
            id: 'Kartonah.Screens.Account',
            label: t('Account'),
            icon: Account,
            selectedIcon: AccountSelected,
        }),
    ];

    if (I18nManager.isRTL) {
        Array.prototype.reverse.call(list);
    }

    return (
        <>
            <View
                style={{
                    minHeight:
                        // insets.bottom + height
                        height,
                    // height,
                }}
            />
            <View
                useSafeArea
                style={[
                    !keepRelative && {
                        ...StyleSheet.absoluteFillObject,
                        top: undefined,
                        backgroundColor: 'white',
                        ...Shadows.sh30.top,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: Platform.OS === 'android' ? 1 : 0.4,
                        shadowRadius: 16.0,
                        elevation: 24,
                    },
                ]}>
                <View row centerV paddingH-20={!centered} style={[{height}]}>
                    {list}
                </View>
            </View>
        </>
    );
};

export default BottomTabsBg;
