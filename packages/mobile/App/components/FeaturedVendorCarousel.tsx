import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {View} from 'react-native-ui-lib';
import VendorItem from 'components/VendorItem';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styles from 'theme/styles';
import {vendors} from 'data/demos';
const {width} = Dimensions.get('window');
import {VendorItemType} from 'typescript/types';

const VendorCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const renderVendorItemCarousel = ({item}: {item: VendorItemType}) => (
    <VendorItem item={item} />
  );
  return (
    <View>
      <Carousel
        data={vendors}
        renderItem={renderVendorItemCarousel}
        sliderWidth={width}
        itemWidth={width}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        loop
        autoplay
        pagingEnabled
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={vendors.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.carouselPaginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default VendorCarousel;
