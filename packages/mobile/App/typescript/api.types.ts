export interface User {
  id: number;
  name?: any;
  email?: any;
  email_verified_at?: any;
  firstName: string;
  lastName: string;
  phone: string;
  activationCode?: any;
  status: number;
  groupId: number;
  super: number;
  countryId: number;
  cityId: number;
  brandName?: any;
  brandUsername?: any;
  website?: any;
  adrs?: any;
  bnkAccntNm?: any;
  iban?: any;
  swiftCode?: any;
  bnkCntryId: number;
  bankName?: any;
  erpSystem?: any;
  photo: string;
  userCredit: number;
  fieldId: number;
  passport?: any;
  commercialTitle: string;
  taxNumber?: any;
  taxAdminstration?: any;
  postcode?: any;
  mersisNo?: any;
  logo: string;
  minBill: number;
  taxRate: number;
  isFeatured: number;
  facebook?: any;
  twitter?: any;
  instagram?: any;
  youtube?: any;
  contactLang: string;
  facebook_id?: any;
  google_id?: any;
  twitter_id?: any;
  legalInfoFile?: any;
  preferredCurrency: string;
  signatureFile?: any;
  countryCode?: any;
  full_name: string;
  userLogo: string;
  userCover: string;
  userSignatureFile: string;
  userLegalInfoFile: string;
}

export interface loginFirebaseRoot {
  msg: string;
  success: boolean;
  user: User;
  favouritesIds: any[];
  accessToken: string;
}

export interface Pivot {
  productId: number;
  prdctcatId: number;
}

export interface ElmentTran {
  id: number;
  rowId?: number;
  languageCode: string;
  title: string;
  description?: any;
  metaData?: any;
  slug: string;
  files: any[];
  created_at?: any;
  updated_at?: any;
}

export interface Prdctcat {
  id: number;
  parentId: number;
  photo: string;
  status: number;
  slug?: any;
  pivot: Pivot;
  elment_trans: ElmentTran[];
}

export interface Pivot2 {
  productId: number;
  labelId: number;
}

export interface Label {
  id: number;
  userId: number;
  label: string;
  pivot: Pivot2;
}

export interface Pivot3 {
  productId: number;
  tagId: number;
}

export interface Tag {
  id: number;
  photo?: any;
  pivot: Pivot3;
  elment_trans: ElmentTran[];
}

export interface Pivot4 {
  productId: number;
  sizeId: number;
}

export interface Size {
  id: number;
  title: string;
  pivot: Pivot4;
}

export interface Pivot5 {
  productId: number;
  colourId: number;
  quantity: number;
  sku: string;
}

export interface Colour {
  id: number;
  created_at?: any;
  updated_at?: any;
  code: string;
  pivot: Pivot5;
  elment_trans: ElmentTran[];
}

export interface Pivot6 {
  productId: number;
  descriptionId: number;
}

export interface Description {
  id: number;
  created_at?: any;
  updated_at?: any;
  pivot: Pivot6;
  elment_trans: ElmentTran[];
}

export interface Pivot7 {
  productId: number;
  materialId: number;
  value: number;
}

export interface Material {
  id: number;
  created_at?: any;
  updated_at?: any;
  pivot: Pivot7;
  elment_trans: ElmentTran[];
}

export interface productUser {
  id: number;
  brandName: string;
  full_name: string;
  userLogo: string;
  userCover: string;
  userSignatureFile: string;
  userLegalInfoFile: string;
}

export interface FeaturedImage {
  id: number;
  rowId: number;
  fileName: string;
  colourId: number;
  isFeatured: number;
  imgUrl: string;
}

export interface productsRow {
  id: number;
  userId: number;
  regularPrice: number;
  salePrice: number;
  saleStart?: any;
  saleEnd?: any;
  maxDiscount: number;
  minDiscount: number;
  quantityStep: number;
  stock: number;
  weight: number;
  sku?: any;
  status: number;
  created_at: Date;
  updated_at: Date;
  width: number;
  height: number;
  length: number;
  stockStatus: number;
  isFeatured: number;
  costPerItem: number;
  slug: string;
  mainPhoto?: any;
  title: string;
  viewsCount: number;
  soldCount: number;
  prdctcats: Prdctcat[];
  label: Label[];
  tags: Tag[];
  sizes: Size[];
  colours: Colour[];
  descriptions: Description[];
  materials: Material[];
  shapes: any[];
  user: productUser;
  featured_images: FeaturedImage[];
  elment_trans: any[];
  rate: number;
}

