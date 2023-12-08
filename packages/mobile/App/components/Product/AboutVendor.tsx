import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Colors, View, Text, Button, Image, Assets} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {product as pType} from 'typescript/api.types';
import {UPLOAD_URL} from 'utils/constants';
import {useNavigation} from 'react-native-navigation-hooks';
import {useQuery} from '@redux-requests/react';
import {FETCH_PRODUCTS, FETCH_STOCKS2, getProducts, fetchStocks2} from 'app-redux/actions/api';
import {initialFilterState} from 'app-redux/actions/filter';
import ProductItemSmall from 'components/ProductItemSmall';
import {AirbnbRating} from 'react-native-ratings';
import ProductItemSmallSale from 'components/ProductItemSmallSale';
import {usePush} from 'utils/hooks';

const AboutVendor = ({product, vendorId, stocks = false}: {product: {data: pType.RootObject}; stocks?: boolean}) => {
    const {t} = useTranslation();
    const {showModal, pop} = useNavigation();
    const push = usePush();

    const [venderPr] = useState({
        ...initialFilterState,
        userId: vendorId,
    });

    const vendorProducts = useQuery({
        type: stocks ? FETCH_STOCKS2 : FETCH_PRODUCTS,
        action: stocks ? fetchStocks2 : getProducts,
        variables: [venderPr, 'product'],
        autoLoad: true,
    });

    const renderProductItem = ({item}: {item: pType.SimilarProduct}) =>
        stocks ? (
            <ProductItemSmallSale key={item.id} item={item} />
        ) : (
            <ProductItemSmall key={item.id} item={item} pushType="replace" size={'L'} />
        );

    return (
        <View backgroundColor={Colors.white} marginB-10>
            <Text text80 marginH-20 marginV-10 h3 uppercase secondary>
                {t('About Vendor')}
            </Text>
            <View style={[styles.fancySeparator, {width: 'auto'}]} marginH-20 backgroundColor={Colors.light} />
            <View padding-20 paddingT-15 backgroundColor={Colors.white} centerV spread row>
                <View style={styles.vendorDetailsLogoContainer}>
                    <Button link avoidMinWidth avoidInnerPadding onPress={() => pop()}>
                        <Image
                            style={styles.vendorDetailsLogo}
                            source={{
                                uri: `${UPLOAD_URL}${product.data?.row?.vendor?.logo}`,
                            }}
                        />
                    </Button>
                </View>
                <View paddingH-10 flex left>
                    <Button
                        link
                        style={{
                            justifyContent: 'flex-start',
                        }}
                        avoidMinWidth
                        avoidInnerPadding
                        marginB-10
                        onPress={() => pop()}>
                        <Text bold>{product.data?.row?.vendor.brandName}</Text>
                    </Button>
                    {/* <AirbnbRating
            count={5}
            defaultRating={0}
            size={10}
            isDisabled
            showRating={false}
            // ratingBackgroundColor="transparent"
            style={styles.productRating}
          /> */}
                </View>
                <View row centerV>
                    <Text text70>
                        {product.data?.row?.vendor.minBill} {t('Pieces')}
                    </Text>
                    <Text marginT-5 text90>
                        {' '}
                        ({t('Min Order')})
                    </Text>
                </View>
            </View>
            <Text text70 marginH-20 marginB-10>
                {t('Best products')}
            </Text>
            {/* <View style={styles.fancySeparator} backgroundColor={Colors.light} /> */}
            <FlatList
                style={{marginLeft: 10}}
                bounces={false}
                data={vendorProducts.data?.rows}
                renderItem={renderProductItem}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <View row spread marginH-20 marginT-25 marginB-25>
                <Button
                    outlineColor={Colors.grey50}
                    // margin-10
                    onPress={() =>
                        showModal('Kartonah.Screens.NewQutation', {
                            // categoryId: product.data?.row?.prdctcats[0]?.parentId,
                            vendorId: product.data?.row?.user?.id,
                        })
                    }
                    style={[styles.button, {width: '49%', backgroundColor: '#F1F1F1', height: 47, paddingBottom: 5}]}>
                    <Image source={Assets.icons.fileText} tintColor={Colors.secondary} marginR-10 marginB-8 />
                    <Text text80 secondary>
                        {t('Send Quotation')}
                    </Text>
                </Button>
                {/* <Button
                    onPress={() => push('Kartonah.Screens.VendorDetails', {vendor: product.data?.row?.vendor})}
                    style={[styles.button, {width: '49%', backgroundColor: '#0D1435', paddingBottom: 5, height: 47}]}>
                    <Text text60 white>
                        {t('Visit Vendor')}
                    </Text>
                </Button> */}
            </View>
        </View>
    );
};
export default AboutVendor;
