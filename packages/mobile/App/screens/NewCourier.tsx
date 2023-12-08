import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView, View, Text, Button, Colors, Checkbox} from 'react-native-ui-lib';
import Header from 'components/Header';
import CountryField from 'components/CountryField';
import TextField from 'components/TextField';
import PickerField from 'components/PickerField';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {createCourier, updateCourier, fetchCargos} from 'app-redux/actions/api';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from 'react-native-navigation-hooks';
// import {DefaultCountry, ShippingMethods} from 'utils/constants';
import {toast} from 'utils/helper';
import ErrorText from 'components/ErrorText';
import {getCountryIdByCode} from 'utils/countries';
import {actions} from 'app-redux/reducers/cart';
const NewCourier = ({edit, item}) => {
    const {t} = useTranslation();
    const [notHaveCode, setNotHaveCode] = useState(false);
    const [cargos, setCargos] = useState([]);
    const dispatch = useDispatch();
    const {dismissModal} = useNavigation();
    const countryCode = useSelector(state => state.general.countryCode);
    const userId = useSelector(state => state.auth.id);

    useEffect(() => {
        dispatch(fetchCargos(getCountryIdByCode(countryCode))).then(({data, error}) => {
            if (error) {
                toast(error?.message, 'error');
            } else {
                setCargos(data.rows);
            }
        });
    }, []);

    const formik = useFormik({
        initialValues: edit
            ? {...item, userId}
            : {
                  userId,
                  countryCode: countryCode,
                  cargoId: '',
                  title: '',
                  shippingMethod: '2',
                  code: '',
                  name: '',
                  phone: '',
              },
        validationSchema: Yup.object().shape({
            countryCode: Yup.string().required(),
            cargoId: Yup.string().required(),
            shippingMethod: Yup.string().required(),

            code: Yup.string(),
            // name: Yup.string().required(),
            // phone: Yup.number().required(),
        }),
        onSubmit: values => {
            values.code = values.code == '' ? '0' : values.code;
            let excuteFun = edit ? updateCourier(values) : createCourier(values);
            dispatch(excuteFun).then(({data, error}) => {
                formik.setSubmitting(false);
                if (data.errors || error) {
                    toast(data?.message ? data.message : error?.message, 'error');
                } else {
                    actions.selectShippingMethod(dispatch, 'courierId', data.rowId);
                    toast(data.msg, 'success');
                    dismissModal();
                }
                // do sth with response
            });
        },
    });

    let saveTxt = edit ? t('Update Courier') : t('Add new Courier');
    const ShippingMethods = [
        {value: '1', label: t('Air freight')},
        {value: '2', label: t('Sea freight')},
        {value: '3', label: t('Land freight')},
    ];

    return (
        <View bg-white flex>
            <Header showCloseModal title={saveTxt} />
            <KeyboardAwareScrollView bounces={false}>
                <View padding-20>
                    <Text marginB-10 text2 bold>
                        {t('Courier Company')}
                    </Text>
                    <CountryField
                        title={t('Country')}
                        countryCode={formik.values.countryCode}
                        onSelectCountry={e => {
                            formik.setFieldValue('countryCode', e.cca2);
                            dispatch(fetchCargos(getCountryIdByCode(e.cca2))).then(({data, error}) => {
                                if (error) {
                                    toast(error?.message, 'error');
                                } else {
                                    setCargos(data.rows);
                                }
                            });
                        }}
                    />
                    <PickerField
                        // value={{value: 1}}
                        title={t('Shipping Company')}
                        data={cargos
                            .map(cargo => ({
                                value: cargo.id,
                                label: cargo.full_name,
                            }))
                            .concat([{value: '0', label: t('Other')}])}
                        // data={shippingCompaniesPicker}
                        setSelected={e => {
                            // console.log('selected shipping company', e);
                            //value or label
                            formik.setFieldValue('cargoId', e.value);
                        }}
                    />
                    <ErrorText formik={formik} name="cargoId" />

                    {formik.values.cargoId == '0' && (
                        <TextField
                            onChangeText={formik.handleChange('title')}
                            onBlur={formik.handleBlur('title')}
                            value={formik.values.title}
                            error={formik.errors.title}
                            title={t('Other Shipping Company')}
                        />
                    )}
                    <PickerField
                        value={ShippingMethods.find(v => v.value == formik.values.shippingMethod)}
                        title={t('Shipping Method')}
                        data={ShippingMethods}
                        // data={shippingCompaniesPicker}
                        setSelected={e => {
                            // console.log('selected shipping company', e);
                            //value or label
                            formik.setFieldValue('shippingMethod', e.value);
                        }}
                    />
                    <ErrorText formik={formik} name="shippingMethod" />

                    {/* <View row> */}
                    <Checkbox
                        value={notHaveCode}
                        label={t('I do not have code')}
                        // color={Colors.green20}
                        onValueChange={value6 => setNotHaveCode(value6)}
                        containerStyle={{marginTop: 10, marginBottom: 10}}
                    />
                    {/* </View> */}
                    {notHaveCode == false && (
                        <TextField
                            onChangeText={formik.handleChange('code')}
                            onBlur={formik.handleBlur('code')}
                            value={formik.values.code}
                            error={formik.errors.code}
                            title={t('Shipping Code')}
                        />
                    )}
                    <View marginV-20 style={styles.fancySeparator} backgroundColor={Colors.light} />
                    {/* <Text marginB-10 text2 bold>
            {t('Contact Person')}
          </Text>
          <TextField
            onChangeText={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
            value={formik.values.name}
            title={t('Name')}
          />
          <PhoneField
            onChangeText={formik.handleChange('phone')}
            value={formik.values.phone}
            title={t('Phone Number')}
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

NewCourier.screenName = 'Kartonah.Screens.NewCourier';

NewCourier.options = {
    bottomTabs: {
        visible: false,
    },
};

export default NewCourier;
