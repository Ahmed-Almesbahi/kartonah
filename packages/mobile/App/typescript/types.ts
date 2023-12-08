import {FormikErrors} from 'formik';
import {ImageSourcePropType} from 'react-native';
export class TextFieldPropsType {
  title: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined;
  onChangeText?: any;
  onBlur?: any;
  value?: any;
  rightIconSource?: any;
  style?: any;
}

export class UserType {
  id: number;
  firstName: string;
  lastName: string;
  commercialTitle: string;
  photo: string;
  minBill: number;
  full_name: string;
  rate: number;
  roles: Array<any>;
  vendor: number;
  // name: null;
  // email: string;
  // email_verified_at: null;
  // created_at: string;
  // updated_at: string;
  // phone: number;
  // activationCode: null;
  // status: number;
  // groupId: number;
  // isDeleted: number;
  // super: number;
  // countryId: number;
  // cityId: number;
  // brandId: number;
  // brandUsername: string;
  // website: null;
  // adrs: string;
  // bnkAccntNm: null;
  // iban: null | string | number;
  // swiftCode: null;
  // bnkCntryId: number;
  // bankName: null;
  // erpSystem: null;
  // userCredit: number;
  // fieldId: number;
  // passport: null;
  // taxNumber: number;
  // taxAdminstration: string;
  // postcode: null;
  // mersisNo: null;
  // logo: string;
  // taxRate: number;
  // isFeatured: number;
  // facebook: null;
  // twitter: null;
  // instagram: null;
  // youtube: null;
  // contactLang: string;
  // facebook_id: null;
  // google_id: null;
  // twitter_id: null;
  // legalInfoFile: null;
  // preferredCurrency: 'USD' | 'TRY';
}

export class VendorItemType {
  title: string;
  brandName: string;
  minOrderUnits: number;
  logo: ImageSourcePropType;
  image: ImageSourcePropType;
  rating: number;
}

export class OrderType {
  id: number;
  orderId: string;
  transaction_id: number;
  customer_name: string;
  customer_phone: number;
  customer_email: string;
  subTotal: number;
  shipmentCost: number;
  couponValue: number;
  userCredit: number;
  finalTotal: number;
  shipmentAdrsId: number;
  courierId: number;
  orderStatus: number;
  paymentStatus: number;
  paymentType: string;
  notes: string;
  created_at: string;
  updated_at: string;
  shippingMethod: string;
  shippingPolicyNo: string;
  items: Array<OrderItemType>;
}

export class OrderItemType {
  id: number;
  orderId: string;
  productId: number;
  variationId: number;
  optionId: number;
  regularPrice: number;
  salePrice: number;
  quantity: number;
  sku: string;
  vendorId: number;
}

export class ProductItemType {
  //dummy
  title: string;
  priceMin: number;
  priceMax: number;
  image: ImageSourcePropType;
  rating: number;

  //original
  'id': number;
  'userId': number;
  'regularPrice': number;
  'salePrice': number;
  'saleStart': null;
  'saleEnd': null;
  'quantityStep': number;
  'stock': number;
  'weight': number;
  'sku': null;
  'status': number;
  'width': number;
  'height': number;
  'length': number;
  'stockStatus': number;
  'isFeatured': number;
  'costPerItem': number;
  'slug': string;
  'mainPhoto': string;
  'viewsCount': number;
  'prdctcats': Array<any>;
  'label': Array<any>;
  'tags': Array<any>;
  'sizes': Array<any>;
  'colours': Array<any>;
  'descriptions': Array<any>;
  'materials': Array<any>;
  'shapes': Array<any>;
  'files': Array<any>;
  'elment_trans': Array<any>;
}

export class ProductCategoryTransType {
  id: number;
  rowId: number;
  languageCode: 'AR' | 'EN' | 'TR';
  title: string;
  description: null;
  metaData: null;
  created_at: null;
  updated_at: null;
  slug: string;
  files: any;
}

export class ProductCategoryType {
  id: number;
  parentId: number;
  photo: string;
  status: number;
  isDeleted: number;
  created_at: string;
  updated_at: string;
  slug: string | null;
  elment_trans: Array<ProductCategoryTransType>;
}

export class CourierItemType {
  country: string;
  companyName: string;
  name: string;
  phone: string;
  zipCode: string;
  active: boolean;
  icon: ImageSourcePropType;
}

export class CourierType {
  'id': number;
  'userId': number;
  'countryCode': string;
  'cargoId': number;
  'code': string;
  'shippingMethod': number;
  'isDefault': number;
  'country': {
    titleAR: string;
    titleEN: string;
    countryCode: string;
  };
  'cargo': null;
}
export class CouponItemType {
  // discountPercentage: number;
  // discountUpTo: number;
  // expiredAt: string;
  used: boolean;

  // validTo: string;
  // minimumValueToBeApplied: number;
  // couponValue: number;
  // id: number;
  // couponCode: string;

  'id': number;
  'couponValue': number;
  'couponCode': string;
  'originalQuantity': number;
  'usedQuantity': number;
  'type': number;
  'validFrom': string;
  'validTo': string;
  'minimumValueToBeApplied': number;
  'created_at': string;
  'updated_at': string;
  'status': number;
  'isDeleted': number;
  'description': string;
  'maximumAmount': number;
  'excludeSale': number;
}

export class AddressItemType {
  country: string;
  companyName: string;
  name: string;
  phone: string;
  zipCode: string;
  active: boolean;
  icon: ImageSourcePropType;

  firstName: string;
  lastName: string;
  countryId: string;
  cityId: string;
  receiverMobile: string;
  receiverMobile2: string;
  adrs: string;
  street: string;
  apartment: string;
}

export class CardItemType {
  type: string;
  name: string;
  lastDigits: string;
  expired: string;
  icon: ImageSourcePropType;

  title: string;
  cardName: string;
  cardExpire: string;
  cardNumber: string;
  cvv: string;
}

export class QutationItemType {
  id: number;
  updated_at: string;
  title: string;
  vendorId: number;
  clientId: number;
  categoryId: number;
  quantity: number;
  description: string;
  photo: string;
  status: string;
  created_at: string;
}

//API
export class API_ProductsParams {
  langCode?: string;
  offset?: number;
  limit?: number;
  sortBy?: string;
  sortSign?: string;
  Status?: number;
  isFeatured?: number | null;
  title?: string | null;
  userId?: number;
  categoryId?: number | null;
  tagsIds?: Array<number>;
  sizesIds?: Array<number>;
  coloursIds?: Array<number>;
  materialsIds?: Array<number>;
  labelsIds?: Array<number>;
}
export class API_ProductsCategoriesParams {
  Status?: number;
  userId?: number;
}
export class CartOptions {
  optionId: number;
  optionTitle: string;
  valueId: 1;
  valueTitle: string;
}
export class CartItems {
  id: number;
  price: number;
  product: object;
  quantity: number;
  total: number;
  options: Array<CartOptions>;
}
// export class CartVendors {
//   id: number;
//   vendorName: string;
//   items: Array<CartItems>;
//   total: number;
// }
export class CartState {
  lastItemId: number;
  quantity: number;
  items: Array<CartItems>;
  subtotal: number;
  extraLines: Array<CartExtraLines>; // shipping, taxes, fees, .etc
  total: number;
}
export class CartExtraLines {
  type: string;
  title: string;
  price: number;
}
