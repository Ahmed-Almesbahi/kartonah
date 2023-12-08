import React, {useCallback} from 'react';
import {ActivityIndicator, Dimensions, I18nManager} from 'react-native';
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
const sideWidth = width / 1.2;

const VendorItemHome = ({item, categoriesIds}: {item: vendrosByCategoryRow}) => {
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
            style={[styles.vendorItemImageCard, {marginRight: 10}]}
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

            <View
                row
                style={{
                    position: 'absolute',
                    borderRadius: 5,
                    bottom: 20,
                    left: 20,
                    right: 20,
                    padding: 10,
                    backgroundColor: '#0D143599',
                    justifyContent: 'space-between',
                }}>
                <Text center white bold>
                    {item.brandName}
                </Text>
                <Text center white bold>
                    {t('Min Order')} : {item.minBill} {t('unit')}
                </Text>
            </View>
            <Card /* eslint-ignore-line */
                style={[{position: 'absolute', top: 10, left: 10}, I18nManager.isRTL ? {right: 30, left: 'auto'} : {}]}
                borderRadius={5}
                elevation={2}
                height={width / 4}
                width={width / 4}>
                <Card.Image height={width / 4} width={width / 4} source={{uri: `${UPLOAD_URL}${item.logo}`}} />
            </Card>
        </Card>
    );
};

export default VendorItemHome;
