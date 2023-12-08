import React from 'react';
import Card from 'react-native-ui-lib/card';
import Text from 'react-native-ui-lib/text';
import View from 'react-native-ui-lib/view';
import Button from 'react-native-ui-lib/button';
import {Colors} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import Tools from 'utils/Tools';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../app-redux/reducers/cart';
import {toast} from 'utils/helper';
import {couponsRow} from 'typescript/api.types';
import moment from 'moment';

const CouponItem = ({item}: {item: couponsRow}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const couponId = useSelector(state => state.cart.couponId);

    return (
        <Card style={styles.couponCard} borderRadius={10} marginH-10 marginB-10 elevation={0}>
            <View flex row>
                <View
                    style={styles.dicountTitleContainer}
                    backgroundColor={item.couponsUsed.length ? '#41484F' : Colors.primary}
                    flex
                />
                <View centerV margin-10 flex-5>
                    <View style={styles.discountTextContainer} row>
                        <Text text1 textMuted>
                            {t('discountText1')}{' '}
                        </Text>
                        <Text text1 secondary>
                            {item.description}%{' '}
                        </Text>
                        <Text text1 textMuted>
                            {t('discountText2')}{' '}
                        </Text>
                        <Text text1 secondary>
                            {Tools.getCurrecyFormatted(item.maximumAmount)}{' '}
                        </Text>
                    </View>
                    <View row spread marginT-10>
                        <View>
                            <Text text80 textMuted>
                                {t('Expires')}
                            </Text>
                            <Text text1 secondary>
                                {moment(item.validTo).format('MMM Do YYYY')}
                            </Text>
                        </View>
                        {item.couponsUsed.length || couponId === item.id ? null : (
                            <Button
                                style={styles.buttonMini}
                                onPress={() => {
                                    actions.addCoupon(dispatch, {
                                        couponId: item.id,
                                        couponDiscount: item.couponValue,
                                        maximumAmount: item.maximumAmount,
                                        minimumValueToBeApplied: item.minimumValueToBeApplied,
                                    });
                                    toast('Added Successfully', 'success');
                                }}
                                backgroundColor={Colors.secondary}>
                                <Text text80 white>
                                    {t('redeem')}
                                </Text>
                            </Button>
                        )}
                    </View>
                </View>
            </View>
            <Text style={styles.discountTitle} uppercase white h2>
                {t('Discount')}
            </Text>
            <View style={[styles.coupounDot, styles.coupounDotRight]} />
            <View style={[styles.coupounDot, styles.coupounDotLeft]} />
        </Card>
    );
};

export default CouponItem;
