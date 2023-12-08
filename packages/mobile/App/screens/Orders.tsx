import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {View, Colors, KeyboardAwareScrollView, Text, Button, Image, Assets} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import {orders as dummyOrders} from 'data/demos';
import OrderItem from 'components/OrderItem';
import {useQuery} from '@redux-requests/react';
import {fetchOrders, FETCH_ORDERS} from 'app-redux/actions/api';
import {OrderType} from 'typescript/types';
import Spinner from 'components/Spinner';
import {Orders as Otypes} from 'typescript/api.types';
import EmptyResult from 'components/EmptyResult';
import KartonahApi from 'kartonah-common/api';

const Orders = () => {
    const {t} = useTranslation();
    const [page, setPage] = useState(0);
    const orders = useQuery({
        type: KartonahApi.FETCH_ORDERS,
        action: KartonahApi.fetchOrders,
        variables: [page],
        autoLoad: true,
    });

    const renderOrderItem = ({item}: {item: Otypes.Row}) => <OrderItem key={item.id} item={item} />;

    return (
        <View flex backgroundColor={Colors.light}>
            <Header showBack white title={t('My Orders')} />
            {/* <KeyboardAwareScrollView bounces={false}> */}
            <FlatList
                bounces={false}
                data={orders.data?.rows}
                // data={dummyOrders}
                renderItem={renderOrderItem}
                //Loading MOre
                ListFooterComponent={orders.loading ? <Spinner /> : null}
                contentContainerStyle={{flexGrow: 1}}
                ListEmptyComponent={
                    <EmptyResult
                        icon={<Image source={Assets.images.emptyOrder} />}
                        msg={
                            <>
                                <Text marginT-20 text60 color={Colors.dark40}>
                                    {t("You Haven't Placed")}
                                </Text>
                                <Text text60 color={Colors.dark40}>
                                    {t('Any Order Yet.')}
                                </Text>

                                <Text text80 color={Colors.dark40}>
                                    {t("Looks like you, haven't")}
                                </Text>
                                <Text text80 color={Colors.dark40}>
                                    {t('made your first order yet')}
                                </Text>
                            </>
                        }
                    />
                }
                // scrollEventThrottle={250}
                // onEndReachedThreshold={0.01}
                // onEndReached={() => {
                //   if (!orders.loading) {
                //     setPage(page + 1);
                //   }
                // }}
            />
            {/* </KeyboardAwareScrollView> */}
        </View>
    );
};

Orders.screenName = 'Kartonah.Screens.Orders';

Orders.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Orders;
