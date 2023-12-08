// third party
import React from 'react';
import {ListItem, View, Text, Button, Colors, TextField, Assets, Image} from 'react-native-ui-lib';
import {CachedImage} from '@georstat/react-native-image-cache';
import {ActivityIndicator, FlatList} from 'react-native';
import {useNameThatColor} from 'react-ntc';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from 'react-native-navigation-hooks';
import {Navigation} from 'react-native-navigation';
import {usePush} from 'utils/hooks';

// application
import Header from 'components/Header';
import {GetProductQuery} from 'kartonah-common/types/graphql';
import {getProductImage} from 'utils/helper';
import styles from 'theme/styles';
import {actions} from 'app-redux/reducers/cart';
import Tools from 'utils/Tools';
import ProductItem from 'components/ProductItem';

const ProductAfterVariations = ({
    product,
    onAddToCart,
    backToParentPage,
    hideDialog,
    isDialog,
}: {
    product: GetProductQuery['row'];
    onAddToCart: () => void;
    backToParentPage: () => void;
    hideDialog?: () => void;
    isDialog?: boolean;
}) => {
    const {t} = useTranslation();
    const {dismissModal} = useNavigation();
    const push = usePush();
    // const {dismissModal, push} = useNavigation();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems).filter(c => c.product.vendorId === product.vendor.id)
    const qt = product.quantityStep;

    const compareCartItem = (cartItem, productId, variationId) => {
        // warn(action.variation);
        if (variationId) {
            if (cartItem.variation) {
                return cartItem.product.id === productId && cartItem.variation.id === variationId;
            }
            return false;
        }

        return cartItem.product.id === productId;
    };

    const getTotalQty = items => {
        let qty = 0;
        items.map(i => {
            qty = qty + i.quantity;
        });
        return qty;
    };

    const getTotalColors = items => {
        let colors: Array<number> = [];
        items.map(i => {
            if (!colors.includes(i.variation.id)) {
                colors.push(i.variation.id);
            }
        });
        return colors.length;
    };
    const getTotalBeforeDiscount = items => {
        let amount = 0;
        items.map(i => {
            amount = amount + i.product.regularPrice * i.quantity;
        });
        return amount;
    };
    const getTotalAfterDiscount = items => {
        let amount = 0;
        items.map(i => {
            amount = amount + Tools.getPrice(i.product.regularPrice, i?.product?.weight) * i.quantity;
        });
        return (amount / 100) * (100 - getDiscount());
    };

    const getDiscount = () => {
        let percent = 0;
        product.vendor?.userPriceVariations?.map(i => {
            if (i.from <= getTotalQty(cartItems) && i.to >= getTotalQty(cartItems)) {
                percent = i.discount;
            }
        });
        return percent;
    };

    const renderProductItem = ({item}) => (
        <ProductItem
            onPress={() => {
                push('Kartonah.Screens.ProductDetails', {data: item});
                setTimeout(function () {
                    dismissModal();
                }, 500);
            }}
            key={item.id}
            item={item}
        />
    );
    return (
        <View flex backgroundColor="white" paddingB-90>
            <Header
                showCloseModal
                white
                title={t('More From') + ' ' + product?.vendor?.brandName}
                hideDialog={hideDialog}
                isDialog={isDialog === undefined ? false : isDialog}
            />

            <FlatList
                ListHeaderComponent={() =>
                    getTotalQty(cartItems) < product?.vendor.minBill && (
                        <View backgroundColor="#FEF0D5" marginB-10 marginT-10 marginH-10 padding-10 br20 row centerV>
                            <Image source={Assets.icons.error} marginH-10 style={{width: 30, height: 30}} />
                            <Text text80 flex>
                                {t('Current quantity does not meet the minimum requirement')}
                                {t(', please add more')}{' '}
                                <Text bold>{product?.vendor.minBill - getTotalQty(cartItems)}</Text> {t('units')}
                            </Text>
                        </View>
                    )
                }
                // stickyHeaderIndices={[0]}
                contentContainerStyle={styles.productFlatList}
                bounces={false}
                data={product?.vendor?.products}
                renderItem={renderProductItem}
                // ListFooterComponent={loading ? <Spinner /> : null}
                scrollEventThrottle={250}
                onEndReachedThreshold={0.01}
                // ListEmptyComponent={}
                // onEndReached={() => {
                //     if (!loading && products?.hasMore) {
                //         dispatch(setFilterOption('offset', productFilter.offset + productFilter.limit, 'product'));
                //     }
                // }}
                numColumns={2}
            />
            <View
                height={90}
                bg-white
                absB
                style={{
                    width: '100%',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,

                    elevation: 8,
                }}
                padding-20
                enableShadow>
                <View row spread>
                    <Button
                        flex
                        br10
                        marginR-5
                        label={t('Continue')}
                        backgroundColor={Colors.grey40}
                        onPress={() => {
                            dismissModal();
                            // push('Kartonah.Screens.CategoriesVendors', {
                            // backToParentPage();
                            backToParentPage();
                            // });
                        }}
                    />
                    <Button
                        flex
                        br10
                        marginL-5
                        label={t('View The Cart')}
                        backgroundColor={Colors.primary}
                        onPress={() => {
                            Navigation.popToRoot('Kartonah.Screens.Home2', {
                                bottomTabs: {currentTabIndex: 3},
                            });
                            // push('Kartonah.Screens.Checkout3');
                            dismissModal();
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

ProductAfterVariations.screenName = 'Kartonah.Screens.ProductAfterVariations';

ProductAfterVariations.options = {
    bottomTabs: {
        visible: false,
    },
};

export default ProductAfterVariations;
