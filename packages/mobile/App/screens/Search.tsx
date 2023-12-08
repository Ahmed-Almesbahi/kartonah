import React, {useEffect, useMemo, useState} from 'react';
import {FlatList} from 'react-native';
import {View, Colors, Image, Button, Text, Assets} from 'react-native-ui-lib';
import HeaderSearch from 'components/HeaderSearch';
import {Rating} from 'react-native-ratings';
import {useTranslation} from 'react-i18next';
import ProductItem from 'components/ProductItem';
import {ProductCategoryType, ProductItemType, UserType} from 'typescript/types';
import styles from 'theme/styles';
import {FETCH_SEARCH, getSearchs} from 'app-redux/actions/api';
import {useQuery} from '@redux-requests/react';
import Query from 'components/Query';
import {useDispatch, useSelector} from 'react-redux';

import EmptyResult from 'components/EmptyResult';
import {resetFilter} from 'app-redux/actions/filter';

const Search = ({page}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {id: userId, favouritesIds} = useSelector(state => state.auth);
    const searchFilter = useSelector(state => (page == 'searchStock' ? state.searchStockFilter : state.searchFilter));

    useEffect(() => {
        dispatch(resetFilter('search'));
    }, []);

    const {
        data: products,
        error,
        loading,
        pristine,
    } = useQuery({
        type: FETCH_SEARCH,
        action: getSearchs,
        variables: [searchFilter],
        autoLoad: true,
    });

    const renderProductItem = ({item}: {item: ProductItemType}) => (
        <ProductItem key={item.id} item={item} goTo="vendor" />
    );

    return (
        <View backgroundColor={Colors.light} flex>
            <HeaderSearch back title={searchFilter.search} />
            <View marginV-10 />
            <Query
                data={products}
                error={error}
                loading={loading}
                pristine={pristine}
                children={() => (
                    <FlatList
                        // ListHeaderComponent={FlatListHeader}
                        contentContainerStyle={styles.productFlatList}
                        bounces={false}
                        style={{zIndex: -1}}
                        data={products?.rows}
                        renderItem={renderProductItem}
                        numColumns={2}
                        ListEmptyComponent={<EmptyResult />}
                    />
                )}
            />
        </View>
    );
};

Search.screenName = 'Kartonah.Screens.Search';

Search.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Search;