export interface productsRootObject {
  rows: productsRow[];
}

export interface productsCategoriesRow {
  id: number;
  parentId: number;
  photo: string;
  status: number;
  slug?: any;
  elment_trans: ElmentTran[];
}

export interface productsCategoriesRootObject {
  rows: productsCategoriesRow[];
}

export interface vendrosByCategoryRow {
  id: number;
  brandName: string;
  minBill: number;
  photo: string;
  logo: string;
  full_name: string;
  userLogo: string;
  userCover: string;
  userSignatureFile: string;
  userLegalInfoFile: string;
  rate: number;
  followersCount: number;
}

export interface vendrosByCategoryRootObject {
  rows: vendrosByCategoryRow[];
}

export interface City {
  id: number;
  countryId: number;
  titleAR?: any;
  titleEN: string;
  status: number;
  isDeleted: number;
}

export interface AddressesRow {
  id: number;
  firstName: string;
  lastName: string;
  receiverMobile: string;
  receiverMobile2: string;
  countryCode: string;
  cityId: number;
  region?: any;
  blockNr?: any;
  road?: any;
  building?: any;
  apartment: string;
  postalCode?: any;
  adrs: string;
  notes?: any;
  isDefault: number;
  country?: any;
  city: City;
}

export interface AddressesRootObject {
  rows: AddressesRow[];
}

export interface Country {
  titleAR: string;
  titleEN: string;
  countryCode: string;
}

export interface couriersRow {
  id: number;
  userId: number;
  countryCode: string;
  cargoId: number;
  code: string;
  shippingMethod: number;
  isDefault: number;
  country: Country;
  cargo?: any;
}

export interface couriersRootObject {
  rows: couriersRow[];
}

export interface paymentMethodsElmentTran {
  id: number;
  rowId: number;
  languageCode: string;
  title: string;
  description: string;
  instructions: string;
}

export interface paymentMethodsRow {
  id: number;
  status: number;
  elment_trans: paymentMethodsElmentTran[];
}

export interface paymentMethodsRootObject {
  rows: paymentMethodsRow[];
}

export interface couponsRow {
  id: number;
  couponValue: number;
  couponCode: string;
  originalQuantity: number;
  usedQuantity: number;
  type: number;
  validFrom: string;
  validTo: string;
  minimumValueToBeApplied: number;
  created_at: Date;
  updated_at: Date;
  status: number;
  isDeleted: number;
  description: string;
  maximumAmount: number;
  excludeSale: number;
  used: boolean;
}

export interface couponsRootObject {
  rows: couponsRow[];
}

export declare module product {
  export interface Pivot {
    productId: number;
    prdctcatId: number;
  }

  export interface ElmentTran {
    id: number;
    languageCode: string;
    title: string;
    description?: any;
    metaData?: any;
    slug: string;
    files: any[];
  }

  export interface Prdctcat {
    id: number;
    parentId: number;
    photo?: any;
    status: number;
    slug?: any;
    pivot: Pivot;
    elment_trans: ElmentTran[];
  }

  export interface Pivot2 {
    productId: number;
    tagId: number;
  }

  export interface ElmentTran2 {
    id: number;
    rowId: number;
    languageCode: string;
    title: string;
  }

  export interface Tag {
    id: number;
    photo?: any;
    pivot: Pivot2;
    elment_trans: ElmentTran2[];
  }

  export interface Pivot3 {
    productId: number;
    sizeId: number;
  }

  export interface Size {
    id: number;
    title: string;
    pivot: Pivot3;
  }

  export interface Pivot4 {
    productId: number;
    materialId: number;
    value: number;
  }

  export interface ElmentTran3 {
    id: number;
    rowId: number;
    languageCode: string;
    title: string;
    created_at?: any;
    updated_at?: any;
  }

