import React from 'react';
import {View} from 'react-native-ui-lib';
import ShimmerPlaceHolder from 'components/Shimmer';
import {SKELETON_COLORS} from 'utils/constants';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const SkeletonHeaderSearch = ({}) => (
  <>
    <ShimmerPlaceHolder
      height={100}
      width={width}
      shimmerColors={SKELETON_COLORS}
    />
    <View
      style={{
        width: width / 1.2,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        position: 'absolute',
        top: 50,
        alignSelf: 'center',
      }}
    />
  </>
);

export default SkeletonHeaderSearch;
