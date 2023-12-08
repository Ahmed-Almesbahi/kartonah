import React, {useEffect} from 'react';
import {View, Colors, KeyboardAwareScrollView, Button, Text, Image, Assets} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import Header from 'components/Header';
import {main} from 'navigation/appRoots';
import {useNavigation} from 'react-native-navigation-hooks';
import {Linking} from 'react-native';
import Intercom from 'react-native-intercom';
import Rate from 'react-native-rate';
import {STORE_RATING} from 'utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUpInterCom, shouldShowStoreRating} from 'utils/helper';
import {usePush} from 'utils/hooks';

const Checkout3 = ({orderId}) => {
    const {t} = useTranslation();
    const push = usePush();

    // useEffect(() => {
    //   setUpInterCom();
    // }, []);

    useEffect(() => {
        // Intercom.logEvent('purchased', {
        //   extra:
        //     t('Your order has been recorded successfully') +
        //     ' \n\n' +
        //     t(
        //       'You will be contacted as soon as possible to perform the payment process and shipping the order',
        //     ) +
        //     ' \n\n' +
        //     t('Order tracking number is') +
        //     ' #' +
        //     orderId,
        // });
        // Intercom.displayMessageComposerWithInitialMessage(
        //   t('Your order has been recorded successfully') +
        //     ' \n\n' +
        //     t(
        //       'You will be contacted as soon as possible to perform the payment process and shipping the order',
        //     ) +
        //     ' \n\n' +
        // t('Order tracking number is') +
        // ' #' +
        // orderId,
        // );
        // shouldShowStoreRating();
    }, []);

    const handleClick = () => {
        Intercom.displayMessageComposerWithInitialMessage(
            t('I just made new order. My Order tracking number is') + ' #' + orderId,
        );
        // Linking.canOpenURL('https://wa.link/g0jzai').then(supported => {
        //   if (supported) {
        //     Linking.openURL('https://wa.link/g0jzai');
        //   } else {
        //     console.log("Don't know how to open URI: " + 'https://wa.link/g0jzai');
        //   }
        // });
    };

    return (
        <View flex backgroundColor={Colors.white}>
            <Header title={t('Thank you')} currentStep={4} />
            <KeyboardAwareScrollView bounces={false}>
                <View padding-20>
                    <View flex center marginB-30>
                        <Image source={Assets.images.checkout} />
                    </View>
                    <Text secondary marginV-10 center h3>
                        {t('Your order has been recorded successfully')}
                    </Text>
                    <Text color={Colors.dark30} center text80 bold>
                        {t(
                            'You will be contacted as soon as possible to perform the payment process and shipping the order',
                        )}
                    </Text>
                    <Text color={Colors.dark30} marginB-10 center text80 bold>
                        {t('Order tracking number is')}{' '}
                        <Text text80 primary>
                            #{orderId}
                        </Text>
                    </Text>
                    <View row flex spread>
                        <Button
                            style={styles.button}
                            marginV-20
                            marginR-5
                            flex
                            fullWidth
                            backgroundColor={Colors.light}
                            onPress={() => main()}>
                            <Text secondary bold>
                                {t('Continue Shopping')}
                            </Text>
                        </Button>
                        <Button
                            style={styles.button}
                            marginV-20
                            marginL-5
                            flex
                            fullWidth
                            backgroundColor={Colors.secondary}
                            onPress={() => push('Kartonah.Screens.OrderDetails', {item: {id: orderId}})}>
                            <Text white bold>
                                {t('Track Order')}
                            </Text>
                        </Button>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            <View centerV marginH-20 useSafeArea marginB-40>
                <Button
                    style={styles.button}
                    fullWidth
                    // backgroundColor={'#59C920'}
                    onPress={() => handleClick()}>
                    {/* <Image
            // marginT-3
            marginH-5
            supportRTL
            // tintColor={Colors.dark40}
            source={Assets.icons.whatsapp}
          /> */}
                    <Text text70 bold>
                        {t('Contact Sales Now')}
                    </Text>
                </Button>
            </View>
        </View>
    );
};

Checkout3.screenName = 'Kartonah.Screens.Checkout3';

Checkout3.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Checkout3;
