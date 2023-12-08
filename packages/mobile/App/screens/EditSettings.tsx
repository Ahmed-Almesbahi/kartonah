import React, {ReactNode} from 'react';
import {
  KeyboardAwareScrollView,
  View,
  Text,
  Button,
  Colors,
} from 'react-native-ui-lib';
import Header from 'components/Header';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {useNavigation} from 'react-native-navigation-hooks';
const EditSettings = ({
  input,
  onSubmit,
  ...rest
}: {
  input: ReactNode;
  onSubmit: () => void;
}) => {
  const {t} = useTranslation();
  const {dismissModal} = useNavigation();

  return (
    <View bg-white flex>
      <Header showCloseModal title={t('Edit Settings')} />
      <KeyboardAwareScrollView bounces={false}>
        <View padding-20>
          {input}
          <Button
            marginV-20
            marginB-60
            onPress={() => {
              onSubmit();
              dismissModal();
            }}
            style={styles.button}
            backgroundColor={Colors.secondary}>
            <Text white text80>
              {t('Submit')}
            </Text>
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

EditSettings.screenName = 'Kartonah.Screens.EditSettings';

EditSettings.options = {
  bottomTabs: {
    visible: false,
  },
};

export default EditSettings;
