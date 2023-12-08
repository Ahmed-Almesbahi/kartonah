import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView, View, Text, Button, Colors} from 'react-native-ui-lib';
import Header from 'components/Header';
import CountryField from 'components/CountryField';
import TextField from 'components/TextField';
import PhoneField from 'components/PhoneField';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {createAddress, CREATE_ADDRESS, fetchAddresses, fetchCities, updateAddress} from 'app-redux/actions/api';
import {useMutation} from '@redux-requests/react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {toast} from 'utils/helper';
import {useDispatch, useSelector} from 'react-redux';
import PickerField from 'components/PickerField';
import {DefaultCountry} from '../utils/constants';
import {getCountryIdByCode} from 'utils/countries';
import Toast from 'react-native-toast-message';
import {useNavigation} from 'react-native-navigation-hooks';
import ErrorText from 'components/ErrorText';
import {actions} from 'app-redux/reducers/cart';

const NewAddress = ({edit, item}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {dismissModal} = useNavigation();
    const [cities, setCities] = useState([]);
    const userId = useSelector(state => state.auth.id);
    const countryCode = useSelector(state => state.general.countryCode);

    useEffect(() => {
        dispatch(fetchCities(countryCode)).then(({data}) => {
            setCities(data.rows);
        });
    }, []);

    const formik = useFormik({
        initialValues: edit
            ? {...item}
            : {
                  firstName: '',
                  lastName: '',
                  countryCode: countryCode,
                  cityId: '',
                  receiverMobile: 0,
                  receiverMobile2: 0,
                  adrs: '',
                  street: '',
                  apartment: '',
                  userId,
              },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().required(t('Please enter first name')),
            lastName: Yup.string().required(t('Please enter last name')),
            countryCode: Yup.string().required(t('Please select country')),
            cityId: Yup.string().required(t('Please select city')),
            receiverMobile: Yup.number().required(t('Please enter your phone')),
            receiverMobile2: Yup.number().required(t('Please enter your secondary phone')),
            // adrs: Yup.string().required(t('Please enter your address')),
            street: Yup.string(),
            apartment: Yup.string(),
        }),
        onSubmit: async values => {
            let excuteFun = edit ? updateAddress(values) : createAddress(values);
            dispatch(excuteFun).then(({data}) => {
                formik.setSubmitting(false);
                if (data.error) {
                    toast(data.msg, 'erorr');
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
                    <TextField
                        onChangeText={formik.handleChange('firstName')}
                        onBlur={formik.handleBlur('firstName')}
                        value={formik.values.firstName}
                        error={formik.errors.firstName}
                        title={t('First Name')}
                        supportRTL
                    />
                    <TextField
                        onChangeText={formik.handleChange('lastName')}
                        onBlur={formik.handleBlur('lastName')}
                        value={formik.values.lastName}
                        error={formik.errors.lastName}
                        title={t('Last Name')}
                    />
                    <CountryField
                        title={t('Country')}
                        countryCode={formik.values.countryCode}
                        onSelectCountry={e => {
                            // formik.setFieldValue('countryId', getCountryIdByCode(e.cca2));
                            formik.setFieldValue('countryCode', e.cca2);
                            dispatch(fetchCities(e.cca2)).then(({data}) => {
                                setCities(data.rows);
                            });
                        }}
                    />
                    <ErrorText formik={formik} name="countryCode" />
                    <PickerField
                        title={t('City')}
                        data={cities.map(city => ({value: city.id, label: city.titleEN}))}
                        setSelected={e => {
                            //value or label
                            formik.setFieldValue('cityId', e.value);
                        }}
                    />
                    <ErrorText formik={formik} name="cityId" />

                    <PhoneField
                        defaultCode={countryCode}
                        onChangeText={formik.handleChange('receiverMobile')}
                        value={formik.values.receiverMobile}
                        title={t('Phone Number 1')}
                    />
                    <ErrorText formik={formik} name="receiverMobile" />
                    <PhoneField
                        defaultCode={countryCode}
                        onChangeText={formik.handleChange('receiverMobile2')}
                        value={formik.values.receiverMobile2}
                        title={t('Phone Number 2')}
                    />
                    <ErrorText formik={formik} name="receiverMobile2" />
                    <TextField
                        onChangeText={formik.handleChange('adrs')}
                        onBlur={formik.handleBlur('adrs')}
                        value={formik.values.adrs}
                        error={formik.errors.adrs}
                        title={t('Address')}
                    />
                    <TextField
                        onChangeText={formik.handleChange('street')}
                        onBlur={formik.handleBlur('street')}
                        value={formik.values.street}
                        error={formik.errors.street}
                        title={t('Street address')}
                    />
                    <TextField
                        onChangeText={formik.handleChange('apartment')}
                        onBlur={formik.handleBlur('apartment')}
                        value={formik.values.apartment}
                        error={formik.errors.apartment}
                        title={t('Apartment no.')}
                    />
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
