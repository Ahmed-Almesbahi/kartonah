import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView, View, Text, Colors} from 'react-native-ui-lib';
import Header from 'components/Header';
import CountryField from 'components/CountryField';
import TextField from 'components/TextField';
import PhoneField from 'components/PhoneField';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {createAddress, fetchCities, updateAddress} from 'app-redux/actions/api';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {toast} from 'utils/helper';
import {useDispatch, useSelector} from 'react-redux';
import PickerField from 'components/PickerField';
import {useNavigation} from 'react-native-navigation-hooks';
import ErrorText from 'components/ErrorText';
import Button from 'components/Button';
import {actions} from 'app-redux/reducers/cart';
import {getCountryIdByCode} from 'utils/countries';

const NewAddress = ({edit, item}) => {
    //contact name
    //phone no
    // street address
    // appartment/Unit
    //Country/Region
    // state/Province
    // city  -> zip code
    // Address sort

    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {dismissModal} = useNavigation();
    const [states, setStates] = useState([]);
    // const userId = useSelector(state => state.auth.id);
    const countryCode = useSelector(state => state.general.countryCode);

    useEffect(() => {
        dispatch(fetchCities(edit ? item.countryCode : countryCode)).then(({data, error}) => {
            if (error) {
                toast(error.message, 'error');
            } else {
                setStates(data.rows);
            }
        });
    }, []);

    const formik = useFormik({
        initialValues: edit
            ? {...item, countryId: getCountryIdByCode(item.countryCode)}
            : {
                  adrs: 'none',
                  firstName: '',
                  lastName: '',
                  receiverMobile: 0,
                  countryCode: countryCode,
                  countryId: getCountryIdByCode(countryCode),
                  stateId: states,
                  postalCode: '',
                  cityId: '',
                  road: '',
                  apartment: '',
                  receiverMobile2: 0, // unused
                  // userId,
              },
        validationSchema: Yup.object().shape({
            // adrs: Yup.string().required(t('Please enter title')),
            firstName: Yup.string().required(t('Please enter first name')),
            lastName: Yup.string().required(t('Please enter last name')),
            receiverMobile: Yup.number().required(t('Please enter your phone')),
            countryCode: Yup.string().required(t('Please select country')),
            cityId: Yup.string().required(t('Please select state')),
            postalCode: Yup.string().required(t('Please enter postal code')),
            region: Yup.string().required(t('Please enter city')),
            road: Yup.string().required(t('Please enter street')),
            apartment: Yup.string().required(t('Please enter apartment')),
            // receiverMobile2: Yup.number().required(
            //   t('Please enter your secondary phone'),
            // ),
            // adrs: Yup.string().required(t('Please enter your address')),
        }),
        onSubmit: async values => {
            let excuteFun = edit ? updateAddress(values) : createAddress(values);
            dispatch(excuteFun).then(({data, error}) => {
                formik.setSubmitting(false);
                if (error) {
                    toast(error.message, 'error');
                } else {
                    actions.selectShippingMethod(dispatch, 'shipmentAdrsId', data.rowId);
                    toast(data.msg, 'success');
                    dismissModal();
                }
                // do sth with response
            });
        },
    });

    let saveTxt = edit ? t('Update Address') : t('Add New Address');

    return (
        <View flex bg-white>
            <Header showCloseModal title={saveTxt} />
            <KeyboardAwareScrollView bounces={false}>
                <View padding-20>
                    {/* <TextField
            onChangeText={formik.handleChange('adrs')}
            onBlur={formik.handleBlur('adrs')}
            value={formik.values.adrs}
            error={formik.errors.adrs}
            title={t('Title')}
          /> */}
                    <TextField
                        onChangeText={formik.handleChange('firstName')}
                        onBlur={formik.handleBlur('firstName')}
                        value={formik.values.firstName}
                        error={formik.errors.firstName}
                        title={t('First name')}
                    />
                    <TextField
                        onChangeText={formik.handleChange('lastName')}
                        onBlur={formik.handleBlur('lastName')}
                        value={formik.values.lastName}
                        error={formik.errors.lastName}
                        title={t('Last name')}
                    />
                    <PhoneField
                        defaultCode={countryCode}
                        onChangeFormattedText={formik.handleChange('receiverMobile')}
                        value={formik.values.receiverMobile}
                        title={t('Phone no.')}
                    />
                    <ErrorText formik={formik} name="receiverMobile" />

                    <CountryField
                        title={t('Country/Region')}
                        countryCode={formik.values.countryCode}
                        onSelectCountry={e => {
                            // formik.setFieldValue('countryId', getCountryIdByCode(e.cca2));
                            formik.setFieldValue('countryCode', e.cca2);
                            formik.setFieldValue('countryId', getCountryIdByCode(e.cca2));
                            dispatch(fetchCities(e.cca2)).then(({data, error}) => {
                                if (error) {
                                    toast(error?.message, 'error');
                                } else {
                                    setStates(data.rows);
                                }
                            });
                        }}
                    />
                    <ErrorText formik={formik} name="countryCode" />

                    <View row>
                        <View flex-2>
                            <PickerField
                                title={t('State/Province')}
                                data={states?.map(city => ({
                                    value: city.id,
                                    label: city.titleEN,
                                }))}
                                // value={states.
                                //     ?.filter((v) => c.id == formik.values.cityId)
                                //     ?.map((v) => ({
                                //       value: v.id,
                                //       label: v.titleEN,
                                //     }))[0]
                                // }

                                value={
                                    states
                                        ?.filter(v => v.id == formik.values.cityId)
                                        ?.map(v => ({
                                            value: v.id,
                                            label: v.titleEN,
                                        }))[0]
                                }
                                setSelected={e => {
                                    //value or label
                                    formik.setFieldValue('cityId', e.value);
                                }}
                            />
                        </View>
                        <View flex marginL-10>
                            <TextField
                                onChangeText={formik.handleChange('postalCode')}
                                onBlur={formik.handleBlur('postalCode')}
                                value={formik.values.postalCode}
                                error={formik.errors.postalCode}
                                title={t('Zip Code')}
                            />
                        </View>
                    </View>

                    <TextField
                        onChangeText={formik.handleChange('region')}
                        onBlur={formik.handleBlur('region')}
                        value={formik.values.region}
                        error={formik.errors.region}
                        title={t('City')}
                    />

                    <TextField
                        onChangeText={formik.handleChange('road')}
                        onBlur={formik.handleBlur('road')}
                        value={formik.values.road}
                        error={formik.errors.road}
                        title={t('Street address')}
                    />
                    <TextField
                        onChangeText={formik.handleChange('apartment')}
                        onBlur={formik.handleBlur('apartment')}
                        value={formik.values.apartment}
                        error={formik.errors.apartment}
                        title={t('Apartment/Unit')}
                    />

                    {/* <PickerField
            title={t('Address Sort')}
            data={[
              {
                value: 0,
                label: 'Factory',
              },
            ]}
            setSelected={(e) => {
              //value or label
              formik.setFieldValue('cityId', e.value);
            }}
          /> */}

                    <Button
                        marginV-20
                        style={styles.button}
                        disabled={formik.isSubmitting || !formik.isValid}
                        onPress={formik.handleSubmit}
                        backgroundColor={Colors.secondary}>
                        <Text text80 white>
                            {formik.isSubmitting ? t('Loading') : saveTxt}
                        </Text>
                    </Button>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

NewAddress.screenName = 'Kartonah.Screens.NewAddress';

NewAddress.options = {
    bottomTabs: {
        visible: false,
    },
};

export default NewAddress;
