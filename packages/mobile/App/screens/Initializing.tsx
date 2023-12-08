import React, {useEffect, useState} from 'react';
import env from 'react-native-config';
import {DeviceEventEmitter, I18nManager, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import i18n from 'i18n';
import RNRestart from 'react-native-restart';
import SplashScreen from 'react-native-splash-screen';
import * as appRoots from 'navigation/appRoots';
import {setDefaultOptions} from 'navigation/options';
import {View, Colors, Image, Assets} from 'react-native-ui-lib';
import {codepush_iOS, codepush_android, API_URL, FORCE_UPDATE} from '../utils/constants';
// import HotUpdate from 'components/HotUpdate';
import remoteConfig from '@react-native-firebase/remote-config';
import DeviceInfo from 'react-native-device-info';
import semver from 'semver';
import ForceUpdate from 'components/ForceUpdate';
import {useNavigation} from 'react-native-navigation-hooks';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {Navigation} from 'react-native-navigation';
import axios from 'axios';
import publicIP from 'react-native-public-ip';
import {useDispatchRequest} from '@redux-requests/react';
import KartonahApi from 'kartonah-common/api';
import {setCountry, setCountryCode} from 'app-redux/actions/general';
import {getCountryIdByCode} from 'utils/countries';

// const deploymentKey = Platform.OS === 'ios' ? codepush_iOS : codepush_android;

const Initializing = props => {
    const dispatch = useDispatchRequest();
    // return (
    //   <View flex backgroundColor={Colors.primary} centerH centerV>
    //     <Image source={Assets.images.splashLogo} width={222.5} height={107.25} />
    //   </View>
    // );
    //   StatusBar.setBarStyle('dark-content');
    const [showUpdate, setShowUpdate] = useState(false);
    const [update, setUpdate] = useState(false);
    const [destroy, setDestroy] = useState(false);
    const rehydrated = useSelector(state => state._persist.rehydrated);
    const lang = useSelector(state => state.auth.contactLang);
    const token = useSelector(state => state.auth.token);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (rehydrated) {
            init();
        }
    }, [rehydrated]);

    useEffect(() => {
        remoteConfig()
            .setDefaults({
                [FORCE_UPDATE]: 0,
            })
            .then(() => remoteConfig().fetchAndActivate())
            .then(fetchedRemotely => {
                let start = false;

                if (fetchedRemotely) {
                    // console.log('Configs were retrieved from the backend and activated.');
                    let version = remoteConfig().getValue(FORCE_UPDATE).asString();

                    if (semver.gt(version, DeviceInfo.getVersion())) {
                        setUpdate(true);
                    } else {
                        start = true;
                    }
                } else {
                    // console.log(
                    //   'No configs were fetched from the backend, and the local configs were already activated',
                    // );
                    start = true;
                }
                if (start) {
                    handleRedirect();
                }
            });

        // const unsubscribe = setTimeout(function () {
        //   handleRedirect();
        // }, 30000);

        // return () => {
        //   clearTimeout(unsubscribe);
        // };
    }, []);

    // useEffect(() => {
    //   // console.log('destroy', destroy);
    //   if (destroy && rehydrated) {
    //     handleRedirect();
    //   }
    // }, [destroy, rehydrated]);

    const handleRedirect = async () => {
        const link = await dynamicLinks()
            .getInitialLink()
            .then(link => {
                return link?.url;
            });

        // const link = 'https://kartonah.com/shop/stock/6';

        if (link?.startsWith('https://kartonah.com/shop/vendor/')) {
            const vendorId = link.replace('https://kartonah.com/shop/vendor/', '');
            const vendor = await axios.get(`${API_URL}/users/${vendorId}`).then(response => response.data.user);

            await appRoots.main(() => {
                Navigation.push('Kartonah.Screens.Home2', {
                    component: {
                        name: 'Kartonah.Screens.VendorDetails',
                        passProps: {
                            vendor: vendor,
                            category: 0,
                        },
                    },
                });
            });
        } else if (link?.startsWith('https://kartonah.com/shop/stock/')) {
            const stockId = link.replace('https://kartonah.com/shop/stock/', '');
            const product = await axios.get(`${API_URL}/stocks/${stockId}`).then(response => response.data.row);

            await appRoots.main(() => {
                Navigation.push('Kartonah.Screens.Home2', {
                    component: {
                        name: 'Kartonah.Screens.StockDetails',
                        passProps: {
                            data: product,
                        },
                    },
                });
            });
        } else if (link?.startsWith('https://kartonah.com/shop/product/')) {
            const productId = link.replace('https://kartonah.com/shop/product/', '');
            const product = await axios.get(`${API_URL}/products/${productId}`).then(response => response.data.row);

            await appRoots.main(() => {
                Navigation.push('Kartonah.Screens.Home2', {
                    component: {
                        name: 'Kartonah.Screens.ProductDetails',
                        passProps: {
                            data: product,
                        },
                    },
                });
            });
        } else if (link?.startsWith('https://kartonah.com/shop/category/')) {
            const categoryId = link.replace('https://kartonah.com/shop/category/', '');
            await appRoots.main(() => {}, {categoryId});
        } else if (token === '' || token == null || token == undefined) {
            // appRoots.auth();
            appRoots.main();
        } else {
            appRoots.main();
            // if (
            //   (auth.firstName == null ||
            //     auth.firstName == undefined ||
            //     auth.firstName == '') &&
            //   auth?.email?.length == 0
            // ) {
            //   appRoots.auth();
            // } else {
            //   appRoots.main();
            // }
        }
    };

    const init = () => {
        const isRtl = lang == 'AR' || lang == 'ar' ? true : false;
        I18nManager.allowRTL(isRtl);
        I18nManager.swapLeftAndRightInRTL(isRtl);
        I18nManager.forceRTL(isRtl);
        i18n.changeLanguage(lang.toLowerCase());

        if (isRtl == true && I18nManager.isRTL == false) {
            setTimeout(() => {
                RNRestart.Restart();
            }, 2000);
        }

        setDefaultOptions(lang);
        publicIP()
            .then(ip => {
                dispatch(KartonahApi.getUserLocation(ip))
                    .then(({data}) => {
                        console.log('data', data);
                        if (data != undefined) {
                            const countryCode = data.countryCode;
                            dispatch(setCountryCode(countryCode));
                            dispatch(KartonahApi.getCountry(getCountryIdByCode(countryCode))).then(({data, error}) => {
                                if (error) {
                                } else {
                                    dispatch(setCountry(data.row));
                                }
                            });
                        }
                    })
                    .catch(err => {
                        console.log('eeeeee', err);
                    });
                // '47.122.71.234'
            })
            .catch(error => {
                console.log(error);
                // 'Unable to get IP address.'
            });

        SplashScreen.hide();
    };

    // if (destroy) {
    //   return (
    //     <View flex backgroundColor={Colors.primary} centerH centerV>
    //       <Image
    //         source={Assets.images.splashLogo}
    //         width={222.5}
    //         height={107.25}
    //       />
    //     </View>
    //   );
    // }

    return update ? (
        <ForceUpdate />
    ) : (
        <View flex backgroundColor={Colors.primary} centerH centerV>
            {showUpdate ? (
                <Image source={Assets.images.updates} />
            ) : (
                <Image source={Assets.images.splashLogo} width={222.5} height={107.25} />
            )}

            {/* <HotUpdate
        deploymentKey={deploymentKey}
        isActiveCheck={true}
        updateVariable={async (_update: any) => {
          if (_update == null) {
            setDestroy(true);
          } else {
            setShowUpdate(true);
          }
        }}
        onComplete={async () => {
        }}
      /> */}
        </View>
    );
};

Initializing.screenName = 'Kartonah.Screens.Initializing';

export default Initializing;
