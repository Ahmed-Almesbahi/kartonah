import React from 'react';

import {Text, View, Colors} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {StatusBar} from 'react-native';

const EmptyResult = ({msg, icon}: {msg?: any; icon?: any}) => {
    const {t} = useTranslation();

    return (
        <View flex centerV centerH>
            <StatusBar animated={true} backgroundColor="white" barStyle={'dark-content'} />
            {icon ? icon : null}
            {msg !== undefined ? msg : <Text text80>{t('No results found')}</Text>}
        </View>
    );
};

export default EmptyResult;
