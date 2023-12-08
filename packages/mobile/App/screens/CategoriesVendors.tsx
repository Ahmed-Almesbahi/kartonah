// third-party
import React, {useEffect, useState} from 'react';
import {FlatList, Dimensions, Platform} from 'react-native';
import {View, Colors, Text, Button} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import _isEqual from 'lodash/isEqual';
import {resetRequests} from '@redux-requests/core';
import {useDispatch, useSelector} from 'react-redux';
import {useQuery} from '@redux-requests/react';

// application
import VendorItem from 'components/VendorItem';
import HeaderSearch from 'components/HeaderSearch';
import {vendrosByCategoryRow} from 'typescript/api.types';
import Spinner from 'components/Spinner';
import BottomTabsBg from 'components/BottomTabsBg';
import KartonahApi from 'kartonah-common/api';
import {initialFilterState, setFilterOption, setFilterOptions} from 'app-redux/actions/filter';
import ProductItem from 'components/ProductItem';

const {width} = Dimensions.get('window');

let defaultVariables = {
    skip: 0,
    take: 10,
    sortBy: 'theOrder',
    // sortBy: 'id',
    sortSign: 'ASC',
    categoriesIds: [],
};

let initializing = true;

const CategoriesVendors = props => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [viewBy, setView] = useState('items');
    const productFilter = useSelector(state => state.productFilter);
    const [vendorVariables, setVendorVariables] = useState({
        ...defaultVariables,
        categoriesIds: props?.categoriesIds?.length > 0 ? props?.categoriesIds : [],
        skip: 0,
    });
    // const [productVariables, setProductVariables] = useState({
    //     ...productFilter,
    //     categoriesIds: props?.categoriesIds?.length > 0 ? props?.categoriesIds : [],
    //     skip: 0,
    // });

    const [loadingVendor, setVendorLoading] = useState(false);
    const [vendorHasLoadMore, setVendorHasLoadMore] = useState(true);
    const [loadingProduct, setProductLoading] = useState(false);
    const [productHasLoadMore, setProductHasLoadMore] = useState(true);

    const vendors = useQuery({
        type: KartonahApi.FETCH_VENDORS_BY_CATEGORY,
        action: KartonahApi.getVendorsByCategory,
        variables: [vendorVariables],
        autoLoad: true,
    });

    const products = useQuery({
        type: KartonahApi.FETCH_PRODUCTS2,
        action: KartonahApi.getProducts2,
        variables: [productFilter],
        // variables: [productVariables],
        autoLoad: true,
    });
    useEffect(() => {
        let initialFilters = {
            ...initialFilterState,
            categoriesIds: props?.categoriesIds.length > 0 ? props?.categoriesIds : [],
            userId: null,
        };

        //do we need to reset ??
        dispatch(resetRequests([KartonahApi.FETCH_PRODUCTS2]));
        // let shouldReset = false;
        if (!_isEqual(productFilter, initialFilters)) {
            dispatch(setFilterOptions(initialFilters, 'product'));
        }

        products.load();

        // return () => {
        //     dispatch(resetRequests([KartonahApi.FETCH_PRODUCTS]));
        // };
    }, []);

    const renderVendorItem = ({item}: {item: vendrosByCategoryRow}) => {
        return <VendorItem key={item.id} item={item} categoriesIds={vendorVariables.categoriesIds} />;
    };

    const renderProductItem = ({item}: {item: productsRow}) => <ProductItem key={item.id} item={item} />;

    const isLoaded = () => {
        if (vendors.data?.rows?.length >= 0 || !initializing || vendors.error != null) {
            initializing = false;
            return true;
        }
        return false;
    };

    return (
        <>
            <View backgroundColor={Colors.light} flex style={[!isLoaded() ? {width: 0, height: 0, opacity: 0} : {}]}>
                <HeaderSearch
                    title={t('Search for ...')}
                    page="search"
                    showChat
                    // SearchComponent={CategoriesSearch}
                />
                {viewBy == 'vendors' && (
                    <FlatList
                        bounces={false}
                        style={{zIndex: -1}}
                        data={vendors.data?.rows}
                        keyboardShouldPersistTaps="handled"
                        renderItem={renderVendorItem}
                        ListFooterComponent={vendors.loading ? <Spinner /> : null}
                        scrollEventThrottle={250}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            if (!vendors.loading && vendors.data?.hasMore) {
                                //onLoadMore();
                                // setVendorVariables({
                                //     ...vendorVariables,
                                //     skip: vendorVariables.skip + vendorVariables.take,
                                // });
                            }
                        }}
                    />
                )}
                {viewBy == 'items' && (
                    <FlatList
                        bounces={false}
                        style={{zIndex: -1}}
                        data={products.data?.rows}
                        keyboardShouldPersistTaps="handled"
                        renderItem={renderProductItem}
                        ListFooterComponent={products.loading ? <Spinner /> : null}
                        scrollEventThrottle={250}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            // if (!products.loading && products?.hasMore) {
                            if (!products.loading) {
                                dispatch(
                                    setFilterOption('offset', productFilter.offset + productFilter.limit, 'product'),
                                );
                            }
                        }}
                        numColumns={2}
                    />
                )}
                <Button
                    onPress={() => {
                        if (viewBy == 'vendors') {
                            setView('items');
                        } else {
                            setView('vendors');
                        }
                    }}
                    absB
                    style={{
                        bottom: Platform.OS === 'android' ? 100 : 120,
                        width: 150,
                        left: width / 2 - 75,
                        position: 'absolute',
                    }}>
                    <Text>{viewBy == 'vendors' ? t('View By Items') : t('View By Vendor')}</Text>
                </Button>
                {Platform.OS === 'ios' ? <View marginV-17 /> : null}
                <BottomTabsBg />
            </View>
        </>
    );
};

CategoriesVendors.screenName = 'Kartonah.Screens.CategoriesVendors';

export default CategoriesVendors;
