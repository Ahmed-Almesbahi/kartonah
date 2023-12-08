import moment from 'moment';
import React from 'react';
import {
  View,
  Colors,
  Text,
  Image,
  Assets,
  Button,
  Avatar,
} from 'react-native-ui-lib';
import styles from 'theme/styles';

const ReviewItem = ({item}) => {
  return (
    <View>
      <View centerV marginV-10 spread row>
        <View row centerV>
          <Avatar size={35} source={{uri: item.avatar}} />
          <Text text2 bold marginL-10>
            {item?.user?.full_name}
          </Text>
        </View>
        <Button
          paddingT-5
          paddingB-5
          paddingL-5
          paddingR-5
          backgroundColor={Colors.secondary}
          avoidMinWidth
          style={styles.buttonMini}>
          <Image marginR-3 source={Assets.icons.star} />
          <Text text80 white>
            {item.rate}
          </Text>
        </Button>
      </View>
      <Text>{item.comment}</Text>
      <View marginV-10 centerV row>
        <Image marginR-10 source={Assets.icons.clock} />
        <Text text80 textMuted>
          {moment(item.created_at).format('MMM Do YYYY')}
        </Text>
      </View>
      <View style={styles.fancySeparator} backgroundColor={Colors.light} />
    </View>
  );
};

export default ReviewItem;
