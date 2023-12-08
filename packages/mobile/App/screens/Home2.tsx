// third party
import React, {useEffect, useMemo, useState} from 'react';
import {
    FlatList,
    Dimensions,
    DeviceEventEmitter,
    I18nManager,
    Platform,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import {View, Colors, Assets, Image, TouchableOpacity, Carousel, Text, Button} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import Intercom from 'react-native-intercom';
import messaging from '@react-native-firebase/messaging';
import {useNavigation} from 'react-native-navigation-hooks';
import {CachedImage} from '@georstat/react-native-image-cache';
import {useQuery} from '@redux-requests/react';
import {useDispatch, useSelector} from 'react-redux';

// application
import HeaderSearch from 'components/HeaderSearch';
import KartonahApi from 'kartonah-common/api';
import styles from 'theme/styles';
import BottomTabsBg from 'components/BottomTabsBg';
import SkeletonHome from 'components/Skeletons/SkeletonHome';
import HomeSearch from 'components/HomeSearch';
import {setUpInterCom} from 'utils/helper';
import {usePush} from 'utils/hooks';
import {UPLOAD_URL} from 'utils/constants';
import ProductItem from 'components/ProductItem';
import ProductItemSmall from 'components/ProductItemSmall';
import VendorItem from 'components/VendorItem';
import VendorItemHome from 'components/VendorItemHome';
import ProductItemSmallSale from 'components/ProductItemSmallSale';
import ProductItemSale from 'components/ProductItemSale';
import {Navigation} from 'react-native-navigation';

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

const Home2 = props => {
    const {t} = useTranslation();
    const push = usePush();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);
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
        requestUserPermission();
    }, []);

    // useEffect(() => {
    //     const unsubscribe = DeviceEventEmitter.addListener('onPressHome', e => {
    //         //task: when i choose subcategory if i click on home button must back me to default situation
    //         // reset all
    //         if (active > 0 || activeSub > 0) {
    //             dispatch(resetRequests([FETCH_VENDORS_BY_CATEGORY]));
    //             setActive(0);
    //             setActiveSub(0);
    //             setVariables({...defaultVariables, i: Math.random()});
    //         }
    //     });
    //     return () => {
    //         // Make sure to unregister the listener during cleanup
    //         unsubscribe.remove();
    //     };
    // }, [active, activeSub]);

    const home = useQuery({
        type: KartonahApi.FETCH_HOME,
        action: KartonahApi.getHome,
        variables: [],
        autoLoad: true,
    });

    const isLoaded = () => {
        if (home.data?.banners?.length >= 0 || !initializing || home.error != null) {
            initializing = false;
            return true;
        }
        return false;
    };

    const {data} = home;

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
                <ScrollView>
                    {useMemo(
                        () => (
                            <View style={{height: 200}}>
                                <Carousel
                                    containerStyle={{}}
                                    loop
                                    autoplay={true}
                                    autoplayInterval={3000}
                                    pageWidth={Dimensions.get('window').width}
                                    initialPage={0}
                                    pageControlPosition={Carousel.pageControlPositions.UNDER}
                                    pagingEnabled
                                    allowAccessibleLayout>
                                    {data?.banners?.map((banner, i) => {
                                        return (
                                            <TouchableOpacity
                                                key={i}
                                                bg-white
                                                style={{width: '100%', height: 170}}
                                                onPress={() => {
                                                    switch (banner.type) {
                                                        case 'product':
                                                            push('Kartonah.Screens.ProductDetails', {
                                                                data: {id: banner.targetId},
                                                            });
                                                            break;
                                                    }
                                                }}>
                                                <CachedImage
                                                    source={banner.elment_trans[0].url}
                                                    thumbnailSource={banner.elment_trans[0].url}
                                                    loadingImageComponent={ActivityIndicator}
                                                    resizeMode="contain"
                                                    style={{
                                                        flex: 1,
                                                        // width: Dimensions.get('window').width,
                                                        height: Dimensions.get('window').width * 1.5,
                                                    }}
                                                />
                                            </TouchableOpacity>
                                        );
                                    })}
                                </Carousel>
                            </View>
                        ),
                        [data],
                    )}

                    {useMemo(
                        () => (
                            <View>
                                <View row spread paddingH-10>
                                    <Text text70>{t('Kartonah Categories')}</Text>
                                    <Button
                                        link
                                        onPress={() => {
                                            // push('Kartonah.Screens.CategoriesVendors', {
                                            //     categoriesIds: [],
                                            //     skip: 0,
                                            // });
                                            Navigation.popToRoot('Kartonah.Screens.Home2', {
                                                bottomTabs: {currentTabIndex: 1},
                                            });
                                        }}>
                                        <Text text70>{t('View All')}</Text>
                                    </Button>
                                </View>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    bounces={false}
                                    data={data?.categories}
                                    renderItem={({item}) => (
                                        <TouchableOpacity
                                            onPress={() => {
                                                push('Kartonah.Screens.CategoriesVendors', {
                                                    categoriesIds: [{id: item.id, label: item?.elment_trans[0]?.title}],
                                                    skip: 0,
                                                });
                                            }}
                                            style={styles.categoryItemImageCardContanier}>
                                            <View paddingL-10>
                                                <CachedImage
                                                    source={`${UPLOAD_URL}${item.photo}`}
                                                    thumbnailSource={`${UPLOAD_URL}${item.photo}`}
                                                    loadingImageComponent={ActivityIndicator}
                                                    resizeMode="contain"
                                                    style={{
                                                        borderRadius: 10,
                                                        backgroundColor: Colors.secondary,
                                                        width: 125,
                                                        height: 95,
                                                    }}
                                                />
                                            </View>
                                            <Text marginV-10 center text80 color={Colors.secondary}>
                                                {item.elment_trans[0]?.title}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                    horizontal
                                />
                            </View>
                        ),
                        [data],
                    )}

                    <View bg-white paddingT-20 paddingB-10 paddingL-10>
                        <Text text70 marginB-10>
                            {t('New Items')}
                        </Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            bounces={false}
                            data={data?.recentProducts}
                            renderItem={({item}) => <ProductItemSmall key={item.id} item={item} />}
                            horizontal
                        />
                    </View>

                    <View bg-white paddingT-20 paddingB-10 paddingL-10 marginT-10>
                        <Text text70 marginB-10>
                            {t('New Vendors')}
                        </Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            bounces={false}
                            data={data?.newVendors}
                            renderItem={({item}) => <VendorItemHome key={item.id} item={item} categoriesIds={[]} />}
                            horizontal
                        />
                    </View>

                    <View bg-white paddingT-20 paddingB-10 paddingL-10 marginT-10>
                        <View row spread paddingH-10 marginB-10>
                            <Text text70>{t('Stock Sale')}</Text>
                            <Button
                                link
                                onPress={() => {
                                    push('Kartonah.Screens.Sales');
                                }}>
                                <Text text70>{t('View All')}</Text>
                            </Button>
                        </View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            bounces={false}
                            data={data?.hotStocks}
                            renderItem={({item}) => <ProductItemSale key={item.id} item={item} />}
                            horizontal
                        />
                    </View>

                    <View marginT-20 marginB-20>
                        <Text text70 marginL-10 marginB-10>
                            {t('Top Vendors')}
                        </Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            bounces={false}
                            data={data?.topVendors}
                            renderItem={({item}) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        push('Kartonah.Screens.VendorDetails', {
                                            vendor: item,
                                            // categoriesIds: [{id: item.id, label: item?.elment_trans[0]?.title}],
                                            categoriesIds: [],
                                            skip: 0,
                                        });
                                    }}
                                    style={styles.categoryItemImageCardContanier}>
                                    <View paddingL-15>
                                        <CachedImage
                                            source={`${UPLOAD_URL}${item.logo}`}
                                            thumbnailSource={`${UPLOAD_URL}${item.logo}`}
                                            loadingImageComponent={ActivityIndicator}
                                            resizeMode="contain"
                                            style={{
                                                overflow: 'hidden',
                                                borderRadius: 5,
                                                backgroundColor: Colors.secondary,
                                                width: 83,
                                                height: 83,
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>
                            )}
                            horizontal
                        />
                    </View>

                    <View bg-white paddingT-20 paddingB-10 paddingL-10 marginT-10>
                        <Text text70 marginL-10>
                            {t('Hot Sale')}
                        </Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            bounces={false}
                            data={data?.hotProducts}
                            renderItem={({item}) => <ProductItemSmall layout="grid_v_2" key={item.id} item={item} />}
                            numColumns={2}
                        />
                    </View>
                </ScrollView>
                <BottomTabsBg onHomeClick={() => {}} />
            </View>
        </>
    );
};

Home2.screenName = 'Kartonah.Screens.Home2';

export default Home2;
