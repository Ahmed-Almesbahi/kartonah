import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Colors, View, Text, Image, Assets} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {product as pType} from 'typescript/api.types';
import {useNavigation} from 'react-native-navigation-hooks';
import {Rating} from 'react-native-ratings';
import ReviewItem from 'components/ReviewItem';
import {reviews} from 'data/demos';
import {usePush} from 'utils/hooks';

const ProductRating = ({product}: {product: {data: pType.RootObject}}) => {
    const {t} = useTranslation();
    const push = usePush();

    if (!product.data?.row?.comments?.length) {
        return null;
    }

    return (
        <View backgroundColor={Colors.white} marginB-20>
            <TouchableOpacity
                onPress={() => {
                    // push('Kartonah.Screens.ProductDetailsReviews')
                }}>
                <View padding-20 centerV row spread flex>
                    <View>
                        <Text h3 uppercase secondary>
                            {t('Item rating & Reviews')}
                        </Text>
                        <View row>
                            <Rating
                                ratingCount={5}
                                startingValue={product.data?.row?.rate}
                                imageSize={15}
                                ratingBackgroundColor="transparent"
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
                    </View>
                    <Image tintColor={Colors.secondary} source={Assets.icons.cheveronRight} />
                </View>
            </TouchableOpacity>
            <View style={styles.fancySeparator} backgroundColor={Colors.light} />
            <View padding-20>
                {product.data?.row?.comments.map(item => (
                    <ReviewItem key={item.id} item={item} />
                ))}
            </View>
        </View>
    );
};
export default ProductRating;
