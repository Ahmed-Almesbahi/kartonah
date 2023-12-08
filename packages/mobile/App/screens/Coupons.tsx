import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {View, Colors, Text} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import {CouponItemType} from 'typescript/types';
import CouponItem from 'components/CouponItem';
// import {coupons} from 'data/demos';
import {fetchCoupons, fetchCouponsByUser, FETCH_COUPONS, FETCH_COUPONS_BY_USER} from 'app-redux/actions/api';
import {useQuery} from '@redux-requests/react';
import Query from 'components/Query';
import {useSelector} from 'react-redux';
import Spinner from 'components/Spinner';
import {couponsRow} from 'typescript/api.types';

const Coupons = () => {
    const {t} = useTranslation();
    const userId = useSelector(state => state.auth.id);

    const {data, error, loading, pristine} = useQuery({
        type: FETCH_COUPONS,
        action: fetchCoupons,
        variables: [],
        autoLoad: true,
    });
    // const userCoupons = useQuery({
    //   type: FETCH_COUPONS_BY_USER,
    //   action: fetchCouponsByUser,
    //   variables: [userId],
    //   autoLoad: true,
    // });
    const FlatListHeader = (
        <Text margin-10 text80>
            {t('Select just one coupon')}
        </Text>
    );
    const renderCouponItem = ({item}: {item: couponsRow}) => <CouponItem key={item.id} item={item} />;

    // const getData = (allCoupons, allUserCoupons) => {
    //   if (allUserCoupons.data?.rows?.length == 0 || !allUserCoupons.data) {
    //     return allCoupons;
    //   }
    //   return allCoupons.map(c => {
    //     let found = allUserCoupons.find(cc => cc.id == c.id);
    //     if (found) {
    //       return {...c, used: true};
    //     } else {
    //       return c;
    //     }
    //   });
    // };
    // userCoupons.data.rows
    return (
        <View backgroundColor={Colors.light} flex>
            <Header showBack white title={t('My Coupons')} />
            {loading || pristine ? (
                <Spinner />
            ) : data.rows?.length == 0 ? (
                <View flex centerV centerH>
                    <Text text80>{t('No results found')}</Text>
                </View>
            ) : (
                <FlatList
                    ListHeaderComponent={FlatListHeader}
                    bounces={false}
                    data={data.rows}
                    renderItem={renderCouponItem}
                />
            )}
        </View>
    );
};

Coupons.screenName = 'Kartonah.Screens.Coupons';

Coupons.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Coupons;
