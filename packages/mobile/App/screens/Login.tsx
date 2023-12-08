import React, {useEffect, useState} from 'react';
import {
    KeyboardAwareScrollView,
    View,
    Image,
    Assets,
    Text,
    Button,
    Colors,
    Shadows,
    LoaderScreen,
    Checkbox,
} from 'react-native-ui-lib';
import Header from 'components/Header';
import PhoneField from 'components/PhoneField';
import styles from 'theme/styles';
import {useTranslation} from 'react-i18next';
import {useNavigation} from 'react-native-navigation-hooks';
import {main} from 'navigation/appRoots';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import auth from '@react-native-firebase/auth';
import {openUrl, toast} from 'utils/helper';
import {useDispatch, useSelector} from 'react-redux';
import ErrorText from 'components/ErrorText';

import {
    appleAuth,
    AppleButton,
    AppleAuthRequestOperation,
    AppleAuthRequestScope,
} from '@invertase/react-native-apple-authentication';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ActivityIndicator, I18nManager, Platform} from 'react-native';
import {postLoginFirebase, postLoginFirebaseByEmail} from 'app-redux/actions/api';
import analytics from '@react-native-firebase/analytics';
import {storeLogin} from 'app-redux/actions/auth';
import RNRestart from 'react-native-restart';
import {usePush} from 'utils/hooks';
import DeviceInfo from 'react-native-device-info';

GoogleSignin.configure({
    webClientId: 'xxx',
});

let pushed = false;

