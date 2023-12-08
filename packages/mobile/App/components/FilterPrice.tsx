import React, {useState, useCallback} from 'react';
import {View, Text, TextField} from 'react-native-ui-lib';
import styles from 'theme/styles';
import RangeSlider from 'rn-range-slider';
import Thumb from 'components/Slider/Thumb';
import Rail from 'components/Slider/Rail';
import RailSelected from 'components/Slider/RailSelected';
import Label from 'components/Slider/Label';
import Notch from 'components/Slider/Notch';
const FilterPrice = ({formik}) => {
  const min = formik.values.priceMin;
  const max = formik.values.priceMax;
  // const [min, setMin] = useState(0);
  // const [max, setMax] = useState(100);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((mn, mx) => {
    // setMin(mn);
    // setMax(mx);
    formik.setFieldValue('priceMin', mn);
    formik.setFieldValue('priceMax', mx);
  }, []);
  return (
    <>
      <RangeSlider
        style={styles.priceSlider}
        min={0}
        max={100}
        step={10}
        low={min}
        // low={formik.values.priceMin}
        high={max}
        // high={formik.values.priceMax}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
      <View marginT-10 row centerV spread>
        <TextField
          style={styles.textFieldPriceFilter}
          hideUnderline
          keyboardType="numeric"
          enableErrors={false}
          value={`${min}`}
          // onChangeText={(mn: string) => setMin(Number(mn))}
          onChangeText={(mn: string) =>
            formik.setFieldValue('priceMin', Number(mn))
          }
        />
        <Text text80 secondary muted>
          -
        </Text>
        <TextField
          style={styles.textFieldPriceFilter}
          hideUnderline
          keyboardType="numeric"
          enableErrors={false}
          value={`${max}`}
          onChangeText={(mx: string) =>
            formik.setFieldValue('priceMax', Number(mx))
          }
        />
      </View>
    </>
  );
};

export default FilterPrice;
