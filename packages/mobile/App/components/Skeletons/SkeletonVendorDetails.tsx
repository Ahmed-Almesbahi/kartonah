import ShimmerPlaceHolder from 'components/Shimmer';
import React from 'react';
import {View} from 'react-native-ui-lib';
import SkeletonHeaderSearch from './SkeletonHeaderSearch';
import {Dimensions} from 'react-native';
import {SKELETON_COLORS} from 'utils/constants';
const {width} = Dimensions.get('window');

const SkeletonVendorDetails = ({}) => {
    const getItem = () => {
        return (
            <View style={{height: 320}}>
                <ShimmerPlaceHolder
                    height={20}
                    width={80}
                    shimmerStyle={{borderRadius: 10, marginBottom: 10}}
                    shimmerColors={SKELETON_COLORS}
                    style={{alignSelf: 'center', marginTop: 10, marginBottom: 20}}
                />
                <ShimmerPlaceHolder
                    height={230}
                    width={width / 2.15}
                    shimmerStyle={{borderRadius: 10, marginBottom: 10}}
                    shimmerColors={SKELETON_COLORS}
                />
                {/* <ShimmerPlaceHolder
                    // width={150}
                    width={width / 3}
                    style={{}}
                    shimmerColors={SKELETON_COLORS}
                    shimmerStyle={[{borderRadius: 20, marginBottom: 10}]}
                /> */}
                {/* <ShimmerPlaceHolder
                    width={100}
                    shimmerColors={SKELETON_COLORS}
                    shimmerStyle={[{borderRadius: 20, marginBottom: 10}]}
                /> */}
                <ShimmerPlaceHolder width={50} shimmerColors={SKELETON_COLORS} shimmerStyle={[{borderRadius: 20}]} />
            </View>
        );
    };
    const newArrival = () => (
        <View style={{width: 110, marginRight: 12}}>
            <ShimmerPlaceHolder
                width={115}
                height={115}
                style={{marginRight: 10}}
                shimmerColors={SKELETON_COLORS}
                shimmerStyle={[{borderRadius: 10}]}
            />

            <ShimmerPlaceHolder
                width={100}
                style={{marginVertical: 7}}
                shimmerColors={SKELETON_COLORS}
                shimmerStyle={[{borderRadius: 20}]}
            />
            <ShimmerPlaceHolder
                width={60}
                shimmerColors={SKELETON_COLORS}
                style={{marginVertical: 5}}
                shimmerStyle={[{borderRadius: 20}]}
            />
        </View>
    );
    return (
        <View bg-white>
            {/* <SkeletonHeaderSearch /> */}
            <View style={{position: 'relative'}}>
                <ShimmerPlaceHolder height={244} width={width} shimmerColors={SKELETON_COLORS} />
                <View
                    style={{
                        width: width / 1.4,
                        height: 44,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        position: 'absolute',
                        top: 55,
                        alignSelf: 'center',
                    }}
                />
                <View
                    style={{
                        width: 70,
                        height: 70,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        position: 'absolute',
                        bottom: 13,
                        left: 13,

                        // alignSelf: 'flex-start',
                        // justifyContent: 'flex-end',
                        // alignItems: 'flex-end',
                    }}
                />
            </View>

            <View padding-10 marginT-10>
                <ShimmerPlaceHolder shimmerStyle={{borderRadius: 10}} width={120} shimmerColors={SKELETON_COLORS} />
            </View>
            <View style={{flexDirection: 'row'}} paddingH-10 marginB-30>
                {newArrival()}
                {newArrival()}
                {newArrival()}
                {newArrival()}
            </View>
            <View padding-10 marginT-10>
                <ShimmerPlaceHolder shimmerStyle={{borderRadius: 10}} width={120} shimmerColors={SKELETON_COLORS} />
            </View>
            <View style={{flexDirection: 'row'}} paddingH-10 marginB-30>
                {newArrival()}
                {newArrival()}
                {newArrival()}
                {newArrival()}
            </View>

            <View
                row
                spread
                style={{
                    paddingHorizontal: 10,
                    marginBottom: 20,
                }}>
                {getItem()}
                {getItem()}
            </View>
            {/* <View row style={{justifyContent: 'space-around', paddingHorizontal: 20}}>
                {getItem()}
                {getItem()}
            </View> */}
        </View>
    );
};

export default SkeletonVendorDetails;
