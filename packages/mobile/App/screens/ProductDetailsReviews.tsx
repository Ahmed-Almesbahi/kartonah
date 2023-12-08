import React from 'react';
import {
  View,
  Colors,
  KeyboardAwareScrollView,
  Text,
  Image,
  Assets,
  ProgressBar,
} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import {AirbnbRating} from 'react-native-ratings';
import styles from 'theme/styles';
import {reviews} from 'data/demos';
import ReviewItem from 'components/ReviewItem';

const ProductDetailsReviews = () => {
  const {t} = useTranslation();
  return (
    <View flex backgroundColor={Colors.light}>
      <Header showBack white title={t('Item Rating & Reviews')} />
      <KeyboardAwareScrollView bounces={false}>
        <View backgroundColor={Colors.white} marginB-20>
          <Text margin-20 h3 uppercase secondary>
            {t('Product rating')}
          </Text>
          <View style={styles.fancySeparator} backgroundColor={Colors.light} />
          <View padding-20 row>
            <View br20 center backgroundColor={Colors.light} padding-20 flex-1>
              <Text secondary marginB-10 text2 bold>
                0.0/0
              </Text>
              <AirbnbRating
                count={5}
                isDisabled
                defaultRating={4}
                size={15}
                showRating={false}
              />
              <Text secondary marginT-10 text3 bold>
                000 {t('Rating')}
              </Text>
            </View>
            <View flex-2>
              {[5, 4, 3, 2, 1].map((item, index) => (
                <View key={index} marginH-10 marginB-10 centerV row>
                  <Text text80>{item}</Text>
                  <Image marginH-5 source={Assets.icons.star} />
                  <Text text80>(000)</Text>
                  <View marginL-5 flex>
                    <ProgressBar
                      backgroundColor={Colors.primary}
                      progressBackgroundColor={Colors.light}
                      height={4}
                      progress="50"
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View backgroundColor={Colors.white} marginB-20>
          <Text margin-20 h3 uppercase secondary>
            {t('Product reviews')}
          </Text>
          <View style={styles.fancySeparator} backgroundColor={Colors.light} />
          <View padding-20>
            {reviews.map(item => (
              <ReviewItem key={item.id} item={item} />
            ))}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

ProductDetailsReviews.screenName = 'Kartonah.Screens.ProductDetailsReviews';

ProductDetailsReviews.options = {
  bottomTabs: {
    visible: false,
  },
};

export default ProductDetailsReviews;
