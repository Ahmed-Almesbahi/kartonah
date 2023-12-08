import React from 'react';
import {Colors, View, Text, Button} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {product as pType} from 'typescript/api.types';

const ProductTag = ({product}: {product: {data: pType.RootObject}}) => {
    const {t} = useTranslation();
    const data = product.data?.row?.tags;
    if (data?.length == 0 || !data) {
        return null;
    }

    return (
        <View backgroundColor={Colors.white} marginB-10>
            <Text marginH-20 h3 uppercase secondary>
                {t('Tags')}
            </Text>
            <View style={[styles.fancySeparator, {width: 'auto'}]} marginH-20 backgroundColor={Colors.light} />
            <View row style={styles.wrapList} paddingH-20 paddingT-20>
                {data.map(item => (
                    <Button
                        key={item.tag.id}
                        avoidMinWidth
                        style={[
                            styles.button,
                            {
                                borderRadius: 5,
                                paddingTop: 2,
                                paddingBottom: 2,
                            },
                        ]}
                        // outline
                        marginB-8
                        marginR-8
                        backgroundColor="#EFF2F6"
                        // outlineColor={Colors.secondary}
                    >
                        <Text text80 uppercase secondary marginT-6>
                            {item.tag.elment_trans[0]?.title}
                        </Text>
                    </Button>
                ))}
            </View>
        </View>
    );
};
export default ProductTag;
