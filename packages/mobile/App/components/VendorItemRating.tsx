import React from 'react';
import {Dimensions, I18nManager, ImageSourcePropType} from 'react-native';
import Card from 'react-native-ui-lib/card';
import {Rating, AirbnbRating} from 'react-native-ratings';
import styles from 'theme/styles';
import {Assets, View} from 'react-native-ui-lib';
const {width} = Dimensions.get('window');
const VendorItemRating = ({
  rating,
  brandLogo,
}: {
  rating: number;
  brandLogo: ImageSourcePropType;
}) => {
  return (
    <Card /* eslint-ignore-line */
      style={[
        styles.vendorItemRatingCard,
        I18nManager.isRTL ? {right: 30, left: 'auto'} : {},
      ]}
      borderRadius={5}
      elevation={2}
      height={width / 4}
      width={width / 4}>
      <Card.Image
        height={width / 4}
        width={width / 4}
        source={brandLogo}
        // style={{borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}
      />
      {/* <View
        // marginB-10
        bg-white
        style={{borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
        <AirbnbRating
          count={5}
          // ratingImage={Assets.icons.heart}
          defaultRating={rating}
          size={10}
          showRating={false}
          isDisabled
          // type="custom"
          // ratingBackgroundColor="blue"
          // color="red"
          style={styles.vendorRating}
        />
      </View> */}
    </Card>
  );
};

export default VendorItemRating;
