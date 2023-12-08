import {useFormik} from 'formik';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
    View,
    Colors,
    Button,
    Text,
    Image,
    Assets,
    KeyboardAwareScrollView,
    Dialog,
    PanningProvider,
    // Animated,
} from 'react-native-ui-lib';
import styles from 'theme/styles';
import Tools from 'utils/Tools';
import * as Yup from 'yup';
import {toast} from 'utils/helper';
import {actions} from 'app-redux/reducers/cart';
import {useDispatchRequest} from '@redux-requests/react';
import {checkCoupon} from 'app-redux/actions/api';
import {useSelector} from 'react-redux';
import {useNavigation} from 'react-native-navigation-hooks';
import TextField from 'components/TextField';
import TextAreaField from '../components/TextAreaField';

const CheckoutSummary = ({onConfirm, delivery, formik: formik2}: {onConfirm: () => void}) => {
    const {t} = useTranslation();
    const dispatch = useDispatchRequest();
    const cart = useSelector(state => state.cart);
    const userId = useSelector(state => state.auth.id);
    const general = useSelector(state => state.general?.country);

    const getTotalPrice = () => {
        let amount = 0;
        if (general.isShippingPriceIncluded) {
            amount = Tools.getCartSubTotal(cart) - Tools.getDiscount(Tools.getCartSubTotal(cart), cart?.couponDiscount);
        } else {
            amount =
                Tools.getCartSubTotal(cart) +
                shippingFees -
                Tools.getDiscount(Tools.getCartSubTotal(cart), cart?.couponDiscount);
        }

        return amount;
    };

    const formik = useFormik({
        initialValues: {
            couponCode: '',
        },
        validationSchema: Yup.object().shape({
            couponCode: Yup.string().required(),
        }),
        onSubmit: values => {
            dispatch(checkCoupon(values.couponCode)).then(({data, error}) => {
                formik.setSubmitting(false);
                if (error) {
                    toast(error.message, 'error');
                } else {
                    actions.addCoupon(dispatch, {
                        couponId: data.rows[0].id,
                        couponDiscount: data.rows[0].couponValue,
                        maximumAmount: data.rows[0].maximumAmount,
                        minimumValueToBeApplied: data.rows[0].minimumValueToBeApplied,
                    });
                    formik2.setFieldValue('couponId', data.rows[0].id);
                }
            });
        },
    });

    let shippingFees = formik2.values.shippingCost > 0 ? formik2.values.shippingCost : 0;

    return (
        <>
            <View bg-white marginT-10>
                <View marginH-20 paddingV-5 marginV-5 centerV row spread>
                    <Text text80 secondary bold>
                        {t('Do you have any coupon code?')}
                    </Text>
                </View>
                <View style={styles.fancySeparator} marginH-20 backgroundColor={Colors.light} />
                <View padding-20>
                    <View>
                        <TextField
                            onChangeText={formik.handleChange('couponCode')}
                            onBlur={formik.handleBlur('couponCode')}
                            value={formik.values.couponCode}
                            error={formik.errors.couponCode}
                            placeholder={t('Coupon Code')}
                            style={{marginBottom: 0}}
                            // title={t('Do you have any coupon code?')}
                        />
                        {cart.couponDiscount > 0 && (
                            <View
                                backgroundColor={Colors.green80}
                                style={{marginTop: 10, padding: 5}}
                                marginB-10
                                br20
                                row
                                centerV>
                                <Text flex text80>
                                    {t('You have saved')} {cart.couponDiscount}% {t('with coupon')}
                                </Text>
                                <Button
                                    avoidMinWidth
                                    avoidInnerPadding
                                    onPress={() => {
                                        actions.removeCoupon(dispatch);
                                    }}
                                    backgroundColor={Colors.secondary}
                                    style={[
                                        styles.buttonMini,
                                        {
                                            paddingVertical: 0,
                                            paddingHorizontal: 5,
                                            marginTop: 3,
                                            marginHorizontal: 5,
                                            height: 25,
                                        },
                                    ]}>
                                    <Text text100 white>
                                        {t('Remove')}
                                    </Text>
                                </Button>
                            </View>
                        )}
                        {cart.couponDiscount > 0 && Tools.getCartSubTotal(cart) <= cart.minimumValueToBeApplied && (
                            <View backgroundColor={Colors.red80} style={{padding: 5}} marginV-10 br20 row centerV>
                                <Text flex text80>
                                    {t('Minimum amount required for this coupon to be valid is ')}
                                    {Tools.getCurrecyFormatted(cart.minimumValueToBeApplied)}
                                </Text>
                            </View>
                        )}
                        <View paddingT-2 absR>
                            <Button
                                avoidMinWidth
                                avoidInnerPadding
                                disabled={formik.isSubmitting || !formik.isValid}
                                onPress={formik.handleSubmit}
                                backgroundColor={Colors.secondary}
                                style={[
                                    styles.buttonMini,
                                    {
                                        paddingVertical: 2,
                                        paddingHorizontal: 15,
                                        marginTop: 3,
                                        marginHorizontal: 5,
                                        height: 30,
                                    },
                                ]}>
                                <Text white text80>
                                    {formik.isSubmitting ? t('Loading') : t('APPLY')}
                                </Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>

            <View bg-white marginT-10>
                <View marginH-20 paddingV-5 marginV-5 centerV row spread>
                    <Text text80 secondary bold>
                        {t('Order Summary')}
                    </Text>
                </View>
                <View style={styles.fancySeparator} marginH-20 backgroundColor={Colors.light} />
                <View padding-20>
                    <View marginB-10 row spread>
                        <Text bold>{t('Estimation Weight')}</Text>
                        <Text text80>
                            {Tools.getCartTotalWeight(cart).toFixed(2)} {t('Kg')}
                        </Text>
                    </View>

                    <View marginB-10 row spread>
                        <Text bold>{t('Sub Total')}</Text>
                        <Text text80>{Tools.getCurrecyFormatted(Tools.getCartSubTotal(cart))}</Text>
                    </View>
                    {!general?.isShippingPriceIncluded && shippingFees > 0 ? (
                        <View marginB-10 row spread>
                            <Text bold>{t('Shipping Cost')}</Text>
                            <Text text80>{Tools.getCurrecyFormatted(shippingFees)}</Text>
                        </View>
                    ) : null}

                    <View marginB-10 row spread>
                        <Text bold>{t('Voucher Discount')}</Text>
                        <Text green10 text80>
                            {cart?.couponDiscount}%
                        </Text>
                    </View>
                    <View style={styles.fancySeparator} backgroundColor={Colors.light} marginB-10 />
                    <View marginB-10 row spread>
                        <Text bold>{t('Total price')}</Text>
                        <Text bold>{Tools.getCurrecyFormatted(getTotalPrice())}</Text>
                    </View>
                    <TextAreaField
                        onChangeText={formik2.handleChange('notes')}
                        onBlur={formik2.handleBlur('notes')}
                        value={formik2.values.notes}
                        title={t('Note')}
                    />
                </View>
            </View>
        </>
    );
};

export default CheckoutSummary;
