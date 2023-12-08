import React from 'react';
import {View, Colors, Button, Checkbox} from 'react-native-ui-lib';
import {Rating} from 'react-native-ratings';
import styles from 'theme/styles';

const FilterRatingRadioItem = ({
  selected,
  count,
  onPress,
}: {
  selected: boolean;
  count: number;
  onPress: () => void;
}) => {
  return (
    <View marginV-5 centerV row spread>
      <Rating
        ratingCount={5}
        startingValue={count}
        imageSize={15}
        ratingBackgroundColor="transparent"
        style={styles.filterRating}
      />
      <Checkbox
        // value={count}
        value={selected}
        onValueChange={onPress}
        // style={{marginBottom: 20}}
      />
      {/* <Button
        avoidMinWidth
        onPress={onPress}
        style={styles.filterRadio}
        backgroundColor={Colors.white}>
        {selected && <View style={styles.radioContent} />}
      </Button> */}
    </View>
  );
};

export default FilterRatingRadioItem;
