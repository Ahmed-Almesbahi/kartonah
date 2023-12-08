import ShimmerPlaceHolder from 'components/Shimmer';
import React from 'react';
import {View} from 'react-native-ui-lib';
import SkeletonHeaderSearch from './SkeletonHeaderSearch';
import {Dimensions} from 'react-native';
import {SKELETON_COLORS} from 'utils/constants';
import SkeletonBottomNavigation from './SkeletonBottomNavigation';
const {width} = Dimensions.get('window');

const SkeletonCart = ({}) => {
  const cartVendor = () => {
    return (
      <View row style={{justifyContent: 'space-between'}} padding-10 marginB-20>
        <ShimmerPlaceHolder
          shimmerStyle={{borderRadius: 10}}
          width={width / 2.3}
          shimmerColors={SKELETON_COLORS}
        />
        <ShimmerPlaceHolder
          shimmerStyle={{borderRadius: 10}}
          width={width / 8.2}
          shimmerColors={SKELETON_COLORS}
        />
      </View>
    );
  };
  const cartItem = () => {
    return (
      <View style={{flexDirection: 'row'}} paddingH-20 marginB-30>
        <ShimmerPlaceHolder
          width={80}
          height={80}
          style={{marginRight: 10}}
          shimmerColors={SKELETON_COLORS}
          shimmerStyle={[{borderRadius: 10}]}

          //   visible={avatarVisible}
        >
          {/* {hasData && <Image
              style={{ width: 80, height: 80, borderRadius: 100 }}
              source={{ uri: 'https://unsplash.it/1000/1000' }}
              onLoadEnd={() => setAvatarVisible(true)}
            />} */}
        </ShimmerPlaceHolder>
        <View style={{justifyContent: 'space-between'}}>
          <ShimmerPlaceHolder
            width={100}
            style={{}}
            shimmerColors={SKELETON_COLORS}
            shimmerStyle={[{borderRadius: 20}]}
          />
          <ShimmerPlaceHolder
            width={150}
            shimmerColors={SKELETON_COLORS}
            shimmerStyle={[{borderRadius: 20}]}
          />
          <ShimmerPlaceHolder
            width={200}
            shimmerColors={SKELETON_COLORS}
            shimmerStyle={[{borderRadius: 20}]}
          />
        </View>
      </View>
    );
  };

  return (
    <View bg-white>
      {cartVendor()}
      {cartItem()}
      {cartItem()}
      {cartVendor()}
      {cartItem()}
      {cartItem()}
      {cartItem()}
    </View>
  );
};

export default SkeletonCart;
