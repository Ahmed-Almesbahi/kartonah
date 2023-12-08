/* eslint-disable max-len */
import React from 'react';
import {Dimensions, View} from 'react-native';

// import {AntDesign as Icon} from '@expo/vector-icons';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';

import {MIN_HEADER_HEIGHT} from './Header';

const {height} = Dimensions.get('window');
const HEADER_IMAGE_HEIGHT = height / 1.7;

export interface TabModel {
  name: string;
  anchor: number;
}

interface ContentProps {
  y: Animated.Node<number>;
  onMeasurement: (index: number, tab: TabModel) => void;
}

export default ({y, onMeasurement, menu}: ContentProps) => {
  // const opacity = interpolate(y, {
  //   inputRange: [
  //     HEADER_IMAGE_HEIGHT - MIN_HEADER_HEIGHT - 100,
  //     HEADER_IMAGE_HEIGHT - MIN_HEADER_HEIGHT,
  //   ],
  //   outputRange: [1, 0],
  //   extrapolate: Extrapolate.CLAMP,
  // });
  return (
    <>
      {/* <View style={styles.placeholder} /> */}
      {/* <Animated.View style={[styles.section, {opacity}]}>
        <Text style={styles.text}>$$ • Asiatisch • Koreanisch • Japanisch</Text>
        <View style={styles.info}>
          <Text style={styles.text}>Opens at 11:30 AM</Text>
          <View style={styles.ratings}>
            <Text style={styles.text}>(186)</Text>
          </View>
        </View>
      </Animated.View> */}

      {menu.map(({name, content}, index) => {
        const Container = index === 0 ? Animated.View : View;
        return (
          <Container
            // style={index === 0 ? {opacity} : {}}
            key={index}
            onLayout={({
              nativeEvent: {
                layout: {y: anchor},
              },
            }) => onMeasurement(index, {name, anchor: anchor - 142})}>
            {content()}
          </Container>
        );
      })}
    </>
  );
};
