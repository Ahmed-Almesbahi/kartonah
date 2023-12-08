import React from 'react';
import {View, Colors, KeyboardAwareScrollView, Text, Button} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import {useNavigation} from 'react-native-navigation-hooks';
import styles from 'theme/styles';
import {useSelector} from 'react-redux';

const Modal = ({title, content}) => {
    const {t} = useTranslation();
    const lang = useSelector(state => state.auth.contactLang);

    return (
        <View flex backgroundColor={Colors.white}>
            <Header showCloseModal white title={title} />

            <KeyboardAwareScrollView>{content}</KeyboardAwareScrollView>
        </View>
    );
};

Modal.screenName = 'Kartonah.Screens.Modal';

Modal.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Modal;
