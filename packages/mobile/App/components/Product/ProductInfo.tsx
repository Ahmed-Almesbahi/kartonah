import React from 'react';
import {AirbnbRating} from 'react-native-ratings';
import {Colors, View, Button, Text, Image, Assets} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import Tools from 'utils/Tools';
import {product as pType} from 'typescript/api.types';

const ProductInfo = ({product, stocks = false}: {product: {data: pType.RootObject}; stocks?: boolean}) => {
    const {t} = useTranslation();

    return (
        <View
            backgroundColor={Colors.white}
            // marginB-10
            padding-20>
            <View centerV spread row>
                <View flex>
                    <View flex row centerV spread>
                        <Text marginB-10 h3 uppercase secondary>
                            {product.data?.row?.title
                                ? product.data?.row?.title
                                : product.data?.row?.elment_trans[0]?.title}
                        </Text>
                        {/* <Button avoidMinWidth paddingR-0 backgroundColor="transparent" onPress={share}>
                            <Image source={Assets.icons.share} />
                        </Button> */}
                    </View>
                </View>
            </View>
            {stocks == false ? (
                <View centerV spread row>
                    <View row>
                        <AirbnbRating
                            count={5}
                            defaultRating={product.data?.row?.rate}
                            size={15}
                            isDisabled
                            showRating={false}
                            // ratingBackgroundColor="transparent"
                            style={styles.productRating}
                        />
                        <Text text80 secondary marginL-10>
                            0.0/0
                        </Text>
                        <Text text80 secondary marginH-10>
                            |
                        </Text>
                        <Text text80 secondary>
                            0 {t('Rating')}
                        </Text>
                    </View>
                    <View row>
                        <Text text80 secondary marginR-10>
                            {product.data?.row?.favouritesCount}
                        </Text>
                        <Image
                            source={Assets.icons.favouritesCount}
                            style={{width: 30, height: 30}}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            ) : null}
        </View>
    );
};
export default ProductInfo;
