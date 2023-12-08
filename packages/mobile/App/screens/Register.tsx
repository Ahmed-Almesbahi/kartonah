import React from 'react';
import {KeyboardAwareScrollView, View, Text, Button, Assets, Colors} from 'react-native-ui-lib';
import Header from 'components/Header';
import TextField from 'components/TextField';
import CountryField from 'components/CountryField';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {useNavigation} from 'react-native-navigation-hooks';
import * as Yup from 'yup';
import {useFormik} from 'formik';
// import {postRegister, POST_REGISTER} from 'app-redux/actions/api';
import {main} from 'navigation/appRoots';
import {updateUser} from 'app-redux/actions/api';
import {useDispatch, useSelector} from 'react-redux';
import {storeLogin, updateUserReducer} from 'app-redux/actions/auth';
import {toast} from 'utils/helper';
import {getCountryIdByCode} from 'utils/countries';
import PhoneField from 'components/PhoneField';
import ErrorText from 'components/ErrorText';
import KartonahApi from 'kartonah-common/api';

const Register = ({page}) => {
    const {pop} = useNavigation();
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {showOverlay} = useNavigation();
    const {auth} = useSelector(state => state);
    const countryCode = useSelector(state => state.general.countryCode);
    console.log('page', page);

    const formik = useFormik({
        initialValues: {
            ...auth,
            // firstName: null,
            // lastName: null,
            // commercialTitle: null,
            // countryId: null,
            countryId: getCountryIdByCode(countryCode),
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().required(t('first name is a required field')),
            lastName: Yup.string().required(t('last name is a required field')),
            // commercialTitle: Yup.string(),
            countryId: Yup.number().required(),
        }),
        onSubmit: async values => {
            const phoneSchema = Yup.string().phone().required();
            const isValid = await phoneSchema.isValid(values.phone);
            if (isValid) {
                dispatch(KartonahApi.updateUser({...values, firstLogin: false})).then(({data, error}) => {
                    formik.setSubmitting(false);
                    if (data?.success == false || error) {
                        toast(data?.msg ? data.msg : error?.message, 'error');
                    } else {
                        dispatch(updateUserReducer(values));
                        showOverlay('Kartonah.Overlay.Alert', {
                            icon: Assets.icons.featherCheck,
                            message: t('You Registered Successfully'),
                            buttonLabel: t('Continue'),
                            onPress: () => {
                                if (page == 'cart') {
                                    pop();
                                } else {
                                    main();
                                }
                            },
                        });
                    }
                });
            } else {
                formik.setSubmitting(false);
                formik.setFieldError('phone', t('Phone number is not valid.'));
            }
            // if (values?.phone?.length < 6) {
            //   values.phone = null;
            // }
        },
    });

    return (
        <View flex bg-white>
            <Header title={' '} />
            <View flex>
                <KeyboardAwareScrollView bounces={false}>
                    <View padding-20>
                        <Text marginB-10 secondary hBigBold>
                            {t('Personal info')}
                        </Text>
                        <Text text80 color={Colors.dark40}>
                            {t('please confirm your name and')}
                        </Text>
                        <Text text80 color={Colors.dark40} marginB-20>
                            {t('where are you from to start using app')}
                        </Text>
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

                        {(auth.phone == '' || auth.phone == undefined || auth.phone == null) && (
                            <>
                                <PhoneField
                                    defaultCode={countryCode}
                                    // onChangeText={formik.handleChange('phone')}
                                    onChangeFormattedText={formik.handleChange('phone')}
                                    value={formik.values.phone}
                                    title={t('Phone no.')}
                                />
                                <ErrorText formik={formik} name="phone" />
                            </>
                        )}

                        <CountryField
                            title={t('Country')}
                            countryCode={countryCode}
                            onSelectCountry={e => {
                                // formik.handleChange('company', e.name);
                                formik.setFieldValue('countryId', getCountryIdByCode(e.cca2));
                                // console.log('selected', e);
                            }}
                        />
                    </View>
                </KeyboardAwareScrollView>
            </View>
            <View useSafeArea marginB-40>
                <Button
                    marginT-10
                    marginH-20
                    disabled={formik.isSubmitting || !formik.isValid}
                    onPress={() => {
                        formik.handleSubmit();
                    }}
                    backgroundColor={Colors.secondary}
                    style={styles.button}>
                    <Text text80 btnText white>
                        {formik.isSubmitting ? t('Loading') : t('Register')}
                    </Text>
                </Button>
            </View>
        </View>
    );
};

Register.screenName = 'Kartonah.Screens.Register';

export default Register;
