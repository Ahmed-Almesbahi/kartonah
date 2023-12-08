import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, Dimensions, DeviceEventEmitter, I18nManager, Platform} from 'react-native';
import {View, Colors, Assets, Image} from 'react-native-ui-lib';
import HeaderSearch from 'components/HeaderSearch';
import {useTranslation} from 'react-i18next';
import CategoryItemText from 'components/CategoryItemText';
import CategoryItemImage from 'components/CategoryItemImage';
import VendorItem from 'components/VendorItem';
import Carousel from 'react-native-snap-carousel';
import styles from 'theme/styles';
const {width} = Dimensions.get('window');
import messaging from '@react-native-firebase/messaging';
import Intercom from 'react-native-intercom';

import {productsCategoriesRow, vendrosByCategoryRow} from 'typescript/api.types';
import {
    getProductsCategories,
    FETCH_PRODUCTS_CATEGORIES,
    getVendorsByCategory,
    FETCH_VENDORS_BY_CATEGORY,
} from 'app-redux/actions/api';
import {useQuery} from '@redux-requests/react';
import {UPLOAD_URL} from 'utils/constants';
import {Navigation} from 'react-native-navigation';
import {useNavigation} from 'react-native-navigation-hooks';
import {useDispatch, useSelector} from 'react-redux';
import {resetRequests} from '@redux-requests/core';
import EmptyResult from 'components/EmptyResult';
import Spinner from 'components/Spinner';
import BottomTabsBg from 'components/BottomTabsBg';
import SkeletonHome from 'components/Skeletons/SkeletonHome';
import HomeSearch from 'components/HomeSearch';
import {setUpInterCom} from 'utils/helper';

let defaultVariables = {
    skip: 0,
    take: 10,
    sortBy: 'theOrder',
    // sortBy: 'id',
    sortSign: 'ASC',
    categoriesIds: [],
};

let initializing = true;

