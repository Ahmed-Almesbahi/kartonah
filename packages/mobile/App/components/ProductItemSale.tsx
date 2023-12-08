import React from 'react';
import {ActivityIndicator, Dimensions} from 'react-native';
import Button from 'react-native-ui-lib/button';
import Card from 'react-native-ui-lib/card';
import Text from 'react-native-ui-lib/text';
import View from 'react-native-ui-lib/view';
import {AnimatedImage, Colors} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {ProductItemType} from 'typescript/types';
import {useTranslation} from 'react-i18next';
import {useNavigation} from 'react-native-navigation-hooks';
import {useDispatch} from 'react-redux';
import Tools from 'utils/Tools';
import SaleCountdown from './SaleCountdown';
import {Stocks} from 'typescript/api.types';
import moment from 'moment';
import {getProductImage} from 'utils/helper';
import {CachedImage} from '@georstat/react-native-image-cache';
import {usePush} from 'utils/hooks';
const {width} = Dimensions.get('window');
const sideHeight = width / 1.4 - 20;
const sideWidth = width / 2 - 15;

const ProductItemSale = ({item}: {item: Stocks.Row}) => {
    const {t} = useTranslation();
    const push = usePush();
    const getTimeRemaining = (endtime: string) => {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    };
    let saleEnd = item.saleEnd;

    let end = moment(saleEnd).unix();
    let current = moment().unix();
    let diffInSeconds = end - current;

    return (
        <Card
            borderRadius={5}
            style={[styles.vendorProductItemCard, {width: sideWidth, borderWidth: 1, borderColor: Colors.grey60}]}
            elevation={0}
            enableShadow={false}
            onPress={() => push('Kartonah.Screens.StockDetails', {data: item})}>
            <CachedImage
                source={getProductImage(item?.files[0]?.fileName, 720)}
                thumbnailSource={getProductImage(item?.files[0]?.fileName, 400)}
                loadingImageComponent={ActivityIndicator}
                resizeMode="cover"
                style={{
                    height: sideHeight,
                    borderRadius: 5,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                    padding: 0,
                    margin: 0,
                    width: '100%',
                    borderWidth: 0,
                }}
            />
            {/* <AnimatedImage
        containerStyle={{
          backgroundColor: '#EDEEF0',
          marginBottom: 0,
          borderRadius: 5,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          height: sideHeight,
          padding: 0,
          margin: 0,
          width: '100%',
          borderWidth: 0,
        }}
        style={{
          resizeMode: 'cover',
          height: sideHeight,
          borderRadius: 5,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          padding: 0,
          margin: 0,
          width: '100%',
          borderWidth: 0,
        }}
        // source={{uri: `${item?.featured_images[0]?.imgUrl}`}}
        source={{
          uri: getProductImage(item?.featured_images[0]?.fileName, 400),
          cache: 'force-cache',
        }}
        loader={<ActivityIndicator />}
        animationDuration={400}
      /> */}
            {/* <Card.Image
        height={sideHeight}
        width={sideWidth}
        style={styles.productItemImage}
        source={{uri: `${UPLOAD_URL}${item.mainPhoto}`}}
      /> */}
            <View paddingH-10>
                <Text marginV-5 text80 bold secondary>
                    {item?.title ? item?.title : item?.elment_trans[0]?.title}
                </Text>
                <Text marginB-5 text90 bold secondary>
                    {t('QTY')}: {item.quantity} {t('units')}
                </Text>
                <View row marginB-5 centerV>
                    <Text secondary text2 bold>
                        {Tools.getCurrecyFormatted(item.price / item.quantity)}
                    </Text>
                    {/* <Text secondary superscriptText2>
            TL
          </Text> */}
                    <Text text90 secondary marginB-3>
                        /{t('unit')}
                    </Text>
                </View>
            </View>

            {/* <Button
        style={styles.productCardCartButton}
        onPress={() => push('Kartonah.Screens.ProductDetails', {data: item})}
        backgroundColor={Colors.secondary}>
        <Text white>{t('Add to cart')}</Text>
      </Button> */}

            <SaleCountdown
                // until={item.saleEnd}
                until={diffInSeconds}
                style={styles.salesTimerCard}
                digitStyle={{backgroundColor: 'white'}}
                timeToShow={['D', 'H', 'M', 'S']}
                timeLabels={{d: t('days'), h: t('hrs'), m: t('mins'), s: t('secs')}}
                // onFinish={() => alert('finished')}
                // onPress={() => alert('hello')}
                size={15}
            />

            {/* <Card
        borderRadius={5}
        width={sideWidth - 40}
        row
        style={styles.salesTimerCard}>
        <View center>
          <Text secondary center text2 bold>
            {remainTime.days}
          </Text>
          <Text secondary text3 center bold>
            {t('days')}
          </Text>
        </View>
        <View center>
          <Text secondary center text2 bold>
            {remainTime.hours}
          </Text>
          <Text secondary text3 center bold>
            {t('hrs')}
          </Text>
        </View>
        <View center>
          <Text secondary center text2 bold>
            {remainTime.seconds}
          </Text>
          <Text secondary text3 center bold>
            {t('sec')}
          </Text>
        </View>
      </Card> */}
        </Card>
    );
};

export default ProductItemSale;
