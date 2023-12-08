import React, {useEffect} from 'react';
import {View, Colors, KeyboardAwareScrollView, Card, Text, LoaderScreen} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import SettingsButton from 'components/SettingsButton';
import {useNavigation} from 'react-native-navigation-hooks';
import CountryField from 'components/CountryField';
import PickerField from 'components/PickerField';
import TextField from 'components/TextField';
import PhoneField from 'components/PhoneField';
import {currencyPicker, languagePicker} from 'data/demos';

import {updateUser} from 'app-redux/actions/api';
import {updateUserReducer} from 'app-redux/actions/auth';
import * as Yup from 'yup';
import 'yup-phone';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {I18nManager, Linking} from 'react-native';
import RNRestart from 'react-native-restart';
import {toast} from 'utils/helper';
import ErrorText from 'components/ErrorText';
import {getCountryCodeById, getCountryIdByCode, getCountryNameById} from '../utils/countries';
import KartonahApi from 'kartonah-common/api';
import {usePush} from 'utils/hooks';

const Settings = () => {
    const {t} = useTranslation();
    const {showModal} = useNavigation();
    const push = usePush();
    const {auth} = useSelector(state => state);
    const countryCode = useSelector(state => state.general.countryCode);
    const dispatch = useDispatch();

    const afterUpdate = (values, userLang) => {
        dispatch(updateUserReducer(values));
        if (values.contactLang != userLang) {
            const isRtl = values.contactLang === 'AR';
            // change RTL
            I18nManager.allowRTL(isRtl);
            I18nManager.swapLeftAndRightInRTL(isRtl);
            I18nManager.forceRTL(isRtl);
            // Enable for mode RTL
            setTimeout(() => {
                RNRestart.Restart();
            }, 2000);
        } else {
            toast(t('Saved !'), 'success');
        }
    };

    const open = url => {
        // Intercom.displayMessenger();
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    };

    const formik = useFormik({
        initialValues: {
            id: auth.id,
            countryId: auth.countryId,
            preferredCurrency: auth.preferredCurrency,
            contactLang: auth.contactLang,
            firstName: auth.firstName,
            lastName: auth.lastName,
            // commercialTitle: auth.commercialTitle,
            phone: auth.phone,
            oldPhone: auth.phone,
        },
        validationSchema: Yup.object().shape({
            // phone: Yup.string().phone().required(),
            // countryId: Yup.string(),
            // preferredCurrency: Yup.string(),
            // contactLang: Yup.string(),
            // firstName: Yup.string(),
            // lastName: Yup.string(),
            // commercialTitle: Yup.string(),
            // phone: Yup.string(),
        }),
        onSubmit: values => {
            let userLang = auth.contactLang;

            if (auth?.id > 0) {
                dispatch(KartonahApi.updateUser(values)).then(({data, error}) => {
                    // console.log('res', res);
                    formik.setSubmitting(false);

                    if (error) {
                        formik.setFieldValue('phone', values.oldPhone);
                        toast(error?.message, 'error');
                    } else {
                        afterUpdate(values, userLang);
                        // const {rtl, language} = general;
                    }
                    // do sth with response
                });
            } else {
                afterUpdate(values, userLang);
            }
        },
    });

    const languages = {
        AR: 'Arabic',
        EN: 'English',
        TR: 'Turkey',
        DE: 'Deutsch',
        ar: 'Arabic',
        en: 'English',
        tr: 'Turkey',
        de: 'Deutsch',
    };

    return (
        <View flex backgroundColor={Colors.light}>
            <Header showBack white title={t('Settings')} />
            {formik.isSubmitting ? <LoaderScreen color={Colors.primary} overlay /> : null}
            <KeyboardAwareScrollView>
                <Text margin-10 marginB-0 bold>
                    {t('General Settings')}
                </Text>
                <Card margin-10 marginB-0>
                    {auth.token ? (
                        <SettingsButton
                            onPress={() =>
                                showModal(
                                    'Kartonah.Screens.EditSettings',
                                    {
                                        onSubmit: () => formik.handleSubmit(),
                                        input: (
                                            <CountryField
                                                title={t('Country')}
                                                countryCode={
                                                    getCountryCodeById(formik.values.countryId)
                                                        ? getCountryCodeById(formik.values.countryId)
                                                        : countryCode
                                                }
                                                onSelectCountry={e => {
                                                    formik.setFieldValue('countryId', getCountryIdByCode(e.cca2));
                                                }}
                                            />
                                        ),
                                    },
                                    {
                                        // modal: {
                                        //   backgroundColor: 'red',
                                        // },
                                        // modalPresentationStyle: {
                                        //   borderWidth: 1,
                                        //   borderColor: 'red',
                                        // },
                                        // layout: {backgroundColor: 'red'},
                                        // screenBackgroundColor: 'red',
                                    },
                                )
                            }
                            title={getCountryNameById(formik.values.countryId)}
                            subTitle={t('Country')}
                        />
                    ) : null}
                    <ErrorText formik={formik} name="countryId" />

                    {/* <SettingsButton
            onPress={() =>
              showModal('Kartonah.Screens.EditSettings', {
                onSubmit: () => formik.handleSubmit(),
                input: (
                  <PickerField
                    title={t('Currency')}
                    data={currencyPicker}
                    setSelected={(e) => {
                      formik.setFieldValue('preferredCurrency', e.value);
                    }}
                    value={currencyPicker.find(
                      (v) => v.value == formik.values.preferredCurrency,
                    )}
                  />
                ),
              })
            }
            title={formik.values.preferredCurrency}
            subTitle={t('Currency')}
          />
          <ErrorText formik={formik} name="preferredCurrency" margin-20 /> */}
                    <SettingsButton
                        onPress={() =>
                            showModal('Kartonah.Screens.EditSettings', {
                                onSubmit: () => formik.handleSubmit(),
                                input: (
                                    <PickerField
                                        title={t('App Language')}
                                        data={languagePicker}
                                        setSelected={e => {
                                            // const {rtl, language} = general;

                                            // if (e.value !== language) {
                                            //   const isRtl = e.value === 'ar';

                                            //   // change RTL
                                            //   I18nManager.forceRTL(isRtl);
                                            //   dispatch(setLanuage(e.value, isRtl));

                                            //   // Enable for mode RTL
                                            //   setTimeout(() => {
                                            //     RNRestart.Restart();
                                            //   }, 2000);
                                            // }
                                            formik.setFieldValue('contactLang', e.value);
                                        }}
                                        value={languagePicker.find(v => v.value == formik.values.contactLang)}
                                    />
                                ),
                            })
                        }
                        title={languages[formik.values.contactLang]}
                        subTitle={t('App Language')}
                        last
                    />
                    <ErrorText formik={formik} name="contactLang" margin-20 />
                </Card>
                {auth.token ? (
                    <>
                        <Text margin-10 marginB-0 bold>
                            {t('User Settings')}
                        </Text>
                        <Card margin-10 marginB-0>
                            <SettingsButton
                                onPress={() =>
                                    showModal('Kartonah.Screens.EditSettings', {
                                        onSubmit: () => formik.handleSubmit(),
                                        input: (
                                            <TextField
                                                onChangeText={formik.handleChange('firstName')}
                                                onBlur={formik.handleBlur('firstName')}
                                                value={formik.values.firstName}
                                                error={formik.errors.firstName}
                                                title={t('First Name')}
                                            />
                                        ),
                                    })
                                }
                                title={formik.values.firstName}
                                subTitle={t('First Name')}
                            />
                            <ErrorText formik={formik} name="firstName" margin-20 />

                            <SettingsButton
                                onPress={() =>
                                    showModal('Kartonah.Screens.EditSettings', {
                                        onSubmit: () => formik.handleSubmit(),
                                        input: (
                                            <TextField
                                                onChangeText={formik.handleChange('lastName')}
                                                onBlur={formik.handleBlur('lastName')}
                                                value={formik.values.lastName}
                                                error={formik.errors.lastName}
                                                title={t('Last Name')}
                                            />
                                        ),
                                    })
                                }
                                title={formik.values.lastName}
                                subTitle={t('Last Name')}
                            />
                            <ErrorText formik={formik} name="lastName" margin-20 />

                            {/* <SettingsButton
                onPress={() =>
                  showModal('Kartonah.Screens.EditSettings', {
                    onSubmit: () => formik.handleSubmit(),
                    input: (
                      <TextField
                        onChangeText={formik.handleChange('commercialTitle')}
                        onBlur={formik.handleBlur('commercialTitle')}
                        value={formik.values.commercialTitle}
                        error={formik.errors.commercialTitle}
                        title={t('Company Name')}
                      />
                    ),
                  })
                }
                title={formik.values.commercialTitle}
                subTitle={t('Company Name')}
              />
              <ErrorText formik={formik} name="commercialTitle" margin-20 /> */}
                            <SettingsButton
                                onPress={() =>
                                    showModal('Kartonah.Screens.EditSettings', {
                                        onSubmit: () => formik.handleSubmit(),
                                        input: (
                                            // phoneUtil.parse(formik.values.phone).values_[1]
                                            <PhoneField
                                                defaultCode={getCountryCodeById(formik.values.countryId)}
                                                onChangeFormattedText={formik.handleChange('phone')}
                                                value={formik.values.phone}
                                                title={t('Phone Number')}
                                            />
                                        ),
                                    })
                                }
                                title={formik.values.phone}
                                subTitle={t('Phone Number')}
                            />
                            <ErrorText formik={formik} name="phone" margin-20 />
                        </Card>
                    </>
                ) : null}

                <Text margin-10 marginB-0 bold>
                    {t('Other Settings')}
                </Text>
                <Card margin-10>
                    <SettingsButton
                        onPress={() => open('https://kartonah.com/Kartonah-About-us.pdf')}
                        title={t('About Us')}
                    />
                    <SettingsButton
                        onPress={() => open('https://kartonah.com/Kartonah-Return-Policy.pdf')}
                        title={t('Delivery And Return')}
                    />
                    <SettingsButton
                        onPress={() => open('https://kartonah.com/Kartonah-Privacy-Policy.pdf')}
                        title={t('Privacy Policy')}
                    />

                    <SettingsButton
                        onPress={() => push('Kartonah.Screens.Terms')}
                        title={t('Terms & Conditions')}
                        last
                    />
                    <SettingsButton
                        onPress={() => push('Kartonah.Screens.DistanceTerms')}
                        title={t('Distance selling managment')}
                    />
                </Card>
            </KeyboardAwareScrollView>
        </View>
    );
};

Settings.screenName = 'Kartonah.Screens.Settings';

Settings.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Settings;
