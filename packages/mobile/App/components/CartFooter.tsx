import * as React from 'react';
import {Colors, Text, Button, View} from 'react-native-ui-lib';
import Tools from 'utils/Tools';
import {auth as authScreen} from 'navigation/appRoots';
import {useNavigation} from 'react-native-navigation-hooks';
import styles from 'theme/styles';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useDispatchRequest} from '@redux-requests/react';
import {createCartOrder} from 'app-redux/actions/api';
import {actions} from 'app-redux/reducers/cart';
import {usePush} from 'utils/hooks';

interface CartFooterProps {}

const CartFooter: React.SFC<CartFooterProps> = () => {
    const [loading, setLoading] = React.useState(false);
    const push = usePush();
    const {t} = useTranslation();
    const auth = useSelector(state => state.auth);
    const cart = useSelector(state => state.cart);
    const canContinue = Tools.canContinueCart(cart);
    const dispatch = useDispatchRequest();

    return (
        <View marginT-20 padding-20 backgroundColor={Colors.white}>
            <View marginB-10 row spread>
                <Text text80>{t('Total')}</Text>
                <Text h2 bold>
                    {Tools.getCurrecyFormatted(Tools.getCartSubTotal(cart))}
                </Text>
            </View>
            {
                <Button
                    style={styles.button}
                    disabled={!canContinue}
                    loading={loading}
                    backgroundColor={Colors.secondary}
                    onPress={() => {
                        if (auth.token) {
                            if (auth.firstName != null && auth.firstName != undefined && auth.firstName != '') {
                                setLoading(true);
                                dispatch(
                                    createCartOrder({
                                        orderId: cart?.id,
                                        items: cart.cartItems
                                            .filter(c => c.status == 1)
                                            .map(c => ({
                                                productId: c.product.id,
                                                quantity: c.quantity,
                                                variationId: c.variation.id,
                                            })),
                                    }),
                                ).then(({data}) => {
                                    console.log('data', data);
                                    if (data?.row?.id) {
                                        actions.createNewOrderCart(dispatch, data.row.id);
                                    }
                                    push('Kartonah.Screens.Checkout');
                                });
                                setLoading(false);
                            } else {
                                // push('Kartonah.Screens.Register');
                                push('Kartonah.Screens.Register', {
                                    page: 'cart',
                                });
                            }
                        } else {
                            authScreen();
                        }
                    }}>
                    <Text text80 white>
                        {auth.token && auth.firstName != null && auth.firstName != undefined && auth.firstName != ''
                            ? t('Procced to Checkout')
                            : !auth.token
                            ? t('Login first')
                            : t('Please update your phone, first and last name')}
                        {/* {auth.token ? t('Procced to Checkout') : t('Login first')} */}
                    </Text>
                </Button>
            }
        </View>
    );
};

export default CartFooter;
