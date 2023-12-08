import React from 'react';
import {Text, Button, Image} from 'react-native-ui-lib';
import {useNavigation} from 'react-native-navigation-hooks';
import styles from 'theme/styles';
import {ImageSourcePropType, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
function Alert({
  title,
  message,
  icon,
  buttonLabel,
  onPress,
}: {
  title?: string;
  message: string;
  icon?: ImageSourcePropType;
  buttonLabel?: string;
  onPress?: () => void;
}) {
  const {dismissOverlay} = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={dismissOverlay}
      style={styles.alertContainer}>
      <Animatable.View delay={50} animation="bounceIn" style={styles.alert}>
        {!!icon && <Image marginV-20 source={icon} />}
        {!!title && (
          <Text text80 style={styles.title}>
            {title}
          </Text>
        )}
        <Text text80 marginV-20 style={styles.message}>
          {message}
        </Text>
        {!!buttonLabel && (
          <Button
            marginV-20
            style={styles.buttonMini}
            fullWidth
            onPress={() => {
              if (onPress) {
                onPress();
              }
              dismissOverlay();
            }}>
            <Text text80>{buttonLabel}</Text>
          </Button>
        )}
      </Animatable.View>
    </TouchableOpacity>
  );
}

Alert.options = () => {
  return {
    layout: {
      componentBackgroundColor: 'transparent',
    },
    overlay: {
      interceptTouchOutside: true,
    },
  };
};

Alert.screenName = 'Kartonah.Overlay.Alert';

export default Alert;
