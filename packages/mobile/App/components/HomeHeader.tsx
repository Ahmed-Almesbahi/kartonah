import React, {useState} from 'react';
import {FlatList, Dimensions} from 'react-native';
import {View} from 'react-native-ui-lib';

import {useTranslation} from 'react-i18next';
import CategoryItemText from 'components/CategoryItemText';
import CategoryItemImage from 'components/CategoryItemImage';

import Carousel from 'react-native-snap-carousel';
import styles from 'theme/styles';

const {width} = Dimensions.get('window');

import {productsCategoriesRow} from 'typescript/api.types';
import {
  getProductsCategories,
  FETCH_PRODUCTS_CATEGORIES,
  FETCH_VENDORS_BY_CATEGORY,
} from 'app-redux/actions/api';
import {useQuery} from '@redux-requests/react';
import {UPLOAD_URL} from 'utils/constants';

import {useDispatch} from 'react-redux';
import {resetRequests} from '@redux-requests/core';

const HomeHeader = () => {
  console.log('render');

  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const [activeSub, setActiveSub] = useState(0);
  const [variables, setVariables] = useState(0);

  const productCategories = useQuery({
    type: FETCH_PRODUCTS_CATEGORIES,
    action: getProductsCategories,
    variables: [],
    autoLoad: true,
  });

  const onPressCategory = (index: number) => {
    setActive(index);
  };

  const renderCategoryItem = ({
    item,
  }: {
    item: productsCategoriesRow;
    index: number;
  }) => (
    <CategoryItemText
      key={item.id}
      active={active === item.id}
      title={item.elment_trans[0]?.title}
      onPress={() => onPressCategory(item.id)}
    />
  );

  const renderSubCategoryItem = ({item}: {item: productsCategoriesRow}) => (
    <CategoryItemImage
      image={{
        uri: `${UPLOAD_URL}${item.photo}`,
      }}
      isActive={item.id == activeSub ? true : false}
      onPress={() => {
        dispatch(resetRequests([FETCH_VENDORS_BY_CATEGORY]));
        setVariables({...variables, categoryId: item.id});
        setActiveSub(item.id);
      }}
      name={item.elment_trans[0]?.title}
    />
  );

  const getParentIds = () => {
    let ids: Array<number> = [];
    productCategories.data?.rows
      ?.filter((c) => c.parentId === 0)
      .map((c) => {
        ids.push(c.id);
      });
    return ids;
  };

  return (
    <>
      <View paddingH-20 style={styles.categoryContainer}>
        <FlatList
          data={productCategories.data?.rows?.filter(
            (c: any) => c.parentId === 0,
          )}
          renderItem={renderCategoryItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View
        paddingV-15
        paddingH-10
        // style={{borderWidth: 1, borderColor: 'red'}}
      >
        <Carousel
          data={productCategories.data?.rows?.filter(
            (c) =>
              (c.parentId > 0 &&
                getParentIds().includes(c.parentId) && // first child category
                active === 0) ||
              (active > 0 && active === c.parentId),
          )}
          renderItem={renderSubCategoryItem}
          sliderWidth={width}
          itemWidth={width / 3}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          autoplayDelay={3000}
          autoplayInterval={6000}
          loop
          autoplay
        />
      </View>
    </>
  );
};

export default HomeHeader;
