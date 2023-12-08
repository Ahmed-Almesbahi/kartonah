import React from 'react';
import {useTranslation} from 'react-i18next';
import {Navigation} from 'react-native-navigation';
import {showModal, useNavigation} from 'react-native-navigation-hooks';
import {Text, View, Button, Colors, Card} from 'react-native-ui-lib';
import {useSelector} from 'react-redux';
import {ProductItemType} from 'typescript/types';
import Tools from 'utils/Tools';
import Intercom from 'react-native-intercom';
import {usePush} from 'utils/hooks';

const StickyCart = ({
    product,
    // userPrices,
    stocks,
    scrollView,
    backToParentPage,
    showDialog,
}: {
    product: ProductItemType;
    // userPrices: any;
    stocks?: boolean;
    showDialog?: () => void;
    scrollView?: any;
    // backToParentPage?: any;
    backToParentPage?: () => void;
}) => {
    const push = usePush();

    const {t} = useTranslation();
    const {popToRoot} = useNavigation();
    const cart = useSelector(state => state.cart);
    const items = cart.cartItems.filter(c => c.product?.id == product?.id);

    // const userPrices = [
    //   {
    //     id: 3,
    //     from: 0,
    //     to: 100,
    //     discount: 10,
    //   },
    //   {
    //     id: 4,
    //     from: 101,
    //     to: 200,
    //     discount: 30,
    //   },
    // ];

    const getTotalQty = items => {
        let qty = 0;
        items.map(i => {
            qty = qty + i.quantity;
        });
        return qty;
    };
    const getTotalBeforeDiscount = items => {
        let amount = 0;
        items.map(i => {
            amount = amount + i.product.regularPrice * i.quantity;
        });
        return amount;
    };
    const getTotalAfterDiscount = items => {
        let amount = 0;
        items.map(i => {
            amount = amount + Tools.getPrice(i.product.regularPrice, i?.product?.weight) * i.quantity;
        });
        return (amount / 100) * (100 - getDiscount());
    };

    const getDiscount = () => {
        let percent = 0;
        product.vendor?.userPriceVariations?.map(i => {
            if (i.from <= getTotalQty(items) && i.to >= getTotalQty(items)) {
                percent = i.discount;
            }
        });
        return percent;
    };

    if (product == undefined) {
        return null;
    }

    // return cart.cartItems?.find(ct => ct.product?.id == product?.id) || stocks ? (
    return (
        <View
            // height={100}
            useSafeArea
            bg-white
            absB
            style={{
                width: '100%',
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,

                elevation: 8,
            }}
            // padding-10
            paddingB-15
            row
            spread>
            <Button
                br20
                flex
                avoidMinWidth
                style={{height: 47}}
                marginR-10
                marginL-22
                marginT-13
                style={{height: 47}}
                onPress={() => {
                    Intercom.displayMessenger();
                }}
                backgroundColor={Colors.grey40}>
                <Text text65 white marginT-6>
                    {t('Chat With Us')}
                </Text>
            </Button>
            <Button
                br20
                flex
                marginT-13
                style={{height: 47}}
                marginR-22
                onPress={() => {
                    showModal(
                        'Kartonah.Screens.ProductVariations',
                        {
                            // push('Kartonah.Screens.ProductVariations', {
                            product,

                            onAddToCart: () => {
                                setTimeout(function () {
                                    showDialog();
                                    // showModal(
                                    //     'Kartonah.Screens.ProductAfterVariations',
                                    //     {
                                    //         product,
                                    //         backToParentPage,
                                    //     },
                                    //     {
                                    //         modal: {
                                    //             swipeToDismiss: false,
                                    //         },
                                    //     },
                                    // );
                                }, 1000);
                            },
                        },
                        {modalPresentationStyle: {modalTransitionStyle: 'fullScreen'}},
                    );
                }}
                backgroundColor={Colors.primary}>
                <Text text65 white marginT-6>
                    {t('Start Order')}
                </Text>
            </Button>
        </View>
    );
};

export default StickyCart;
