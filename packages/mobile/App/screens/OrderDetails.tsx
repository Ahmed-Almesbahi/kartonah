import React from 'react';
import {View, Colors, KeyboardAwareScrollView, Button, Text, Image, Assets} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import OrderDetailsItem from 'components/OrderDetailsItem';
import styles from 'theme/styles';
import {OrderType} from 'typescript/types';
import moment from 'moment';
import Tools from 'utils/Tools';
import {actions} from '../app-redux/reducers/cart';

import {useDispatchRequest, useQuery} from '@redux-requests/react';
import {cancelOrder, fetchOrder, FETCH_ORDER} from 'app-redux/actions/api';
import {getProductImage, toast} from 'utils/helper';
import {useNavigation} from 'react-native-navigation-hooks';
import {useSelector} from 'react-redux';
import KartonahApi from 'kartonah-common/api';

const OrderDetails = ({item}: {item: OrderType}) => {
    const {showOverlay, pop, showModal} = useNavigation();
    const {t} = useTranslation();
    const dispatch = useDispatchRequest();

    const order = useQuery({
        type: KartonahApi.FETCH_ORDER,
        action: KartonahApi.fetchOrder,
        variables: [item?.id],
        autoLoad: true,
        autoReset: true,
    });

    const reOrderAll = () => {
        order.data?.row?.vendors.map(vendor => {
            vendor.items.map(_item => {
                let product = {
                    title: _item?.product?.title,
                    mainPhoto: getProductImage(_item?.images[0]?.fileName, 400),
                    id: _item?.product?.id, // Product ID
                    productId: _item?.product?.id,
                    vendorId: vendor?.id,
                    regularPrice: _item?.product?.regularPrice,
                    priceBeforeDiscount: _item?.product?.regularPrice,
                    quantityStep: _item?.quantity,
                    weight: _item?.product?.weight,
                    sku: _item?.sku,
                    quantity: _item?.product?.quantityStep,
                    brandName: vendor?.brandName,
                    taxRate: vendor?.taxRate,
                };
                let variation = {
                    id: _item?.variationId,
                    minBill: vendor?.minBill,
                    discountPrices: [],
                };
                actions.addCartItem(dispatch, product, variation);
            });
        });
        toast(t('Added successfully'), 'success');
        // redirect to shopping cart
    };

    const getFinalTotal = () => {
        let amount = 0;

        if (order.data?.row?.isShippingPriceIncluded) {
            //612.9 USD
            amount = getOrderSubTotal() - getCouponDiscount();
        } else {
            amount = getOrderSubTotal() + order.data?.row?.shippingCost - getCouponDiscount();
        }

        return amount;
    };

    const getOrderSubTotal = () => {
        let amount = 0;
        order.data?.row?.vendors.map(vendor => {
            vendor.items.map(_item => {
                amount =
                    amount +
                    Tools.getPrice(_item.product.regularPrice, _item.product.weight, _item.quantity, {
                        isShippingPriceIncluded: order.data?.row?.isShippingPriceIncluded,
                        shippingPrice: order.data?.row?.shippingCost,
                    });
            });
        });
        return amount;
    };

    const numberOfItems = () => {
        let items = 0;
        order.data?.row?.vendors.map(v => {
            items = items + v.items.length;
        });
        return items;
    };

    const getTax = () => {
        return (8 / 100) * order.data?.row?.totalPrice;
    };
    const getCouponDiscount = () => {
        return order.data?.row?.couponDiscountValue ? order.data?.row?.couponDiscountValue : 0;
    };

    const getDeliveryName = _name => {
        let name: any = {
            air: t('Air Freight'),
            sea: t('Sea Freight'),
            land: t('Land Freight'),
            express: t('Express'),
        };

        return name[_name];
    };

    const getCurrency = () => {
        return {
            currencyCode: order.data?.row?.currencyCode,
            exchangeRate: order.data?.row?.exchangeRate,
        };
    };

    return (
        <View flex backgroundColor={Colors.light}>
            <Header showBack white title={t('Order Details')} />
            <KeyboardAwareScrollView bounces={false}>
                <View marginV-10 padding-20 backgroundColor={Colors.white}>
                    <Text text70 bold color={Colors.secondary} marginB-10>
                        {t('Order')} #{order.data?.row?.id}
                    </Text>
                    <Text text70 bold color={Colors.grey40}>
                        {t('Placed On')} {moment(order.data?.row?.created_at).format('MMM Do YYYY')}
                    </Text>
                    <Text text70 bold color={Colors.grey40}>
                        {t('No of items')}: {numberOfItems()}
                    </Text>
                    <Text text70 bold color={Colors.grey40}>
                        {t('No of vendors')}: {order.data?.row?.vendors?.length}
                    </Text>
                    <Text text70 bold color={Colors.grey40}>
                        {t('Total Amount')}: {Tools.getCurrecyFormatted(order.data?.row?.totalPrice, getCurrency())}
                    </Text>
                </View>

                <Text text70 bold color={Colors.grey40} marginH-20 uppercase>
                    {t('Items in your order')}
                </Text>

                {order.data?.row?.vendors?.map(order_vendor => (
                    <OrderDetailsItem key={order_vendor?.id} order={order.data?.row} item={order_vendor} />
                ))}

                <Text marginV-10 text70 bold color={Colors.grey40} marginH-20 uppercase>
                    {t('Payment')}
                </Text>
                <View padding-20 marginB-20 backgroundColor={Colors.white}>
                    <Text marginB-10 text70 bold color={Colors.secondary}>
                        {t('payment method')}
                    </Text>
                    <Text text70 bold color={Colors.grey40}>
                        {t('Payment done with')} {order.data?.row?.paymentType}
                    </Text>
                    <View marginV-10 style={styles.fancySeparator} backgroundColor={Colors.light} />
                    <View marginB-10 row spread>
                        <Text text70 bold color={Colors.grey40}>
                            {t('Sub Total')}
                        </Text>
                        <Text text70 bold color={Colors.grey40}>
                            {Tools.getCurrecyFormatted(getOrderSubTotal() - getTax(), getCurrency())}
                        </Text>
                    </View>
                    {!order.data?.row?.isShippingPriceIncluded && (
                        <View marginB-10 row spread>
                            <Text text70 bold color={Colors.grey40}>
                                {t('Shipping Cost')}
                            </Text>
                            <Text text70 bold color={Colors.grey40}>
                                {Tools.getCurrecyFormatted(order.data?.row?.shippingCost, getCurrency())}
                            </Text>
                        </View>
                    )}
                    <View marginB-10 row spread>
                        <Text text70 bold color={Colors.grey40}>
                            {t('Estimated Tax')}
                        </Text>
                        <Text text70 bold color={Colors.grey40}>
                            {Tools.getCurrecyFormatted(getTax(), getCurrency())}
                        </Text>
                    </View>
                    <View marginB-10 row spread>
                        <Text text70 bold color={Colors.grey40}>
                            {t('Voucher Discount')}
                        </Text>
                        <Text text70 bold green10>
                            -{Tools.getCurrecyFormatted(getCouponDiscount())}
                        </Text>
                    </View>
                    <View marginV-10 style={styles.fancySeparator} backgroundColor={Colors.light} />
                    <View marginB-10 row spread>
                        <Text text70 bold color={Colors.grey40}>
                            {t('Total price')}
                        </Text>
                        <Text text70 bold color={Colors.grey40}>
                            {Tools.getCurrecyFormatted(getFinalTotal(), getCurrency())}
                        </Text>
                    </View>
                </View>
                <Text marginV-10 text70 bold color={Colors.grey40} marginH-20 uppercase>
                    {t('Delivery')}
                </Text>
                <View padding-20 marginB-20 backgroundColor={Colors.white}>
                    <Text marginB-10 text70 bold color={Colors.secondary}>
                        {t('Delivery option')}
                    </Text>
                    <Text text70 bold color={Colors.grey40}>
                        {t('Delivery with')} {getDeliveryName(order?.row?.data?.shippingMethod)}
                        {/* {order.data?.courierId > 0
              ? t('courier shipping')
              : t('local shipping')} */}
                    </Text>
                    <View marginV-10 style={styles.fancySeparator} backgroundColor={Colors.light} />
                    <Text marginB-10 text70 bold color={Colors.secondary}>
                        {t('Delivery details')}
                    </Text>
                    <View centerV row>
                        <View flex>
                            <Text text70 bold color={Colors.grey40}>
                                {t('Country')}:
                            </Text>
                        </View>
                        <View flex>
                            <Text text70 bold color={Colors.grey40}>
                                {/* {order.data?.couriers?.country?.titleEN} */}
                                {order.data?.row?.shipmentAddress?.country?.titleEN}
                            </Text>
                        </View>
                    </View>
                    <View centerV row>
                        <View flex>
                            <Text text70 bold color={Colors.grey40}>
                                {t('Courier name')}:
                            </Text>
                        </View>
                        <View flex>
                            <Text textMuted>{order?.data?.row?.cargo?.titleEN}</Text>
                        </View>
                    </View>
                </View>
                <View backgroundColor={Colors.white} padding-20>
                    {order?.data?.row?.adminNote && (
                        <Button
                            br10
                            paddingV-20
                            paddingH-30
                            marginB-10
                            outline
                            outlineColor={Colors.secondary}
                            onPress={() => {
                                showModal('Kartonah.Screens.Modal', {
                                    title: t('Shipping Information'),
                                    content: (
                                        <View padding-10>
                                            <Text text80>{order?.data?.row?.adminNote}</Text>
                                        </View>
                                    ),
                                });
                            }}>
                            <Text text70 bold color={Colors.secondary}>
                                {t('Shipping Information')}
                            </Text>
                        </Button>
                    )}
                    {order.data?.row?.paymentStatus === 'pending' && (
                        <Button
                            br10
                            paddingV-20
                            paddingH-30
                            marginB-10
                            outline
                            outlineColor={Colors.red40}
                            onPress={() => {
                                showOverlay('Kartonah.Overlay.AlertDelete', {
                                    message: t('Are you sure to cancel this order ?'),
                                    onConfirm: () => {
                                        dispatch(cancelOrder(order.data?.row?.id)).then(({data, error}) => {
                                            if (error) {
                                                toast(error?.message, 'error');
                                            } else {
                                                pop();
                                            }
                                        });
                                    },
                                });
                            }}>
                            <Text text70 bold color={Colors.red40}>
                                {t('Cancel order')}
                            </Text>
                        </Button>
                    )}
                    <Button br10 paddingV-20 paddingH-30 onPress={reOrderAll} backgroundColor={Colors.secondary}>
                        <Image marginR-5 source={Assets.icons.redo} tintColor={Colors.white} />
                        <Text text70 bold white>
                            {t('Re-order all units')}
                        </Text>
                    </Button>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

OrderDetails.screenName = 'Kartonah.Screens.OrderDetails';

OrderDetails.options = {
    bottomTabs: {
        visible: false,
    },
};

export default OrderDetails;
