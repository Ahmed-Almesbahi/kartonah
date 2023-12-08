import React from 'react';
import {View, Text, Assets, Image, Button, Colors} from 'react-native-ui-lib';
import styles from 'theme/styles';
const FileField = ({
  title,
  value,
  onPress,
}: {
  title: string;
  value?: object | undefined;
  onPress: () => void;
}) => {
  return (
    <View flex>
      <Text style={[styles.textFieldTitle, styles.inputLabel]}>{title}</Text>
      <View style={styles.fileField} row spread centerV>
        <Text text80>{value?.name}</Text>
        <Button
          onPress={onPress}
          avoidMinWidth
          style={[styles.button, styles.fileFieldButton]}
          backgroundColor={Colors.secondary}>
          <Image source={Assets.icons.file} />
        </Button>
      </View>
    </View>
  );
};

export default FileField;
