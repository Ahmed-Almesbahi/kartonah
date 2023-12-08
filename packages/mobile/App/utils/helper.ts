import {DeviceEventEmitter, Linking} from 'react-native';
import unionBy from 'lodash/unionBy';
import {Assets} from 'react-native-ui-lib';
import {STORE_RATING, THUMBNAIL_URL} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Rate from 'react-native-rate';
import {store} from 'app-redux/store';
import Intercom from 'react-native-intercom';

export const EventEmitter = DeviceEventEmitter;

/**
 * Display the message toast-like (work both with Android and iOS)
 * @param msg Message to display
 * @param duration Display duration
 */
export const toast = (msg: string, type = 'success', duration = 8000) =>
    EventEmitter.emit('toast', msg, type, duration);

export const fixPickerMultiItems = (items: Array<any>) => {
    if (items.length > 0) {
        return items.map(item => {
            if (item?.label != undefined) {
                return {id: item.value, label: item?.label};
            } else {
                return item;
            }
        });
    }
    return [];
};

export const concatPaginaition = (currentData, newData) => {
    return unionBy(currentData, newData, 'id');
};

export const getPaymentIcon = (paymentId: number) => {
    let icons = [];
    icons[1] = Assets.icons.creditcard;
    icons[2] = Assets.icons.bank;
    icons[3] = Assets.icons.cargo;
    icons[4] = Assets.icons.wallet;
    return icons[paymentId];
};

export const getPaymentName = (paymentId: number) => {
    let names = [];
    names[0] = null;
    names[1] = 'Stripe';
    names[2] = 'BankTransfer';
    names[3] = 'ShipperTransfer';
    names[4] = 'Wallet';
    return names[paymentId];
};
export const getPaymentId = (name: number) => {
    let names = [];
    names.Iyzico = 1;
    names.BankTransfer = 2;
    names.ShipperTransfer = 3;
    names.Wallet = 4;
    return names[name];
};

export const getProductImage = (uri: string, containerWidth: number = 0) => {
    if (containerWidth == null) {
        return uri;
    }

    if (uri == null || uri == undefined) {
        return 'https://via.placeholder.com/400';
    }

    if (typeof uri !== 'string') {
        // return Images.PlaceHolderURL;
    }

    // parse uri into parts
    const index = uri?.lastIndexOf('/') + 1;
    let editedURI = uri?.slice(0, index);
    const basename = uri?.split('/')?.reverse()[0];

    // const pixelWidth = PixelRatio.getPixelSizeForLayoutSize(containerWidth);

    switch (containerWidth) {
        case 720:
            // editedURI = `${editedURI}512px${basename}`;
            editedURI += THUMBNAIL_URL + '720-' + basename;
            break;
        case 400:
            // editedURI = `${editedURI}512px${basename}`;
            editedURI += THUMBNAIL_URL + '400-' + basename;
            break;
        default:
            editedURI += basename;
    }

    return editedURI;
};

// Pending,Packing,Shipping,Confirmed,Cancelled,Delivered

//Pending = 0,Paid = 1,un paid = 2

export const openUrl = url => {
    // Intercom.displayMessenger();
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
            Linking.openURL(url);
        } else {
            console.log("Don't know how to open URI: " + url);
        }
    });
};

export const shouldShowStoreRating = async () => {
    const value = await AsyncStorage.getItem('@StoreRated');
    if (value == 'true') {
    } else {
        Rate.rate(STORE_RATING, success => {
            if (success) {
                console.log('success', success);
                AsyncStorage.setItem('@StoreRated', 'true');
                // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
                // this.setState({rated: true});
            }
        });
    }
};
export const setUpInterCom = () => {
    const user = store.getState().auth;

    if (user?.id > 0) {
        let full_name = 'null';
        if (user.firstName != null && user.firstName != undefined && user.firstName != '') {
            full_name = `${user.firstName} ${user.lastName}`;
        } else if (user.full_name != null && user.full_name != undefined && user.full_name != '') {
            full_name = user.full_name;
        } else if (user.email != null && user.email != undefined && user.email != '') {
            full_name = user.email.substring(0, user.email.indexOf('@'));
        }

        Intercom.registerIdentifiedUser({userId: full_name});
        Intercom.updateUser({
            email: user.email,
            user_id: user.id,
            name: full_name,
            phone: user.phone,
            language_override: user.contactLang,
        });
    } else {
        Intercom.registerUnidentifiedUser();
    }
};
