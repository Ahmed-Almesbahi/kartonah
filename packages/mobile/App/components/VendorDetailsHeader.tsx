import React, {useEffect, useRef, useState} from 'react';
import {View, Button, Image, Assets, TextField, Colors, Text} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useNavigation} from 'react-native-navigation-hooks';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {setFilterOption} from 'app-redux/actions/filter';
import Intercom from 'react-native-intercom';
import {resetRequests} from '@redux-requests/core';
import {FETCH_SEARCH_PRODUCTS, FETCH_PRODUCTS, getSearchProducts} from 'app-redux/actions/api';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import {useQuery} from '@redux-requests/react';
import {ActivityIndicator, Dimensions} from 'react-native';
import {CachedImage} from '@georstat/react-native-image-cache';
import {getProductImage, setUpInterCom} from 'utils/helper';
import {usePush} from 'utils/hooks';
import {useTranslation} from 'react-i18next';

const VendorDetailsHeader = ({
    title,
    back,
    page,
    showChat,
    SearchComponent,
    menu,
}: {
    title: string;
    back?: boolean;
    showChat?: boolean;
    page?: 'product' | 'search' | 'searchStock' | 'stock';
    SearchComponent?: any;
    menu?: any;
}) => {
    const {pop} = useNavigation();
    const push = usePush();
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const _pop = () => {
        pop();
    };

    const formik = useFormik({
        initialValues: {
            search: '',
        },
        validationSchema: Yup.object().shape({
            search: Yup.string(),
        }),
        onSubmit: values => {
            if (page == 'product') {
                dispatch(resetRequests([FETCH_PRODUCTS]));
                dispatch(setFilterOption('search', values.search, 'product'));
            } else if (page == 'stock') {
                dispatch(setFilterOption('search', values.search, 'searchStock'));
                push('Kartonah.Screens.Search', {page: 'searchStock'});
            } else {
                dispatch(setFilterOption('search', values.search, 'search'));
                push('Kartonah.Screens.Search', {page: 'search'});
            }
        },
    });

    return (
        <View style={[styles.headerSearchContainer]} centerV useSafeArea row>
            {back && (
                <Button avoidMinWidth style={{marginBottom: 10}} backgroundColor={Colors.white} onPress={() => _pop()}>
                    <Image supportRTL source={Assets.icons.arrowBack} />
                </Button>
            )}
            {SearchComponent ? (
                <SearchComponent title={title} />
            ) : (
                <View flex style={[back ? {paddingRight: showChat ? 0 : 20} : {paddingLeft: 20, paddingRight: 20}]}>
                    <TextField
                        style={[
                            styles.textField,
                            // back ? styles.searchFieldBack : styles.searchField,
                            back ? styles.searchFieldBack : styles.searchFieldChat,
                        ]}
                        onChangeText={formik.handleChange('search')}
                        onBlur={formik.handleBlur('search')}
                        value={formik.values.search}
                        hideUnderline
                        enableErrors={false}
                        placeholder={title}
                        placeholderColor={Colors.getColorTint(Colors.secondary, 30)}
                    />

                    <Button
                        avoidMinWidth
                        avoidInnerPadding
                        onPress={() => {
                            formik.handleSubmit();
                        }}
                        style={[styles.headerSearchButton, showChat ? {right: 25} : {}]}
                        backgroundColor={Colors.secondary}>
                        <Image
                            tintColor={Colors.primary}
                            source={Assets.icons.headerSearch}
                            style={styles.headerSearchButtonImage}
                        />
                    </Button>
                </View>
            )}
        </View>
    );
};

export default VendorDetailsHeader;
