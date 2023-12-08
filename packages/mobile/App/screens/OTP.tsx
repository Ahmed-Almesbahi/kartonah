import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView, View, Text, Button, Colors, LoaderScreen} from 'react-native-ui-lib';
import Header from 'components/Header';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {useNavigation} from 'react-native-navigation-hooks';
import {useDispatchRequest, useMutation} from '@redux-requests/react';
import * as Yup from 'yup';
import {postLoginFirebase, postOtp, POST_OTP} from 'app-redux/actions/api';
import {useFormik} from 'formik';
import Countdown from 'react-countdown-now';
import CountdownRenderer from 'components/CountdownRenderer';
import {toast} from 'utils/helper';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {storeLogin} from '../app-redux/actions/auth';
import {main} from 'navigation/appRoots';
import auth from '@react-native-firebase/auth';
import * as Sentry from '@sentry/react-native';
import {loginFirebaseRoot} from 'typescript/api.types';
import analytics from '@react-native-firebase/analytics';
import {useSelector} from 'react-redux';
import RNRestart from 'react-native-restart';
import {I18nManager} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {usePush} from 'utils/hooks';

const countdownTime = Date.now() + 5000;

const OTP = ({data, confirmation}) => {
    const [loading, setLoading] = useState(false);
    const {t} = useTranslation();
    const {pop} = useNavigation();
    const push = usePush();
    const lang = useSelector(state => state.auth.contactLang);
    // const dispatch = useDispatch();
    const dispatch = useDispatchRequest();

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState();

    // Handle user state changes
    const onAuthStateChanged = user => {
        if (user?.uid) {
            do_login();
            // setUser(user);
        }
        if (initializing) {
            setInitializing(false);
        }
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const forceRestart = () => {
        // Enable for mode RTL
        setTimeout(() => {
            RNRestart.Restart();
        }, 2000);
    };

    const [countdown, setCountdown] = useState(Date.now() + 60000);

    const do_login = () => {
        auth()
            .currentUser.getIdToken(false)
            .then(function (idToken) {
                // if new user , then redirect to registration form
                dispatch(
                    postLoginFirebase(data.formatedPhone.replace(/\s/g, ''), '', idToken, DeviceInfo.getUniqueId()),
                ).then(({data: d, error}) => {
                    if (error) {
                        setLoading(false);
                        toast(error.message, 'error');
                    } else {
                        // if (d?.success) {
                        let force_restart = false;
                        let remoteLang = d.row.user?.contactLang?.toLowerCase();

                        if (remoteLang != undefined && remoteLang != '') {
                            if (lang.toLowerCase() != remoteLang && d.row.user.contactLang.toLowerCase() == 'ar') {
                                force_restart = true;
                                I18nManager.forceRTL(true);
                            }
                        }
                        dispatch(storeLogin({...d.row.user, accessToken: d.row.accessToken}));

                        if (
                            d.row.user.firstName != null &&
                            d.row.user.firstName != undefined &&
                            d.row.user.firstName != ''
                        ) {
                            // if (!d.user.firstName || !d.user.lastName) {

                            analytics().logLogin({method: 'phone'});
                            if (force_restart) {
                                forceRestart();
                            } else {
                                main();
                            }
                        } else {
                            analytics().logSignUp({method: 'phone'});

                            push('Kartonah.Screens.Register', {
                                page: 'register',
                            });
                        }
                        analytics().setUserId(d?.row.user?.id?.toString());
                    }

                    //}  else if (error) {
                    //   formik.setSubmitting(false);
                    //   toast(error?.message, 'error');
                    // } else {
                    //   formik.setSubmitting(false);
                    //   toast(d?.message, 'error');
                    // }
                });
            })
            .catch(function (error) {
                setLoading(false);
                formik.setSubmitting(false);
                toast(error?.message, 'error');
                console.log('idToken erorr', error);
                // Handle error
            });
        // await confirmation.confirm(values.otp);
    };

    const formik = useFormik({
        initialValues: {
            otp: '',
        },
        validationSchema: Yup.object().shape({
            otp: Yup.number().required(),
        }),
        onSubmit: async values => {
            setLoading(true);
            // check for confirm only when user is not available in authStateChanged

            try {
                const credential = auth.PhoneAuthProvider.credential(confirmation._verificationId, values.otp);
                const result = await auth()
                    .signInWithCredential(credential)
                    .then(() => Promise.resolve(true))
                    .catch(err => Promise.reject(err));

                if (result === true) {
                    // do_login();
                } else {
                    throw new Error(t('Invalid code.'));
                }
            } catch (error) {
                setLoading(false);
                if (error.code != 'auth/code-expired' && error.code != 'auth/session-expired') {
                    console.log(`OTP ENTERED ${values.otp} error : ${error}`);

                    Sentry.captureException(`OTP ENTERED ${values.otp} error : ${error}`);
                    console.log('hhh');
                    formik.setSubmitting(false);
                    // toast(t('Invalid code.'), 'error');
                    toast(error?.message, 'error');
                    // } else {
                    //   do_login();
                }

                // toast(t('Invalid code.'), 'error');
            }
        },
    });

    const resetCountdown = () => {
        setCountdown(Date.now() + 60000);
    };
    return (
        <View flex bg-white>
            <Header title={' '} />

            {/* <KeyboardAwareScrollView bounces={false}> */}
            <View padding-20 flex>
                <Text hBigBold marginB-10 secondary>
                    {t('OTP Verification')}
                </Text>
                <Text text90 color={Colors.dark40} bold>
                    {t("Check your SMS messages. We've sent")}
                </Text>
                <Text text90 color={Colors.dark40} bold>
                    {t('you the pin at')} {data?.formatedPhone}{' '}
                    <Text
                        text90
                        bold
                        secondary
                        // style={{textDecorationLine: 'underline'}}
                        onPress={() => pop()}>
                        ({t('Change')})
                    </Text>
                </Text>
                <View marginT-20 marginB-20>
                    <OTPInputView
                        style={{
                            width: '100%',
                            height: 40,
                        }}
                        // pinCount={4}
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({code})}}
                        autoFocusOnLoad={false}
                        codeInputFieldStyle={{
                            backgroundColor: '#F6F7FA',
                            borderWidth: 1,
                            borderColor: '#BFC8D6',
                            fontWeight: 'bold',
                            // width: '100%',
                            flex: 1,
                            height: 40,
                            textAlign: 'center',
                            color: 'black',
                            borderRadius: 10,
                        }}
                        codeInputHighlightStyle={{borderColor: '#03DAC6'}}
                        onCodeFilled={code => {
                            // console.log('onCodeFilled', code);
                            formik.setFieldValue('otp', code);

                            setTimeout(() => {
                                // console.log('submit');
                                formik.handleSubmit();
                                // console.log('error', formik.errors);
                                // console.log('values', formik.values);
                            }, 2000);
                            // console.log(`Code is ${code}, you are good to go!`);
                        }}
                    />
                </View>

                <Button marginT-20 link fullWidth supportRTL style={styles.muted} linkColor={Colors.secondary}>
                    <Text secondary bold>
                        {t("Don't you recive any code?")}
                    </Text>
                </Button>
                <Countdown
                    date={countdown}
                    key={countdown}
                    renderer={p => (
                        <CountdownRenderer
                            {...p}
                            resetCountdown={resetCountdown}
                            resend={async () => {
                                await auth().signInWithPhoneNumber(data.formatedPhone, true);
                                //send api
                                // resendOtp(values, {setErrors, setSubmiting})
                            }}
                        />
                    )}
                />
            </View>
            {/* </KeyboardAwareScrollView> */}
            <View useSafeArea marginB-40>
                <Button
                    marginT-20
                    marginH-20
                    fullWidth
                    disabled={formik.isSubmitting || !formik.isValid || loading}
                    // onPress={() => push('Kartonah.Screens.Register')}
                    onPress={formik.handleSubmit}
                    backgroundColor={Colors.secondary}
                    style={styles.button}>
                    <Text text80 btnText white>
                        {formik.isSubmitting || loading ? t('Loading') : t('Verify Now')}
                    </Text>
                </Button>
            </View>
            {formik.isSubmitting || loading ? <LoaderScreen color={Colors.primary} overlay /> : null}
        </View>
    );
};

OTP.screenName = 'Kartonah.Screens.OTP';

export default OTP;
