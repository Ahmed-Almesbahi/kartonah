import React from 'react';
import {ActivityIndicator, Dimensions} from 'react-native';
import Card from 'react-native-ui-lib/card';
import Text from 'react-native-ui-lib/text';
import {Colors} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useNavigation} from 'react-native-navigation-hooks';
import {product} from 'typescript/api.types';
import Tools from 'utils/Tools';
import {AnimatedImage} from 'react-native-ui-lib';
import {getProductImage} from 'utils/helper';
import {CachedImage} from '@georstat/react-native-image-cache';
import {usePush} from 'utils/hooks';
import _ from 'lodash';
const {width} = Dimensions.get('window');
const sideHeight = width / 2.2 - 20;
const sideWidth = width / 2.5 - 20;
const sideWidthTab = width / 3 - 26.6;
const sideHeightTab = width / 2.7 - 26.6;

const ProductItemSmall = ({
    item,
    stocks = false,
    layout,
    size,
}: {
    item: product.SimilarProduct;
    stocks?: boolean;
    layout: 'tab' | 'tab_h' | 'normal';
    size: 'L';
}) => {
    const push = usePush();

    let styleCard = {borderWidth: 1, borderColor: Colors.grey60, padding: 3, marginLeft: 3};
    let finalWidth = sideWidth;
    let finalHeight = sideHeight;
    if (layout == 'tab' || layout == 'tab_v') {
        styleCard = {marginLeft: 20};
        finalWidth = sideWidthTab;
        finalHeight = sideHeightTab;
    } else if (layout == 'tab_h') {
        styleCard = {marginLeft: 5};
        finalWidth = sideWidthTab;
        finalHeight = sideHeightTab;
    } else if (layout == 'grid_v_2') {
        finalWidth = width / 2 - 15;
        finalHeight = width / 1.8 - 26.6;
    }

    return (
        <Card
            borderRadius={5}
            style={[styles.productItemCard, styleCard, size === 'L' ? {width: finalWidth * 1.34} : null]}
            elevation={0}
            enableShadow={false}
            onPress={() =>
                push(stocks ? 'Kartonah.Screens.StockDetails' : 'Kartonah.Screens.ProductDetails', {data: item})
            }
            width={finalWidth}>
            {_.has(item, 'files[0].fileName') && (
                <CachedImage
                    source={getProductImage(item?.files[0]?.fileName, 720)}
                    thumbnailSource={getProductImage(item?.files[0]?.fileName, 400)}
                    loadingImageComponent={ActivityIndicator}
                    resizeMode="cover"
                    style={[
                        {
                            backgroundColor: '#EDEEF0',
                            borderRadius: 2,
                        },
                        size === 'L' ? {height: finalHeight * 1.23} : {height: finalWidth},
                    ]}
                />
            )}
            <Text marginV-5 text80 secondary>
                {item?.title?.substr(0, 12)}
            </Text>
            <Text text80 bold style={layout == 'tab' ? {color: Colors.secondary} : {color: Colors.secondary}}>
                {stocks
                    ? Tools.getPriceWithCurrecyFormatted(item.price)
                    : Tools.getPriceWithCurrecyFormatted(item.regularPrice)}
            </Text>
        </Card>
    );
};

export default ProductItemSmall;
