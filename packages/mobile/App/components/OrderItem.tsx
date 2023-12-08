import React from 'react';
import {View, Colors, Text, Card, Button, Image, Assets} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import {useNavigation} from 'react-native-navigation-hooks';
import {ScrollView} from 'react-native-gesture-handler';
import {OrderType} from 'typescript/types';
import Tools from 'utils/Tools';
import moment from 'moment';
import {Orders} from 'typescript/api.types';
import {usePush} from 'utils/hooks';
const OrderItem = ({item}: {item: Orders.Row}) => {
    const {t} = useTranslation();
    const {showModal} = useNavigation();
    const push = usePush();
    // {
    //   "paymentType": "BankTransfer",
    //   "cardName": null,
    //   "cardNum": null,
    //   "cardExpiryDate": null,
    //   "cvv": null,
    //   "userId": 35,
    //   "couponId": 5,
    //   "shipmentAdrsId": 0,
    //   "courierId": 30,
    //   "notes": "",
    //   "items": [
    //     {
    //       "productId": 497,
    //       "quantity": 360,
    //       "variationId": 6
    //     }
    //   ]
    // }

    const getCouponDiscount = () => {
        return item.couponDiscountValue ? item.couponDiscountValue : 0;
    };

    const getOrderSubTotal = () => {
        return item.totalPrice;
    };

    const getFinalTotal = () => {
        let amount = 0;

        if (item.isShippingPriceIncluded) {
            //612.9 USD
            amount = getOrderSubTotal() - getCouponDiscount();
        } else {
            amount = getOrderSubTotal() + item.shippingCost - getCouponDiscount();
        }

        return amount;
    };

    const getPaymentStatus = (text: 'pending' | 'paid' | 'unpaid') => {
        let status = {
            pending: t('Pending'),
            paid: t('Paid'),
            unpaid: t('UnPaid'),
        };
        return status[text];
    };

    const getPaymentIcon = (text: 'pending' | 'paid' | 'unpaid') => {
        // Assets.icons.orderConfirmed
        let status = {
            pending: Assets.icons.trackOrder2,
            paid: Assets.icons.trackOrder3,
            unpaid: Assets.icons.trackOrder1,
        };
        return status[text];
    };
    return (
        <Card onPress={() => push('Kartonah.Screens.OrderDetails', {item})} borderRadius={0} marginT-10>
            <View marginH-20 row spread>
                <View paddingT-20>
                    <Text text70 bold secondary>
                        #{item.id}
                    </Text>
                    <Text text70 bold color={Colors.grey40}>
                        {t('On')} {moment(item.created_at).format('MMM Do YYYY')}
                    </Text>
                </View>
                <Button
                    avoidMinWidth
                    paddingR-0
                    backgroundColor={Colors.white}
                    onPress={() => push('Kartonah.Screens.OrderDetails', {item})}>
                    <Text text80 color={Colors.primary} marginR-10>
                        {t('Details')}
                    </Text>
                    <Image tintColor={Colors.primary} supportRTL source={Assets.icons.cheveronRight} />
                </Button>
            </View>
            {item?.adminNote && (
                <View marginH-20 flex right>
                    <Button
                        avoidMinWidth
                        paddingR-0
                        backgroundColor={Colors.white}
                        onPress={() => {
                            showModal('Kartonah.Screens.Modal', {
                                title: t('Shipping Information'),
                                content: (
                                    <View padding-10>
                                        <Text text90>{item?.adminNote}</Text>
                                    </View>
                                ),
                            });
                        }}>
                        <Text color={Colors.secondary} bold marginR-10>
                            {t('Shipping Information')}
                        </Text>
                        <Image tintColor={Colors.secondary} supportRTL source={Assets.icons.cheveronRight} />
                    </Button>
                </View>
            )}
            {/* <View
        marginB-10
        style={styles.fancySeparator}
        backgroundColor={Colors.light}
      />
      <ScrollView horizontal>
        {item.products?.map((product, index) => (
          <View key={product.id} margin-10 marginL-20={index === 0} marginR-0>
            <Image
              width={60}
              height={80}
              borderRadius={10}
              resizeMethod="scale"
              source={product.image}
            />
          </View>
        ))}
      </ScrollView>
      <View
        marginT-10
        style={styles.fancySeparator}
        backgroundColor={Colors.light}
      /> */}
            <View centerV padding-20 row spread>
                <View centerV row>
                    <View padding-5 br20 backgroundColor={Colors.primary}>
                        <Image source={getPaymentIcon(item.paymentStatus)} />
                    </View>
                    <Text marginL-20 text70 bold>
                        {getPaymentStatus(item.paymentStatus)}
                    </Text>
                </View>
                <View>
                    <Text text3 secondary textMuted bold>
                        {t('Total')}
                    </Text>
                    <Text text60 bold style={{lineHeight: 30}}>
                        {Tools.getCurrecyFormatted(getFinalTotal(), {
                            currencyCode: item?.currencyCode,
                            exchangeRate: item?.exchangeRate,
                        })}
                    </Text>
                </View>
            </View>
        </Card>
    );
};

export default OrderItem;
