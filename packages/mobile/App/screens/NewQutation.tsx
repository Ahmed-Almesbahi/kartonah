import React, {useState} from 'react';
import {
    TextField as TextField2,
    KeyboardAwareScrollView,
    View,
    Text,
    Button,
    Colors,
    Checkbox,
} from 'react-native-ui-lib';
import Header from 'components/Header';
import TextField from 'components/TextField';
import TextAreaField from 'components/TextAreaField';
import PickerField from 'components/PickerField';
import CountryField from 'components/CountryField';
import FileField from 'components/FileField';
import IncreamentField from 'components/IncreamentField';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {categoriesPicker, unitPicker, shippingCompaniesPicker} from 'data/demos';
import {
    createQutation,
    FETCH_PRODUCTS_CATEGORIES,
    FETCH_VENDORS,
    getProductsCategories,
    getVendors,
    uploadFile,
} from 'app-redux/actions/api';
import ImagePicker from 'react-native-image-crop-picker';
import {ReactNativeFile} from 'extract-files';

import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useNavigation} from 'react-native-navigation-hooks';
import {useSelector} from 'react-redux';
import {useDispatchRequest, useQuery} from '@redux-requests/react';
import {toast} from 'utils/helper';
import ErrorText from 'components/ErrorText';
const NewQutation = props => {
    const {t} = useTranslation();
    const dispatch = useDispatchRequest();
    const [filename, setFilename] = useState();
    const [_file, setFile] = useState();
    const {dismissModal, showOverlay, showModal, push} = useNavigation();
    const userId = useSelector(state => state.auth.id);
    const countryCode = useSelector(state => state.general.countryCode);

    const categories = useQuery({
        type: FETCH_PRODUCTS_CATEGORIES,
        action: getProductsCategories,
        autoLoad: true,
    });
    const vendors = useQuery({
        type: FETCH_VENDORS,
        action: getVendors,
        autoLoad: true,
    });

    const uploadImage = async (type = 'quotation') => {
        ImagePicker.openPicker({
            width: 200,
            height: 400,
            cropping: true,
        }).then(image => {
            // let uploadData = new FormData();
            // uploadData.append('files[]', {
            //   type: image.mime,
            //   uri: image.path,
            //   name: image.path.split('/').pop(),
            // });
            setFilename({name: image.path.split('/').pop()});
            const file = new ReactNativeFile({
                type: image.mime,
                uri: image.path,
                // name: image.path.split('/').pop(),
                name: image.path,
            });

            setFile(file);
        });
    };

    const formik = useFormik({
        initialValues: {
            // clientId: userId,
            vendorId: props?.vendorId ? props?.vendorId : 0,
            categoryId: props?.categoryId ? props.categoryId : '',
            title: '',
            quantity: 1,
            description: '',

            shipping_method: '',
            destinationCountryCode: countryCode,
            unit: '',
            estimatedDeliveryDate: 0,
            agree1: false,
            agree2: false,
        },
        validationSchema: Yup.object().shape({
            vendorId: Yup.number().moreThan(0, t('please select vendor')).required(t('please select vendor')),
            title: Yup.string().required(t('this is a required field')),
            categoryId: Yup.string().required(t('this is a required field')),
            quantity: Yup.number().moreThan(0).required(t('this is a required field')),
            description: Yup.string().required(t('this is a required field')),
            agree1: Yup.boolean().isTrue().required(t('this is a required field')),
            agree2: Yup.boolean().isTrue().required(t('this is a required field')),
        }),
        onSubmit: values => {
            values.estimatedDeliveryDate = values.estimatedDeliveryDate.toString();
            values.quantity = Number(values.quantity);
            dispatch(createQutation(values)).then(({data, error}) => {
                formik.setSubmitting(false);
                // console.log('x', x);
                if (error) {
                    toast(error?.message, 'error');
                } else {
                    dispatch(uploadFile(data?.row?.id, _file, 'quotation')).then(({data, error}) => {
                        if (error) {
                            toast(error?.message, 'error');
                        } else {
                            toast(t('Added successfully'), 'success');
                        }
                    });
                    dismissModal();
                }
                // do sth with response
            });
        },
    });

    return (
        <View flex bg-white>
            <Header showCloseModal title={t('Add New Qutation')} />
            <KeyboardAwareScrollView bounces={false}>
                <View padding-20>
                    <Text marginB-10 text2 bold>
                        {t('Product Basic Information')}
                    </Text>
                    <PickerField
                        title={t('Vendor')}
                        data={vendors.data?.rows?.map(c => ({
                            value: c.id,
                            label: c.brandName,
                        }))}
                        value={
                            vendors.data?.rows
                                ?.filter(v => v.id == formik.values.vendorId)
                                ?.map(v => ({
                                    value: v.id,
                                    label: v.brandName,
                                }))[0]
                        }
                        setSelected={(e: any) => {
                            formik.setFieldValue('vendorId', e.value);
                        }}
                        // value={{value: 2}}
                    />
                    <ErrorText formik={formik} name="vendorId" />
                    <PickerField
                        title={t('Category')}
                        data={categories.data?.rows?.map(c => ({
                            value: c.id,
                            label: c.elment_trans[0]?.title,
                        }))}
                        value={
                            categories.data?.rows
                                ?.filter(v => v.id == formik.values.categoryId)
                                ?.map(v => ({
                                    value: v.id,
                                    label: v.elment_trans[0]?.title,
                                }))[0]
                        }
                        setSelected={(e: any) => {
                            formik.setFieldValue('categoryId', e.value);
                        }}
                        // value={{value: 2}}
                    />
                    <ErrorText formik={formik} name="categoryId" />
                    <TextField
                        onChangeText={formik.handleChange('title')}
                        onBlur={formik.handleBlur('title')}
                        value={formik.values.title}
                        error={formik.errors.title}
                        title={t('What are you looking for?')}
                    />
                    <View row>
                        <View flex marginR-5>
                            <TextField
                                onChangeText={formik.handleChange('quantity')}
                                onBlur={formik.handleBlur('quantity')}
                                value={formik.values.quantity}
                                error={formik.errors.quantity}
                                title={t('Quantity')}
                            />
                        </View>
                        <View flex marginL-5>
                            <PickerField
                                styles={{height: 200}}
                                title={t('Unit')}
                                data={unitPicker}
                                setSelected={e => {
                                    formik.setFieldValue('unit', e.value);
                                }}
                                // value={{value: 2}}
                            />
                        </View>
                    </View>
                    <TextAreaField
                        onChangeText={formik.handleChange('description')}
                        onBlur={formik.handleBlur('description')}
                        value={formik.values.description}
                        title={t('Description')}
                    />
                    <FileField value={filename} onPress={() => uploadImage('quotation')} title={t('Upload image')} />
                    <View marginV-20 style={styles.fancySeparator} backgroundColor={Colors.light} />
                    <Text marginB-10 text2 bold>
                        {t('Shipping And Payment')}
                    </Text>
                    <PickerField
                        title={t('Shipping Method')}
                        data={shippingCompaniesPicker}
                        setSelected={(e: any) => {
                            formik.setFieldValue('shipping_method', e.value);
                        }}
                    />

                    <CountryField
                        title={t('Destination')}
                        countryCode={formik.values.destinationCountryCode}
                        onSelectCountry={e => {
                            formik.setFieldValue('destinationCountryCode', e.cca2);
                        }}
                    />

                    <Text style={[styles.textFieldTitle, styles.inputLabel]}>{t('Lead Time')}</Text>
                    <View row centerV>
                        <View row flex-1>
                            <Button
                                avoidMinWidth
                                style={[styles.button, {paddingTop: 8, paddingBottom: 8}]}
                                backgroundColor={Colors.light}
                                onPress={() => {
                                    formik.setFieldValue(
                                        'estimatedDeliveryDate',
                                        formik.values.estimatedDeliveryDate - 1,
                                    );
                                    // setValue(value - 1)
                                }}>
                                <Text seondary>-</Text>
                            </Button>
                            <TextField2
                                style={[styles.increamentTextField, {textAlign: 'center'}]}
                                hideUnderline
                                value={String(formik.values.estimatedDeliveryDate)}
                                keyboardType="numeric"
                                enableErrors={false}
                                onChangeText={v => {
                                    formik.setFieldValue('estimatedDeliveryDate', Number(v));
                                    // onChangeText(Number(v));
                                }}
                            />
                            <Button
                                avoidMinWidth
                                style={[styles.button, {paddingTop: 8, paddingBottom: 8}]}
                                backgroundColor={Colors.secondary}
                                onPress={() => {
                                    formik.setFieldValue(
                                        'estimatedDeliveryDate',
                                        formik.values.estimatedDeliveryDate + 1,
                                    );
                                    // setValue(value + 1)
                                }}>
                                <Text white>+</Text>
                            </Button>
                        </View>
                        <View flex>
                            <Text textMuted text90 style={{lineHeight: 17}}>
                                {t('day(s) after supplier receives initial payment')}
                            </Text>
                        </View>
                    </View>

                    {/* <IncreamentField
            formik={formik}
            onChangeText={formik.handleChange('lead_time')}
            title={t('Lead Time')}
          /> */}
                    <View marginV-20 style={styles.fancySeparator} backgroundColor={Colors.light} />
                    <View row>
                        <Checkbox
                            iconColor={Colors.secondary}
                            onValueChange={(value: boolean) => formik.setFieldValue('agree1', value)}
                            value={formik.values.agree1}
                        />
                        <Text text80 marginL-10 marginR-5 marginT-3 textMuted>
                            {t('I agree to share my Business Card with quoted suppliers.')}
                        </Text>
                    </View>
                    <ErrorText formik={formik} name="agree1" />
                    <View row centerV>
                        <Checkbox
                            iconColor={Colors.secondary}
                            onValueChange={(value: boolean) => formik.setFieldValue('agree2', value)}
                            value={formik.values.agree2}
                        />
                        <Text text80 marginL-10 marginT-3 textMuted>
                            {t('I have read, understood and agreed to ')}
                        </Text>

                        <Button
                            link
                            avoidMinWidth
                            avoidInnerPadding
                            marginH-5
                            onPress={() => {
                                // showModal('Kartonah.Screens.Legal');
                                showOverlay('Kartonah.Screens.Terms', {
                                    page: 'showOverlay',
                                });
                            }}>
                            <Text text80>{t('terms and conditions')}</Text>
                        </Button>
                    </View>
                    <ErrorText formik={formik} name="agree2" />

                    <Button
                        marginV-20
                        marginB-60
                        disabled={formik.isSubmitting || !formik.isValid}
                        onPress={formik.handleSubmit}
                        style={styles.button}
                        backgroundColor={Colors.secondary}>
                        <Text text80 white>
                            {formik.isSubmitting ? t('Loading') : t('Add New Qutation')}
                        </Text>
                    </Button>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

NewQutation.screenName = 'Kartonah.Screens.NewQutation';

NewQutation.options = {
    bottomTabs: {
        visible: false,
    },
};

export default NewQutation;
