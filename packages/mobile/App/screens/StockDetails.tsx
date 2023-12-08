import React, {useEffect, useMemo, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Colors, TouchableOpacity, Image, Assets, Button} from 'react-native-ui-lib';
import {createStoreView, FETCH_STOCK, FETCH_USER_PRICES, getStock, getUserPrices} from 'app-redux/actions/api';
import {useDispatchRequest, useQuery} from '@redux-requests/react';
import StickyCart from 'components/StickyCart';
import {productsRow} from 'typescript/api.types';
import CarouselGallery from 'components/CarouselGallery';
import {useSelector} from 'react-redux';
import Animated from 'react-native-reanimated';
import {onScrollEvent, useValue} from 'react-native-redash';
import Header from 'components/Header';
import ProductInfo from 'components/Product/ProductInfo';
import ProductDesc from 'components/Product/ProductDesc';
import ProductSize from 'components/Product/ProductSize';
import ProductTag from 'components/Product/ProductTag';
import AboutVendor from 'components/Product/AboutVendor';
import RelatedProduct from 'components/Product/RelatedProduct';
import ProductColors from 'components/Product/ProductColors';
import {useNavigation} from 'react-native-navigation-hooks';
import SkeletonStockDetails from 'components/Skeletons/SkeletonProductDetails';
import {UPLOAD_URL} from 'utils/constants';
import StickyCartSale from 'components/StickyCartSale';
import KartonahApi from 'kartonah-common/api';
import {Navigation} from 'react-native-navigation';

let initializing = true;

const StockDetails = ({data}: {data: productsRow}) => {
    const scrollView = useRef<Animated.ScrollView>(null);
    const {showModal} = useNavigation();
    // const [tabs, setTabs] = useState([
    //   {name: 'Info', anchor: 0},
    //   {name: 'Colors', anchor: 0},
    //   {name: 'Desc', anchor: 0},
    //   {name: 'Sizes', anchor: 0},
    //   {name: 'Tags', anchor: 0},
    //   {name: 'Vendor', anchor: 0},
    //   // {name: 'Related', anchor: 0},
    // ]);
    const y = useValue(0);
    const onScroll = onScrollEvent({y});

    const dispatch = useDispatchRequest();

    const userId = useSelector(state => state.auth.id);

    const [colorImages, setColorImages] = useState({
        selectedIndex: 0,
        images: [],
    });

    // useEffect(() => {
    //   dispatch(createStoreView(data?.id, 'product', userId));
    // }, []);

    // const userPrices = useQuery({
    //   type: FETCH_USER_PRICES,
    //   action: getUserPrices,
    //   variables: [data?.user?.id],
    //   autoLoad: true,
    // });

    const product = useQuery({
        type: KartonahApi.FETCH_STOCK,
        action: KartonahApi.getStock,
        variables: [data?.id],
        autoLoad: true,
        autoReset: true,
    });

    const isLoaded = () => {
        if (
            // (product.data?.row?.id > 0 && userPrices.data?.rows?.length >= 0) ||
            product.data?.row?.id > 0 ||
            !initializing
        ) {
            initializing = false;
            return true;
        }
        return false;
    };

    const share = async () => {
        await Share.open({
            title: t('Kartonah App'),
            // message: t('This product is a wonderfull, please check it out'),
            subject: product.data?.row?.title ? product.data?.row?.title : product.data?.row?.elment_trans[0]?.title,
            url: `https://kartonah.page.link/?link=https://kartonah.com/shop/product/${product?.data?.row?.id}&apn=com.justyol.android&isi=1495089082&ibi=com.kartonah.App`,
            //
        });
    };

    return (
        <>
            {!isLoaded() && <SkeletonStockDetails />}
            <View flex backgroundColor={Colors.light} style={[!isLoaded() ? {width: 0, height: 0, opacity: 0} : {}]}>
                <Header
                    showBack
                    white
                    actions={
                        <>
                            <Button
                                link
                                marginR-20
                                onPress={() => {
                                    Navigation.popToRoot('Kartonah.Screens.Home2', {
                                        bottomTabs: {currentTabIndex: 3},
                                    });
                                }}>
                                <Image supportRTL source={Assets.icons.cart} />
                                {/* {getTotal() > 0 && (
                            <Badge
                                label={getTotal().toString()}
                                style={{position: 'absolute', right: -10, top: -5}}
                                backgroundColor={Colors.red30}
                                size={'small'}
                            />
                        )} */}
                            </Button>
                        </>
                    }
                />
                <Animated.ScrollView
                    ref={scrollView}
                    // style={StyleSheet.absoluteFill}
                    scrollEventThrottle={1}
                    contentInsetAdjustmentBehavior="never"
                    {...{onScroll}}>
                    {useMemo(
                        () => (
                            <CarouselGallery
                                images={
                                    colorImages.images.length > 0
                                        ? colorImages.images
                                        : product.data?.row?.colours[0]?.colour.files.map(
                                              d => d?.fileName,
                                              // (d) => d.orjImgUrl,
                                          )
                                }
                            />
                        ),
                        [colorImages.images, product.data],
                    )}
                    {useMemo(
                        () => (
                            <ProductInfo product={product} userPrices={[]} stocks={true} />
                        ),
                        // [product.data, userPrices],
                        [product.data],
                    )}
                    {useMemo(
                        () => (
                            <ProductColors
                                product={product}
                                scrollView={scrollView}
                                colorImages={colorImages}
                                stocks={true}
                                setColorImages={setColorImages}
                            />
                        ),
                        [product.data, colorImages],
                    )}
                    {useMemo(
                        () => (
                            <ProductDesc product={product} />
                        ),
                        [product.data],
                    )}
                    {/* {useMemo(
                        () => (
                            <ProductSize product={product} />
                        ),
                        [product.data],
                    )} */}
                    {useMemo(
                        () => (
                            <ProductTag product={product} />
                        ),
                        [product.data],
                    )}
                    {useMemo(
                        () => (
                            <AboutVendor stocks={true} product={product} vendorId={data?.user?.id} />
                        ),
                        [product.data],
                    )}
                    {useMemo(
                        () => (
                            <RelatedProduct stocks={true} product={product} />
                        ),
                        [product.data],
                    )}
                </Animated.ScrollView>
                {/* {useMemo(
                    () => (
                        <Header
                            // {...{y, tabs, scrollView}}
                            {...{y}}
                            userId={userId}
                            data={data}
                        />
                    ),
                    [userId],
                )} */}

                {useMemo(
                    () => (
                        <StickyCartSale
                            // userPrices={userPrices.data?.rows}
                            product={product.data?.row}
                        />
                    ),
                    // [product.data, userPrices.data],
                    [product.data],
                )}
            </View>
        </>
    );
};

StockDetails.screenName = 'Kartonah.Screens.StockDetails';

StockDetails.options = {
    bottomTabs: {
        visible: false,
    },
};

export default StockDetails;
