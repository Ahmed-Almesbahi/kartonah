// third party
import React, {useEffect, useState} from 'react';
import {View, Colors, KeyboardAwareScrollView, Card, Assets, Button, Text, Image} from 'react-native-ui-lib';
import {useTranslation} from 'react-i18next';
import Share from 'react-native-share';
import {useNavigation, showModal} from 'react-native-navigation-hooks';
import {useDispatch, useSelector} from 'react-redux';
import {logout, updateUserReducer} from 'app-redux/actions/auth';
import ImagePicker from 'react-native-image-crop-picker';
import Intercom from 'react-native-intercom';
import firebaseAuth from '@react-native-firebase/auth';
import {useFormik} from 'formik';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Rate, {AndroidMarket} from 'react-native-rate';
import {ReactNativeFile} from 'extract-files';
import LinearGradient from 'react-native-linear-gradient';

//applications
import BottomTabsBg from 'components/BottomTabsBg';
import Header from 'components/Header';
import {auth as authScreen} from 'navigation/appRoots';
import AccountButton from 'components/AccountButton';
import styles from 'theme/styles';
import Tools from 'utils/Tools';
import {uploadAvatar} from 'app-redux/actions/api';
import {FONT, STORE_RATING, UPLOAD_URL} from 'utils/constants';
import PickerField from 'components/PickerField';
import {languagePicker} from 'data/demos';
import {toast} from 'utils/helper';
import KartonahApi from 'kartonah-common/api';
import {usePush} from 'utils/hooks';
import AccountLogin from 'components/AccountLogin';

