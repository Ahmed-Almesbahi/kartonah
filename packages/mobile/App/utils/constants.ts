import env from 'react-native-config';
import {Platform} from 'react-native';
import {AndroidMarket} from 'react-native-rate';

export const IS_PRODUCTION = env?.IS_PRODUCTION ? env.IS_PRODUCTION : true;
export const API_URL = env?.API_HOST ? env.API_HOST : 'https://partner.kartonah.com/public/api';
export const API_URL2 = env?.API_HOST2 ? env.API_HOST2 : 'http://localhost:4000/';
export const UPLOAD_URL = env?.UPLOAD_HOST ? env.UPLOAD_HOST : 'https://partner.kartonah.com/uploads/files/';

export const THUMBNAIL_URL = env?.UPLOAD_HOST
    ? env.UPLOAD_HOST.replace('/images/', '/thumbnails/')
    : 'https://partner.kartonah.com/uploads/thumbnails/';
export const codepush_iOS = env?.CODEPUSH_IOS ? env.CODEPUSH_IOS : 'xxxxxxx';
export const codepush_android = env?.CODEPUSH_ANDROID ? env.CODEPUSH_ANDROID : 'xxxxxxxx';
export const STRIPE_PUB_KEY = env?.STRIPE_PUB_KEY ? env.STRIPE_PUB_KEY : 'xxxxxxxxxx';

console.log('API_URL2', API_URL2);
console.log(' env.API_HOST2', env.API_HOST2);

export const DEFAULT_LANGUAGE = 'EN';
export const FONT = 'Cairo';
export const FONT_BOLD = 'Cairo-Bold';
export const INPUT_FONT_SIZE = 17;

export const STORE_RATING = {
    AppleAppID: '1495089082',
    GooglePackageName: 'com.justyol.android',
    // AmazonPackageName: 'com.mywebsite.myapp',
    OtherAndroidURL: 'http://www.randomappstore.com/app/47172391',
    preferredAndroidMarket: AndroidMarket.Google,
    preferInApp: false,
    openAppStoreIfInAppFails: true,
    fallbackPlatformURL: 'https://kartonah.com',
};

export const FORCE_UPDATE =
    IS_PRODUCTION == 'true' || IS_PRODUCTION == true ? 'force_update_current_version' : 'force_update_current_version';

export const SKELETON_COLORS = ['#E1E9EE', '#F2F8FC', '#E1E9EE'];

export const DefaultCountry = {
    code: 'ar',
    RTL: true,
    language: 'Arabic',
    countryCode: 'EG',
    hideCountryList: false,
};
export const DefaultCurrency = {
    symbol: '$',
    name: 'Usd Dollar',
    code: 'USD',
    name_plural: 'Usd Dollars',
    decimal: '.',
    thousand: ',',
    precision: 2,
    format: '%v %s', // %s is the symbol and %v is the value
};

export const PaymentTypes = {
    1: {
        name: 'Bank Cards',
    },
    2: {
        name: 'Credit Cards',
    },
};

export const OrderStatus = {
    pending: 'Pending',
    1: 'Order Confirmed',
    2: 'Order Prepared',
    3: 'Order Delivering',
    4: 'Order Shipped',
};

export const ShippingMethods = [
    {value: '1', label: 'Air freight'},
    {value: '2', label: 'Sea freight'},
    {value: '3', label: 'Land freight'},
];

export const DefaultProductParams = {
    // langCode: LANGUAGE_SELECTED,
    offset: 0,
    limit: 10,
    sortBy: 'id',
    sortSign: 'ASC',
    Status: 1,
    isFeatured: 0,
    title: null,
    categoryId: [],
    tagsIds: [],
    sizesIds: [],
    coloursIds: [],
    materialsIds: [],
    labelsIds: [],
};

export const BOLD = Platform.OS == 'ios' ? 'bold' : undefined;
