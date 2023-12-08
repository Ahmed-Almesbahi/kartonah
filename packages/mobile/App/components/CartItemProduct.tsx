import React from 'react';
import {View, Text, Checkbox, Image, Drawer, Assets, Colors, TouchableOpacity} from 'react-native-ui-lib';
import styles from 'theme/styles';
import IncreamentH from 'components/IncrementH';
import {UPLOAD_URL} from 'utils/constants';
import Tools from 'utils/Tools';
import {useNavigation} from 'react-native-navigation-hooks';
import {actions} from '../app-redux/reducers/cart';
import {useDispatch} from 'react-redux';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {ImageBackground} from 'react-native';
import {usePush} from 'utils/hooks';

const CartItemProduct = ({item, addRef, index, onSwipeableWillOpen}) => {
    const {showOverlay} = useNavigation();
    const push = usePush();
    const dispatch = useDispatch();

    let obj = {
        icon: Assets.icons.delete,
        style: {paddingVertical: 10},
        background: Colors.red30,
        onPress: () => {
            showOverlay('Kartonah.Overlay.AlertDelete', {
                onConfirm: () => {
                    actions.deleteCartItem(dispatch, item.product, item.variation, item.quantity * item.regularPrice);
                },
            });
        },
    };
    return (
        <Drawer
            itemsIconSize={15}
            rightItems={[obj]}
            leftItem={obj}
            ref={r => addRef(r, index)}
            index={index} // sent for the 'closeLast' functionality
            onSwipeableWillOpen={onSwipeableWillOpen} // sent for the 'closeLast' functionality
        >
            <View padding-20 row bg-white centerV>
                <Checkbox
                    value={item?.status == 1 ? true : false}
                    onValueChange={(value: number) => {
                        actions.updateStatus(dispatch, item.product, item.variation, value);
                    }}
                />
                <TouchableOpacity
                    marginL-10
                    style={[{width: 60}]}
                    onPress={() => {
                        push('Kartonah.Screens.ProductDetails', {
                            data: {
                                ...item.product,
                                id: item?.product?.id,
                                user: {
                                    id: item?.variation?.id,
                                },
                            },
                        });
                    }}>
                    <ImageBackground
                        source={{uri: `${item.product.mainPhoto}`}}
                        // source={{uri: `${item.product.mainPhoto}`}}
                        // style={styles.productCartImage}
                        style={{
                            width: '100%',
                            height: 60,
                            // padding: 20,
                            // paddingVertical: 40,
                            overflow: 'hidden', // prevent image overflow the container
                            borderRadius: 10,
                            borderWidth: 3,
                            borderColor: Colors.rgba(Colors.dark10, 0.1),
                            // paddingVertical: 3,
                        }}
                        imageStyle={{
                            marginTop: -3,
                            resizeMode: 'cover',
                            height: 100, // the image height
                            // top: undefined,
                            bottom: undefined,
                            borderRadius: 10,

                            // position: 'absolute',
                        }}
                    />
                </TouchableOpacity>
                <View spread flex marginL-10>
                    <TouchableOpacity
                        onPress={() => {
                            push('Kartonah.Screens.ProductDetails', {
                                data: {
                                    ...item.product,
                                    id: item?.product?.id,
                                    user: {
                                        id: item?.variation?.id,
                                    },
                                },
                            });
                        }}>
                        <Text text80>{item.product?.title}</Text>
                    </TouchableOpacity>
                    <View row spread>
                        <View>
                            <Text text90>
                                Per unit :
                                <Text bold>{Tools.getPriceWithCurrecyFormatted(item.product?.regularPrice)}</Text>
                            </Text>
                            <Text text90>
                                Total :
                                <Text bold>
                                    {Tools.getCurrecyFormatted(
                                        Tools.getPrice(item.product?.regularPrice, item.product?.weight, item.quantity),
                                    )}
                                </Text>
                            </Text>
                        </View>

                        <IncreamentH item={item} />
                    </View>
                </View>
            </View>
        </Drawer>
    );
};

export default gestureHandlerRootHOC(CartItemProduct);
