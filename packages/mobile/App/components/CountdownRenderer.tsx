import React from 'react';
import {useTranslation} from 'react-i18next';

import {View, Text, Button, Colors} from 'react-native-ui-lib';

interface RendererProps {
  hours: any;
  minutes: any;
  seconds: any;
  completed: any;
  resend: any;
  values?: any;
  actions?: any;
  resetCountdown: any;
}

const CountdownRenderer: React.SFC<RendererProps> = (props) => {
  const {
    hours,
    minutes,
    seconds,
    completed,
    resend,
    values,
    actions,
    resetCountdown,
  } = props;
  const {t} = useTranslation();
  if (completed) {
    // Render a completed state
    return (
      <Button
        link
        // marginT-10
        fullWidth
        linkColor={Colors.secondary}
        onPress={() => {
          resend();
          resetCountdown();
        }}>
        <Text secondary bold>
          {t('Re-send Code')}
        </Text>
      </Button>
    );
  } else {
    // Render a countdown
    return (
      <Button link fullWidth linkColor={Colors.secondary}>
        <Text secondary bold>
          {t('Re-send Code')} ({minutes}:{seconds})
        </Text>
      </Button>
    );
  }
};

export default React.memo(CountdownRenderer);
