import React, {RefObject, useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import {useValue, withTimingTransition} from 'react-native-redash';
// import {Feather as Icon} from '@expo/vector-icons';
// import {useSafeArea} from 'react-native-safe-area-context';

// import TabHeader from './TabHeader';
import {TabModel} from './Content';
import {useNavigation} from 'react-native-navigation-hooks';
import {FONT} from 'utils/constants';
import {Image, Assets, Button, Colors, View, Badge} from 'react-native-ui-lib';
import {useDispatch, useSelector} from 'react-redux';
import {createFavourites, deleteFavourites} from 'app-redux/actions/api';
import {wishlistAddItem, wishlistRemoveItem} from 'app-redux/actions/fav';
import Tools from 'utils/Tools';
import {Navigation} from 'react-native-navigation';
import Intercom from 'react-native-intercom';
import {setUpInterCom} from 'utils/helper';

const {height} = Dimensions.get('window');
const HEADER_IMAGE_HEIGHT = height / 2;

// const ICON_SIZE = 24;
const PADDING = 16;
export const MIN_HEADER_HEIGHT = 45;
const {interpolate, Extrapolate, useCode, greaterThan, set, block} = Animated;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    header: {
        flexDirection: 'row',
        height: MIN_HEADER_HEIGHT,
        alignItems: 'center',
        paddingHorizontal: PADDING,
    },
    title: {
        fontFamily: FONT,
        fontSize: 18,
        marginLeft: PADDING,
        flex: 1,
    },
});

interface HeaderProps {
    y: Animated.Value<number>;
    tabs: TabModel[];
    scrollView: RefObject<Animated.ScrollView>;
    userId: number;
    data: any;
}

export default ({y, tabs, scrollView, actions, userId, data}: HeaderProps) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.fav.filter(f => f.id === data?.id));
    const cart = useSelector(state => state.cart);
    const {pop, popToRoot} = useNavigation();
    const toggle = useValue<0 | 1>(0);
    // const insets = useSafeArea();
    const transition = withTimingTransition(toggle, {duration: 100});
    // const {top: paddingTop} = insets;
    // const translateX = interpolate(y, {
    //   inputRange: [0, HEADER_IMAGE_HEIGHT],
    //   outputRange: [-ICON_SIZE - PADDING, 0],
    //   extrapolate: Extrapolate.CLAMP,
    // });
    // const translateY = interpolate(y, {
    //   inputRange: [-100, 0, HEADER_IMAGE_HEIGHT],
    //   outputRange: [
    //     HEADER_IMAGE_HEIGHT - MIN_HEADER_HEIGHT + 100,
    //     HEADER_IMAGE_HEIGHT - MIN_HEADER_HEIGHT,
    //     0,
    //   ],
    //   extrapolateRight: Extrapolate.CLAMP,
    // });

    const _pop = () => {
        pop();
    };
    // useEffect(() => {
    //   setUpInterCom();
    // }, []);

    const opacity = transition;
    useCode(() => block([set(toggle, greaterThan(y, HEADER_IMAGE_HEIGHT))]), [toggle, y]);

    const getTotal = () => {
        let total = 0;
        cart.vendors.map(vendor => {
            total = total + Tools.totalQtyByVendor(vendor.id, cart.cartItems);
        });
        return total;
    };

    // {paddingTop}
    return (
        <Animated.View style={[styles.container]}>
            <View useSafeArea>
                <Animated.View
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        opacity,
                        backgroundColor: 'white',
                    }}
                />
                <View style={styles.header}>
                    <Button
                        avoidMinWidth
                        link
                        marginH-20
                        onPress={() => _pop()}
                        style={{opacity: transition.isNativelyInitialized, padding: 10}}>
                        <Image supportRTL source={Assets.icons.arrowBack} />
                        {/* <View>
              <Image supportRTL source={Assets.icons.arrowBack} />

              <Animated.View
                style={{...StyleSheet.absoluteFillObject, opacity: transition}}>
                <Image supportRTL source={Assets.icons.arrowBack} />

              </Animated.View>
            </View> */}
                    </Button>
                    <View style={{flex: 1}} />
                    {/* <Animated.Text
          style={[styles.title, {transform: [{translateX}, {translateY}]}]}>
          Miss Miu Europaallee
        </Animated.Text> */}
                    <Button link marginH-20 onPress={() => Intercom.displayMessenger()}>
                        <Image
                            supportRTL
                            source={Assets.icons.callCenter}
                            width={30}
                            height={30}
                            resizeMode="contain"
                        />
                    </Button>
                    <Button
                        link
                        onPress={() => {
                            favorites.length > 0
                                ? dispatch(deleteFavourites(data?.id))
                                : dispatch(createFavourites({userId: userId, productId: data.id}));

                            favorites.length > 0
                                ? dispatch(wishlistRemoveItem(data?.id))
                                : dispatch(wishlistAddItem(data));
                        }}
                        backgroundColor={favorites.length ? Colors.secondary : Colors.white}>
                        <Image
                            source={favorites.length > 0 ? Assets.icons.heartSelected : Assets.icons.heart}
                            style={{width: 27, height: 25}}
                            resizeMode="contain"
                        />
                    </Button>
                    <Button
                        link
                        marginH-20
                        onPress={() => {
                            Navigation.popToRoot('Kartonah.Screens.Home2', {
                                bottomTabs: {currentTabIndex: 3},
                            });
                        }}>
                        <Image supportRTL source={Assets.icons.cart} />
                        {getTotal() > 0 && (
                            <Badge
                                label={getTotal().toString()}
                                style={{position: 'absolute', right: -10, top: -5}}
                                backgroundColor={Colors.red30}
                                size={'small'}
                            />
                        )}
                    </Button>
                    {/* <Icon name="heart" size={ICON_SIZE} color="white" /> */}
                </View>
                {/* <TabHeader {...{y, transition, tabs, scrollView}} /> */}
            </View>
        </Animated.View>
    );
};
