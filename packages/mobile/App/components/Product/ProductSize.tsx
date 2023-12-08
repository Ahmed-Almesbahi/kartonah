import React from 'react';
import {Colors, View, Text, Button} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {product as pType} from 'typescript/api.types';

const ProductSize = ({product}: {product: {data: pType.RootObject}}) => {
    const {t} = useTranslation();
    const data = product.data?.row?.sizes;
    if (data?.length == 0 || !data) {
        return null;
    }

    return (
        <View backgroundColor={Colors.white} marginB-10>
            <Text marginH-20 marginV-10 h3 uppercase secondary>
                {t('Item sizes')}
            </Text>
            <View style={styles.fancySeparator} backgroundColor={Colors.light} />
            <View row style={styles.wrapList} padding-20>
                {data.map(item => (
                    <Button
                        key={item.size.id}
                        avoidMinWidth
                        style={[
                            styles.button.borderRadius,
                            {
                                borderRadius: 5,
                                paddingTop: 2,
                                paddingBottom: 2,
                            },
                        ]}
                        outline
                        marginB-10
                        marginR-10
                        onPress={() => {
                            // item.id
                        }}
                        outlineColor={Colors.secondary}>
                        <Text uppercase secondary bold>
                            {item.size.title}
                        </Text>
                    </Button>
                ))}
            </View>
            {/* <Button
          backgroundColor={Colors.light}
          margin-20
          marginT-0
          onPress={() =>
            push('Kartonah.Screens.ProductDetailsSizeChart')
          }
          style={styles.button}>
          <View flex row spread>
            <View row>
              <Image marginR-10 source={Assets.icons.chart} />
              <Text>{t('Size Chart')}</Text>
            </View>
            <Image source={Assets.icons.cheveronRight} />
          </View>
        </Button> */}
        </View>
    );
};
export default ProductSize;
