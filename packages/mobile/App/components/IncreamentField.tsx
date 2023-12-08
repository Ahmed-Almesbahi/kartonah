import React, {useState} from 'react';
import {TextField, Text, View, Button, Colors} from 'react-native-ui-lib';
import styles from 'theme/styles';

const IncreamentField = ({title}: {title: string}) => {
  const [value, setValue] = useState(0);
  return (
    <>
      <Text style={[styles.textFieldTitle, styles.inputLabel]}>{title}</Text>
      <View row centerV>
        <Button
          avoidMinWidth
          style={styles.button}
          backgroundColor={Colors.light}
          onPress={() => setValue(value - 1)}>
          <Text seondary>-</Text>
        </Button>
        <TextField
          style={styles.increamentTextField}
          hideUnderline
          value={String(value)}
          keyboardType="numeric"
          enableErrors={false}
          onChangeText={(v) => {
            setValue(Number(v));
          }}
        />
        <Button
          avoidMinWidth
          style={styles.button}
          backgroundColor={Colors.secondary}
          onPress={() => setValue(value + 1)}>
          <Text white>+</Text>
        </Button>
      </View>
    </>
  );
};

export default IncreamentField;
