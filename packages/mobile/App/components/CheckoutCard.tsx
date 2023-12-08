import * as React from 'react';
import {View, TouchableOpacity, Colors, Text,Image,Assets} from 'react-native-ui-lib';
import styles from 'theme/styles';

const CheckoutCard = ({
  title,
  actionTitle,
  onActionPress,
  children,
}: {
  title: string;
  actionTitle?: string;
  onActionPress?: () => void;
  children: any;
}) => {
  return (
    <View backgroundColor={Colors.white} marginT-10>
      <TouchableOpacity onPress={() => onActionPress()}>
        <View marginH-20 marginV-5 centerV row spread>
          <Text text80 secondary bold>
            {title}
          </Text>
          <View row centerV>
            <Text secondary bold marginB-3>{actionTitle}</Text>
            <Image
              marginL-5
              supportRTL
              source={Assets.icons.cheveronRight}
            />
          </View>


        </View>
      </TouchableOpacity>
      <View
        style={styles.fancySeparator}
        marginH-20
        backgroundColor={Colors.light}
      />
      {children ? children : null}
    </View>
  );
};

export default CheckoutCard;
