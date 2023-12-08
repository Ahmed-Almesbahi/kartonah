import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
    View,
    Colors,
    Button,
    Text,
    Image,
    Assets,
    KeyboardAwareScrollView,
    Checkbox,
    TouchableOpacity,
} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import {useNavigation} from 'react-native-navigation-hooks';

import {useDispatch, useSelector} from 'react-redux';
import Header from 'components/Header';
import CheckoutCard from 'components/CheckoutCard';
import Tools from 'utils/Tools';
import {actions} from 'app-redux/reducers/cart';
import {createOrder, fetchAddresses, FETCH_ADDRESSES} from 'app-redux/actions/api';
import {getPaymentName, toast} from 'utils/helper';
import {updateUserReducer} from 'app-redux/actions/auth';
import {useFormik} from 'formik';
import Payments from './Payments';
import CheckoutSummary from './CheckoutSummary';
import Delivery from 'components/Checkout/Delivery';
import {useQuery} from '@redux-requests/react';
import {useStripe} from '@stripe/stripe-react-native';
import KartonahApi from 'kartonah-common/api';
import _debounce from 'lodash/debounce';
import {usePush} from 'utils/hooks';
import _has from 'lodash/has';

const Checkout = () => {
    const {confirmPaymentSheetPayment} = useStripe();
    const [isRed, setRed] = useState(false);
    const cart = useSelector(state => state.cart);
    const general = useSelector(state => state.general);
    let generalCurrency = _has(general?.country, 'currencies[0].currency')
        ? general?.country?.currencies[0]?.currency
        : {};
    let generalCountry = general?.country;
    const dispatch = useDispatch();
    const {t} = useTranslation();
    // const ref = useRef();
    const ref = React.createRef();
    const scrollRef = useRef(null);

    const {showOverlay} = useNavigation();
    const push = usePush();
    const {userCredit, id: userId} = useSelector(state => state.auth);
    const [address, setAddress] = useState({});
    const [delivery, setDelivery] = useState({});
    // const [payment, setPayment] = useState({});
    const [iAgree, setAgree] = useState(false);

    // for auto select default address
    const addresses = useQuery({
        type: KartonahApi.FETCH_ADDRESSES,
        action: KartonahApi.fetchAddresses,
        variables: [],
        autoLoad: true,
    });

    useEffect(() => {
        let found = false;
        if (addresses.data?.rows?.length > 0 && !found) {
            //get the default
            let d = addresses.data?.rows.find(c => c.isDefault == 1);
            if (d?.id > 0) {
                actions.selectShippingMethod(dispatch, 'shipmentAdrsId', d.id);
                setAddress(d);
            }
        }
    }, [addresses.data]);

    const onPressBuy = async () => {
        // setLoading(true);

        if (error) {
            console.log(`Error code: ${error.code}`, error.message);
            // Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            console.log('The payment was confirmed successfully!');
            // Alert.alert('Success', 'The payment was confirmed successfully!');
            // setPaymentSheetEnabled(false);
        }
        // setLoading(false);
    };

    const getFinalTotal = () => {
        let amount = 0;
        if (generalCountry.isShippingPriceIncluded) {
            amount = Tools.getCartSubTotal(cart) - Tools.getDiscount(Tools.getCartSubTotal(cart), cart?.couponDiscount);
        } else {
            amount =
                Tools.getCartSubTotal(cart) -
                Tools.getDiscount(Tools.getCartSubTotal(cart), formik.values.shippingCost + cart?.couponDiscount) -
                formik.values.shippingCost;
        }
        return amount;
    };

    const formik = useFormik({
        initialValues: {
            paymentType: getPaymentName(3), //Iyzico
            cardId: cart.cardId,
            cardName: null,
            cardNum: null,
            cardExpiryDate: null,
            cvv: null,
            // userId: userId,
            orderId: cart?.id, // orderId
            couponId: cart.couponId,
            shipmentAdrsId: cart.shipmentAdrsId,

            shippingMethod: null, //express or land or air or sea
            cargoId: 0,

            shippingCost: 0,
            currencyCode: generalCurrency?.currencyCode || 'USD',

            // courierId: cart.courierId,
            notes: cart.notes,
            items: cart.cartItems
                .filter(c => c.status == 1)
                .map(c => ({
                    productId: c.product.id,
                    quantity: c.quantity,
                    variationId: c.variation.id,
                })),
        },
        onSubmit: async values => {
            // if this was stripe , the charge the client first
            // if (
            //   values.paymentType == getPaymentName(1) ||
            //   values.paymentType == null
            // ) {
            //   values.paymentType = getPaymentName(1);
            //   const res = await confirmPaymentSheetPayment();
            //   if (res.error) {
            //     toast(res.error.message, 'error');
            //     return false;
            //   }
            //   console.log('res', res);
            // }

            // if user credit dose not have enough credit
            if (values.paymentType == getPaymentName(4) && Tools.getCartSubTotal(cart) > userCredit) {
                toast(t('You do not have enough credit, Please add more money to your wallet first.'), 'error');
            } else {
                dispatch(KartonahApi.createOrder(values)).then(async ({data, error}) => {
                    formik.setSubmitting(false);

                    if (error) {
                        toast(error?.message, 'error');
                    } else {
                        if (data.row.id) {
                            actions.completeOrder(dispatch);
                            // if user select paying by wallet , then update local credit
                            if (values.paymentType == getPaymentName(4)) {
                                dispatch(
                                    updateUserReducer({
                                        userCredit: userCredit - Tools.getCartSubTotal(cart),
                                    }),
                                );
                            }
                            push('Kartonah.Screens.Checkout3', {orderId: data.row.id});
                        }
                    }

                    // do sth with response
                });
            }
        },
    });

    const onAddressSelect = data => {
        actions.selectShippingMethod(dispatch, 'shipmentAdrsId', data.id);
        formik.setFieldValue('shipmentAdrsId', data.id);
        setAddress(data);
    };
    const onPaymentSelect = (item, selectedCard = null) => {
        // console.log('pressed', item, selectedCard);
        formik.setFieldValue('paymentType', getPaymentName(item.id));
        if (item.id == 1) {
            formik.setFieldValue('cardId', selectedCard?.id);
            formik.setFieldValue('cardName', selectedCard?.cardName);
            formik.setFieldValue('cardNum', selectedCard?.cardNumber);
            formik.setFieldValue('cardExpiryDate', selectedCard?.cardExpire);
            formik.setFieldValue('cvv', selectedCard?.cvv);
            // setPayment(item);
        }
    };

    const onShippingMethodSelect = item => {
        setDelivery(item);
        formik.setFieldValue('shippingMethod', item.name);
        formik.setFieldValue('shippingCost', item.fees);
        formik.setFieldValue('cargoId', item.cargoId);
    };

    const debouncePush = useCallback(_debounce(push, 1000, {maxWait: 1000, leading: true, trailing: false}), []);

    return (
        <View flex backgroundColor={Colors.light}>
            <Header showBack showChat white title={t('Checkout')} />

            <KeyboardAwareScrollView contentInsetAdjustmentBehavior="always" ref={scrollRef}>
                {/* <CheckoutCard
                    title={t('Shipping Address')}
                    actionTitle={address?.id > 0 ? t('Change') : t('Add')}
                    onActionPress={() => {
                        push('Kartonah.Screens.Address', {
                            modal: true,
                            onSelect: data => onAddressSelect(data),
                        });
                    }}>
                    {address?.id > 0 ? (
                        <TouchableOpacity
                            onPress={() =>
                                push('Kartonah.Screens.Address', {
                                    modal: true,
                                    onSelect: data => onAddressSelect(data),
                                })
                            }>
                            <View paddingH-20 paddingV-10>
                                <Text text80 bold color={Colors.dark10}>
                                    {address?.firstName} {address?.lastName}
                                </Text>
                                <Text text80 bold color={Colors.dark10}>
                                    {address?.receiverMobile}
                                </Text>
                                <Text text80 bold color={Colors.dark40}>
                                    {address?.apartment} , {address?.road}, {address?.postalCode} {address?.region},{' '}
                                    {address?.city?.titleEN}, {address?.country?.titleEN}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ) : null}
                </CheckoutCard>

                {generalCountry?.isShippingPriceIncluded ? null : (
                    <Delivery address={address} onSelect={onShippingMethodSelect} />
                )} */}

                <CheckoutSummary formik={formik} />

                <View
                    row
                    bg-white
                    marginT-10
                    paddingH-20
                    paddingV-10
                    centerV
                    style={isRed ? {borderWidth: 1, borderColor: 'red'} : {}}>
                    <Text text80 marginT-3>
                        {t('I agree to')}
                        <Text
                            bold
                            primary
                            onPress={() => {
                                push('Kartonah.Screens.Terms');
                            }}>
                            {' '}
                            {t('terms of use')}{' '}
                        </Text>
                        {t('and')}
                        <Text primary bold onPress={() => push('Kartonah.Screens.DistanceTerms')}>
                            {' '}
                            {t('distance sales management.')}
                        </Text>
                    </Text>
                </View>
                <View style={{marginBottom: 100}} />
            </KeyboardAwareScrollView>
            <View
                absB
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    width: '100%',
                    borderTopWidth: 1,
                    borderTopColor: '#f2f2f2',
                }}
                useSafeArea>
                <Button
                    style={{borderRadius: 5}}
                    marginV-20
                    avoidInnerPadding
                    enableShadow
                    // style={styles.button}
                    // marginV-20
                    marginH-20
                    // disabled={
                    //   !(
                    //     iAgree &&
                    //     address?.id != undefined &&
                    //     address?.id > 0 &&
                    //     formik?.values.cargoId > 0 &&
                    //     formik.values.paymentType != null &&
                    //     ((formik.values.paymentType === getPaymentName(1) &&
                    //       formik?.values.cardId > 0) ||
                    //       formik.values.paymentType != getPaymentName(1))
                    //   )
                    // }
                    backgroundColor={Colors.secondary}
                    onPress={() => {
                        // push('Kartonah.Screens.CheckoutPayment', {
                        //     onConfirm: () => {
                        //         formik.handleSubmit();
                        //     },
                        //     formik,
                        //     address,
                        //     onPaymentSelect,
                        //     total: Math.round(getFinalTotal()),
                        // });
                        formik.handleSubmit();

                        return;
                        if (address?.id == undefined || address?.id == '' || address?.id == null) {
                            push('Kartonah.Screens.Address', {
                                modal: true,
                                onSelect: data => onAddressSelect(data),
                            });
                        } else if (formik?.values.cargoId == 0) {
                            toast(t('Contact us for shipping rates'), 'error');
                        } /*else if (!iAgree) {
              setRed(true);

              scrollRef?.current?._keyboardAwareView.scrollToEnd({
                animated: true,
              });
            }*/ else {
                            formik.handleSubmit();
                            // push('Kartonah.Screens.CheckoutPayment', {
                            //   onConfirm: () => {
                            //     formik.handleSubmit();
                            //   },
                            //   formik,
                            //   address,
                            //   onPaymentSelect,
                            //   total: Math.round(
                            //     Tools.getCartSubTotal(cart) +
                            //       formik.values.shippingCost -
                            //       cart?.couponDiscount,
                            //   ),
                            // });
                        }
                    }}>
                    <View flex row spread>
                        <View padding-10 center flex row>
                            <Text bold white>
                                {formik.isSubmitting ? t('Loading') : t('Agree & Continue')}
                            </Text>
                            <Image tintColor={Colors.white} marginL-10 supportRTL source={Assets.icons.arrowRight} />
                        </View>
                        <View
                            centerH
                            centerV
                            bg-white
                            padding-10
                            style={{
                                borderTopRightRadius: 5,
                                borderBottomRightRadius: 5,
                            }}>
                            <Text text60 color={Colors.secondary} style={{lineHeight: 32}}>
                                {Tools.getCurrecyFormatted(getFinalTotal())}
                            </Text>
                        </View>
                    </View>
                </Button>
            </View>
        </View>
    );
};

Checkout.screenName = 'Kartonah.Screens.Checkout';

Checkout.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Checkout;
