// import {DeviceEventEmitter} from 'react-native';
import unionBy from 'lodash/unionBy';
// import {Assets} from 'react-native-ui-lib';
import {THUMBNAIL_URL} from './constants';

// export const EventEmitter = DeviceEventEmitter;

/**
 * Display the message toast-like (work both with Android and iOS)
 * @param msg Message to display
 * @param duration Display duration
 */
// export const toast = (msg: string, type = 'success', duration = 8000) =>
//   EventEmitter.emit('toast', msg, type, duration);

export const fixPickerMultiItems = (items: Array<any>) => {
    if (items.length > 0) {
        return items.map((item) => {
            if (item?.label != undefined) {
                return item.value;
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

// export const getPaymentIcon = (paymentId: number) => {
//   let icons = [];
//   icons[1] = Assets.icons.creditcard;
//   icons[2] = Assets.icons.bank;
//   icons[3] = Assets.icons.cargo;
//   icons[4] = Assets.icons.wallet;
//   return icons[paymentId];
// };

export const getPaymentName = (paymentId: number) => {
    let names = [];
    names[0] = null;
    names[1] = 'Iyzico';
    names[2] = 'BankTransfer';
    names[3] = 'ShipperTransfer';
    names[4] = 'Wallet';
    return names[paymentId];
};
export const getPaymentId = (name: number) => {
    let names = [];
    names['Iyzico'] = 1;
    names['BankTransfer'] = 2;
    names['ShipperTransfer'] = 3;
    names['Wallet'] = 4;
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
