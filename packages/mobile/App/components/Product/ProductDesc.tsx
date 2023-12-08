import React from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import {Colors, View, Text, Image, Assets} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {product as pType} from 'typescript/api.types';
import {useNavigation} from 'react-native-navigation-hooks';
import {usePush} from 'utils/hooks';

const ProductDesc = ({product}: {product: {data: pType.RootObject}}) => {
    const {t} = useTranslation();
    const push = usePush();

    const data = product.data?.row?.descriptions.filter(c => c.description?.elment_trans[0]?.title);
    if (data?.length == 0 || !data) {
        return null;
    }

    return (
        <View backgroundColor={Colors.white}>
            {/* <TouchableOpacity
                onPress={() =>
                    push('Kartonah.Screens.ProductDetailsDescription', {
                        product: product.data?.row,
                    })
                }> */}
            <View marginH-20 marginV-10 centerV row spread flex>
                <Text h3 uppercase secondary>
                    {t('Description')}
                </Text>
                {/* <Image tintColor={Colors.secondary} source={Assets.icons.cheveronRight} /> */}
            </View>
            {/* </TouchableOpacity> */}
            <View style={[styles.fancySeparator, {width: 'auto'}]} marginH-20 backgroundColor={Colors.light} />
            <View paddingH-20 paddingT-20>
                <FlatList
                    bounces={false}
                    data={data.slice(0, 5)}
                    renderItem={({item}) => (
                        <View marginB-10 row centerV>
                            <View style={styles.dot} />
                            <Text text2>{item.description?.elment_trans[0]?.title}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};
export default ProductDesc;
