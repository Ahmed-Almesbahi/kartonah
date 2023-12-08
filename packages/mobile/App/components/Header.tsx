import React, {useEffect} from 'react';
import {View, Button, Image, Assets, Text, Colors} from 'react-native-ui-lib';
import {useNavigation} from 'react-native-navigation-hooks';
import styles from 'theme/styles';
import Intercom from 'react-native-intercom';
import {setUpInterCom} from 'utils/helper';
import {Platform} from 'react-native';

const Header = ({
    title,
    titleStart,
    white,
    showBack,
    onBackClick,
    showCloseModal,
    showChat,
    showCartAndFav,
    showAction,
    action,
    style,
    onShowBack,
    actions,
    hideDialog,
    isDialog,
}: {
    title?: string;
    titleStart?: boolean;
    white?: boolean;
    showBack?: boolean;
    onBackClick?: () => {};
    showCloseModal?: boolean;
    showChat?: boolean;
    showCartAndFav?: boolean;
    showAction?: boolean;
    action?: any;
    style?: any;
    hideDialog?: () => void;
    isDialog?: boolean;
}) => {
    // useEffect(() => {
    //   setUpInterCom();
    // }, []);
    const {pop, dismissModal} = useNavigation();
    return (
        <View
            style={[
                styles.headerContainer,
                {
                    height: Platform.OS === 'ios' ? 90 : 40,
                    alignItems: 'flex-start',
                },
                titleStart ? styles.headerStart : {},
                white ? styles.whiteBg : {},
                style,
            ]}
            useSafeArea
            row>
            {showBack || showCloseModal ? (
                white ? (
                    <Button
                        avoidMinWidth
                        backgroundColor={Colors.white}
                        onPress={() => {
                            if (onShowBack) {
                                onShowBack();
                            }
                            if (showBack) {
                                if (onBackClick) {
                                    onBackClick();
                                } else {
                                    pop();
                                }
                            } else {
                                dismissModal();
                                if (isDialog) {
                                    hideDialog();
                                }
                            }
                        }}
                        style={{marginTop: -4}}>
                        <Image supportRTL source={showBack ? Assets.icons.arrowBack : Assets.icons.x} />
                    </Button>
                ) : (
                    <Button
                        avoidMinWidth
                        link
                        marginH-20
                        onPress={() => {
                            showBack ? pop() : dismissModal();
                        }}>
                        <Image supportRTL source={showBack ? Assets.icons.arrowBack : Assets.icons.x} />
                    </Button>
                )
            ) : (
                <Button backgroundColor={Colors.white} />
            )}
            {!!title && (
                <Text marginV-20 secondary header>
                    {title}
                </Text>
            )}
            {actions ? (
                <View row>{actions}</View>
            ) : showAction ? (
                action()
            ) : showChat ? (
                <Button avoidMinWidth backgroundColor={Colors.white} onPress={() => Intercom.displayMessenger()}>
                    <Image source={Assets.icons.callCenter} width={30} height={30} resizeMode="contain" />
                </Button>
            ) : (
                <Button backgroundColor={Colors.white} />
            )}
        </View>
    );
};

export default Header;
