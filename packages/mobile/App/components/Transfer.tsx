import React from 'react';
import {View, Text, Image, Assets} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';

const Transfer = ({
  datetime,
  amount,
  type,
}: {
  datetime: string;
  amount: string;
  type: 'in' | 'out';
}) => {
  const {t} = useTranslation();
  return (
    <View row spread marginB-10 marginH-20>
      <View row centerV>
        <Image
          marginR-10
          source={
            type === 'in' ? Assets.icons.transferIn : Assets.icons.transferOut
          }
        />
        <Text text80 secondary>
          {t('at')} {datetime}
        </Text>
      </View>
      {type === 'in' && (
        <Text text80 green30>
          + {amount}
        </Text>
      )}
      {type === 'out' && (
        <Text text80 red30>
          - {amount}
        </Text>
      )}
    </View>
  );
};

export default Transfer;
