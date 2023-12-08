// import env from 'react-native-config';

// export const API_URL = env?.API_HOST
//   ? env.API_HOST
//   : 'https://partner.kartonah.com/public/api';
export const UPLOAD_URL = `${process.env.NEXT_PUBLIC_UPLOAD_HOST}/images/`;

export const THUMBNAIL_URL = UPLOAD_URL.replace('/images/', '/thumbnails/')
// export const codepush_iOS = env?.CODEPUSH_IOS
//   ? env.CODEPUSH_IOS
//   : 'Z7qPCLarRVrK-FPrvNNrz-q_n51eiAkBPNI-W';
// export const codepush_android = env?.CODEPUSH_ANDROID
//   ? env.CODEPUSH_ANDROID
//   : 'cNpv_9z93ydwe5jt5yjdVSM1fKDS3bSf1ZnAC';

// export const DEFAULT_LANGUAGE = 'EN';
// export const FONT = 'Cairo';
// export const FONT_BOLD = 'Cairo-Bold';
// export const INPUT_FONT_SIZE = 17;

// export const SKELETON_COLORS = ['#E1E9EE', '#F2F8FC', '#E1E9EE'];

// export const DefaultCountry = {
//   code: 'ar',
//   RTL: true,
//   language: 'Arabic',
//   countryCode: 'EG',
//   hideCountryList: false,
// };
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

// export const ShippingMethods = [
//   {value: '1', label: 'Air freight'},
//   {value: '2', label: 'Sea freight'},
//   {value: '3', label: 'Land freight'},
// ];

// export const DefaultProductParams = {
//   // langCode: LANGUAGE_SELECTED,
//   offset: 0,
//   limit: 10,
//   sortBy: 'id',
//   sortSign: 'ASC',
//   Status: 1,
//   isFeatured: 0,
//   title: null,
//   categoryId: [],
//   tagsIds: [],
//   sizesIds: [],
//   coloursIds: [],
//   materialsIds: [],
//   labelsIds: [],
// };

// export const BOLD = 'bold';
