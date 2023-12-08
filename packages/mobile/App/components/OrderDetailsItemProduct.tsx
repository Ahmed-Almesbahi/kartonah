import {actions} from 'app-redux/reducers/cart';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ImageBackground} from 'react-native';
import {View, Text, Image, Button, Assets, Colors, TouchableOpacity} from 'react-native-ui-lib';
import {useDispatch} from 'react-redux';
import styles from 'theme/styles';
import {Order} from 'typescript/api.types';
import {getProductImage, toast} from 'utils/helper';
import Tools from 'utils/Tools';

import {useDispatchRequest} from '@redux-requests/react';
import {showModal, useNavigation} from 'react-native-navigation-hooks';
import {usePush} from 'utils/hooks';

const OrderDetailsItemProduct = ({
    item,
    vendor,
    order,
}: // order_vendors
{
    item: Order.Item;
    vendor: Order.OrderVendor;
}) => {
    const push = usePush();
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const dispatch2 = useDispatchRequest();

    // const getCurrentStage = () => {
    //   let x = {
    //     pending: 1,
    //     confirmed: 2,
    //     processing: 3,
    //     shipped: 4,
    //     delivered: 5,
    //     canceled: 6,
    //   };
    //   return x[item.pivot.orderStatus];
    // };

    // console.log('bbb', item);

    const reOrder = () => {
        let product = {
            title: item?.product?.title,
            mainPhoto: getProductImage(item?.images[0]?.fileName, 400),
            id: item?.product?.id, // Product ID
            productId: item?.product?.id,
            vendorId: vendor?.vendor?.id,
            regularPrice: item?.product?.regularPrice,
            priceBeforeDiscount: item?.product?.regularPrice,
            quantityStep: item?.quantity,
            weight: item?.product?.weight,
            sku: item?.sku,
            quantity: item?.product?.quantityStep, // going to be extracted
            brandName: vendor?.vendor?.brandName, // going to be extracted
            taxRate: vendor?.vendor?.taxRate, // going to be extracted
        };
        let variation = {
            id: item?.variationId,
            minBill: vendor?.vendor.minBill,
            discountPrices: [],
        };
        actions.addCartItem(dispatch, product, variation);
        toast(t('Added successfully'), 'success');
    };

    return (
        <View marginB-10 row>
            {/* <Image
        source={{uri: item?.images[0]?.imgUrl}}
        style={styles.productCartImage}
      /> */}
            <View style={{width: 65}}>
                <TouchableOpacity
                    marginL-10
                    style={[{width: 60}]}
                    onPress={() => {
                        push('Kartonah.Screens.ProductDetails', {
                            data: {
                                ...item.product,
                                id: item?.product?.id,
                                user: {
                                    id: vendor?.vendor?.id,
                                },
                            },
                        });
                    }}>
                    <ImageBackground
                        source={{uri: getProductImage(item?.images[0]?.fileName, 400)}}
                        // style={styles.productCartImage}
                        style={{
                            width: '100%',
                            height: 85,
                            // padding: 20,
                            // paddingVertical: 40,
                            overflow: 'hidden', // prevent image overflow the container
                            borderRadius: 10,
                            borderWidth: 3,
                            borderColor: Colors.rgba(Colors.dark10, 0.1),
                            // paddingVertical: 3,
                        }}
                        imageStyle={{
                            marginTop: -3,
                            resizeMode: 'cover',
                            height: 100, // the image height
                            // top: undefined,
                            bottom: undefined,
                            borderRadius: 10,

                            // position: 'absolute',
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View spread flex marginL-10>
                <Text bold color={Colors.secondary}>
                    {item?.product?.title}
                </Text>
                <View row spread centerV>
                    <Text text70 bold color={Colors.grey40}>
                        {t('QTY')} : {item?.quantity}
                    </Text>
                    {vendor?.orderStatus == 'delivered' && (
                        // <View left>

                        // </View>
                        <Button
                            backgroundColor={Colors.white}
                            onPress={() => {
                                showModal('Kartonah.Screens.NewRate', {
                                    id: item?.product.id,
                                });
                            }}
                            avoidInnerPadding>
                            <Image marginR-5 source={Assets.icons.plusSmall} />
                            <Text bold color={Colors.secondary}>
                                {t('Rate')}
                            </Text>
                        </Button>
                    )}
                </View>

                <View row spread centerV>
                    <Text text70 bold color={Colors.secondary}>
                        {Tools.getPriceWithCurrecyFormatted(item?.regularPrice, 1, 1, {
                            exchangeRate: order?.exchangeRate,
                            currencyCode: order?.currencyCode,
                            isShippingPriceIncluded: order?.isShippingPriceIncluded,
                            shippingPrice: order?.shippingCost,
                        })}
                    </Text>

                    <Button backgroundColor={Colors.white} onPress={reOrder} avoidInnerPadding>
                        <Image marginR-5 source={Assets.icons.redo} />
                        <Text bold color={Colors.secondary}>
                            {t('Re-Order')}
                        </Text>
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default OrderDetailsItemProduct;