const Home = props => {
    return <BottomTabsBg onHomeClick={() => {}} />;
    // return (
    //   <View flex backgroundColor={Colors.primary} centerH centerV>
    //     <Image source={Assets.images.splashLogo} width={222.5} height={107.25} />
    //   </View>
    // );

    const {t} = useTranslation();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);

    const [active, setActive] = useState(0);
    const [activeSub, setActiveSub] = useState(props?.categoryId > 0 ? props?.categoryId : 0);
    const [variables, setVariables] = useState({
        ...defaultVariables,
        categoriesIds: props?.categoryId > 0 ? [{id: props?.categoryId, label: 'unknown'}] : [],
    });
    const [loading, setLoading] = useState(false);
    const [hasLoadMore, setHasLoadMore] = useState(true);
    const {pop} = useNavigation();

    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            // console.log('Authorization status:', authStatus);
        }
    }

    // intercom
    useEffect(() => {
        setUpInterCom();
    }, []);

    useEffect(() => {
        requestUserPermission();
    }, []);

    useEffect(() => {
        const unsubscribe = DeviceEventEmitter.addListener('onPressHome', e => {
            //task: when i choose subcategory if i click on home button must back me to default situation
            // reset all
            if (active > 0 || activeSub > 0) {
                dispatch(resetRequests([FETCH_VENDORS_BY_CATEGORY]));
                setActive(0);
                setActiveSub(0);
                setVariables({...defaultVariables, i: Math.random()});
            }
        });
        return () => {
            // Make sure to unregister the listener during cleanup
            unsubscribe.remove();
        };
    }, [active, activeSub]);
    // }, []);

    const productCategories = useQuery({
        type: FETCH_PRODUCTS_CATEGORIES,
        action: getProductsCategories,
        variables: [],
        autoLoad: true,
    });
    // console.log('productCategories', productCategories.data);

    const vendors = useQuery({
        type: FETCH_VENDORS_BY_CATEGORY,
        action: getVendorsByCategory,
        variables: [variables],
        // variables: [variables],
        autoLoad: true,
    });

    const onPressCategory = (index: number) => {
        dispatch(resetRequests([FETCH_VENDORS_BY_CATEGORY]));

        setVariables({...variables, categoriesIds: getChildIds(index), skip: 0});
        setActive(index);
    };

    const renderCategoryItem = ({item}: {item: productsCategoriesRow; index: number}) => (
        <CategoryItemText
            key={item.id}
            active={active === item.id}
            title={item.elment_trans[0]?.title}
            onPress={() => onPressCategory(item.id)}
        />
    );

    const renderSubCategoryItem = ({item}: {item: productsCategoriesRow}) => (
        <CategoryItemImage
            image={{
                uri: `${UPLOAD_URL}${item.photo}`,
            }}
            isActive={item.id == activeSub ? true : false}
            onPress={() => {
                dispatch(resetRequests([FETCH_VENDORS_BY_CATEGORY]));
                setVariables({
                    ...variables,
                    categoriesIds: [{id: item.id, label: item?.elment_trans[0]?.title}],
                    skip: 0,
                });
                setActiveSub(item.id);
            }}
            name={item.elment_trans[0]?.title}
        />
    );

    const renderVendorItem = ({item}: {item: vendrosByCategoryRow}) => {
        return <VendorItem key={item.id} item={item} categoriesIds={variables.categoriesIds} />;
    };

    const getChildIds = parentId => {
        const _isParent = productCategories.data?.rows.find(c => c.id == parentId);
        const isParent = _isParent?.parentId == 0 ? true : false;
        let _ids: Array<number> = [];
        let subCategoryData = productCategories.data?.rows
            ?.filter(c => c.parentId == parentId)
            .map(c => {
                _ids.push(c.id);
                return {id: c.id, label: c?.elment_trans[0]?.title};
            });
        if (subCategoryData.length == 0 || isParent) {
            return [{id: _isParent.id, label: _isParent?.elment_trans[0]?.title}];
        }

        // let childChild = productCategories.data?.rows
        //   ?.filter(c => _ids.includes(c.parentId))
        //   .map(c => ({id: c.id, label: c?.elment_trans[0]?.title}));
        // return subCategoryData.concat(childChild);
        return subCategoryData;
    };

    const getParentIds = () => {
        let ids: Array<number> = [];
        productCategories.data?.rows
            ?.filter(c => c.parentId === 0)
            .map(c => {
                ids.push(c.id);
            });
        return ids;
    };
    const FlatListHeader = () => {
        // console.log('render');
        let subCategoryData = productCategories.data?.rows?.filter(
            c =>
                (c.parentId > 0 &&
                    getParentIds().includes(c.parentId) && // first child category
                    active === 0) ||
                (active > 0 && active === c.parentId),
        );
        let parentCategoryData = productCategories.data?.rows?.filter((c: any) => c.parentId === 0);
        // console.log('subCategoryData', subCategoryData.length);
        return (
            <>
                {useMemo(
                    () => (
                        <View paddingH-20 style={styles.categoryContainer}>
                            <FlatList
                                data={parentCategoryData}
                                renderItem={renderCategoryItem}
                                horizontal
                                pagingEnabled
                                inverted={I18nManager.isRTL && Platform.OS == 'android' ? true : false}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    ),
                    [parentCategoryData],
                )}
                {useMemo(
                    () => (
                        <View
                            paddingV-15
                            paddingH-10
                            // style={{borderWidth: 1, borderColor: 'red'}}
                        >
                            {productCategories.data?.rows ? (
                                <Carousel
                                    data={subCategoryData}
                                    renderItem={renderSubCategoryItem}
                                    sliderWidth={width}
                                    itemWidth={width / 3}
                                    inactiveSlideScale={1}
                                    inactiveSlideOpacity={1}
                                    autoplayDelay={3000}
                                    autoplayInterval={6000}
                                    loop
                                    autoplay
                                />
                            ) : null}
                        </View>
                    ),
                    [subCategoryData],
                )}
            </>
        );
    };

    const isLoaded = () => {
        if (
            (vendors.data?.rows?.length >= 0 && productCategories.data?.rows?.length >= 0) ||
            !initializing ||
            vendors.error != null
        ) {
            initializing = false;
            return true;
        }
        return false;
    };

    // let subCategoryData = productCategories.data?.rows?.filter(
    //   (c) =>
    //     (c.parentId > 0 &&
    //       getParentIds().includes(c.parentId) && // first child category
    //       active === 0) ||
    //     (active > 0 && active === c.parentId),
    // );
    // let parentCategoryData = productCategories.data?.rows?.filter(
    //   (c: any) => c.parentId === 0,
    // );

    return (
        <>
            {!isLoaded() && <SkeletonHome />}
            <View backgroundColor={Colors.light} flex style={[!isLoaded() ? {width: 0, height: 0, opacity: 0} : {}]}>
                <HeaderSearch
                    title={t('Search for ...')}
                    page="home"
                    showChat
                    // SearchComponent={HomeSearch}
                />
                <FlatList
                    bounces={false}
                    style={{zIndex: -1}}
                    ListHeaderComponent={FlatListHeader()}
                    data={vendors.data?.rows}
                    keyboardShouldPersistTaps="handled"
                    renderItem={renderVendorItem}
                    ListFooterComponent={vendors.loading ? <Spinner /> : null}
                    // ListEmptyComponent={vendors.loading ? <Spinner /> : <EmptyResult />}
                    scrollEventThrottle={250}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (!vendors.loading && vendors.data?.hasMore) {
                            //onLoadMore();
                            setVariables({
                                ...variables,
                                skip: variables.skip + variables.take,
                            });
                        }
                    }}
                />

                <BottomTabsBg onHomeClick={() => {}} />
            </View>
        </>
    );
};

Home.screenName = 'Kartonah.Screens.Home';

export default Home;
