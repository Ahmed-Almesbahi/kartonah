import React, {useState, useEffect} from 'react';
import {Text} from 'react-native-ui-lib';

import {initStripe, StripeContainer} from '@stripe/stripe-react-native';
import {StyleSheet, ActivityIndicator, ScrollView} from 'react-native';
import {STRIPE_PUB_KEY} from 'utils/constants';

const Payments = ({children}: {children: any}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initialize() {
      if (STRIPE_PUB_KEY) {
        await initStripe({
          publishableKey: STRIPE_PUB_KEY,
          merchantIdentifier: 'merchant.com.stripe.react.native',
          urlScheme: 'stripe-example',
          setUrlSchemeOnAndroid: true,
        });
        setLoading(false);
      }
    }
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <ActivityIndicator size="large" style={StyleSheet.absoluteFill} />
  ) : (
    <StripeContainer keyboardShouldPersistTaps={false}>
      {/* <ScrollView
        accessibilityLabel="payment-screen"
        style={{flex: 1}}
        keyboardShouldPersistTaps="handled"> */}
      {children}
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      {/* <Text style={{opacity: 0}}>appium fix</Text> */}
      {/* </ScrollView> */}
    </StripeContainer>
  );
};

export default Payments;
