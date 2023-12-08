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
import {ActivityIndicator, Dimensions, Platform} from 'react-native';
import {CachedImage} from '@georstat/react-native-image-cache';
import {getProductImage, setUpInterCom} from 'utils/helpButoner';
import {usePush} from 'utils/hooks';
import {useTranslation} from 'react-i18next';
import Share from 'react-native-share';

const HeaderSearch = ({
    vendorId,
    title,
    back,
    page,
    showChat,
    SearchComponent,
    menu,
    style,
    searchStyle,
    hideSearch,
}: {
    vendorId: number;
    title: string;
    back?: boolean;
    showChat?: boolean;
    hideSearch?: boolean;
    page?: 'product' | 'search' | 'searchStock' | 'stock' | 'home';
    SearchComponent?: any;
    menu?: any;
    style?: any;
}) => {
    const {pop} = useNavigation();
    const push = usePush();
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const _pop = () => {
        pop();
    };

    // useEffect(() => {
    //   setUpInterCom();
    // }, []);
    // const searchRef = useRef();
    // const searchFilter = useSelector(state =>
    //   page == 'stock'
    //     ? state.searchStockFilter
    //     : state.searchFilter,
    // );
    // const [variables, setVariables] = useState(searchFilter);
    // console.log('search', variables.search);
    // console.log('page', page);
    // const suggestionsList = useQuery({
    //   type: FETCH_SEARCH_PRODUCTS + page,
    //   action: getSearchProducts,
    //   variables: [variables],
    //   // autoLoad: true,
    // });

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

    const share = async () => {
        await Share.open({
            title: t('Kartonah App'),
            subject: title,
            url: `https://kartonah.com/shop/vendor/${vendorId}?priceMax=100&priceMin=0`,
        });
    };

    const helpButton = () => {
        return (
            <View centerH>
                <Button
                    avoidMinWidth
                    avoidInnerPadding
                    borderRadius={5}
                    centerH
                    centerV
                    marginR-10
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.1,
                        shadowRadius: 4.65,
                        elevation: Platform.OS === 'android' ? 10 : 1,
                        height: 45,
                    }}
                    backgroundColor={Colors.white}
                    onPress={() => Intercom.displayMessenger()}>
                    <Image supportRTL source={Assets.icons.chat2} marginR-5 width={22} height={22} />
                    <Text style={{fontSize: 16}}>{t('Help?')}</Text>
                </Button>
            </View>
        );
    };

    return (
        <View
            style={[
                styles.headerSearchContainer,
                style,
                // {height: 70, paddingTop: 10},
                {height: Platform.OS === 'android' ? 70 : 105, paddingTop: 10},
                // back ? styles.headerSearchContainerBack : {},
            ]}
            centerV
            // centerH
            useSafeArea
            row>
            {back && (
                <Button avoidMinWidth style={{marginBottom: 10}} backgroundColor={'transparent'} onPress={() => _pop()}>
                    <Image supportRTL source={Assets.icons.arrowBack} />
                </Button>
            )}
            {SearchComponent ? (
                <SearchComponent title={title} />
            ) : hideSearch ? null : (
                <View flex style={back ? {flexDirection: 'row'} : null}>
                    <View
                        style={[
                            back ? {paddingRight: showChat ? 0 : 20, paddingLeft: 20} : {paddingHorizontal: 12},
                            {
                                // justifyContent: 'flex-end',
                                marginBottom: -5,
                                flex: 10,
                            },
                        ]}>
                        <TextField
                            style={[
                                styles.textField,
                                back
                                    ? (styles.searchFieldBack,
                                      {
                                          //   borderColor: 'red',
                                          borderColor: 'transparent',
                                          backgroundColor: 'rgba(255,255,255,.3)',
                                          paddingLeft: 45,
                                      })
                                    : (styles.searchFieldChat, {paddingLeft: 40}),
                                // searchStyle,
                                {
                                    position: 'relative',
                                    // paddingLeft: 40,
                                    height: 45,
                                },
                            ]}
                            onChangeText={formik.handleChange('search')}
                            onBlur={formik.handleBlur('search')}
                            value={formik.values.search}
                            hideUnderline
                            enableErrors={false}
                            placeholder={title}
                            placeholderTextColor={back ? 'white' : 'black'}
                            placeholderColor={Colors.getColorTint(Colors.secondary, 30)}
                        />
                        <Button
                            avoidMinWidth
                            avoidInnerPadding
                            onPress={() => {
                                formik.handleSubmit();
                            }}
                            style={[
                                styles.headerSearchButton,
                                showChat ? {right: 25} : {},
                                back ? {left: 30, top: 8} : {left: 20, top: 8},
                                {position: 'absolute'},
                            ]}
                            backgroundColor={'transparent'}>
                            <Image
                                tintColor={back ? 'white' : 'black'}
                                // tintColor={Colors.dark10}
                                source={Assets.icons.headerSearch}
                                style={[styles.headerSearchButtonImage, {height: 18, width: 18}]}
                            />
                        </Button>
                    </View>
                    {back ? (
                        <View style={{flex: 1, marginLeft: -10, paddingRight: 20}}>
                            <Button onPress={share} avoidMinWidth avoidPadding backgroundColor="transparent">
                                <Image source={Assets.icons.share2} style={{height: 25, width: 25}} />
                            </Button>
                        </View>
                    ) : null}
                </View>
            )}
            {showChat &&
                (title !== '' && hideSearch ? (
                    <View spread row flex centerV marginR-4 marginB-13 marginL-30>
                        <Text text50 marginT-15>
                            {title}
                        </Text>
                        {helpButton()}
                    </View>
                ) : (
                    <>{helpButton()}</>
                ))}
            {menu && (
                <View centerH centerV>
                    {menu}
                </View>
            )}
        </View>
    );
};

export default HeaderSearch;
