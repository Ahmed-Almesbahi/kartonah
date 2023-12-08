import React, {useEffect, useRef, useState, memo} from 'react';
import {TextField, Text, View, Button, Colors, TouchableOpacity} from 'react-native-ui-lib';
import {useDispatch, useSelector} from 'react-redux';
import styles from 'theme/styles';
import {ProductItemType} from 'typescript/types';
import Tools from 'utils/Tools';
import {actions} from '../app-redux/reducers/cart';
import analytics from '@react-native-firebase/analytics';

const Increament = ({item, product, index}: {item: any; product: ProductItemType; index: number}) => {
    const qt = product.quantityStep;
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.cartItems);

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

    const _item = cartItems.find(ci => compareCartItem(ci, product.id, item.colour?.id));

    const [value, setValue] = useState(_item?.quantity ? _item.quantity : 0);

    // const prevValueRef = useRef();
    // useEffect(() => {
    //   prevValueRef.current = value;
    // });
    // const prevValue = prevValueRef.current;

    // useEffect(() => {
    //   // console.log(`${value}, before: ${prevValue}`);
    //   if (value > prevValue) {
    //     actions.addCartItem(
    //       dispatch,
    //       Tools.getCartProduct(product, item, value + qt),
    //       Tools.getCartVariation(product, item),
    //     );
    //   } else if (value < prevValue) {
    //     actions.removeCartItem(
    //       dispatch,
    //       Tools.getCartProduct(product, item, value - qt),
    //       Tools.getCartVariation(product, item),
    //     );
    //   }
    // }, [value]);

    return (
        <>
            <View>
                <TouchableOpacity
                    paddingH-10
                    paddingT-10
                    onPress={() => {
                        actions.addCartItem(
                            dispatch,
                            Tools.getCartProduct(product, item, value + qt),
                            Tools.getCartVariation(product, item),
                        );
                        setValue(value + qt);
                        analytics().logAddToCart({
                            currency: 'USD',
                            items: [
                                {
                                    item_id: product?.id.toString(),
                                    item_brand: product?.vendor?.brandName,
                                    // item_category: product?.prdctcats[0]?.elment_trans[0]?.title,
                                    item_name: product?.title,
                                    item_variant: item?.colour?.id.toString(),
                                    quantity: value + qt,
                                },
                            ],
                            value: product.regularPrice,
                        });
                    }}>
                    <Button
                        avoidMinWidth
                        // outline
                        avoidInnerPadding
                        backgroundColor={Colors.white}
                        style={[styles.increamentVButton0, value > 0 || index == 0 ? styles.increamentVButtonTop : {}]}
                        outlineColor={Colors.secondary}
                        onPress={() => {
                            actions.addCartItem(
                                dispatch,
                                Tools.getCartProduct(product, item, value + qt),
                                Tools.getCartVariation(product, item),
                            );
                            setValue(value + qt);
                            analytics().logAddToCart({
                                currency: 'USD',
                                items: [
                                    {
                                        item_id: product?.id.toString(),
                                        item_brand: product?.vendor?.brandName,
                                        // item_category:
                                        // product?.prdctcats[0]?.elment_trans[0]?.title,
                                        item_name: product?.title,
                                        item_variant: item?.colour?.id?.toString(),
                                        quantity: value + qt,
                                    },
                                ],
                                value: product.regularPrice,
                            });
                        }}>
                        <Text text70 margin-0 secondary>
                            +
                        </Text>
                    </Button>
                </TouchableOpacity>

                {(value > 0 || index == 0) && (
                    <>
                        <View paddingH-10>
                            <TextField
                                style={styles.increamentVField}
                                hideUnderline
                                value={String(value)}
                                enableErrors={false}
                                editable={false}
                            />
                        </View>

                        <TouchableOpacity
                            paddingH-10
                            paddingB-10
                            onPress={() => {
                                let _qty = value - qt;
                                if (_qty >= 0) {
                                    actions.removeCartItem(
                                        dispatch,
                                        Tools.getCartProduct(product, item, value - qt),
                                        Tools.getCartVariation(product, item),
                                    );
                                    setValue(value - qt);
                                }
                            }}>
                            <Button
                                avoidMinWidth
                                avoidInnerPadding
                                // outline
                                backgroundColor={Colors.white}
                                style={[styles.increamentVButton0, styles.increamentVButtonBottom]}
                                outlineColor={Colors.secondary}
                                onPress={() => {
                                    let _qty = value - qt;
                                    if (_qty >= 0) {
                                        actions.removeCartItem(
                                            dispatch,
                                            Tools.getCartProduct(product, item, value - qt),
                                            Tools.getCartVariation(product, item),
                                        );
                                        setValue(value - qt);
                                    }
                                }}>
                                <Text text70 seondary>
                                    -
                                </Text>
                            </Button>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </>
    );
};

export default memo(Increament);
