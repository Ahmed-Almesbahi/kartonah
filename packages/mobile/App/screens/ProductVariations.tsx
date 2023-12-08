// third party
import React from 'react';
import {ListItem, View, Text, Button, Colors, TextField, Assets, Image} from 'react-native-ui-lib';
import {CachedImage} from '@georstat/react-native-image-cache';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {useNameThatColor} from 'react-ntc';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from 'react-native-navigation-hooks';
import {Navigation} from 'react-native-navigation';
import {ScrollView} from 'react-native';

// application
import Header from 'components/Header';
import {GetProductQuery} from 'kartonah-common/types/graphql';
import {getProductImage} from 'utils/helper';
import styles from 'theme/styles';
import {actions} from 'app-redux/reducers/cart';
import Tools from 'utils/Tools';

const ProductVariations = ({
    product,
    onAddToCart,
    componentId,
}: // backToParentPage,
{
    product: GetProductQuery['row'];
    onAddToCart: () => void;
    // backToParentPage: () => void;
}) => {
    const {t} = useTranslation();
    const {dismissModal} = useNavigation();
    const dispatch = useDispatch();
    // const cartItems = useSelector(state => state.cart.cartItems).filter(c => c.product?.id == product?.id);
    const cartItems = useSelector(state => state.cart.cartItems).filter(c => c.product.vendorId === product.vendor.id);
    const qt = product.quantityStep;

    // const onAddToCart = () => {
    //     setTimeout(() => {
    //         showModal(
    //             'Kartonah.Screens.ProductAfterVariations',
    //             {
    //                 product,
    //                 // onAddToCart: () => {},
    //             },
    //             {
    //                 modal: {
    //                     swipeToDismiss: false,
    //                 },
    //             },
    //         );
    //     }, 1000);
    // };

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

    return (
        <View flex backgroundColor="#EFF2F6">
            <Header showCloseModal white title={t('Variations')} />
            <View bg-white paddingB-20>
                <View
                    row
                    paddingH-20
                    marginT-20
                    paddingB-10
                    centerV
                    style={{borderBottomWidth: 2, borderBottomColor: '#EFF2F6'}}>
                    <CachedImage
                        source={getProductImage(product?.colours[0]?.colour?.files[0]?.fileName, 720)}
                        thumbnailSource={getProductImage(product?.colours[0]?.colour?.files[0]?.fileName, 400)}
                        loadingImageComponent={ActivityIndicator}
                        style={{
                            height: 74,
                            width: 67,
                            borderWidth: 1,
                            borderColor: '#EDEEF0',
                            borderRadius: 5,
                        }}
                    />

                    {product?.vendor?.userPriceVariations?.length > 0 ? (
                        <View marginV-10 row>
                            {product?.vendor?.userPriceVariations?.map(up => (
                                <View center flex>
                                    <Text marginB-10 text2 bold>
                                        {Tools.getCurrecyFormatted(
                                            product?.regularPrice - product?.regularPrice * (up?.discount / 100),
                                        )}
                                    </Text>
                                    <Text text80>
                                        {up.from} - {up.to} {t('Pieces')}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    ) : (
                        <Text text60 marginL-20>
                            {Tools.getPriceWithCurrecyFormatted(product?.regularPrice)}
                        </Text>
                    )}
                </View>
                <View backgroundColor={'#EFF2F6'} margin-10 paddingH-10 paddingV-5 centerV br20 row spread>
                    <Text h3 uppercase secondary>
                        {t('Item sizes')}
                    </Text>
                    <View row style={styles.wrapList} paddingT-5>
                        {product?.sizes?.map(item => (
                            <Text key={item.size.title} marginR-10 uppercase secondary text80>
                                {item.size.title}
                            </Text>
                        ))}
                    </View>
                </View>
            </View>
            <ScrollView>
                <FlatList
                    style={{flex: 1}}
                    data={product?.colours}
                    style={{backgroundColor: 'white'}}
                    renderItem={({item, index}) => {
                        const _item = cartItems.find(ci => compareCartItem(ci, product?.id, item.colour?.id));
                        const value = _item?.quantity ? _item.quantity : 0;
                        return (
                            <ListItem containerStyle={{borderWidth: 1, borderColor: 'red'}}>
                                <ListItem.Part left marginL-10>
                                    <CachedImage
                                        source={getProductImage(item?.colour?.files[0]?.fileName, 720)}
                                        thumbnailSource={getProductImage(item?.colour?.files[0]?.fileName, 400)}
                                        loadingImageComponent={ActivityIndicator}
                                        style={{
                                            height: 54,
                                            width: 47,
                                            borderWidth: 1,
                                            borderColor: '#EDEEF0',
                                            borderRadius: 5,
                                        }}
                                    />
                                </ListItem.Part>
                                <ListItem.Part middle marginH-20>
                                    <Text>{useNameThatColor(item.colour.code)}</Text>
                                </ListItem.Part>
                                <ListItem.Part right marginR-10>
                                    <Button
                                        avoidMinWidth
                                        outline
                                        style={[
                                            styles.increamentVButton0,
                                            {borderTopRightRadius: 0, borderBottomRightRadius: 0},
                                        ]}
                                        outlineColor={'#DDE0E8'}
                                        onPress={() => {
                                            let _qty = value - qt;
                                            if (_qty >= 0) {
                                                actions.removeCartItem(
                                                    dispatch,
                                                    Tools.getCartProduct(product, item, value - qt),
                                                    Tools.getCartVariation(product, item),
                                                );
                                            }
                                        }}>
                                        <Text text70 seondary>
                                            -
                                        </Text>
                                    </Button>
                                    <TextField
                                        style={[
                                            styles.increamentHTextField,
                                            {
                                                textAlign: 'center',
                                                backgroundColor: '#DDE0E8',
                                                marginHorizontal: 0,
                                                minWidth: 40,
                                                height: 30,
                                            },
                                        ]}
                                        hideUnderline
                                        value={String(value)}
                                        // keyboardType="numeric"
                                        enableErrors={false}
                                        editable={false}
                                        // onChangeText={(v) => {
                                        //   setValue(Number(v));
                                        // }}
                                    />
                                    <Button
                                        avoidMinWidth
                                        outline
                                        outlineColor={'#DDE0E8'}
                                        style={[
                                            styles.increamentVButton0,
                                            {borderTopLeftRadius: 0, borderBottomLeftRadius: 0},
                                        ]}
                                        // backgroundColor={Colors.secondary}
                                        onPress={() => {
                                            actions.addCartItem(
                                                dispatch,
                                                Tools.getCartProduct(product, item, value + qt),
                                                Tools.getCartVariation(product, item),
                                            );
                                        }}>
                                        <Text text70 margin-0>
                                            +
                                        </Text>
                                    </Button>
                                </ListItem.Part>
                            </ListItem>
                        );
                    }}
                    keyExtractor={(item, index) => item.colour.id || index}
                />
            </ScrollView>

            <View
                // flex-1
                // height={80}
                useSafeArea
                bg-white
                absB
                style={{
                    ...StyleSheet.absoluteFillObject,
                    top: undefined,
                    maxHeight: 400,
                    width: '100%',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,

                    elevation: 8,
                }}>
                <View padding-10>
                    {/* {getTotalQty(cartItems) < product?.vendor.minBill && (
                        <View backgroundColor="#FEF0D5" marginB-10 padding-10 br20 row centerV>
                            <Image source={Assets.icons.error} marginH-10 style={{width: 30, height: 30}} />
                            <Text text80 flex>
                                {t('Current quantity does not meet the minimum requirement')}
                                {t(', please add more')}{' '}
                                <Text bold>{product?.vendor.minBill - getTotalQty(cartItems)}</Text> {t('units')}
                            </Text>
                        </View>
                    )} */}
                    <View row spread>
                        <Text text80>
                            {t('Product Value')} ({getTotalColors(cartItems)} {t('Colors')}, {getTotalQty(cartItems)}{' '}
                            {t('items')})
                        </Text>
                        {/* <Text text60>2000 TR</Text> */}
                        <View row>
                            {getDiscount() > 0 && (
                                <Text
                                    text80
                                    color={Colors.tabColor}
                                    style={{textDecorationLine: 'line-through'}}
                                    marginR-10>
                                    {Tools.getCurrecyFormatted(
                                        cartItems.length > 0 ? getTotalBeforeDiscount(cartItems) : product.regularPrice,
                                    )}
                                </Text>
                            )}
                            {getDiscount() > 0 ? (
                                <Text text5 secondary bold>
                                    {Tools.getCurrecyFormatted(
                                        cartItems.length > 0 ? getTotalAfterDiscount(cartItems) : product.regularPrice,
                                    )}
                                </Text>
                            ) : (
                                <Text secondary text60>
                                    {Tools.getCurrecyFormatted(
                                        cartItems.length > 0 ? getTotalAfterDiscount(cartItems) : product.regularPrice,
                                    )}
                                </Text>
                            )}
                        </View>
                    </View>
                    <View row spread>
                        <Button
                            flex
                            br10
                            marginR-5
                            label={t('Checkout')}
                            backgroundColor={Colors.grey40}
                            onPress={() => {
                                Navigation.popToRoot('Kartonah.Screens.Home2', {
                                    bottomTabs: {currentTabIndex: 3},
                                });
                                Navigation.dismissAllModals();
                                // pop();
                                // dismissModal();
                            }}
                        />
                        <Button
                            flex
                            br10
                            marginL-5
                            label={t('Add to cart')}
                            backgroundColor={Colors.secondary}
                            onPress={() => {
                                Navigation.dismissModal(componentId);
                                // dismissModal();
                                // pop();
                                onAddToCart();
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

ProductVariations.screenName = 'Kartonah.Screens.ProductVariations';

ProductVariations.options = {
    bottomTabs: {
        visible: false,
    },
};

export default ProductVariations;
