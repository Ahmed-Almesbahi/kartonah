import React from 'react';
import {ActivityIndicator, Dimensions, Image} from 'react-native';
import {Card, View, Colors, Text} from 'react-native-ui-lib';
import {ProductItemType} from 'typescript/types';
import {getProductImage} from 'utils/helper';
import Increment from './Increment';
import {CachedImage} from '@georstat/react-native-image-cache';
import {useNameThatColor} from 'react-ntc';
const {width} = Dimensions.get('window');
const sideHeight = width / 2.5 - 35;
const sideWidth = width / 3 - 35;

const ProductColor = ({
    item,
    product,
    onPress,
    selected,
    index,
    stocks = false,
}: {
    item: any;
    product: ProductItemType;
    onPress: () => void;
    selected: boolean;
    index: number;
    stocks?: boolean;
}) => {
    return (
        <View marginR-10 marginB-10 paddingT-10>
            <Card
                borderRadius={5}
                elevation={0}
                enableShadow={false}
                style={[{overflow: 'hidden'}, selected ? {} : {borderWidth: 1, borderColor: Colors.grey50}]}
                // width={sideWidth}
                width={67}
                selected={selected}
                selectionOptions={{hideIndicator: true}}
                onPress={onPress}>
                <CachedImage
                    source={getProductImage(item?.colour?.files[0]?.fileName, 720)}
                    thumbnailSource={getProductImage(item?.colour?.files[0]?.fileName, 400)}
                    loadingImageComponent={ActivityIndicator}
                    style={{
                        backgroundColor: '#EDEEF0',
                        // height: sideHeight,
                        height: 87,
                        // width: sideWidth,
                        width: 67,
                        borderRadius: 5,
                    }}
                />

                {/* {stocks === false ? (
          <View absR style={{right: -20, top: -20, zIndex: 1}}>
            <Increment index={index} item={item} product={product} />
          </View>
        ) : null} */}
            </Card>
            {/* {item?.colour?.code ? (
                <Text text90 marginT-10>
                    {useNameThatColor(item?.colour?.code)}
                </Text>
            ) : null} */}
        </View>
    );
};

export default ProductColor;
