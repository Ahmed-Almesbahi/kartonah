// third party
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {ActivityIndicator, FlatList, I18nManager, ScrollView, Dimensions} from 'react-native';
import {View, Colors, Image, Button, Text, Assets, Chip, Card} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import {useQuery} from '@redux-requests/react';
import {useDispatch, useSelector} from 'react-redux';
import {resetRequests} from '@redux-requests/core';
import _isEqual from 'lodash/isEqual';
import Share from 'react-native-share';
import {CachedImage} from '@georstat/react-native-image-cache';

// applications
import VendorDetailsHeader from 'components/VendorDetailsHeader';
import ProductItem from 'components/ProductItem';
import styles from 'theme/styles';
import FilterSort from 'components/FilterSort';
import {UPLOAD_URL} from 'utils/constants';
import {FETCH_PRODUCTS, getProducts} from 'app-redux/actions/api';
import Spinner from 'components/Spinner';
import {productsRow, vendrosByCategoryRow} from 'typescript/api.types';
import {setFilterOptions, setFilterOption, resetFilter, initialFilterState} from 'app-redux/actions/filter';
import SkeletonVendorDetails from 'components/Skeletons/SkeletonVendorDetails';
import HeaderSearch from 'components/HeaderSearch';
import KartonahApi from 'kartonah-common/api';
import ProductItemSmall from 'components/ProductItemSmall';

const {width} = Dimensions.get('window');
const sideHeight = width / 1.6;
const sideWidth = width;
let initializing = true;

