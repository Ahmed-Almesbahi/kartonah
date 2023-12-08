import React, {useCallback} from 'react';
import {ActivityIndicator, Dimensions} from 'react-native';
import {View, AnimatedImage, Colors} from 'react-native-ui-lib';
import Card from 'react-native-ui-lib/card';
import Text from 'react-native-ui-lib/text';
import styles from 'theme/styles';
import VendorItemRating from 'components/VendorItemRating';
import {useTranslation} from 'react-i18next';
import {useNavigation} from 'react-native-navigation-hooks';
import {UPLOAD_URL} from 'utils/constants';
import {vendrosByCategoryRow} from 'typescript/api.types';

import {useDispatch} from 'react-redux';
import {setFilterOptions} from 'app-redux/actions/filter';
import {CachedImage} from '@georstat/react-native-image-cache';
import {usePush} from 'utils/hooks';

const {width} = Dimensions.get('window');
const sideHeight = width / 1.6;
const sideWidth = width;

const VendorItem = ({item, categoriesIds}: {item: vendrosByCategoryRow}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const push = usePush();
    return (
        <Card
            onPress={() => {
                // if (categoriesIds.length > 0) {
                //   dispatch(setFilterOptions({categoriesIds: categoriesIds}, 'product'));
                // }

                push(
                    'Kartonah.Screens.VendorDetails',
                    categoriesIds.length > 0
                        ? {categoriesIds, vendor: item}
                        : {
                              vendor: item,
                          },
                );
            }}
            borderRadius={0}
            style={[styles.vendorItemImageCard]}
            elevation={0}
            // height={sideHeight}
            enableShadow={false}
            width={sideWidth}>
            <CachedImage
                source={`${UPLOAD_URL}${item.photo}`}
                thumbnailSource={`${UPLOAD_URL}${item.photo}`}
                loadingImageComponent={ActivityIndicator}
                resizeMode="cover"
                style={{
                    overflow: 'hidden',
                    padding: 0,
                    backgroundColor: '#EDEEF0',
                    height: sideHeight - 20,
                    width: sideWidth,
                    borderRadius: 0,
                    marginBottom: 0,
                    // borderWidth: 1,
                    // borderColor: 'red',
                }}
            />

            <View row style={styles.vendorItemTextContainer}>
                <Text center white bold>
                    {item.brandName}
                </Text>
                <Text center white bold>
                    {t('Min Order')} : {item.minBill} {t('unit')}
                </Text>
            </View>
            <VendorItemRating rating={item.rate} brandLogo={{uri: `${UPLOAD_URL}${item.logo}`}} />
        </Card>
    );
};

export default VendorItem;
