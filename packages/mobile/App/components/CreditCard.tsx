import React from 'react';
import {KeyboardAwareScrollView, View} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import {CreditCardInput} from '../lib/react-native-credit-card-input';
import {FONT} from 'utils/constants';

const NewCard = ({onSubmit}: {onSubmit: (data: any) => void}) => {
  const {t} = useTranslation();

  return (
    <KeyboardAwareScrollView bounces={false}>
      <View>
        <CreditCardInput
          requiresName
          allowScroll
          cardFontFamily={FONT}
          labels={{
            name: t("CARDHOLDER'S NAME"),
            number: t('CARD NUMBER'),
            expiry: t('EXPIRY'),
            cvc: 'CVC/CCV',
          }}
          placeholders={{
            name: t('Full Name'),
          }}
          onChange={(e: any) => {
            if (e.valid) {
              onSubmit({
                cardName: e.values.name,
                cardNumber: e.values.number.replace(/ /g, ''),
                cvv: e.values.cvc,
                cardExpire: e.values.expiry,
              });
            }
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default NewCard;
