import React, {useCallback} from 'react';
import {ActivityIndicator, Dimensions} from 'react-native';
import Card from 'react-native-ui-lib/card';
import Text from 'react-native-ui-lib/text';
import Image from 'react-native-ui-lib/image';
import Button from 'react-native-ui-lib/button';
import View from 'react-native-ui-lib/view';
import {AirbnbRating} from 'react-native-ratings';
import {AnimatedImage, Assets, Colors} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {ProductItemType} from 'typescript/types';
import {useTranslation} from 'react-i18next';
import {useNavigation} from 'react-native-navigation-hooks';
import {useDispatch, useSelector} from 'react-redux';
import {wishlistRemoveItem, wishlistAddItem} from '../app-redux/actions/fav';
import {cartAddItem} from 'app-redux/actions/cart';
import {productsRow} from 'typescript/api.types';
import Tools from 'utils/Tools';
import {createFavourites, deleteFavourites} from 'app-redux/actions/api';
import {getProductImage} from 'utils/helper';
import _debounce from 'lodash/debounce';
import _has from 'lodash/has';
import {CachedImage} from '@georstat/react-native-image-cache';
import {usePush} from 'utils/hooks';

const {width} = Dimensions.get('window');
const sideHeight = width / 1.4 - 20;
const sideWidth = width / 2 - 15;

const ProductItem = ({item, goTo, onPress}: {item: productsRow}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.fav.filter(f => f.id === item.id));

    const push = usePush();

    return (
        <Card
            borderRadius={5}
            style={styles.vendorProductItemCard}
            elevation={3}
            onPress={() => {
                if (onPress) {
                    onPress();
                } else {
                    if (goTo && goTo == 'vendor') {
                        push('Kartonah.Screens.VendorDetails', {vendor: item.vendor});
                    } else {
                        push('Kartonah.Screens.ProductDetails', {data: item});
                    }
                }
            }}
            width={sideWidth}>
            {_has(item, 'files[0].fileName') && (
                <CachedImage
                    source={getProductImage(item?.files[0]?.fileName, 720)}
                    thumbnailSource={getProductImage(item?.files[0]?.fileName, 400)}
                    loadingImageComponent={ActivityIndicator}
                    resizeMode="cover"
                    style={{
                        height: sideHeight,
                        borderRadius: 5,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0,
                        padding: 0,
                        margin: 0,
                        width: '100%',
                        borderWidth: 0,
                    }}
                />
            )}
            {/* <AnimatedImage
        containerStyle={{
          backgroundColor: '#EDEEF0',
          marginBottom: 0,
          borderRadius: 5,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          height: sideHeight,
          padding: 0,
          margin: 0,
          width: '100%',
          borderWidth: 0,
        }}
        style={{
          resizeMode: 'cover',
          height: sideHeight,
          borderRadius: 5,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          padding: 0,
          margin: 0,
          width: '100%',
          borderWidth: 0,
          // borderColor: 'red',
        }}
        source={{
          uri: getProductImage(item?.featured_images[0]?.fileName, 400),
          cache: 'force-cache',
        }}
        loader={<ActivityIndicator />}
        animationDuration={400}
      /> */}
            {/* <Card.Image
        height={sideHeight}
        width={sideWidth}
        style={styles.productItemImage}
        source={{uri: `${item?.featured_images[0]?.imgUrl}`}}
      /> */}
            <View paddingH-10>
                <Text marginV-5 numberOfLines={1} text70 secondary>
                    {item?.title.length < 50 ? `${item?.title}` : `${item?.title.substring(0, 50)}...`}
                </Text>
                {/* <View flex left>
        <AirbnbRating
          count={5}
          defaultRating={item.rate}
          size={10}
          isDisabled
          showRating={false}
          // ratingBackgroundColor="transparent"
          style={styles.productRating}
        />
      </View> */}

                {item.maxDiscount > 0 ? (
                    <Text marginB-5 text2 bold secondary>
                        {Tools.getPriceWithCurrecyFormatted(
                            item.regularPrice - item.regularPrice * (item.maxDiscount / 100),
                        )}{' '}
                        -{Tools.getPriceWithCurrecyFormatted(item.regularPrice)}{' '}
                    </Text>
                ) : (
                    <Text marginB-5 text2 bold secondary>
                        {Tools.getPriceWithCurrecyFormatted(item.regularPrice, item.weight)}
                    </Text>
                )}
                {/* <Button
        avoidMinWidth
        style={styles.productCardSalesButton}
        backgroundColor={Colors.primary}>
        <Text buttonSmal uppercase>
          {t('Sale')}
        </Text>
      </Button> */}

                {/* <Button
        onPress={() => push('Kartonah.Screens.ProductDetails', {data: item})}
        // onPress={() => dispatch(cartAddItem(item, [], 1))}
        style={styles.productCardCartButton}
        backgroundColor={Colors.secondary}>
        <Text white>{t('Add to cart')}</Text>
      </Button> */}
            </View>
            <Button
                onPress={() => {
                    favorites.length > 0 ? dispatch(deleteFavourites(item.id)) : dispatch(createFavourites(item));

                    favorites.length > 0 ? dispatch(wishlistRemoveItem(item?.id)) : dispatch(wishlistAddItem(item));
                }}
                link
                avoidMinWidth
                style={[
                    styles.productCardFavoriteButton,
                    favorites.length > 0 ? {backgroundColor: '#FABB27'} : {backgroundColor: 'white'},
                ]}>
                <Image
                    style={styles.productCardFavoriteIcon}
                    source={favorites.length > 0 ? Assets.icons.heartSelected2 : Assets.icons.oldheart}
                />
            </Button>
        </Card>
    );
};

export default ProductItem;
