import React, {useEffect, useMemo} from 'react';
import {DeviceEventEmitter, FlatList} from 'react-native';
import {View, Colors} from 'react-native-ui-lib';
import BottomTabsBg from 'components/BottomTabsBg';
import HeaderSearch from 'components/HeaderSearch';
import {useTranslation} from 'react-i18next';
import ProductItemSale from 'components/ProductItemSale';
import FilterSort from 'components/FilterSort';
import styles from 'theme/styles';
import {useQuery} from '@redux-requests/react';
import {fetchStocks, FETCH_STOCKS} from 'app-redux/actions/api';
import {Stocks} from 'typescript/api.types';
import {useDispatch, useSelector} from 'react-redux';
import EmptyResult from 'components/EmptyResult';
import Spinner from 'components/Spinner';
import {initialFilterState, resetFilter, setFilterOption} from 'app-redux/actions/filter';
import {resetRequests} from '@redux-requests/core';
import _isEqual from 'lodash/isEqual';
import KartonahApi from 'kartonah-common/api';

let firstTimePressed = 0;

const Sales = () => {
    const {t} = useTranslation();
    const stockFilter = useSelector(state => state.stockFilter);
    // const [variables, setVariables] = useState(stockFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetFilter('stock'));
        const unsubscribe = DeviceEventEmitter.addListener('onPressStock', () => {
            firstTimePressed = firstTimePressed + 1;
            // setShow(true);

            if (firstTimePressed > 1 && !_isEqual(initialFilterState, stockFilter)) {
                dispatch(resetRequests([FETCH_STOCKS]));
                dispatch(resetFilter('stock'));
            }

            // setVariables({...variables, force_reload: Math.random()});
        });
        return () => {
            unsubscribe.remove();
        };
    }, []);

    const variables1 = useMemo(() => stockFilter, [stockFilter]);

    const stocks = useQuery({
        type: KartonahApi.FETCH_STOCKS,
        action: KartonahApi.fetchStocks,
        variables: [variables1],
        autoLoad: true,
    });

    const renderProductItem = ({item}: {item: Stocks.Row}) => <ProductItemSale key={item.id} item={item} />;
    const FlatListHeader = () => (
        <View marginB-10>
            <FilterSort vendorId={0} page="stock" />
        </View>
    );
    return (
        <View backgroundColor={Colors.light} flex>
            <HeaderSearch title={t('Search for ...')} page="stock" />

            <FlatList
                ListHeaderComponent={FlatListHeader()}
                contentContainerStyle={styles.productFlatList}
                bounces={false}
                data={stocks.data?.rows}
                renderItem={renderProductItem}
                numColumns={2}
                ListEmptyComponent={<EmptyResult />}
                ListFooterComponent={stocks.loading && stocks.error == null ? <Spinner /> : null}
                scrollEventThrottle={250}
                onEndReachedThreshold={0.01}
                onEndReached={() => {
                    if (!stocks.loading && stocks.data?.hasMore) {
                        dispatch(setFilterOption('offset', stockFilter.offset + stockFilter.limit, 'stock'));
                        // setVariables({...variables, offset: variables.offset + 1});
                        // dispatch(
                        //   setFilterOption('offset', productFilter.offset + 1, 'product'),
                        // );
                    }
                }}
            />

            <BottomTabsBg />
        </View>
    );
};

Sales.screenName = 'Kartonah.Screens.Sales';

export default Sales;
