import React from 'react';
import {View, Colors, Text, Card, Image, Assets} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import OrderDetailsItemProduct from 'components/OrderDetailsItemProduct';

import {Order} from 'typescript/api.types';
import TrackOrderItemH from './TrackOrderItemH';
import Dash from 'react-native-dash';

const OrderDetailsItem = ({item, order}: {item: Order.OrderVendor; order: Order.RootObject}) => {
    const {t} = useTranslation();

    const getCurrentStage = () => {
        let x = {
            pending: 1,
            confirmed: 2,
            processing: 3,
            shipped: 4,
            delivered: 5,
            canceled: 6,
        };
        return x[item.orderStatus];
    };

    return (
        <Card borderRadius={0} marginT-10>
            <View marginH-20 centerV row spread>
                <View centerV row>
                    <Text marginV-10 bold secondary>
                        {t('Trader')}:{' '}
                        <Text bold secondary>
                            {item?.vendor.brandName}
                        </Text>
                    </Text>

                    <Image marginL-5 supportRTL tintColor={Colors.secondary} source={Assets.icons.cheveronRight} />
                </View>
                <Text text90 bold color={Colors.grey40}>
                    {t('Receipt No')}: {order?.id}-{item?.vendor.id}
                </Text>
            </View>
            <View style={styles.fancySeparator} backgroundColor={Colors.light} />
            <View padding-20 paddingB-0 row spread centerV>
                <TrackOrderItemH icon={Assets.icons.trackOrder1} stage={1} currentStage={getCurrentStage()} />
                <TrackOrderItemH icon={Assets.icons.trackOrder2} stage={2} currentStage={getCurrentStage()} />
                <TrackOrderItemH icon={Assets.icons.trackOrder3} stage={3} currentStage={getCurrentStage()} />
                <TrackOrderItemH icon={Assets.icons.trackShipped} stage={4} currentStage={getCurrentStage()} />
                <TrackOrderItemH icon={Assets.icons.trackOrder5} stage={5} currentStage={getCurrentStage()} />
                <Dash
                    dashLength={3}
                    dashThickness={1}
                    dashGap={1}
                    dashColor="#7E85A1"
                    style={{
                        // borderWidth:1,borderColor:'red',
                        // flexDirection: 'column',
                        position: 'absolute',
                        left: 35,
                        right: 35,
                        top: 47,
                        // bottom: 45,
                        zIndex: -1,
                    }}
                />
            </View>
            <View paddingB-20 paddingR-20 paddingL-20>
                {item.items.map(product => (
                    <OrderDetailsItemProduct key={product.id} vendor={item} item={product} order={order} />
                ))}
            </View>
        </Card>
    );
};

export default OrderDetailsItem;
