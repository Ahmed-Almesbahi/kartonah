import React from 'react';
import {
  View,
  Colors,
  KeyboardAwareScrollView,
  Text,
  Image,
  Assets,
} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import moment from 'moment';
import {quotations} from 'typescript/api.types';
import {UPLOAD_URL} from 'utils/constants';

const QutationDetails = ({item}: {item: quotations.Row}) => {
  const {t} = useTranslation();
  console.log('ee', UPLOAD_URL + item.photo);
  return (
    <View flex backgroundColor={Colors.white}>
      <Header
        showBack
        white
        title={t('Qutation')}
        // showChat
      />
      <KeyboardAwareScrollView bounces={false}>
        <View
          spread
          row
          paddingH-20
          paddingV-10
          backgroundColor={Colors.secondary}>
          <View centerV row>
            <Image source={Assets.icons.qutation} />
            <Text text80 white marginL-10>
              #{item.id}
            </Text>
          </View>
          <View centerV row>
            <View style={styles.status} backgroundColor={Colors.green10} />
            <Text white marginL-5 text2>
              {item.status ? t('Active') : t('Closed')}
            </Text>
          </View>
        </View>
        <View paddingH-20 marginV-10 centerV row>
          <View flex>
            <Text text80 secondary textMuted>
              {t('Name')}
            </Text>
            <Text text2 secondary>
              {item.title}
            </Text>
          </View>
          <View flex>
            <Text text80 secondary textMuted>
              {t('Last activity')}
            </Text>
            <Text text2 secondary>
              {moment(item.updated_at).fromNow()}
            </Text>
          </View>
        </View>
        <View paddingH-20 marginV-10 centerV row>
          <View style={styles.fancySeparator} backgroundColor={Colors.light} />
        </View>
        <View paddingH-20 marginV-10>
          <View marginB-10 row>
            <View flex-1>
              <Text text80 textMuted>
                {t('Category')}:
              </Text>
            </View>
            <View flex-3>
              <Text text80>{item?.category?.elment_trans[0]?.title}</Text>
            </View>
          </View>
          <View marginB-10 row>
            <View flex-1>
              <Text text80 textMuted>
                {t('Looking for')}:
              </Text>
            </View>
            <View flex-3>
              <Text text80>{item.title}</Text>
            </View>
          </View>
          <View row>
            <View flex-1>
              <Text text80 textMuted>
                {t('Quantity')}:
              </Text>
            </View>
            <View flex-3>
              <Text text80>{item.quantity}KG</Text>
            </View>
          </View>
        </View>
        <View paddingH-20 marginV-10 centerV row>
          <View style={styles.fancySeparator} backgroundColor={Colors.light} />
        </View>
        <View paddingH-20 marginV-10>
          <Text text80 marginB-10 textMuted>
            {t('Description')}
          </Text>
          <Text text80 secondary>
            {item.description}
          </Text>
        </View>
        <View paddingH-20 marginV-10 centerV row>
          <View style={styles.fancySeparator} backgroundColor={Colors.light} />
        </View>
        <View paddingH-20 marginV-10>
          <Text text80 marginB-10 textMuted>
            {t('Photo attached')}
          </Text>
          <Image
            style={styles.qutationDetailsImage}
            source={{uri: UPLOAD_URL + item.photo}}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

QutationDetails.screenName = 'Kartonah.Screens.QutationDetails';

QutationDetails.options = {
  bottomTabs: {
    visible: false,
  },
};

export default QutationDetails;
