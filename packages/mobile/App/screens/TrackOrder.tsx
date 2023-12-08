import React from 'react';
import {
  View,
  Colors,
  KeyboardAwareScrollView,
  Text,
  Assets,
} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import Header from 'components/Header';
import Dash from 'react-native-dash';
import TrackOrderItem from 'components/TrackOrderItem';
const TrackOrder = () => {
  const {t} = useTranslation();
  return (
    <View flex backgroundColor={Colors.white}>
      <Header title={t('Track Order')} showBack />
      <KeyboardAwareScrollView bounces={false}>
        <View padding-20 paddingB-0>
          <TrackOrderItem
            title={t('Order placed')}
            date="06/08/1968 - 05:23 PM"
            icon={Assets.icons.trackOrder1}
            stage={1}
            currentStage={3}
          />
          <TrackOrderItem
            title={t('Order Confirmed')}
            date="06/08/1968 - 05:23 PM"
            icon={Assets.icons.trackOrder2}
            stage={2}
            currentStage={3}
          />
          <TrackOrderItem
            title={t('Order Prepared')}
            date="06/08/1968 - 05:23 PM"
            icon={Assets.icons.trackOrder3}
            stage={3}
            currentStage={3}
          />
          <TrackOrderItem
            title={t('Order Delivering')}
            date="06/08/1968 - 05:23 PM"
            icon={Assets.icons.trackOrder5}
            stage={4}
            currentStage={3}
          />
          <TrackOrderItem
            title={t('Order Shipped')}
            date="06/08/1968 - 05:23 PM"
            icon={Assets.icons.trackOrder5}
            stage={5}
            currentStage={3}
          />
          <Dash
            dashLength={3}
            dashThickness={1}
            dashGap={1}
            dashColor="#7E85A1"
            style={[styles.trackOrderLine]}
          />
        </View>
        <Text text80 center textMuted>
          {t('Estimated time for delivery')}
        </Text>
        <Text text80 center secondary>
          11 - 15 November, 2020
        </Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

TrackOrder.screenName = 'Kartonah.Screens.TrackOrder';

TrackOrder.options = {
  bottomTabs: {
    visible: false,
  },
};

export default TrackOrder;
