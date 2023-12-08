import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, Dimensions, DeviceEventEmitter, I18nManager, Platform, ActivityIndicator} from 'react-native';
import {View, Colors, Assets, Image, Text, Button, TouchableOpacity, AnimatedImage, Card} from 'react-native-ui-lib';
import HeaderSearch from 'components/HeaderSearch';
import {useTranslation} from 'react-i18next';
import VendorItem from 'components/VendorItem';

import {productsCategoriesRow, vendrosByCategoryRow} from 'typescript/api.types';
import {getProductsCategories, FETCH_PRODUCTS_CATEGORIES, FETCH_VENDORS_BY_CATEGORY} from 'app-redux/actions/api';
import {useQuery} from '@redux-requests/react';
import {UPLOAD_URL} from 'utils/constants';
import {useNavigation} from 'react-native-navigation-hooks';
import {useDispatch, useSelector} from 'react-redux';
import {resetRequests} from '@redux-requests/core';
import BottomTabsBg from 'components/BottomTabsBg';
import {usePush} from 'utils/hooks';

let defaultVariables = {
    skip: 0,
    take: 10,
    sortBy: 'theOrder',
    // sortBy: 'id',
    sortSign: 'ASC',
    categoriesIds: [],
};

const Categories = props => {
    const {t} = useTranslation();
    const push = usePush();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);

    const [active, setActive] = useState(0);
    const [activeSub, setActiveSub] = useState(props?.categoryId > 0 ? props?.categoryId : 0);
    const [variables, setVariables] = useState({
        ...defaultVariables,
        categoriesIds: props?.categoryId > 0 ? [{id: props?.categoryId, label: 'unknown'}] : [],
    });
    const {pop} = useNavigation();

    useEffect(() => {
        const unsubscribe = DeviceEventEmitter.addListener('onPressCategories', e => {
            //task: when i choose subcategory if i click on home button must back me to default situation
            // reset all
            if (active > 0 || activeSub > 0) {
                setActive(0);
                setActiveSub(0);
            }
        });
        return () => {
            // Make sure to unregister the listener during cleanup
            unsubscribe.remove();
        };
    }, [active, activeSub]);

    const productCategories = useQuery({
        type: FETCH_PRODUCTS_CATEGORIES,
        action: getProductsCategories,
        variables: [],
        autoLoad: true,
    });

    const onPressCategory = (index: number) => {
        dispatch(resetRequests([FETCH_VENDORS_BY_CATEGORY]));

        setVariables({...variables, categoriesIds: getChildIds(index), skip: 0});
        setActive(index);
    };

    const renderCategoryItem = ({item}: {item: productsCategoriesRow; index: number}) => {
        const isActive = active === item.id;
        return (
            <Button
                avoidMinWidth
                avoidInnerPadding
                style={[
                    {height: 74},
                    isActive
                        ? {borderLeftWidth: 2, borderLeftColor: Colors.primary, backgroundColor: Colors.grey80}
                        : {borderBottomWidth: 1, borderBottomColor: Colors.grey70},
                ]}
                link
                key={item.id}
                onPress={() => onPressCategory(item.id)}>
                <View centerH>
                    <AnimatedImage
                        containerStyle={{
                            backgroundColor: '#EDEEF0',
                            marginBottom: 3,
                            marginTop: 3,
                            borderRadius: 20,
                            padding: 10,
                            height: 38,
                            width: 38,
                        }}
                        style={{
                            resizeMode: 'cover',
                        }}
                        source={{uri: `${UPLOAD_URL}${item.icon}`}}
                        loader={<ActivityIndicator />}
                        animationDuration={0}
                    />
                    <Text text70 color={isActive ? Colors.secondary : Colors.grey40}>
                        {item.elment_trans[0]?.title}
                    </Text>
                </View>
            </Button>
        );
    };

    const renderSubCategoryItem = ({item}: {item: productsCategoriesRow}) => {
        const isActive = item.id == activeSub ? true : false;
        const squareSide = 100;
        return (
            <TouchableOpacity
                onPress={() => {
                    push('Kartonah.Screens.CategoriesVendors', {
                        ...variables,
                        categoriesIds: [{id: item.id, label: item?.elment_trans[0]?.title}],
                        skip: 0,
                    });
                    // dispatch(resetRequests([FETCH_VENDORS_BY_CATEGORY]));
                    // setVariables({
                    //     ...variables,
                    //     categoriesIds: [{id: item.id, label: item?.elment_trans[0]?.title}],
                    //     skip: 0,
                    // });
                    setActiveSub(item.id);
                }}
                flex
                centerH
                style={[{height: 150}]}>
                <View>
                    <AnimatedImage
                        containerStyle={{
                            backgroundColor: '#EDEEF0',
                            marginBottom: 10,

                            height: squareSide - 6,
                            width: 117,
                        }}
                        style={{
                            resizeMode: 'cover',
                            height: squareSide - 6,
                            width: 117,
                        }}
                        source={{uri: `${UPLOAD_URL}${item.photo}`}}
                        loader={<ActivityIndicator />}
                        animationDuration={0}
                    />
                </View>
                <Text center text80 color={Colors.secondary}>
                    {item.elment_trans[0]?.title}
                </Text>
            </TouchableOpacity>
        );
    };
    const getChildIds = parentId => {
        const _isParent = productCategories.data?.rows.find(c => c.id == parentId);
        const isParent = _isParent?.parentId == 0 ? true : false;
        let _ids: Array<number> = [];
        let subCategoryData = productCategories.data?.rows
            ?.filter(c => c.parentId == parentId)
            .map(c => {
                _ids.push(c.id);
                return {id: c.id, label: c?.elment_trans[0]?.title};
            });
        if (subCategoryData.length == 0 || isParent) {
            return [{id: _isParent.id, label: _isParent?.elment_trans[0]?.title}];
        }

        return subCategoryData;
    };

    const getParentIds = () => {
        let ids: Array<number> = [];
        productCategories.data?.rows
            ?.filter(c => c.parentId === 0)
            .map(c => {
                ids.push(c.id);
            });
        return ids;
    };
    let parentCategoryData = productCategories.data?.rows?.filter((c: any) => c.parentId === 0);
    let subCategoryData = productCategories.data?.rows?.filter(
        c =>
            (c.parentId > 0 &&
                getParentIds().includes(c.parentId) && // first child category
                active === 0) ||
            (active > 0 && active === c.parentId),
    );

    return (
        <>
            <View backgroundColor={Colors.light} flex style={[{}]}>
                <HeaderSearch title={t('Search for ...')} page="home" showChat />
                <View flex row marginT-10 style={{}}>
                    <View marginL-10 bg-white br10 style={{width: 90}}>
                        {useMemo(
                            () => (
                                <FlatList
                                    data={parentCategoryData}
                                    renderItem={renderCategoryItem}
                                    pagingEnabled
                                    inverted={I18nManager.isRTL && Platform.OS == 'android' ? true : false}
                                    showsHorizontalScrollIndicator={false}
                                />
                            ),
                            [parentCategoryData],
                        )}
                    </View>
                    <View flex marginR-10 marginL-5 bg-white br10>
                        {useMemo(
                            () => (
                                <View paddingV-15 paddingH-10>
                                    {productCategories.data?.rows ? (
                                        <FlatList
                                            data={subCategoryData}
                                            renderItem={renderSubCategoryItem}
                                            pagingEnabled
                                            inverted={I18nManager.isRTL && Platform.OS == 'android' ? true : false}
                                            numColumns={2}
                                        />
                                    ) : null}
                                </View>
                            ),
                            [subCategoryData],
                        )}
                    </View>
                </View>
                <BottomTabsBg />
            </View>
        </>
    );
};

Categories.screenName = 'Kartonah.Screens.Categories';

export default Categories;