  export interface Material {
    id: number;
    created_at?: any;
    updated_at?: any;
    pivot: Pivot4;
    elment_trans: ElmentTran3[];
  }

  export interface User {
    id: number;
    name?: any;
    email: string;
    email_verified_at?: any;
    firstName: string;
    lastName: string;
    phone: string;
    activationCode?: any;
    status: number;
    groupId: number;
    super: number;
    countryId: number;
    cityId: number;
    brandName: string;
    brandUsername: string;
    website: string;
    adrs: string;
    bnkAccntNm?: any;
    iban?: any;
    swiftCode?: any;
    bnkCntryId: number;
    bankName?: any;
    erpSystem?: any;
    photo: string;
    userCredit: number;
    fieldId: number;
    passport?: any;
    commercialTitle: string;
    taxNumber: string;
    taxAdminstration: string;
    postcode?: any;
    mersisNo?: any;
    logo: string;
    minBill: number;
    taxRate: number;
    isFeatured: number;
    facebook?: any;
    twitter?: any;
    instagram?: any;
    youtube?: any;
    contactLang: string;
    facebook_id?: any;
    google_id?: any;
    twitter_id?: any;
    legalInfoFile?: any;
    preferredCurrency: string;
    signatureFile?: any;
    countryCode?: any;
    full_name: string;
    userLogo: string;
    userCover: string;
    userSignatureFile: string;
    userLegalInfoFile: string;
  }

  export interface Image {
    id: number;
    rowId: number;
    fileName: string;
    colourId: number;
    isFeatured: number;
    imgUrl: string;
  }

  export interface Pivot5 {
    productId: number;
    colourId: number;
    quantity: number;
    sku: string;
  }

  export interface ElmentTran4 {
    id: number;
    rowId: number;
    languageCode: string;
    title: string;
    created_at?: any;
    updated_at?: any;
  }

  export interface Colour {
    id: number;
    created_at?: any;
    updated_at?: any;
    code: string;
    images: Image[];
    featuredImg: string;
    pivot: Pivot5;
    elment_trans: ElmentTran4[];
  }

  export interface Row {
    id: number;
    userId: number;
    favouritesCount: number;
    regularPrice: number;
    salePrice: number;
    saleStart?: any;
    saleEnd?: any;
    quantityStep: number;
    stock: number;
    weight: number;
    sku?: any;
    status: number;
    created_at: Date;
    updated_at: Date;
    width: number;
    height: number;
    length: number;
    stockStatus: number;
    isFeatured: number;
    costPerItem: number;
    slug: string;
    mainPhoto?: any;
    title: string;
    viewsCount: number;
    elment_trans: any[];
    prdctcats: Prdctcat[];
    label: any[];
    tags: Tag[];
    sizes: Size[];
    descriptions: any[];
    materials: Material[];
    shapes: any[];
    user: User;
    comments: any[];
    colours: Colour[];
    rate: number;
  }

  export interface Pivot6 {
    productId: number;
    prdctcatId: number;
  }

  export interface ElmentTran5 {
    id: number;
    languageCode: string;
    title: string;
    description?: any;
    metaData?: any;
    slug: string;
    files: any[];
  }

  export interface Prdctcat2 {
    id: number;
    parentId: number;
    photo?: any;
    status: number;
    slug?: any;
    pivot: Pivot6;
    elment_trans: ElmentTran5[];
  }

  export interface Pivot7 {
    productId: number;
    colourId: number;
    quantity: number;
    sku: string;
  }

  export interface ElmentTran6 {
    id: number;
    rowId: number;
    languageCode: string;
    title: string;
    created_at?: any;
    updated_at?: any;
  }

  export interface Colour2 {
    id: number;
    created_at?: any;
    updated_at?: any;
    code: string;
    pivot: Pivot7;
    elment_trans: ElmentTran6[];
  }

  export interface Pivot8 {
    productId: number;
    tagId: number;
  }

  export interface ElmentTran7 {
    id: number;
    rowId: number;
    languageCode: string;
    title: string;
  }

