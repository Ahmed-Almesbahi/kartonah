import React from 'react';
import {
  KeyboardAwareScrollView,
  View,
  Text,
  Colors,
  TextArea,
} from 'react-native-ui-lib';
import Header from 'components/Header';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {updateAddress} from 'app-redux/actions/api';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {toast} from 'utils/helper';

import {useNavigation} from 'react-native-navigation-hooks';
import ErrorText from 'components/ErrorText';
import Button from 'components/Button';

import {AirbnbRating} from 'react-native-ratings';
import {createRate} from 'app-redux/actions/api';
import {useDispatchRequest} from '@redux-requests/react';

const NewRate = ({id}) => {
  const {t} = useTranslation();
  const dispatch = useDispatchRequest();
  const {dismissModal} = useNavigation();

  const formik = useFormik({
    initialValues: {
      comment: '',
      type: 'product',
      rate: 5,
      votedId: id,
    },
    validationSchema: Yup.object().shape({
      comment: Yup.string().required(t('Please enter your comment')),
    }),
    onSubmit: async values => {
      let excuteFun = createRate(values);
      dispatch(excuteFun).then(({data, error}) => {
        formik.setSubmitting(false);
        if (error) {
          toast(error.message, 'error');
        } else {
          toast(t('Thank you'), 'success');
          dismissModal();
        }

        // do sth with response
      });
    },
  });

  let saveTxt = t('Add New Rate');

  return (
    <View flex bg-white>
      <Header showCloseModal title={saveTxt} />
      <KeyboardAwareScrollView bounces={false}>
        <View padding-20>
          <Text text70 bold color={'#b7b7b7'}>
            {t('Choose your rate')}
          </Text>
          {/* <View flex left> */}
          <AirbnbRating
            count={5}
            reviews={[
              t('Terrible'),
              t('Bad'),
              t('Okay'),
              t('Good'),
              t('Great'),
            ]}
            defaultRating={5}
            size={30}
            // showRating={false}
            onFinishRating={r => {
              formik.setFieldValue('rate', r);
            }}
          />
          {/* </View> */}
          <View
            style={{
              height: 150,
              borderWidth: 1,
              marginBottom: 10,
              padding: 10,
              borderColor: Colors.dark60,
              marginTop: 30,
              textAlign: 'right',
            }}>
            <TextArea
              style={{textAlign: 'left'}}
              onChangeText={formik.handleChange('comment')}
              onBlur={formik.handleBlur('comment')}
              value={formik.values.comment}
              //   error={formik.errors.firstName}
              placeholder={t('Type your comment')}
            />
          </View>
          <ErrorText formik={formik} name="comment" />

          <Button
            marginV-20
            style={styles.button}
            disabled={formik.isSubmitting || !formik.isValid}
            onPress={formik.handleSubmit}
            backgroundColor={Colors.secondary}>
            <Text text80 white>
              {formik.isSubmitting ? t('Loading') : saveTxt}
            </Text>
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

NewRate.screenName = 'Kartonah.Screens.NewRate';

NewRate.options = {
  bottomTabs: {
    visible: false,
  },
};

export default NewRate;
