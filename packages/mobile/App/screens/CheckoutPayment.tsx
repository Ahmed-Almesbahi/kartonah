import React, {useEffect, useState} from 'react';

// Third party
import {useTranslation} from 'react-i18next';
import {View, Colors, Button, Text, Image, Assets} from 'react-native-ui-lib';
import {useQuery} from '@redux-requests/react';
import {useSelector} from 'react-redux';
import {useNavigation} from 'react-native-navigation-hooks';
import {useStripe} from '@stripe/stripe-react-native';
import axios from 'axios';
import {FlatList} from 'react-native';
import * as Sentry from '@sentry/react-native';

// Application
import Tools from 'utils/Tools';
import {getPaymentIcon} from 'utils/helper';
import TitleRadio from 'components/TitleRadio';
import StripeWrapper from './Payments';
import Header from 'components/Header';
import {FETCH_PAYMENT_METHODS, getPaymentMethods} from 'app-redux/actions/api';
import {API_URL, BOLD, IS_PRODUCTION} from 'utils/constants';

const CheckoutPayment = ({
    onConfirm,
    formik,
    address,
    onPaymentSelect,
    total,
}: {
    onConfirm: () => void;
    formik: any;
    address: any;
    onPaymentSelect: () => void;
    total: number;
}) => {
    const {t} = useTranslation();
    const {initPaymentSheet, presentPaymentSheet} = useStripe();
    const [paymentMethod, setPaymentMethod] = useState<{
        image: string;
        label: string;
    } | null>(null);
    const [loading, setLoading] = useState(false);
    const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false);
    const {showModal} = useNavigation();
    const [selected, setSelected] = useState(1);
    const {userCredit, token} = useSelector(state => state.auth);

    useEffect(() => {
        initialisePaymentSheet();
    }, []);

    const methods = useQuery({
        type: FETCH_PAYMENT_METHODS,
        action: getPaymentMethods,
        variables: [],
        autoLoad: true,
    });

    const fetchPaymentSheetParams = async () => {
        const response = await axios.post(
            `${API_URL}/payment-sheet`,
            {...formik.values, totalAmount: total},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            },
        );

        const {paymentIntent, ephemeralKey, customer, requestId} = response?.data;

        return {
            paymentIntent,
            ephemeralKey,
            customer,
            requestId,
        };
    };

    const initialisePaymentSheet = async () => {
        // setLoading(true);
        try {
            const {paymentIntent, ephemeralKey, customer, requestId} = await fetchPaymentSheetParams();

            const {error, paymentOption} = await initPaymentSheet({
                customerId: customer,
                customerEphemeralKeySecret: ephemeralKey,
                paymentIntentClientSecret: paymentIntent,
                customFlow: true,
                merchantDisplayName: 'Kartonah Inc.',
                applePay: true,
                merchantCountryCode: 'US',
                style: 'alwaysLight',
                googlePay: true,
                testEnv: IS_PRODUCTION ? false : true,
            });

            if (!error) {
                setPaymentSheetEnabled(true);
            }
            if (paymentOption) {
                setPaymentMethod(paymentOption);
            }
        } catch (error) {
            Sentry.captureException(`initialisePaymentSheet error : ${error} , requestId : ${requestId}`);
            console.log('error', error);
        } finally {
            setLoading(false);
        }
    };

    const choosePaymentOption = async () => {
        const {error, paymentOption} = await presentPaymentSheet({
            confirmPayment: false,
        });

        if (error) {
            Sentry.captureException(`choosePaymentOption error : ${error}`);
            console.log('error', error);
        } else if (paymentOption) {
            setPaymentMethod({
                label: paymentOption.label,
                image: paymentOption.image,
            });

            onPaymentSelect({id: 1}, {id: 1});
        } else {
            setPaymentMethod(null);
        }
    };

    const getTitle = item => {
        // wallet
        if (item.id == 4) {
            return `${item?.elment_trans[0]?.title} (${Tools.getCurrecyFormatted(userCredit)})`;
        } else {
            if (item.id == 1 && paymentMethod) {
                return (
                    <View>
                        {/* <Image
              source={{
                uri: `data:image/png;base64,${paymentMethod.image}`,
              }}
              style={{ width: 26,height: 20}}
            /> */}
                        <Text text80>{paymentMethod.label}</Text>
                    </View>
                );
            }
            return `${item?.elment_trans[0]?.title}`;
        }
    };

    const renderPaymentMethodItem = ({item, index}) => (
        <View
            key={item.id}
            // margin-10
            style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.inputBorder,
            }}
            key={item.id}>
            <TitleRadio
                selected={selected === item.id}
                onPress={() => {
                    setSelected(item.id);
                    // formik.setFieldValue('paymentType', getPaymentName(item.id));
                    if (item.id != 1) {
                        showModal('Kartonah.Screens.PaymentDetails', {
                            description: item?.elment_trans[0]?.description,
                            instructions: item?.elment_trans[0]?.instructions,
                        });
                        onPaymentSelect(item);
                    }
                }}
                iconPosition="left"
                title={getTitle(item)}
                rightContent={() =>
                    item.id == 1 ? (
                        <Button
                            outline
                            outlineColor={Colors.secondary}
                            labelStyle={{fontWeight: BOLD}}
                            size={Button.sizes.xSmall}
                            borderRadius={5}
                            disabled={loading || !paymentSheetEnabled}
                            label={loading ? t('Loading') : paymentMethod ? t('Change') : t('Select')}
                            // label={t('Select')}
                            onPress={() => {
                                choosePaymentOption();
                                // ref.current.pushCards(item);
                            }}
                        />
                    ) : (
                        <Image marginL-5 supportRTL source={Assets.icons.cheveronRight} />
                    )
                }
                icon={
                    item.id == 1 && paymentMethod
                        ? {
                              uri: `data:image/png;base64,${paymentMethod.image}`,
                          }
                        : getPaymentIcon(item.id)
                }
            />
        </View>
    );

    // filter payment methods depened on a country
    let payment_methods = methods.data?.rows
        ?.filter(item => [1, 2, 3].includes(item.id))
        .filter(item => {
            if (address?.country?.id > 0) {
                if (item?.countries?.length > 0) {
                    let found = false;
                    item?.countries.map(country => {
                        if (country.id == address?.country?.id) {
                            found = true;
                        }
                    });
                    return found;
                }
            }
            return true;
        });

    return (
        <StripeWrapper>
            <View flex bg-white>
                <Header showBack showChat white title={t('Select payment method')} />
                <View flex>
                    <FlatList
                        // ListFooterComponent={() => <Text>hi</Text>}
                        // contentContainerStyle={{flexGrow: 1}}
                        bounces={false}
                        data={payment_methods}
                        renderItem={renderPaymentMethodItem}
                    />
                </View>

                <View useSafeArea>
                    <Button
                        style={{borderRadius: 5}}
                        marginV-20
                        marginH-20
                        avoidInnerPadding
                        enableShadow
                        disabled={loading || !paymentMethod || !paymentSheetEnabled}
                        backgroundColor={Colors.secondary}
                        onPress={() => {
                            setLoading(true);
                            onConfirm();
                        }}>
                        <View flex row spread>
                            <View padding-10 center flex>
                                <Text bold white>
                                    {loading || formik.isSubmitting ? t('Loading') : t('Place Order')}
                                </Text>
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
                                    {Tools.getCurrecyFormatted(total)}
                                </Text>
                            </View>
                        </View>
                    </Button>
                </View>
            </View>
        </StripeWrapper>
    );
};

CheckoutPayment.screenName = 'Kartonah.Screens.CheckoutPayment';

CheckoutPayment.options = {
    bottomTabs: {
        visible: false,
    },
};

export default CheckoutPayment;
