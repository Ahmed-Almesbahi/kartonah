import React from 'react';
import {ActivityIndicator, Dimensions} from 'react-native';
import {useNavigation} from 'react-native-navigation-hooks';
import {View, Carousel, Image, AnimatedImage, TouchableOpacity} from 'react-native-ui-lib';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import styles from 'theme/styles';
import {getProductImage} from 'utils/helper';
import {CachedImage} from '@georstat/react-native-image-cache';

const CarouselGallery = ({images}: {images: Array<string>}) => {
    const {showModal} = useNavigation();
    if (!images) {
        return null;
    }
    const {width} = Dimensions.get('window');

    return (
        <View style={{height: 433}}>
            <Carousel
                // animated
                // containerStyle={{
                //   height: 800,
                // }}
                //   key={7}
                //   ref={this.carousel}
                loop
                autoplay={true}
                autoplayInterval={3000}
                //   onChangePage={this.onChangePage}
                pageWidth={width * 0.82}
                itemSpacings={50}
                //   itemSpacings={Spacings.s3}
                //   containerMarginHorizontal={Spacings.s2}
                initialPage={0}
                containerStyle={styles.productDetailsImage}
                pageControlPosition={Carousel.pageControlPositions.OVER}
                //   pageControlProps={{onPagePress: this.onPagePress, limitShownPages}}
                // loop
                // showCounter
                pagingEnabled
                allowAccessibleLayout>
                {images?.map((image, i) => {
                    // console.log('i', i);
                    return (
                        <TouchableOpacity
                            key={i}
                            bg-white
                            style={{
                                width: width * 0.8,
                                margin: 0,
                                padding: 0,
                                height: 433,
                            }}
                            onPress={() => {
                                showModal('Kartonah.Screens.PhotoModal', {
                                    images: images,
                                });
                            }}>
                            <CachedImage
                                source={getProductImage(image, 720)}
                                thumbnailSource={getProductImage(image, 720)}
                                loadingImageComponent={ActivityIndicator}
                                resizeMode="cover"
                                style={{
                                    flex: 1,

                                    height: Dimensions.get('window').width * 1.5,
                                }}
                            />
                            {/* <AnimatedImage
                overlayType={Image.overlayTypes.BOTTOM}
                containerStyle={{
                  flex: 1,
                  backgroundColor: Colors.yellow70,
                  width: undefined,
                  height: undefined,
                }}
                style={{
                  flex: 1,
                  width: undefined,
                  height: undefined,
                }}
                resizeMode="contain"
                source={{
                  uri: getProductImage(image, 720),
                  cache: 'force-cache',
                }}
                loader={<ActivityIndicator />}
                // animationDuration={400}
              /> */}
                            {/* </View> */}
                        </TouchableOpacity>
                    );
                })}
            </Carousel>
        </View>
    );
};

export default CarouselGallery;
