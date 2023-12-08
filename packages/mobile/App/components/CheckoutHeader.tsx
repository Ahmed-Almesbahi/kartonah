import React from 'react';
import {View, Image, Assets, Text, Colors} from 'react-native-ui-lib';
import Dash from 'react-native-dash';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import Header from './Header';

export const CheckIcon = ({
  currentStep,
  step,
  label,
}: {
  currentStep: number;
  step: number;
  label: string;
}) => (
  <View
    style={[styles.registerStep, step > currentStep ? styles.muted : {}]}
    center>
    <View
      style={[
        styles.registerIcon,
        currentStep === step ? styles.currentRegisterIcon : {},
        currentStep > step ? styles.doneRegisterIcon : {},
      ]}>
      <Image
        tintColor={currentStep === step ? Colors.primary : Colors.white}
        source={Assets.icons.featherCheckSmall}
      />
    </View>
    <Text marginT-10 bold>
      {label}
    </Text>
  </View>
);
const CheckoutHeader = ({
  title,
  currentStep,
}: {
  title?: string;
  currentStep: number;
}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.registerHeaderContainer} backgroundColor={Colors.white}>
      <Header showBack title={title} />
      <View marginV-20 style={styles.registerSteps} row>
        <CheckIcon step={1} currentStep={currentStep} label={t('Shipping')} />
        <CheckIcon step={2} currentStep={currentStep} label={t('Payment')} />
        <CheckIcon
          step={3}
          currentStep={currentStep}
          label={t('Order Placed')}
        />
        <Dash
          dashLength={10}
          dashThickness={1}
          dashGap={3}
          dashColor="#7E85A1"
          style={[styles.fancyRegisterSeparator, styles.fancyRSl]}
        />
        <Dash
          dashLength={10}
          dashThickness={1}
          dashGap={3}
          dashColor="#7E85A1"
          style={[styles.fancyRegisterSeparator, styles.fancyRSr]}
        />
      </View>
    </View>
  );
};

export default CheckoutHeader;