const LoginScreen = ({independent = true}) => {
    // return (
    //   <View flex backgroundColor={Colors.primary} centerH centerV>
    //     {/* <Image source={Assets.images.splashLogo} width={222.5} height={107.25} /> */}
    //   </View>
    // );s
    const lang = useSelector(state => state.auth.contactLang);
    const {t} = useTranslation();
    const push = usePush();
    const dispatch = useDispatch();
    const [state, setState] = useState('apple');

    const forceRestart = () => {
        // Enable for mode RTL
        setTimeout(() => {
            RNRestart.Restart();
        }, 2000);
    };

    // Handle user state changes
    const onAuthStateChanged = user => {
        // auth().signOut();

        // console.log('user?.uid', user?.uid);
        // console.log('uuser?.emailVerified', user?.emailVerified);
        // console.log('allowToLoginIn', allowToLoginIn);
        if (user?.uid && user?.emailVerified) {
            auth()
                .currentUser.getIdToken(false)
                .then(function (idToken) {
                    // Send token to your backend via HTTPS
                    formik.setSubmitting(true);
                    // if new user , then redirect to registration form
                    dispatch(postLoginFirebase('', user.email, idToken, DeviceInfo.getUniqueId())).then(
                        ({data: d, error}) => {
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
                                (d.row.user.firstName != null &&
                                    d.row.user.firstName != undefined &&
                                    d.row.user.firstName != '') ||
                                state == 'apple'
                            ) {
                                analytics().logLogin({method: 'social'});
                                if (force_restart) {
                                    forceRestart();
                                } else {
                                    main();
                                }
                            } else {
                                if (!pushed) {
                                    pushed = true;
                                    analytics().logSignUp({method: 'social'});

                                    push('Kartonah.Screens.Register', {
                                        page: 'register',
                                    });
                                }
                            }
                            analytics().setUserId(d.row?.user?.id?.toString());
                            // } else {
                            // formik.setSubmitting(false);
                            // toast(error?.message, 'error');
                            // }
                        },
                    );
                })
                .catch(function (error) {
                    formik.setSubmitting(false);
                    toast(error?.message, 'error');
                    console.log('idToken erorr', error);
                    // Handle error
                });
        }
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

        return subscriber; // unsubscribe on unmount
    }, []);

    const countryCode = useSelector(state => state.general.countryCode);

    const formik = useFormik({
        validateOnBlur: false,
        validateOnChange: false,
        initialValues: {
            phone: '',
            formatedPhone: '',
            // agree: false,
        },
        validationSchema: Yup.object().shape({
            // agree: Yup.bool().oneOf([true], 'Field must be checked').required(),
            // phone: Yup.string().phone().required(),
            // phone: Yup.number().required(),
        }),
        onSubmit: async values => {
            const phoneSchema = Yup.string().phone().required();
            const isValid = await phoneSchema.isValid(values.formatedPhone);
            if (isValid) {
                try {
                    // auth().settings.appVerificationDisabledForTesting = true;
                    const confirmation = await auth().signInWithPhoneNumber(values.formatedPhone);
                    // console.log('confirmation', confirmation);

                    if (confirmation._verificationId) {
                        formik.setSubmitting(false);
                        push('Kartonah.Screens.OTP', {
                            data: values,
                            confirmation,
                        });
                    } else {
                        formik.setSubmitting(false);
                        // console.log('Your number is not correct');
                        // toast(t('Your number is not correct'), 'error');
                    }
                } catch (error) {
                    formik.setSubmitting(false);
                    if (error.code != 'auth/internal-error') {
                        toast(error?.message, 'error');
                        console.log('error', error);
                    }
                }
            } else {
                formik.setSubmitting(false);
                formik.setFieldError('phone', t('Phone number is not valid.'));
            }
        },
    });

    const onAppleButtonPress = async () => {
        setState('apple');
        // Start the sign-in request
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });

        console.log('appleAuthRequestResponse', appleAuthRequestResponse);

        // Ensure Apple returned a user identityToken
        if (!appleAuthRequestResponse.identityToken) {
            throw 'Apple Sign-In failed - no identify token returned';
        }

        // Create a Firebase credential from the response
        const {identityToken, nonce} = appleAuthRequestResponse;
        const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

        // Sign the user in with the credential
        return auth().signInWithCredential(appleCredential);
    };

    const onGoogleButtonPress = async () => {
        setState('google');
        // Get the users ID token
        const {idToken} = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    };

    // const onFacebookButtonPress = async () => {
    //     // Attempt login with permissions
    //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    //     if (result.isCancelled) {
    //         throw 'User cancelled the login process';
    //     }

    //     // Once signed in, get the users AccesToken
    //     const data = await AccessToken.getCurrentAccessToken();

    //     if (!data) {
    //         throw 'Something went wrong obtaining access token';
    //     }

    //     // Create a Firebase credential with the AccessToken
    //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    //     // Sign-in the user with the credential
    //     return auth().signInWithCredential(facebookCredential);
    // };

    const Container = independent == false ? View : KeyboardAwareScrollView;

    return (
        <View
            flex
            // bg-white
        >
            <Container>
                {/* <Header /> */}

                <View padding-20 flex>
                    <View center>
                        <Image source={Assets.images.logoNameSmall} />
                        <Text text50 marginT-50 marginB-10 bold secondary style={[{lineHeight: 30}]}>
                            {t('Welcome to Kartonah !')}
                        </Text>
                        <Text text80 color={independent == false ? Colors.secondary : Colors.dark40}>
                            {t('Sign In to Kartonah and get')}{' '}
                        </Text>
                        <Text
                            text80
                            marginB-20
                            style={{lineHeight: 20}}
                            color={independent == false ? Colors.secondary : Colors.dark40}>
                            {t('personalized reccomendations')}
                        </Text>
                    </View>

                    {/* <Text marginB-20 color={Colors.dark40} bold>
            {t('enter your mobile number')}
          </Text> */}
                    <PhoneField
                        defaultCode={countryCode}
                        separatedStyle={false}
                        title={t('Mobile no.')}
                        onChangeText={formik.handleChange('phone')}
                        onChangeFormattedText={formik.handleChange('formatedPhone')}
                        value={formik.values.phone}
                        phoneTextInput={{fontSize: 21}}
                        codeTextStyle={{fontSize: 21}}
                    />
                    <ErrorText formik={formik} name="phone" />
                    <View
                        row
                        center
                        bg-white
                        marginT-10
                        // paddingH-20
                        paddingV-10>
                        <Text text80 marginT-3 center marginH-40>
                            {t('By signing up to Kartonah you agree to our')}
                            <Text
                                bold
                                primary
                                onPress={() => {
                                    push('Kartonah.Screens.Terms');
                                }}>
                                {' '}
                                {t('Terms of Service')}{' '}
                            </Text>
                            {t('and')}{' '}
                            <Text
                                bold
                                primary
                                onPress={() => {
                                    openUrl('https://kartonah.com/Kartonah-Privacy-Policy.pdf');
                                }}>
                                {t('Privacy Policy')}
                            </Text>
                            {t('. Thanks!')}
                        </Text>
                    </View>
                    <View centerV marginT-20>
                        <Button
                            // marginT-20
                            fullWidth
                            avoidMinWidth
                            avoidInnerPadding
                            // disabled={formik.isSubmitting || !formik.isValid}
                            // onPress={() => push('Kartonah.Screens.OTP')}
                            onPress={formik.handleSubmit}
                            backgroundColor={Colors.primary}
                            style={[
                                styles.button,
                                {paddingHorizontal: 10, borderRadius: 14},
                                {
                                    shadowColor: Colors.primary,
                                    shadowOpacity: 0.2,
                                    shadowRadius: 12,
                                    shadowOffset: {height: -5, width: 0},
                                    elevation: 4,
                                },
                            ]}>
                            <Text color={Colors.secondary} text70 marginH-10>
                                {formik.isSubmitting ? t('Loading') : t('Login')}
                            </Text>
                            <Image marginT-3 marginH-5 supportRTL source={Assets.icons.arrowRight} />
                        </Button>
                    </View>

                    <View
                        center
                        style={[{position: 'relative'}, independent == false ? {marginTop: 20} : {marginTop: 50}]}>
                        <View style={styles.fancySeparator} marginH-20 backgroundColor={Colors.light} />
                        <Text
                            text70
                            // marginB-20
                            style={[
                                {
                                    marginTop: -10,
                                    backgroundColor: 'white',
                                    width: 50,
                                    textAlign: 'center',
                                    color: '#CFCFCF',
                                },
                                independent == false ? {marginBottom: 10} : {marginBottom: 20},
                            ]}>
                            {t('Or')}
                        </Text>
                        {appleAuth.isSupported && (
                            <Button
                                outline
                                outlineColor={'black'}
                                // supportRTL
                                br40
                                marginB-20
                                style={{width: '100%'}}
                                onPress={onAppleButtonPress}>
                                <Image marginB-3 marginH-5 source={Assets.icons.apple} height={20} width={20} />
                                <Text text70 color={'black'}>
                                    {t('Sign In with Apple')}
                                </Text>
                            </Button>
                        )}

                        {Platform.OS == 'android' && (
                            <Button
                                outline
                                outlineColor={'#EA4335'}
                                // supportRTL
                                br40
                                marginB-10
                                centerV
                                style={{width: '100%'}}
                                onPress={onGoogleButtonPress}>
                                <Image marginB-3 marginH-5 source={Assets.icons.google} height={20} width={20} />
                                <Text text70 color={'#EA4335'}>
                                    {t('Sign In with Google')}
                                </Text>
                            </Button>
                        )}
                        {/* <Button
              outline
              outlineColor={Colors.dark40}
              supportRTL
              br20
              onPress={onFacebookButtonPress}>
              <Text secondary color={Colors.dark40}>
                {t('Sign in with Facebook')}
              </Text>
            </Button> */}
                    </View>
                </View>

                {/* <View centerV marginH-20 useSafeArea marginB-40>
                    <Button outline outlineColor={Colors.dark40} supportRTL br20 onPress={async () => await main()}>
                        <Text text80 secondary color={Colors.dark40}>
                            {t('Continue as visitor')}
                        </Text>
                        <Image
                            marginT-3
                            marginH-5
                            supportRTL
                            tintColor={Colors.dark40}
                            source={Assets.icons.arrowRight}
                        />
                    </Button>
                </View> */}
                {formik.isSubmitting ? <LoaderScreen color={Colors.primary} overlay /> : null}
            </Container>
        </View>
    );
};

LoginScreen.screenName = 'Kartonah.Screens.Login';

export default LoginScreen;
