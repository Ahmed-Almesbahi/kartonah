import React from 'react';
import {
  View,
  Colors,
  KeyboardAwareScrollView,
  Text,
  Assets,
  Image,
} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import {sizes} from 'data/demos';
const ProductDetailsSizeChart = () => {
  const {t} = useTranslation();
  return (
    <View flex backgroundColor={Colors.light}>
      <Header showBack white title={t('Item size chart')} />
      <KeyboardAwareScrollView bounces={false}>
        <View backgroundColor={Colors.white} marginV-20>
          <View padding-20 centerV row spread flex>
            <Text h3 uppercase secondary>
              {t('Item chart')}
            </Text>
          </View>

          <View style={styles.fancySeparator} backgroundColor={Colors.light} />
          <View center padding-20>
            <Image source={Assets.images.sizeChart} />
          </View>
        </View>
        <View backgroundColor={Colors.white} marginB-20>
          <View padding-20 centerV row>
            <View flex>
              <Text text1 secondary bold>
                {t('Size')}
              </Text>
            </View>
            <View flex>
              <Text text1 secondary bold>
                {t('Chest')}
              </Text>
            </View>
            <View flex>
              <Text text1 secondary bold>
                {t('Length')}
              </Text>
            </View>
            <View flex>
              <Text text1 secondary bold>
                {t('Shoulder width')}
              </Text>
            </View>
          </View>

          <View style={styles.fancySeparator} backgroundColor={Colors.light} />
          <View padding-20>
            {sizes.map((item, index) => (
              <View key={item.id} marginB-10 centerV row>
                <View flex>
                  <Text text80>{item}</Text>
                </View>
                <View flex>
                  <Text text80>{50 * index}</Text>
                </View>
                <View flex>
                  <Text text80>-</Text>
                </View>
                <View flex>
                  <Text text80>{20 * index}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

ProductDetailsSizeChart.screenName = 'Kartonah.Screens.ProductDetailsSizeChart';

ProductDetailsSizeChart.options = {
  bottomTabs: {
    visible: false,
  },
};

export default ProductDetailsSizeChart;
