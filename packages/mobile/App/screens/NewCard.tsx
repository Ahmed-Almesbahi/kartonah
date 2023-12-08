import React, {useEffect, useRef, useState} from 'react';
import {KeyboardAwareScrollView, View, Text, Button, Colors, Checkbox} from 'react-native-ui-lib';
import Header from 'components/Header';
import TextField from 'components/TextField';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {createCard, updateCard} from 'app-redux/actions/api';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from 'react-native-navigation-hooks';
import {toast} from 'utils/helper';
import {CreditCardInput} from '../lib/react-native-credit-card-input';
import {FONT} from 'utils/constants';
import {actions} from 'app-redux/reducers/cart';
import analytics from '@react-native-firebase/analytics';

const NewCard = ({checkout, onSubmit, edit, item}) => {
    const {t} = useTranslation();
    const [later, setLater] = useState(false);
    const [errors, setErrors] = useState({
        cvc: 'valid',
        expiry: 'valid',
        name: 'valid',
        number: 'valid',
    });
    const cardRef = useRef();
    const dispatch = useDispatch();
    const {dismissModal} = useNavigation();
    const userId = useSelector(state => state.auth.id);
    useEffect(() => {
        if (edit && cardRef.current) {
            cardRef.current.setValues({
                name: formik.values.cardName,
                number: formik.values.cardNumber,
                cvc: formik.values.cvv,
                expiry: formik.values.month + '/' + formik.values.year,
            });
        }
    }, []);

    const formik = useFormik({
        initialValues: edit
            ? {...item}
            : {
                  userId,
                  // title: '',
                  cardName: '',
                  cardExpire: '',
                  month: '',
                  year: '',
                  cardNumber: '',
                  cvv: '',
              },
        validationSchema: Yup.object().shape({
            // title: Yup.string().required(),
            cardName: Yup.string().required(),
            cardNumber: Yup.number().required(),
            cardExpire: Yup.string().required(),
            // month: Yup.string().length(2).required(),
            // year: Yup.string().length(2).required(),
            cvv: Yup.string().length(3).required(),
        }),

        onSubmit: values => {
            // analytics().logAddPaymentInfo({
            //   coupon: undefined | string;
            //   currency: undefined | string;
            //   items
            //   payment_type
            //   value
            // });

            let excuteFun = edit ? updateCard(values) : createCard(values);
            // values.cardExpire = values.month + values.year;
            if (checkout && later == false) {
                onSubmit(values);
                actions.setCard(dispatch, 0);
                dismissModal();
            } else {
                dispatch(excuteFun).then(res => {
                    formik.setSubmitting(false);
                    if (res.error) {
                        toast(res.error.message, 'error');
                    } else {
                        // actions.setCard(dispatch, 0);
                        dismissModal();
                    }
                    // do sth with response
                });
            }
        },
    });

    console.log('values', formik.errors);

    let saveTxt = edit ? t('Update Card') : t('Add New Card');

    return (
        <View bg-white flex>
            <Header showCloseModal title={saveTxt} />
            <KeyboardAwareScrollView bounces={false}>
                <View padding-20>
                    {/* <TextField
            onChangeText={formik.handleChange('title')}
            onBlur={formik.handleBlur('title')}
            value={formik.values.title}
            error={formik.errors.title}
            title={t('Title')}
          /> */}
                    <CreditCardInput
                        requiresName
                        allowScroll
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
                        ref={cardRef}
                        onChange={e => {
                            setErrors(e.status);
                            // if (e.status.name === 'valid') {
                            //   formik.setFieldValue('cardName', e.values.name);
                            // }

                            // console.log('e', e);
                            if (e.valid) {
                                formik.setFieldValue('cardName', e.values.name);
                                formik.setFieldValue('cardNumber', e.values.number.replace(/ /g, ''));
                                formik.setFieldValue('cvv', e.values.cvc);
                                formik.setFieldValue('cardExpire', e.values.expiry);
                                // formik.setFieldValue('month', e.values.expiry.split('/')[0]);
                                // formik.setFieldValue('year', e.values.expiry.split('/')[1]);
                            }
                        }}
                    />
                    {errors.name == 'invalid' && (
                        <Text text80 red10>
                            {t('name is not correct')}
                        </Text>
                    )}
                    {errors.number == 'invalid' && (
                        <Text text80 red10>
                            {t('number is not correct')}
                        </Text>
                    )}

                    {errors.expiry == 'invalid' && (
                        <Text text80 red10>
                            {t('expiry is not correct')}
                        </Text>
                    )}
                    {errors.cvc == 'invalid' && (
                        <Text text80 red10>
                            {t('cvv is not correct')}
                        </Text>
                    )}

                    {/* <TextField
            onChangeText={formik.handleChange('cardName')}
            onBlur={formik.handleBlur('cardName')}
            value={formik.values.cardName}
            error={formik.errors.cardName}
            title={t('Name on card')}
          />
          <TextField
            onChangeText={formik.handleChange('cardNumber')}
            onBlur={formik.handleBlur('cardNumber')}
            value={formik.values.cardNumber}
            error={formik.errors.cardNumber}
            title={t('Card No.')}
          />
          <View row>
            <View flex marginR-10>
              <TextField
                onChangeText={formik.handleChange('month')}
                onBlur={formik.handleBlur('month')}
                value={formik.values.month}
                // error={formik.errors.month}
                title={t('Month')}
              />
            </View>
            <View flex marginR-10>
              <TextField
                onChangeText={formik.handleChange('year')}
                onBlur={formik.handleBlur('year')}
                value={formik.values.year}
                // error={formik.errors.year}
                title={t('Year')}
              />
            </View>
            <View flex-1>
              <TextField
                onChangeText={formik.handleChange('cvv')}
                onBlur={formik.handleBlur('cvv')}
                value={formik.values.cvv}
                // error={formik.errors.cvv}
                title={t('CVV')}
              />
            </View>
          </View> */}
                    {/* <ErrorText formik={formik} name="month" />
          <ErrorText formik={formik} name="year" />
          <ErrorText formik={formik} name="cvv" /> */}
                    {checkout === true && (
                        <View marginT-10 row>
                            <Checkbox
                                iconColor={Colors.secondary}
                                onValueChange={value => {
                                    setLater(value);
                                }}
                                value={later}
                            />
                            <Text text80 marginL-10 marginR-5 marginT-3 textMuted>
                                {t('Save card for later')}
                            </Text>
                        </View>
                    )}
                    <Button
                        // disabled={formik.isSubmitting || !formik.isValid}
                        disabled={formik.isSubmitting}
                        onPress={formik.handleSubmit}
                        marginV-20
                        style={styles.button}
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

NewCard.screenName = 'Kartonah.Screens.NewCard';

NewCard.options = {
    bottomTabs: {
        visible: false,
    },
};

export default NewCard;
