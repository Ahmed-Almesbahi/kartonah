import React from 'react';
import {Text, Button, Image, Assets, View, Colors} from 'react-native-ui-lib';
import {useNavigation} from 'react-native-navigation-hooks';
import styles from 'theme/styles';
import {TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useTranslation} from 'react-i18next';
function AlertDelete({onConfirm, message}) {
  const {dismissOverlay} = useNavigation();
  const {t} = useTranslation();
  message = message ? message : t('Are you sure to delete this item ');
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={dismissOverlay}
      style={styles.alertContainer}>
      <Animatable.View delay={50} animation="bounceIn" style={styles.alert}>
        <View br20 padding-20 center backgroundColor={'#ffe3e3'}>
          <Image tintColor={Colors.secondary} source={Assets.icons.trash} />
        </View>
        <Text text80 marginV-20 style={styles.message}>
          {message}
        </Text>
        <View row>
          <Button
            margin-20
            link
            style={styles.buttonMini}
            onPress={dismissOverlay}>
            <Text text80 secondary bold>
              {t('Cancel')}
            </Text>
          </Button>
          <Button
            margin-20
            link
            style={styles.buttonMini}
            onPress={() => {
              dismissOverlay();
              onConfirm();
            }}>
            <Text text80 red10 bold>
              {t('Delete')}
            </Text>
          </Button>
        </View>
      </Animatable.View>
    </TouchableOpacity>
  );
}

AlertDelete.options = () => {
  return {
    layout: {
      componentBackgroundColor: 'transparent',
    },
    overlay: {
      interceptTouchOutside: true,
    },
  };
};

AlertDelete.screenName = 'Kartonah.Overlay.AlertDelete';

export default AlertDelete;