  export interface Tag2 {
    id: number;
    photo?: any;
    pivot: Pivot8;
    elment_trans: ElmentTran7[];
  }

  export interface Pivot9 {
    productId: number;
    sizeId: number;
  }

  export interface Size2 {
    id: number;
    title: string;
    pivot: Pivot9;
  }

  export interface Pivot10 {
    productId: number;
    descriptionId: number;
  }

  export interface ElmentTran8 {
    id: number;
    rowId: number;
    languageCode: string;
    title: string;
    description?: any;
    created_at?: any;
    updated_at?: any;
  }

  export interface Description {
    id: number;
    created_at?: any;
    updated_at?: any;
    pivot: Pivot10;
    elment_trans: ElmentTran8[];
  }

  export interface Pivot11 {
    productId: number;
    materialId: number;
    value: number;
  }

  export interface ElmentTran9 {
    id: number;
    rowId: number;
    languageCode: string;
    title: string;
    created_at?: any;
    updated_at?: any;
  }

  export interface Material2 {
    id: number;
    created_at?: any;
    updated_at?: any;
    pivot: Pivot11;
    elment_trans: ElmentTran9[];
  }

  export interface User2 {
    id: number;
    name?: any;
    email: string;
    email_verified_at?: any;
    firstName: string;
    lastName: string;
    phone: string;
    activationCode?: any;
    status: number;
    groupId: number;
    super: number;
    countryId: number;
    cityId: number;
    brandName: string;
    brandUsername: string;
    website: string;
    adrs: string;
    bnkAccntNm?: any;
    iban?: any;
    swiftCode?: any;
    bnkCntryId: number;
    bankName?: any;
    erpSystem?: any;
    photo: string;
    userCredit: number;
    fieldId: number;
    passport?: any;
    commercialTitle: string;
    taxNumber: string;
    taxAdminstration: string;
    postcode?: any;
    mersisNo?: any;
    logo: string;
    minBill: number;
    taxRate: number;
    isFeatured: number;
    facebook?: any;
    twitter?: any;
    instagram?: any;
    youtube?: any;
    contactLang: string;
    facebook_id?: any;
    google_id?: any;
    twitter_id?: any;
    legalInfoFile?: any;
    preferredCurrency: string;
    signatureFile?: any;
    countryCode?: any;
    full_name: string;
    userLogo: string;
    userCover: string;
    userSignatureFile: string;
    userLegalInfoFile: string;
  }

  export interface FeaturedImage {
    id: number;
    rowId: number;
    fileName: string;
    colourId: number;
    isFeatured: number;
    imgUrl: string;
  }

  export interface SimilarProduct {
    id: number;
    userId: number;
    regularPrice: number;
    salePrice: number;
    saleStart?: any;
    saleEnd?: any;
    quantityStep: number;
    stock: number;
    weight: number;
    sku?: any;
    status: number;
    created_at: Date;
    updated_at: Date;
    width: number;
    height: number;
    length: number;
    stockStatus: number;
    isFeatured: number;
    costPerItem: number;
    slug: string;
    mainPhoto?: any;
    title: string;
    elment_trans: any[];
    prdctcats: Prdctcat2[];
    label: any[];
    colours: Colour2[];
    tags: Tag2[];
    sizes: Size2[];
    descriptions: Description[];
    materials: Material2[];
    shapes: any[];
    user: User2;
    featured_images: FeaturedImage[];
    rate: number;
  }

  export interface RootObject {
    row: Row;
    similarProducts: SimilarProduct[];
  }
}

export declare module filters {
  export interface ElmentTran {
    id: number;
    languageCode: string;
    title: string;
    description?: any;
    metaData?: any;
    slug: string;
    files: any[];
  }

  export interface Category {
    id: number;
    elment_trans: ElmentTran[];
  }

  export interface Label {
    id: number;
    label: string;
  }

  export interface ElmentTran2 {
    id: number;
    rowId: number;
    languageCode: string;
    title: string;
  }

  export interface Tag {
    id: number;
    elment_trans: ElmentTran2[];
  }

  export interface Size {
    id: number;
    title: string;
  }

