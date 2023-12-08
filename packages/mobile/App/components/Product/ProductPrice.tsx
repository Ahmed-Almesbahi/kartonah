import React from 'react';
import {AirbnbRating} from 'react-native-ratings';
import {Colors, View, Button, Text, Image, Assets} from 'react-native-ui-lib';
import styles from 'theme/styles';
import Share from 'react-native-share';
import {useTranslation} from 'react-i18next';
import Tools from 'utils/Tools';
import {product as pType} from 'typescript/api.types';
import {useSelector} from 'react-redux';

const ProductPrice = ({product, stocks = false}: {product: {data: pType.RootObject}; stocks?: boolean}) => {
    const {t} = useTranslation();
    const general = useSelector(state => state.general);
    let generalCountry = general?.country;

    const share = async () => {
        await Share.open({
            title: t('Kartonah App'),
            // message: t('This product is a wonderfull, please check it out'),
            subject: product.data?.row?.title ? product.data?.row?.title : product.data?.row?.elment_trans[0]?.title,
            url: `https://kartonah.page.link/?link=https://kartonah.com/shop/product/${product?.data?.row?.id}&apn=com.justyol.android&isi=1495089082&ibi=com.kartonah.App`,
            //
        });
    };
    // return null;

    // return product.data?.row?.stock > 0 || product.data?.row?.vendor?.userPriceVariations?.length ? (
    return (
        <View
            backgroundColor={Colors.white}
            // marginB-10
            padding-20>
            {product.data?.row?.stock > 0 && (
                <View marginV-10 row>
                    <Button avoidMinWidth style={styles.button} outline outlineColor={Colors.light}>
                        <Text text80 secondary>
                            {t('In Stock')} ({product.data?.row?.stock})
                        </Text>
                    </Button>
                </View>
            )}
            {product.data?.row?.vendor?.userPriceVariations?.length > 0 ? (
                <View marginV-10 row>
                    {product.data?.row?.vendor?.userPriceVariations?.map(up => (
                        <View center flex>
                            <Text marginB-10 text2 bold>
                                {Tools.getCurrecyFormatted(
                                    product.data?.row?.regularPrice -
                                        product.data?.row?.regularPrice * (up.discount / 100),
                                )}
                            </Text>
                            <Text text80>
                                {up.from} - {up.to} {t('Pieces')}
                            </Text>
                        </View>
                    ))}
                </View>
            ) : (
                <Text text50 bold secondary center style={{lineHeight: 30}}>
                    {Tools.getPriceWithCurrecyFormatted(
                        stocks
                            ? product.data?.row?.price / product.data?.row?.quantity
                            : product.data?.row?.regularPrice,
                    )}
                </Text>
            )}
            {generalCountry.isShippingPriceIncluded == 1 && (
                <Text center text80 color={Colors.grey30} bold>
                    {t('Shipping Fees is not included')}
                </Text>
            )}
        </View>
    );
};
export default ProductPrice;
