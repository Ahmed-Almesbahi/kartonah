import ShimmerPlaceHolder from 'components/Shimmer';
import React from 'react';
import {View} from 'react-native-ui-lib';
import SkeletonHeaderSearch from './SkeletonHeaderSearch';
import {Dimensions} from 'react-native';
import {SKELETON_COLORS} from 'utils/constants';
const {width} = Dimensions.get('window');

const SkeletonProductDetails = ({}) => {
    const getItem = description => {
        return (
            <View style={{height: 40}}>
                <ShimmerPlaceHolder
                    width={60}
                    height={40}
                    shimmerColors={SKELETON_COLORS}
                    shimmerStyle={[{borderRadius: 20, alignSelf: 'center'}]}
                />
                {description?.description === 'show' ? (
                    <View marginT-10>
                        <ShimmerPlaceHolder
                            width={150}
                            // marginT-10
                            // style={{marg}}
                            shimmerColors={SKELETON_COLORS}
                            shimmerStyle={[{borderRadius: 20, marginBottom: 10}]}
                        />
                    </View>
                ) : null}
            </View>
        );
    };
    return (
        <View bg-white>
            <View style={{justifyContent: 'space-between'}} paddingH-20 marginB-30 marginT-100>
                <ShimmerPlaceHolder
                    width={150}
                    shimmerColors={SKELETON_COLORS}
                    shimmerStyle={[{borderRadius: 20, marginBottom: 10}]}
                />
                <ShimmerPlaceHolder
                    width={250}
                    // style={{}}
                    shimmerColors={SKELETON_COLORS}
                    shimmerStyle={[{borderRadius: 20, marginBottom: 10}]}
                />
                <ShimmerPlaceHolder
                    style={{marignTop: 50}}
                    width={150}
                    shimmerColors={SKELETON_COLORS}
                    shimmerStyle={[{borderRadius: 20}]}
                />
            </View>
            <ShimmerPlaceHolder height={433} width={width} shimmerColors={SKELETON_COLORS} />

            {/* <View row style={{justifyContent: 'space-around'}} padding-10>
        <ShimmerPlaceHolder
          shimmerStyle={{borderRadius: 10}}
          width={width / 2.3}
          shimmerColors={SKELETON_COLORS}
        />
        <ShimmerPlaceHolder
          shimmerStyle={{borderRadius: 10}}
          width={width / 2.3}
          shimmerColors={SKELETON_COLORS}
        />
      </View> */}

            <View
                // row
                marginT-20
                marginL-20
                style={{
                    // justifyContent: 'space-around',
                    // paddingHorizontal: 20,
                    marginBottom: 20,
                    alignItems: 'flex-start',
                }}>
                {getItem()}
            </View>
            <View
                row
                style={{
                    justifyContent: 'space-around',
                    paddingHorizontal: 20,
                    height: 80,
                }}>
                {getItem({description: 'show'})}
                {getItem({description: 'show'})}
            </View>
            <View centerH marginT-15>
                <ShimmerPlaceHolder
                    width={250}
                    // marginT-10

                    // style={{marg}}
                    shimmerColors={SKELETON_COLORS}
                    shimmerStyle={[{borderRadius: 20, marginBottom: 10}]}
                />
            </View>
        </View>
    );
};

export default SkeletonProductDetails;