  export interface ElmentTran3 {
    id: number;
    rowId: number;
    languageCode: string;
    title: string;
    created_at?: any;
    updated_at?: any;
  }

  export interface Colour {
    id: number;
    code: string;
    elment_trans: ElmentTran3[];
  }

  export interface ElmentTran4 {
    id: number;
    rowId: number;
    languageCode: string;
    title: string;
    description?: any;
    created_at?: any;
    updated_at?: any;
  }

  export interface Description {
    id: number;
    elment_trans: ElmentTran4[];
  }

  export interface ElmentTran5 {
    id: number;
    rowId: number;
    languageCode: string;
    title: string;
    created_at?: any;
    updated_at?: any;
  }

  export interface Material {
    id: number;
    elment_trans: ElmentTran5[];
  }

  export interface RootObject {
    categories: Category[];
    labels: Label[];
    tags: Tag[];
    sizes: Size[];
    colours: Colour[];
    descriptions: Description[];
    materials: Material[];
    shapes: any[];
  }
}

export declare module quotations {
  export interface ElmentTran {
    id: number;
    languageCode: string;
    title: string;
    description?: any;
    metaData?: any;
    slug: string;
    files: any[];
  }

  export interface Category {
    id: number;
    parentId: number;
    photo: string;
    status: number;
    slug?: any;
    theOrder?: any;
    elment_trans: ElmentTran[];
  }

  export interface Client {
    id: number;
    name?: any;
    email?: any;
    email_verified_at?: any;
    firstName: string;
    lastName: string;
    phone: string;
    activationCode?: any;
    status: number;
    groupId: number;
    super: number;
    countryId: number;
    cityId: number;
    brandName?: any;
    brandUsername?: any;
    website?: any;
    adrs?: any;
    bnkAccntNm?: any;
    iban?: any;
    swiftCode?: any;
    bnkCntryId: number;
    bankName?: any;
    erpSystem?: any;
    photo: string;
    userCredit: number;
    fieldId: number;
    passport?: any;
    commercialTitle: string;
    taxNumber?: any;
    taxAdminstration?: any;
    postcode?: any;
    mersisNo?: any;
    logo: string;
    minBill: number;
    taxRate: number;
    isFeatured: number;
    facebook?: any;
    twitter?: any;
    instagram?: any;
    youtube?: any;
    contactLang: string;
    facebook_id?: any;
    google_id?: any;
    twitter_id?: any;
    legalInfoFile?: any;
    preferredCurrency: string;
    signatureFile?: any;
    countryCode?: any;
    isPublished: number;
    full_name: string;
    userLogo: string;
    userCover: string;
    userSignatureFile: string;
    userLegalInfoFile: string;
  }

  export interface Vendor {
    id: number;
    name?: any;
    email: string;
    email_verified_at?: any;
    firstName: string;
    lastName: string;
    phone: string;
    activationCode?: any;
    status: number;
    groupId: number;
    super: number;
    countryId: number;
    cityId: number;
    brandName: string;
    brandUsername: string;
    website: string;
    adrs: string;
    bnkAccntNm?: any;
    iban?: any;
    swiftCode?: any;
    bnkCntryId: number;
    bankName?: any;
    erpSystem?: any;
    photo: string;
    userCredit: number;
    fieldId: number;
    passport?: any;
    commercialTitle: string;
    taxNumber: string;
    taxAdminstration: string;
    postcode: string;
    mersisNo?: any;
    logo: string;
    minBill: number;
    taxRate: number;
    isFeatured: number;
    facebook?: any;
    twitter?: any;
    instagram?: any;
    youtube?: any;
    contactLang: string;
    facebook_id?: any;
    google_id?: any;
    twitter_id?: any;
    legalInfoFile?: any;
    preferredCurrency: string;
    signatureFile?: any;
    countryCode?: any;
    isPublished: number;
    full_name: string;
    userLogo: string;
    userCover: string;
    userSignatureFile: string;
    userLegalInfoFile: string;
  }

