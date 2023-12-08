import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {
  TouchableOpacity,
  View,
  Image,
  Assets,
  Text,
  Colors,
} from 'react-native-ui-lib';

interface PaymentCardTypeProps {}

const PaymentCardType = ({onPress, data}) => {
  const {t} = useTranslation();
  const getImage = () => {
    switch (data.paymentType) {
      case 'Iyzico':
        return (
          <Image
            source={Assets.icons.creditcard}
            style={{height: 30, width: 30}}
          />
        );
      case 'BankTransfer':
        return (
          <Image source={Assets.icons.bank} style={{height: 30, width: 30}} />
        );
      case 'ShipperTransfer':
        return (
          <Image source={Assets.icons.cargo} style={{height: 30, width: 30}} />
        );
      case 'Wallet':
        return (
          <Image source={Assets.icons.wallet} style={{height: 30, width: 30}} />
        );
      default:
        return <Image source={Assets.icons.paypal} />;
    }
  };
  const getContent = () => {
    switch (data.paymentType) {
      case 'Iyzico':
        return (
          <Text text90 bold marginB-0>
            {data?.cardNumber}
          </Text>
        );
      case 'BankTransfer':
        return (
          <Text text90 bold marginB-0>
            {t('Wire Transfer')}
          </Text>
        );
      case 'ShipperTransfer':
        return (
          <Text text90 bold marginB-0>
            {t('Shipper Transfer')}
          </Text>
        );
      case 'Wallet':
        return <Image source={Assets.icons.wallet} />;
      default:
        return <Image source={Assets.icons.paypal} />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View row centerV paddingH-20 paddingV-10 margin-0>
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.inputBorder,
            borderRadius: 5,
            padding: 10,
          }}>
          {getImage()}
        </View>

        <View marginH-10>{getContent()}</View>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentCardType;