const VendorDetails = ({vendor, categoriesIds, componentId}: {vendor: vendrosByCategoryRow}) => {
    const {t} = useTranslation();
    const [loadingFollow, setLoadingFollow] = useState(false);
    const productFilter = useSelector(state => state.productFilter);
    const [relatedVariables, setRelatedVariables] = useState({
        ...productFilter,
        userId: vendor.id,
        limit: 6,
        orderBy: {id: 'asc'},
    });
    const dispatch = useDispatch();
    const {id: userId, favouritesIds} = useSelector(state => state.auth);
    const [activeCategory, setActiveCategory] = useState(0);
    const _menu = useRef(null);
    const {
        data: products,
        error,
        loading,
        pristine,
        load,
    } = useQuery({
        type: KartonahApi.FETCH_PRODUCTS,
        action: KartonahApi.getProducts,
        // variables: [variables1],
        variables: [productFilter],
        // autoLoad: true,
    });
    const vendorRelated = useQuery({
        type: KartonahApi.FETCH_VENDOR_RELATED,
        action: KartonahApi.getVendorRelated,
        // variables: [variables1],
        variables: [relatedVariables],
        autoLoad: true,
    });

    useEffect(() => {
        let initialFilters = {
            ...initialFilterState,
            userId: vendor?.id,
            categoriesIds: categoriesIds && categoriesIds.length > 0 ? categoriesIds : [],
        };

        //do we need to reset ??
        dispatch(resetRequests([KartonahApi.FETCH_PRODUCTS]));
        // let shouldReset = false;
        if (!_isEqual(productFilter, initialFilters)) {
            dispatch(setFilterOptions(initialFilters, 'product'));
        }

        return () => {
            dispatch(resetRequests([KartonahApi.FETCH_PRODUCTS]));
        };
    }, []);

    useEffect(() => {
        //prevent load till redux is updated
        if (productFilter.userId == vendor.id) {
            load();
        }
    }, [productFilter]);

    const renderProductItem = ({item}: {item: productsRow}) => <ProductItem key={item.id} item={item} />;

    const isFollowed = (): boolean => {
        if (favouritesIds?.length > 0) {
            return favouritesIds.includes(vendor?.id);
        }
        return false;
    };

    const getFilterList = () => {
        const list: any = [];
        let loops = ['categoriesIds', 'tagsIds', 'sizesIds', 'coloursIds', 'materialsIds', 'labelsIds'];
        loops.map(name => {
            if (productFilter[name].length > 0) {
                productFilter[name].map(cid => {
                    list.push({
                        id: cid.id,
                        type: 'category',
                        label: cid.label,
                        onDismiss: () => {
                            dispatch(resetRequests([FETCH_PRODUCTS]));
                            dispatch(
                                setFilterOptions(
                                    {
                                        [name]: productFilter[name].filter(c => c.id != cid.id),
                                    },
                                    'product',
                                ),
                            );
                        },
                    });
                });
            }
        });

        return list;
    };

    const FlatListHeader = () => (
        <FlatList
            data={getFilterList()}
            renderItem={({item}) => (
                <Chip
                    key={item.id}
                    label={item.label}
                    iconColor={Colors.secondary}
                    marginL-10
                    marginT-10
                    marginB-10
                    backgroundColor={Colors.white}
                    onDismiss={item.onDismiss}
                    // dismissColor={Colors.red10}
                    dismissIconStyle={{width: 10, height: 10}}
                />
            )}
            horizontal
            pagingEnabled
            inverted={I18nManager.isRTL && Platform.OS == 'android' ? true : false}
            showsHorizontalScrollIndicator={false}
        />
    );
    const isLoaded = () => {
        if (products?.rows?.length >= 0) {
            // if (products?.rows?.length >= 0 || !initializing) {
            // initializing = false;
            return true;
        }
        return false;
    };

    return (
        <>
            {!isLoaded() && <SkeletonVendorDetails />}
            <View backgroundColor={Colors.light} flex style={[!isLoaded() ? {width: 0, height: 0, opacity: 0} : {}]}>
                <View>
                    <CachedImage
                        source={`${UPLOAD_URL}${vendor?.photo}`}
                        thumbnailSource={`${UPLOAD_URL}${vendor?.photo}`}
                        loadingImageComponent={ActivityIndicator}
                        resizeMode="cover"
                        style={{
                            overflow: 'hidden',
                            padding: 0,
                            backgroundColor: '#EDEEF0',
                            height: sideHeight - 20,
                            width: sideWidth,
                            borderRadius: 0,
                            marginBottom: 0,
                        }}
                    />
                    <HeaderSearch
                        vendorId={vendor.id}
                        // title={vendor.brandName}
                        back
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            padding: 10,
                            backgroundColor: 'transparent',
                            justifyContent: 'space-between',
                            borderBottomWidth: 0,
                        }}
                        searchStyle={{
                            backgroundColor: 'rgba(255, 255, 255,0.3)',
                            borderWidth: 0,
                        }}
                        page="product"
                        title={`${
                            vendor?.brandName.length > 7 ? vendor?.brandName.substring(0, 7) + '...' : vendor?.brandName
                        } (${vendor?.productsCount})`}
                    />
                    <View row style={styles.vendorItemTextContainer}>
                        <Text center white bold marginL-80>
                            {vendor.brandName}
                        </Text>
                        <Text center white bold>
                            {t('Min Order')} : {vendor.minBill} {t('unit')}
                        </Text>
                    </View>
                    <Card /* eslint-ignore-line */
                        style={[
                            {position: 'absolute', bottom: 10, left: 10},
                            I18nManager.isRTL ? {right: 30, left: 'auto'} : {},
                        ]}
                        borderRadius={5}
                        elevation={2}
                        height={68}
                        width={68}>
                        <Card.Image height={68} width={68} source={{uri: `${UPLOAD_URL}${vendor.logo}`}} />
                    </Card>
                </View>

                <ScrollView>
                    {FlatListHeader()}
                    {vendorRelated?.data?.byRecent.length > 0 ? (
                        <View bg-white paddingV-10 marginV-10>
                            <Text marginB-10 marginL-20>
                                {t('New Arrival')}
                            </Text>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                bounces={false}
                                data={vendorRelated?.data?.byRecent}
                                renderItem={({item}) => <ProductItemSmall layout="tab_h" key={item.id} item={item} />}
                                horizontal
                            />
                        </View>
                    ) : null}
                    {vendorRelated?.data?.byViews.length > 0 ? (
                        <View bg-white marginB-10>
                            <Text marginB-10 marginT-10 marginL-20>
                                {t('Most View')}
                            </Text>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                bounces={false}
                                data={vendorRelated?.data?.byViews}
                                renderItem={({item}) => <ProductItemSmall layout="tab" key={item.id} item={item} />}
                                numColumns={3}
                            />
                        </View>
                    ) : null}
                    <FilterSort vendorId={vendor?.id} page="product" />
                    <FlatList
                        contentContainerStyle={styles.productFlatList}
                        bounces={false}
                        data={products?.rows}
                        renderItem={renderProductItem}
                        ListFooterComponent={loading ? <Spinner /> : null}
                        scrollEventThrottle={250}
                        onEndReachedThreshold={0.01}
                        onEndReached={() => {
                            if (!loading && products?.hasMore) {
                                dispatch(
                                    setFilterOption('offset', productFilter.offset + productFilter.limit, 'product'),
                                );
                            }
                        }}
                        numColumns={2}
                    />
                </ScrollView>
            </View>
        </>
    );
};

VendorDetails.screenName = 'Kartonah.Screens.VendorDetails';
VendorDetails.componentId = 'Kartonah.Screens.VendorDetails';
VendorDetails.id = 'Kartonah.Screens.VendorDetails';

VendorDetails.options = {};

export default VendorDetails;
