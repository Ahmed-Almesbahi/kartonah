import React, {useState} from 'react';
import {TextField, Text, View, Button, Colors} from 'react-native-ui-lib';
import {useDispatch} from 'react-redux';
import styles from 'theme/styles';
import Tools from 'utils/Tools';
import {actions} from '../app-redux/reducers/cart';

const Increament = ({item}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(item.quantity);

  return (
    <>
      <View centerV row>
        <Button
          avoidMinWidth
          outline
          style={styles.increamentVButton0}
          outlineColor={Colors.secondary}
          onPress={() => {
            actions.removeCartItem(dispatch, item.product, item.variation);

            setValue(value - item.product.quantityStep);
          }}>
          <Text text70 seondary>
            -
          </Text>
        </Button>
        <TextField
          style={[styles.increamentHTextField, {textAlign: 'center'}]}
          hideUnderline
          value={String(value)}
          // keyboardType="numeric"
          enableErrors={false}
          editable={false}
          // onChangeText={(v) => {
          //   setValue(Number(v));
          // }}
        />
        <Button
          avoidMinWidth
          style={styles.increamentVButton0}
          backgroundColor={Colors.secondary}
          onPress={() => {
            actions.addCartItem(dispatch, item.product, item.variation);
            setValue(value + item.product.quantityStep);
          }}>
          <Text text70 white margin-0>
            +
          </Text>
        </Button>
      </View>
    </>
  );
};

export default Increament;
