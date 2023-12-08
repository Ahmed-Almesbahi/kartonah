import React, {useState} from 'react';
import {View, Colors, KeyboardAwareScrollView, Card, Button, Text, Image, Assets, TabBar} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
// import ScrollableTabView from 'components/react-native-scrollable-tab-view';

import Title from 'components/Title';
import TitleRadio from 'components/TitleRadio';
import Transfer from 'components/Transfer';
import TextField from 'components/TextField';
import * as Animatable from 'react-native-animatable';
import {useQuery} from '@redux-requests/react';
import {
    fetchTotalTransferedFrom,
    fetchTotalTransferedTo,
    FETCH_TOTAL_TRANSFERED_FROM,
    FETCH_TOTAL_TRANSFERED_TO,
    transferMoney,
    FETCH_USER_TRANSFER_LOGS,
    fetchUserTransferLogs,
    addCredit as addCreditDispatch,
    FETCH_PAYMENT_METHODS,
    getPaymentMethods,
    uploadFile,
} from 'app-redux/actions/api';
import * as Yup from 'yup';
import 'yup-phone';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {getPaymentIcon, toast} from 'utils/helper';
import Tools from 'utils/Tools';
import PhoneField from 'components/PhoneField';
import ErrorText from 'components/ErrorText';
import FileField from 'components/FileField';
import ImagePicker from 'react-native-image-crop-picker';
import {CreditCardInput} from '../lib/react-native-credit-card-input';
import {FONT} from 'utils/constants';

