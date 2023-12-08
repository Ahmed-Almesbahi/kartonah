import React from 'react';
import {View, Shadows} from 'react-native-ui-lib';
import ShimmerPlaceHolder from 'components/Shimmer';
import {SKELETON_COLORS} from 'utils/constants';
import {StyleSheet} from 'react-native';

const SkeletonBottomNavigation = ({}) => (
  <View
    useSafeArea
    style={{
      ...StyleSheet.absoluteFillObject,
      top: undefined,
      backgroundColor: 'white',
      ...Shadows.sh30.top,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    }}>
    <View row centerV style={{height: 68, justifyContent: 'space-around'}}>
      <ShimmerPlaceHolder
        shimmerStyle={{borderRadius: 10}}
        width={30}
        shimmerColors={SKELETON_COLORS}
      />
      <ShimmerPlaceHolder
        shimmerStyle={{borderRadius: 10}}
        width={30}
        shimmerColors={SKELETON_COLORS}
      />
      <ShimmerPlaceHolder
        shimmerStyle={{borderRadius: 10}}
        width={30}
        shimmerColors={SKELETON_COLORS}
      />
      <ShimmerPlaceHolder
        shimmerStyle={{borderRadius: 10}}
        width={30}
        shimmerColors={SKELETON_COLORS}
      />
      <ShimmerPlaceHolder
        shimmerStyle={{borderRadius: 10}}
        width={30}
        shimmerColors={SKELETON_COLORS}
      />
    </View>
  </View>
);

export default SkeletonBottomNavigation;
