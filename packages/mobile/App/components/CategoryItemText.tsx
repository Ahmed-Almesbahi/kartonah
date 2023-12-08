import React from 'react';
import {Text, Colors} from 'react-native-ui-lib';
import Button from 'react-native-ui-lib/button';
import styles from 'theme/styles';
const CategoryItemText = ({
  title,
  active,
  onPress,
}: {
  title: string;
  active: boolean;
  onPress: () => void;
}) => {
  return (
    <Button
      style={active ? styles.categoryButtonActive : styles.categoryButton}
      link
      onPress={onPress}>
      <Text
        // color={active ? Colors.secondary : Colors.muted}
        text70>
        {title}
      </Text>
    </Button>
  );
};

export default CategoryItemText;