  export interface Row {
    id: number;
    title: string;
    vendorId: number;
    clientId: number;
    categoryId: number;
    quantity: number;
    description: string;
    photo: string;
    status: number;
    created_at: Date;
    updated_at: Date;
    estimatedDeliveryDate: string;
    destinationCountryCode: string;
    imgUrl: string;
    category: Category;
    client: Client;
    vendor: Vendor;
  }

  export interface RootObject {
    rows: Row[];
  }
}

export declare module Orders {
  export interface User {
    id: number;
    name?: any;
    email?: any;
    email_verified_at?: any;
    firstName: string;
    lastName: string;
    phone: string;
    activationCode?: any;
    status: number;
    groupId: number;
    super: number;
    countryId: number;
    cityId: number;
    brandName?: any;
    brandUsername?: any;
    website?: any;
    adrs?: any;
    bnkAccntNm?: any;
    iban?: any;
    swiftCode?: any;
    bnkCntryId: number;
    bankName?: any;
    erpSystem?: any;
    photo?: any;
    userCredit: number;
    fieldId: number;
    passport?: any;
    commercialTitle?: any;
    taxNumber?: any;
    taxAdminstration?: any;
    postcode?: any;
    mersisNo?: any;
    logo?: any;
    minBill: number;
    taxRate: number;
    isFeatured: number;
    facebook?: any;
    twitter?: any;
    instagram?: any;
    youtube?: any;
    contactLang: string;
    facebook_id?: any;
    google_id?: any;
    twitter_id?: any;
    legalInfoFile?: any;
    preferredCurrency: string;
    signatureFile?: any;
    countryCode?: any;
    isPublished: number;
    theOrder?: any;
    full_name: string;
    userLogo: string;
    userCover: string;
    userSignatureFile: string;
    userLegalInfoFile: string;
  }

  export interface Country {
    id: number;
    titleAR: string;
    titleEN: string;
    countryCode: string;
    timeZone: string;
    phoneCode: string;
    long: string;
    latt: string;
    img: string;
    flag: string;
    shipmentCalculationType: number;
    fixedValue: number;
    firstKiloOfferProduct: number;
    nextKiloOfferProduct: number;
    firstKiloNotOfferProduct: number;
    nextKiloNotOfferProduct: number;
    status: number;
    theOrder: number;
    vat: number;
    cargoPeriodMsg: string;
    currencyId: number;
    isDeleted: number;
  }

  export interface Couriers {
    id: number;
    userId: number;
    countryCode: string;
    cargoId: number;
    code: string;
    shippingMethod: string;
    isDefault: number;
    contactName?: any;
    phone?: any;
    notes?: any;
    title: string;
    country: Country;
  }

  export interface Pivot {
    orderId: number;
    userId: number;
    orderStatus: string;
  }

  export interface OrderVendor {
    id: number;
    name?: any;
    email: string;
    email_verified_at?: any;
    firstName: string;
    lastName: string;
    phone: string;
    activationCode?: any;
    status: number;
    groupId: number;
    super: number;
    countryId: number;
    cityId: number;
    brandName: string;
    brandUsername: string;
    website: string;
    adrs: string;
    bnkAccntNm?: any;
    iban?: any;
    swiftCode?: any;
    bnkCntryId: number;
    bankName?: any;
    erpSystem?: any;
    photo: string;
    userCredit: number;
    fieldId: number;
    passport?: any;
    commercialTitle: string;
    taxNumber: string;
    taxAdminstration: string;
    postcode?: any;
    mersisNo?: any;
    logo: string;
    minBill: number;
    taxRate: number;
    isFeatured: number;
    facebook?: any;
    twitter?: any;
    instagram?: any;
    youtube?: any;
    contactLang: string;
    facebook_id?: any;
    google_id?: any;
    twitter_id?: any;
    legalInfoFile?: any;
    preferredCurrency: string;
    signatureFile?: any;
    countryCode?: any;
    isPublished: number;
    theOrder: number;
    full_name: string;
    userLogo: string;
    userCover: string;
    userSignatureFile: string;
    userLegalInfoFile: string;
    pivot: Pivot;
  }

