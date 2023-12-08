// third-libraries
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Colors, View, Text, Image, Assets} from 'react-native-ui-lib';
import LoginScreen from 'screens/Login';

// application
import styles from 'theme/styles';

const AccountLogin = () => {
    const {t} = useTranslation();
    return (
        <View centerV marginT-20>
            <LoginScreen independent={false} />
            <View row spread marginH-30 marginB-20>
                <View style={{maxWidth: 70}} center>
                    <Image source={Assets.icons.sign1} supportRTL />
                    <Text center marginT-10 text90>
                        {t('Sign in our app')}
                    </Text>
                </View>
                <Image source={Assets.icons.sign2} supportRTL marginT-30 />
                <View style={{maxWidth: 70}} center>
                    <Image source={Assets.icons.sign3} supportRTL />
                    <Text center marginT-10 text90>
                        {t('Make Your Order')}
                    </Text>
                </View>
                <Image source={Assets.icons.sign4} supportRTL />
                <View style={{maxWidth: 70}} center>
                    <Image source={Assets.icons.sign5} supportRTL />
                    <Text center marginT-10 text90>
                        {t('Receive And Enjoy')}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default AccountLogin;
