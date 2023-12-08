import React, {useEffect, useState} from 'react';
import {View, Colors, Button, Text, KeyboardAwareScrollView} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';

import FilterPicker from 'components/FilterPicker';
import FilterRatingRadioItem from 'components/FilterRatingRadioItem';
import FilterPrice from 'components/FilterPrice';
import styles from 'theme/styles';
import {fetchStockFilters, fetchVendorFilters, FETCH_PRODUCTS, FETCH_STOCKS, getProducts} from 'app-redux/actions/api';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import {useNavigation} from 'react-native-navigation-hooks';
import * as Yup from 'yup';
import {fixPickerMultiItems} from 'utils/helper';
import {setFilterOptions} from 'app-redux/actions/filter';
import {resetRequests} from '@redux-requests/core';
import MultiSelectPicker from 'components/MultiSelectPicker';
import KartonahApi from 'kartonah-common/api';

const Filters = ({vendorId, page}: {vendorId: number; page: 'stock' | 'searchStock' | 'search' | 'product'}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {pop} = useNavigation();
    const stateFilter = useSelector(state => {
        if (page == 'stock') {
            return state.stockFilter;
        } else if (page == 'search') {
            return state.searchFilter;
        } else if (page == 'searchStock') {
            return state.searchStockFilter;
        } else {
            return state.productFilter;
        }
    });
    const [allData, setAllData] = useState({
        categories: [],
        tags: [],
        sizes: [],
        colors: [],
        materials: [],
        descriptions: [],
        shapes: [],
        rating: [],
        loading: true,
    });

    useEffect(() => {
        // if (props.vendorId) {
        dispatch(page == 'stock' ? fetchStockFilters(vendorId) : KartonahApi.fetchVendorFilters(vendorId)).then(
            ({data}) => {
                setAllData({
                    categories: data?.rows?.categories,
                    tags: data?.rows?.tags,
                    sizes: data?.rows?.sizes,
                    colors: data?.rows?.colours,
                    materials: data?.rows?.materials,
                    shapes: data?.rows?.shapes,
                    descriptions: data?.rows?.descriptions,
                    // rating: data.rating,
                    rating: [],
                    loading: false,
                });
            },
        );
        // }
    }, []);

    const formik = useFormik({
        initialValues: {
            ...stateFilter,
            userId: vendorId,
            // rating: allData.rating,
        },
        validationSchema: Yup.object().shape({
            priceMin: Yup.number(),
            priceMax: Yup.number(),
        }),
        onSubmit: values => {
            dispatch(resetRequests([page == 'stock' ? FETCH_STOCKS : FETCH_PRODUCTS]));
            dispatch(setFilterOptions(values, page));
            formik.setSubmitting(false);
            pop();
            // dispatch(getProducts({...values, offset: 0})).then(res => {

            //   // productFilter

            // });
        },
    });

    const getData = data => {
        return {
            value: data?.id,
            label: data?.title ? data.title : data?.elment_trans[0]?.title,
        };
    };

    const updateCheckbox = (res: boolean, value: number) => {
        if (!res) {
            let index = formik.values.rating.findIndex(c => c == value);
            let newRating = formik.values.rating;
            newRating.splice(index, 1);
            // setAllData({...allData, rating: newRating});
            formik.setFieldValue('rating', newRating);
        } else {
            // setAllData({
            //   ...allData,
            //   rating: [...formik.values.rating, value],
            // });
            formik.setFieldValue('rating', [...formik.values.rating, value]);
        }
    };

    // if (allData.loading) {
    //   return null;
    // }

    return (
        <View bg-white flex>
            <Header
                showBack
                onShowBack={() => {
                    formik.setFieldValue('offset', 0);
                    formik.handleSubmit();
                }}
                white
                titleStart
                showAction
                action={() => (
                    <View flex right marginR-10>
                        <Button
                            link
                            size1
                            color={Colors.secondary}
                            onPress={() => {
                                formik.resetForm({
                                    values: {
                                        ...formik.values,
                                        categoriesIds: [],
                                        tagsIds: [],
                                        sizesIds: [],
                                        coloursIds: [],
                                        materialsIds: [],
                                        labelsIds: [],
                                        shapesIds: [],
                                        rating: [],
                                    },
                                });
                            }}>
                            <Text text90>{t('CLEAR ALL')}</Text>
                        </Button>
                    </View>
                )}
                title={t('Filters')}
            />
            <KeyboardAwareScrollView bounces={false}>
                {/* {allData.tags?.length && ( */}
                <MultiSelectPicker
                    title={t('Category')}
                    setSelected={s => {
                        formik.setFieldValue('categoriesIds', fixPickerMultiItems(s));
                    }}
                    data={allData.categories?.map(c => getData(c))}
                    selectedItems={allData.categories
                        // ?.filter(c => formik.values?.categoriesIds?.includes(c.id))
                        ?.filter(c => formik.values?.categoriesIds?.find(x => x.id == c.id))
                        ?.map(c => getData(c))}
                />
                {allData?.tags?.length > 0 && (
                    <MultiSelectPicker
                        title={t('Tags')}
                        setSelected={s => formik.setFieldValue('tagsIds', fixPickerMultiItems(s))}
                        data={allData.tags?.map(c => getData(c))}
                        selectedItems={allData.tags
                            ?.filter(c => formik.values?.tagsIds?.find(x => x.id == c.id))
                            // ?.filter(c => formik.values?.tagsIds.includes(c.id))
                            ?.map(c => getData(c))}
                    />
                )}

                {/* )} */}
                {/* <FilterPicker
            title={t('Brand')}
            setSelected={(s) => setBrand(s)}
            data={brands.map((c) => getData(c))}
            // value={brand}
          /> */}
                {/* {allData.materials?.length && ( */}
                {allData?.materials?.length > 0 && (
                    <MultiSelectPicker
                        title={t('Material')}
                        setSelected={s => formik.setFieldValue('materialsIds', fixPickerMultiItems(s))}
                        data={allData.materials.map(c => getData(c))}
                        selectedItems={allData.materials
                            ?.filter(c => formik.values?.materialsIds?.find(x => x.id == c.id))
                            // ?.filter(c => formik.values?.materialsIds?.includes(c.id))
                            ?.map(c => getData(c))}
                    />
                )}
                {/* )} */}
                {/* {allData.shapes?.length && ( */}
                {allData?.shapes?.length > 0 && (
                    <MultiSelectPicker
                        title={t('Shape')}
                        setSelected={s => formik.setFieldValue('shapesIds', fixPickerMultiItems(s))}
                        data={allData.shapes.map(c => getData(c))}
                        selectedItems={allData.shapes
                            ?.filter(c => formik.values?.shapesIds?.find(x => x.id == c.id))
                            // ?.filter(c => formik.values?.shapesIds?.includes(c.id))
                            ?.map(c => getData(c))}
                        // value={brand}
                    />
                )}
                {/* )} */}
                {/* {allData.sizes?.length && ( */}
                {allData?.sizes?.length > 0 && (
                    <MultiSelectPicker
                        title={t('Size')}
                        setSelected={s => formik.setFieldValue('sizesIds', fixPickerMultiItems(s))}
                        data={allData.sizes.map(c => ({value: c.id, label: c.title}))}
                        selectedItems={allData.sizes
                            ?.filter(c => formik.values?.sizesIds?.find(x => x.id == c.id))
                            // ?.filter(c => formik.values.sizesIds.includes(c.id))
                            ?.map(c => getData(c))}
                        // value={size}
                    />
                )}
                {/* )} */}

                {/* {allData.colors?.length && ( */}
                {allData?.colors?.length > 0 && (
                    <MultiSelectPicker
                        title={t('Color')}
                        setSelected={s => formik.setFieldValue('coloursIds', fixPickerMultiItems(s))}
                        data={allData.colors.map(c => getData(c))}
                        selectedItems={allData.colors
                            ?.filter(c => formik.values?.coloursIds?.find(x => x.id == c.id))
                            // ?.filter(c => formik.values.coloursIds.includes(c.id))
                            ?.map(c => getData(c))}
                        // value={color}
                    />
                )}
                {/* )} */}
                <View paddingH-10>
                    <View paddingV-10>
                        <Text secondary bold>
                            {t('Price')}
                        </Text>
                        <FilterPrice formik={formik} />
                    </View>
                    {/* <View paddingV-20 paddingB-100 style={{marginTop: -20}}>
            <Text secondary bold>
              {t('Rating')}
            </Text>
            <FilterRatingRadioItem
              selected={formik.values.rating?.includes(5)}
              count={5}
              onPress={(res) => updateCheckbox(res, 5)}
            />
            <FilterRatingRadioItem
              selected={formik.values.rating?.includes(4)}
              count={4}
              onPress={(res) => updateCheckbox(res, 4)}
            />
            <FilterRatingRadioItem
              selected={formik.values.rating?.includes(3)}
              count={3}
              onPress={(res) => updateCheckbox(res, 3)}
            />
            <FilterRatingRadioItem
              selected={formik.values.rating?.includes(2)}
              count={2}
              onPress={(res) => updateCheckbox(res, 2)}
            />
            <FilterRatingRadioItem
              selected={formik.values.rating?.includes(1)}
              count={1}
              onPress={(res) => updateCheckbox(res, 1)}
            />
          </View> */}
                </View>
                {/* <View backgroundColor={Colors.white} padding-10>
          <Button
            backgroundColor={Colors.secondary}
            style={styles.button}
            disabled={formik.isSubmitting || !formik.isValid}
            onPress={formik.handleSubmit}>
            <Text uppercase bold white>
              {formik.isSubmitting ? t('Loading') : t('Save')}
            </Text>
          </Button>
        </View> */}
            </KeyboardAwareScrollView>
        </View>
    );
};

Filters.screenName = 'Kartonah.Screens.Filters';

Filters.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Filters;
