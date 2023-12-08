import React from 'react';
import {FlatList} from 'react-native';
import {View, Colors, KeyboardAwareScrollView, Text} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
const ProductDetailsDescription = ({product}) => {
  const {t} = useTranslation();
  return (
    <View flex backgroundColor={Colors.light}>
      <Header showBack white title={t('Item Description')} />
      <KeyboardAwareScrollView bounces={false}>
        <View backgroundColor={Colors.white} marginV-20>
          <View padding-20 centerV row spread flex>
            <Text h3 uppercase secondary>
              {t('Highlights')}
            </Text>
          </View>

          <View style={styles.fancySeparator} backgroundColor={Colors.light} />
          <View padding-20>
            <FlatList
              bounces={false}
              data={product.descriptions.filter(
                c => c.description?.elment_trans[0]?.title,
              )}
              renderItem={({item}) => (
                <View marginB-10 row centerV>
                  <View style={styles.dot} />
                  <Text text2>{item.description?.elment_trans[0]?.title}</Text>
                </View>
              )}
            />
          </View>
        </View>
        {/* <View backgroundColor={Colors.white} marginB-20>
          <View padding-20 centerV row spread flex>
            <Text h3 uppercase secondary>
              {t('Discerption')}
            </Text>
          </View>

          <View style={styles.fancySeparator} backgroundColor={Colors.light} />
          <View padding-20>
            <Text>
              xxxxxx xxxxxx xxxxxx xxxxxx xxxxxx xxxxxx xxxxxx xxxxxx xxxxxx
              xxxxxx xxxxxx xxxxxx xxxxxx
            </Text>
          </View>
        </View> */}
      </KeyboardAwareScrollView>
    </View>
  );
};

ProductDetailsDescription.screenName =
  'Kartonah.Screens.ProductDetailsDescription';

ProductDetailsDescription.options = {
  bottomTabs: {
    visible: false,
  },
};

export default ProductDetailsDescription;
