import * as React from 'react';
import {
  View,
  Colors,
  KeyboardAwareScrollView,
  Text,
  Image,
  Assets,
  Button,
} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import {Linking, Platform} from 'react-native';

export interface ForceUpdateProps {}

const ForceUpdate = () => {
  const {t} = useTranslation();
  const handleClick = () => {
    const link =
      Platform.OS == 'ios'
        ? 'itms-apps://itunes.apple.com/app/1495089082?mt=8'
        : 'market://details?id=com.justyol.android';
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        console.log("Don't know how to open URI: " + link);
      }
    });
  };

  return (
    <View flex backgroundColor={Colors.white}>
      <Header white title={t('New Version Available!')} />
      <KeyboardAwareScrollView>
        <View flex center marginV-30>
          <Image source={Assets.images.checkout} />
        </View>
        <Text text80 margin-10 marginB-0>
          {t(
            'New version is released, Please upgrade to the latest version to be able to use our app',
          )}
        </Text>

        <Button
          style={styles.button}
          marginH-20
          marginT-50
          backgroundColor={Colors.secondary}
          onPress={handleClick}>
          <Text secondary bold white>
            {t('Upgrade')}
          </Text>
        </Button>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ForceUpdate;
