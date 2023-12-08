import {actions} from 'app-redux/reducers/cart';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Linking} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {useNavigation} from 'react-native-navigation-hooks';
import {Text, View, Button, Colors, Card} from 'react-native-ui-lib';
import {useDispatch, useSelector} from 'react-redux';
import {ProductItemType} from 'typescript/types';
import Tools from 'utils/Tools';
import Intercom from 'react-native-intercom';
import {setUpInterCom} from 'utils/helper';

const StickyCartSale = ({
    product,
    //   userPrices,
    stocks,
}: {
    product: ProductItemType;
    //   userPrices: any;
    stocks?: boolean;
}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {popToRoot} = useNavigation();
    const cart = useSelector(state => state.cart);
    const items = cart.cartItems.filter(c => c.product?.id == product?.id);

    // useEffect(() => {
    //   setUpInterCom();
    // }, []);

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

    //   const getTotalQty = (items) => {
    //     let qty = 0;
    //     items.map((i) => {
    //       qty = qty + i.quantity;
    //     });
    //     return qty;
    //   };
    //   const getTotalBeforeDiscount = (items) => {
    //     let amount = 0;
    //     items.map((i) => {
    //       amount = amount + i.product.regularPrice * i.quantity;
    //     });
    //     return amount;
    //   };
    //   const getTotalAfterDiscount = (items) => {
    //     let amount = 0;
    //     items.map((i) => {
    //       amount = amount + i.product.regularPrice * i.quantity;
    //     });
    //     return (amount / 100) * (100 - getDiscount());
    //   };

    //   const getDiscount = () => {
    //     let percent = 0;
    //     userPrices?.map((i) => {
    //       if (i.from <= getTotalQty(items) && i.to >= getTotalQty(items)) {
    //         percent = i.discount;
    //       }
    //     });
    //     return percent;
    //   };

    const handleClick = () => {
        Intercom.displayMessageComposerWithInitialMessage(t('Stock') + ' : ' + product?.elment_trans[0]?.title);
        // Intercom.displayMessenger();
        // https://wa.me/905525878753?text=urlencodedtext
        // let url =
        //   'https://wa.me/905525878753?text=' +
        //   encodeURI(t('Stock') + ' : ' + product?.elment_trans[0]?.title);
        // Linking.canOpenURL(url).then(supported => {
        //   if (supported) {
        //     Linking.openURL(url);
        //   } else {
        //     console.log("Don't know how to open URI: " + url);
        //   }
        // });
    };

    return (
        <View
            height={80}
            bg-white
            absB
            style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
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
            row
            spread
            padding-20
            enableShadow>
            <View flex centerV>
                <View>
                    <Text secondary text70 bold>
                        {t('Total')}
                        {' : '}
                        {Tools.getCurrecyFormatted(product?.price)}
                    </Text>
                    <Text marginB-5 text90 bold secondary>
                        {t('QTY')}: {product?.quantity} {t('units')}
                    </Text>
                </View>
            </View>
            <View flex centerV>
                <Button
                    br10
                    avoidMinWidth
                    paddingV-20
                    paddingH-30
                    onPress={() => {
                        handleClick();
                        // actions.addCartItem(dispatch, {
                        //     title: product?.title,
                        //     mainPhoto: THUMBNAIL_URL + product?.colours[0]?.images[0].fileName,
                        //     id: product.id, // Product ID
                        //     productId: product?.id,
                        //     vendorId: product?.userId,
                        //     regularPrice: product.price/product?.quantity,
                        //     priceBeforeDiscount: product.price/product?.quantity,
                        //     quantityStep: product?.quantity,
                        //     weight: product?.weight,
                        //     sku: product?.sku,
                        //     quantity: product?.quantity, // going to be extracted
                        //     brandName: product.user.brandName, // going to be extracted
                        //     taxRate: product?.user?.taxRate, // going to be extracted
                        //   }, {
                        //     id: 0,
                        //     minBill: product?.quantity,
                        //     discountPrices: [],
                        //   });
                        // Navigation.popToRoot('Kartonah.Screens.Home', {
                        //   bottomTabs: {currentTabIndex: 3},
                        // });
                    }}
                    backgroundColor={Colors.secondary}>
                    <Text text80 white bold>
                        {/* {t('Add to cart')} */}
                        {t('Buy')}
                    </Text>
                </Button>
            </View>
        </View>
    );
};

export default StickyCartSale;