  export interface Row {
    id: number;
    userId: number;
    userCredit: number;
    shipmentAdrsId: number;
    paymentStatus: string;
    paymentType: string;
    notes: string;
    created_at: Date;
    updated_at: Date;
    shippingMethod: string;
    courierId: number;
    couponId: number;
    isDeleted: number;
    totalPrice: number;
    user: User;
    shipmentadrs?: any;
    couriers: Couriers;
    shipment_firm?: any;
    order_vendors: OrderVendor[];
  }

  export interface RootObject {
    rows: Row[];
  }
}

export declare module Order {
  export interface User {
    id: number;
    name?: any;
    email?: any;
    email_verified_at?: any;
    firstName: string;
    lastName: string;
    phone: string;
    activationCode?: any;
    status: number;
    groupId: number;
    super: number;
    countryId: number;
    cityId: number;
    brandName?: any;
    brandUsername?: any;
    website?: any;
    adrs?: any;
    bnkAccntNm?: any;
    iban?: any;
    swiftCode?: any;
    bnkCntryId: number;
    bankName?: any;
    erpSystem?: any;
    photo?: any;
    userCredit: number;
    fieldId: number;
    passport?: any;
    commercialTitle?: any;
    taxNumber?: any;
    taxAdminstration?: any;
    postcode?: any;
    mersisNo?: any;
    logo?: any;
    minBill: number;
    taxRate: number;
    isFeatured: number;
    facebook?: any;
    twitter?: any;
    instagram?: any;
    youtube?: any;
    contactLang: string;
    facebook_id?: any;
    google_id?: any;
    twitter_id?: any;
    legalInfoFile?: any;
    preferredCurrency: string;
    signatureFile?: any;
    countryCode?: any;
    isPublished: number;
    theOrder?: any;
    full_name: string;
    userLogo: string;
    userCover: string;
    userSignatureFile: string;
    userLegalInfoFile: string;
  }

  export interface Country {
    id: number;
    titleAR: string;
    titleEN: string;
    countryCode: string;
    timeZone: string;
    phoneCode: string;
    long: string;
    latt: string;
    img: string;
    flag: string;
    shipmentCalculationType: number;
    fixedValue: number;
    firstKiloOfferProduct: number;
    nextKiloOfferProduct: number;
    firstKiloNotOfferProduct: number;
    nextKiloNotOfferProduct: number;
    status: number;
    theOrder: number;
    vat: number;
    cargoPeriodMsg: string;
    currencyId: number;
    isDeleted: number;
  }

  export interface Couriers {
    id: number;
    userId: number;
    countryCode: string;
    cargoId: number;
    code: string;
    shippingMethod: string;
    isDefault: number;
    contactName?: any;
    phone?: any;
    notes?: any;
    title: string;
    country: Country;
  }

  export interface Image {
    id: number;
    rowId: number;
    fileName: string;
    colourId: number;
    isFeatured: number;
    imgUrl: string;
    orjImgUrl: string;
  }

  export interface Pivot {
    productId: number;
    prdctcatId: number;
  }

  export interface ElmentTran {
    id: number;
    languageCode: string;
    title: string;
    description?: any;
    metaData?: any;
    slug: string;
    files: any[];
  }

  export interface Prdctcat {
    id: number;
    parentId: number;
    photo?: any;
    status: number;
    slug?: any;
    theOrder?: any;
    pivot: Pivot;
    elment_trans: ElmentTran[];
  }

  export interface Product {
    id: number;
    userId: number;
    regularPrice: number;
    salePrice: number;
    saleStart?: any;
    saleEnd?: any;
    quantityStep: number;
    stock: number;
    weight: number;
    sku?: any;
    status: number;
    created_at: Date;
    updated_at: Date;
    width: number;
    height: number;
    length: number;
    stockStatus: number;
    isFeatured: number;
    costPerItem: number;
    slug: string;
    mainPhoto?: any;
    title: string;
    prdctcats: Prdctcat[];
  }

  export interface Item {
    id: number;
    orderId: string;
    productId: number;
    variationId: number;
    optionId: number;
    regularPrice: number;
    salePrice: number;
    quantity: number;
    sku?: any;
    created_at?: any;
    updated_at?: any;
    vendorId: number;
    images: Image[];
    product: Product;
  }

