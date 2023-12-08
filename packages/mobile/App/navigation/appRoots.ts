import {Navigation} from 'react-native-navigation';
import {Colors} from 'react-native-ui-lib';
import i18next from 'i18next';
import {FONT} from 'utils/constants';

export const Initializing = async () => {
    await Navigation.setRoot({
        root: {
            stack: {
                options: {
                    statusBar: {
                        style: 'light',
                    },
                    topBar: {
                        visible: false,
                    },
                },
                children: [
                    {
                        component: {
                            name: 'Kartonah.Screens.Initializing',
                            id: 'Kartonah.Screens.Initializing',
                        },
                    },
                ],
            },
        },
    });
};

export const auth = async () => {
    await Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {
        bottomTabs: {
            currentTabIndex: 4,
        },
    });
    // await Navigation.setRoot({
    //   root: {
    //     stack: {
    //       options: {
    //         statusBar: {
    //           style: 'light',
    //         },
    //         topBar: {
    //           visible: false,
    //         },
    //       },
    //       children: [
    //         {
    //           component: {
    //             // name: 'Kartonah.Screens.Register',
    //             // name: 'Kartonah.Screens.Terms',
    //             // name: 'Kartonah.Screens.OTP',
    //             name: 'Kartonah.Screens.Login',
    //             id: 'Kartonah.Screens.Login',
    //           },
    //         },
    //       ],
    //     },
    //   },
    // });
};

export const main = (callback = () => {}, passProps = {}) => {
    let list = [
        {
            stack: {
                children: [
                    {
                        component: {
                            id: 'Kartonah.Screens.Favorite',
                            name: 'Kartonah.Screens.Favorite',
                            options: {
                                bottomTab: {
                                    icon: require('images/icon-awesome-heart.png'),
                                    selectedIcon: require('images/icon-awesome-heart-selected.png'),
                                    textColor: Colors.secondary,
                                    selectedTextColor: Colors.secondary,
                                    text: i18next.t('Favorite'),
                                    fontFamily: FONT,
                                },
                            },
                        },
                    },
                ],
            },
        },
        {
            stack: {
                children: [
                    {
                        component: {
                            // id: 'Kartonah.Screens.Sales',
                            // name: 'Kartonah.Screens.Sales',
                            id: 'Kartonah.Screens.Categories',
                            name: 'Kartonah.Screens.Categories',
                            options: {
                                bottomTab: {
                                    icon: require('images/sale-label.png'),
                                    selectedIcon: require('images/sale-label-selected.png'),
                                    textColor: Colors.secondary,
                                    selectedTextColor: Colors.secondary,
                                    text: i18next.t('Sales'),
                                    fontFamily: FONT,
                                },
                            },
                        },
                    },
                ],
            },
        },
        {
            stack: {
                children: [
                    {
                        component: {
                            id: 'Kartonah.Screens.Home2',
                            name: 'Kartonah.Screens.Home2',
                            passProps,
                            options: {
                                bottomTab: {
                                    style: {borderWidth: 1, borderColor: 'red'},
                                    // icon: require('images/test-logo.png'),
                                    // selectedIcon: require('images/test-logo.png'),
                                    textColor: Colors.secondary,
                                    selectedTextColor: Colors.secondary,
                                    text: ' ',
                                    fontFamily: FONT,
                                    // iconInsets: {
                                    //   top: 1,
                                    //   // bottom: 1,
                                    //   // left: 1,
                                    //   // right: 1,
                                    //   // bottom: -10,
                                    //   // width: 10,
                                    //   // height: 10,
                                    // },
                                    // iconColor: Colors.secondary,
                                    // iconWidth: 70,
                                    // iconHeight: 70,

                                    // fontFamily: FONT,
                                    // text: i18next.t('My cart'),
                                    // disableIconTint: false,
                                    // disableSelectedIconTint: false,
                                },
                            },
                        },
                    },
                ],
            },
        },
        {
            stack: {
                children: [
                    {
                        component: {
                            id: 'Kartonah.Screens.Cart',
                            name: 'Kartonah.Screens.Cart',
                            options: {
                                bottomTab: {
                                    icon: require('images/icon-cart.png'),
                                    selectedIcon: require('images/icon-cart-selected.png'),
                                    textColor: Colors.secondary,
                                    selectedTextColor: Colors.secondary,
                                    text: i18next.t('My cart'),
                                    fontFamily: FONT,
                                    // badge: '3',
                                },
                            },
                        },
                    },
                ],
            },
        },
        {
            stack: {
                children: [
                    {
                        component: {
                            id: 'Kartonah.Screens.Account',
                            name: 'Kartonah.Screens.Account',
                            options: {
                                bottomTab: {
                                    icon: require('images/icon-account.png'),
                                    selectedIcon: require('images/icon-account-selected.png'),
                                    textColor: Colors.secondary,
                                    selectedTextColor: Colors.secondary,
                                    text: i18next.t('Account'),
                                    fontFamily: FONT,
                                },
                            },
                        },
                    },
                ],
            },
        },
    ];

    //Bottom bar in Arabic version must be the English version From Left to right ( Account - Cart - Home - Sale - Favorite )
    // if (I18nManager.isRTL && Platform.OS == 'ios') {
    //   Array.prototype.reverse.call(list);
    // }
    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: 'BOTTOM_TABS_LAYOUT',
                options: {
                    statusBar: {
                        style: 'light',
                    },
                    topBar: {
                        visible: false,
                    },
                    bottomTabs: {
                        currentTabIndex: 2,
                        visible: false,
                    },
                },
                children: list,
            },
        },
    });

    callback();
};
