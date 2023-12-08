import React from 'react';
import {ActivityIndicator, Dimensions} from 'react-native';
import Card from 'react-native-ui-lib/card';
import Text from 'react-native-ui-lib/text';
import styles from 'theme/styles';
import {useNavigation} from 'react-native-navigation-hooks';
import {product} from 'typescript/api.types';
import Tools from 'utils/Tools';
import {AnimatedImage, View} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import {getProductImage} from 'utils/helper';
import {CachedImage} from '@georstat/react-native-image-cache';
import {usePush} from 'utils/hooks';
const {width} = Dimensions.get('window');
const sideHeight = width / 2.2 - 20;
const sideWidth = width / 2.5 - 20;

const ProductItemSmallSale = ({item}: {item: product.SimilarProduct}) => {
    const push = usePush();
    const {t} = useTranslation();

    return (
        <Card
            borderRadius={5}
            style={styles.productItemCard}
            elevation={0}
            enableShadow={false}
            onPress={() => push('Kartonah.Screens.StockDetails', {data: item})}
            width={sideWidth}>
            <CachedImage
                source={getProductImage(item?.files[0]?.fileName, 720)}
                thumbnailSource={getProductImage(item?.files[0]?.fileName, 400)}
                loadingImageComponent={ActivityIndicator}
                resizeMode="cover"
                style={{
                    backgroundColor: '#EDEEF0',
                    height: sideHeight,
                    borderRadius: 2,
                }}
            />
            {/* <AnimatedImage
        containerStyle={{
          backgroundColor: '#EDEEF0',
          marginBottom: 0,
          borderRadius: 2,
          height: sideHeight,
        }}
        style={{
          resizeMode: 'cover',
          height: sideHeight,
          borderRadius: 2,
        }}
        // source={{uri: `${item?.featured_images[0]?.imgUrl}`}}
        source={{
          uri: getProductImage(item?.featured_images[0]?.fileName, 400),
          cache: 'force-cache',
        }}
        loader={<ActivityIndicator />}
        animationDuration={400}
      /> */}
            {/* <Card.Image
        height={sideHeight}
        width={sideWidth}
        style={styles.productItemImage}
        source={{uri: `${item?.featured_images[0]?.imgUrl}`}}
      /> */}
            <Text marginV-5 text80 bold secondary>
                {item?.title?.substr(0, 12)}
            </Text>
            <Text marginB-5 text90 bold secondary>
                {t('QTY')}: {item.quantity} {t('units')}
            </Text>
            <View row marginB-5 centerV>
                <Text secondary text2 bold>
                    {Tools.getCurrecyFormatted(item?.price / item?.quantity)}
                </Text>
                {/* <Text secondary superscriptText2>
            TL
          </Text> */}
                <Text secondary text100 marginB-3>
                    /{t('unit')}
                </Text>
            </View>
        </Card>
    );
};

export default ProductItemSmallSale;