const Account = () => {
    const push = usePush();
    const dispatch = useDispatch();
    // const [isRateModalOpen, openRateModal] = useState(false);
    const {t} = useTranslation();
    const {auth} = useSelector(state => state);
    const [count, setCount] = useState(0);

    // intercom
    useEffect(() => {
        // setUpInterCom();

        Intercom.addEventListener(Intercom.Notifications.UNREAD_COUNT, _onUnreadChange);

        return () => {
            // Make sure to unregister the listener during cleanup
            Intercom.removeEventListener(Intercom.Notifications.UNREAD_COUNT, _onUnreadChange);
        };
    }, []);

    const _onUnreadChange = e => {
        setCount(e.count);
    };

    const share = async () => {
        await Share.open({
            title: t('Kartonah App'),
            message: `${t('Download Kartonah application and get the best offers')}, https://kartonah.page.link/app`,
            subject: t('Kartonah App'),
        }).catch(err => {
            err && console.log(err);
        });
    };
    const handleClick = () => {
        Intercom.displayMessenger();
        // Linking.canOpenURL('https://wa.link/g0jzai').then((supported) => {
        //   if (supported) {
        //     Linking.openURL('https://wa.link/g0jzai');
        //   } else {
        //     console.log("Don't know how to open URI: " + 'https://wa.link/g0jzai');
        //   }
        // });
    };

    const pickImage = async () => {
        ImagePicker.openPicker({
            width: 200,
            height: 200,
            cropping: true,
        }).then(image => {
            // let uploadData = new FormData();
            // uploadData.append('file', {
            //   type: image.mime,
            //   uri: image.path,
            //   name: image.path.split('/').pop(),
            // });
            // uploadData.append('files[]', {
            //   type: image.mime,
            //   uri: image.path,
            //   name: image.path.split('/').pop(),
            // });
            dispatch(
                updateUserReducer({
                    photo: image.path,
                }),
            );

            const file = new ReactNativeFile({
                type: image.mime,
                uri: image.path,
                // name: image.path.split('/').pop(),
                name: image.path,
            });
            dispatch(uploadAvatar(auth.id, file)).then(({data}) => {});
            // dispatch(uploadAvatar(auth.id, uploadData)).then(({data}) => {});
            // dispatch(uploadAvatar(auth.id, [{
            //   type: image.mime,
            //   uri: image.path,
            //   name: image.path.split('/').pop(),
            // }])).then(({data}) => {});
        });
    };

    const afterUpdate = (values, userLang) => {
        dispatch(updateUserReducer(values));
        if (values.contactLang != userLang) {
            const isRtl = values.contactLang === 'AR';
            // change RTL
            I18nManager.allowRTL(isRtl);
            I18nManager.swapLeftAndRightInRTL(isRtl);
            I18nManager.forceRTL(isRtl);
            // Enable for mode RTL
            setTimeout(() => {
                RNRestart.Restart();
            }, 2000);
        } else {
            toast(t('Saved !'), 'success');
        }
    };

    const formik = useFormik({
        initialValues: {
            id: auth.id,
            contactLang: auth.contactLang,
            countryId: auth.countryId,
            preferredCurrency: auth.preferredCurrency,
            firstName: auth.firstName,
            lastName: auth.lastName,
            // commercialTitle: auth.commercialTitle,
            phone: auth.phone,
        },
        onSubmit: values => {
            let userLang = auth.contactLang;

            if (auth?.id > 0) {
                dispatch(KartonahApi.updateUser(values)).then(res => {
                    formik.setSubmitting(false);

                    if (res.error) {
                        toast(res.error ? res.error : res.message, 'error');
                    } else {
                        afterUpdate(values, userLang);
                        // const {rtl, language} = general;
                    }
                    // do sth with response
                });
            } else {
                afterUpdate(values, userLang);
            }
        },
    });

    return (
        <View
            flex
            // backgroundColor={Colors.light}
        >
            {/* <Header white title={t('My Account')} /> */}
            <KeyboardAwareScrollView contentInsetAdjustmentBehavior="never" bounces={false}>
                <LinearGradient colors={[Colors.primary, 'white', 'white', 'white', 'white']}>
                    {auth.token ? (
                        <Card margin-10 marginB-0 marginT-100 paddingV-10>
                            {/* <Button backgroundColor="transparent"> */}
                            <View centerV flex row padding-15>
                                <View style={styles.accountAvatarContiner}>
                                    <Button
                                        avoidMinWidth
                                        avoidInnerPadding
                                        margin-0
                                        onPress={() => (auth.token ? pickImage() : {})}
                                        backgroundColor="transparent">
                                        <Image
                                            style={styles.accountAvatar}
                                            source={
                                                auth.id && auth.photo
                                                    ? {uri: UPLOAD_URL + auth.photo}
                                                    : Assets.images.defaultUser
                                            }
                                        />
                                    </Button>
                                </View>
                                <View centerV marginH-10>
                                    <Text text2 bold>
                                        {auth.token ? auth.firstName + ' ' + auth.lastName : t('Guest')}
                                    </Text>
                                    <Text text3 muted>
                                        {auth.token ? (auth.email ? auth.email : auth.phone) : t('Guest')}
                                    </Text>
                                </View>
                                {/* <View centerV row>
                <Image marginL-5 source={Assets.icons.cheveronRight} />
              </View> */}
                            </View>
                            {/* </Button> */}
                        </Card>
                    ) : (
                        <AccountLogin />
                    )}
                    {auth.token ? (
                        <Card margin-10 marginB-0>
                            {__DEV__ == true && (
                                <AccountButton
                                    icon={Assets.icons.accountMyWallet}
                                    onPress={() => push('Kartonah.Screens.Wallet')}
                                    title={t('My wallet')}
                                    extraText={Tools.getCurrecyFormatted(auth.userCredit)}
                                />
                            )}
                            <AccountButton
                                icon={Assets.icons.accountOrders}
                                onPress={() => push('Kartonah.Screens.Orders')}
                                title={t('My Orders')}
                            />
                            <AccountButton
                                icon={Assets.icons.accountCoupouns}
                                onPress={() => push('Kartonah.Screens.Coupons')}
                                title={t('My coupons')}
                            />
                            <AccountButton
                                icon={Assets.icons.accountAddresses}
                                onPress={() => push('Kartonah.Screens.Address')}
                                title={t('My address')}
                            />
                            <AccountButton
                                icon={Assets.icons.accountQuote}
                                onPress={() => push('Kartonah.Screens.Qutations')}
                                title={t('My quotations')}
                            />
                            {/* <AccountButton
              icon={Assets.icons.accountCards}
              onPress={() => push('Kartonah.Screens.Cards')}
              title={t('My Cards')}
            /> */}
                        </Card>
                    ) : null}
                    <Card margin-10 marginB-0>
                        <AccountButton
                            icon={Assets.icons.accountHelp}
                            onPress={handleClick}
                            title={t('Help & Support')}
                            // extraText={count > 0 ? count.toString() : undefined}
                        />
                        <AccountButton
                            icon={Assets.icons.languages}
                            onPress={() => {
                                showModal('Kartonah.Screens.EditSettings', {
                                    onSubmit: () => formik.handleSubmit(),
                                    input: (
                                        <PickerField
                                            title={t('App Language')}
                                            data={languagePicker}
                                            setSelected={e => {
                                                // const {rtl, language} = general;

                                                // if (e.value !== language) {
                                                //   const isRtl = e.value === 'ar';

                                                //   // change RTL
                                                //   I18nManager.forceRTL(isRtl);
                                                //   dispatch(setLanuage(e.value, isRtl));

                                                //   // Enable for mode RTL
                                                //   setTimeout(() => {
                                                //     RNRestart.Restart();
                                                //   }, 2000);
                                                // }
                                                formik.setFieldValue('contactLang', e.value);
                                            }}
                                            value={languagePicker.find(v => v.value == formik.values.contactLang)}
                                        />
                                    ),
                                });
                            }}
                            title={t('App Language')}
                        />
                        <AccountButton
                            icon={Assets.icons.accountSettings}
                            onPress={() => push('Kartonah.Screens.Settings')}
                            title={t('Settings')}
                        />
                        <AccountButton
                            icon={Assets.icons.accountRate}
                            onPress={() => {
                                Rate.rate(STORE_RATING, success => {
                                    if (success) {
                                        console.log('success', success);
                                        // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
                                        // this.setState({rated: true});
                                    }
                                });
                                // openRateModal(true);
                            }}
                            title={t('Rate our app')}
                        />
                        <AccountButton icon={Assets.icons.accountShare} onPress={share} title={t('Share our app')} />
                    </Card>
                    {auth.token ? (
                        <Card margin-10>
                            <AccountButton
                                icon={Assets.icons.accountLogout}
                                onPress={async () => {
                                    // await GoogleSignin.revokeAccess();
                                    await GoogleSignin.signOut();
                                    await firebaseAuth().signOut();
                                    dispatch(logout());
                                    authScreen();
                                }}
                                title={t('Logout')}
                            />
                        </Card>
                    ) : null}
                </LinearGradient>
            </KeyboardAwareScrollView>
            {/* <RateModal
        modalTitle={t('Rate our App')}
        rateBtnText={t('Rate')}
        cancelBtnText={t('Cancel')}
        totalStarCount={5}
        defaultStars={0}
        isVisible={true}
        sendBtnText={t('Send')}
        commentPlaceholderText={t('Placeholder text')}
        emptyCommentErrorMessage={t('Empty comment error message')}
        playStoreUrl={'market://details?id=com.justyol.android'}
        // iTunesStoreUrl={'itms-apps://itunes.apple.com/app/com.kartonah.App'}
        iTunesStoreUrl={'itms-apps://itunes.apple.com/app/1495089082'}
        isModalOpen={isRateModalOpen}
        storeRedirectThreshold={0}
        onClosed={() => openRateModal(false)}
        sendContactUsForm={state => {
          console.log('nothing');
        }}
        style={{
          fontFamily: FONT,
        }}
      /> */}
            <BottomTabsBg />
        </View>
    );
};

Account.screenName = 'Kartonah.Screens.Account';

export default Account;
