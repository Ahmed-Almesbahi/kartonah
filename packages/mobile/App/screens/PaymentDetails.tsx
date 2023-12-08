import Header from 'components/Header';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, Colors} from 'react-native-ui-lib';
import {TouchableOpacity, Clipboard} from 'react-native';

function PaymentDetails({
  description,
  instructions,
}: {
  description: string;
  instructions: string;
}) {
  const {t} = useTranslation();
  const copyToClipboardDescription = () => {
    Clipboard.setString(description);
  };
  const copyToClipboardInstructions = () => {
    Clipboard.setString(instructions);
  };
  return (
    <View flex bg-white>
      <Header showCloseModal white title={t('Payment Details')} />
      <View margin-20 flex>
        <TouchableOpacity onPress={() => copyToClipboardDescription()}>
          <Text text80 marginB-20>
            {description}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => copyToClipboardInstructions()}>
          <Text text80 marginB-20>
            {instructions}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

PaymentDetails.screenName = 'Kartonah.Screens.PaymentDetails';

PaymentDetails.options = {
  bottomTabs: {
    visible: false,
  },
};

export default PaymentDetails;