const Wallet = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [tab, setTab] = useState(0);

    const countryCode = useSelector(state => state.general.countryCode);
    const {id: userId, userCredit} = useSelector(state => state.auth);

    const transferLogs = useQuery({
        type: FETCH_USER_TRANSFER_LOGS,
        action: fetchUserTransferLogs,
        variables: [userId, 0, 20],
        autoLoad: true,
    });

    const totalTransferdFrom = useQuery({
        type: FETCH_TOTAL_TRANSFERED_FROM,
        action: fetchTotalTransferedFrom,
        variables: [userId],
        autoLoad: true,
    });
    const totalTransferdTo = useQuery({
        type: FETCH_TOTAL_TRANSFERED_TO,
        action: fetchTotalTransferedTo,
        variables: [userId],
        autoLoad: true,
    });

    const methods = useQuery({
        type: FETCH_PAYMENT_METHODS,
        action: getPaymentMethods,
        variables: [],
        autoLoad: true,
    });

    const uploadImage = async (type = 'payment') => {
        ImagePicker.openPicker({
            width: 200,
            height: 400,
            cropping: true,
        }).then(image => {
            let uploadData = new FormData();
            uploadData.append('files[]', {
                type: image.mime,
                uri: image.path,
                name: image.path.split('/').pop(),
            });

            dispatch(uploadFile(userId, uploadData, type)).then(({data}) => {
                toast(t('Uploaded file successfully'), 'success');
            });
        });
    };

    const formikTransfer = useFormik({
        initialValues: {
            phone: '',
            transferedFrom: userId, //userId
            amount: 0,
            // code: '',
        },
        validationSchema: Yup.object().shape({
            // phone: Yup.string().phone().required(),
            phone: Yup.number().required(),
            amount: Yup.number().required(),
            // code: Yup.number().oneOf([code]).required(),
        }),
        onSubmit: values => {
            dispatch(transferMoney(values))
                .then(({data, error}) => {
                    console.log('error', error);
                    console.log('data', data);
                    formikTransfer.setSubmitting(false);
                    if (data.success) {
                        toast(data.msg, 'success');
                    } else {
                        toast(data.msg, 'error');
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        },
    });

    const formikAddCredit = useFormik({
        initialValues: {
            id: userId,
            paymentType: 1,
            amount: 0,
            cardName: '',
            cardNum: '',
            year: '',
            month: '',
            cvv: '',
        },
        validationSchema: Yup.object().shape({
            amount: Yup.number(),
            cardName: Yup.string(),
            cardNum: Yup.number(),
            year: Yup.number(),
            month: Yup.number(),
            cvv: Yup.number(),
        }),
        onSubmit: values => {
            dispatch(addCreditDispatch(values)).then(({data}) => {
                formikAddCredit.setSubmitting(false);
                if (data.success) {
                    toast(data.msg, 'success');
                } else {
                    toast(data.msg, 'error');
                }
            });
            console.log('values', values);
        },
    });

    return (
        <View flex backgroundColor={Colors.light}>
            <Header showBack white title={t('My Wallet')} />

            <KeyboardAwareScrollView bounces={false}>
                <View style={styles.walletSummary} padding-20 centerV backgroundColor={Colors.white} row spread>
                    <Text text90>{t('your current balance')}</Text>
                    <Text h1>{Tools.getCurrecyFormatted(userCredit)}</Text>
                </View>
                {/* <ScrollableTabView
          initialPage={0}
          renderTabBar={(props) => <DefaultTabBar {...props} />}> */}

                <TabBar selectedIndex={tab} onChangeIndex={(index: number) => setTab(index)} enableShadow>
                    {[t('Statistics'), t('Transfer Money'), t('Add Credit')].map((_tab, index) => (
                        <TabBar.Item
                            key={index}
                            selectedLabelStyle={{fontFamily: FONT, color: Colors.primary}}
                            labelStyle={{color: Colors.dark20}}
                            label={_tab}
                        />
                    ))}
                </TabBar>
                {tab === 0 && (
                    <View marginT-10 padding-10 paddingT-0>
                        <Card marginB-10>
                            <Title title={t('Current Credit')} border subText={Tools.getCurrecyFormatted(userCredit)} />

                            {transferLogs?.data?.rows.map(tl => (
                                <Transfer
                                    key={tl.id}
                                    type={tl.transferedFrom == userId ? 'in' : 'out'}
                                    datetime={tl.created_at}
                                    amount={Tools.getCurrecyFormatted(tl.amount)}
                                />
                            ))}
                        </Card>
                        <Card marginB-10>
                            <Title
                                title={t('Total Transferred')}
                                subText={Tools.getCurrecyFormatted(totalTransferdFrom?.data?.total)}
                            />
                        </Card>
                        <Card marginB-10>
                            <Title
                                title={t('Total Received')}
                                subText={Tools.getCurrecyFormatted(totalTransferdTo?.data?.total)}
                            />
                        </Card>
                        {/* <Card marginB-10>
              <Title title={t('Total Charged Credit')} subText="1,000TL" />
            </Card> */}
                    </View>
                )}
                {tab === 1 && (
                    <View marginT-10 padding-10 paddingT-0>
                        <Card paddingB-20>
                            <Title title={t('Money transfer')} border />
                            <View paddingH-20>
                                <PhoneField
                                    defaultCode={countryCode}
                                    title={t('Phone')}
                                    onChangeText={formikTransfer.handleChange('phone')}
                                    onChangeFormattedText={formikTransfer.handleChange('formatedPhone')}
                                    value={formikTransfer.values.phone}
                                />
                                <ErrorText formik={formikTransfer} name="phone" />
                                <TextField
                                    onChangeText={formikTransfer.handleChange('amount')}
                                    onBlur={formikTransfer.handleBlur('amount')}
                                    value={formikTransfer.values.amount}
                                    error={formikTransfer.errors.amount}
                                    rightIconSource={Assets.icons.dollar}
                                    title={t('Amount')}
                                />

                                {/* <View row spread centerV>
                  <View marginR-10 flex-2>
                    <TextField
                      onChangeText={formikTransfer.handleChange('code')}
                      onBlur={formikTransfer.handleBlur('code')}
                      value={formikTransfer.values.code}
                      error={formikTransfer.errors.code}
                      title={t('Confirmation Code')}
                    />
                  </View>
                  <View flex bottom>
                    <View
                      center
                      br20
                      padding-10
                      marginB-5
                      backgroundColor={Colors.secondary}>
                      <Text white>{code}</Text>
                    </View>
                  </View>
                </View> */}
                            </View>
                        </Card>
                        <Button
                            style={styles.button}
                            marginV-20
                            disabled={formikTransfer.isSubmitting || !formikTransfer.isValid}
                            onPress={formikTransfer.handleSubmit}
                            backgroundColor={Colors.secondary}>
                            <Text text3 bold white>
                                {formikTransfer.isSubmitting ? t('Loading') : t('Transfer Now')}
                            </Text>
                            <Image marginL-10 tintColor={Colors.white} source={Assets.icons.arrowRight} />
                        </Button>
                    </View>
                )}
                {tab === 2 && (
                    <View marginT-10 padding-10 paddingT-0>
                        {methods.data?.rows
                            ?.filter(item => ![4].includes(item.id))
                            .map(item => (
                                <Card marginB-10>
                                    <TitleRadio
                                        selected={formikAddCredit.values.paymentType === item.id}
                                        onPress={() => {
                                            formikAddCredit.setFieldValue('paymentType', item.id);
                                        }}
                                        title={item?.elment_trans[0]?.title}
                                        icon={getPaymentIcon(item.id)}
                                    />

                                    {item.id == 1 && formikAddCredit.values.paymentType === item.id && (
                                        <Animatable.View
                                            transition="height"
                                            easing="ease-in-out-circ"
                                            style={[
                                                styles.accordionCard,
                                                {height: 600}, // eslint-disable-line react-native/no-inline-styles
                                            ]}>
                                            <View paddingH-20>
                                                <CreditCardInput
                                                    requiresName
                                                    cardFontFamily={FONT}
                                                    labels={{
                                                        name: t("CARDHOLDER'S NAME"),
                                                        number: t('CARD NUMBER'),
                                                        expiry: t('EXPIRY'),
                                                        cvc: 'CVC/CCV',
                                                    }}
                                                    placeholders={{
                                                        name: t('Full Name'),
                                                    }}
                                                    onChange={e => {
                                                        if (e.valid) {
                                                            formikAddCredit.setFieldValue('cardName', e.values.name);
                                                            formikAddCredit.setFieldValue('cardNum', e.values.number);
                                                            formikAddCredit.setFieldValue('cvv', e.values.cvc);
                                                            formikAddCredit.setFieldValue(
                                                                'month',
                                                                e.values.expiry.split('/')[0],
                                                            );
                                                            formikAddCredit.setFieldValue(
                                                                'year',
                                                                e.values.expiry.split('/')[1],
                                                            );
                                                        }
                                                    }}
                                                />
                                                {/* <TextField
                            onChangeText={formikAddCredit.handleChange(
                              'cardName',
                            )}
                            onBlur={formikAddCredit.handleBlur('cardName')}
                            value={formikAddCredit.values.cardName}
                            error={formikAddCredit.errors.cardName}
                            title={t('Name On Card')}
                          />
                          <TextField
                            onChangeText={formikAddCredit.handleChange(
                              'cardNum',
                            )}
                            onBlur={formikAddCredit.handleBlur('cardNum')}
                            value={formikAddCredit.values.cardNum}
                            error={formikAddCredit.errors.cardNum}
                            title={t('Card No')}
                          />
                          <View row>
                            <View flex-2 marginR-10>
                              <TextField
                                onChangeText={formikAddCredit.handleChange(
                                  'month',
                                )}
                                onBlur={formikAddCredit.handleBlur('month')}
                                value={formikAddCredit.values.month}
                                error={formikAddCredit.errors.month}
                                title={t('Month')}
                              />
                            </View>
                            <View flex-2 marginR-10>
                              <TextField
                                onChangeText={formikAddCredit.handleChange(
                                  'year',
                                )}
                                onBlur={formikAddCredit.handleBlur('year')}
                                value={formikAddCredit.values.year}
                                error={formikAddCredit.errors.year}
                                title={t('Year')}
                              />
                            </View>
                            <View flex-1>
                              <TextField
                                onChangeText={formikAddCredit.handleChange(
                                  'cvv',
                                )}
                                onBlur={formikAddCredit.handleBlur('cvv')}
                                value={formikAddCredit.values.cvv}
                                error={formikAddCredit.errors.cvv}
                                title={t('CVV')}
                              />
                            </View>
                          </View> */}
                                                <View marginT-20 />
                                                <TextField
                                                    onChangeText={formikAddCredit.handleChange('amount')}
                                                    onBlur={formikAddCredit.handleBlur('amount')}
                                                    value={formikAddCredit.values.amount}
                                                    error={formikAddCredit.errors.amount}
                                                    rightIconSource={Assets.icons.dollar}
                                                    title={t('Amount')}
                                                />
                                            </View>
                                        </Animatable.View>
                                    )}
                                    {item.id == 2 && formikAddCredit.values.paymentType === item.id && (
                                        <Animatable.View
                                            transition="height"
                                            easing="ease-in-out-circ"
                                            style={[
                                                styles.accordionCard,
                                                {height: 200}, // eslint-disable-line react-native/no-inline-styles
                                            ]}>
                                            <View marginH-20 flex>
                                                <Text text80 marginB-20>
                                                    {item?.elment_trans[0]?.description}
                                                </Text>
                                                <Text text80 marginB-20>
                                                    {item?.elment_trans[0]?.instructions}
                                                </Text>
                                                <FileField
                                                    onPress={() => uploadImage('payment')}
                                                    title={t('Upload receipt')}
                                                />
                                            </View>
                                        </Animatable.View>
                                    )}
                                    {item.id == 3 && formikAddCredit.values.paymentType === item.id && (
                                        <Animatable.View
                                            transition="height"
                                            easing="ease-in-out-circ"
                                            style={[
                                                styles.accordionCard,
                                                {height: 200}, // eslint-disable-line react-native/no-inline-styles
                                            ]}>
                                            <View marginH-20 flex>
                                                <Text text80 marginB-20>
                                                    {item?.elment_trans[0]?.description}
                                                </Text>
                                                <Text text80 marginB-20>
                                                    {item?.elment_trans[0]?.instructions}
                                                </Text>
                                                <FileField
                                                    onPress={() => uploadImage('payment')}
                                                    title={t('Upload receipt')}
                                                />
                                            </View>
                                        </Animatable.View>
                                    )}
                                </Card>
                            ))}

                        <Button
                            style={styles.button}
                            marginV-20
                            disabled={formikAddCredit.isSubmitting || !formikAddCredit.isValid}
                            onPress={formikAddCredit.handleSubmit}
                            backgroundColor={Colors.secondary}>
                            <Text text90 bold white>
                                {formikAddCredit.isSubmitting ? t('Loading') : t('Transfer Now')}
                            </Text>
                            <Image marginL-10 tintColor={Colors.white} source={Assets.icons.arrowRight} />
                        </Button>
                    </View>
                )}

                {/* </ScrollableTabView> */}
            </KeyboardAwareScrollView>
        </View>
    );
};

Wallet.screenName = 'Kartonah.Screens.Wallet';

Wallet.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Wallet;
