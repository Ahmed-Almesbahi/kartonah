import React from 'react';
import {Colors, View, Text} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {product as pType} from 'typescript/api.types';
import ProductColor from 'components/ProductColor';
import Tools from 'utils/Tools';
import {getProductImage} from 'utils/helper';
import {FlatList} from 'react-native';

const ProductColors = ({
    product,
    scrollView,
    colorImages,
    setColorImages,
    stocks = false,
}: {
    product: {data: pType.RootObject};
    stocks?: boolean;
}) => {
    const {t} = useTranslation();
    return (
        <View backgroundColor={Colors.white} marginT-10>
            <Text marginH-20 marginV-10 h3 secondary>
                {t('Item Variations')}
            </Text>
            <View style={[styles.fancySeparator, {width: 'auto'}]} marginH-20 backgroundColor={Colors.light} />
            <View row style={styles.wrapList} padding-20>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <ProductColor
                            key={item.colour.id}
                            item={item}
                            index={index}
                            selected={colorImages.selectedIndex === index}
                            stocks={stocks}
                            onPress={() => {
                                setColorImages({
                                    selectedIndex: index,
                                    images: product.data?.row?.colours[index]?.colour.files.map(
                                        // (d) => d.imgUrl,
                                        d => d?.fileName,
                                    ),
                                });
                                if (scrollView.current) {
                                    scrollView.current.getNode().scrollTo({y: 0});
                                }
                            }}
                            product={product.data?.row}
                        />
                    )}
                    horizontal
                    data={product.data?.row?.colours}
                />
            </View>
            <View backgroundColor={'#EFF2F6'} margin-10 paddingH-10 paddingV-5 centerV br20 row spread>
                <Text h3 uppercase secondary>
                    {t('Item sizes')}
                </Text>
                <View row style={styles.wrapList} paddingT-5>
                    {product.data?.row?.sizes?.map(item => (
                        <Text key={item.size.title} marginR-10 uppercase secondary text80>
                            {item.size.title}
                        </Text>
                    ))}
                </View>
            </View>
        </View>
    );
};
export default ProductColors;
