import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Colors, View, Text} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {product as pType} from 'typescript/api.types';
import {initialFilterState} from 'app-redux/actions/filter';
import ProductItemSmall from 'components/ProductItemSmall';
import ProductItemSmallSale from 'components/ProductItemSmallSale';

const RelatedProduct = ({product, stocks = false}: {product: {data: pType.RootObject}; stocks?: boolean}) => {
    const {t} = useTranslation();

    const renderProductItem = ({item}: {item: pType.SimilarProduct}) =>
        stocks ? (
            <ProductItemSmallSale key={item.id} item={item} />
        ) : (
            <ProductItemSmall layout="tab" key={item.id} item={item} />
        );

    return (
        <View backgroundColor={Colors.white} marginB-10>
            <Text marginH-20 marginV-10 h3 uppercase secondary>
                {t('Related products')}
            </Text>
            <View marginB-10 style={styles.fancySeparator} backgroundColor={Colors.light} />
            <FlatList
                showsHorizontalScrollIndicator={false}
                bounces={false}
                data={stocks ? product.data?.row?.vendor?.stocks : product.data?.row?.vendor?.products}
                renderItem={renderProductItem}
                horizontal
            />
        </View>
    );
};
export default RelatedProduct;
