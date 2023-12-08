import ShimmerPlaceHolder from 'components/Shimmer';
import React from 'react';
import {View} from 'react-native-ui-lib';
import SkeletonHeaderSearch from './SkeletonHeaderSearch';
import {Dimensions} from 'react-native';
import {SKELETON_COLORS} from 'utils/constants';
import SkeletonBottomNavigation from './SkeletonBottomNavigation';
const {width} = Dimensions.get('window');

const SkeletonHome = ({}) => {
    const newItems = () => (
        <View style={{width: 180}} marginR-10>
            <ShimmerPlaceHolder
                height={100}
                shimmerStyle={{borderRadius: 10, height: 180, width: '100%', marginRight: 10, marginBottom: 15}}
                shimmerColors={SKELETON_COLORS}
            />
            <ShimmerPlaceHolder
                height={100}
                shimmerStyle={{borderRadius: 10, height: 15, width: '80%', marginRight: 10, marginBottom: 5}}
                shimmerColors={SKELETON_COLORS}
            />
            <ShimmerPlaceHolder
                height={100}
                shimmerStyle={{borderRadius: 10, height: 15, width: '45%', marginRight: 10, marginBottom: 15}}
                shimmerColors={SKELETON_COLORS}
            />
            <ShimmerPlaceHolder
                height={100}
                shimmerStyle={{borderRadius: 10, height: 15, width: '60%', marginRight: 10, marginBottom: 10}}
                shimmerColors={SKELETON_COLORS}
            />
        </View>
    );

    return (
        <View bg-white>
            <SkeletonHeaderSearch />

            <View margin-10>
                <ShimmerPlaceHolder
                    height={160}
                    shimmerStyle={{borderRadius: 10, width: '100%'}}
                    shimmerColors={SKELETON_COLORS}
                />
            </View>
            <View row marginT-20 padding-10 spread flex>
                <ShimmerPlaceHolder
                    height={20}
                    shimmerStyle={{borderRadius: 10, width: 200}}
                    shimmerColors={SKELETON_COLORS}
                />
                <ShimmerPlaceHolder
                    height={20}
                    shimmerStyle={{borderRadius: 10, width: 100}}
                    shimmerColors={SKELETON_COLORS}
                />
            </View>
            <View row padding-10 marginT-15>
                <ShimmerPlaceHolder
                    height={100}
                    shimmerStyle={{borderRadius: 10, width: '30%', marginRight: 10}}
                    shimmerColors={SKELETON_COLORS}
                />
                <ShimmerPlaceHolder
                    height={100}
                    shimmerStyle={{borderRadius: 10, width: '30%', marginRight: 10, marginHorizontal: 4}}
                    shimmerColors={SKELETON_COLORS}
                />
                <ShimmerPlaceHolder
                    height={100}
                    shimmerStyle={{borderRadius: 10, width: '30%', marginRight: 10}}
                    shimmerColors={SKELETON_COLORS}
                />
                <ShimmerPlaceHolder
                    height={100}
                    shimmerStyle={{borderRadius: 10, width: '30%', marginRight: 10}}
                    shimmerColors={SKELETON_COLORS}
                />
            </View>
            <View row marginT-20 padding-10 spread flex>
                <ShimmerPlaceHolder
                    height={20}
                    shimmerStyle={{borderRadius: 10, width: 150}}
                    shimmerColors={SKELETON_COLORS}
                />
            </View>
            <View row marginL-10 marginT-25>
                {newItems()}
                {newItems()}
                {newItems()}
            </View>
            <View padding-10>
                <ShimmerPlaceHolder
                    height={200}
                    shimmerStyle={{borderRadius: 10, width: '100%', marginBottom: 20}}
                    shimmerColors={SKELETON_COLORS}
                />
            </View>
            <SkeletonBottomNavigation />
        </View>
    );
};

export default SkeletonHome;
