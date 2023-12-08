import React, {useEffect, useMemo, useRef, useState} from 'react';
import {ActivityIndicator, FlatList, ImageBackground, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {View, Colors, Text, Button, Image, Assets, Badge, PanningProvider, Dialog} from 'react-native-ui-lib';
import {
    createFavourites,
    createStoreView,
    deleteFavourites,
    FETCH_PRODUCT,
    FETCH_USER_PRICES,
    getProduct,
    getUserPrices,
} from 'app-redux/actions/api';
import {useDispatchRequest, useQuery} from '@redux-requests/react';
import StickyCart from 'components/StickyCart';
import {productsRow} from 'typescript/api.types';
import CarouselGallery from 'components/CarouselGallery';
import {useSelector} from 'react-redux';
import Animated from 'react-native-reanimated';
import {onScrollEvent, useValue} from 'react-native-redash';
// import Header from 'components/ProductHeader/Header';
import ProductInfo from 'components/Product/ProductInfo';
import ProductDesc from 'components/Product/ProductDesc';
import ProductSize from 'components/Product/ProductSize';
import ProductTag from 'components/Product/ProductTag';
import ProductRating from 'components/Product/ProductRating';
import AboutVendor from 'components/Product/AboutVendor';
import RelatedProduct from 'components/Product/RelatedProduct';
import ProductColors from 'components/Product/ProductColors';
import {useNavigation} from 'react-native-navigation-hooks';
import SkeletonProductDetails from 'components/Skeletons/SkeletonProductDetails';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import KartonahApi from 'kartonah-common/api';
import Header from 'components/Header';
import ProductPrice from 'components/Product/ProductPrice';
import {wishlistAddItem, wishlistRemoveItem} from 'app-redux/actions/fav';
import {Navigation} from 'react-native-navigation';
import Share from 'react-native-share';
import {usePush} from 'utils/hooks';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import ProductAfterVariations from './ProductAfterVariations';
import {CachedImage} from '@georstat/react-native-image-cache';
import {getProductImage} from 'utils/helper';

let initializing = true;

// const VendorRelatedProduct = async () => {
//     const vendorId = 3810;
//     const categoriesId = {categories: {some: {category: {id: {equals: 35}}}}};
//     // if (isLoaded()) {
//     const response = await useQuery({
//         type: KartonahApi.FETCH_PRODUCT,
//         action: KartonahApi.getVendorRelatedProduct,
//         variables: [vendorId, categoriesId],
//         // autoLoad: true,
//         autoReset: true,
//     });
//     console.log('response----------', response);
//     return response;
// };

const ProductDetails = ({data}: {data: productsRow}) => {
    const scrollView = useRef<Animated.ScrollView>(null);
    const [state, setState] = useState(false);
    const push = usePush();

    // const [activeSlide, setActiveSlide] = useState(0);

    const {showModal, pop} = useNavigation();
    const {t} = useTranslation();
    const favorites = useSelector(state => state.fav.filter(f => f.id === data?.id));
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
    //   variables: [data?.vendor?.id],
    //   autoLoad: true,
    // });

    const product = useQuery({
        type: KartonahApi.FETCH_PRODUCT,
        action: KartonahApi.getProduct,
        variables: [data?.id],
        autoLoad: true,
        autoReset: true,
    });

    const isLoaded = () => {
        if (
            product.data?.row?.id > 0
            // && userPrices.data?.rows?.length >= 0
            // ||!initializing
        ) {
            // initializing = false;
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

    const showDialog = () => {
        setState(true);
    };
    const hideDialog = () => {
        setState(false);
    };

    return (
        <>
            {/* {!isLoaded() && <SkeletonProductDetails />} */}
            <View
                flex
                backgroundColor={Colors.light}
                // style={[!isLoaded() ? {width: 0, height: 0, opacity: 0} : {}]}
            >
                
                <Animated.ScrollView
                    ref={scrollView}
                    // style={StyleSheet.absoluteFill}
                    scrollEventThrottle={1}
                    contentInsetAdjustmentBehavior="never"
                    {...{onScroll}}>
                    {useMemo(
                        () => (
                            <ProductInfo product={product} />
                        ),
                        [product.data],
                    )}
                    {/* {useMemo(
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
                    )} */}
                    {useMemo(
                        () => (
                            <FlatList
                                data={product?.data?.row?.colours}
                                initialNumToRender={2}
                                // initialScrollIndex={0}
                                horizontal
                                // pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                style={{backgroundColor: 'white', paddingHorizontal: 10}}
                                renderItem={({item}) => {
                                    const images = data => {
                                        return data.map(a => {
                                            return (
                                                <CachedImage
                                                    source={getProductImage(a.fileName, 720)}
                                                    thumbnailSource={getProductImage(a.fileName, 720)}
                                                    loadingImageComponent={ActivityIndicator}
                                                    resizeMode="cover"
                                                    style={{
                                                        flex: 1,
                                                        height: 433,
                                                        width: 300,
                                                        marginRight: 10,
                                                        position: 'relative',
                                                    }}
                                                />
                                            );
                                        });
                                    };
                                    return images(item.colour.files);
                                }}
                                keyExtractor={props => props.colour.id.toString()}
                            />
                        ),
                        [colorImages.images, product.data],
                    )}

                    {/* {useMemo(
                        () => (
                            <Carousel
                                data={
                                    colorImages.images.length > 0
                                        ? colorImages.images
                                        : product.data?.row?.colours[0]?.colour.files
                                }
                                renderItem={
                                    colorImages.images.length > 0
                                        ? colorImages.images
                                        : product.data?.row?.colours[0]?.colour.files.map(
                                              d => d?.fileName,
                                              // (d) => d.orjImgUrl,
                                          )
                                }
                                sliderWidth={500}
                                itemWidth={100}
                                inactiveSlideScale={1}
                                inactiveSlideOpacity={1}
                                loop
                                autoplay
                                pagingEnabled
                                onSnapToItem={index => setActiveSlide(index)}
                            />
                        ),
                        [colorImages.images, product.data],
                    )} */}

                    {useMemo(
                        () => (
                            <ProductPrice product={product} />
                        ),
                        [product.data],
                    )}

                    {useMemo(
                        () => (
                            <ProductColors
                                product={product}
                                scrollView={scrollView}
                                colorImages={colorImages}
                                setColorImages={setColorImages}
                            />
                        ),
                        [product.data, colorImages],
                    )}

                    {useMemo(
                        () => (
                            <View paddingB-35 bg-white>
                                <ProductDesc product={product} />
                            </View>
                        ),
                        [product.data],
                    )}
                    {product?.data?.row?.elment_trans[0]?.longDescription && (
                        <View backgroundColor={Colors.white}>
                            <Text marginH-20 marginV-10 h3 uppercase secondary>
                                {t('Description')}
                            </Text>
                            <View style={styles.fancySeparator} backgroundColor={Colors.light} />
                            <View padding-20>
                                <Text>{product?.data?.row?.elment_trans[0]?.longDescription}</Text>
                            </View>
                        </View>
                    )}
                    {/* {useMemo(
            () => (
              <ProductRating product={product} />
            ),
            [product.data?.row?.comments],
          )} */}
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
                            <AboutVendor product={product} vendorId={data?.vendor?.id} />
                        ),
                        [product.data],
                    )}
                    {useMemo(
                        () => (
                            <RelatedProduct product={product} />
                        ),
                        [product.data],
                    )}
                    <View style={{height: 85}} />
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
                        <StickyCart
                            // userPrices={userPrices.data?.rows}
                            showDialog={showDialog}
                            product={product.data?.row}
                            scrollView={scrollView}
                            backToParentPage={() => pop()}
                        />
                    ),
                    [product.data],
                )}
                <StatusBar backgroundColor={state ? '#7A8389' : 'white'} barStyle={'dark-content'} />

                <Dialog
                    visible={state}
                    onDismiss={() => hideDialog()}
                    width="100%"
                    height="88%"
                    bottom
                    panDirection={PanningProvider.Directions.DOWN}>
                    <ScrollView
                        style={{
                            height: '100%',
                            width: '100%',
                            backgroundColor: 'white',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                        }}>
                        <ProductAfterVariations hideDialog={hideDialog} isDialog={true} product={product.data?.row} />
                    </ScrollView>
                </Dialog>
            </View>
        </>
    );
};

ProductDetails.screenName = 'Kartonah.Screens.ProductDetails';

ProductDetails.options = {
    bottomTabs: {
        visible: false,
    },
};

export default ProductDetails;