  export interface Pivot2 {
    orderId: number;
    userId: number;
    orderStatus: string;
  }

  export interface OrderVendor {
    id: number;
    name?: any;
    email: string;
    email_verified_at?: any;
    firstName: string;
    lastName: string;
    phone: string;
    activationCode?: any;
    status: number;
    groupId: number;
    super: number;
    countryId: number;
    cityId: number;
    brandName: string;
    brandUsername: string;
    website: string;
    adrs: string;
    bnkAccntNm?: any;
    iban?: any;
    swiftCode?: any;
    bnkCntryId: number;
    bankName?: any;
    erpSystem?: any;
    photo: string;
    userCredit: number;
    fieldId: number;
    passport?: any;
    commercialTitle: string;
    taxNumber: string;
    taxAdminstration: string;
    postcode?: any;
    mersisNo?: any;
    logo: string;
    minBill: number;
    taxRate: number;
    isFeatured: number;
    facebook?: any;
    twitter?: any;
    instagram?: any;
    youtube?: any;
    contactLang: string;
    facebook_id?: any;
    google_id?: any;
    twitter_id?: any;
    legalInfoFile?: any;
    preferredCurrency: string;
    signatureFile?: any;
    countryCode?: any;
    isPublished: number;
    theOrder: number;
    items: Item[];
    full_name: string;
    userLogo: string;
    userCover: string;
    userSignatureFile: string;
    userLegalInfoFile: string;
    pivot: Pivot2;
  }

  export interface RootObject {
    id: number;
    userId: number;
    userCredit: number;
    shipmentAdrsId: number;
    paymentStatus: string;
    paymentType: string;
    notes: string;
    created_at: Date;
    updated_at: Date;
    shippingMethod: string;
    courierId: number;
    couponId: number;
    isDeleted: number;
    totalPrice: number;
    user: User;
    shipmentadrs?: any;
    couriers: Couriers;
    order_vendors: OrderVendor[];
  }
}

export declare module Stocks {
  export interface ElmentTran {
    title: string;
    description?: any;
    slug: string;
  }

  export interface Prdctcat {
    id: number;
    parentId: number;
    photo: string;
    status: number;
    theOrder?: number;
    elment_trans: ElmentTran[];
  }

  export interface ElmentTran2 {
    title: string;
  }

  export interface Tag {
    id: number;
    photo?: any;
    elment_trans: ElmentTran2[];
  }

  export interface Size {
    id: number;
    title: string;
  }

  export interface ElmentTran3 {
    title: string;
  }

  export interface Colour {
    id: number;
    code: string;
    elment_trans: ElmentTran3[];
  }

  export interface ElmentTran4 {
    title: string;
    description: string;
  }

  export interface Description {
    id: number;
    elment_trans: ElmentTran4[];
  }

  export interface ElmentTran5 {
    title: string;
  }

  export interface Material {
    id: number;
    elment_trans: ElmentTran5[];
  }

  export interface User {
    id: number;
    brandName: string;
    full_name: string;
    userLogo: string;
    userCover: string;
    userSignatureFile: string;
    userLegalInfoFile: string;
  }

  export interface FeaturedImage {
    id: number;
    rowId: number;
    fileName: string;
    colourId: number;
    isFeatured: number;
    imgUrl: string;
    orjImgUrl: string;
  }

  export interface ElmentTran6 {
    title: string;
    slug?: any;
  }

  export interface Row {
    id: number;
    userId: number;
    price: number;
    quantity: number;
    saleStart: string;
    saleEnd: string;
    weight: number;
    width: number;
    height: number;
    length: number;
    sku?: any;
    status: number;
    isApproved: number;
    isSoldOut: number;
    created_at: Date;
    updated_at: Date;
    viewsCount: number;
    prdctcats: Prdctcat[];
    label: any[];
    tags: Tag[];
    sizes: Size[];
    colours: Colour[];
    descriptions: Description[];
    materials: Material[];
    shapes: any[];
    user: User;
    featured_images: FeaturedImage[];
    elment_trans: ElmentTran6[];
    rate: number;
  }

  export interface RootObject {
    rows: Row[];
  }
}
