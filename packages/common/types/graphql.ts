export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminAuthPayload = {
  __typename?: 'AdminAuthPayload';
  accessToken?: Maybe<Scalars['String']>;
  admin?: Maybe<User>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type Article = {
  __typename?: 'Article';
  id: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  photo?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
};

export type ArticleCreateInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type ArticleOrderByInput = {
  id?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
  photo?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
};

export type ArticleUpdateInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ArticleUpdateManyMutationInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ArticleWhereInput = {
  AND?: Maybe<Array<ArticleWhereInput>>;
  OR?: Maybe<Array<ArticleWhereInput>>;
  NOT?: Maybe<Array<ArticleWhereInput>>;
  id?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  photo?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
};

export type ArticleWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type BankAccount = {
  __typename?: 'BankAccount';
  id: Scalars['Int'];
  userId: Scalars['String'];
  bankName?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  branchCode?: Maybe<Scalars['String']>;
  ibanUSD?: Maybe<Scalars['String']>;
  ibanTRY?: Maybe<Scalars['String']>;
  ibanEUR?: Maybe<Scalars['String']>;
};

export type BankAccountCreateInput = {
  userId?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  branchCode?: Maybe<Scalars['String']>;
  ibanUSD?: Maybe<Scalars['String']>;
  ibanTRY?: Maybe<Scalars['String']>;
  ibanEUR?: Maybe<Scalars['String']>;
};

export type BankAccountOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  bankName?: Maybe<SortOrder>;
  accountName?: Maybe<SortOrder>;
  iban?: Maybe<SortOrder>;
  accountNumber?: Maybe<SortOrder>;
  swiftCode?: Maybe<SortOrder>;
  branchCode?: Maybe<SortOrder>;
  ibanUSD?: Maybe<SortOrder>;
  ibanTRY?: Maybe<SortOrder>;
  ibanEUR?: Maybe<SortOrder>;
};

export type BankAccountUpdateInput = {
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accountName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accountNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  branchCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ibanUSD?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ibanTRY?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ibanEUR?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type BankAccountUpdateManyMutationInput = {
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accountName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accountNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  branchCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ibanUSD?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ibanTRY?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ibanEUR?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type BankAccountWhereInput = {
  AND?: Maybe<Array<BankAccountWhereInput>>;
  OR?: Maybe<Array<BankAccountWhereInput>>;
  NOT?: Maybe<Array<BankAccountWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<StringFilter>;
  bankName?: Maybe<StringNullableFilter>;
  accountName?: Maybe<StringNullableFilter>;
  iban?: Maybe<StringNullableFilter>;
  accountNumber?: Maybe<StringNullableFilter>;
  swiftCode?: Maybe<StringNullableFilter>;
  branchCode?: Maybe<StringNullableFilter>;
  ibanUSD?: Maybe<StringNullableFilter>;
  ibanTRY?: Maybe<StringNullableFilter>;
  ibanEUR?: Maybe<StringNullableFilter>;
};

export type BankAccountWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type BankCard = {
  __typename?: 'BankCard';
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  cardName?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  cardExpire?: Maybe<Scalars['String']>;
  cvv?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type BankCardCreateInput = {
  userId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  cardName?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  cardExpire?: Maybe<Scalars['String']>;
  cvv?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type BankCardOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  cardName?: Maybe<SortOrder>;
  cardNumber?: Maybe<SortOrder>;
  cardExpire?: Maybe<SortOrder>;
  cvv?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type BankCardUpdateInput = {
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cardName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cardNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cardExpire?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cvv?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type BankCardUpdateManyMutationInput = {
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cardName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cardNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cardExpire?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cvv?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type BankCardWhereInput = {
  AND?: Maybe<Array<BankCardWhereInput>>;
  OR?: Maybe<Array<BankCardWhereInput>>;
  NOT?: Maybe<Array<BankCardWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntNullableFilter>;
  title?: Maybe<StringNullableFilter>;
  cardName?: Maybe<StringNullableFilter>;
  cardNumber?: Maybe<StringNullableFilter>;
  cardExpire?: Maybe<StringNullableFilter>;
  cvv?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type BankCardWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Brand = {
  __typename?: 'Brand';
  id: Scalars['Int'];
  photo?: Maybe<Scalars['String']>;
};

export type Cargo = {
  __typename?: 'Cargo';
  id: Scalars['Int'];
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  trackLink?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  isDeleted: Scalars['Int'];
  photo?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  countryCode: Scalars['String'];
  country: Country;
  cargoCountries: Array<CargoCountry>;
  cargoCodes: Array<CargoCode>;
  orders: Array<Order>;
};


export type CargoCargoCountriesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CargoCountryWhereUniqueInput>;
};


export type CargoCargoCodesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CargoCodeWhereUniqueInput>;
};


export type CargoOrdersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderWhereUniqueInput>;
};

export type CargoCode = {
  __typename?: 'CargoCode';
  id: Scalars['Int'];
  cargoId: Scalars['Int'];
  code?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  userId: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  cargo: Cargo;
  user: User;
};

export type CargoCodeCreateManyCargoInput = {
  id?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
};

export type CargoCodeCreateManyCargoInputEnvelope = {
  data?: Maybe<Array<CargoCodeCreateManyCargoInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CargoCodeCreateManyUserInput = {
  id?: Maybe<Scalars['Int']>;
  cargoId?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
};

export type CargoCodeCreateManyUserInputEnvelope = {
  data?: Maybe<Array<CargoCodeCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CargoCodeCreateNestedManyWithoutCargoInput = {
  create?: Maybe<Array<CargoCodeCreateWithoutCargoInput>>;
  connectOrCreate?: Maybe<Array<CargoCodeCreateOrConnectWithoutCargoInput>>;
  createMany?: Maybe<CargoCodeCreateManyCargoInputEnvelope>;
  connect?: Maybe<Array<CargoCodeWhereUniqueInput>>;
};

export type CargoCodeCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<CargoCodeCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<CargoCodeCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<CargoCodeCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<CargoCodeWhereUniqueInput>>;
};

export type CargoCodeCreateOrConnectWithoutCargoInput = {
  where: CargoCodeWhereUniqueInput;
  create: CargoCodeCreateWithoutCargoInput;
};

export type CargoCodeCreateOrConnectWithoutUserInput = {
  where: CargoCodeWhereUniqueInput;
  create: CargoCodeCreateWithoutUserInput;
};

export type CargoCodeCreateWithoutCargoInput = {
  code?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  user?: Maybe<UserCreateNestedOneWithoutCargoCodesInput>;
};

export type CargoCodeCreateWithoutUserInput = {
  code?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  cargo?: Maybe<CargoCreateNestedOneWithoutCargoCodesInput>;
};

export type CargoCodeListRelationFilter = {
  every?: Maybe<CargoCodeWhereInput>;
  some?: Maybe<CargoCodeWhereInput>;
  none?: Maybe<CargoCodeWhereInput>;
};

export type CargoCodeScalarWhereInput = {
  AND?: Maybe<Array<CargoCodeScalarWhereInput>>;
  OR?: Maybe<Array<CargoCodeScalarWhereInput>>;
  NOT?: Maybe<Array<CargoCodeScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  cargoId?: Maybe<IntFilter>;
  code?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  shippingMethod?: Maybe<StringNullableFilter>;
};

export type CargoCodeUpdateManyMutationInput = {
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  shippingMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CargoCodeUpdateManyWithWhereWithoutCargoInput = {
  where: CargoCodeScalarWhereInput;
  data: CargoCodeUpdateManyMutationInput;
};

export type CargoCodeUpdateManyWithWhereWithoutUserInput = {
  where: CargoCodeScalarWhereInput;
  data: CargoCodeUpdateManyMutationInput;
};

export type CargoCodeUpdateManyWithoutCargoInput = {
  create?: Maybe<Array<CargoCodeCreateWithoutCargoInput>>;
  connectOrCreate?: Maybe<Array<CargoCodeCreateOrConnectWithoutCargoInput>>;
  upsert?: Maybe<Array<CargoCodeUpsertWithWhereUniqueWithoutCargoInput>>;
  createMany?: Maybe<CargoCodeCreateManyCargoInputEnvelope>;
  connect?: Maybe<Array<CargoCodeWhereUniqueInput>>;
  set?: Maybe<Array<CargoCodeWhereUniqueInput>>;
  disconnect?: Maybe<Array<CargoCodeWhereUniqueInput>>;
  delete?: Maybe<Array<CargoCodeWhereUniqueInput>>;
  update?: Maybe<Array<CargoCodeUpdateWithWhereUniqueWithoutCargoInput>>;
  updateMany?: Maybe<Array<CargoCodeUpdateManyWithWhereWithoutCargoInput>>;
  deleteMany?: Maybe<Array<CargoCodeScalarWhereInput>>;
};

export type CargoCodeUpdateManyWithoutUserInput = {
  create?: Maybe<Array<CargoCodeCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<CargoCodeCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<CargoCodeUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<CargoCodeCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<CargoCodeWhereUniqueInput>>;
  set?: Maybe<Array<CargoCodeWhereUniqueInput>>;
  disconnect?: Maybe<Array<CargoCodeWhereUniqueInput>>;
  delete?: Maybe<Array<CargoCodeWhereUniqueInput>>;
  update?: Maybe<Array<CargoCodeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<CargoCodeUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<CargoCodeScalarWhereInput>>;
};

export type CargoCodeUpdateWithWhereUniqueWithoutCargoInput = {
  where: CargoCodeWhereUniqueInput;
  data: CargoCodeUpdateWithoutCargoInput;
};

export type CargoCodeUpdateWithWhereUniqueWithoutUserInput = {
  where: CargoCodeWhereUniqueInput;
  data: CargoCodeUpdateWithoutUserInput;
};

export type CargoCodeUpdateWithoutCargoInput = {
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  shippingMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCargoCodesInput>;
};

export type CargoCodeUpdateWithoutUserInput = {
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  shippingMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cargo?: Maybe<CargoUpdateOneRequiredWithoutCargoCodesInput>;
};

export type CargoCodeUpsertWithWhereUniqueWithoutCargoInput = {
  where: CargoCodeWhereUniqueInput;
  update: CargoCodeUpdateWithoutCargoInput;
  create: CargoCodeCreateWithoutCargoInput;
};

export type CargoCodeUpsertWithWhereUniqueWithoutUserInput = {
  where: CargoCodeWhereUniqueInput;
  update: CargoCodeUpdateWithoutUserInput;
  create: CargoCodeCreateWithoutUserInput;
};

export type CargoCodeWhereInput = {
  AND?: Maybe<Array<CargoCodeWhereInput>>;
  OR?: Maybe<Array<CargoCodeWhereInput>>;
  NOT?: Maybe<Array<CargoCodeWhereInput>>;
  id?: Maybe<IntFilter>;
  cargoId?: Maybe<IntFilter>;
  code?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  shippingMethod?: Maybe<StringNullableFilter>;
  cargo?: Maybe<CargoWhereInput>;
  user?: Maybe<UserWhereInput>;
};

export type CargoCodeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type CargoCountry = {
  __typename?: 'CargoCountry';
  id: Scalars['Int'];
  cargoId?: Maybe<Scalars['Int']>;
  countryId?: Maybe<Scalars['Int']>;
  seaPrice: Scalars['Float'];
  landPrice: Scalars['Float'];
  airPrice: Scalars['Float'];
  expressTimeFrom: Scalars['Int'];
  expressTimeTo: Scalars['Int'];
  expressPrice: Scalars['Int'];
  airTimeFrom: Scalars['Int'];
  airTimeTo: Scalars['Int'];
  seaTimeFrom: Scalars['Int'];
  seaTimeTo: Scalars['Int'];
  landTimeFrom: Scalars['Int'];
  landTimeTo: Scalars['Int'];
  cargo?: Maybe<Cargo>;
  country?: Maybe<Country>;
};

export type CargoCountryCreateManyCargoInput = {
  id?: Maybe<Scalars['Int']>;
  countryId?: Maybe<Scalars['Int']>;
  seaPrice?: Maybe<Scalars['Float']>;
  landPrice?: Maybe<Scalars['Float']>;
  airPrice?: Maybe<Scalars['Float']>;
  expressTimeFrom?: Maybe<Scalars['Int']>;
  expressTimeTo?: Maybe<Scalars['Int']>;
  expressPrice?: Maybe<Scalars['Int']>;
  airTimeFrom?: Maybe<Scalars['Int']>;
  airTimeTo?: Maybe<Scalars['Int']>;
  seaTimeFrom?: Maybe<Scalars['Int']>;
  seaTimeTo?: Maybe<Scalars['Int']>;
  landTimeFrom?: Maybe<Scalars['Int']>;
  landTimeTo?: Maybe<Scalars['Int']>;
};

export type CargoCountryCreateManyCargoInputEnvelope = {
  data?: Maybe<Array<CargoCountryCreateManyCargoInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CargoCountryCreateManyCountryInput = {
  id?: Maybe<Scalars['Int']>;
  cargoId?: Maybe<Scalars['Int']>;
  seaPrice?: Maybe<Scalars['Float']>;
  landPrice?: Maybe<Scalars['Float']>;
  airPrice?: Maybe<Scalars['Float']>;
  expressTimeFrom?: Maybe<Scalars['Int']>;
  expressTimeTo?: Maybe<Scalars['Int']>;
  expressPrice?: Maybe<Scalars['Int']>;
  airTimeFrom?: Maybe<Scalars['Int']>;
  airTimeTo?: Maybe<Scalars['Int']>;
  seaTimeFrom?: Maybe<Scalars['Int']>;
  seaTimeTo?: Maybe<Scalars['Int']>;
  landTimeFrom?: Maybe<Scalars['Int']>;
  landTimeTo?: Maybe<Scalars['Int']>;
};

export type CargoCountryCreateManyCountryInputEnvelope = {
  data?: Maybe<Array<CargoCountryCreateManyCountryInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CargoCountryCreateNestedManyWithoutCargoInput = {
  create?: Maybe<Array<CargoCountryCreateWithoutCargoInput>>;
  connectOrCreate?: Maybe<Array<CargoCountryCreateOrConnectWithoutCargoInput>>;
  createMany?: Maybe<CargoCountryCreateManyCargoInputEnvelope>;
  connect?: Maybe<Array<CargoCountryWhereUniqueInput>>;
};

export type CargoCountryCreateNestedManyWithoutCountryInput = {
  create?: Maybe<Array<CargoCountryCreateWithoutCountryInput>>;
  connectOrCreate?: Maybe<Array<CargoCountryCreateOrConnectWithoutCountryInput>>;
  createMany?: Maybe<CargoCountryCreateManyCountryInputEnvelope>;
  connect?: Maybe<Array<CargoCountryWhereUniqueInput>>;
};

export type CargoCountryCreateOrConnectWithoutCargoInput = {
  where: CargoCountryWhereUniqueInput;
  create: CargoCountryCreateWithoutCargoInput;
};

export type CargoCountryCreateOrConnectWithoutCountryInput = {
  where: CargoCountryWhereUniqueInput;
  create: CargoCountryCreateWithoutCountryInput;
};

export type CargoCountryCreateWithoutCargoInput = {
  seaPrice?: Maybe<Scalars['Float']>;
  landPrice?: Maybe<Scalars['Float']>;
  airPrice?: Maybe<Scalars['Float']>;
  expressTimeFrom?: Maybe<Scalars['Int']>;
  expressTimeTo?: Maybe<Scalars['Int']>;
  expressPrice?: Maybe<Scalars['Int']>;
  airTimeFrom?: Maybe<Scalars['Int']>;
  airTimeTo?: Maybe<Scalars['Int']>;
  seaTimeFrom?: Maybe<Scalars['Int']>;
  seaTimeTo?: Maybe<Scalars['Int']>;
  landTimeFrom?: Maybe<Scalars['Int']>;
  landTimeTo?: Maybe<Scalars['Int']>;
  country?: Maybe<CountryCreateNestedOneWithoutCargoCountriesInput>;
};

export type CargoCountryCreateWithoutCountryInput = {
  seaPrice?: Maybe<Scalars['Float']>;
  landPrice?: Maybe<Scalars['Float']>;
  airPrice?: Maybe<Scalars['Float']>;
  expressTimeFrom?: Maybe<Scalars['Int']>;
  expressTimeTo?: Maybe<Scalars['Int']>;
  expressPrice?: Maybe<Scalars['Int']>;
  airTimeFrom?: Maybe<Scalars['Int']>;
  airTimeTo?: Maybe<Scalars['Int']>;
  seaTimeFrom?: Maybe<Scalars['Int']>;
  seaTimeTo?: Maybe<Scalars['Int']>;
  landTimeFrom?: Maybe<Scalars['Int']>;
  landTimeTo?: Maybe<Scalars['Int']>;
  cargo?: Maybe<CargoCreateNestedOneWithoutCargoCountriesInput>;
};

export type CargoCountryListRelationFilter = {
  every?: Maybe<CargoCountryWhereInput>;
  some?: Maybe<CargoCountryWhereInput>;
  none?: Maybe<CargoCountryWhereInput>;
};

export type CargoCountryScalarWhereInput = {
  AND?: Maybe<Array<CargoCountryScalarWhereInput>>;
  OR?: Maybe<Array<CargoCountryScalarWhereInput>>;
  NOT?: Maybe<Array<CargoCountryScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  cargoId?: Maybe<IntNullableFilter>;
  countryId?: Maybe<IntNullableFilter>;
  seaPrice?: Maybe<FloatFilter>;
  landPrice?: Maybe<FloatFilter>;
  airPrice?: Maybe<FloatFilter>;
  expressTimeFrom?: Maybe<IntFilter>;
  expressTimeTo?: Maybe<IntFilter>;
  expressPrice?: Maybe<IntFilter>;
  airTimeFrom?: Maybe<IntFilter>;
  airTimeTo?: Maybe<IntFilter>;
  seaTimeFrom?: Maybe<IntFilter>;
  seaTimeTo?: Maybe<IntFilter>;
  landTimeFrom?: Maybe<IntFilter>;
  landTimeTo?: Maybe<IntFilter>;
};

export type CargoCountryUpdateManyMutationInput = {
  seaPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  landPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  airPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  expressTimeFrom?: Maybe<IntFieldUpdateOperationsInput>;
  expressTimeTo?: Maybe<IntFieldUpdateOperationsInput>;
  expressPrice?: Maybe<IntFieldUpdateOperationsInput>;
  airTimeFrom?: Maybe<IntFieldUpdateOperationsInput>;
  airTimeTo?: Maybe<IntFieldUpdateOperationsInput>;
  seaTimeFrom?: Maybe<IntFieldUpdateOperationsInput>;
  seaTimeTo?: Maybe<IntFieldUpdateOperationsInput>;
  landTimeFrom?: Maybe<IntFieldUpdateOperationsInput>;
  landTimeTo?: Maybe<IntFieldUpdateOperationsInput>;
};

export type CargoCountryUpdateManyWithWhereWithoutCargoInput = {
  where: CargoCountryScalarWhereInput;
  data: CargoCountryUpdateManyMutationInput;
};

export type CargoCountryUpdateManyWithWhereWithoutCountryInput = {
  where: CargoCountryScalarWhereInput;
  data: CargoCountryUpdateManyMutationInput;
};

export type CargoCountryUpdateManyWithoutCargoInput = {
  create?: Maybe<Array<CargoCountryCreateWithoutCargoInput>>;
  connectOrCreate?: Maybe<Array<CargoCountryCreateOrConnectWithoutCargoInput>>;
  upsert?: Maybe<Array<CargoCountryUpsertWithWhereUniqueWithoutCargoInput>>;
  createMany?: Maybe<CargoCountryCreateManyCargoInputEnvelope>;
  connect?: Maybe<Array<CargoCountryWhereUniqueInput>>;
  set?: Maybe<Array<CargoCountryWhereUniqueInput>>;
  disconnect?: Maybe<Array<CargoCountryWhereUniqueInput>>;
  delete?: Maybe<Array<CargoCountryWhereUniqueInput>>;
  update?: Maybe<Array<CargoCountryUpdateWithWhereUniqueWithoutCargoInput>>;
  updateMany?: Maybe<Array<CargoCountryUpdateManyWithWhereWithoutCargoInput>>;
  deleteMany?: Maybe<Array<CargoCountryScalarWhereInput>>;
};

export type CargoCountryUpdateManyWithoutCountryInput = {
  create?: Maybe<Array<CargoCountryCreateWithoutCountryInput>>;
  connectOrCreate?: Maybe<Array<CargoCountryCreateOrConnectWithoutCountryInput>>;
  upsert?: Maybe<Array<CargoCountryUpsertWithWhereUniqueWithoutCountryInput>>;
  createMany?: Maybe<CargoCountryCreateManyCountryInputEnvelope>;
  connect?: Maybe<Array<CargoCountryWhereUniqueInput>>;
  set?: Maybe<Array<CargoCountryWhereUniqueInput>>;
  disconnect?: Maybe<Array<CargoCountryWhereUniqueInput>>;
  delete?: Maybe<Array<CargoCountryWhereUniqueInput>>;
  update?: Maybe<Array<CargoCountryUpdateWithWhereUniqueWithoutCountryInput>>;
  updateMany?: Maybe<Array<CargoCountryUpdateManyWithWhereWithoutCountryInput>>;
  deleteMany?: Maybe<Array<CargoCountryScalarWhereInput>>;
};

export type CargoCountryUpdateWithWhereUniqueWithoutCargoInput = {
  where: CargoCountryWhereUniqueInput;
  data: CargoCountryUpdateWithoutCargoInput;
};

export type CargoCountryUpdateWithWhereUniqueWithoutCountryInput = {
  where: CargoCountryWhereUniqueInput;
  data: CargoCountryUpdateWithoutCountryInput;
};

export type CargoCountryUpdateWithoutCargoInput = {
  seaPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  landPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  airPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  expressTimeFrom?: Maybe<IntFieldUpdateOperationsInput>;
  expressTimeTo?: Maybe<IntFieldUpdateOperationsInput>;
  expressPrice?: Maybe<IntFieldUpdateOperationsInput>;
  airTimeFrom?: Maybe<IntFieldUpdateOperationsInput>;
  airTimeTo?: Maybe<IntFieldUpdateOperationsInput>;
  seaTimeFrom?: Maybe<IntFieldUpdateOperationsInput>;
  seaTimeTo?: Maybe<IntFieldUpdateOperationsInput>;
  landTimeFrom?: Maybe<IntFieldUpdateOperationsInput>;
  landTimeTo?: Maybe<IntFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutCargoCountriesInput>;
};

export type CargoCountryUpdateWithoutCountryInput = {
  seaPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  landPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  airPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  expressTimeFrom?: Maybe<IntFieldUpdateOperationsInput>;
  expressTimeTo?: Maybe<IntFieldUpdateOperationsInput>;
  expressPrice?: Maybe<IntFieldUpdateOperationsInput>;
  airTimeFrom?: Maybe<IntFieldUpdateOperationsInput>;
  airTimeTo?: Maybe<IntFieldUpdateOperationsInput>;
  seaTimeFrom?: Maybe<IntFieldUpdateOperationsInput>;
  seaTimeTo?: Maybe<IntFieldUpdateOperationsInput>;
  landTimeFrom?: Maybe<IntFieldUpdateOperationsInput>;
  landTimeTo?: Maybe<IntFieldUpdateOperationsInput>;
  cargo?: Maybe<CargoUpdateOneWithoutCargoCountriesInput>;
};

export type CargoCountryUpsertWithWhereUniqueWithoutCargoInput = {
  where: CargoCountryWhereUniqueInput;
  update: CargoCountryUpdateWithoutCargoInput;
  create: CargoCountryCreateWithoutCargoInput;
};

export type CargoCountryUpsertWithWhereUniqueWithoutCountryInput = {
  where: CargoCountryWhereUniqueInput;
  update: CargoCountryUpdateWithoutCountryInput;
  create: CargoCountryCreateWithoutCountryInput;
};

export type CargoCountryWhereInput = {
  AND?: Maybe<Array<CargoCountryWhereInput>>;
  OR?: Maybe<Array<CargoCountryWhereInput>>;
  NOT?: Maybe<Array<CargoCountryWhereInput>>;
  id?: Maybe<IntFilter>;
  cargoId?: Maybe<IntNullableFilter>;
  countryId?: Maybe<IntNullableFilter>;
  seaPrice?: Maybe<FloatFilter>;
  landPrice?: Maybe<FloatFilter>;
  airPrice?: Maybe<FloatFilter>;
  expressTimeFrom?: Maybe<IntFilter>;
  expressTimeTo?: Maybe<IntFilter>;
  expressPrice?: Maybe<IntFilter>;
  airTimeFrom?: Maybe<IntFilter>;
  airTimeTo?: Maybe<IntFilter>;
  seaTimeFrom?: Maybe<IntFilter>;
  seaTimeTo?: Maybe<IntFilter>;
  landTimeFrom?: Maybe<IntFilter>;
  landTimeTo?: Maybe<IntFilter>;
  cargo?: Maybe<CargoWhereInput>;
  country?: Maybe<CountryWhereInput>;
};

export type CargoCountryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type CargoCreateInput = {
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  trackLink?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  country: CountryCreateNestedOneWithoutCargosInput;
  cargoCountries?: Maybe<CargoCountryCreateNestedManyWithoutCargoInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutCargoInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutCargoInput>;
};

export type CargoCreateManyCountryInput = {
  id?: Maybe<Scalars['Int']>;
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  trackLink?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CargoCreateManyCountryInputEnvelope = {
  data?: Maybe<Array<CargoCreateManyCountryInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CargoCreateNestedManyWithoutCountryInput = {
  create?: Maybe<Array<CargoCreateWithoutCountryInput>>;
  connectOrCreate?: Maybe<Array<CargoCreateOrConnectWithoutCountryInput>>;
  createMany?: Maybe<CargoCreateManyCountryInputEnvelope>;
  connect?: Maybe<Array<CargoWhereUniqueInput>>;
};

export type CargoCreateNestedOneWithoutCargoCodesInput = {
  create?: Maybe<CargoCreateWithoutCargoCodesInput>;
  connectOrCreate?: Maybe<CargoCreateOrConnectWithoutCargoCodesInput>;
  connect?: Maybe<CargoWhereUniqueInput>;
};

export type CargoCreateNestedOneWithoutCargoCountriesInput = {
  create?: Maybe<CargoCreateWithoutCargoCountriesInput>;
  connectOrCreate?: Maybe<CargoCreateOrConnectWithoutCargoCountriesInput>;
  connect?: Maybe<CargoWhereUniqueInput>;
};

export type CargoCreateNestedOneWithoutOrdersInput = {
  create?: Maybe<CargoCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<CargoCreateOrConnectWithoutOrdersInput>;
  connect?: Maybe<CargoWhereUniqueInput>;
};

export type CargoCreateOrConnectWithoutCargoCodesInput = {
  where: CargoWhereUniqueInput;
  create: CargoCreateWithoutCargoCodesInput;
};

export type CargoCreateOrConnectWithoutCargoCountriesInput = {
  where: CargoWhereUniqueInput;
  create: CargoCreateWithoutCargoCountriesInput;
};

export type CargoCreateOrConnectWithoutCountryInput = {
  where: CargoWhereUniqueInput;
  create: CargoCreateWithoutCountryInput;
};

export type CargoCreateOrConnectWithoutOrdersInput = {
  where: CargoWhereUniqueInput;
  create: CargoCreateWithoutOrdersInput;
};

export type CargoCreateWithoutCargoCodesInput = {
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  trackLink?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  country: CountryCreateNestedOneWithoutCargosInput;
  cargoCountries?: Maybe<CargoCountryCreateNestedManyWithoutCargoInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutCargoInput>;
};

export type CargoCreateWithoutCargoCountriesInput = {
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  trackLink?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  country: CountryCreateNestedOneWithoutCargosInput;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutCargoInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutCargoInput>;
};

export type CargoCreateWithoutCountryInput = {
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  trackLink?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  cargoCountries?: Maybe<CargoCountryCreateNestedManyWithoutCargoInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutCargoInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutCargoInput>;
};

export type CargoCreateWithoutOrdersInput = {
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  trackLink?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  country: CountryCreateNestedOneWithoutCargosInput;
  cargoCountries?: Maybe<CargoCountryCreateNestedManyWithoutCargoInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutCargoInput>;
};

export type CargoListRelationFilter = {
  every?: Maybe<CargoWhereInput>;
  some?: Maybe<CargoWhereInput>;
  none?: Maybe<CargoWhereInput>;
};

export type CargoOrderByInput = {
  id?: Maybe<SortOrder>;
  titleAR?: Maybe<SortOrder>;
  titleEN?: Maybe<SortOrder>;
  trackLink?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  isDeleted?: Maybe<SortOrder>;
  photo?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
  countryCode?: Maybe<SortOrder>;
};

export type CargoScalarWhereInput = {
  AND?: Maybe<Array<CargoScalarWhereInput>>;
  OR?: Maybe<Array<CargoScalarWhereInput>>;
  NOT?: Maybe<Array<CargoScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  titleAR?: Maybe<StringNullableFilter>;
  titleEN?: Maybe<StringNullableFilter>;
  trackLink?: Maybe<StringNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
  isDeleted?: Maybe<IntFilter>;
  photo?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  countryCode?: Maybe<StringFilter>;
};

export type CargoUpdateInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  trackLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneRequiredWithoutCargosInput>;
  cargoCountries?: Maybe<CargoCountryUpdateManyWithoutCargoInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutCargoInput>;
  orders?: Maybe<OrderUpdateManyWithoutCargoInput>;
};

export type CargoUpdateManyMutationInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  trackLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type CargoUpdateManyWithWhereWithoutCountryInput = {
  where: CargoScalarWhereInput;
  data: CargoUpdateManyMutationInput;
};

export type CargoUpdateManyWithoutCountryInput = {
  create?: Maybe<Array<CargoCreateWithoutCountryInput>>;
  connectOrCreate?: Maybe<Array<CargoCreateOrConnectWithoutCountryInput>>;
  upsert?: Maybe<Array<CargoUpsertWithWhereUniqueWithoutCountryInput>>;
  createMany?: Maybe<CargoCreateManyCountryInputEnvelope>;
  connect?: Maybe<Array<CargoWhereUniqueInput>>;
  set?: Maybe<Array<CargoWhereUniqueInput>>;
  disconnect?: Maybe<Array<CargoWhereUniqueInput>>;
  delete?: Maybe<Array<CargoWhereUniqueInput>>;
  update?: Maybe<Array<CargoUpdateWithWhereUniqueWithoutCountryInput>>;
  updateMany?: Maybe<Array<CargoUpdateManyWithWhereWithoutCountryInput>>;
  deleteMany?: Maybe<Array<CargoScalarWhereInput>>;
};

export type CargoUpdateOneRequiredWithoutCargoCodesInput = {
  create?: Maybe<CargoCreateWithoutCargoCodesInput>;
  connectOrCreate?: Maybe<CargoCreateOrConnectWithoutCargoCodesInput>;
  upsert?: Maybe<CargoUpsertWithoutCargoCodesInput>;
  connect?: Maybe<CargoWhereUniqueInput>;
  update?: Maybe<CargoUpdateWithoutCargoCodesInput>;
};

export type CargoUpdateOneWithoutCargoCountriesInput = {
  create?: Maybe<CargoCreateWithoutCargoCountriesInput>;
  connectOrCreate?: Maybe<CargoCreateOrConnectWithoutCargoCountriesInput>;
  upsert?: Maybe<CargoUpsertWithoutCargoCountriesInput>;
  connect?: Maybe<CargoWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CargoUpdateWithoutCargoCountriesInput>;
};

export type CargoUpdateOneWithoutOrdersInput = {
  create?: Maybe<CargoCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<CargoCreateOrConnectWithoutOrdersInput>;
  upsert?: Maybe<CargoUpsertWithoutOrdersInput>;
  connect?: Maybe<CargoWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CargoUpdateWithoutOrdersInput>;
};

export type CargoUpdateWithWhereUniqueWithoutCountryInput = {
  where: CargoWhereUniqueInput;
  data: CargoUpdateWithoutCountryInput;
};

export type CargoUpdateWithoutCargoCodesInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  trackLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneRequiredWithoutCargosInput>;
  cargoCountries?: Maybe<CargoCountryUpdateManyWithoutCargoInput>;
  orders?: Maybe<OrderUpdateManyWithoutCargoInput>;
};

export type CargoUpdateWithoutCargoCountriesInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  trackLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneRequiredWithoutCargosInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutCargoInput>;
  orders?: Maybe<OrderUpdateManyWithoutCargoInput>;
};

export type CargoUpdateWithoutCountryInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  trackLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  cargoCountries?: Maybe<CargoCountryUpdateManyWithoutCargoInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutCargoInput>;
  orders?: Maybe<OrderUpdateManyWithoutCargoInput>;
};

export type CargoUpdateWithoutOrdersInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  trackLink?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneRequiredWithoutCargosInput>;
  cargoCountries?: Maybe<CargoCountryUpdateManyWithoutCargoInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutCargoInput>;
};

export type CargoUpsertWithWhereUniqueWithoutCountryInput = {
  where: CargoWhereUniqueInput;
  update: CargoUpdateWithoutCountryInput;
  create: CargoCreateWithoutCountryInput;
};

export type CargoUpsertWithoutCargoCodesInput = {
  update: CargoUpdateWithoutCargoCodesInput;
  create: CargoCreateWithoutCargoCodesInput;
};

export type CargoUpsertWithoutCargoCountriesInput = {
  update: CargoUpdateWithoutCargoCountriesInput;
  create: CargoCreateWithoutCargoCountriesInput;
};

export type CargoUpsertWithoutOrdersInput = {
  update: CargoUpdateWithoutOrdersInput;
  create: CargoCreateWithoutOrdersInput;
};

export type CargoWhereInput = {
  AND?: Maybe<Array<CargoWhereInput>>;
  OR?: Maybe<Array<CargoWhereInput>>;
  NOT?: Maybe<Array<CargoWhereInput>>;
  id?: Maybe<IntFilter>;
  titleAR?: Maybe<StringNullableFilter>;
  titleEN?: Maybe<StringNullableFilter>;
  trackLink?: Maybe<StringNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
  isDeleted?: Maybe<IntFilter>;
  photo?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  countryCode?: Maybe<StringFilter>;
  country?: Maybe<CountryWhereInput>;
  cargoCountries?: Maybe<CargoCountryListRelationFilter>;
  cargoCodes?: Maybe<CargoCodeListRelationFilter>;
  orders?: Maybe<OrderListRelationFilter>;
};

export type CargoWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type City = {
  __typename?: 'City';
  id: Scalars['Int'];
  countryId: Scalars['Int'];
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  isDeleted: Scalars['Int'];
  shipmentadr: Array<Shipmentadr>;
};


export type CityShipmentadrArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ShipmentadrWhereUniqueInput>;
};

export type CityCreateInput = {
  countryId: Scalars['Int'];
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  shipmentadr?: Maybe<ShipmentadrCreateNestedManyWithoutCityInput>;
};

export type CityCreateNestedOneWithoutShipmentadrInput = {
  create?: Maybe<CityCreateWithoutShipmentadrInput>;
  connectOrCreate?: Maybe<CityCreateOrConnectWithoutShipmentadrInput>;
  connect?: Maybe<CityWhereUniqueInput>;
};

export type CityCreateOrConnectWithoutShipmentadrInput = {
  where: CityWhereUniqueInput;
  create: CityCreateWithoutShipmentadrInput;
};

export type CityCreateWithoutShipmentadrInput = {
  countryId: Scalars['Int'];
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
};

export type CityOrderByInput = {
  id?: Maybe<SortOrder>;
  countryId?: Maybe<SortOrder>;
  titleAR?: Maybe<SortOrder>;
  titleEN?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  isDeleted?: Maybe<SortOrder>;
};

export type CityUpdateInput = {
  countryId?: Maybe<IntFieldUpdateOperationsInput>;
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  shipmentadr?: Maybe<ShipmentadrUpdateManyWithoutCityInput>;
};

export type CityUpdateManyMutationInput = {
  countryId?: Maybe<IntFieldUpdateOperationsInput>;
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
};

export type CityUpdateOneWithoutShipmentadrInput = {
  create?: Maybe<CityCreateWithoutShipmentadrInput>;
  connectOrCreate?: Maybe<CityCreateOrConnectWithoutShipmentadrInput>;
  upsert?: Maybe<CityUpsertWithoutShipmentadrInput>;
  connect?: Maybe<CityWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CityUpdateWithoutShipmentadrInput>;
};

export type CityUpdateWithoutShipmentadrInput = {
  countryId?: Maybe<IntFieldUpdateOperationsInput>;
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
};

export type CityUpsertWithoutShipmentadrInput = {
  update: CityUpdateWithoutShipmentadrInput;
  create: CityCreateWithoutShipmentadrInput;
};

export type CityWhereInput = {
  AND?: Maybe<Array<CityWhereInput>>;
  OR?: Maybe<Array<CityWhereInput>>;
  NOT?: Maybe<Array<CityWhereInput>>;
  id?: Maybe<IntFilter>;
  countryId?: Maybe<IntFilter>;
  titleAR?: Maybe<StringNullableFilter>;
  titleEN?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
  isDeleted?: Maybe<IntFilter>;
  shipmentadr?: Maybe<ShipmentadrListRelationFilter>;
};

export type CityWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Colour = {
  __typename?: 'Colour';
  id: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  elment_trans: Array<ColourTrans>;
  product: Array<ProductToColour>;
  stock: Array<StockToColour>;
  files: Array<ProductFile>;
  stockFiles: Array<StockFile>;
};


export type ColourElment_TransArgs = {
  where?: Maybe<ColourTransWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ColourTransWhereUniqueInput>;
};


export type ColourProductArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToColourWhereUniqueInput>;
};


export type ColourStockArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToColourWhereUniqueInput>;
};


export type ColourFilesArgs = {
  where?: Maybe<ProductFileWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductFileWhereUniqueInput>;
};


export type ColourStockFilesArgs = {
  where?: Maybe<StockFileWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockFileWhereUniqueInput>;
};

export type ColourCreateInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  elment_trans?: Maybe<ColourTransCreateNestedManyWithoutColourInput>;
  product?: Maybe<ProductToColourCreateNestedManyWithoutColourInput>;
  stock?: Maybe<StockToColourCreateNestedManyWithoutColourInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutColourInput>;
  stockFiles?: Maybe<StockFileCreateNestedManyWithoutColourInput>;
};

export type ColourCreateNestedOneWithoutFilesInput = {
  create?: Maybe<ColourCreateWithoutFilesInput>;
  connectOrCreate?: Maybe<ColourCreateOrConnectWithoutFilesInput>;
  connect?: Maybe<ColourWhereUniqueInput>;
};

export type ColourCreateNestedOneWithoutProductInput = {
  create?: Maybe<ColourCreateWithoutProductInput>;
  connectOrCreate?: Maybe<ColourCreateOrConnectWithoutProductInput>;
  connect?: Maybe<ColourWhereUniqueInput>;
};

export type ColourCreateNestedOneWithoutStockFilesInput = {
  create?: Maybe<ColourCreateWithoutStockFilesInput>;
  connectOrCreate?: Maybe<ColourCreateOrConnectWithoutStockFilesInput>;
  connect?: Maybe<ColourWhereUniqueInput>;
};

export type ColourCreateNestedOneWithoutStockInput = {
  create?: Maybe<ColourCreateWithoutStockInput>;
  connectOrCreate?: Maybe<ColourCreateOrConnectWithoutStockInput>;
  connect?: Maybe<ColourWhereUniqueInput>;
};

export type ColourCreateOrConnectWithoutFilesInput = {
  where: ColourWhereUniqueInput;
  create: ColourCreateWithoutFilesInput;
};

export type ColourCreateOrConnectWithoutProductInput = {
  where: ColourWhereUniqueInput;
  create: ColourCreateWithoutProductInput;
};

export type ColourCreateOrConnectWithoutStockFilesInput = {
  where: ColourWhereUniqueInput;
  create: ColourCreateWithoutStockFilesInput;
};

export type ColourCreateOrConnectWithoutStockInput = {
  where: ColourWhereUniqueInput;
  create: ColourCreateWithoutStockInput;
};

export type ColourCreateWithoutFilesInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  elment_trans?: Maybe<ColourTransCreateNestedManyWithoutColourInput>;
  product?: Maybe<ProductToColourCreateNestedManyWithoutColourInput>;
  stock?: Maybe<StockToColourCreateNestedManyWithoutColourInput>;
  stockFiles?: Maybe<StockFileCreateNestedManyWithoutColourInput>;
};

export type ColourCreateWithoutProductInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  elment_trans?: Maybe<ColourTransCreateNestedManyWithoutColourInput>;
  stock?: Maybe<StockToColourCreateNestedManyWithoutColourInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutColourInput>;
  stockFiles?: Maybe<StockFileCreateNestedManyWithoutColourInput>;
};

export type ColourCreateWithoutStockFilesInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  elment_trans?: Maybe<ColourTransCreateNestedManyWithoutColourInput>;
  product?: Maybe<ProductToColourCreateNestedManyWithoutColourInput>;
  stock?: Maybe<StockToColourCreateNestedManyWithoutColourInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutColourInput>;
};

export type ColourCreateWithoutStockInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  elment_trans?: Maybe<ColourTransCreateNestedManyWithoutColourInput>;
  product?: Maybe<ProductToColourCreateNestedManyWithoutColourInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutColourInput>;
  stockFiles?: Maybe<StockFileCreateNestedManyWithoutColourInput>;
};

export type ColourOrderByInput = {
  id?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
};

export type ColourTrans = {
  __typename?: 'ColourTrans';
  id: Scalars['Int'];
  rowId: Scalars['Int'];
  languageCode: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  colour?: Maybe<Colour>;
};

export type ColourTransCreateManyColourInput = {
  id?: Maybe<Scalars['Int']>;
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ColourTransCreateManyColourInputEnvelope = {
  data?: Maybe<Array<ColourTransCreateManyColourInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ColourTransCreateNestedManyWithoutColourInput = {
  create?: Maybe<Array<ColourTransCreateWithoutColourInput>>;
  connectOrCreate?: Maybe<Array<ColourTransCreateOrConnectWithoutColourInput>>;
  createMany?: Maybe<ColourTransCreateManyColourInputEnvelope>;
  connect?: Maybe<Array<ColourTransWhereUniqueInput>>;
};

export type ColourTransCreateOrConnectWithoutColourInput = {
  where: ColourTransWhereUniqueInput;
  create: ColourTransCreateWithoutColourInput;
};

export type ColourTransCreateWithoutColourInput = {
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ColourTransListRelationFilter = {
  every?: Maybe<ColourTransWhereInput>;
  some?: Maybe<ColourTransWhereInput>;
  none?: Maybe<ColourTransWhereInput>;
};

export type ColourTransScalarWhereInput = {
  AND?: Maybe<Array<ColourTransScalarWhereInput>>;
  OR?: Maybe<Array<ColourTransScalarWhereInput>>;
  NOT?: Maybe<Array<ColourTransScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  rowId?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type ColourTransUpdateManyMutationInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ColourTransUpdateManyWithWhereWithoutColourInput = {
  where: ColourTransScalarWhereInput;
  data: ColourTransUpdateManyMutationInput;
};

export type ColourTransUpdateManyWithoutColourInput = {
  create?: Maybe<Array<ColourTransCreateWithoutColourInput>>;
  connectOrCreate?: Maybe<Array<ColourTransCreateOrConnectWithoutColourInput>>;
  upsert?: Maybe<Array<ColourTransUpsertWithWhereUniqueWithoutColourInput>>;
  createMany?: Maybe<ColourTransCreateManyColourInputEnvelope>;
  connect?: Maybe<Array<ColourTransWhereUniqueInput>>;
  set?: Maybe<Array<ColourTransWhereUniqueInput>>;
  disconnect?: Maybe<Array<ColourTransWhereUniqueInput>>;
  delete?: Maybe<Array<ColourTransWhereUniqueInput>>;
  update?: Maybe<Array<ColourTransUpdateWithWhereUniqueWithoutColourInput>>;
  updateMany?: Maybe<Array<ColourTransUpdateManyWithWhereWithoutColourInput>>;
  deleteMany?: Maybe<Array<ColourTransScalarWhereInput>>;
};

export type ColourTransUpdateWithWhereUniqueWithoutColourInput = {
  where: ColourTransWhereUniqueInput;
  data: ColourTransUpdateWithoutColourInput;
};

export type ColourTransUpdateWithoutColourInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ColourTransUpsertWithWhereUniqueWithoutColourInput = {
  where: ColourTransWhereUniqueInput;
  update: ColourTransUpdateWithoutColourInput;
  create: ColourTransCreateWithoutColourInput;
};

export type ColourTransWhereInput = {
  AND?: Maybe<Array<ColourTransWhereInput>>;
  OR?: Maybe<Array<ColourTransWhereInput>>;
  NOT?: Maybe<Array<ColourTransWhereInput>>;
  id?: Maybe<IntFilter>;
  rowId?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  colour?: Maybe<ColourWhereInput>;
};

export type ColourTransWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ColourUpdateInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  elment_trans?: Maybe<ColourTransUpdateManyWithoutColourInput>;
  product?: Maybe<ProductToColourUpdateManyWithoutColourInput>;
  stock?: Maybe<StockToColourUpdateManyWithoutColourInput>;
  files?: Maybe<ProductFileUpdateManyWithoutColourInput>;
  stockFiles?: Maybe<StockFileUpdateManyWithoutColourInput>;
};

export type ColourUpdateManyMutationInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ColourUpdateOneRequiredWithoutFilesInput = {
  create?: Maybe<ColourCreateWithoutFilesInput>;
  connectOrCreate?: Maybe<ColourCreateOrConnectWithoutFilesInput>;
  upsert?: Maybe<ColourUpsertWithoutFilesInput>;
  connect?: Maybe<ColourWhereUniqueInput>;
  update?: Maybe<ColourUpdateWithoutFilesInput>;
};

export type ColourUpdateOneRequiredWithoutProductInput = {
  create?: Maybe<ColourCreateWithoutProductInput>;
  connectOrCreate?: Maybe<ColourCreateOrConnectWithoutProductInput>;
  upsert?: Maybe<ColourUpsertWithoutProductInput>;
  connect?: Maybe<ColourWhereUniqueInput>;
  update?: Maybe<ColourUpdateWithoutProductInput>;
};

export type ColourUpdateOneRequiredWithoutStockFilesInput = {
  create?: Maybe<ColourCreateWithoutStockFilesInput>;
  connectOrCreate?: Maybe<ColourCreateOrConnectWithoutStockFilesInput>;
  upsert?: Maybe<ColourUpsertWithoutStockFilesInput>;
  connect?: Maybe<ColourWhereUniqueInput>;
  update?: Maybe<ColourUpdateWithoutStockFilesInput>;
};

export type ColourUpdateOneWithoutStockInput = {
  create?: Maybe<ColourCreateWithoutStockInput>;
  connectOrCreate?: Maybe<ColourCreateOrConnectWithoutStockInput>;
  upsert?: Maybe<ColourUpsertWithoutStockInput>;
  connect?: Maybe<ColourWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ColourUpdateWithoutStockInput>;
};

export type ColourUpdateWithoutFilesInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  elment_trans?: Maybe<ColourTransUpdateManyWithoutColourInput>;
  product?: Maybe<ProductToColourUpdateManyWithoutColourInput>;
  stock?: Maybe<StockToColourUpdateManyWithoutColourInput>;
  stockFiles?: Maybe<StockFileUpdateManyWithoutColourInput>;
};

export type ColourUpdateWithoutProductInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  elment_trans?: Maybe<ColourTransUpdateManyWithoutColourInput>;
  stock?: Maybe<StockToColourUpdateManyWithoutColourInput>;
  files?: Maybe<ProductFileUpdateManyWithoutColourInput>;
  stockFiles?: Maybe<StockFileUpdateManyWithoutColourInput>;
};

export type ColourUpdateWithoutStockFilesInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  elment_trans?: Maybe<ColourTransUpdateManyWithoutColourInput>;
  product?: Maybe<ProductToColourUpdateManyWithoutColourInput>;
  stock?: Maybe<StockToColourUpdateManyWithoutColourInput>;
  files?: Maybe<ProductFileUpdateManyWithoutColourInput>;
};

export type ColourUpdateWithoutStockInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  code?: Maybe<NullableStringFieldUpdateOperationsInput>;
  elment_trans?: Maybe<ColourTransUpdateManyWithoutColourInput>;
  product?: Maybe<ProductToColourUpdateManyWithoutColourInput>;
  files?: Maybe<ProductFileUpdateManyWithoutColourInput>;
  stockFiles?: Maybe<StockFileUpdateManyWithoutColourInput>;
};

export type ColourUpsertWithoutFilesInput = {
  update: ColourUpdateWithoutFilesInput;
  create: ColourCreateWithoutFilesInput;
};

export type ColourUpsertWithoutProductInput = {
  update: ColourUpdateWithoutProductInput;
  create: ColourCreateWithoutProductInput;
};

export type ColourUpsertWithoutStockFilesInput = {
  update: ColourUpdateWithoutStockFilesInput;
  create: ColourCreateWithoutStockFilesInput;
};

export type ColourUpsertWithoutStockInput = {
  update: ColourUpdateWithoutStockInput;
  create: ColourCreateWithoutStockInput;
};

export type ColourWhereInput = {
  AND?: Maybe<Array<ColourWhereInput>>;
  OR?: Maybe<Array<ColourWhereInput>>;
  NOT?: Maybe<Array<ColourWhereInput>>;
  id?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  code?: Maybe<StringNullableFilter>;
  elment_trans?: Maybe<ColourTransListRelationFilter>;
  product?: Maybe<ProductToColourListRelationFilter>;
  stock?: Maybe<StockToColourListRelationFilter>;
  files?: Maybe<ProductFileListRelationFilter>;
  stockFiles?: Maybe<StockFileListRelationFilter>;
};

export type ColourWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Contact = {
  __typename?: 'Contact';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  msg?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ContactCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  msg?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ContactOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  subject?: Maybe<SortOrder>;
  msg?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type ContactUpdateInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  subject?: Maybe<NullableStringFieldUpdateOperationsInput>;
  msg?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ContactUpdateManyMutationInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  subject?: Maybe<NullableStringFieldUpdateOperationsInput>;
  msg?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ContactWhereInput = {
  AND?: Maybe<Array<ContactWhereInput>>;
  OR?: Maybe<Array<ContactWhereInput>>;
  NOT?: Maybe<Array<ContactWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  subject?: Maybe<StringNullableFilter>;
  msg?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type ContactWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['Int'];
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['String']>;
  latt?: Maybe<Scalars['String']>;
  img: Scalars['String'];
  flag: Scalars['String'];
  shipmentCalculationType: Scalars['Int'];
  fixedValue: Scalars['Float'];
  firstKiloOfferProduct: Scalars['Float'];
  nextKiloOfferProduct: Scalars['Float'];
  firstKiloNotOfferProduct: Scalars['Float'];
  nextKiloNotOfferProduct: Scalars['Float'];
  status: Scalars['Int'];
  theOrder: Scalars['Int'];
  vat: Scalars['Float'];
  cargoPeriodMsg?: Maybe<Scalars['String']>;
  currencyId: Scalars['Int'];
  isDeleted: Scalars['Int'];
  cargos: Array<Cargo>;
  shipmentAddresses: Array<Shipmentadr>;
  cargoCountries: Array<CargoCountry>;
  views: Array<View>;
  users: Array<User>;
};


export type CountryCargosArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CargoWhereUniqueInput>;
};


export type CountryShipmentAddressesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ShipmentadrWhereUniqueInput>;
};


export type CountryCargoCountriesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CargoCountryWhereUniqueInput>;
};


export type CountryViewsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ViewWhereUniqueInput>;
};


export type CountryUsersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UserWhereUniqueInput>;
};

export type CountryCreateInput = {
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['String']>;
  latt?: Maybe<Scalars['String']>;
  img: Scalars['String'];
  flag: Scalars['String'];
  shipmentCalculationType?: Maybe<Scalars['Int']>;
  fixedValue?: Maybe<Scalars['Float']>;
  firstKiloOfferProduct?: Maybe<Scalars['Float']>;
  nextKiloOfferProduct?: Maybe<Scalars['Float']>;
  firstKiloNotOfferProduct?: Maybe<Scalars['Float']>;
  nextKiloNotOfferProduct?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
  theOrder: Scalars['Int'];
  vat?: Maybe<Scalars['Float']>;
  cargoPeriodMsg?: Maybe<Scalars['String']>;
  currencyId: Scalars['Int'];
  isDeleted?: Maybe<Scalars['Int']>;
  cargos?: Maybe<CargoCreateNestedManyWithoutCountryInput>;
  shipmentAddresses?: Maybe<ShipmentadrCreateNestedManyWithoutCountryInput>;
  cargoCountries?: Maybe<CargoCountryCreateNestedManyWithoutCountryInput>;
  views?: Maybe<ViewCreateNestedManyWithoutCountryInput>;
  users?: Maybe<UserCreateNestedManyWithoutCountryInput>;
};

export type CountryCreateNestedOneWithoutCargoCountriesInput = {
  create?: Maybe<CountryCreateWithoutCargoCountriesInput>;
  connectOrCreate?: Maybe<CountryCreateOrConnectWithoutCargoCountriesInput>;
  connect?: Maybe<CountryWhereUniqueInput>;
};

export type CountryCreateNestedOneWithoutCargosInput = {
  create?: Maybe<CountryCreateWithoutCargosInput>;
  connectOrCreate?: Maybe<CountryCreateOrConnectWithoutCargosInput>;
  connect?: Maybe<CountryWhereUniqueInput>;
};

export type CountryCreateNestedOneWithoutShipmentAddressesInput = {
  create?: Maybe<CountryCreateWithoutShipmentAddressesInput>;
  connectOrCreate?: Maybe<CountryCreateOrConnectWithoutShipmentAddressesInput>;
  connect?: Maybe<CountryWhereUniqueInput>;
};

export type CountryCreateNestedOneWithoutUsersInput = {
  create?: Maybe<CountryCreateWithoutUsersInput>;
  connectOrCreate?: Maybe<CountryCreateOrConnectWithoutUsersInput>;
  connect?: Maybe<CountryWhereUniqueInput>;
};

export type CountryCreateNestedOneWithoutViewsInput = {
  create?: Maybe<CountryCreateWithoutViewsInput>;
  connectOrCreate?: Maybe<CountryCreateOrConnectWithoutViewsInput>;
  connect?: Maybe<CountryWhereUniqueInput>;
};

export type CountryCreateOrConnectWithoutCargoCountriesInput = {
  where: CountryWhereUniqueInput;
  create: CountryCreateWithoutCargoCountriesInput;
};

export type CountryCreateOrConnectWithoutCargosInput = {
  where: CountryWhereUniqueInput;
  create: CountryCreateWithoutCargosInput;
};

export type CountryCreateOrConnectWithoutShipmentAddressesInput = {
  where: CountryWhereUniqueInput;
  create: CountryCreateWithoutShipmentAddressesInput;
};

export type CountryCreateOrConnectWithoutUsersInput = {
  where: CountryWhereUniqueInput;
  create: CountryCreateWithoutUsersInput;
};

export type CountryCreateOrConnectWithoutViewsInput = {
  where: CountryWhereUniqueInput;
  create: CountryCreateWithoutViewsInput;
};

export type CountryCreateWithoutCargoCountriesInput = {
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['String']>;
  latt?: Maybe<Scalars['String']>;
  img: Scalars['String'];
  flag: Scalars['String'];
  shipmentCalculationType?: Maybe<Scalars['Int']>;
  fixedValue?: Maybe<Scalars['Float']>;
  firstKiloOfferProduct?: Maybe<Scalars['Float']>;
  nextKiloOfferProduct?: Maybe<Scalars['Float']>;
  firstKiloNotOfferProduct?: Maybe<Scalars['Float']>;
  nextKiloNotOfferProduct?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
  theOrder: Scalars['Int'];
  vat?: Maybe<Scalars['Float']>;
  cargoPeriodMsg?: Maybe<Scalars['String']>;
  currencyId: Scalars['Int'];
  isDeleted?: Maybe<Scalars['Int']>;
  cargos?: Maybe<CargoCreateNestedManyWithoutCountryInput>;
  shipmentAddresses?: Maybe<ShipmentadrCreateNestedManyWithoutCountryInput>;
  views?: Maybe<ViewCreateNestedManyWithoutCountryInput>;
  users?: Maybe<UserCreateNestedManyWithoutCountryInput>;
};

export type CountryCreateWithoutCargosInput = {
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['String']>;
  latt?: Maybe<Scalars['String']>;
  img: Scalars['String'];
  flag: Scalars['String'];
  shipmentCalculationType?: Maybe<Scalars['Int']>;
  fixedValue?: Maybe<Scalars['Float']>;
  firstKiloOfferProduct?: Maybe<Scalars['Float']>;
  nextKiloOfferProduct?: Maybe<Scalars['Float']>;
  firstKiloNotOfferProduct?: Maybe<Scalars['Float']>;
  nextKiloNotOfferProduct?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
  theOrder: Scalars['Int'];
  vat?: Maybe<Scalars['Float']>;
  cargoPeriodMsg?: Maybe<Scalars['String']>;
  currencyId: Scalars['Int'];
  isDeleted?: Maybe<Scalars['Int']>;
  shipmentAddresses?: Maybe<ShipmentadrCreateNestedManyWithoutCountryInput>;
  cargoCountries?: Maybe<CargoCountryCreateNestedManyWithoutCountryInput>;
  views?: Maybe<ViewCreateNestedManyWithoutCountryInput>;
  users?: Maybe<UserCreateNestedManyWithoutCountryInput>;
};

export type CountryCreateWithoutShipmentAddressesInput = {
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['String']>;
  latt?: Maybe<Scalars['String']>;
  img: Scalars['String'];
  flag: Scalars['String'];
  shipmentCalculationType?: Maybe<Scalars['Int']>;
  fixedValue?: Maybe<Scalars['Float']>;
  firstKiloOfferProduct?: Maybe<Scalars['Float']>;
  nextKiloOfferProduct?: Maybe<Scalars['Float']>;
  firstKiloNotOfferProduct?: Maybe<Scalars['Float']>;
  nextKiloNotOfferProduct?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
  theOrder: Scalars['Int'];
  vat?: Maybe<Scalars['Float']>;
  cargoPeriodMsg?: Maybe<Scalars['String']>;
  currencyId: Scalars['Int'];
  isDeleted?: Maybe<Scalars['Int']>;
  cargos?: Maybe<CargoCreateNestedManyWithoutCountryInput>;
  cargoCountries?: Maybe<CargoCountryCreateNestedManyWithoutCountryInput>;
  views?: Maybe<ViewCreateNestedManyWithoutCountryInput>;
  users?: Maybe<UserCreateNestedManyWithoutCountryInput>;
};

export type CountryCreateWithoutUsersInput = {
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['String']>;
  latt?: Maybe<Scalars['String']>;
  img: Scalars['String'];
  flag: Scalars['String'];
  shipmentCalculationType?: Maybe<Scalars['Int']>;
  fixedValue?: Maybe<Scalars['Float']>;
  firstKiloOfferProduct?: Maybe<Scalars['Float']>;
  nextKiloOfferProduct?: Maybe<Scalars['Float']>;
  firstKiloNotOfferProduct?: Maybe<Scalars['Float']>;
  nextKiloNotOfferProduct?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
  theOrder: Scalars['Int'];
  vat?: Maybe<Scalars['Float']>;
  cargoPeriodMsg?: Maybe<Scalars['String']>;
  currencyId: Scalars['Int'];
  isDeleted?: Maybe<Scalars['Int']>;
  cargos?: Maybe<CargoCreateNestedManyWithoutCountryInput>;
  shipmentAddresses?: Maybe<ShipmentadrCreateNestedManyWithoutCountryInput>;
  cargoCountries?: Maybe<CargoCountryCreateNestedManyWithoutCountryInput>;
  views?: Maybe<ViewCreateNestedManyWithoutCountryInput>;
};

export type CountryCreateWithoutViewsInput = {
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['String']>;
  latt?: Maybe<Scalars['String']>;
  img: Scalars['String'];
  flag: Scalars['String'];
  shipmentCalculationType?: Maybe<Scalars['Int']>;
  fixedValue?: Maybe<Scalars['Float']>;
  firstKiloOfferProduct?: Maybe<Scalars['Float']>;
  nextKiloOfferProduct?: Maybe<Scalars['Float']>;
  firstKiloNotOfferProduct?: Maybe<Scalars['Float']>;
  nextKiloNotOfferProduct?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
  theOrder: Scalars['Int'];
  vat?: Maybe<Scalars['Float']>;
  cargoPeriodMsg?: Maybe<Scalars['String']>;
  currencyId: Scalars['Int'];
  isDeleted?: Maybe<Scalars['Int']>;
  cargos?: Maybe<CargoCreateNestedManyWithoutCountryInput>;
  shipmentAddresses?: Maybe<ShipmentadrCreateNestedManyWithoutCountryInput>;
  cargoCountries?: Maybe<CargoCountryCreateNestedManyWithoutCountryInput>;
  users?: Maybe<UserCreateNestedManyWithoutCountryInput>;
};

export type CountryOrderByInput = {
  id?: Maybe<SortOrder>;
  titleAR?: Maybe<SortOrder>;
  titleEN?: Maybe<SortOrder>;
  countryCode?: Maybe<SortOrder>;
  timeZone?: Maybe<SortOrder>;
  phoneCode?: Maybe<SortOrder>;
  long?: Maybe<SortOrder>;
  latt?: Maybe<SortOrder>;
  img?: Maybe<SortOrder>;
  flag?: Maybe<SortOrder>;
  shipmentCalculationType?: Maybe<SortOrder>;
  fixedValue?: Maybe<SortOrder>;
  firstKiloOfferProduct?: Maybe<SortOrder>;
  nextKiloOfferProduct?: Maybe<SortOrder>;
  firstKiloNotOfferProduct?: Maybe<SortOrder>;
  nextKiloNotOfferProduct?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  theOrder?: Maybe<SortOrder>;
  vat?: Maybe<SortOrder>;
  cargoPeriodMsg?: Maybe<SortOrder>;
  currencyId?: Maybe<SortOrder>;
  isDeleted?: Maybe<SortOrder>;
};

export type CountryUpdateInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  timeZone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  long?: Maybe<NullableStringFieldUpdateOperationsInput>;
  latt?: Maybe<NullableStringFieldUpdateOperationsInput>;
  img?: Maybe<StringFieldUpdateOperationsInput>;
  flag?: Maybe<StringFieldUpdateOperationsInput>;
  shipmentCalculationType?: Maybe<IntFieldUpdateOperationsInput>;
  fixedValue?: Maybe<FloatFieldUpdateOperationsInput>;
  firstKiloOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  nextKiloOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  firstKiloNotOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  nextKiloNotOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<IntFieldUpdateOperationsInput>;
  vat?: Maybe<FloatFieldUpdateOperationsInput>;
  cargoPeriodMsg?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencyId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  cargos?: Maybe<CargoUpdateManyWithoutCountryInput>;
  shipmentAddresses?: Maybe<ShipmentadrUpdateManyWithoutCountryInput>;
  cargoCountries?: Maybe<CargoCountryUpdateManyWithoutCountryInput>;
  views?: Maybe<ViewUpdateManyWithoutCountryInput>;
  users?: Maybe<UserUpdateManyWithoutCountryInput>;
};

export type CountryUpdateManyMutationInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  timeZone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  long?: Maybe<NullableStringFieldUpdateOperationsInput>;
  latt?: Maybe<NullableStringFieldUpdateOperationsInput>;
  img?: Maybe<StringFieldUpdateOperationsInput>;
  flag?: Maybe<StringFieldUpdateOperationsInput>;
  shipmentCalculationType?: Maybe<IntFieldUpdateOperationsInput>;
  fixedValue?: Maybe<FloatFieldUpdateOperationsInput>;
  firstKiloOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  nextKiloOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  firstKiloNotOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  nextKiloNotOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<IntFieldUpdateOperationsInput>;
  vat?: Maybe<FloatFieldUpdateOperationsInput>;
  cargoPeriodMsg?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencyId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
};

export type CountryUpdateOneRequiredWithoutCargosInput = {
  create?: Maybe<CountryCreateWithoutCargosInput>;
  connectOrCreate?: Maybe<CountryCreateOrConnectWithoutCargosInput>;
  upsert?: Maybe<CountryUpsertWithoutCargosInput>;
  connect?: Maybe<CountryWhereUniqueInput>;
  update?: Maybe<CountryUpdateWithoutCargosInput>;
};

export type CountryUpdateOneWithoutCargoCountriesInput = {
  create?: Maybe<CountryCreateWithoutCargoCountriesInput>;
  connectOrCreate?: Maybe<CountryCreateOrConnectWithoutCargoCountriesInput>;
  upsert?: Maybe<CountryUpsertWithoutCargoCountriesInput>;
  connect?: Maybe<CountryWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CountryUpdateWithoutCargoCountriesInput>;
};

export type CountryUpdateOneWithoutShipmentAddressesInput = {
  create?: Maybe<CountryCreateWithoutShipmentAddressesInput>;
  connectOrCreate?: Maybe<CountryCreateOrConnectWithoutShipmentAddressesInput>;
  upsert?: Maybe<CountryUpsertWithoutShipmentAddressesInput>;
  connect?: Maybe<CountryWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CountryUpdateWithoutShipmentAddressesInput>;
};

export type CountryUpdateOneWithoutUsersInput = {
  create?: Maybe<CountryCreateWithoutUsersInput>;
  connectOrCreate?: Maybe<CountryCreateOrConnectWithoutUsersInput>;
  upsert?: Maybe<CountryUpsertWithoutUsersInput>;
  connect?: Maybe<CountryWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CountryUpdateWithoutUsersInput>;
};

export type CountryUpdateOneWithoutViewsInput = {
  create?: Maybe<CountryCreateWithoutViewsInput>;
  connectOrCreate?: Maybe<CountryCreateOrConnectWithoutViewsInput>;
  upsert?: Maybe<CountryUpsertWithoutViewsInput>;
  connect?: Maybe<CountryWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CountryUpdateWithoutViewsInput>;
};

export type CountryUpdateWithoutCargoCountriesInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  timeZone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  long?: Maybe<NullableStringFieldUpdateOperationsInput>;
  latt?: Maybe<NullableStringFieldUpdateOperationsInput>;
  img?: Maybe<StringFieldUpdateOperationsInput>;
  flag?: Maybe<StringFieldUpdateOperationsInput>;
  shipmentCalculationType?: Maybe<IntFieldUpdateOperationsInput>;
  fixedValue?: Maybe<FloatFieldUpdateOperationsInput>;
  firstKiloOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  nextKiloOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  firstKiloNotOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  nextKiloNotOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<IntFieldUpdateOperationsInput>;
  vat?: Maybe<FloatFieldUpdateOperationsInput>;
  cargoPeriodMsg?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencyId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  cargos?: Maybe<CargoUpdateManyWithoutCountryInput>;
  shipmentAddresses?: Maybe<ShipmentadrUpdateManyWithoutCountryInput>;
  views?: Maybe<ViewUpdateManyWithoutCountryInput>;
  users?: Maybe<UserUpdateManyWithoutCountryInput>;
};

export type CountryUpdateWithoutCargosInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  timeZone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  long?: Maybe<NullableStringFieldUpdateOperationsInput>;
  latt?: Maybe<NullableStringFieldUpdateOperationsInput>;
  img?: Maybe<StringFieldUpdateOperationsInput>;
  flag?: Maybe<StringFieldUpdateOperationsInput>;
  shipmentCalculationType?: Maybe<IntFieldUpdateOperationsInput>;
  fixedValue?: Maybe<FloatFieldUpdateOperationsInput>;
  firstKiloOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  nextKiloOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  firstKiloNotOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  nextKiloNotOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<IntFieldUpdateOperationsInput>;
  vat?: Maybe<FloatFieldUpdateOperationsInput>;
  cargoPeriodMsg?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencyId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  shipmentAddresses?: Maybe<ShipmentadrUpdateManyWithoutCountryInput>;
  cargoCountries?: Maybe<CargoCountryUpdateManyWithoutCountryInput>;
  views?: Maybe<ViewUpdateManyWithoutCountryInput>;
  users?: Maybe<UserUpdateManyWithoutCountryInput>;
};

export type CountryUpdateWithoutShipmentAddressesInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  timeZone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  long?: Maybe<NullableStringFieldUpdateOperationsInput>;
  latt?: Maybe<NullableStringFieldUpdateOperationsInput>;
  img?: Maybe<StringFieldUpdateOperationsInput>;
  flag?: Maybe<StringFieldUpdateOperationsInput>;
  shipmentCalculationType?: Maybe<IntFieldUpdateOperationsInput>;
  fixedValue?: Maybe<FloatFieldUpdateOperationsInput>;
  firstKiloOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  nextKiloOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  firstKiloNotOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  nextKiloNotOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<IntFieldUpdateOperationsInput>;
  vat?: Maybe<FloatFieldUpdateOperationsInput>;
  cargoPeriodMsg?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencyId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  cargos?: Maybe<CargoUpdateManyWithoutCountryInput>;
  cargoCountries?: Maybe<CargoCountryUpdateManyWithoutCountryInput>;
  views?: Maybe<ViewUpdateManyWithoutCountryInput>;
  users?: Maybe<UserUpdateManyWithoutCountryInput>;
};

export type CountryUpdateWithoutUsersInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  timeZone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  long?: Maybe<NullableStringFieldUpdateOperationsInput>;
  latt?: Maybe<NullableStringFieldUpdateOperationsInput>;
  img?: Maybe<StringFieldUpdateOperationsInput>;
  flag?: Maybe<StringFieldUpdateOperationsInput>;
  shipmentCalculationType?: Maybe<IntFieldUpdateOperationsInput>;
  fixedValue?: Maybe<FloatFieldUpdateOperationsInput>;
  firstKiloOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  nextKiloOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  firstKiloNotOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  nextKiloNotOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<IntFieldUpdateOperationsInput>;
  vat?: Maybe<FloatFieldUpdateOperationsInput>;
  cargoPeriodMsg?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencyId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  cargos?: Maybe<CargoUpdateManyWithoutCountryInput>;
  shipmentAddresses?: Maybe<ShipmentadrUpdateManyWithoutCountryInput>;
  cargoCountries?: Maybe<CargoCountryUpdateManyWithoutCountryInput>;
  views?: Maybe<ViewUpdateManyWithoutCountryInput>;
};

export type CountryUpdateWithoutViewsInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  timeZone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  long?: Maybe<NullableStringFieldUpdateOperationsInput>;
  latt?: Maybe<NullableStringFieldUpdateOperationsInput>;
  img?: Maybe<StringFieldUpdateOperationsInput>;
  flag?: Maybe<StringFieldUpdateOperationsInput>;
  shipmentCalculationType?: Maybe<IntFieldUpdateOperationsInput>;
  fixedValue?: Maybe<FloatFieldUpdateOperationsInput>;
  firstKiloOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  nextKiloOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  firstKiloNotOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  nextKiloNotOfferProduct?: Maybe<FloatFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<IntFieldUpdateOperationsInput>;
  vat?: Maybe<FloatFieldUpdateOperationsInput>;
  cargoPeriodMsg?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencyId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  cargos?: Maybe<CargoUpdateManyWithoutCountryInput>;
  shipmentAddresses?: Maybe<ShipmentadrUpdateManyWithoutCountryInput>;
  cargoCountries?: Maybe<CargoCountryUpdateManyWithoutCountryInput>;
  users?: Maybe<UserUpdateManyWithoutCountryInput>;
};

export type CountryUpsertWithoutCargoCountriesInput = {
  update: CountryUpdateWithoutCargoCountriesInput;
  create: CountryCreateWithoutCargoCountriesInput;
};

export type CountryUpsertWithoutCargosInput = {
  update: CountryUpdateWithoutCargosInput;
  create: CountryCreateWithoutCargosInput;
};

export type CountryUpsertWithoutShipmentAddressesInput = {
  update: CountryUpdateWithoutShipmentAddressesInput;
  create: CountryCreateWithoutShipmentAddressesInput;
};

export type CountryUpsertWithoutUsersInput = {
  update: CountryUpdateWithoutUsersInput;
  create: CountryCreateWithoutUsersInput;
};

export type CountryUpsertWithoutViewsInput = {
  update: CountryUpdateWithoutViewsInput;
  create: CountryCreateWithoutViewsInput;
};

export type CountryWhereInput = {
  AND?: Maybe<Array<CountryWhereInput>>;
  OR?: Maybe<Array<CountryWhereInput>>;
  NOT?: Maybe<Array<CountryWhereInput>>;
  id?: Maybe<IntFilter>;
  titleAR?: Maybe<StringNullableFilter>;
  titleEN?: Maybe<StringNullableFilter>;
  countryCode?: Maybe<StringNullableFilter>;
  timeZone?: Maybe<StringNullableFilter>;
  phoneCode?: Maybe<StringNullableFilter>;
  long?: Maybe<StringNullableFilter>;
  latt?: Maybe<StringNullableFilter>;
  img?: Maybe<StringFilter>;
  flag?: Maybe<StringFilter>;
  shipmentCalculationType?: Maybe<IntFilter>;
  fixedValue?: Maybe<FloatFilter>;
  firstKiloOfferProduct?: Maybe<FloatFilter>;
  nextKiloOfferProduct?: Maybe<FloatFilter>;
  firstKiloNotOfferProduct?: Maybe<FloatFilter>;
  nextKiloNotOfferProduct?: Maybe<FloatFilter>;
  status?: Maybe<IntFilter>;
  theOrder?: Maybe<IntFilter>;
  vat?: Maybe<FloatFilter>;
  cargoPeriodMsg?: Maybe<StringNullableFilter>;
  currencyId?: Maybe<IntFilter>;
  isDeleted?: Maybe<IntFilter>;
  cargos?: Maybe<CargoListRelationFilter>;
  shipmentAddresses?: Maybe<ShipmentadrListRelationFilter>;
  cargoCountries?: Maybe<CargoCountryListRelationFilter>;
  views?: Maybe<ViewListRelationFilter>;
  users?: Maybe<UserListRelationFilter>;
};

export type CountryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Coupon = {
  __typename?: 'Coupon';
  id: Scalars['Int'];
  couponValue: Scalars['Float'];
  couponCode?: Maybe<Scalars['String']>;
  originalQuantity: Scalars['Int'];
  usedQuantity: Scalars['Int'];
  type: Scalars['Int'];
  validFrom: Scalars['DateTime'];
  validTo: Scalars['DateTime'];
  minimumValueToBeApplied: Scalars['Float'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  status: Scalars['Int'];
  isDeleted: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  maximumAmount: Scalars['Float'];
  excludeSale: Scalars['Int'];
  couponsUsed: Array<CouponsUsed>;
  orders: Array<Order>;
};


export type CouponCouponsUsedArgs = {
  where?: Maybe<CouponsUsedWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CouponsUsedWhereUniqueInput>;
};


export type CouponOrdersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderWhereUniqueInput>;
};

export type CouponCreateInput = {
  couponValue?: Maybe<Scalars['Float']>;
  couponCode?: Maybe<Scalars['String']>;
  originalQuantity?: Maybe<Scalars['Int']>;
  usedQuantity?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  validFrom: Scalars['DateTime'];
  validTo: Scalars['DateTime'];
  minimumValueToBeApplied?: Maybe<Scalars['Float']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  maximumAmount?: Maybe<Scalars['Float']>;
  excludeSale?: Maybe<Scalars['Int']>;
  couponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutCouponInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutCouponInput>;
};

export type CouponCreateNestedOneWithoutCouponsUsedInput = {
  create?: Maybe<CouponCreateWithoutCouponsUsedInput>;
  connectOrCreate?: Maybe<CouponCreateOrConnectWithoutCouponsUsedInput>;
  connect?: Maybe<CouponWhereUniqueInput>;
};

export type CouponCreateNestedOneWithoutOrdersInput = {
  create?: Maybe<CouponCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<CouponCreateOrConnectWithoutOrdersInput>;
  connect?: Maybe<CouponWhereUniqueInput>;
};

export type CouponCreateOrConnectWithoutCouponsUsedInput = {
  where: CouponWhereUniqueInput;
  create: CouponCreateWithoutCouponsUsedInput;
};

export type CouponCreateOrConnectWithoutOrdersInput = {
  where: CouponWhereUniqueInput;
  create: CouponCreateWithoutOrdersInput;
};

export type CouponCreateWithoutCouponsUsedInput = {
  couponValue?: Maybe<Scalars['Float']>;
  couponCode?: Maybe<Scalars['String']>;
  originalQuantity?: Maybe<Scalars['Int']>;
  usedQuantity?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  validFrom: Scalars['DateTime'];
  validTo: Scalars['DateTime'];
  minimumValueToBeApplied?: Maybe<Scalars['Float']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  maximumAmount?: Maybe<Scalars['Float']>;
  excludeSale?: Maybe<Scalars['Int']>;
  orders?: Maybe<OrderCreateNestedManyWithoutCouponInput>;
};

export type CouponCreateWithoutOrdersInput = {
  couponValue?: Maybe<Scalars['Float']>;
  couponCode?: Maybe<Scalars['String']>;
  originalQuantity?: Maybe<Scalars['Int']>;
  usedQuantity?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  validFrom: Scalars['DateTime'];
  validTo: Scalars['DateTime'];
  minimumValueToBeApplied?: Maybe<Scalars['Float']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  maximumAmount?: Maybe<Scalars['Float']>;
  excludeSale?: Maybe<Scalars['Int']>;
  couponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutCouponInput>;
};

export type CouponOrderByInput = {
  id?: Maybe<SortOrder>;
  couponValue?: Maybe<SortOrder>;
  couponCode?: Maybe<SortOrder>;
  originalQuantity?: Maybe<SortOrder>;
  usedQuantity?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  validFrom?: Maybe<SortOrder>;
  validTo?: Maybe<SortOrder>;
  minimumValueToBeApplied?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  isDeleted?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  maximumAmount?: Maybe<SortOrder>;
  excludeSale?: Maybe<SortOrder>;
};

export type CouponUpdateInput = {
  couponValue?: Maybe<FloatFieldUpdateOperationsInput>;
  couponCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  originalQuantity?: Maybe<IntFieldUpdateOperationsInput>;
  usedQuantity?: Maybe<IntFieldUpdateOperationsInput>;
  type?: Maybe<IntFieldUpdateOperationsInput>;
  validFrom?: Maybe<DateTimeFieldUpdateOperationsInput>;
  validTo?: Maybe<DateTimeFieldUpdateOperationsInput>;
  minimumValueToBeApplied?: Maybe<FloatFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  maximumAmount?: Maybe<FloatFieldUpdateOperationsInput>;
  excludeSale?: Maybe<IntFieldUpdateOperationsInput>;
  couponsUsed?: Maybe<CouponsUsedUpdateManyWithoutCouponInput>;
  orders?: Maybe<OrderUpdateManyWithoutCouponInput>;
};

export type CouponUpdateManyMutationInput = {
  couponValue?: Maybe<FloatFieldUpdateOperationsInput>;
  couponCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  originalQuantity?: Maybe<IntFieldUpdateOperationsInput>;
  usedQuantity?: Maybe<IntFieldUpdateOperationsInput>;
  type?: Maybe<IntFieldUpdateOperationsInput>;
  validFrom?: Maybe<DateTimeFieldUpdateOperationsInput>;
  validTo?: Maybe<DateTimeFieldUpdateOperationsInput>;
  minimumValueToBeApplied?: Maybe<FloatFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  maximumAmount?: Maybe<FloatFieldUpdateOperationsInput>;
  excludeSale?: Maybe<IntFieldUpdateOperationsInput>;
};

export type CouponUpdateOneWithoutCouponsUsedInput = {
  create?: Maybe<CouponCreateWithoutCouponsUsedInput>;
  connectOrCreate?: Maybe<CouponCreateOrConnectWithoutCouponsUsedInput>;
  upsert?: Maybe<CouponUpsertWithoutCouponsUsedInput>;
  connect?: Maybe<CouponWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CouponUpdateWithoutCouponsUsedInput>;
};

export type CouponUpdateOneWithoutOrdersInput = {
  create?: Maybe<CouponCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<CouponCreateOrConnectWithoutOrdersInput>;
  upsert?: Maybe<CouponUpsertWithoutOrdersInput>;
  connect?: Maybe<CouponWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CouponUpdateWithoutOrdersInput>;
};

export type CouponUpdateWithoutCouponsUsedInput = {
  couponValue?: Maybe<FloatFieldUpdateOperationsInput>;
  couponCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  originalQuantity?: Maybe<IntFieldUpdateOperationsInput>;
  usedQuantity?: Maybe<IntFieldUpdateOperationsInput>;
  type?: Maybe<IntFieldUpdateOperationsInput>;
  validFrom?: Maybe<DateTimeFieldUpdateOperationsInput>;
  validTo?: Maybe<DateTimeFieldUpdateOperationsInput>;
  minimumValueToBeApplied?: Maybe<FloatFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  maximumAmount?: Maybe<FloatFieldUpdateOperationsInput>;
  excludeSale?: Maybe<IntFieldUpdateOperationsInput>;
  orders?: Maybe<OrderUpdateManyWithoutCouponInput>;
};

export type CouponUpdateWithoutOrdersInput = {
  couponValue?: Maybe<FloatFieldUpdateOperationsInput>;
  couponCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  originalQuantity?: Maybe<IntFieldUpdateOperationsInput>;
  usedQuantity?: Maybe<IntFieldUpdateOperationsInput>;
  type?: Maybe<IntFieldUpdateOperationsInput>;
  validFrom?: Maybe<DateTimeFieldUpdateOperationsInput>;
  validTo?: Maybe<DateTimeFieldUpdateOperationsInput>;
  minimumValueToBeApplied?: Maybe<FloatFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  maximumAmount?: Maybe<FloatFieldUpdateOperationsInput>;
  excludeSale?: Maybe<IntFieldUpdateOperationsInput>;
  couponsUsed?: Maybe<CouponsUsedUpdateManyWithoutCouponInput>;
};

export type CouponUpsertWithoutCouponsUsedInput = {
  update: CouponUpdateWithoutCouponsUsedInput;
  create: CouponCreateWithoutCouponsUsedInput;
};

export type CouponUpsertWithoutOrdersInput = {
  update: CouponUpdateWithoutOrdersInput;
  create: CouponCreateWithoutOrdersInput;
};

export type CouponWhereInput = {
  AND?: Maybe<Array<CouponWhereInput>>;
  OR?: Maybe<Array<CouponWhereInput>>;
  NOT?: Maybe<Array<CouponWhereInput>>;
  id?: Maybe<IntFilter>;
  couponValue?: Maybe<FloatFilter>;
  couponCode?: Maybe<StringNullableFilter>;
  originalQuantity?: Maybe<IntFilter>;
  usedQuantity?: Maybe<IntFilter>;
  type?: Maybe<IntFilter>;
  validFrom?: Maybe<DateTimeFilter>;
  validTo?: Maybe<DateTimeFilter>;
  minimumValueToBeApplied?: Maybe<FloatFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  status?: Maybe<IntFilter>;
  isDeleted?: Maybe<IntFilter>;
  description?: Maybe<StringNullableFilter>;
  maximumAmount?: Maybe<FloatFilter>;
  excludeSale?: Maybe<IntFilter>;
  couponsUsed?: Maybe<CouponsUsedListRelationFilter>;
  orders?: Maybe<OrderListRelationFilter>;
};

export type CouponWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type CouponsUsed = {
  __typename?: 'CouponsUsed';
  id: Scalars['Int'];
  couponId: Scalars['Int'];
  userId: Scalars['Int'];
  orderId: Scalars['Int'];
  vendorId: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  coupon?: Maybe<Coupon>;
  client?: Maybe<User>;
  vendor?: Maybe<User>;
  order: Order;
};

export type CouponsUsedCreateInput = {
  vendorId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  coupon?: Maybe<CouponCreateNestedOneWithoutCouponsUsedInput>;
  client?: Maybe<UserCreateNestedOneWithoutClientCouponsUsedInput>;
  vendor?: Maybe<UserCreateNestedOneWithoutVendorCouponsUsedInput>;
  order?: Maybe<OrderCreateNestedOneWithoutCouponsUsedInput>;
};

export type CouponsUsedCreateManyClientInput = {
  id?: Maybe<Scalars['Int']>;
  couponId?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  vendorId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CouponsUsedCreateManyClientInputEnvelope = {
  data?: Maybe<Array<CouponsUsedCreateManyClientInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CouponsUsedCreateManyCouponInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  vendorId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CouponsUsedCreateManyCouponInputEnvelope = {
  data?: Maybe<Array<CouponsUsedCreateManyCouponInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CouponsUsedCreateManyOrderInput = {
  id?: Maybe<Scalars['Int']>;
  couponId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  vendorId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CouponsUsedCreateManyOrderInputEnvelope = {
  data?: Maybe<Array<CouponsUsedCreateManyOrderInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CouponsUsedCreateManyVendorInput = {
  id?: Maybe<Scalars['Int']>;
  couponId?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  vendorId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CouponsUsedCreateManyVendorInputEnvelope = {
  data?: Maybe<Array<CouponsUsedCreateManyVendorInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CouponsUsedCreateNestedManyWithoutClientInput = {
  create?: Maybe<Array<CouponsUsedCreateWithoutClientInput>>;
  connectOrCreate?: Maybe<Array<CouponsUsedCreateOrConnectWithoutClientInput>>;
  createMany?: Maybe<CouponsUsedCreateManyClientInputEnvelope>;
  connect?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
};

export type CouponsUsedCreateNestedManyWithoutCouponInput = {
  create?: Maybe<Array<CouponsUsedCreateWithoutCouponInput>>;
  connectOrCreate?: Maybe<Array<CouponsUsedCreateOrConnectWithoutCouponInput>>;
  createMany?: Maybe<CouponsUsedCreateManyCouponInputEnvelope>;
  connect?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
};

export type CouponsUsedCreateNestedManyWithoutOrderInput = {
  create?: Maybe<Array<CouponsUsedCreateWithoutOrderInput>>;
  connectOrCreate?: Maybe<Array<CouponsUsedCreateOrConnectWithoutOrderInput>>;
  createMany?: Maybe<CouponsUsedCreateManyOrderInputEnvelope>;
  connect?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
};

export type CouponsUsedCreateNestedManyWithoutVendorInput = {
  create?: Maybe<Array<CouponsUsedCreateWithoutVendorInput>>;
  connectOrCreate?: Maybe<Array<CouponsUsedCreateOrConnectWithoutVendorInput>>;
  createMany?: Maybe<CouponsUsedCreateManyVendorInputEnvelope>;
  connect?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
};

export type CouponsUsedCreateOrConnectWithoutClientInput = {
  where: CouponsUsedWhereUniqueInput;
  create: CouponsUsedCreateWithoutClientInput;
};

export type CouponsUsedCreateOrConnectWithoutCouponInput = {
  where: CouponsUsedWhereUniqueInput;
  create: CouponsUsedCreateWithoutCouponInput;
};

export type CouponsUsedCreateOrConnectWithoutOrderInput = {
  where: CouponsUsedWhereUniqueInput;
  create: CouponsUsedCreateWithoutOrderInput;
};

export type CouponsUsedCreateOrConnectWithoutVendorInput = {
  where: CouponsUsedWhereUniqueInput;
  create: CouponsUsedCreateWithoutVendorInput;
};

export type CouponsUsedCreateWithoutClientInput = {
  vendorId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  coupon?: Maybe<CouponCreateNestedOneWithoutCouponsUsedInput>;
  vendor?: Maybe<UserCreateNestedOneWithoutVendorCouponsUsedInput>;
  order?: Maybe<OrderCreateNestedOneWithoutCouponsUsedInput>;
};

export type CouponsUsedCreateWithoutCouponInput = {
  vendorId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  client?: Maybe<UserCreateNestedOneWithoutClientCouponsUsedInput>;
  vendor?: Maybe<UserCreateNestedOneWithoutVendorCouponsUsedInput>;
  order?: Maybe<OrderCreateNestedOneWithoutCouponsUsedInput>;
};

export type CouponsUsedCreateWithoutOrderInput = {
  vendorId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  coupon?: Maybe<CouponCreateNestedOneWithoutCouponsUsedInput>;
  client?: Maybe<UserCreateNestedOneWithoutClientCouponsUsedInput>;
  vendor?: Maybe<UserCreateNestedOneWithoutVendorCouponsUsedInput>;
};

export type CouponsUsedCreateWithoutVendorInput = {
  vendorId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  coupon?: Maybe<CouponCreateNestedOneWithoutCouponsUsedInput>;
  client?: Maybe<UserCreateNestedOneWithoutClientCouponsUsedInput>;
  order?: Maybe<OrderCreateNestedOneWithoutCouponsUsedInput>;
};

export type CouponsUsedListRelationFilter = {
  every?: Maybe<CouponsUsedWhereInput>;
  some?: Maybe<CouponsUsedWhereInput>;
  none?: Maybe<CouponsUsedWhereInput>;
};

export type CouponsUsedOrderByInput = {
  id?: Maybe<SortOrder>;
  couponId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  orderId?: Maybe<SortOrder>;
  vendorId?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type CouponsUsedScalarWhereInput = {
  AND?: Maybe<Array<CouponsUsedScalarWhereInput>>;
  OR?: Maybe<Array<CouponsUsedScalarWhereInput>>;
  NOT?: Maybe<Array<CouponsUsedScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  couponId?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
  orderId?: Maybe<IntFilter>;
  vendorId?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type CouponsUsedUpdateInput = {
  vendorId?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  coupon?: Maybe<CouponUpdateOneWithoutCouponsUsedInput>;
  client?: Maybe<UserUpdateOneWithoutClientCouponsUsedInput>;
  vendor?: Maybe<UserUpdateOneWithoutVendorCouponsUsedInput>;
  order?: Maybe<OrderUpdateOneRequiredWithoutCouponsUsedInput>;
};

export type CouponsUsedUpdateManyMutationInput = {
  vendorId?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type CouponsUsedUpdateManyWithWhereWithoutClientInput = {
  where: CouponsUsedScalarWhereInput;
  data: CouponsUsedUpdateManyMutationInput;
};

export type CouponsUsedUpdateManyWithWhereWithoutCouponInput = {
  where: CouponsUsedScalarWhereInput;
  data: CouponsUsedUpdateManyMutationInput;
};

export type CouponsUsedUpdateManyWithWhereWithoutOrderInput = {
  where: CouponsUsedScalarWhereInput;
  data: CouponsUsedUpdateManyMutationInput;
};

export type CouponsUsedUpdateManyWithWhereWithoutVendorInput = {
  where: CouponsUsedScalarWhereInput;
  data: CouponsUsedUpdateManyMutationInput;
};

export type CouponsUsedUpdateManyWithoutClientInput = {
  create?: Maybe<Array<CouponsUsedCreateWithoutClientInput>>;
  connectOrCreate?: Maybe<Array<CouponsUsedCreateOrConnectWithoutClientInput>>;
  upsert?: Maybe<Array<CouponsUsedUpsertWithWhereUniqueWithoutClientInput>>;
  createMany?: Maybe<CouponsUsedCreateManyClientInputEnvelope>;
  connect?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  set?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  disconnect?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  delete?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  update?: Maybe<Array<CouponsUsedUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: Maybe<Array<CouponsUsedUpdateManyWithWhereWithoutClientInput>>;
  deleteMany?: Maybe<Array<CouponsUsedScalarWhereInput>>;
};

export type CouponsUsedUpdateManyWithoutCouponInput = {
  create?: Maybe<Array<CouponsUsedCreateWithoutCouponInput>>;
  connectOrCreate?: Maybe<Array<CouponsUsedCreateOrConnectWithoutCouponInput>>;
  upsert?: Maybe<Array<CouponsUsedUpsertWithWhereUniqueWithoutCouponInput>>;
  createMany?: Maybe<CouponsUsedCreateManyCouponInputEnvelope>;
  connect?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  set?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  disconnect?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  delete?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  update?: Maybe<Array<CouponsUsedUpdateWithWhereUniqueWithoutCouponInput>>;
  updateMany?: Maybe<Array<CouponsUsedUpdateManyWithWhereWithoutCouponInput>>;
  deleteMany?: Maybe<Array<CouponsUsedScalarWhereInput>>;
};

export type CouponsUsedUpdateManyWithoutOrderInput = {
  create?: Maybe<Array<CouponsUsedCreateWithoutOrderInput>>;
  connectOrCreate?: Maybe<Array<CouponsUsedCreateOrConnectWithoutOrderInput>>;
  upsert?: Maybe<Array<CouponsUsedUpsertWithWhereUniqueWithoutOrderInput>>;
  createMany?: Maybe<CouponsUsedCreateManyOrderInputEnvelope>;
  connect?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  set?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  disconnect?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  delete?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  update?: Maybe<Array<CouponsUsedUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: Maybe<Array<CouponsUsedUpdateManyWithWhereWithoutOrderInput>>;
  deleteMany?: Maybe<Array<CouponsUsedScalarWhereInput>>;
};

export type CouponsUsedUpdateManyWithoutVendorInput = {
  create?: Maybe<Array<CouponsUsedCreateWithoutVendorInput>>;
  connectOrCreate?: Maybe<Array<CouponsUsedCreateOrConnectWithoutVendorInput>>;
  upsert?: Maybe<Array<CouponsUsedUpsertWithWhereUniqueWithoutVendorInput>>;
  createMany?: Maybe<CouponsUsedCreateManyVendorInputEnvelope>;
  connect?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  set?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  disconnect?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  delete?: Maybe<Array<CouponsUsedWhereUniqueInput>>;
  update?: Maybe<Array<CouponsUsedUpdateWithWhereUniqueWithoutVendorInput>>;
  updateMany?: Maybe<Array<CouponsUsedUpdateManyWithWhereWithoutVendorInput>>;
  deleteMany?: Maybe<Array<CouponsUsedScalarWhereInput>>;
};

export type CouponsUsedUpdateWithWhereUniqueWithoutClientInput = {
  where: CouponsUsedWhereUniqueInput;
  data: CouponsUsedUpdateWithoutClientInput;
};

export type CouponsUsedUpdateWithWhereUniqueWithoutCouponInput = {
  where: CouponsUsedWhereUniqueInput;
  data: CouponsUsedUpdateWithoutCouponInput;
};

export type CouponsUsedUpdateWithWhereUniqueWithoutOrderInput = {
  where: CouponsUsedWhereUniqueInput;
  data: CouponsUsedUpdateWithoutOrderInput;
};

export type CouponsUsedUpdateWithWhereUniqueWithoutVendorInput = {
  where: CouponsUsedWhereUniqueInput;
  data: CouponsUsedUpdateWithoutVendorInput;
};

export type CouponsUsedUpdateWithoutClientInput = {
  vendorId?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  coupon?: Maybe<CouponUpdateOneWithoutCouponsUsedInput>;
  vendor?: Maybe<UserUpdateOneWithoutVendorCouponsUsedInput>;
  order?: Maybe<OrderUpdateOneRequiredWithoutCouponsUsedInput>;
};

export type CouponsUsedUpdateWithoutCouponInput = {
  vendorId?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  client?: Maybe<UserUpdateOneWithoutClientCouponsUsedInput>;
  vendor?: Maybe<UserUpdateOneWithoutVendorCouponsUsedInput>;
  order?: Maybe<OrderUpdateOneRequiredWithoutCouponsUsedInput>;
};

export type CouponsUsedUpdateWithoutOrderInput = {
  vendorId?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  coupon?: Maybe<CouponUpdateOneWithoutCouponsUsedInput>;
  client?: Maybe<UserUpdateOneWithoutClientCouponsUsedInput>;
  vendor?: Maybe<UserUpdateOneWithoutVendorCouponsUsedInput>;
};

export type CouponsUsedUpdateWithoutVendorInput = {
  vendorId?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  coupon?: Maybe<CouponUpdateOneWithoutCouponsUsedInput>;
  client?: Maybe<UserUpdateOneWithoutClientCouponsUsedInput>;
  order?: Maybe<OrderUpdateOneRequiredWithoutCouponsUsedInput>;
};

export type CouponsUsedUpsertWithWhereUniqueWithoutClientInput = {
  where: CouponsUsedWhereUniqueInput;
  update: CouponsUsedUpdateWithoutClientInput;
  create: CouponsUsedCreateWithoutClientInput;
};

export type CouponsUsedUpsertWithWhereUniqueWithoutCouponInput = {
  where: CouponsUsedWhereUniqueInput;
  update: CouponsUsedUpdateWithoutCouponInput;
  create: CouponsUsedCreateWithoutCouponInput;
};

export type CouponsUsedUpsertWithWhereUniqueWithoutOrderInput = {
  where: CouponsUsedWhereUniqueInput;
  update: CouponsUsedUpdateWithoutOrderInput;
  create: CouponsUsedCreateWithoutOrderInput;
};

export type CouponsUsedUpsertWithWhereUniqueWithoutVendorInput = {
  where: CouponsUsedWhereUniqueInput;
  update: CouponsUsedUpdateWithoutVendorInput;
  create: CouponsUsedCreateWithoutVendorInput;
};

export type CouponsUsedWhereInput = {
  AND?: Maybe<Array<CouponsUsedWhereInput>>;
  OR?: Maybe<Array<CouponsUsedWhereInput>>;
  NOT?: Maybe<Array<CouponsUsedWhereInput>>;
  id?: Maybe<IntFilter>;
  couponId?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
  orderId?: Maybe<IntFilter>;
  vendorId?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  coupon?: Maybe<CouponWhereInput>;
  client?: Maybe<UserWhereInput>;
  vendor?: Maybe<UserWhereInput>;
  order?: Maybe<OrderWhereInput>;
};

export type CouponsUsedWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Courier = {
  __typename?: 'Courier';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  countryCode: Scalars['String'];
  cargoId: Scalars['Int'];
  code?: Maybe<Scalars['String']>;
  shippingMethod?: Maybe<Scalars['String']>;
  isDeleted: Scalars['Int'];
  isDefault: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  contactName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Currency = {
  __typename?: 'Currency';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  exchangeRate: Scalars['Float'];
  status: Scalars['Int'];
  photo?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CurrencyCreateInput = {
  title?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  exchangeRate?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CurrencyOrderByInput = {
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  currencyCode?: Maybe<SortOrder>;
  exchangeRate?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  photo?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type CurrencyUpdateInput = {
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencyCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exchangeRate?: Maybe<FloatFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type CurrencyUpdateManyMutationInput = {
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencyCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exchangeRate?: Maybe<FloatFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type CurrencyWhereInput = {
  AND?: Maybe<Array<CurrencyWhereInput>>;
  OR?: Maybe<Array<CurrencyWhereInput>>;
  NOT?: Maybe<Array<CurrencyWhereInput>>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringNullableFilter>;
  currencyCode?: Maybe<StringNullableFilter>;
  exchangeRate?: Maybe<FloatFilter>;
  status?: Maybe<IntFilter>;
  photo?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type CurrencyWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type File = {
  __typename?: 'File';
  filename?: Maybe<Scalars['String']>;
};

export type FiltersPayload = {
  __typename?: 'FiltersPayload';
  categories?: Maybe<Array<Maybe<ProductCategory>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  sizes?: Maybe<Array<Maybe<Size>>>;
  colours?: Maybe<Array<Maybe<Colour>>>;
  materials?: Maybe<Array<Maybe<Material>>>;
  shapes?: Maybe<Array<Maybe<Shape>>>;
  descriptions?: Maybe<Array<Maybe<ProductDescription>>>;
  labels?: Maybe<Array<Maybe<Label>>>;
};

export type FloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type InputDataCartOrderType = {
  orderId?: Maybe<Scalars['Int']>;
  items: Array<Maybe<InputDataOrderItemType>>;
};

export type InputDataOrderItemType = {
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  variationId: Scalars['Int'];
};

export type InputDataOrderType = {
  paymentType?: Maybe<Scalars['String']>;
  cardId?: Maybe<Scalars['Int']>;
  cardName?: Maybe<Scalars['String']>;
  cardNum?: Maybe<Scalars['Int']>;
  cardExpiryDate?: Maybe<Scalars['String']>;
  cvv?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  couponId?: Maybe<Scalars['Int']>;
  shipmentAdrsId?: Maybe<Scalars['Int']>;
  shippingMethod?: Maybe<Scalars['String']>;
  shippingCost?: Maybe<Scalars['Float']>;
  cargoId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  items: Array<InputDataOrderItemType>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type Label = {
  __typename?: 'Label';
  id: Scalars['Int'];
  photo?: Maybe<Scalars['String']>;
  productToLabel: Array<ProductToLabel>;
  stockToLabel: Array<StockToLabel>;
};


export type LabelProductToLabelArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToLabelWhereUniqueInput>;
};


export type LabelStockToLabelArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToLabelWhereUniqueInput>;
};

export type LabelCreateInput = {
  photo?: Maybe<Scalars['String']>;
  productToLabel?: Maybe<ProductToLabelCreateNestedManyWithoutLabelInput>;
  stockToLabel?: Maybe<StockToLabelCreateNestedManyWithoutLabelInput>;
};

export type LabelCreateNestedOneWithoutProductToLabelInput = {
  create?: Maybe<LabelCreateWithoutProductToLabelInput>;
  connectOrCreate?: Maybe<LabelCreateOrConnectWithoutProductToLabelInput>;
  connect?: Maybe<LabelWhereUniqueInput>;
};

export type LabelCreateNestedOneWithoutStockToLabelInput = {
  create?: Maybe<LabelCreateWithoutStockToLabelInput>;
  connectOrCreate?: Maybe<LabelCreateOrConnectWithoutStockToLabelInput>;
  connect?: Maybe<LabelWhereUniqueInput>;
};

export type LabelCreateOrConnectWithoutProductToLabelInput = {
  where: LabelWhereUniqueInput;
  create: LabelCreateWithoutProductToLabelInput;
};

export type LabelCreateOrConnectWithoutStockToLabelInput = {
  where: LabelWhereUniqueInput;
  create: LabelCreateWithoutStockToLabelInput;
};

export type LabelCreateWithoutProductToLabelInput = {
  photo?: Maybe<Scalars['String']>;
  stockToLabel?: Maybe<StockToLabelCreateNestedManyWithoutLabelInput>;
};

export type LabelCreateWithoutStockToLabelInput = {
  photo?: Maybe<Scalars['String']>;
  productToLabel?: Maybe<ProductToLabelCreateNestedManyWithoutLabelInput>;
};

export type LabelOrderByInput = {
  id?: Maybe<SortOrder>;
  photo?: Maybe<SortOrder>;
};

export type LabelUpdateInput = {
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  productToLabel?: Maybe<ProductToLabelUpdateManyWithoutLabelInput>;
  stockToLabel?: Maybe<StockToLabelUpdateManyWithoutLabelInput>;
};

export type LabelUpdateManyMutationInput = {
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type LabelUpdateOneWithoutProductToLabelInput = {
  create?: Maybe<LabelCreateWithoutProductToLabelInput>;
  connectOrCreate?: Maybe<LabelCreateOrConnectWithoutProductToLabelInput>;
  upsert?: Maybe<LabelUpsertWithoutProductToLabelInput>;
  connect?: Maybe<LabelWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<LabelUpdateWithoutProductToLabelInput>;
};

export type LabelUpdateOneWithoutStockToLabelInput = {
  create?: Maybe<LabelCreateWithoutStockToLabelInput>;
  connectOrCreate?: Maybe<LabelCreateOrConnectWithoutStockToLabelInput>;
  upsert?: Maybe<LabelUpsertWithoutStockToLabelInput>;
  connect?: Maybe<LabelWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<LabelUpdateWithoutStockToLabelInput>;
};

export type LabelUpdateWithoutProductToLabelInput = {
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stockToLabel?: Maybe<StockToLabelUpdateManyWithoutLabelInput>;
};

export type LabelUpdateWithoutStockToLabelInput = {
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  productToLabel?: Maybe<ProductToLabelUpdateManyWithoutLabelInput>;
};

export type LabelUpsertWithoutProductToLabelInput = {
  update: LabelUpdateWithoutProductToLabelInput;
  create: LabelCreateWithoutProductToLabelInput;
};

export type LabelUpsertWithoutStockToLabelInput = {
  update: LabelUpdateWithoutStockToLabelInput;
  create: LabelCreateWithoutStockToLabelInput;
};

export type LabelWhereInput = {
  AND?: Maybe<Array<LabelWhereInput>>;
  OR?: Maybe<Array<LabelWhereInput>>;
  NOT?: Maybe<Array<LabelWhereInput>>;
  id?: Maybe<IntFilter>;
  photo?: Maybe<StringNullableFilter>;
  productToLabel?: Maybe<ProductToLabelListRelationFilter>;
  stockToLabel?: Maybe<StockToLabelListRelationFilter>;
};

export type LabelWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Material = {
  __typename?: 'Material';
  id: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  elment_trans: Array<MaterialTrans>;
  productToMaterial: Array<ProductToMaterial>;
  stockToMaterial: Array<StockToMaterial>;
};


export type MaterialElment_TransArgs = {
  where?: Maybe<MaterialTransWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MaterialTransWhereUniqueInput>;
};


export type MaterialProductToMaterialArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToMaterialWhereUniqueInput>;
};


export type MaterialStockToMaterialArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToMaterialWhereUniqueInput>;
};

export type MaterialCreateInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  elment_trans?: Maybe<MaterialTransCreateNestedManyWithoutMaterialInput>;
  productToMaterial?: Maybe<ProductToMaterialCreateNestedManyWithoutMaterialInput>;
  stockToMaterial?: Maybe<StockToMaterialCreateNestedManyWithoutMaterialInput>;
};

export type MaterialCreateNestedOneWithoutProductToMaterialInput = {
  create?: Maybe<MaterialCreateWithoutProductToMaterialInput>;
  connectOrCreate?: Maybe<MaterialCreateOrConnectWithoutProductToMaterialInput>;
  connect?: Maybe<MaterialWhereUniqueInput>;
};

export type MaterialCreateNestedOneWithoutStockToMaterialInput = {
  create?: Maybe<MaterialCreateWithoutStockToMaterialInput>;
  connectOrCreate?: Maybe<MaterialCreateOrConnectWithoutStockToMaterialInput>;
  connect?: Maybe<MaterialWhereUniqueInput>;
};

export type MaterialCreateOrConnectWithoutProductToMaterialInput = {
  where: MaterialWhereUniqueInput;
  create: MaterialCreateWithoutProductToMaterialInput;
};

export type MaterialCreateOrConnectWithoutStockToMaterialInput = {
  where: MaterialWhereUniqueInput;
  create: MaterialCreateWithoutStockToMaterialInput;
};

export type MaterialCreateWithoutProductToMaterialInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  elment_trans?: Maybe<MaterialTransCreateNestedManyWithoutMaterialInput>;
  stockToMaterial?: Maybe<StockToMaterialCreateNestedManyWithoutMaterialInput>;
};

export type MaterialCreateWithoutStockToMaterialInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  elment_trans?: Maybe<MaterialTransCreateNestedManyWithoutMaterialInput>;
  productToMaterial?: Maybe<ProductToMaterialCreateNestedManyWithoutMaterialInput>;
};

export type MaterialOrderByInput = {
  id?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type MaterialTrans = {
  __typename?: 'MaterialTrans';
  id: Scalars['Int'];
  rowId: Scalars['Int'];
  languageCode: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  material: Material;
};

export type MaterialTransCreateManyMaterialInput = {
  id?: Maybe<Scalars['Int']>;
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type MaterialTransCreateManyMaterialInputEnvelope = {
  data?: Maybe<Array<MaterialTransCreateManyMaterialInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MaterialTransCreateNestedManyWithoutMaterialInput = {
  create?: Maybe<Array<MaterialTransCreateWithoutMaterialInput>>;
  connectOrCreate?: Maybe<Array<MaterialTransCreateOrConnectWithoutMaterialInput>>;
  createMany?: Maybe<MaterialTransCreateManyMaterialInputEnvelope>;
  connect?: Maybe<Array<MaterialTransWhereUniqueInput>>;
};

export type MaterialTransCreateOrConnectWithoutMaterialInput = {
  where: MaterialTransWhereUniqueInput;
  create: MaterialTransCreateWithoutMaterialInput;
};

export type MaterialTransCreateWithoutMaterialInput = {
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type MaterialTransListRelationFilter = {
  every?: Maybe<MaterialTransWhereInput>;
  some?: Maybe<MaterialTransWhereInput>;
  none?: Maybe<MaterialTransWhereInput>;
};

export type MaterialTransScalarWhereInput = {
  AND?: Maybe<Array<MaterialTransScalarWhereInput>>;
  OR?: Maybe<Array<MaterialTransScalarWhereInput>>;
  NOT?: Maybe<Array<MaterialTransScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  rowId?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type MaterialTransUpdateManyMutationInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type MaterialTransUpdateManyWithWhereWithoutMaterialInput = {
  where: MaterialTransScalarWhereInput;
  data: MaterialTransUpdateManyMutationInput;
};

export type MaterialTransUpdateManyWithoutMaterialInput = {
  create?: Maybe<Array<MaterialTransCreateWithoutMaterialInput>>;
  connectOrCreate?: Maybe<Array<MaterialTransCreateOrConnectWithoutMaterialInput>>;
  upsert?: Maybe<Array<MaterialTransUpsertWithWhereUniqueWithoutMaterialInput>>;
  createMany?: Maybe<MaterialTransCreateManyMaterialInputEnvelope>;
  connect?: Maybe<Array<MaterialTransWhereUniqueInput>>;
  set?: Maybe<Array<MaterialTransWhereUniqueInput>>;
  disconnect?: Maybe<Array<MaterialTransWhereUniqueInput>>;
  delete?: Maybe<Array<MaterialTransWhereUniqueInput>>;
  update?: Maybe<Array<MaterialTransUpdateWithWhereUniqueWithoutMaterialInput>>;
  updateMany?: Maybe<Array<MaterialTransUpdateManyWithWhereWithoutMaterialInput>>;
  deleteMany?: Maybe<Array<MaterialTransScalarWhereInput>>;
};

export type MaterialTransUpdateWithWhereUniqueWithoutMaterialInput = {
  where: MaterialTransWhereUniqueInput;
  data: MaterialTransUpdateWithoutMaterialInput;
};

export type MaterialTransUpdateWithoutMaterialInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type MaterialTransUpsertWithWhereUniqueWithoutMaterialInput = {
  where: MaterialTransWhereUniqueInput;
  update: MaterialTransUpdateWithoutMaterialInput;
  create: MaterialTransCreateWithoutMaterialInput;
};

export type MaterialTransWhereInput = {
  AND?: Maybe<Array<MaterialTransWhereInput>>;
  OR?: Maybe<Array<MaterialTransWhereInput>>;
  NOT?: Maybe<Array<MaterialTransWhereInput>>;
  id?: Maybe<IntFilter>;
  rowId?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  material?: Maybe<MaterialWhereInput>;
};

export type MaterialTransWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type MaterialUpdateInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  elment_trans?: Maybe<MaterialTransUpdateManyWithoutMaterialInput>;
  productToMaterial?: Maybe<ProductToMaterialUpdateManyWithoutMaterialInput>;
  stockToMaterial?: Maybe<StockToMaterialUpdateManyWithoutMaterialInput>;
};

export type MaterialUpdateManyMutationInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type MaterialUpdateOneWithoutProductToMaterialInput = {
  create?: Maybe<MaterialCreateWithoutProductToMaterialInput>;
  connectOrCreate?: Maybe<MaterialCreateOrConnectWithoutProductToMaterialInput>;
  upsert?: Maybe<MaterialUpsertWithoutProductToMaterialInput>;
  connect?: Maybe<MaterialWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MaterialUpdateWithoutProductToMaterialInput>;
};

export type MaterialUpdateOneWithoutStockToMaterialInput = {
  create?: Maybe<MaterialCreateWithoutStockToMaterialInput>;
  connectOrCreate?: Maybe<MaterialCreateOrConnectWithoutStockToMaterialInput>;
  upsert?: Maybe<MaterialUpsertWithoutStockToMaterialInput>;
  connect?: Maybe<MaterialWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MaterialUpdateWithoutStockToMaterialInput>;
};

export type MaterialUpdateWithoutProductToMaterialInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  elment_trans?: Maybe<MaterialTransUpdateManyWithoutMaterialInput>;
  stockToMaterial?: Maybe<StockToMaterialUpdateManyWithoutMaterialInput>;
};

export type MaterialUpdateWithoutStockToMaterialInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  elment_trans?: Maybe<MaterialTransUpdateManyWithoutMaterialInput>;
  productToMaterial?: Maybe<ProductToMaterialUpdateManyWithoutMaterialInput>;
};

export type MaterialUpsertWithoutProductToMaterialInput = {
  update: MaterialUpdateWithoutProductToMaterialInput;
  create: MaterialCreateWithoutProductToMaterialInput;
};

export type MaterialUpsertWithoutStockToMaterialInput = {
  update: MaterialUpdateWithoutStockToMaterialInput;
  create: MaterialCreateWithoutStockToMaterialInput;
};

export type MaterialWhereInput = {
  AND?: Maybe<Array<MaterialWhereInput>>;
  OR?: Maybe<Array<MaterialWhereInput>>;
  NOT?: Maybe<Array<MaterialWhereInput>>;
  id?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  elment_trans?: Maybe<MaterialTransListRelationFilter>;
  productToMaterial?: Maybe<ProductToMaterialListRelationFilter>;
  stockToMaterial?: Maybe<StockToMaterialListRelationFilter>;
};

export type MaterialWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminSignIn?: Maybe<AdminAuthPayload>;
  multipleUpload?: Maybe<File>;
  singleUpload?: Maybe<File>;
  uploadFiles?: Maybe<File>;
  signIn?: Maybe<AuthPayload>;
  deleteOneShipmentadr?: Maybe<Shipmentadr>;
  createCartOrder?: Maybe<OrderPayload>;
  createOrder?: Maybe<OrderPayload>;
  upsertOneShipmentadr: Shipmentadr;
  createOneQuotation: Quotation;
  createOneRate: Rate;
  createOneUserFavourite: UserFavourite;
  deleteOneUserFavourite?: Maybe<UserFavourite>;
  createOneUserFollowing: UserFollowing;
  deleteOneUserFollowing?: Maybe<UserFollowing>;
  updateOneOrder?: Maybe<Order>;
  updateOneUser?: Maybe<User>;
  AdminCreateOneUser: User;
  AdminUpdateOneUser?: Maybe<User>;
  AdminUpdateManyUser: AffectedRowsOutput;
  AdminUpsertOneUser: User;
  AdminDeleteOneUser?: Maybe<User>;
  AdminDeleteManyUser: AffectedRowsOutput;
  AdminCreateOneOrder: Order;
  AdminUpdateOneOrder?: Maybe<Order>;
  AdminUpdateManyOrder: AffectedRowsOutput;
  AdminUpsertOneOrder: Order;
  AdminDeleteOneOrder?: Maybe<Order>;
  AdminDeleteManyOrder: AffectedRowsOutput;
  AdminCreateOneCountry: Country;
  AdminUpdateOneCountry?: Maybe<Country>;
  AdminUpdateManyCountry: AffectedRowsOutput;
  AdminUpsertOneCountry: Country;
  AdminDeleteOneCountry?: Maybe<Country>;
  AdminDeleteManyCountry: AffectedRowsOutput;
  AdminCreateOneArticle: Article;
  AdminUpdateOneArticle?: Maybe<Article>;
  AdminUpdateManyArticle: AffectedRowsOutput;
  AdminUpsertOneArticle: Article;
  AdminDeleteOneArticle?: Maybe<Article>;
  AdminDeleteManyArticle: AffectedRowsOutput;
  AdminCreateOneBankAccount: BankAccount;
  AdminUpdateOneBankAccount?: Maybe<BankAccount>;
  AdminUpdateManyBankAccount: AffectedRowsOutput;
  AdminUpsertOneBankAccount: BankAccount;
  AdminDeleteOneBankAccount?: Maybe<BankAccount>;
  AdminDeleteManyBankAccount: AffectedRowsOutput;
  AdminCreateOneBankCard: BankCard;
  AdminUpdateOneBankCard?: Maybe<BankCard>;
  AdminUpdateManyBankCard: AffectedRowsOutput;
  AdminUpsertOneBankCard: BankCard;
  AdminDeleteOneBankCard?: Maybe<BankCard>;
  AdminDeleteManyBankCard: AffectedRowsOutput;
  AdminCreateOneCargo: Cargo;
  AdminUpdateOneCargo?: Maybe<Cargo>;
  AdminUpdateManyCargo: AffectedRowsOutput;
  AdminUpsertOneCargo: Cargo;
  AdminDeleteOneCargo?: Maybe<Cargo>;
  AdminDeleteManyCargo: AffectedRowsOutput;
  AdminCreateOneCity: City;
  AdminUpdateOneCity?: Maybe<City>;
  AdminUpdateManyCity: AffectedRowsOutput;
  AdminUpsertOneCity: City;
  AdminDeleteOneCity?: Maybe<City>;
  AdminDeleteManyCity: AffectedRowsOutput;
  AdminCreateOneColour: Colour;
  AdminUpdateOneColour?: Maybe<Colour>;
  AdminUpdateManyColour: AffectedRowsOutput;
  AdminUpsertOneColour: Colour;
  AdminDeleteOneColour?: Maybe<Colour>;
  AdminDeleteManyColour: AffectedRowsOutput;
  AdminCreateOneContact: Contact;
  AdminUpdateOneContact?: Maybe<Contact>;
  AdminUpdateManyContact: AffectedRowsOutput;
  AdminUpsertOneContact: Contact;
  AdminDeleteOneContact?: Maybe<Contact>;
  AdminDeleteManyContact: AffectedRowsOutput;
  AdminCreateOneCoupon: Coupon;
  AdminUpdateOneCoupon?: Maybe<Coupon>;
  AdminUpdateManyCoupon: AffectedRowsOutput;
  AdminUpsertOneCoupon: Coupon;
  AdminDeleteOneCoupon?: Maybe<Coupon>;
  AdminDeleteManyCoupon: AffectedRowsOutput;
  AdminCreateOneCouponsUsed: CouponsUsed;
  AdminUpdateOneCouponsUsed?: Maybe<CouponsUsed>;
  AdminUpdateManyCouponsUsed: AffectedRowsOutput;
  AdminUpsertOneCouponsUsed: CouponsUsed;
  AdminDeleteOneCouponsUsed?: Maybe<CouponsUsed>;
  AdminDeleteManyCouponsUsed: AffectedRowsOutput;
  AdminCreateOneCurrency: Currency;
  AdminUpdateOneCurrency?: Maybe<Currency>;
  AdminUpdateManyCurrency: AffectedRowsOutput;
  AdminUpsertOneCurrency: Currency;
  AdminDeleteOneCurrency?: Maybe<Currency>;
  AdminDeleteManyCurrency: AffectedRowsOutput;
  AdminCreateOneLabel: Label;
  AdminUpdateOneLabel?: Maybe<Label>;
  AdminUpdateManyLabel: AffectedRowsOutput;
  AdminUpsertOneLabel: Label;
  AdminDeleteOneLabel?: Maybe<Label>;
  AdminDeleteManyLabel: AffectedRowsOutput;
  AdminCreateOneMaterial: Material;
  AdminUpdateOneMaterial?: Maybe<Material>;
  AdminUpdateManyMaterial: AffectedRowsOutput;
  AdminUpsertOneMaterial: Material;
  AdminDeleteOneMaterial?: Maybe<Material>;
  AdminDeleteManyMaterial: AffectedRowsOutput;
  AdminCreateOneProduct: Product;
  AdminUpdateOneProduct?: Maybe<Product>;
  AdminUpdateManyProduct: AffectedRowsOutput;
  AdminUpsertOneProduct: Product;
  AdminDeleteOneProduct?: Maybe<Product>;
  AdminDeleteManyProduct: AffectedRowsOutput;
  AdminCreateOneQuotation: Quotation;
  AdminUpdateOneQuotation?: Maybe<Quotation>;
  AdminUpdateManyQuotation: AffectedRowsOutput;
  AdminUpsertOneQuotation: Quotation;
  AdminDeleteOneQuotation?: Maybe<Quotation>;
  AdminDeleteManyQuotation: AffectedRowsOutput;
  AdminCreateOneShipmentadr: Shipmentadr;
  AdminUpdateOneShipmentadr?: Maybe<Shipmentadr>;
  AdminUpdateManyShipmentadr: AffectedRowsOutput;
  AdminUpsertOneShipmentadr: Shipmentadr;
  AdminDeleteOneShipmentadr?: Maybe<Shipmentadr>;
  AdminDeleteManyShipmentadr: AffectedRowsOutput;
};


export type MutationAdminSignInArgs = {
  phone: Scalars['String'];
  password: Scalars['String'];
};


export type MutationMultipleUploadArgs = {
  files: Array<Scalars['Upload']>;
};


export type MutationSingleUploadArgs = {
  file?: Maybe<Scalars['Upload']>;
  type: Scalars['String'];
  rowId?: Maybe<Scalars['Int']>;
};


export type MutationUploadFilesArgs = {
  file?: Maybe<Scalars['Upload']>;
};


export type MutationSignInArgs = {
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebaseToken: Scalars['String'];
  deviceId?: Maybe<Scalars['String']>;
};


export type MutationDeleteOneShipmentadrArgs = {
  where: ShipmentadrWhereUniqueInput;
};


export type MutationCreateCartOrderArgs = {
  data?: Maybe<InputDataCartOrderType>;
};


export type MutationCreateOrderArgs = {
  data?: Maybe<InputDataOrderType>;
};


export type MutationUpsertOneShipmentadrArgs = {
  where: ShipmentadrWhereUniqueInput;
  create: ShipmentadrCreateInput;
  update: ShipmentadrUpdateInput;
};


export type MutationCreateOneQuotationArgs = {
  data: QuotationCreateInput;
};


export type MutationCreateOneRateArgs = {
  data: RateCreateInput;
};


export type MutationCreateOneUserFavouriteArgs = {
  data: UserFavouriteCreateInput;
};


export type MutationDeleteOneUserFavouriteArgs = {
  productId: Scalars['Int'];
};


export type MutationCreateOneUserFollowingArgs = {
  data: UserFollowingCreateInput;
};


export type MutationDeleteOneUserFollowingArgs = {
  followedId: Scalars['Int'];
};


export type MutationUpdateOneOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationAdminCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationAdminUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationAdminUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationAdminUpsertOneUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationAdminDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationAdminDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationAdminCreateOneOrderArgs = {
  data: OrderCreateInput;
};


export type MutationAdminUpdateOneOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationAdminUpdateManyOrderArgs = {
  data: OrderUpdateManyMutationInput;
  where?: Maybe<OrderWhereInput>;
};


export type MutationAdminUpsertOneOrderArgs = {
  where: OrderWhereUniqueInput;
  create: OrderCreateInput;
  update: OrderUpdateInput;
};


export type MutationAdminDeleteOneOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationAdminDeleteManyOrderArgs = {
  where?: Maybe<OrderWhereInput>;
};


export type MutationAdminCreateOneCountryArgs = {
  data: CountryCreateInput;
};


export type MutationAdminUpdateOneCountryArgs = {
  data: CountryUpdateInput;
  where: CountryWhereUniqueInput;
};


export type MutationAdminUpdateManyCountryArgs = {
  data: CountryUpdateManyMutationInput;
  where?: Maybe<CountryWhereInput>;
};


export type MutationAdminUpsertOneCountryArgs = {
  where: CountryWhereUniqueInput;
  create: CountryCreateInput;
  update: CountryUpdateInput;
};


export type MutationAdminDeleteOneCountryArgs = {
  where: CountryWhereUniqueInput;
};


export type MutationAdminDeleteManyCountryArgs = {
  where?: Maybe<CountryWhereInput>;
};


export type MutationAdminCreateOneArticleArgs = {
  data: ArticleCreateInput;
};


export type MutationAdminUpdateOneArticleArgs = {
  data: ArticleUpdateInput;
  where: ArticleWhereUniqueInput;
};


export type MutationAdminUpdateManyArticleArgs = {
  data: ArticleUpdateManyMutationInput;
  where?: Maybe<ArticleWhereInput>;
};


export type MutationAdminUpsertOneArticleArgs = {
  where: ArticleWhereUniqueInput;
  create: ArticleCreateInput;
  update: ArticleUpdateInput;
};


export type MutationAdminDeleteOneArticleArgs = {
  where: ArticleWhereUniqueInput;
};


export type MutationAdminDeleteManyArticleArgs = {
  where?: Maybe<ArticleWhereInput>;
};


export type MutationAdminCreateOneBankAccountArgs = {
  data: BankAccountCreateInput;
};


export type MutationAdminUpdateOneBankAccountArgs = {
  data: BankAccountUpdateInput;
  where: BankAccountWhereUniqueInput;
};


export type MutationAdminUpdateManyBankAccountArgs = {
  data: BankAccountUpdateManyMutationInput;
  where?: Maybe<BankAccountWhereInput>;
};


export type MutationAdminUpsertOneBankAccountArgs = {
  where: BankAccountWhereUniqueInput;
  create: BankAccountCreateInput;
  update: BankAccountUpdateInput;
};


export type MutationAdminDeleteOneBankAccountArgs = {
  where: BankAccountWhereUniqueInput;
};


export type MutationAdminDeleteManyBankAccountArgs = {
  where?: Maybe<BankAccountWhereInput>;
};


export type MutationAdminCreateOneBankCardArgs = {
  data: BankCardCreateInput;
};


export type MutationAdminUpdateOneBankCardArgs = {
  data: BankCardUpdateInput;
  where: BankCardWhereUniqueInput;
};


export type MutationAdminUpdateManyBankCardArgs = {
  data: BankCardUpdateManyMutationInput;
  where?: Maybe<BankCardWhereInput>;
};


export type MutationAdminUpsertOneBankCardArgs = {
  where: BankCardWhereUniqueInput;
  create: BankCardCreateInput;
  update: BankCardUpdateInput;
};


export type MutationAdminDeleteOneBankCardArgs = {
  where: BankCardWhereUniqueInput;
};


export type MutationAdminDeleteManyBankCardArgs = {
  where?: Maybe<BankCardWhereInput>;
};


export type MutationAdminCreateOneCargoArgs = {
  data: CargoCreateInput;
};


export type MutationAdminUpdateOneCargoArgs = {
  data: CargoUpdateInput;
  where: CargoWhereUniqueInput;
};


export type MutationAdminUpdateManyCargoArgs = {
  data: CargoUpdateManyMutationInput;
  where?: Maybe<CargoWhereInput>;
};


export type MutationAdminUpsertOneCargoArgs = {
  where: CargoWhereUniqueInput;
  create: CargoCreateInput;
  update: CargoUpdateInput;
};


export type MutationAdminDeleteOneCargoArgs = {
  where: CargoWhereUniqueInput;
};


export type MutationAdminDeleteManyCargoArgs = {
  where?: Maybe<CargoWhereInput>;
};


export type MutationAdminCreateOneCityArgs = {
  data: CityCreateInput;
};


export type MutationAdminUpdateOneCityArgs = {
  data: CityUpdateInput;
  where: CityWhereUniqueInput;
};


export type MutationAdminUpdateManyCityArgs = {
  data: CityUpdateManyMutationInput;
  where?: Maybe<CityWhereInput>;
};


export type MutationAdminUpsertOneCityArgs = {
  where: CityWhereUniqueInput;
  create: CityCreateInput;
  update: CityUpdateInput;
};


export type MutationAdminDeleteOneCityArgs = {
  where: CityWhereUniqueInput;
};


export type MutationAdminDeleteManyCityArgs = {
  where?: Maybe<CityWhereInput>;
};


export type MutationAdminCreateOneColourArgs = {
  data: ColourCreateInput;
};


export type MutationAdminUpdateOneColourArgs = {
  data: ColourUpdateInput;
  where: ColourWhereUniqueInput;
};


export type MutationAdminUpdateManyColourArgs = {
  data: ColourUpdateManyMutationInput;
  where?: Maybe<ColourWhereInput>;
};


export type MutationAdminUpsertOneColourArgs = {
  where: ColourWhereUniqueInput;
  create: ColourCreateInput;
  update: ColourUpdateInput;
};


export type MutationAdminDeleteOneColourArgs = {
  where: ColourWhereUniqueInput;
};


export type MutationAdminDeleteManyColourArgs = {
  where?: Maybe<ColourWhereInput>;
};


export type MutationAdminCreateOneContactArgs = {
  data: ContactCreateInput;
};


export type MutationAdminUpdateOneContactArgs = {
  data: ContactUpdateInput;
  where: ContactWhereUniqueInput;
};


export type MutationAdminUpdateManyContactArgs = {
  data: ContactUpdateManyMutationInput;
  where?: Maybe<ContactWhereInput>;
};


export type MutationAdminUpsertOneContactArgs = {
  where: ContactWhereUniqueInput;
  create: ContactCreateInput;
  update: ContactUpdateInput;
};


export type MutationAdminDeleteOneContactArgs = {
  where: ContactWhereUniqueInput;
};


export type MutationAdminDeleteManyContactArgs = {
  where?: Maybe<ContactWhereInput>;
};


export type MutationAdminCreateOneCouponArgs = {
  data: CouponCreateInput;
};


export type MutationAdminUpdateOneCouponArgs = {
  data: CouponUpdateInput;
  where: CouponWhereUniqueInput;
};


export type MutationAdminUpdateManyCouponArgs = {
  data: CouponUpdateManyMutationInput;
  where?: Maybe<CouponWhereInput>;
};


export type MutationAdminUpsertOneCouponArgs = {
  where: CouponWhereUniqueInput;
  create: CouponCreateInput;
  update: CouponUpdateInput;
};


export type MutationAdminDeleteOneCouponArgs = {
  where: CouponWhereUniqueInput;
};


export type MutationAdminDeleteManyCouponArgs = {
  where?: Maybe<CouponWhereInput>;
};


export type MutationAdminCreateOneCouponsUsedArgs = {
  data: CouponsUsedCreateInput;
};


export type MutationAdminUpdateOneCouponsUsedArgs = {
  data: CouponsUsedUpdateInput;
  where: CouponsUsedWhereUniqueInput;
};


export type MutationAdminUpdateManyCouponsUsedArgs = {
  data: CouponsUsedUpdateManyMutationInput;
  where?: Maybe<CouponsUsedWhereInput>;
};


export type MutationAdminUpsertOneCouponsUsedArgs = {
  where: CouponsUsedWhereUniqueInput;
  create: CouponsUsedCreateInput;
  update: CouponsUsedUpdateInput;
};


export type MutationAdminDeleteOneCouponsUsedArgs = {
  where: CouponsUsedWhereUniqueInput;
};


export type MutationAdminDeleteManyCouponsUsedArgs = {
  where?: Maybe<CouponsUsedWhereInput>;
};


export type MutationAdminCreateOneCurrencyArgs = {
  data: CurrencyCreateInput;
};


export type MutationAdminUpdateOneCurrencyArgs = {
  data: CurrencyUpdateInput;
  where: CurrencyWhereUniqueInput;
};


export type MutationAdminUpdateManyCurrencyArgs = {
  data: CurrencyUpdateManyMutationInput;
  where?: Maybe<CurrencyWhereInput>;
};


export type MutationAdminUpsertOneCurrencyArgs = {
  where: CurrencyWhereUniqueInput;
  create: CurrencyCreateInput;
  update: CurrencyUpdateInput;
};


export type MutationAdminDeleteOneCurrencyArgs = {
  where: CurrencyWhereUniqueInput;
};


export type MutationAdminDeleteManyCurrencyArgs = {
  where?: Maybe<CurrencyWhereInput>;
};


export type MutationAdminCreateOneLabelArgs = {
  data: LabelCreateInput;
};


export type MutationAdminUpdateOneLabelArgs = {
  data: LabelUpdateInput;
  where: LabelWhereUniqueInput;
};


export type MutationAdminUpdateManyLabelArgs = {
  data: LabelUpdateManyMutationInput;
  where?: Maybe<LabelWhereInput>;
};


export type MutationAdminUpsertOneLabelArgs = {
  where: LabelWhereUniqueInput;
  create: LabelCreateInput;
  update: LabelUpdateInput;
};


export type MutationAdminDeleteOneLabelArgs = {
  where: LabelWhereUniqueInput;
};


export type MutationAdminDeleteManyLabelArgs = {
  where?: Maybe<LabelWhereInput>;
};


export type MutationAdminCreateOneMaterialArgs = {
  data: MaterialCreateInput;
};


export type MutationAdminUpdateOneMaterialArgs = {
  data: MaterialUpdateInput;
  where: MaterialWhereUniqueInput;
};


export type MutationAdminUpdateManyMaterialArgs = {
  data: MaterialUpdateManyMutationInput;
  where?: Maybe<MaterialWhereInput>;
};


export type MutationAdminUpsertOneMaterialArgs = {
  where: MaterialWhereUniqueInput;
  create: MaterialCreateInput;
  update: MaterialUpdateInput;
};


export type MutationAdminDeleteOneMaterialArgs = {
  where: MaterialWhereUniqueInput;
};


export type MutationAdminDeleteManyMaterialArgs = {
  where?: Maybe<MaterialWhereInput>;
};


export type MutationAdminCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationAdminUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationAdminUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: Maybe<ProductWhereInput>;
};


export type MutationAdminUpsertOneProductArgs = {
  where: ProductWhereUniqueInput;
  create: ProductCreateInput;
  update: ProductUpdateInput;
};


export type MutationAdminDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationAdminDeleteManyProductArgs = {
  where?: Maybe<ProductWhereInput>;
};


export type MutationAdminCreateOneQuotationArgs = {
  data: QuotationCreateInput;
};


export type MutationAdminUpdateOneQuotationArgs = {
  data: QuotationUpdateInput;
  where: QuotationWhereUniqueInput;
};


export type MutationAdminUpdateManyQuotationArgs = {
  data: QuotationUpdateManyMutationInput;
  where?: Maybe<QuotationWhereInput>;
};


export type MutationAdminUpsertOneQuotationArgs = {
  where: QuotationWhereUniqueInput;
  create: QuotationCreateInput;
  update: QuotationUpdateInput;
};


export type MutationAdminDeleteOneQuotationArgs = {
  where: QuotationWhereUniqueInput;
};


export type MutationAdminDeleteManyQuotationArgs = {
  where?: Maybe<QuotationWhereInput>;
};


export type MutationAdminCreateOneShipmentadrArgs = {
  data: ShipmentadrCreateInput;
};


export type MutationAdminUpdateOneShipmentadrArgs = {
  data: ShipmentadrUpdateInput;
  where: ShipmentadrWhereUniqueInput;
};


export type MutationAdminUpdateManyShipmentadrArgs = {
  data: ShipmentadrUpdateManyMutationInput;
  where?: Maybe<ShipmentadrWhereInput>;
};


export type MutationAdminUpsertOneShipmentadrArgs = {
  where: ShipmentadrWhereUniqueInput;
  create: ShipmentadrCreateInput;
  update: ShipmentadrUpdateInput;
};


export type MutationAdminDeleteOneShipmentadrArgs = {
  where: ShipmentadrWhereUniqueInput;
};


export type MutationAdminDeleteManyShipmentadrArgs = {
  where?: Maybe<ShipmentadrWhereInput>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  userCredit?: Maybe<Scalars['Float']>;
  shipmentAdrsId?: Maybe<Scalars['Int']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  couponId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  cargoId?: Maybe<Scalars['Int']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  salesId?: Maybe<Scalars['Int']>;
  couponsUsed: Array<CouponsUsed>;
  user: User;
  saleUser?: Maybe<User>;
  shipmentAddress?: Maybe<Shipmentadr>;
  coupon?: Maybe<Coupon>;
  items: Array<OrderItem>;
  vendors: Array<OrderVendor>;
  cargo?: Maybe<Cargo>;
  comments: Array<OrderComment>;
  totalPrice?: Maybe<Scalars['Float']>;
};


export type OrderCouponsUsedArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CouponsUsedWhereUniqueInput>;
};


export type OrderItemsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderItemWhereUniqueInput>;
};


export type OrderVendorsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderVendorWhereUniqueInput>;
};


export type OrderCommentsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderCommentWhereUniqueInput>;
};

export type OrderComment = {
  __typename?: 'OrderComment';
  id: Scalars['Int'];
  orderId: Scalars['Int'];
  commenterId: Scalars['Int'];
  vendorId: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  order: Order;
};

export type OrderCommentCreateManyOrderInput = {
  id?: Maybe<Scalars['Int']>;
  commenterId?: Maybe<Scalars['Int']>;
  vendorId?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type OrderCommentCreateManyOrderInputEnvelope = {
  data?: Maybe<Array<OrderCommentCreateManyOrderInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderCommentCreateNestedManyWithoutOrderInput = {
  create?: Maybe<Array<OrderCommentCreateWithoutOrderInput>>;
  connectOrCreate?: Maybe<Array<OrderCommentCreateOrConnectWithoutOrderInput>>;
  createMany?: Maybe<OrderCommentCreateManyOrderInputEnvelope>;
  connect?: Maybe<Array<OrderCommentWhereUniqueInput>>;
};

export type OrderCommentCreateOrConnectWithoutOrderInput = {
  where: OrderCommentWhereUniqueInput;
  create: OrderCommentCreateWithoutOrderInput;
};

export type OrderCommentCreateWithoutOrderInput = {
  commenterId?: Maybe<Scalars['Int']>;
  vendorId?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type OrderCommentListRelationFilter = {
  every?: Maybe<OrderCommentWhereInput>;
  some?: Maybe<OrderCommentWhereInput>;
  none?: Maybe<OrderCommentWhereInput>;
};

export type OrderCommentScalarWhereInput = {
  AND?: Maybe<Array<OrderCommentScalarWhereInput>>;
  OR?: Maybe<Array<OrderCommentScalarWhereInput>>;
  NOT?: Maybe<Array<OrderCommentScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  orderId?: Maybe<IntFilter>;
  commenterId?: Maybe<IntFilter>;
  vendorId?: Maybe<IntFilter>;
  comment?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type OrderCommentUpdateManyMutationInput = {
  commenterId?: Maybe<IntFieldUpdateOperationsInput>;
  vendorId?: Maybe<IntFieldUpdateOperationsInput>;
  comment?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type OrderCommentUpdateManyWithWhereWithoutOrderInput = {
  where: OrderCommentScalarWhereInput;
  data: OrderCommentUpdateManyMutationInput;
};

export type OrderCommentUpdateManyWithoutOrderInput = {
  create?: Maybe<Array<OrderCommentCreateWithoutOrderInput>>;
  connectOrCreate?: Maybe<Array<OrderCommentCreateOrConnectWithoutOrderInput>>;
  upsert?: Maybe<Array<OrderCommentUpsertWithWhereUniqueWithoutOrderInput>>;
  createMany?: Maybe<OrderCommentCreateManyOrderInputEnvelope>;
  connect?: Maybe<Array<OrderCommentWhereUniqueInput>>;
  set?: Maybe<Array<OrderCommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderCommentWhereUniqueInput>>;
  delete?: Maybe<Array<OrderCommentWhereUniqueInput>>;
  update?: Maybe<Array<OrderCommentUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: Maybe<Array<OrderCommentUpdateManyWithWhereWithoutOrderInput>>;
  deleteMany?: Maybe<Array<OrderCommentScalarWhereInput>>;
};

export type OrderCommentUpdateWithWhereUniqueWithoutOrderInput = {
  where: OrderCommentWhereUniqueInput;
  data: OrderCommentUpdateWithoutOrderInput;
};

export type OrderCommentUpdateWithoutOrderInput = {
  commenterId?: Maybe<IntFieldUpdateOperationsInput>;
  vendorId?: Maybe<IntFieldUpdateOperationsInput>;
  comment?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type OrderCommentUpsertWithWhereUniqueWithoutOrderInput = {
  where: OrderCommentWhereUniqueInput;
  update: OrderCommentUpdateWithoutOrderInput;
  create: OrderCommentCreateWithoutOrderInput;
};

export type OrderCommentWhereInput = {
  AND?: Maybe<Array<OrderCommentWhereInput>>;
  OR?: Maybe<Array<OrderCommentWhereInput>>;
  NOT?: Maybe<Array<OrderCommentWhereInput>>;
  id?: Maybe<IntFilter>;
  orderId?: Maybe<IntFilter>;
  commenterId?: Maybe<IntFilter>;
  vendorId?: Maybe<IntFilter>;
  comment?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  order?: Maybe<OrderWhereInput>;
};

export type OrderCommentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type OrderCreateInput = {
  userCredit?: Maybe<Scalars['Float']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  couponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutOrderInput>;
  user?: Maybe<UserCreateNestedOneWithoutOrdersInput>;
  saleUser?: Maybe<UserCreateNestedOneWithoutSalesOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrCreateNestedOneWithoutOrdersInput>;
  coupon?: Maybe<CouponCreateNestedOneWithoutOrdersInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutOrderInput>;
  vendors?: Maybe<OrderVendorCreateNestedManyWithoutOrderInput>;
  cargo?: Maybe<CargoCreateNestedOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentCreateNestedManyWithoutOrderInput>;
};

export type OrderCreateManyCargoInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userCredit?: Maybe<Scalars['Float']>;
  shipmentAdrsId?: Maybe<Scalars['Int']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  couponId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  salesId?: Maybe<Scalars['Int']>;
};

export type OrderCreateManyCargoInputEnvelope = {
  data?: Maybe<Array<OrderCreateManyCargoInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderCreateManyCouponInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userCredit?: Maybe<Scalars['Float']>;
  shipmentAdrsId?: Maybe<Scalars['Int']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  cargoId?: Maybe<Scalars['Int']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  salesId?: Maybe<Scalars['Int']>;
};

export type OrderCreateManyCouponInputEnvelope = {
  data?: Maybe<Array<OrderCreateManyCouponInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderCreateManySaleUserInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userCredit?: Maybe<Scalars['Float']>;
  shipmentAdrsId?: Maybe<Scalars['Int']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  couponId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  cargoId?: Maybe<Scalars['Int']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
};

export type OrderCreateManySaleUserInputEnvelope = {
  data?: Maybe<Array<OrderCreateManySaleUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderCreateManyShipmentAddressInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userCredit?: Maybe<Scalars['Float']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  couponId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  cargoId?: Maybe<Scalars['Int']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  salesId?: Maybe<Scalars['Int']>;
};

export type OrderCreateManyShipmentAddressInputEnvelope = {
  data?: Maybe<Array<OrderCreateManyShipmentAddressInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderCreateManyUserInput = {
  id?: Maybe<Scalars['Int']>;
  userCredit?: Maybe<Scalars['Float']>;
  shipmentAdrsId?: Maybe<Scalars['Int']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  couponId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  cargoId?: Maybe<Scalars['Int']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  salesId?: Maybe<Scalars['Int']>;
};

export type OrderCreateManyUserInputEnvelope = {
  data?: Maybe<Array<OrderCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderCreateNestedManyWithoutCargoInput = {
  create?: Maybe<Array<OrderCreateWithoutCargoInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutCargoInput>>;
  createMany?: Maybe<OrderCreateManyCargoInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderCreateNestedManyWithoutCouponInput = {
  create?: Maybe<Array<OrderCreateWithoutCouponInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutCouponInput>>;
  createMany?: Maybe<OrderCreateManyCouponInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderCreateNestedManyWithoutSaleUserInput = {
  create?: Maybe<Array<OrderCreateWithoutSaleUserInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutSaleUserInput>>;
  createMany?: Maybe<OrderCreateManySaleUserInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderCreateNestedManyWithoutShipmentAddressInput = {
  create?: Maybe<Array<OrderCreateWithoutShipmentAddressInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutShipmentAddressInput>>;
  createMany?: Maybe<OrderCreateManyShipmentAddressInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<OrderCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<OrderCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
};

export type OrderCreateNestedOneWithoutCouponsUsedInput = {
  create?: Maybe<OrderCreateWithoutCouponsUsedInput>;
  connectOrCreate?: Maybe<OrderCreateOrConnectWithoutCouponsUsedInput>;
  connect?: Maybe<OrderWhereUniqueInput>;
};

export type OrderCreateNestedOneWithoutItemsInput = {
  create?: Maybe<OrderCreateWithoutItemsInput>;
  connectOrCreate?: Maybe<OrderCreateOrConnectWithoutItemsInput>;
  connect?: Maybe<OrderWhereUniqueInput>;
};

export type OrderCreateNestedOneWithoutVendorsInput = {
  create?: Maybe<OrderCreateWithoutVendorsInput>;
  connectOrCreate?: Maybe<OrderCreateOrConnectWithoutVendorsInput>;
  connect?: Maybe<OrderWhereUniqueInput>;
};

export type OrderCreateOrConnectWithoutCargoInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutCargoInput;
};

export type OrderCreateOrConnectWithoutCouponInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutCouponInput;
};

export type OrderCreateOrConnectWithoutCouponsUsedInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutCouponsUsedInput;
};

export type OrderCreateOrConnectWithoutItemsInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutItemsInput;
};

export type OrderCreateOrConnectWithoutSaleUserInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutSaleUserInput;
};

export type OrderCreateOrConnectWithoutShipmentAddressInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutShipmentAddressInput;
};

export type OrderCreateOrConnectWithoutUserInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutUserInput;
};

export type OrderCreateOrConnectWithoutVendorsInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutVendorsInput;
};

export type OrderCreateWithoutCargoInput = {
  userCredit?: Maybe<Scalars['Float']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  couponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutOrderInput>;
  user?: Maybe<UserCreateNestedOneWithoutOrdersInput>;
  saleUser?: Maybe<UserCreateNestedOneWithoutSalesOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrCreateNestedOneWithoutOrdersInput>;
  coupon?: Maybe<CouponCreateNestedOneWithoutOrdersInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutOrderInput>;
  vendors?: Maybe<OrderVendorCreateNestedManyWithoutOrderInput>;
  comments?: Maybe<OrderCommentCreateNestedManyWithoutOrderInput>;
};

export type OrderCreateWithoutCouponInput = {
  userCredit?: Maybe<Scalars['Float']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  couponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutOrderInput>;
  user?: Maybe<UserCreateNestedOneWithoutOrdersInput>;
  saleUser?: Maybe<UserCreateNestedOneWithoutSalesOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrCreateNestedOneWithoutOrdersInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutOrderInput>;
  vendors?: Maybe<OrderVendorCreateNestedManyWithoutOrderInput>;
  cargo?: Maybe<CargoCreateNestedOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentCreateNestedManyWithoutOrderInput>;
};

export type OrderCreateWithoutCouponsUsedInput = {
  userCredit?: Maybe<Scalars['Float']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  user?: Maybe<UserCreateNestedOneWithoutOrdersInput>;
  saleUser?: Maybe<UserCreateNestedOneWithoutSalesOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrCreateNestedOneWithoutOrdersInput>;
  coupon?: Maybe<CouponCreateNestedOneWithoutOrdersInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutOrderInput>;
  vendors?: Maybe<OrderVendorCreateNestedManyWithoutOrderInput>;
  cargo?: Maybe<CargoCreateNestedOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentCreateNestedManyWithoutOrderInput>;
};

export type OrderCreateWithoutItemsInput = {
  userCredit?: Maybe<Scalars['Float']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  couponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutOrderInput>;
  user?: Maybe<UserCreateNestedOneWithoutOrdersInput>;
  saleUser?: Maybe<UserCreateNestedOneWithoutSalesOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrCreateNestedOneWithoutOrdersInput>;
  coupon?: Maybe<CouponCreateNestedOneWithoutOrdersInput>;
  vendors?: Maybe<OrderVendorCreateNestedManyWithoutOrderInput>;
  cargo?: Maybe<CargoCreateNestedOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentCreateNestedManyWithoutOrderInput>;
};

export type OrderCreateWithoutSaleUserInput = {
  userCredit?: Maybe<Scalars['Float']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  couponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutOrderInput>;
  user?: Maybe<UserCreateNestedOneWithoutOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrCreateNestedOneWithoutOrdersInput>;
  coupon?: Maybe<CouponCreateNestedOneWithoutOrdersInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutOrderInput>;
  vendors?: Maybe<OrderVendorCreateNestedManyWithoutOrderInput>;
  cargo?: Maybe<CargoCreateNestedOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentCreateNestedManyWithoutOrderInput>;
};

export type OrderCreateWithoutShipmentAddressInput = {
  userCredit?: Maybe<Scalars['Float']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  couponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutOrderInput>;
  user?: Maybe<UserCreateNestedOneWithoutOrdersInput>;
  saleUser?: Maybe<UserCreateNestedOneWithoutSalesOrdersInput>;
  coupon?: Maybe<CouponCreateNestedOneWithoutOrdersInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutOrderInput>;
  vendors?: Maybe<OrderVendorCreateNestedManyWithoutOrderInput>;
  cargo?: Maybe<CargoCreateNestedOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentCreateNestedManyWithoutOrderInput>;
};

export type OrderCreateWithoutUserInput = {
  userCredit?: Maybe<Scalars['Float']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  couponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutOrderInput>;
  saleUser?: Maybe<UserCreateNestedOneWithoutSalesOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrCreateNestedOneWithoutOrdersInput>;
  coupon?: Maybe<CouponCreateNestedOneWithoutOrdersInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutOrderInput>;
  vendors?: Maybe<OrderVendorCreateNestedManyWithoutOrderInput>;
  cargo?: Maybe<CargoCreateNestedOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentCreateNestedManyWithoutOrderInput>;
};

export type OrderCreateWithoutVendorsInput = {
  userCredit?: Maybe<Scalars['Float']>;
  paymentStatus?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  shippingMethod?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  couponDiscountValue?: Maybe<Scalars['Float']>;
  shippingCost?: Maybe<Scalars['Float']>;
  adminNote?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  couponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutOrderInput>;
  user?: Maybe<UserCreateNestedOneWithoutOrdersInput>;
  saleUser?: Maybe<UserCreateNestedOneWithoutSalesOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrCreateNestedOneWithoutOrdersInput>;
  coupon?: Maybe<CouponCreateNestedOneWithoutOrdersInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutOrderInput>;
  cargo?: Maybe<CargoCreateNestedOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentCreateNestedManyWithoutOrderInput>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['Int'];
  orderId: Scalars['Int'];
  productId: Scalars['Int'];
  variationId: Scalars['Int'];
  optionId: Scalars['Int'];
  regularPrice: Scalars['Float'];
  salePrice: Scalars['Float'];
  quantity: Scalars['Int'];
  sku?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendorId: Scalars['Int'];
  isDeleted: Scalars['Int'];
  order: Order;
  product: Product;
  vendor: User;
  orderVendor?: Maybe<OrderVendor>;
  images: Array<ProductFile>;
};


export type OrderItemImagesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductFileWhereUniqueInput>;
};

export type OrderItemCreateManyOrderInput = {
  id?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  variationId?: Maybe<Scalars['Int']>;
  optionId?: Maybe<Scalars['Int']>;
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendorId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
};

export type OrderItemCreateManyOrderInputEnvelope = {
  data?: Maybe<Array<OrderItemCreateManyOrderInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderItemCreateManyOrderVendorInput = {
  id?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  variationId?: Maybe<Scalars['Int']>;
  optionId?: Maybe<Scalars['Int']>;
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendorId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
};

export type OrderItemCreateManyOrderVendorInputEnvelope = {
  data?: Maybe<Array<OrderItemCreateManyOrderVendorInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderItemCreateManyProductInput = {
  id?: Maybe<Scalars['Int']>;
  orderId: Scalars['Int'];
  variationId?: Maybe<Scalars['Int']>;
  optionId?: Maybe<Scalars['Int']>;
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendorId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
};

export type OrderItemCreateManyProductInputEnvelope = {
  data?: Maybe<Array<OrderItemCreateManyProductInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderItemCreateManyVendorInput = {
  id?: Maybe<Scalars['Int']>;
  orderId: Scalars['Int'];
  productId?: Maybe<Scalars['Int']>;
  variationId?: Maybe<Scalars['Int']>;
  optionId?: Maybe<Scalars['Int']>;
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Int']>;
};

export type OrderItemCreateManyVendorInputEnvelope = {
  data?: Maybe<Array<OrderItemCreateManyVendorInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderItemCreateNestedManyWithoutOrderInput = {
  create?: Maybe<Array<OrderItemCreateWithoutOrderInput>>;
  connectOrCreate?: Maybe<Array<OrderItemCreateOrConnectWithoutOrderInput>>;
  createMany?: Maybe<OrderItemCreateManyOrderInputEnvelope>;
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
};

export type OrderItemCreateNestedManyWithoutOrderVendorInput = {
  create?: Maybe<Array<OrderItemCreateWithoutOrderVendorInput>>;
  connectOrCreate?: Maybe<Array<OrderItemCreateOrConnectWithoutOrderVendorInput>>;
  createMany?: Maybe<OrderItemCreateManyOrderVendorInputEnvelope>;
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
};

export type OrderItemCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<OrderItemCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<OrderItemCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<OrderItemCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
};

export type OrderItemCreateNestedManyWithoutVendorInput = {
  create?: Maybe<Array<OrderItemCreateWithoutVendorInput>>;
  connectOrCreate?: Maybe<Array<OrderItemCreateOrConnectWithoutVendorInput>>;
  createMany?: Maybe<OrderItemCreateManyVendorInputEnvelope>;
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
};

export type OrderItemCreateNestedOneWithoutImagesInput = {
  create?: Maybe<OrderItemCreateWithoutImagesInput>;
  connectOrCreate?: Maybe<OrderItemCreateOrConnectWithoutImagesInput>;
  connect?: Maybe<OrderItemWhereUniqueInput>;
};

export type OrderItemCreateOrConnectWithoutImagesInput = {
  where: OrderItemWhereUniqueInput;
  create: OrderItemCreateWithoutImagesInput;
};

export type OrderItemCreateOrConnectWithoutOrderInput = {
  where: OrderItemWhereUniqueInput;
  create: OrderItemCreateWithoutOrderInput;
};

export type OrderItemCreateOrConnectWithoutOrderVendorInput = {
  where: OrderItemWhereUniqueInput;
  create: OrderItemCreateWithoutOrderVendorInput;
};

export type OrderItemCreateOrConnectWithoutProductInput = {
  where: OrderItemWhereUniqueInput;
  create: OrderItemCreateWithoutProductInput;
};

export type OrderItemCreateOrConnectWithoutVendorInput = {
  where: OrderItemWhereUniqueInput;
  create: OrderItemCreateWithoutVendorInput;
};

export type OrderItemCreateWithoutImagesInput = {
  variationId?: Maybe<Scalars['Int']>;
  optionId?: Maybe<Scalars['Int']>;
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Int']>;
  order: OrderCreateNestedOneWithoutItemsInput;
  product?: Maybe<ProductCreateNestedOneWithoutItemsInput>;
  vendor?: Maybe<UserCreateNestedOneWithoutOrderItemsInput>;
  orderVendor?: Maybe<OrderVendorCreateNestedOneWithoutItemsInput>;
};

export type OrderItemCreateWithoutOrderInput = {
  variationId?: Maybe<Scalars['Int']>;
  optionId?: Maybe<Scalars['Int']>;
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductCreateNestedOneWithoutItemsInput>;
  vendor?: Maybe<UserCreateNestedOneWithoutOrderItemsInput>;
  orderVendor?: Maybe<OrderVendorCreateNestedOneWithoutItemsInput>;
  images?: Maybe<ProductFileCreateNestedManyWithoutOrdersItemInput>;
};

export type OrderItemCreateWithoutOrderVendorInput = {
  variationId?: Maybe<Scalars['Int']>;
  optionId?: Maybe<Scalars['Int']>;
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Int']>;
  order: OrderCreateNestedOneWithoutItemsInput;
  product?: Maybe<ProductCreateNestedOneWithoutItemsInput>;
  vendor?: Maybe<UserCreateNestedOneWithoutOrderItemsInput>;
  images?: Maybe<ProductFileCreateNestedManyWithoutOrdersItemInput>;
};

export type OrderItemCreateWithoutProductInput = {
  variationId?: Maybe<Scalars['Int']>;
  optionId?: Maybe<Scalars['Int']>;
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Int']>;
  order: OrderCreateNestedOneWithoutItemsInput;
  vendor?: Maybe<UserCreateNestedOneWithoutOrderItemsInput>;
  orderVendor?: Maybe<OrderVendorCreateNestedOneWithoutItemsInput>;
  images?: Maybe<ProductFileCreateNestedManyWithoutOrdersItemInput>;
};

export type OrderItemCreateWithoutVendorInput = {
  variationId?: Maybe<Scalars['Int']>;
  optionId?: Maybe<Scalars['Int']>;
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Int']>;
  order: OrderCreateNestedOneWithoutItemsInput;
  product?: Maybe<ProductCreateNestedOneWithoutItemsInput>;
  orderVendor?: Maybe<OrderVendorCreateNestedOneWithoutItemsInput>;
  images?: Maybe<ProductFileCreateNestedManyWithoutOrdersItemInput>;
};

export type OrderItemListRelationFilter = {
  every?: Maybe<OrderItemWhereInput>;
  some?: Maybe<OrderItemWhereInput>;
  none?: Maybe<OrderItemWhereInput>;
};

export type OrderItemScalarWhereInput = {
  AND?: Maybe<Array<OrderItemScalarWhereInput>>;
  OR?: Maybe<Array<OrderItemScalarWhereInput>>;
  NOT?: Maybe<Array<OrderItemScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  orderId?: Maybe<IntFilter>;
  productId?: Maybe<IntFilter>;
  variationId?: Maybe<IntFilter>;
  optionId?: Maybe<IntFilter>;
  regularPrice?: Maybe<FloatFilter>;
  salePrice?: Maybe<FloatFilter>;
  quantity?: Maybe<IntFilter>;
  sku?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  vendorId?: Maybe<IntFilter>;
  isDeleted?: Maybe<IntFilter>;
};

export type OrderItemUpdateManyMutationInput = {
  variationId?: Maybe<IntFieldUpdateOperationsInput>;
  optionId?: Maybe<IntFieldUpdateOperationsInput>;
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
};

export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
  where: OrderItemScalarWhereInput;
  data: OrderItemUpdateManyMutationInput;
};

export type OrderItemUpdateManyWithWhereWithoutOrderVendorInput = {
  where: OrderItemScalarWhereInput;
  data: OrderItemUpdateManyMutationInput;
};

export type OrderItemUpdateManyWithWhereWithoutProductInput = {
  where: OrderItemScalarWhereInput;
  data: OrderItemUpdateManyMutationInput;
};

export type OrderItemUpdateManyWithWhereWithoutVendorInput = {
  where: OrderItemScalarWhereInput;
  data: OrderItemUpdateManyMutationInput;
};

export type OrderItemUpdateManyWithoutOrderInput = {
  create?: Maybe<Array<OrderItemCreateWithoutOrderInput>>;
  connectOrCreate?: Maybe<Array<OrderItemCreateOrConnectWithoutOrderInput>>;
  upsert?: Maybe<Array<OrderItemUpsertWithWhereUniqueWithoutOrderInput>>;
  createMany?: Maybe<OrderItemCreateManyOrderInputEnvelope>;
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  set?: Maybe<Array<OrderItemWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  delete?: Maybe<Array<OrderItemWhereUniqueInput>>;
  update?: Maybe<Array<OrderItemUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: Maybe<Array<OrderItemUpdateManyWithWhereWithoutOrderInput>>;
  deleteMany?: Maybe<Array<OrderItemScalarWhereInput>>;
};

export type OrderItemUpdateManyWithoutOrderVendorInput = {
  create?: Maybe<Array<OrderItemCreateWithoutOrderVendorInput>>;
  connectOrCreate?: Maybe<Array<OrderItemCreateOrConnectWithoutOrderVendorInput>>;
  upsert?: Maybe<Array<OrderItemUpsertWithWhereUniqueWithoutOrderVendorInput>>;
  createMany?: Maybe<OrderItemCreateManyOrderVendorInputEnvelope>;
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  set?: Maybe<Array<OrderItemWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  delete?: Maybe<Array<OrderItemWhereUniqueInput>>;
  update?: Maybe<Array<OrderItemUpdateWithWhereUniqueWithoutOrderVendorInput>>;
  updateMany?: Maybe<Array<OrderItemUpdateManyWithWhereWithoutOrderVendorInput>>;
  deleteMany?: Maybe<Array<OrderItemScalarWhereInput>>;
};

export type OrderItemUpdateManyWithoutProductInput = {
  create?: Maybe<Array<OrderItemCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<OrderItemCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<OrderItemUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<OrderItemCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  set?: Maybe<Array<OrderItemWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  delete?: Maybe<Array<OrderItemWhereUniqueInput>>;
  update?: Maybe<Array<OrderItemUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<OrderItemUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<OrderItemScalarWhereInput>>;
};

export type OrderItemUpdateManyWithoutVendorInput = {
  create?: Maybe<Array<OrderItemCreateWithoutVendorInput>>;
  connectOrCreate?: Maybe<Array<OrderItemCreateOrConnectWithoutVendorInput>>;
  upsert?: Maybe<Array<OrderItemUpsertWithWhereUniqueWithoutVendorInput>>;
  createMany?: Maybe<OrderItemCreateManyVendorInputEnvelope>;
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  set?: Maybe<Array<OrderItemWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  delete?: Maybe<Array<OrderItemWhereUniqueInput>>;
  update?: Maybe<Array<OrderItemUpdateWithWhereUniqueWithoutVendorInput>>;
  updateMany?: Maybe<Array<OrderItemUpdateManyWithWhereWithoutVendorInput>>;
  deleteMany?: Maybe<Array<OrderItemScalarWhereInput>>;
};

export type OrderItemUpdateOneWithoutImagesInput = {
  create?: Maybe<OrderItemCreateWithoutImagesInput>;
  connectOrCreate?: Maybe<OrderItemCreateOrConnectWithoutImagesInput>;
  upsert?: Maybe<OrderItemUpsertWithoutImagesInput>;
  connect?: Maybe<OrderItemWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<OrderItemUpdateWithoutImagesInput>;
};

export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
  where: OrderItemWhereUniqueInput;
  data: OrderItemUpdateWithoutOrderInput;
};

export type OrderItemUpdateWithWhereUniqueWithoutOrderVendorInput = {
  where: OrderItemWhereUniqueInput;
  data: OrderItemUpdateWithoutOrderVendorInput;
};

export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
  where: OrderItemWhereUniqueInput;
  data: OrderItemUpdateWithoutProductInput;
};

export type OrderItemUpdateWithWhereUniqueWithoutVendorInput = {
  where: OrderItemWhereUniqueInput;
  data: OrderItemUpdateWithoutVendorInput;
};

export type OrderItemUpdateWithoutImagesInput = {
  variationId?: Maybe<IntFieldUpdateOperationsInput>;
  optionId?: Maybe<IntFieldUpdateOperationsInput>;
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  order?: Maybe<OrderUpdateOneRequiredWithoutItemsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutItemsInput>;
  vendor?: Maybe<UserUpdateOneRequiredWithoutOrderItemsInput>;
  orderVendor?: Maybe<OrderVendorUpdateOneWithoutItemsInput>;
};

export type OrderItemUpdateWithoutOrderInput = {
  variationId?: Maybe<IntFieldUpdateOperationsInput>;
  optionId?: Maybe<IntFieldUpdateOperationsInput>;
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutItemsInput>;
  vendor?: Maybe<UserUpdateOneRequiredWithoutOrderItemsInput>;
  orderVendor?: Maybe<OrderVendorUpdateOneWithoutItemsInput>;
  images?: Maybe<ProductFileUpdateManyWithoutOrdersItemInput>;
};

export type OrderItemUpdateWithoutOrderVendorInput = {
  variationId?: Maybe<IntFieldUpdateOperationsInput>;
  optionId?: Maybe<IntFieldUpdateOperationsInput>;
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  order?: Maybe<OrderUpdateOneRequiredWithoutItemsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutItemsInput>;
  vendor?: Maybe<UserUpdateOneRequiredWithoutOrderItemsInput>;
  images?: Maybe<ProductFileUpdateManyWithoutOrdersItemInput>;
};

export type OrderItemUpdateWithoutProductInput = {
  variationId?: Maybe<IntFieldUpdateOperationsInput>;
  optionId?: Maybe<IntFieldUpdateOperationsInput>;
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  order?: Maybe<OrderUpdateOneRequiredWithoutItemsInput>;
  vendor?: Maybe<UserUpdateOneRequiredWithoutOrderItemsInput>;
  orderVendor?: Maybe<OrderVendorUpdateOneWithoutItemsInput>;
  images?: Maybe<ProductFileUpdateManyWithoutOrdersItemInput>;
};

export type OrderItemUpdateWithoutVendorInput = {
  variationId?: Maybe<IntFieldUpdateOperationsInput>;
  optionId?: Maybe<IntFieldUpdateOperationsInput>;
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  order?: Maybe<OrderUpdateOneRequiredWithoutItemsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutItemsInput>;
  orderVendor?: Maybe<OrderVendorUpdateOneWithoutItemsInput>;
  images?: Maybe<ProductFileUpdateManyWithoutOrdersItemInput>;
};

export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
  where: OrderItemWhereUniqueInput;
  update: OrderItemUpdateWithoutOrderInput;
  create: OrderItemCreateWithoutOrderInput;
};

export type OrderItemUpsertWithWhereUniqueWithoutOrderVendorInput = {
  where: OrderItemWhereUniqueInput;
  update: OrderItemUpdateWithoutOrderVendorInput;
  create: OrderItemCreateWithoutOrderVendorInput;
};

export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
  where: OrderItemWhereUniqueInput;
  update: OrderItemUpdateWithoutProductInput;
  create: OrderItemCreateWithoutProductInput;
};

export type OrderItemUpsertWithWhereUniqueWithoutVendorInput = {
  where: OrderItemWhereUniqueInput;
  update: OrderItemUpdateWithoutVendorInput;
  create: OrderItemCreateWithoutVendorInput;
};

export type OrderItemUpsertWithoutImagesInput = {
  update: OrderItemUpdateWithoutImagesInput;
  create: OrderItemCreateWithoutImagesInput;
};

export type OrderItemWhereInput = {
  AND?: Maybe<Array<OrderItemWhereInput>>;
  OR?: Maybe<Array<OrderItemWhereInput>>;
  NOT?: Maybe<Array<OrderItemWhereInput>>;
  id?: Maybe<IntFilter>;
  orderId?: Maybe<IntFilter>;
  productId?: Maybe<IntFilter>;
  variationId?: Maybe<IntFilter>;
  optionId?: Maybe<IntFilter>;
  regularPrice?: Maybe<FloatFilter>;
  salePrice?: Maybe<FloatFilter>;
  quantity?: Maybe<IntFilter>;
  sku?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  vendorId?: Maybe<IntFilter>;
  isDeleted?: Maybe<IntFilter>;
  order?: Maybe<OrderWhereInput>;
  product?: Maybe<ProductWhereInput>;
  vendor?: Maybe<UserWhereInput>;
  orderVendor?: Maybe<OrderVendorWhereInput>;
  images?: Maybe<ProductFileListRelationFilter>;
};

export type OrderItemWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type OrderListRelationFilter = {
  every?: Maybe<OrderWhereInput>;
  some?: Maybe<OrderWhereInput>;
  none?: Maybe<OrderWhereInput>;
};

export type OrderOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  userCredit?: Maybe<SortOrder>;
  shipmentAdrsId?: Maybe<SortOrder>;
  paymentStatus?: Maybe<SortOrder>;
  paymentType?: Maybe<SortOrder>;
  notes?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
  shippingMethod?: Maybe<SortOrder>;
  courierId?: Maybe<SortOrder>;
  couponId?: Maybe<SortOrder>;
  isDeleted?: Maybe<SortOrder>;
  couponDiscountValue?: Maybe<SortOrder>;
  cargoId?: Maybe<SortOrder>;
  shippingCost?: Maybe<SortOrder>;
  adminNote?: Maybe<SortOrder>;
  paymentId?: Maybe<SortOrder>;
  salesId?: Maybe<SortOrder>;
};

export type OrderPayload = {
  __typename?: 'OrderPayload';
  id?: Maybe<Scalars['Int']>;
};

export type OrderScalarWhereInput = {
  AND?: Maybe<Array<OrderScalarWhereInput>>;
  OR?: Maybe<Array<OrderScalarWhereInput>>;
  NOT?: Maybe<Array<OrderScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
  userCredit?: Maybe<FloatNullableFilter>;
  shipmentAdrsId?: Maybe<IntNullableFilter>;
  paymentStatus?: Maybe<StringNullableFilter>;
  paymentType?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  shippingMethod?: Maybe<StringNullableFilter>;
  courierId?: Maybe<IntNullableFilter>;
  couponId?: Maybe<IntNullableFilter>;
  isDeleted?: Maybe<IntNullableFilter>;
  couponDiscountValue?: Maybe<FloatNullableFilter>;
  cargoId?: Maybe<IntNullableFilter>;
  shippingCost?: Maybe<FloatNullableFilter>;
  adminNote?: Maybe<StringNullableFilter>;
  paymentId?: Maybe<StringNullableFilter>;
  salesId?: Maybe<IntNullableFilter>;
};

export type OrderUpdateInput = {
  userCredit?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  paymentStatus?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  shippingMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  courierId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<NullableIntFieldUpdateOperationsInput>;
  couponDiscountValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  shippingCost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  adminNote?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  couponsUsed?: Maybe<CouponsUsedUpdateManyWithoutOrderInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>;
  saleUser?: Maybe<UserUpdateOneWithoutSalesOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrUpdateOneWithoutOrdersInput>;
  coupon?: Maybe<CouponUpdateOneWithoutOrdersInput>;
  items?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  vendors?: Maybe<OrderVendorUpdateManyWithoutOrderInput>;
  cargo?: Maybe<CargoUpdateOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentUpdateManyWithoutOrderInput>;
};

export type OrderUpdateManyMutationInput = {
  userCredit?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  paymentStatus?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  shippingMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  courierId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<NullableIntFieldUpdateOperationsInput>;
  couponDiscountValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  shippingCost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  adminNote?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type OrderUpdateManyWithWhereWithoutCargoInput = {
  where: OrderScalarWhereInput;
  data: OrderUpdateManyMutationInput;
};

export type OrderUpdateManyWithWhereWithoutCouponInput = {
  where: OrderScalarWhereInput;
  data: OrderUpdateManyMutationInput;
};

export type OrderUpdateManyWithWhereWithoutSaleUserInput = {
  where: OrderScalarWhereInput;
  data: OrderUpdateManyMutationInput;
};

export type OrderUpdateManyWithWhereWithoutShipmentAddressInput = {
  where: OrderScalarWhereInput;
  data: OrderUpdateManyMutationInput;
};

export type OrderUpdateManyWithWhereWithoutUserInput = {
  where: OrderScalarWhereInput;
  data: OrderUpdateManyMutationInput;
};

export type OrderUpdateManyWithoutCargoInput = {
  create?: Maybe<Array<OrderCreateWithoutCargoInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutCargoInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutCargoInput>>;
  createMany?: Maybe<OrderCreateManyCargoInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutCargoInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereWithoutCargoInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
};

export type OrderUpdateManyWithoutCouponInput = {
  create?: Maybe<Array<OrderCreateWithoutCouponInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutCouponInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutCouponInput>>;
  createMany?: Maybe<OrderCreateManyCouponInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutCouponInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereWithoutCouponInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
};

export type OrderUpdateManyWithoutSaleUserInput = {
  create?: Maybe<Array<OrderCreateWithoutSaleUserInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutSaleUserInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutSaleUserInput>>;
  createMany?: Maybe<OrderCreateManySaleUserInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutSaleUserInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereWithoutSaleUserInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
};

export type OrderUpdateManyWithoutShipmentAddressInput = {
  create?: Maybe<Array<OrderCreateWithoutShipmentAddressInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutShipmentAddressInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutShipmentAddressInput>>;
  createMany?: Maybe<OrderCreateManyShipmentAddressInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutShipmentAddressInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereWithoutShipmentAddressInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
};

export type OrderUpdateManyWithoutUserInput = {
  create?: Maybe<Array<OrderCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<OrderCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<OrderCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
};

export type OrderUpdateOneRequiredWithoutCouponsUsedInput = {
  create?: Maybe<OrderCreateWithoutCouponsUsedInput>;
  connectOrCreate?: Maybe<OrderCreateOrConnectWithoutCouponsUsedInput>;
  upsert?: Maybe<OrderUpsertWithoutCouponsUsedInput>;
  connect?: Maybe<OrderWhereUniqueInput>;
  update?: Maybe<OrderUpdateWithoutCouponsUsedInput>;
};

export type OrderUpdateOneRequiredWithoutItemsInput = {
  create?: Maybe<OrderCreateWithoutItemsInput>;
  connectOrCreate?: Maybe<OrderCreateOrConnectWithoutItemsInput>;
  upsert?: Maybe<OrderUpsertWithoutItemsInput>;
  connect?: Maybe<OrderWhereUniqueInput>;
  update?: Maybe<OrderUpdateWithoutItemsInput>;
};

export type OrderUpdateOneRequiredWithoutVendorsInput = {
  create?: Maybe<OrderCreateWithoutVendorsInput>;
  connectOrCreate?: Maybe<OrderCreateOrConnectWithoutVendorsInput>;
  upsert?: Maybe<OrderUpsertWithoutVendorsInput>;
  connect?: Maybe<OrderWhereUniqueInput>;
  update?: Maybe<OrderUpdateWithoutVendorsInput>;
};

export type OrderUpdateWithWhereUniqueWithoutCargoInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutCargoInput;
};

export type OrderUpdateWithWhereUniqueWithoutCouponInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutCouponInput;
};

export type OrderUpdateWithWhereUniqueWithoutSaleUserInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutSaleUserInput;
};

export type OrderUpdateWithWhereUniqueWithoutShipmentAddressInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutShipmentAddressInput;
};

export type OrderUpdateWithWhereUniqueWithoutUserInput = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutUserInput;
};

export type OrderUpdateWithoutCargoInput = {
  userCredit?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  paymentStatus?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  shippingMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  courierId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<NullableIntFieldUpdateOperationsInput>;
  couponDiscountValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  shippingCost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  adminNote?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  couponsUsed?: Maybe<CouponsUsedUpdateManyWithoutOrderInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>;
  saleUser?: Maybe<UserUpdateOneWithoutSalesOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrUpdateOneWithoutOrdersInput>;
  coupon?: Maybe<CouponUpdateOneWithoutOrdersInput>;
  items?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  vendors?: Maybe<OrderVendorUpdateManyWithoutOrderInput>;
  comments?: Maybe<OrderCommentUpdateManyWithoutOrderInput>;
};

export type OrderUpdateWithoutCouponInput = {
  userCredit?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  paymentStatus?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  shippingMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  courierId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<NullableIntFieldUpdateOperationsInput>;
  couponDiscountValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  shippingCost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  adminNote?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  couponsUsed?: Maybe<CouponsUsedUpdateManyWithoutOrderInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>;
  saleUser?: Maybe<UserUpdateOneWithoutSalesOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrUpdateOneWithoutOrdersInput>;
  items?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  vendors?: Maybe<OrderVendorUpdateManyWithoutOrderInput>;
  cargo?: Maybe<CargoUpdateOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentUpdateManyWithoutOrderInput>;
};

export type OrderUpdateWithoutCouponsUsedInput = {
  userCredit?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  paymentStatus?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  shippingMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  courierId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<NullableIntFieldUpdateOperationsInput>;
  couponDiscountValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  shippingCost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  adminNote?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>;
  saleUser?: Maybe<UserUpdateOneWithoutSalesOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrUpdateOneWithoutOrdersInput>;
  coupon?: Maybe<CouponUpdateOneWithoutOrdersInput>;
  items?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  vendors?: Maybe<OrderVendorUpdateManyWithoutOrderInput>;
  cargo?: Maybe<CargoUpdateOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentUpdateManyWithoutOrderInput>;
};

export type OrderUpdateWithoutItemsInput = {
  userCredit?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  paymentStatus?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  shippingMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  courierId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<NullableIntFieldUpdateOperationsInput>;
  couponDiscountValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  shippingCost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  adminNote?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  couponsUsed?: Maybe<CouponsUsedUpdateManyWithoutOrderInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>;
  saleUser?: Maybe<UserUpdateOneWithoutSalesOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrUpdateOneWithoutOrdersInput>;
  coupon?: Maybe<CouponUpdateOneWithoutOrdersInput>;
  vendors?: Maybe<OrderVendorUpdateManyWithoutOrderInput>;
  cargo?: Maybe<CargoUpdateOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentUpdateManyWithoutOrderInput>;
};

export type OrderUpdateWithoutSaleUserInput = {
  userCredit?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  paymentStatus?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  shippingMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  courierId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<NullableIntFieldUpdateOperationsInput>;
  couponDiscountValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  shippingCost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  adminNote?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  couponsUsed?: Maybe<CouponsUsedUpdateManyWithoutOrderInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrUpdateOneWithoutOrdersInput>;
  coupon?: Maybe<CouponUpdateOneWithoutOrdersInput>;
  items?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  vendors?: Maybe<OrderVendorUpdateManyWithoutOrderInput>;
  cargo?: Maybe<CargoUpdateOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentUpdateManyWithoutOrderInput>;
};

export type OrderUpdateWithoutShipmentAddressInput = {
  userCredit?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  paymentStatus?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  shippingMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  courierId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<NullableIntFieldUpdateOperationsInput>;
  couponDiscountValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  shippingCost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  adminNote?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  couponsUsed?: Maybe<CouponsUsedUpdateManyWithoutOrderInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>;
  saleUser?: Maybe<UserUpdateOneWithoutSalesOrdersInput>;
  coupon?: Maybe<CouponUpdateOneWithoutOrdersInput>;
  items?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  vendors?: Maybe<OrderVendorUpdateManyWithoutOrderInput>;
  cargo?: Maybe<CargoUpdateOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentUpdateManyWithoutOrderInput>;
};

export type OrderUpdateWithoutUserInput = {
  userCredit?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  paymentStatus?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  shippingMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  courierId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<NullableIntFieldUpdateOperationsInput>;
  couponDiscountValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  shippingCost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  adminNote?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  couponsUsed?: Maybe<CouponsUsedUpdateManyWithoutOrderInput>;
  saleUser?: Maybe<UserUpdateOneWithoutSalesOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrUpdateOneWithoutOrdersInput>;
  coupon?: Maybe<CouponUpdateOneWithoutOrdersInput>;
  items?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  vendors?: Maybe<OrderVendorUpdateManyWithoutOrderInput>;
  cargo?: Maybe<CargoUpdateOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentUpdateManyWithoutOrderInput>;
};

export type OrderUpdateWithoutVendorsInput = {
  userCredit?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  paymentStatus?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentType?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  shippingMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  courierId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<NullableIntFieldUpdateOperationsInput>;
  couponDiscountValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  shippingCost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  adminNote?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  couponsUsed?: Maybe<CouponsUsedUpdateManyWithoutOrderInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutOrdersInput>;
  saleUser?: Maybe<UserUpdateOneWithoutSalesOrdersInput>;
  shipmentAddress?: Maybe<ShipmentadrUpdateOneWithoutOrdersInput>;
  coupon?: Maybe<CouponUpdateOneWithoutOrdersInput>;
  items?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  cargo?: Maybe<CargoUpdateOneWithoutOrdersInput>;
  comments?: Maybe<OrderCommentUpdateManyWithoutOrderInput>;
};

export type OrderUpsertWithWhereUniqueWithoutCargoInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutCargoInput;
  create: OrderCreateWithoutCargoInput;
};

export type OrderUpsertWithWhereUniqueWithoutCouponInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutCouponInput;
  create: OrderCreateWithoutCouponInput;
};

export type OrderUpsertWithWhereUniqueWithoutSaleUserInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutSaleUserInput;
  create: OrderCreateWithoutSaleUserInput;
};

export type OrderUpsertWithWhereUniqueWithoutShipmentAddressInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutShipmentAddressInput;
  create: OrderCreateWithoutShipmentAddressInput;
};

export type OrderUpsertWithWhereUniqueWithoutUserInput = {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutUserInput;
  create: OrderCreateWithoutUserInput;
};

export type OrderUpsertWithoutCouponsUsedInput = {
  update: OrderUpdateWithoutCouponsUsedInput;
  create: OrderCreateWithoutCouponsUsedInput;
};

export type OrderUpsertWithoutItemsInput = {
  update: OrderUpdateWithoutItemsInput;
  create: OrderCreateWithoutItemsInput;
};

export type OrderUpsertWithoutVendorsInput = {
  update: OrderUpdateWithoutVendorsInput;
  create: OrderCreateWithoutVendorsInput;
};

export type OrderVendor = {
  __typename?: 'OrderVendor';
  userId: Scalars['Int'];
  orderId: Scalars['Int'];
  orderStatus?: Maybe<Scalars['String']>;
  vendor: User;
  order: Order;
  items: Array<OrderItem>;
};


export type OrderVendorItemsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderItemWhereUniqueInput>;
};

export type OrderVendorCreateManyOrderInput = {
  userId?: Maybe<Scalars['Int']>;
  orderStatus?: Maybe<Scalars['String']>;
};

export type OrderVendorCreateManyOrderInputEnvelope = {
  data?: Maybe<Array<OrderVendorCreateManyOrderInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderVendorCreateManyVendorInput = {
  orderId?: Maybe<Scalars['Int']>;
  orderStatus?: Maybe<Scalars['String']>;
};

export type OrderVendorCreateManyVendorInputEnvelope = {
  data?: Maybe<Array<OrderVendorCreateManyVendorInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type OrderVendorCreateNestedManyWithoutOrderInput = {
  create?: Maybe<Array<OrderVendorCreateWithoutOrderInput>>;
  connectOrCreate?: Maybe<Array<OrderVendorCreateOrConnectWithoutOrderInput>>;
  createMany?: Maybe<OrderVendorCreateManyOrderInputEnvelope>;
  connect?: Maybe<Array<OrderVendorWhereUniqueInput>>;
};

export type OrderVendorCreateNestedManyWithoutVendorInput = {
  create?: Maybe<Array<OrderVendorCreateWithoutVendorInput>>;
  connectOrCreate?: Maybe<Array<OrderVendorCreateOrConnectWithoutVendorInput>>;
  createMany?: Maybe<OrderVendorCreateManyVendorInputEnvelope>;
  connect?: Maybe<Array<OrderVendorWhereUniqueInput>>;
};

export type OrderVendorCreateNestedOneWithoutItemsInput = {
  create?: Maybe<OrderVendorCreateWithoutItemsInput>;
  connectOrCreate?: Maybe<OrderVendorCreateOrConnectWithoutItemsInput>;
  connect?: Maybe<OrderVendorWhereUniqueInput>;
};

export type OrderVendorCreateOrConnectWithoutItemsInput = {
  where: OrderVendorWhereUniqueInput;
  create: OrderVendorCreateWithoutItemsInput;
};

export type OrderVendorCreateOrConnectWithoutOrderInput = {
  where: OrderVendorWhereUniqueInput;
  create: OrderVendorCreateWithoutOrderInput;
};

export type OrderVendorCreateOrConnectWithoutVendorInput = {
  where: OrderVendorWhereUniqueInput;
  create: OrderVendorCreateWithoutVendorInput;
};

export type OrderVendorCreateWithoutItemsInput = {
  orderStatus?: Maybe<Scalars['String']>;
  vendor?: Maybe<UserCreateNestedOneWithoutOrderVendorsInput>;
  order?: Maybe<OrderCreateNestedOneWithoutVendorsInput>;
};

export type OrderVendorCreateWithoutOrderInput = {
  orderStatus?: Maybe<Scalars['String']>;
  vendor?: Maybe<UserCreateNestedOneWithoutOrderVendorsInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutOrderVendorInput>;
};

export type OrderVendorCreateWithoutVendorInput = {
  orderStatus?: Maybe<Scalars['String']>;
  order?: Maybe<OrderCreateNestedOneWithoutVendorsInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutOrderVendorInput>;
};

export type OrderVendorListRelationFilter = {
  every?: Maybe<OrderVendorWhereInput>;
  some?: Maybe<OrderVendorWhereInput>;
  none?: Maybe<OrderVendorWhereInput>;
};

export type OrderVendorScalarWhereInput = {
  AND?: Maybe<Array<OrderVendorScalarWhereInput>>;
  OR?: Maybe<Array<OrderVendorScalarWhereInput>>;
  NOT?: Maybe<Array<OrderVendorScalarWhereInput>>;
  userId?: Maybe<IntFilter>;
  orderId?: Maybe<IntFilter>;
  orderStatus?: Maybe<StringNullableFilter>;
};

export type OrderVendorUpdateManyMutationInput = {
  orderStatus?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type OrderVendorUpdateManyWithWhereWithoutOrderInput = {
  where: OrderVendorScalarWhereInput;
  data: OrderVendorUpdateManyMutationInput;
};

export type OrderVendorUpdateManyWithWhereWithoutVendorInput = {
  where: OrderVendorScalarWhereInput;
  data: OrderVendorUpdateManyMutationInput;
};

export type OrderVendorUpdateManyWithoutOrderInput = {
  create?: Maybe<Array<OrderVendorCreateWithoutOrderInput>>;
  connectOrCreate?: Maybe<Array<OrderVendorCreateOrConnectWithoutOrderInput>>;
  upsert?: Maybe<Array<OrderVendorUpsertWithWhereUniqueWithoutOrderInput>>;
  createMany?: Maybe<OrderVendorCreateManyOrderInputEnvelope>;
  connect?: Maybe<Array<OrderVendorWhereUniqueInput>>;
  set?: Maybe<Array<OrderVendorWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderVendorWhereUniqueInput>>;
  delete?: Maybe<Array<OrderVendorWhereUniqueInput>>;
  update?: Maybe<Array<OrderVendorUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: Maybe<Array<OrderVendorUpdateManyWithWhereWithoutOrderInput>>;
  deleteMany?: Maybe<Array<OrderVendorScalarWhereInput>>;
};

export type OrderVendorUpdateManyWithoutVendorInput = {
  create?: Maybe<Array<OrderVendorCreateWithoutVendorInput>>;
  connectOrCreate?: Maybe<Array<OrderVendorCreateOrConnectWithoutVendorInput>>;
  upsert?: Maybe<Array<OrderVendorUpsertWithWhereUniqueWithoutVendorInput>>;
  createMany?: Maybe<OrderVendorCreateManyVendorInputEnvelope>;
  connect?: Maybe<Array<OrderVendorWhereUniqueInput>>;
  set?: Maybe<Array<OrderVendorWhereUniqueInput>>;
  disconnect?: Maybe<Array<OrderVendorWhereUniqueInput>>;
  delete?: Maybe<Array<OrderVendorWhereUniqueInput>>;
  update?: Maybe<Array<OrderVendorUpdateWithWhereUniqueWithoutVendorInput>>;
  updateMany?: Maybe<Array<OrderVendorUpdateManyWithWhereWithoutVendorInput>>;
  deleteMany?: Maybe<Array<OrderVendorScalarWhereInput>>;
};

export type OrderVendorUpdateOneWithoutItemsInput = {
  create?: Maybe<OrderVendorCreateWithoutItemsInput>;
  connectOrCreate?: Maybe<OrderVendorCreateOrConnectWithoutItemsInput>;
  upsert?: Maybe<OrderVendorUpsertWithoutItemsInput>;
  connect?: Maybe<OrderVendorWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<OrderVendorUpdateWithoutItemsInput>;
};

export type OrderVendorUpdateWithWhereUniqueWithoutOrderInput = {
  where: OrderVendorWhereUniqueInput;
  data: OrderVendorUpdateWithoutOrderInput;
};

export type OrderVendorUpdateWithWhereUniqueWithoutVendorInput = {
  where: OrderVendorWhereUniqueInput;
  data: OrderVendorUpdateWithoutVendorInput;
};

export type OrderVendorUpdateWithoutItemsInput = {
  orderStatus?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneRequiredWithoutOrderVendorsInput>;
  order?: Maybe<OrderUpdateOneRequiredWithoutVendorsInput>;
};

export type OrderVendorUpdateWithoutOrderInput = {
  orderStatus?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneRequiredWithoutOrderVendorsInput>;
  items?: Maybe<OrderItemUpdateManyWithoutOrderVendorInput>;
};

export type OrderVendorUpdateWithoutVendorInput = {
  orderStatus?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<OrderUpdateOneRequiredWithoutVendorsInput>;
  items?: Maybe<OrderItemUpdateManyWithoutOrderVendorInput>;
};

export type OrderVendorUpsertWithWhereUniqueWithoutOrderInput = {
  where: OrderVendorWhereUniqueInput;
  update: OrderVendorUpdateWithoutOrderInput;
  create: OrderVendorCreateWithoutOrderInput;
};

export type OrderVendorUpsertWithWhereUniqueWithoutVendorInput = {
  where: OrderVendorWhereUniqueInput;
  update: OrderVendorUpdateWithoutVendorInput;
  create: OrderVendorCreateWithoutVendorInput;
};

export type OrderVendorUpsertWithoutItemsInput = {
  update: OrderVendorUpdateWithoutItemsInput;
  create: OrderVendorCreateWithoutItemsInput;
};

export type OrderVendorUserIdOrderIdCompoundUniqueInput = {
  userId: Scalars['Int'];
  orderId: Scalars['Int'];
};

export type OrderVendorWhereInput = {
  AND?: Maybe<Array<OrderVendorWhereInput>>;
  OR?: Maybe<Array<OrderVendorWhereInput>>;
  NOT?: Maybe<Array<OrderVendorWhereInput>>;
  userId?: Maybe<IntFilter>;
  orderId?: Maybe<IntFilter>;
  orderStatus?: Maybe<StringNullableFilter>;
  vendor?: Maybe<UserWhereInput>;
  order?: Maybe<OrderWhereInput>;
  items?: Maybe<OrderItemListRelationFilter>;
};

export type OrderVendorWhereUniqueInput = {
  userId_orderId?: Maybe<OrderVendorUserIdOrderIdCompoundUniqueInput>;
};

export type OrderWhereInput = {
  AND?: Maybe<Array<OrderWhereInput>>;
  OR?: Maybe<Array<OrderWhereInput>>;
  NOT?: Maybe<Array<OrderWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
  userCredit?: Maybe<FloatNullableFilter>;
  shipmentAdrsId?: Maybe<IntNullableFilter>;
  paymentStatus?: Maybe<StringNullableFilter>;
  paymentType?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  shippingMethod?: Maybe<StringNullableFilter>;
  courierId?: Maybe<IntNullableFilter>;
  couponId?: Maybe<IntNullableFilter>;
  isDeleted?: Maybe<IntNullableFilter>;
  couponDiscountValue?: Maybe<FloatNullableFilter>;
  cargoId?: Maybe<IntNullableFilter>;
  shippingCost?: Maybe<FloatNullableFilter>;
  adminNote?: Maybe<StringNullableFilter>;
  paymentId?: Maybe<StringNullableFilter>;
  salesId?: Maybe<IntNullableFilter>;
  couponsUsed?: Maybe<CouponsUsedListRelationFilter>;
  user?: Maybe<UserWhereInput>;
  saleUser?: Maybe<UserWhereInput>;
  shipmentAddress?: Maybe<ShipmentadrWhereInput>;
  coupon?: Maybe<CouponWhereInput>;
  items?: Maybe<OrderItemListRelationFilter>;
  vendors?: Maybe<OrderVendorListRelationFilter>;
  cargo?: Maybe<CargoWhereInput>;
  comments?: Maybe<OrderCommentListRelationFilter>;
};

export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type OrdersFile = {
  __typename?: 'OrdersFile';
  id: Scalars['Int'];
  rowId: Scalars['Int'];
  fileName?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  id: Scalars['Int'];
  status: Scalars['Int'];
};

export type Permission = {
  __typename?: 'Permission';
  id: Scalars['Int'];
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  methodName?: Maybe<Scalars['String']>;
  rolePermissions: Array<RolePermission>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};


export type PermissionRolePermissionsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<RolePermissionWhereUniqueInput>;
};

export type PermissionCreateNestedOneWithoutRolePermissionsInput = {
  create?: Maybe<PermissionCreateWithoutRolePermissionsInput>;
  connectOrCreate?: Maybe<PermissionCreateOrConnectWithoutRolePermissionsInput>;
  connect?: Maybe<PermissionWhereUniqueInput>;
};

export type PermissionCreateOrConnectWithoutRolePermissionsInput = {
  where: PermissionWhereUniqueInput;
  create: PermissionCreateWithoutRolePermissionsInput;
};

export type PermissionCreateWithoutRolePermissionsInput = {
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  methodName?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PermissionUpdateOneRequiredWithoutRolePermissionsInput = {
  create?: Maybe<PermissionCreateWithoutRolePermissionsInput>;
  connectOrCreate?: Maybe<PermissionCreateOrConnectWithoutRolePermissionsInput>;
  upsert?: Maybe<PermissionUpsertWithoutRolePermissionsInput>;
  connect?: Maybe<PermissionWhereUniqueInput>;
  update?: Maybe<PermissionUpdateWithoutRolePermissionsInput>;
};

export type PermissionUpdateWithoutRolePermissionsInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  methodName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type PermissionUpsertWithoutRolePermissionsInput = {
  update: PermissionUpdateWithoutRolePermissionsInput;
  create: PermissionCreateWithoutRolePermissionsInput;
};

export type PermissionWhereInput = {
  AND?: Maybe<Array<PermissionWhereInput>>;
  OR?: Maybe<Array<PermissionWhereInput>>;
  NOT?: Maybe<Array<PermissionWhereInput>>;
  id?: Maybe<IntFilter>;
  titleAR?: Maybe<StringNullableFilter>;
  titleEN?: Maybe<StringNullableFilter>;
  methodName?: Maybe<StringNullableFilter>;
  rolePermissions?: Maybe<RolePermissionListRelationFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type PermissionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  regularPrice: Scalars['Float'];
  salePrice: Scalars['Float'];
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep: Scalars['Int'];
  stock: Scalars['Int'];
  weight: Scalars['Float'];
  sku?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  isDeleted: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  stockStatus: Scalars['Int'];
  isFeatured: Scalars['Int'];
  costPerItem: Scalars['Int'];
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved: Scalars['Int'];
  vendor?: Maybe<User>;
  items: Array<OrderItem>;
  files: Array<ProductFile>;
  shapes: Array<ProductToShape>;
  tags: Array<ProductToTag>;
  categories: Array<ProductToCategory>;
  sizes: Array<ProductToSize>;
  colours: Array<ProductToColour>;
  descriptions: Array<ProductToDescription>;
  materials: Array<ProductToMaterial>;
  labels: Array<ProductToLabel>;
  userFavourites: Array<UserFavourite>;
  elment_trans: Array<ProductTrans>;
  maxDiscount?: Maybe<Scalars['Float']>;
  favouritesCount?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Int']>;
};


export type ProductItemsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderItemWhereUniqueInput>;
};


export type ProductFilesArgs = {
  where?: Maybe<ProductFileWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductFileWhereUniqueInput>;
};


export type ProductShapesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToShapeWhereUniqueInput>;
};


export type ProductTagsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToTagWhereUniqueInput>;
};


export type ProductCategoriesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToCategoryWhereUniqueInput>;
};


export type ProductSizesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToSizeWhereUniqueInput>;
};


export type ProductColoursArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToColourWhereUniqueInput>;
};


export type ProductDescriptionsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToDescriptionWhereUniqueInput>;
};


export type ProductMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToMaterialWhereUniqueInput>;
};


export type ProductLabelsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToLabelWhereUniqueInput>;
};


export type ProductUserFavouritesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UserFavouriteWhereUniqueInput>;
};


export type ProductElment_TransArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductTransWhereUniqueInput>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  id: Scalars['Int'];
  parentId: Scalars['Int'];
  photo?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  isDeleted: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  theOrder?: Maybe<Scalars['Int']>;
  elment_trans: Array<ProductCategoryTrans>;
  quotations: Array<Quotation>;
  product: Array<ProductToCategory>;
  stock: Array<StockToCategory>;
};


export type ProductCategoryElment_TransArgs = {
  where?: Maybe<ProductCategoryTransWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductCategoryTransWhereUniqueInput>;
};


export type ProductCategoryQuotationsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<QuotationWhereUniqueInput>;
};


export type ProductCategoryProductArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToCategoryWhereUniqueInput>;
};


export type ProductCategoryStockArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToCategoryWhereUniqueInput>;
};

export type ProductCategoryCreateNestedOneWithoutProductInput = {
  create?: Maybe<ProductCategoryCreateWithoutProductInput>;
  connectOrCreate?: Maybe<ProductCategoryCreateOrConnectWithoutProductInput>;
  connect?: Maybe<ProductCategoryWhereUniqueInput>;
};

export type ProductCategoryCreateNestedOneWithoutQuotationsInput = {
  create?: Maybe<ProductCategoryCreateWithoutQuotationsInput>;
  connectOrCreate?: Maybe<ProductCategoryCreateOrConnectWithoutQuotationsInput>;
  connect?: Maybe<ProductCategoryWhereUniqueInput>;
};

export type ProductCategoryCreateNestedOneWithoutStockInput = {
  create?: Maybe<ProductCategoryCreateWithoutStockInput>;
  connectOrCreate?: Maybe<ProductCategoryCreateOrConnectWithoutStockInput>;
  connect?: Maybe<ProductCategoryWhereUniqueInput>;
};

export type ProductCategoryCreateOrConnectWithoutProductInput = {
  where: ProductCategoryWhereUniqueInput;
  create: ProductCategoryCreateWithoutProductInput;
};

export type ProductCategoryCreateOrConnectWithoutQuotationsInput = {
  where: ProductCategoryWhereUniqueInput;
  create: ProductCategoryCreateWithoutQuotationsInput;
};

export type ProductCategoryCreateOrConnectWithoutStockInput = {
  where: ProductCategoryWhereUniqueInput;
  create: ProductCategoryCreateWithoutStockInput;
};

export type ProductCategoryCreateWithoutProductInput = {
  parentId?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  theOrder?: Maybe<Scalars['Int']>;
  elment_trans?: Maybe<ProductCategoryTransCreateNestedManyWithoutProductCategoryInput>;
  quotations?: Maybe<QuotationCreateNestedManyWithoutCategoryInput>;
  stock?: Maybe<StockToCategoryCreateNestedManyWithoutCategoryInput>;
};

export type ProductCategoryCreateWithoutQuotationsInput = {
  parentId?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  theOrder?: Maybe<Scalars['Int']>;
  elment_trans?: Maybe<ProductCategoryTransCreateNestedManyWithoutProductCategoryInput>;
  product?: Maybe<ProductToCategoryCreateNestedManyWithoutCategoryInput>;
  stock?: Maybe<StockToCategoryCreateNestedManyWithoutCategoryInput>;
};

export type ProductCategoryCreateWithoutStockInput = {
  parentId?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  theOrder?: Maybe<Scalars['Int']>;
  elment_trans?: Maybe<ProductCategoryTransCreateNestedManyWithoutProductCategoryInput>;
  quotations?: Maybe<QuotationCreateNestedManyWithoutCategoryInput>;
  product?: Maybe<ProductToCategoryCreateNestedManyWithoutCategoryInput>;
};

export type ProductCategoryOrderByInput = {
  id?: Maybe<SortOrder>;
  parentId?: Maybe<SortOrder>;
  photo?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  isDeleted?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  theOrder?: Maybe<SortOrder>;
};

export type ProductCategoryTrans = {
  __typename?: 'ProductCategoryTrans';
  id: Scalars['Int'];
  languageCode: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  metaData?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  ProductCategory?: Maybe<ProductCategory>;
  rowId?: Maybe<Scalars['Int']>;
};

export type ProductCategoryTransCreateManyProductCategoryInput = {
  id?: Maybe<Scalars['Int']>;
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  metaData?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
};

export type ProductCategoryTransCreateManyProductCategoryInputEnvelope = {
  data?: Maybe<Array<ProductCategoryTransCreateManyProductCategoryInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductCategoryTransCreateNestedManyWithoutProductCategoryInput = {
  create?: Maybe<Array<ProductCategoryTransCreateWithoutProductCategoryInput>>;
  connectOrCreate?: Maybe<Array<ProductCategoryTransCreateOrConnectWithoutProductCategoryInput>>;
  createMany?: Maybe<ProductCategoryTransCreateManyProductCategoryInputEnvelope>;
  connect?: Maybe<Array<ProductCategoryTransWhereUniqueInput>>;
};

export type ProductCategoryTransCreateOrConnectWithoutProductCategoryInput = {
  where: ProductCategoryTransWhereUniqueInput;
  create: ProductCategoryTransCreateWithoutProductCategoryInput;
};

export type ProductCategoryTransCreateWithoutProductCategoryInput = {
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  metaData?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
};

export type ProductCategoryTransListRelationFilter = {
  every?: Maybe<ProductCategoryTransWhereInput>;
  some?: Maybe<ProductCategoryTransWhereInput>;
  none?: Maybe<ProductCategoryTransWhereInput>;
};

export type ProductCategoryTransScalarWhereInput = {
  AND?: Maybe<Array<ProductCategoryTransScalarWhereInput>>;
  OR?: Maybe<Array<ProductCategoryTransScalarWhereInput>>;
  NOT?: Maybe<Array<ProductCategoryTransScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  description?: Maybe<StringNullableFilter>;
  metaData?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  slug?: Maybe<StringNullableFilter>;
  rowId?: Maybe<IntNullableFilter>;
};

export type ProductCategoryTransUpdateManyMutationInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  metaData?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProductCategoryTransUpdateManyWithWhereWithoutProductCategoryInput = {
  where: ProductCategoryTransScalarWhereInput;
  data: ProductCategoryTransUpdateManyMutationInput;
};

export type ProductCategoryTransUpdateManyWithoutProductCategoryInput = {
  create?: Maybe<Array<ProductCategoryTransCreateWithoutProductCategoryInput>>;
  connectOrCreate?: Maybe<Array<ProductCategoryTransCreateOrConnectWithoutProductCategoryInput>>;
  upsert?: Maybe<Array<ProductCategoryTransUpsertWithWhereUniqueWithoutProductCategoryInput>>;
  createMany?: Maybe<ProductCategoryTransCreateManyProductCategoryInputEnvelope>;
  connect?: Maybe<Array<ProductCategoryTransWhereUniqueInput>>;
  set?: Maybe<Array<ProductCategoryTransWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductCategoryTransWhereUniqueInput>>;
  delete?: Maybe<Array<ProductCategoryTransWhereUniqueInput>>;
  update?: Maybe<Array<ProductCategoryTransUpdateWithWhereUniqueWithoutProductCategoryInput>>;
  updateMany?: Maybe<Array<ProductCategoryTransUpdateManyWithWhereWithoutProductCategoryInput>>;
  deleteMany?: Maybe<Array<ProductCategoryTransScalarWhereInput>>;
};

export type ProductCategoryTransUpdateWithWhereUniqueWithoutProductCategoryInput = {
  where: ProductCategoryTransWhereUniqueInput;
  data: ProductCategoryTransUpdateWithoutProductCategoryInput;
};

export type ProductCategoryTransUpdateWithoutProductCategoryInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  metaData?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProductCategoryTransUpsertWithWhereUniqueWithoutProductCategoryInput = {
  where: ProductCategoryTransWhereUniqueInput;
  update: ProductCategoryTransUpdateWithoutProductCategoryInput;
  create: ProductCategoryTransCreateWithoutProductCategoryInput;
};

export type ProductCategoryTransWhereInput = {
  AND?: Maybe<Array<ProductCategoryTransWhereInput>>;
  OR?: Maybe<Array<ProductCategoryTransWhereInput>>;
  NOT?: Maybe<Array<ProductCategoryTransWhereInput>>;
  id?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  description?: Maybe<StringNullableFilter>;
  metaData?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  slug?: Maybe<StringNullableFilter>;
  ProductCategory?: Maybe<ProductCategoryWhereInput>;
  rowId?: Maybe<IntNullableFilter>;
};

export type ProductCategoryTransWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ProductCategoryUpdateOneRequiredWithoutQuotationsInput = {
  create?: Maybe<ProductCategoryCreateWithoutQuotationsInput>;
  connectOrCreate?: Maybe<ProductCategoryCreateOrConnectWithoutQuotationsInput>;
  upsert?: Maybe<ProductCategoryUpsertWithoutQuotationsInput>;
  connect?: Maybe<ProductCategoryWhereUniqueInput>;
  update?: Maybe<ProductCategoryUpdateWithoutQuotationsInput>;
};

export type ProductCategoryUpdateOneWithoutProductInput = {
  create?: Maybe<ProductCategoryCreateWithoutProductInput>;
  connectOrCreate?: Maybe<ProductCategoryCreateOrConnectWithoutProductInput>;
  upsert?: Maybe<ProductCategoryUpsertWithoutProductInput>;
  connect?: Maybe<ProductCategoryWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProductCategoryUpdateWithoutProductInput>;
};

export type ProductCategoryUpdateOneWithoutStockInput = {
  create?: Maybe<ProductCategoryCreateWithoutStockInput>;
  connectOrCreate?: Maybe<ProductCategoryCreateOrConnectWithoutStockInput>;
  upsert?: Maybe<ProductCategoryUpsertWithoutStockInput>;
  connect?: Maybe<ProductCategoryWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProductCategoryUpdateWithoutStockInput>;
};

export type ProductCategoryUpdateWithoutProductInput = {
  parentId?: Maybe<IntFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  elment_trans?: Maybe<ProductCategoryTransUpdateManyWithoutProductCategoryInput>;
  quotations?: Maybe<QuotationUpdateManyWithoutCategoryInput>;
  stock?: Maybe<StockToCategoryUpdateManyWithoutCategoryInput>;
};

export type ProductCategoryUpdateWithoutQuotationsInput = {
  parentId?: Maybe<IntFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  elment_trans?: Maybe<ProductCategoryTransUpdateManyWithoutProductCategoryInput>;
  product?: Maybe<ProductToCategoryUpdateManyWithoutCategoryInput>;
  stock?: Maybe<StockToCategoryUpdateManyWithoutCategoryInput>;
};

export type ProductCategoryUpdateWithoutStockInput = {
  parentId?: Maybe<IntFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  elment_trans?: Maybe<ProductCategoryTransUpdateManyWithoutProductCategoryInput>;
  quotations?: Maybe<QuotationUpdateManyWithoutCategoryInput>;
  product?: Maybe<ProductToCategoryUpdateManyWithoutCategoryInput>;
};

export type ProductCategoryUpsertWithoutProductInput = {
  update: ProductCategoryUpdateWithoutProductInput;
  create: ProductCategoryCreateWithoutProductInput;
};

export type ProductCategoryUpsertWithoutQuotationsInput = {
  update: ProductCategoryUpdateWithoutQuotationsInput;
  create: ProductCategoryCreateWithoutQuotationsInput;
};

export type ProductCategoryUpsertWithoutStockInput = {
  update: ProductCategoryUpdateWithoutStockInput;
  create: ProductCategoryCreateWithoutStockInput;
};

export type ProductCategoryWhereInput = {
  AND?: Maybe<Array<ProductCategoryWhereInput>>;
  OR?: Maybe<Array<ProductCategoryWhereInput>>;
  NOT?: Maybe<Array<ProductCategoryWhereInput>>;
  id?: Maybe<IntFilter>;
  parentId?: Maybe<IntFilter>;
  photo?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
  isDeleted?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  slug?: Maybe<StringNullableFilter>;
  theOrder?: Maybe<IntNullableFilter>;
  elment_trans?: Maybe<ProductCategoryTransListRelationFilter>;
  quotations?: Maybe<QuotationListRelationFilter>;
  product?: Maybe<ProductToCategoryListRelationFilter>;
  stock?: Maybe<StockToCategoryListRelationFilter>;
};

export type ProductCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ProductCreateInput = {
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  costPerItem?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Int']>;
  vendor?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutProductInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeCreateNestedManyWithoutProductInput>;
  tags?: Maybe<ProductToTagCreateNestedManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryCreateNestedManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeCreateNestedManyWithoutProductInput>;
  colours?: Maybe<ProductToColourCreateNestedManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionCreateNestedManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialCreateNestedManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelCreateNestedManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteCreateNestedManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransCreateNestedManyWithoutProductInput>;
};

export type ProductCreateManyVendorInput = {
  id?: Maybe<Scalars['Int']>;
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  costPerItem?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Int']>;
};

export type ProductCreateManyVendorInputEnvelope = {
  data?: Maybe<Array<ProductCreateManyVendorInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductCreateNestedManyWithoutVendorInput = {
  create?: Maybe<Array<ProductCreateWithoutVendorInput>>;
  connectOrCreate?: Maybe<Array<ProductCreateOrConnectWithoutVendorInput>>;
  createMany?: Maybe<ProductCreateManyVendorInputEnvelope>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateNestedOneWithoutCategoriesInput = {
  create?: Maybe<ProductCreateWithoutCategoriesInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutCategoriesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateNestedOneWithoutColoursInput = {
  create?: Maybe<ProductCreateWithoutColoursInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutColoursInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateNestedOneWithoutDescriptionsInput = {
  create?: Maybe<ProductCreateWithoutDescriptionsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutDescriptionsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateNestedOneWithoutFilesInput = {
  create?: Maybe<ProductCreateWithoutFilesInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutFilesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateNestedOneWithoutItemsInput = {
  create?: Maybe<ProductCreateWithoutItemsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutItemsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateNestedOneWithoutLabelsInput = {
  create?: Maybe<ProductCreateWithoutLabelsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutLabelsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateNestedOneWithoutMaterialsInput = {
  create?: Maybe<ProductCreateWithoutMaterialsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutMaterialsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateNestedOneWithoutShapesInput = {
  create?: Maybe<ProductCreateWithoutShapesInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutShapesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateNestedOneWithoutSizesInput = {
  create?: Maybe<ProductCreateWithoutSizesInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutSizesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateNestedOneWithoutTagsInput = {
  create?: Maybe<ProductCreateWithoutTagsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutTagsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateNestedOneWithoutUserFavouritesInput = {
  create?: Maybe<ProductCreateWithoutUserFavouritesInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutUserFavouritesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateOrConnectWithoutCategoriesInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutCategoriesInput;
};

export type ProductCreateOrConnectWithoutColoursInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutColoursInput;
};

export type ProductCreateOrConnectWithoutDescriptionsInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutDescriptionsInput;
};

export type ProductCreateOrConnectWithoutFilesInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutFilesInput;
};

export type ProductCreateOrConnectWithoutItemsInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutItemsInput;
};

export type ProductCreateOrConnectWithoutLabelsInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutLabelsInput;
};

export type ProductCreateOrConnectWithoutMaterialsInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutMaterialsInput;
};

export type ProductCreateOrConnectWithoutShapesInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutShapesInput;
};

export type ProductCreateOrConnectWithoutSizesInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutSizesInput;
};

export type ProductCreateOrConnectWithoutTagsInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutTagsInput;
};

export type ProductCreateOrConnectWithoutUserFavouritesInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutUserFavouritesInput;
};

export type ProductCreateOrConnectWithoutVendorInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutVendorInput;
};

export type ProductCreateWithoutCategoriesInput = {
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  costPerItem?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Int']>;
  vendor?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutProductInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeCreateNestedManyWithoutProductInput>;
  tags?: Maybe<ProductToTagCreateNestedManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeCreateNestedManyWithoutProductInput>;
  colours?: Maybe<ProductToColourCreateNestedManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionCreateNestedManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialCreateNestedManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelCreateNestedManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteCreateNestedManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutColoursInput = {
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  costPerItem?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Int']>;
  vendor?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutProductInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeCreateNestedManyWithoutProductInput>;
  tags?: Maybe<ProductToTagCreateNestedManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryCreateNestedManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeCreateNestedManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionCreateNestedManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialCreateNestedManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelCreateNestedManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteCreateNestedManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutDescriptionsInput = {
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  costPerItem?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Int']>;
  vendor?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutProductInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeCreateNestedManyWithoutProductInput>;
  tags?: Maybe<ProductToTagCreateNestedManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryCreateNestedManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeCreateNestedManyWithoutProductInput>;
  colours?: Maybe<ProductToColourCreateNestedManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialCreateNestedManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelCreateNestedManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteCreateNestedManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutFilesInput = {
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  costPerItem?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Int']>;
  vendor?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeCreateNestedManyWithoutProductInput>;
  tags?: Maybe<ProductToTagCreateNestedManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryCreateNestedManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeCreateNestedManyWithoutProductInput>;
  colours?: Maybe<ProductToColourCreateNestedManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionCreateNestedManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialCreateNestedManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelCreateNestedManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteCreateNestedManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutItemsInput = {
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  costPerItem?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Int']>;
  vendor?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeCreateNestedManyWithoutProductInput>;
  tags?: Maybe<ProductToTagCreateNestedManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryCreateNestedManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeCreateNestedManyWithoutProductInput>;
  colours?: Maybe<ProductToColourCreateNestedManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionCreateNestedManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialCreateNestedManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelCreateNestedManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteCreateNestedManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutLabelsInput = {
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  costPerItem?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Int']>;
  vendor?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutProductInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeCreateNestedManyWithoutProductInput>;
  tags?: Maybe<ProductToTagCreateNestedManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryCreateNestedManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeCreateNestedManyWithoutProductInput>;
  colours?: Maybe<ProductToColourCreateNestedManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionCreateNestedManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialCreateNestedManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteCreateNestedManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutMaterialsInput = {
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  costPerItem?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Int']>;
  vendor?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutProductInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeCreateNestedManyWithoutProductInput>;
  tags?: Maybe<ProductToTagCreateNestedManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryCreateNestedManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeCreateNestedManyWithoutProductInput>;
  colours?: Maybe<ProductToColourCreateNestedManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionCreateNestedManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelCreateNestedManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteCreateNestedManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutShapesInput = {
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  costPerItem?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Int']>;
  vendor?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutProductInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutProductInput>;
  tags?: Maybe<ProductToTagCreateNestedManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryCreateNestedManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeCreateNestedManyWithoutProductInput>;
  colours?: Maybe<ProductToColourCreateNestedManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionCreateNestedManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialCreateNestedManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelCreateNestedManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteCreateNestedManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutSizesInput = {
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  costPerItem?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Int']>;
  vendor?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutProductInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeCreateNestedManyWithoutProductInput>;
  tags?: Maybe<ProductToTagCreateNestedManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryCreateNestedManyWithoutProductInput>;
  colours?: Maybe<ProductToColourCreateNestedManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionCreateNestedManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialCreateNestedManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelCreateNestedManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteCreateNestedManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutTagsInput = {
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  costPerItem?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Int']>;
  vendor?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutProductInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeCreateNestedManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryCreateNestedManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeCreateNestedManyWithoutProductInput>;
  colours?: Maybe<ProductToColourCreateNestedManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionCreateNestedManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialCreateNestedManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelCreateNestedManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteCreateNestedManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutUserFavouritesInput = {
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  costPerItem?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Int']>;
  vendor?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  items?: Maybe<OrderItemCreateNestedManyWithoutProductInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeCreateNestedManyWithoutProductInput>;
  tags?: Maybe<ProductToTagCreateNestedManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryCreateNestedManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeCreateNestedManyWithoutProductInput>;
  colours?: Maybe<ProductToColourCreateNestedManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionCreateNestedManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialCreateNestedManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelCreateNestedManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutVendorInput = {
  regularPrice?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  quantityStep?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  costPerItem?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  mainPhoto?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Int']>;
  items?: Maybe<OrderItemCreateNestedManyWithoutProductInput>;
  files?: Maybe<ProductFileCreateNestedManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeCreateNestedManyWithoutProductInput>;
  tags?: Maybe<ProductToTagCreateNestedManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryCreateNestedManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeCreateNestedManyWithoutProductInput>;
  colours?: Maybe<ProductToColourCreateNestedManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionCreateNestedManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialCreateNestedManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelCreateNestedManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteCreateNestedManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransCreateNestedManyWithoutProductInput>;
};

export type ProductDescription = {
  __typename?: 'ProductDescription';
  id: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  elment_trans: Array<ProductDescriptionTrans>;
  productToDescription: Array<ProductToDescription>;
  stockToDescription: Array<StockToDescription>;
};


export type ProductDescriptionElment_TransArgs = {
  where?: Maybe<ProductDescriptionTransWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductDescriptionTransWhereUniqueInput>;
};


export type ProductDescriptionProductToDescriptionArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToDescriptionWhereUniqueInput>;
};


export type ProductDescriptionStockToDescriptionArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToDescriptionWhereUniqueInput>;
};

export type ProductDescriptionCreateNestedOneWithoutProductToDescriptionInput = {
  create?: Maybe<ProductDescriptionCreateWithoutProductToDescriptionInput>;
  connectOrCreate?: Maybe<ProductDescriptionCreateOrConnectWithoutProductToDescriptionInput>;
  connect?: Maybe<ProductDescriptionWhereUniqueInput>;
};

export type ProductDescriptionCreateNestedOneWithoutStockToDescriptionInput = {
  create?: Maybe<ProductDescriptionCreateWithoutStockToDescriptionInput>;
  connectOrCreate?: Maybe<ProductDescriptionCreateOrConnectWithoutStockToDescriptionInput>;
  connect?: Maybe<ProductDescriptionWhereUniqueInput>;
};

export type ProductDescriptionCreateOrConnectWithoutProductToDescriptionInput = {
  where: ProductDescriptionWhereUniqueInput;
  create: ProductDescriptionCreateWithoutProductToDescriptionInput;
};

export type ProductDescriptionCreateOrConnectWithoutStockToDescriptionInput = {
  where: ProductDescriptionWhereUniqueInput;
  create: ProductDescriptionCreateWithoutStockToDescriptionInput;
};

export type ProductDescriptionCreateWithoutProductToDescriptionInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  elment_trans?: Maybe<ProductDescriptionTransCreateNestedManyWithoutProductDescriptionInput>;
  stockToDescription?: Maybe<StockToDescriptionCreateNestedManyWithoutDescriptionInput>;
};

export type ProductDescriptionCreateWithoutStockToDescriptionInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  elment_trans?: Maybe<ProductDescriptionTransCreateNestedManyWithoutProductDescriptionInput>;
  productToDescription?: Maybe<ProductToDescriptionCreateNestedManyWithoutDescriptionInput>;
};

export type ProductDescriptionTrans = {
  __typename?: 'ProductDescriptionTrans';
  id: Scalars['Int'];
  rowId: Scalars['Int'];
  languageCode: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  productDescription: ProductDescription;
};

export type ProductDescriptionTransCreateManyProductDescriptionInput = {
  id?: Maybe<Scalars['Int']>;
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ProductDescriptionTransCreateManyProductDescriptionInputEnvelope = {
  data?: Maybe<Array<ProductDescriptionTransCreateManyProductDescriptionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductDescriptionTransCreateNestedManyWithoutProductDescriptionInput = {
  create?: Maybe<Array<ProductDescriptionTransCreateWithoutProductDescriptionInput>>;
  connectOrCreate?: Maybe<Array<ProductDescriptionTransCreateOrConnectWithoutProductDescriptionInput>>;
  createMany?: Maybe<ProductDescriptionTransCreateManyProductDescriptionInputEnvelope>;
  connect?: Maybe<Array<ProductDescriptionTransWhereUniqueInput>>;
};

export type ProductDescriptionTransCreateOrConnectWithoutProductDescriptionInput = {
  where: ProductDescriptionTransWhereUniqueInput;
  create: ProductDescriptionTransCreateWithoutProductDescriptionInput;
};

export type ProductDescriptionTransCreateWithoutProductDescriptionInput = {
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ProductDescriptionTransListRelationFilter = {
  every?: Maybe<ProductDescriptionTransWhereInput>;
  some?: Maybe<ProductDescriptionTransWhereInput>;
  none?: Maybe<ProductDescriptionTransWhereInput>;
};

export type ProductDescriptionTransScalarWhereInput = {
  AND?: Maybe<Array<ProductDescriptionTransScalarWhereInput>>;
  OR?: Maybe<Array<ProductDescriptionTransScalarWhereInput>>;
  NOT?: Maybe<Array<ProductDescriptionTransScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  rowId?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  description?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type ProductDescriptionTransUpdateManyMutationInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ProductDescriptionTransUpdateManyWithWhereWithoutProductDescriptionInput = {
  where: ProductDescriptionTransScalarWhereInput;
  data: ProductDescriptionTransUpdateManyMutationInput;
};

export type ProductDescriptionTransUpdateManyWithoutProductDescriptionInput = {
  create?: Maybe<Array<ProductDescriptionTransCreateWithoutProductDescriptionInput>>;
  connectOrCreate?: Maybe<Array<ProductDescriptionTransCreateOrConnectWithoutProductDescriptionInput>>;
  upsert?: Maybe<Array<ProductDescriptionTransUpsertWithWhereUniqueWithoutProductDescriptionInput>>;
  createMany?: Maybe<ProductDescriptionTransCreateManyProductDescriptionInputEnvelope>;
  connect?: Maybe<Array<ProductDescriptionTransWhereUniqueInput>>;
  set?: Maybe<Array<ProductDescriptionTransWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductDescriptionTransWhereUniqueInput>>;
  delete?: Maybe<Array<ProductDescriptionTransWhereUniqueInput>>;
  update?: Maybe<Array<ProductDescriptionTransUpdateWithWhereUniqueWithoutProductDescriptionInput>>;
  updateMany?: Maybe<Array<ProductDescriptionTransUpdateManyWithWhereWithoutProductDescriptionInput>>;
  deleteMany?: Maybe<Array<ProductDescriptionTransScalarWhereInput>>;
};

export type ProductDescriptionTransUpdateWithWhereUniqueWithoutProductDescriptionInput = {
  where: ProductDescriptionTransWhereUniqueInput;
  data: ProductDescriptionTransUpdateWithoutProductDescriptionInput;
};

export type ProductDescriptionTransUpdateWithoutProductDescriptionInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ProductDescriptionTransUpsertWithWhereUniqueWithoutProductDescriptionInput = {
  where: ProductDescriptionTransWhereUniqueInput;
  update: ProductDescriptionTransUpdateWithoutProductDescriptionInput;
  create: ProductDescriptionTransCreateWithoutProductDescriptionInput;
};

export type ProductDescriptionTransWhereInput = {
  AND?: Maybe<Array<ProductDescriptionTransWhereInput>>;
  OR?: Maybe<Array<ProductDescriptionTransWhereInput>>;
  NOT?: Maybe<Array<ProductDescriptionTransWhereInput>>;
  id?: Maybe<IntFilter>;
  rowId?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  description?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  productDescription?: Maybe<ProductDescriptionWhereInput>;
};

export type ProductDescriptionTransWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ProductDescriptionUpdateOneWithoutProductToDescriptionInput = {
  create?: Maybe<ProductDescriptionCreateWithoutProductToDescriptionInput>;
  connectOrCreate?: Maybe<ProductDescriptionCreateOrConnectWithoutProductToDescriptionInput>;
  upsert?: Maybe<ProductDescriptionUpsertWithoutProductToDescriptionInput>;
  connect?: Maybe<ProductDescriptionWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProductDescriptionUpdateWithoutProductToDescriptionInput>;
};

export type ProductDescriptionUpdateOneWithoutStockToDescriptionInput = {
  create?: Maybe<ProductDescriptionCreateWithoutStockToDescriptionInput>;
  connectOrCreate?: Maybe<ProductDescriptionCreateOrConnectWithoutStockToDescriptionInput>;
  upsert?: Maybe<ProductDescriptionUpsertWithoutStockToDescriptionInput>;
  connect?: Maybe<ProductDescriptionWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProductDescriptionUpdateWithoutStockToDescriptionInput>;
};

export type ProductDescriptionUpdateWithoutProductToDescriptionInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  elment_trans?: Maybe<ProductDescriptionTransUpdateManyWithoutProductDescriptionInput>;
  stockToDescription?: Maybe<StockToDescriptionUpdateManyWithoutDescriptionInput>;
};

export type ProductDescriptionUpdateWithoutStockToDescriptionInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  elment_trans?: Maybe<ProductDescriptionTransUpdateManyWithoutProductDescriptionInput>;
  productToDescription?: Maybe<ProductToDescriptionUpdateManyWithoutDescriptionInput>;
};

export type ProductDescriptionUpsertWithoutProductToDescriptionInput = {
  update: ProductDescriptionUpdateWithoutProductToDescriptionInput;
  create: ProductDescriptionCreateWithoutProductToDescriptionInput;
};

export type ProductDescriptionUpsertWithoutStockToDescriptionInput = {
  update: ProductDescriptionUpdateWithoutStockToDescriptionInput;
  create: ProductDescriptionCreateWithoutStockToDescriptionInput;
};

export type ProductDescriptionWhereInput = {
  AND?: Maybe<Array<ProductDescriptionWhereInput>>;
  OR?: Maybe<Array<ProductDescriptionWhereInput>>;
  NOT?: Maybe<Array<ProductDescriptionWhereInput>>;
  id?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  elment_trans?: Maybe<ProductDescriptionTransListRelationFilter>;
  productToDescription?: Maybe<ProductToDescriptionListRelationFilter>;
  stockToDescription?: Maybe<StockToDescriptionListRelationFilter>;
};

export type ProductDescriptionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ProductFile = {
  __typename?: 'ProductFile';
  id: Scalars['Int'];
  productId: Scalars['Int'];
  fileName?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  colourId: Scalars['Int'];
  isFeatured: Scalars['Int'];
  colour: Colour;
  product: Product;
  ordersItem?: Maybe<OrderItem>;
};

export type ProductFileCreateManyColourInput = {
  id?: Maybe<Scalars['Int']>;
  productId: Scalars['Int'];
  fileName?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isFeatured?: Maybe<Scalars['Int']>;
};

export type ProductFileCreateManyColourInputEnvelope = {
  data?: Maybe<Array<ProductFileCreateManyColourInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductFileCreateManyOrdersItemInput = {
  id?: Maybe<Scalars['Int']>;
  fileName?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  colourId?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
};

export type ProductFileCreateManyOrdersItemInputEnvelope = {
  data?: Maybe<Array<ProductFileCreateManyOrdersItemInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductFileCreateManyProductInput = {
  id?: Maybe<Scalars['Int']>;
  fileName?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  colourId?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
};

export type ProductFileCreateManyProductInputEnvelope = {
  data?: Maybe<Array<ProductFileCreateManyProductInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductFileCreateNestedManyWithoutColourInput = {
  create?: Maybe<Array<ProductFileCreateWithoutColourInput>>;
  connectOrCreate?: Maybe<Array<ProductFileCreateOrConnectWithoutColourInput>>;
  createMany?: Maybe<ProductFileCreateManyColourInputEnvelope>;
  connect?: Maybe<Array<ProductFileWhereUniqueInput>>;
};

export type ProductFileCreateNestedManyWithoutOrdersItemInput = {
  create?: Maybe<Array<ProductFileCreateWithoutOrdersItemInput>>;
  connectOrCreate?: Maybe<Array<ProductFileCreateOrConnectWithoutOrdersItemInput>>;
  createMany?: Maybe<ProductFileCreateManyOrdersItemInputEnvelope>;
  connect?: Maybe<Array<ProductFileWhereUniqueInput>>;
};

export type ProductFileCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<ProductFileCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductFileCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<ProductFileCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductFileWhereUniqueInput>>;
};

export type ProductFileCreateOrConnectWithoutColourInput = {
  where: ProductFileWhereUniqueInput;
  create: ProductFileCreateWithoutColourInput;
};

export type ProductFileCreateOrConnectWithoutOrdersItemInput = {
  where: ProductFileWhereUniqueInput;
  create: ProductFileCreateWithoutOrdersItemInput;
};

export type ProductFileCreateOrConnectWithoutProductInput = {
  where: ProductFileWhereUniqueInput;
  create: ProductFileCreateWithoutProductInput;
};

export type ProductFileCreateWithoutColourInput = {
  fileName?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isFeatured?: Maybe<Scalars['Int']>;
  product: ProductCreateNestedOneWithoutFilesInput;
  ordersItem?: Maybe<OrderItemCreateNestedOneWithoutImagesInput>;
};

export type ProductFileCreateWithoutOrdersItemInput = {
  fileName?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isFeatured?: Maybe<Scalars['Int']>;
  colour?: Maybe<ColourCreateNestedOneWithoutFilesInput>;
  product: ProductCreateNestedOneWithoutFilesInput;
};

export type ProductFileCreateWithoutProductInput = {
  fileName?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isFeatured?: Maybe<Scalars['Int']>;
  colour?: Maybe<ColourCreateNestedOneWithoutFilesInput>;
  ordersItem?: Maybe<OrderItemCreateNestedOneWithoutImagesInput>;
};

export type ProductFileListRelationFilter = {
  every?: Maybe<ProductFileWhereInput>;
  some?: Maybe<ProductFileWhereInput>;
  none?: Maybe<ProductFileWhereInput>;
};

export type ProductFileScalarWhereInput = {
  AND?: Maybe<Array<ProductFileScalarWhereInput>>;
  OR?: Maybe<Array<ProductFileScalarWhereInput>>;
  NOT?: Maybe<Array<ProductFileScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  productId?: Maybe<IntFilter>;
  fileName?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  colourId?: Maybe<IntFilter>;
  isFeatured?: Maybe<IntFilter>;
};

export type ProductFileUpdateManyMutationInput = {
  fileName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ProductFileUpdateManyWithWhereWithoutColourInput = {
  where: ProductFileScalarWhereInput;
  data: ProductFileUpdateManyMutationInput;
};

export type ProductFileUpdateManyWithWhereWithoutOrdersItemInput = {
  where: ProductFileScalarWhereInput;
  data: ProductFileUpdateManyMutationInput;
};

export type ProductFileUpdateManyWithWhereWithoutProductInput = {
  where: ProductFileScalarWhereInput;
  data: ProductFileUpdateManyMutationInput;
};

export type ProductFileUpdateManyWithoutColourInput = {
  create?: Maybe<Array<ProductFileCreateWithoutColourInput>>;
  connectOrCreate?: Maybe<Array<ProductFileCreateOrConnectWithoutColourInput>>;
  upsert?: Maybe<Array<ProductFileUpsertWithWhereUniqueWithoutColourInput>>;
  createMany?: Maybe<ProductFileCreateManyColourInputEnvelope>;
  connect?: Maybe<Array<ProductFileWhereUniqueInput>>;
  set?: Maybe<Array<ProductFileWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductFileWhereUniqueInput>>;
  delete?: Maybe<Array<ProductFileWhereUniqueInput>>;
  update?: Maybe<Array<ProductFileUpdateWithWhereUniqueWithoutColourInput>>;
  updateMany?: Maybe<Array<ProductFileUpdateManyWithWhereWithoutColourInput>>;
  deleteMany?: Maybe<Array<ProductFileScalarWhereInput>>;
};

export type ProductFileUpdateManyWithoutOrdersItemInput = {
  create?: Maybe<Array<ProductFileCreateWithoutOrdersItemInput>>;
  connectOrCreate?: Maybe<Array<ProductFileCreateOrConnectWithoutOrdersItemInput>>;
  upsert?: Maybe<Array<ProductFileUpsertWithWhereUniqueWithoutOrdersItemInput>>;
  createMany?: Maybe<ProductFileCreateManyOrdersItemInputEnvelope>;
  connect?: Maybe<Array<ProductFileWhereUniqueInput>>;
  set?: Maybe<Array<ProductFileWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductFileWhereUniqueInput>>;
  delete?: Maybe<Array<ProductFileWhereUniqueInput>>;
  update?: Maybe<Array<ProductFileUpdateWithWhereUniqueWithoutOrdersItemInput>>;
  updateMany?: Maybe<Array<ProductFileUpdateManyWithWhereWithoutOrdersItemInput>>;
  deleteMany?: Maybe<Array<ProductFileScalarWhereInput>>;
};

export type ProductFileUpdateManyWithoutProductInput = {
  create?: Maybe<Array<ProductFileCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductFileCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<ProductFileUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<ProductFileCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductFileWhereUniqueInput>>;
  set?: Maybe<Array<ProductFileWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductFileWhereUniqueInput>>;
  delete?: Maybe<Array<ProductFileWhereUniqueInput>>;
  update?: Maybe<Array<ProductFileUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<ProductFileUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<ProductFileScalarWhereInput>>;
};

export type ProductFileUpdateWithWhereUniqueWithoutColourInput = {
  where: ProductFileWhereUniqueInput;
  data: ProductFileUpdateWithoutColourInput;
};

export type ProductFileUpdateWithWhereUniqueWithoutOrdersItemInput = {
  where: ProductFileWhereUniqueInput;
  data: ProductFileUpdateWithoutOrdersItemInput;
};

export type ProductFileUpdateWithWhereUniqueWithoutProductInput = {
  where: ProductFileWhereUniqueInput;
  data: ProductFileUpdateWithoutProductInput;
};

export type ProductFileUpdateWithoutColourInput = {
  fileName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutFilesInput>;
  ordersItem?: Maybe<OrderItemUpdateOneWithoutImagesInput>;
};

export type ProductFileUpdateWithoutOrdersItemInput = {
  fileName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  colour?: Maybe<ColourUpdateOneRequiredWithoutFilesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutFilesInput>;
};

export type ProductFileUpdateWithoutProductInput = {
  fileName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  colour?: Maybe<ColourUpdateOneRequiredWithoutFilesInput>;
  ordersItem?: Maybe<OrderItemUpdateOneWithoutImagesInput>;
};

export type ProductFileUpsertWithWhereUniqueWithoutColourInput = {
  where: ProductFileWhereUniqueInput;
  update: ProductFileUpdateWithoutColourInput;
  create: ProductFileCreateWithoutColourInput;
};

export type ProductFileUpsertWithWhereUniqueWithoutOrdersItemInput = {
  where: ProductFileWhereUniqueInput;
  update: ProductFileUpdateWithoutOrdersItemInput;
  create: ProductFileCreateWithoutOrdersItemInput;
};

export type ProductFileUpsertWithWhereUniqueWithoutProductInput = {
  where: ProductFileWhereUniqueInput;
  update: ProductFileUpdateWithoutProductInput;
  create: ProductFileCreateWithoutProductInput;
};

export type ProductFileWhereInput = {
  AND?: Maybe<Array<ProductFileWhereInput>>;
  OR?: Maybe<Array<ProductFileWhereInput>>;
  NOT?: Maybe<Array<ProductFileWhereInput>>;
  id?: Maybe<IntFilter>;
  productId?: Maybe<IntFilter>;
  fileName?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  colourId?: Maybe<IntFilter>;
  isFeatured?: Maybe<IntFilter>;
  colour?: Maybe<ColourWhereInput>;
  product?: Maybe<ProductWhereInput>;
  ordersItem?: Maybe<OrderItemWhereInput>;
};

export type ProductFileWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ProductListRelationFilter = {
  every?: Maybe<ProductWhereInput>;
  some?: Maybe<ProductWhereInput>;
  none?: Maybe<ProductWhereInput>;
};

export type ProductOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  regularPrice?: Maybe<SortOrder>;
  salePrice?: Maybe<SortOrder>;
  saleStart?: Maybe<SortOrder>;
  saleEnd?: Maybe<SortOrder>;
  quantityStep?: Maybe<SortOrder>;
  stock?: Maybe<SortOrder>;
  weight?: Maybe<SortOrder>;
  sku?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  isDeleted?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  length?: Maybe<SortOrder>;
  stockStatus?: Maybe<SortOrder>;
  isFeatured?: Maybe<SortOrder>;
  costPerItem?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  mainPhoto?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  isApproved?: Maybe<SortOrder>;
};

export type ProductScalarWhereInput = {
  AND?: Maybe<Array<ProductScalarWhereInput>>;
  OR?: Maybe<Array<ProductScalarWhereInput>>;
  NOT?: Maybe<Array<ProductScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
  regularPrice?: Maybe<FloatFilter>;
  salePrice?: Maybe<FloatFilter>;
  saleStart?: Maybe<DateTimeNullableFilter>;
  saleEnd?: Maybe<DateTimeNullableFilter>;
  quantityStep?: Maybe<IntFilter>;
  stock?: Maybe<IntFilter>;
  weight?: Maybe<FloatFilter>;
  sku?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
  isDeleted?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  width?: Maybe<FloatFilter>;
  height?: Maybe<FloatFilter>;
  length?: Maybe<FloatFilter>;
  stockStatus?: Maybe<IntFilter>;
  isFeatured?: Maybe<IntFilter>;
  costPerItem?: Maybe<IntFilter>;
  slug?: Maybe<StringNullableFilter>;
  mainPhoto?: Maybe<StringNullableFilter>;
  title?: Maybe<StringNullableFilter>;
  isApproved?: Maybe<IntFilter>;
};

export type ProductToCategory = {
  __typename?: 'ProductToCategory';
  productId: Scalars['Int'];
  prdctcatId: Scalars['Int'];
  product: Product;
  category?: Maybe<ProductCategory>;
};

export type ProductToCategoryCreateManyCategoryInput = {
  productId: Scalars['Int'];
};

export type ProductToCategoryCreateManyCategoryInputEnvelope = {
  data?: Maybe<Array<ProductToCategoryCreateManyCategoryInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToCategoryCreateManyProductInput = {
  prdctcatId: Scalars['Int'];
};

export type ProductToCategoryCreateManyProductInputEnvelope = {
  data?: Maybe<Array<ProductToCategoryCreateManyProductInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToCategoryCreateNestedManyWithoutCategoryInput = {
  create?: Maybe<Array<ProductToCategoryCreateWithoutCategoryInput>>;
  connectOrCreate?: Maybe<Array<ProductToCategoryCreateOrConnectWithoutCategoryInput>>;
  createMany?: Maybe<ProductToCategoryCreateManyCategoryInputEnvelope>;
  connect?: Maybe<Array<ProductToCategoryWhereUniqueInput>>;
};

export type ProductToCategoryCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<ProductToCategoryCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToCategoryCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<ProductToCategoryCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToCategoryWhereUniqueInput>>;
};

export type ProductToCategoryCreateOrConnectWithoutCategoryInput = {
  where: ProductToCategoryWhereUniqueInput;
  create: ProductToCategoryCreateWithoutCategoryInput;
};

export type ProductToCategoryCreateOrConnectWithoutProductInput = {
  where: ProductToCategoryWhereUniqueInput;
  create: ProductToCategoryCreateWithoutProductInput;
};

export type ProductToCategoryCreateWithoutCategoryInput = {
  product: ProductCreateNestedOneWithoutCategoriesInput;
};

export type ProductToCategoryCreateWithoutProductInput = {
  category?: Maybe<ProductCategoryCreateNestedOneWithoutProductInput>;
};

export type ProductToCategoryListRelationFilter = {
  every?: Maybe<ProductToCategoryWhereInput>;
  some?: Maybe<ProductToCategoryWhereInput>;
  none?: Maybe<ProductToCategoryWhereInput>;
};

export type ProductToCategoryProductIdPrdctcatIdCompoundUniqueInput = {
  productId: Scalars['Int'];
  prdctcatId: Scalars['Int'];
};

export type ProductToCategoryScalarWhereInput = {
  AND?: Maybe<Array<ProductToCategoryScalarWhereInput>>;
  OR?: Maybe<Array<ProductToCategoryScalarWhereInput>>;
  NOT?: Maybe<Array<ProductToCategoryScalarWhereInput>>;
  productId?: Maybe<IntFilter>;
  prdctcatId?: Maybe<IntFilter>;
};

export type ProductToCategoryUpdateManyMutationInput = {
  _: Scalars['String'];
};

export type ProductToCategoryUpdateManyWithWhereWithoutCategoryInput = {
  where: ProductToCategoryScalarWhereInput;
  data: ProductToCategoryUpdateManyMutationInput;
};

export type ProductToCategoryUpdateManyWithWhereWithoutProductInput = {
  where: ProductToCategoryScalarWhereInput;
  data: ProductToCategoryUpdateManyMutationInput;
};

export type ProductToCategoryUpdateManyWithoutCategoryInput = {
  create?: Maybe<Array<ProductToCategoryCreateWithoutCategoryInput>>;
  connectOrCreate?: Maybe<Array<ProductToCategoryCreateOrConnectWithoutCategoryInput>>;
  upsert?: Maybe<Array<ProductToCategoryUpsertWithWhereUniqueWithoutCategoryInput>>;
  createMany?: Maybe<ProductToCategoryCreateManyCategoryInputEnvelope>;
  connect?: Maybe<Array<ProductToCategoryWhereUniqueInput>>;
  set?: Maybe<Array<ProductToCategoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToCategoryWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToCategoryWhereUniqueInput>>;
  update?: Maybe<Array<ProductToCategoryUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: Maybe<Array<ProductToCategoryUpdateManyWithWhereWithoutCategoryInput>>;
  deleteMany?: Maybe<Array<ProductToCategoryScalarWhereInput>>;
};

export type ProductToCategoryUpdateManyWithoutProductInput = {
  create?: Maybe<Array<ProductToCategoryCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToCategoryCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<ProductToCategoryUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<ProductToCategoryCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToCategoryWhereUniqueInput>>;
  set?: Maybe<Array<ProductToCategoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToCategoryWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToCategoryWhereUniqueInput>>;
  update?: Maybe<Array<ProductToCategoryUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<ProductToCategoryUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<ProductToCategoryScalarWhereInput>>;
};

export type ProductToCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
  where: ProductToCategoryWhereUniqueInput;
  data: ProductToCategoryUpdateWithoutCategoryInput;
};

export type ProductToCategoryUpdateWithWhereUniqueWithoutProductInput = {
  where: ProductToCategoryWhereUniqueInput;
  data: ProductToCategoryUpdateWithoutProductInput;
};

export type ProductToCategoryUpdateWithoutCategoryInput = {
  product?: Maybe<ProductUpdateOneRequiredWithoutCategoriesInput>;
};

export type ProductToCategoryUpdateWithoutProductInput = {
  category?: Maybe<ProductCategoryUpdateOneWithoutProductInput>;
};

export type ProductToCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
  where: ProductToCategoryWhereUniqueInput;
  update: ProductToCategoryUpdateWithoutCategoryInput;
  create: ProductToCategoryCreateWithoutCategoryInput;
};

export type ProductToCategoryUpsertWithWhereUniqueWithoutProductInput = {
  where: ProductToCategoryWhereUniqueInput;
  update: ProductToCategoryUpdateWithoutProductInput;
  create: ProductToCategoryCreateWithoutProductInput;
};

export type ProductToCategoryWhereInput = {
  AND?: Maybe<Array<ProductToCategoryWhereInput>>;
  OR?: Maybe<Array<ProductToCategoryWhereInput>>;
  NOT?: Maybe<Array<ProductToCategoryWhereInput>>;
  productId?: Maybe<IntFilter>;
  prdctcatId?: Maybe<IntFilter>;
  product?: Maybe<ProductWhereInput>;
  category?: Maybe<ProductCategoryWhereInput>;
};

export type ProductToCategoryWhereUniqueInput = {
  productId_prdctcatId?: Maybe<ProductToCategoryProductIdPrdctcatIdCompoundUniqueInput>;
};

export type ProductToColour = {
  __typename?: 'ProductToColour';
  productId: Scalars['Int'];
  colourId: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  quantity: Scalars['Int'];
  sku?: Maybe<Scalars['String']>;
  product: Product;
  colour: Colour;
};

export type ProductToColourCreateManyColourInput = {
  productId: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
};

export type ProductToColourCreateManyColourInputEnvelope = {
  data?: Maybe<Array<ProductToColourCreateManyColourInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToColourCreateManyProductInput = {
  colourId: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
};

export type ProductToColourCreateManyProductInputEnvelope = {
  data?: Maybe<Array<ProductToColourCreateManyProductInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToColourCreateNestedManyWithoutColourInput = {
  create?: Maybe<Array<ProductToColourCreateWithoutColourInput>>;
  connectOrCreate?: Maybe<Array<ProductToColourCreateOrConnectWithoutColourInput>>;
  createMany?: Maybe<ProductToColourCreateManyColourInputEnvelope>;
  connect?: Maybe<Array<ProductToColourWhereUniqueInput>>;
};

export type ProductToColourCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<ProductToColourCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToColourCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<ProductToColourCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToColourWhereUniqueInput>>;
};

export type ProductToColourCreateOrConnectWithoutColourInput = {
  where: ProductToColourWhereUniqueInput;
  create: ProductToColourCreateWithoutColourInput;
};

export type ProductToColourCreateOrConnectWithoutProductInput = {
  where: ProductToColourWhereUniqueInput;
  create: ProductToColourCreateWithoutProductInput;
};

export type ProductToColourCreateWithoutColourInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutColoursInput;
};

export type ProductToColourCreateWithoutProductInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  colour: ColourCreateNestedOneWithoutProductInput;
};

export type ProductToColourListRelationFilter = {
  every?: Maybe<ProductToColourWhereInput>;
  some?: Maybe<ProductToColourWhereInput>;
  none?: Maybe<ProductToColourWhereInput>;
};

export type ProductToColourProductIdColourIdCompoundUniqueInput = {
  productId: Scalars['Int'];
  colourId: Scalars['Int'];
};

export type ProductToColourScalarWhereInput = {
  AND?: Maybe<Array<ProductToColourScalarWhereInput>>;
  OR?: Maybe<Array<ProductToColourScalarWhereInput>>;
  NOT?: Maybe<Array<ProductToColourScalarWhereInput>>;
  productId?: Maybe<IntFilter>;
  colourId?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  quantity?: Maybe<IntFilter>;
  sku?: Maybe<StringNullableFilter>;
};

export type ProductToColourUpdateManyMutationInput = {
  _: Scalars['String'];
};

export type ProductToColourUpdateManyWithWhereWithoutColourInput = {
  where: ProductToColourScalarWhereInput;
  data: ProductToColourUpdateManyMutationInput;
};

export type ProductToColourUpdateManyWithWhereWithoutProductInput = {
  where: ProductToColourScalarWhereInput;
  data: ProductToColourUpdateManyMutationInput;
};

export type ProductToColourUpdateManyWithoutColourInput = {
  create?: Maybe<Array<ProductToColourCreateWithoutColourInput>>;
  connectOrCreate?: Maybe<Array<ProductToColourCreateOrConnectWithoutColourInput>>;
  upsert?: Maybe<Array<ProductToColourUpsertWithWhereUniqueWithoutColourInput>>;
  createMany?: Maybe<ProductToColourCreateManyColourInputEnvelope>;
  connect?: Maybe<Array<ProductToColourWhereUniqueInput>>;
  set?: Maybe<Array<ProductToColourWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToColourWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToColourWhereUniqueInput>>;
  update?: Maybe<Array<ProductToColourUpdateWithWhereUniqueWithoutColourInput>>;
  updateMany?: Maybe<Array<ProductToColourUpdateManyWithWhereWithoutColourInput>>;
  deleteMany?: Maybe<Array<ProductToColourScalarWhereInput>>;
};

export type ProductToColourUpdateManyWithoutProductInput = {
  create?: Maybe<Array<ProductToColourCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToColourCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<ProductToColourUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<ProductToColourCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToColourWhereUniqueInput>>;
  set?: Maybe<Array<ProductToColourWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToColourWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToColourWhereUniqueInput>>;
  update?: Maybe<Array<ProductToColourUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<ProductToColourUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<ProductToColourScalarWhereInput>>;
};

export type ProductToColourUpdateWithWhereUniqueWithoutColourInput = {
  where: ProductToColourWhereUniqueInput;
  data: ProductToColourUpdateWithoutColourInput;
};

export type ProductToColourUpdateWithWhereUniqueWithoutProductInput = {
  where: ProductToColourWhereUniqueInput;
  data: ProductToColourUpdateWithoutProductInput;
};

export type ProductToColourUpdateWithoutColourInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutColoursInput>;
};

export type ProductToColourUpdateWithoutProductInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  colour?: Maybe<ColourUpdateOneRequiredWithoutProductInput>;
};

export type ProductToColourUpsertWithWhereUniqueWithoutColourInput = {
  where: ProductToColourWhereUniqueInput;
  update: ProductToColourUpdateWithoutColourInput;
  create: ProductToColourCreateWithoutColourInput;
};

export type ProductToColourUpsertWithWhereUniqueWithoutProductInput = {
  where: ProductToColourWhereUniqueInput;
  update: ProductToColourUpdateWithoutProductInput;
  create: ProductToColourCreateWithoutProductInput;
};

export type ProductToColourWhereInput = {
  AND?: Maybe<Array<ProductToColourWhereInput>>;
  OR?: Maybe<Array<ProductToColourWhereInput>>;
  NOT?: Maybe<Array<ProductToColourWhereInput>>;
  productId?: Maybe<IntFilter>;
  colourId?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  quantity?: Maybe<IntFilter>;
  sku?: Maybe<StringNullableFilter>;
  product?: Maybe<ProductWhereInput>;
  colour?: Maybe<ColourWhereInput>;
};

export type ProductToColourWhereUniqueInput = {
  productId_colourId?: Maybe<ProductToColourProductIdColourIdCompoundUniqueInput>;
};

export type ProductToDescription = {
  __typename?: 'ProductToDescription';
  productId: Scalars['Int'];
  descriptionId: Scalars['Int'];
  product: Product;
  description?: Maybe<ProductDescription>;
};

export type ProductToDescriptionCreateManyDescriptionInput = {
  productId: Scalars['Int'];
};

export type ProductToDescriptionCreateManyDescriptionInputEnvelope = {
  data?: Maybe<Array<ProductToDescriptionCreateManyDescriptionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToDescriptionCreateManyProductInput = {
  descriptionId: Scalars['Int'];
};

export type ProductToDescriptionCreateManyProductInputEnvelope = {
  data?: Maybe<Array<ProductToDescriptionCreateManyProductInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToDescriptionCreateNestedManyWithoutDescriptionInput = {
  create?: Maybe<Array<ProductToDescriptionCreateWithoutDescriptionInput>>;
  connectOrCreate?: Maybe<Array<ProductToDescriptionCreateOrConnectWithoutDescriptionInput>>;
  createMany?: Maybe<ProductToDescriptionCreateManyDescriptionInputEnvelope>;
  connect?: Maybe<Array<ProductToDescriptionWhereUniqueInput>>;
};

export type ProductToDescriptionCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<ProductToDescriptionCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToDescriptionCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<ProductToDescriptionCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToDescriptionWhereUniqueInput>>;
};

export type ProductToDescriptionCreateOrConnectWithoutDescriptionInput = {
  where: ProductToDescriptionWhereUniqueInput;
  create: ProductToDescriptionCreateWithoutDescriptionInput;
};

export type ProductToDescriptionCreateOrConnectWithoutProductInput = {
  where: ProductToDescriptionWhereUniqueInput;
  create: ProductToDescriptionCreateWithoutProductInput;
};

export type ProductToDescriptionCreateWithoutDescriptionInput = {
  product: ProductCreateNestedOneWithoutDescriptionsInput;
};

export type ProductToDescriptionCreateWithoutProductInput = {
  description?: Maybe<ProductDescriptionCreateNestedOneWithoutProductToDescriptionInput>;
};

export type ProductToDescriptionListRelationFilter = {
  every?: Maybe<ProductToDescriptionWhereInput>;
  some?: Maybe<ProductToDescriptionWhereInput>;
  none?: Maybe<ProductToDescriptionWhereInput>;
};

export type ProductToDescriptionProductIdDescriptionIdCompoundUniqueInput = {
  productId: Scalars['Int'];
  descriptionId: Scalars['Int'];
};

export type ProductToDescriptionScalarWhereInput = {
  AND?: Maybe<Array<ProductToDescriptionScalarWhereInput>>;
  OR?: Maybe<Array<ProductToDescriptionScalarWhereInput>>;
  NOT?: Maybe<Array<ProductToDescriptionScalarWhereInput>>;
  productId?: Maybe<IntFilter>;
  descriptionId?: Maybe<IntFilter>;
};

export type ProductToDescriptionUpdateManyMutationInput = {
  _: Scalars['String'];
};

export type ProductToDescriptionUpdateManyWithWhereWithoutDescriptionInput = {
  where: ProductToDescriptionScalarWhereInput;
  data: ProductToDescriptionUpdateManyMutationInput;
};

export type ProductToDescriptionUpdateManyWithWhereWithoutProductInput = {
  where: ProductToDescriptionScalarWhereInput;
  data: ProductToDescriptionUpdateManyMutationInput;
};

export type ProductToDescriptionUpdateManyWithoutDescriptionInput = {
  create?: Maybe<Array<ProductToDescriptionCreateWithoutDescriptionInput>>;
  connectOrCreate?: Maybe<Array<ProductToDescriptionCreateOrConnectWithoutDescriptionInput>>;
  upsert?: Maybe<Array<ProductToDescriptionUpsertWithWhereUniqueWithoutDescriptionInput>>;
  createMany?: Maybe<ProductToDescriptionCreateManyDescriptionInputEnvelope>;
  connect?: Maybe<Array<ProductToDescriptionWhereUniqueInput>>;
  set?: Maybe<Array<ProductToDescriptionWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToDescriptionWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToDescriptionWhereUniqueInput>>;
  update?: Maybe<Array<ProductToDescriptionUpdateWithWhereUniqueWithoutDescriptionInput>>;
  updateMany?: Maybe<Array<ProductToDescriptionUpdateManyWithWhereWithoutDescriptionInput>>;
  deleteMany?: Maybe<Array<ProductToDescriptionScalarWhereInput>>;
};

export type ProductToDescriptionUpdateManyWithoutProductInput = {
  create?: Maybe<Array<ProductToDescriptionCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToDescriptionCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<ProductToDescriptionUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<ProductToDescriptionCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToDescriptionWhereUniqueInput>>;
  set?: Maybe<Array<ProductToDescriptionWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToDescriptionWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToDescriptionWhereUniqueInput>>;
  update?: Maybe<Array<ProductToDescriptionUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<ProductToDescriptionUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<ProductToDescriptionScalarWhereInput>>;
};

export type ProductToDescriptionUpdateWithWhereUniqueWithoutDescriptionInput = {
  where: ProductToDescriptionWhereUniqueInput;
  data: ProductToDescriptionUpdateWithoutDescriptionInput;
};

export type ProductToDescriptionUpdateWithWhereUniqueWithoutProductInput = {
  where: ProductToDescriptionWhereUniqueInput;
  data: ProductToDescriptionUpdateWithoutProductInput;
};

export type ProductToDescriptionUpdateWithoutDescriptionInput = {
  product?: Maybe<ProductUpdateOneRequiredWithoutDescriptionsInput>;
};

export type ProductToDescriptionUpdateWithoutProductInput = {
  description?: Maybe<ProductDescriptionUpdateOneWithoutProductToDescriptionInput>;
};

export type ProductToDescriptionUpsertWithWhereUniqueWithoutDescriptionInput = {
  where: ProductToDescriptionWhereUniqueInput;
  update: ProductToDescriptionUpdateWithoutDescriptionInput;
  create: ProductToDescriptionCreateWithoutDescriptionInput;
};

export type ProductToDescriptionUpsertWithWhereUniqueWithoutProductInput = {
  where: ProductToDescriptionWhereUniqueInput;
  update: ProductToDescriptionUpdateWithoutProductInput;
  create: ProductToDescriptionCreateWithoutProductInput;
};

export type ProductToDescriptionWhereInput = {
  AND?: Maybe<Array<ProductToDescriptionWhereInput>>;
  OR?: Maybe<Array<ProductToDescriptionWhereInput>>;
  NOT?: Maybe<Array<ProductToDescriptionWhereInput>>;
  productId?: Maybe<IntFilter>;
  descriptionId?: Maybe<IntFilter>;
  product?: Maybe<ProductWhereInput>;
  description?: Maybe<ProductDescriptionWhereInput>;
};

export type ProductToDescriptionWhereUniqueInput = {
  productId_descriptionId?: Maybe<ProductToDescriptionProductIdDescriptionIdCompoundUniqueInput>;
};

export type ProductToLabel = {
  __typename?: 'ProductToLabel';
  productId: Scalars['Int'];
  labelId: Scalars['Int'];
  product: Product;
  label?: Maybe<Label>;
};

export type ProductToLabelCreateManyLabelInput = {
  productId: Scalars['Int'];
};

export type ProductToLabelCreateManyLabelInputEnvelope = {
  data?: Maybe<Array<ProductToLabelCreateManyLabelInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToLabelCreateManyProductInput = {
  labelId: Scalars['Int'];
};

export type ProductToLabelCreateManyProductInputEnvelope = {
  data?: Maybe<Array<ProductToLabelCreateManyProductInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToLabelCreateNestedManyWithoutLabelInput = {
  create?: Maybe<Array<ProductToLabelCreateWithoutLabelInput>>;
  connectOrCreate?: Maybe<Array<ProductToLabelCreateOrConnectWithoutLabelInput>>;
  createMany?: Maybe<ProductToLabelCreateManyLabelInputEnvelope>;
  connect?: Maybe<Array<ProductToLabelWhereUniqueInput>>;
};

export type ProductToLabelCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<ProductToLabelCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToLabelCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<ProductToLabelCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToLabelWhereUniqueInput>>;
};

export type ProductToLabelCreateOrConnectWithoutLabelInput = {
  where: ProductToLabelWhereUniqueInput;
  create: ProductToLabelCreateWithoutLabelInput;
};

export type ProductToLabelCreateOrConnectWithoutProductInput = {
  where: ProductToLabelWhereUniqueInput;
  create: ProductToLabelCreateWithoutProductInput;
};

export type ProductToLabelCreateWithoutLabelInput = {
  product: ProductCreateNestedOneWithoutLabelsInput;
};

export type ProductToLabelCreateWithoutProductInput = {
  label?: Maybe<LabelCreateNestedOneWithoutProductToLabelInput>;
};

export type ProductToLabelListRelationFilter = {
  every?: Maybe<ProductToLabelWhereInput>;
  some?: Maybe<ProductToLabelWhereInput>;
  none?: Maybe<ProductToLabelWhereInput>;
};

export type ProductToLabelProductIdLabelIdCompoundUniqueInput = {
  productId: Scalars['Int'];
  labelId: Scalars['Int'];
};

export type ProductToLabelScalarWhereInput = {
  AND?: Maybe<Array<ProductToLabelScalarWhereInput>>;
  OR?: Maybe<Array<ProductToLabelScalarWhereInput>>;
  NOT?: Maybe<Array<ProductToLabelScalarWhereInput>>;
  productId?: Maybe<IntFilter>;
  labelId?: Maybe<IntFilter>;
};

export type ProductToLabelUpdateManyMutationInput = {
  _: Scalars['String'];
};

export type ProductToLabelUpdateManyWithWhereWithoutLabelInput = {
  where: ProductToLabelScalarWhereInput;
  data: ProductToLabelUpdateManyMutationInput;
};

export type ProductToLabelUpdateManyWithWhereWithoutProductInput = {
  where: ProductToLabelScalarWhereInput;
  data: ProductToLabelUpdateManyMutationInput;
};

export type ProductToLabelUpdateManyWithoutLabelInput = {
  create?: Maybe<Array<ProductToLabelCreateWithoutLabelInput>>;
  connectOrCreate?: Maybe<Array<ProductToLabelCreateOrConnectWithoutLabelInput>>;
  upsert?: Maybe<Array<ProductToLabelUpsertWithWhereUniqueWithoutLabelInput>>;
  createMany?: Maybe<ProductToLabelCreateManyLabelInputEnvelope>;
  connect?: Maybe<Array<ProductToLabelWhereUniqueInput>>;
  set?: Maybe<Array<ProductToLabelWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToLabelWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToLabelWhereUniqueInput>>;
  update?: Maybe<Array<ProductToLabelUpdateWithWhereUniqueWithoutLabelInput>>;
  updateMany?: Maybe<Array<ProductToLabelUpdateManyWithWhereWithoutLabelInput>>;
  deleteMany?: Maybe<Array<ProductToLabelScalarWhereInput>>;
};

export type ProductToLabelUpdateManyWithoutProductInput = {
  create?: Maybe<Array<ProductToLabelCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToLabelCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<ProductToLabelUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<ProductToLabelCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToLabelWhereUniqueInput>>;
  set?: Maybe<Array<ProductToLabelWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToLabelWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToLabelWhereUniqueInput>>;
  update?: Maybe<Array<ProductToLabelUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<ProductToLabelUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<ProductToLabelScalarWhereInput>>;
};

export type ProductToLabelUpdateWithWhereUniqueWithoutLabelInput = {
  where: ProductToLabelWhereUniqueInput;
  data: ProductToLabelUpdateWithoutLabelInput;
};

export type ProductToLabelUpdateWithWhereUniqueWithoutProductInput = {
  where: ProductToLabelWhereUniqueInput;
  data: ProductToLabelUpdateWithoutProductInput;
};

export type ProductToLabelUpdateWithoutLabelInput = {
  product?: Maybe<ProductUpdateOneRequiredWithoutLabelsInput>;
};

export type ProductToLabelUpdateWithoutProductInput = {
  label?: Maybe<LabelUpdateOneWithoutProductToLabelInput>;
};

export type ProductToLabelUpsertWithWhereUniqueWithoutLabelInput = {
  where: ProductToLabelWhereUniqueInput;
  update: ProductToLabelUpdateWithoutLabelInput;
  create: ProductToLabelCreateWithoutLabelInput;
};

export type ProductToLabelUpsertWithWhereUniqueWithoutProductInput = {
  where: ProductToLabelWhereUniqueInput;
  update: ProductToLabelUpdateWithoutProductInput;
  create: ProductToLabelCreateWithoutProductInput;
};

export type ProductToLabelWhereInput = {
  AND?: Maybe<Array<ProductToLabelWhereInput>>;
  OR?: Maybe<Array<ProductToLabelWhereInput>>;
  NOT?: Maybe<Array<ProductToLabelWhereInput>>;
  productId?: Maybe<IntFilter>;
  labelId?: Maybe<IntFilter>;
  product?: Maybe<ProductWhereInput>;
  label?: Maybe<LabelWhereInput>;
};

export type ProductToLabelWhereUniqueInput = {
  productId_labelId?: Maybe<ProductToLabelProductIdLabelIdCompoundUniqueInput>;
};

export type ProductToMaterial = {
  __typename?: 'ProductToMaterial';
  productId: Scalars['Int'];
  materialId: Scalars['Int'];
  value: Scalars['Float'];
  product: Product;
  material?: Maybe<Material>;
};

export type ProductToMaterialCreateManyMaterialInput = {
  productId: Scalars['Int'];
  value: Scalars['Float'];
};

export type ProductToMaterialCreateManyMaterialInputEnvelope = {
  data?: Maybe<Array<ProductToMaterialCreateManyMaterialInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToMaterialCreateManyProductInput = {
  materialId: Scalars['Int'];
  value: Scalars['Float'];
};

export type ProductToMaterialCreateManyProductInputEnvelope = {
  data?: Maybe<Array<ProductToMaterialCreateManyProductInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToMaterialCreateNestedManyWithoutMaterialInput = {
  create?: Maybe<Array<ProductToMaterialCreateWithoutMaterialInput>>;
  connectOrCreate?: Maybe<Array<ProductToMaterialCreateOrConnectWithoutMaterialInput>>;
  createMany?: Maybe<ProductToMaterialCreateManyMaterialInputEnvelope>;
  connect?: Maybe<Array<ProductToMaterialWhereUniqueInput>>;
};

export type ProductToMaterialCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<ProductToMaterialCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToMaterialCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<ProductToMaterialCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToMaterialWhereUniqueInput>>;
};

export type ProductToMaterialCreateOrConnectWithoutMaterialInput = {
  where: ProductToMaterialWhereUniqueInput;
  create: ProductToMaterialCreateWithoutMaterialInput;
};

export type ProductToMaterialCreateOrConnectWithoutProductInput = {
  where: ProductToMaterialWhereUniqueInput;
  create: ProductToMaterialCreateWithoutProductInput;
};

export type ProductToMaterialCreateWithoutMaterialInput = {
  value: Scalars['Float'];
  product: ProductCreateNestedOneWithoutMaterialsInput;
};

export type ProductToMaterialCreateWithoutProductInput = {
  value: Scalars['Float'];
  material?: Maybe<MaterialCreateNestedOneWithoutProductToMaterialInput>;
};

export type ProductToMaterialListRelationFilter = {
  every?: Maybe<ProductToMaterialWhereInput>;
  some?: Maybe<ProductToMaterialWhereInput>;
  none?: Maybe<ProductToMaterialWhereInput>;
};

export type ProductToMaterialProductIdMaterialIdCompoundUniqueInput = {
  productId: Scalars['Int'];
  materialId: Scalars['Int'];
};

export type ProductToMaterialScalarWhereInput = {
  AND?: Maybe<Array<ProductToMaterialScalarWhereInput>>;
  OR?: Maybe<Array<ProductToMaterialScalarWhereInput>>;
  NOT?: Maybe<Array<ProductToMaterialScalarWhereInput>>;
  productId?: Maybe<IntFilter>;
  materialId?: Maybe<IntFilter>;
  value?: Maybe<FloatFilter>;
};

export type ProductToMaterialUpdateManyMutationInput = {
  value?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProductToMaterialUpdateManyWithWhereWithoutMaterialInput = {
  where: ProductToMaterialScalarWhereInput;
  data: ProductToMaterialUpdateManyMutationInput;
};

export type ProductToMaterialUpdateManyWithWhereWithoutProductInput = {
  where: ProductToMaterialScalarWhereInput;
  data: ProductToMaterialUpdateManyMutationInput;
};

export type ProductToMaterialUpdateManyWithoutMaterialInput = {
  create?: Maybe<Array<ProductToMaterialCreateWithoutMaterialInput>>;
  connectOrCreate?: Maybe<Array<ProductToMaterialCreateOrConnectWithoutMaterialInput>>;
  upsert?: Maybe<Array<ProductToMaterialUpsertWithWhereUniqueWithoutMaterialInput>>;
  createMany?: Maybe<ProductToMaterialCreateManyMaterialInputEnvelope>;
  connect?: Maybe<Array<ProductToMaterialWhereUniqueInput>>;
  set?: Maybe<Array<ProductToMaterialWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToMaterialWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToMaterialWhereUniqueInput>>;
  update?: Maybe<Array<ProductToMaterialUpdateWithWhereUniqueWithoutMaterialInput>>;
  updateMany?: Maybe<Array<ProductToMaterialUpdateManyWithWhereWithoutMaterialInput>>;
  deleteMany?: Maybe<Array<ProductToMaterialScalarWhereInput>>;
};

export type ProductToMaterialUpdateManyWithoutProductInput = {
  create?: Maybe<Array<ProductToMaterialCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToMaterialCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<ProductToMaterialUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<ProductToMaterialCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToMaterialWhereUniqueInput>>;
  set?: Maybe<Array<ProductToMaterialWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToMaterialWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToMaterialWhereUniqueInput>>;
  update?: Maybe<Array<ProductToMaterialUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<ProductToMaterialUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<ProductToMaterialScalarWhereInput>>;
};

export type ProductToMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
  where: ProductToMaterialWhereUniqueInput;
  data: ProductToMaterialUpdateWithoutMaterialInput;
};

export type ProductToMaterialUpdateWithWhereUniqueWithoutProductInput = {
  where: ProductToMaterialWhereUniqueInput;
  data: ProductToMaterialUpdateWithoutProductInput;
};

export type ProductToMaterialUpdateWithoutMaterialInput = {
  value?: Maybe<FloatFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutMaterialsInput>;
};

export type ProductToMaterialUpdateWithoutProductInput = {
  value?: Maybe<FloatFieldUpdateOperationsInput>;
  material?: Maybe<MaterialUpdateOneWithoutProductToMaterialInput>;
};

export type ProductToMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
  where: ProductToMaterialWhereUniqueInput;
  update: ProductToMaterialUpdateWithoutMaterialInput;
  create: ProductToMaterialCreateWithoutMaterialInput;
};

export type ProductToMaterialUpsertWithWhereUniqueWithoutProductInput = {
  where: ProductToMaterialWhereUniqueInput;
  update: ProductToMaterialUpdateWithoutProductInput;
  create: ProductToMaterialCreateWithoutProductInput;
};

export type ProductToMaterialWhereInput = {
  AND?: Maybe<Array<ProductToMaterialWhereInput>>;
  OR?: Maybe<Array<ProductToMaterialWhereInput>>;
  NOT?: Maybe<Array<ProductToMaterialWhereInput>>;
  productId?: Maybe<IntFilter>;
  materialId?: Maybe<IntFilter>;
  value?: Maybe<FloatFilter>;
  product?: Maybe<ProductWhereInput>;
  material?: Maybe<MaterialWhereInput>;
};

export type ProductToMaterialWhereUniqueInput = {
  productId_materialId?: Maybe<ProductToMaterialProductIdMaterialIdCompoundUniqueInput>;
};

export type ProductToShape = {
  __typename?: 'ProductToShape';
  productId: Scalars['Int'];
  shapeId: Scalars['Int'];
  value: Scalars['Float'];
  product: Product;
  shape?: Maybe<Shape>;
};

export type ProductToShapeCreateManyProductInput = {
  shapeId: Scalars['Int'];
  value: Scalars['Float'];
};

export type ProductToShapeCreateManyProductInputEnvelope = {
  data?: Maybe<Array<ProductToShapeCreateManyProductInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToShapeCreateManyShapeInput = {
  productId: Scalars['Int'];
  value: Scalars['Float'];
};

export type ProductToShapeCreateManyShapeInputEnvelope = {
  data?: Maybe<Array<ProductToShapeCreateManyShapeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToShapeCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<ProductToShapeCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToShapeCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<ProductToShapeCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToShapeWhereUniqueInput>>;
};

export type ProductToShapeCreateNestedManyWithoutShapeInput = {
  create?: Maybe<Array<ProductToShapeCreateWithoutShapeInput>>;
  connectOrCreate?: Maybe<Array<ProductToShapeCreateOrConnectWithoutShapeInput>>;
  createMany?: Maybe<ProductToShapeCreateManyShapeInputEnvelope>;
  connect?: Maybe<Array<ProductToShapeWhereUniqueInput>>;
};

export type ProductToShapeCreateOrConnectWithoutProductInput = {
  where: ProductToShapeWhereUniqueInput;
  create: ProductToShapeCreateWithoutProductInput;
};

export type ProductToShapeCreateOrConnectWithoutShapeInput = {
  where: ProductToShapeWhereUniqueInput;
  create: ProductToShapeCreateWithoutShapeInput;
};

export type ProductToShapeCreateWithoutProductInput = {
  value: Scalars['Float'];
  shape?: Maybe<ShapeCreateNestedOneWithoutProductToShapeInput>;
};

export type ProductToShapeCreateWithoutShapeInput = {
  value: Scalars['Float'];
  product: ProductCreateNestedOneWithoutShapesInput;
};

export type ProductToShapeListRelationFilter = {
  every?: Maybe<ProductToShapeWhereInput>;
  some?: Maybe<ProductToShapeWhereInput>;
  none?: Maybe<ProductToShapeWhereInput>;
};

export type ProductToShapeProductIdShapeIdCompoundUniqueInput = {
  productId: Scalars['Int'];
  shapeId: Scalars['Int'];
};

export type ProductToShapeScalarWhereInput = {
  AND?: Maybe<Array<ProductToShapeScalarWhereInput>>;
  OR?: Maybe<Array<ProductToShapeScalarWhereInput>>;
  NOT?: Maybe<Array<ProductToShapeScalarWhereInput>>;
  productId?: Maybe<IntFilter>;
  shapeId?: Maybe<IntFilter>;
  value?: Maybe<FloatFilter>;
};

export type ProductToShapeUpdateManyMutationInput = {
  value?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProductToShapeUpdateManyWithWhereWithoutProductInput = {
  where: ProductToShapeScalarWhereInput;
  data: ProductToShapeUpdateManyMutationInput;
};

export type ProductToShapeUpdateManyWithWhereWithoutShapeInput = {
  where: ProductToShapeScalarWhereInput;
  data: ProductToShapeUpdateManyMutationInput;
};

export type ProductToShapeUpdateManyWithoutProductInput = {
  create?: Maybe<Array<ProductToShapeCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToShapeCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<ProductToShapeUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<ProductToShapeCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToShapeWhereUniqueInput>>;
  set?: Maybe<Array<ProductToShapeWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToShapeWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToShapeWhereUniqueInput>>;
  update?: Maybe<Array<ProductToShapeUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<ProductToShapeUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<ProductToShapeScalarWhereInput>>;
};

export type ProductToShapeUpdateManyWithoutShapeInput = {
  create?: Maybe<Array<ProductToShapeCreateWithoutShapeInput>>;
  connectOrCreate?: Maybe<Array<ProductToShapeCreateOrConnectWithoutShapeInput>>;
  upsert?: Maybe<Array<ProductToShapeUpsertWithWhereUniqueWithoutShapeInput>>;
  createMany?: Maybe<ProductToShapeCreateManyShapeInputEnvelope>;
  connect?: Maybe<Array<ProductToShapeWhereUniqueInput>>;
  set?: Maybe<Array<ProductToShapeWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToShapeWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToShapeWhereUniqueInput>>;
  update?: Maybe<Array<ProductToShapeUpdateWithWhereUniqueWithoutShapeInput>>;
  updateMany?: Maybe<Array<ProductToShapeUpdateManyWithWhereWithoutShapeInput>>;
  deleteMany?: Maybe<Array<ProductToShapeScalarWhereInput>>;
};

export type ProductToShapeUpdateWithWhereUniqueWithoutProductInput = {
  where: ProductToShapeWhereUniqueInput;
  data: ProductToShapeUpdateWithoutProductInput;
};

export type ProductToShapeUpdateWithWhereUniqueWithoutShapeInput = {
  where: ProductToShapeWhereUniqueInput;
  data: ProductToShapeUpdateWithoutShapeInput;
};

export type ProductToShapeUpdateWithoutProductInput = {
  value?: Maybe<FloatFieldUpdateOperationsInput>;
  shape?: Maybe<ShapeUpdateOneWithoutProductToShapeInput>;
};

export type ProductToShapeUpdateWithoutShapeInput = {
  value?: Maybe<FloatFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutShapesInput>;
};

export type ProductToShapeUpsertWithWhereUniqueWithoutProductInput = {
  where: ProductToShapeWhereUniqueInput;
  update: ProductToShapeUpdateWithoutProductInput;
  create: ProductToShapeCreateWithoutProductInput;
};

export type ProductToShapeUpsertWithWhereUniqueWithoutShapeInput = {
  where: ProductToShapeWhereUniqueInput;
  update: ProductToShapeUpdateWithoutShapeInput;
  create: ProductToShapeCreateWithoutShapeInput;
};

export type ProductToShapeWhereInput = {
  AND?: Maybe<Array<ProductToShapeWhereInput>>;
  OR?: Maybe<Array<ProductToShapeWhereInput>>;
  NOT?: Maybe<Array<ProductToShapeWhereInput>>;
  productId?: Maybe<IntFilter>;
  shapeId?: Maybe<IntFilter>;
  value?: Maybe<FloatFilter>;
  product?: Maybe<ProductWhereInput>;
  shape?: Maybe<ShapeWhereInput>;
};

export type ProductToShapeWhereUniqueInput = {
  productId_shapeId?: Maybe<ProductToShapeProductIdShapeIdCompoundUniqueInput>;
};

export type ProductToSize = {
  __typename?: 'ProductToSize';
  productId: Scalars['Int'];
  sizeId: Scalars['Int'];
  product: Product;
  size?: Maybe<Size>;
};

export type ProductToSizeCreateManyProductInput = {
  sizeId: Scalars['Int'];
};

export type ProductToSizeCreateManyProductInputEnvelope = {
  data?: Maybe<Array<ProductToSizeCreateManyProductInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToSizeCreateManySizeInput = {
  productId: Scalars['Int'];
};

export type ProductToSizeCreateManySizeInputEnvelope = {
  data?: Maybe<Array<ProductToSizeCreateManySizeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToSizeCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<ProductToSizeCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToSizeCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<ProductToSizeCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToSizeWhereUniqueInput>>;
};

export type ProductToSizeCreateNestedManyWithoutSizeInput = {
  create?: Maybe<Array<ProductToSizeCreateWithoutSizeInput>>;
  connectOrCreate?: Maybe<Array<ProductToSizeCreateOrConnectWithoutSizeInput>>;
  createMany?: Maybe<ProductToSizeCreateManySizeInputEnvelope>;
  connect?: Maybe<Array<ProductToSizeWhereUniqueInput>>;
};

export type ProductToSizeCreateOrConnectWithoutProductInput = {
  where: ProductToSizeWhereUniqueInput;
  create: ProductToSizeCreateWithoutProductInput;
};

export type ProductToSizeCreateOrConnectWithoutSizeInput = {
  where: ProductToSizeWhereUniqueInput;
  create: ProductToSizeCreateWithoutSizeInput;
};

export type ProductToSizeCreateWithoutProductInput = {
  size?: Maybe<SizeCreateNestedOneWithoutProductToSizeInput>;
};

export type ProductToSizeCreateWithoutSizeInput = {
  product: ProductCreateNestedOneWithoutSizesInput;
};

export type ProductToSizeListRelationFilter = {
  every?: Maybe<ProductToSizeWhereInput>;
  some?: Maybe<ProductToSizeWhereInput>;
  none?: Maybe<ProductToSizeWhereInput>;
};

export type ProductToSizeProductIdSizeIdCompoundUniqueInput = {
  productId: Scalars['Int'];
  sizeId: Scalars['Int'];
};

export type ProductToSizeScalarWhereInput = {
  AND?: Maybe<Array<ProductToSizeScalarWhereInput>>;
  OR?: Maybe<Array<ProductToSizeScalarWhereInput>>;
  NOT?: Maybe<Array<ProductToSizeScalarWhereInput>>;
  productId?: Maybe<IntFilter>;
  sizeId?: Maybe<IntFilter>;
};

export type ProductToSizeUpdateManyMutationInput = {
  _: Scalars['String'];
};

export type ProductToSizeUpdateManyWithWhereWithoutProductInput = {
  where: ProductToSizeScalarWhereInput;
  data: ProductToSizeUpdateManyMutationInput;
};

export type ProductToSizeUpdateManyWithWhereWithoutSizeInput = {
  where: ProductToSizeScalarWhereInput;
  data: ProductToSizeUpdateManyMutationInput;
};

export type ProductToSizeUpdateManyWithoutProductInput = {
  create?: Maybe<Array<ProductToSizeCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToSizeCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<ProductToSizeUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<ProductToSizeCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToSizeWhereUniqueInput>>;
  set?: Maybe<Array<ProductToSizeWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToSizeWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToSizeWhereUniqueInput>>;
  update?: Maybe<Array<ProductToSizeUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<ProductToSizeUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<ProductToSizeScalarWhereInput>>;
};

export type ProductToSizeUpdateManyWithoutSizeInput = {
  create?: Maybe<Array<ProductToSizeCreateWithoutSizeInput>>;
  connectOrCreate?: Maybe<Array<ProductToSizeCreateOrConnectWithoutSizeInput>>;
  upsert?: Maybe<Array<ProductToSizeUpsertWithWhereUniqueWithoutSizeInput>>;
  createMany?: Maybe<ProductToSizeCreateManySizeInputEnvelope>;
  connect?: Maybe<Array<ProductToSizeWhereUniqueInput>>;
  set?: Maybe<Array<ProductToSizeWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToSizeWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToSizeWhereUniqueInput>>;
  update?: Maybe<Array<ProductToSizeUpdateWithWhereUniqueWithoutSizeInput>>;
  updateMany?: Maybe<Array<ProductToSizeUpdateManyWithWhereWithoutSizeInput>>;
  deleteMany?: Maybe<Array<ProductToSizeScalarWhereInput>>;
};

export type ProductToSizeUpdateWithWhereUniqueWithoutProductInput = {
  where: ProductToSizeWhereUniqueInput;
  data: ProductToSizeUpdateWithoutProductInput;
};

export type ProductToSizeUpdateWithWhereUniqueWithoutSizeInput = {
  where: ProductToSizeWhereUniqueInput;
  data: ProductToSizeUpdateWithoutSizeInput;
};

export type ProductToSizeUpdateWithoutProductInput = {
  size?: Maybe<SizeUpdateOneWithoutProductToSizeInput>;
};

export type ProductToSizeUpdateWithoutSizeInput = {
  product?: Maybe<ProductUpdateOneRequiredWithoutSizesInput>;
};

export type ProductToSizeUpsertWithWhereUniqueWithoutProductInput = {
  where: ProductToSizeWhereUniqueInput;
  update: ProductToSizeUpdateWithoutProductInput;
  create: ProductToSizeCreateWithoutProductInput;
};

export type ProductToSizeUpsertWithWhereUniqueWithoutSizeInput = {
  where: ProductToSizeWhereUniqueInput;
  update: ProductToSizeUpdateWithoutSizeInput;
  create: ProductToSizeCreateWithoutSizeInput;
};

export type ProductToSizeWhereInput = {
  AND?: Maybe<Array<ProductToSizeWhereInput>>;
  OR?: Maybe<Array<ProductToSizeWhereInput>>;
  NOT?: Maybe<Array<ProductToSizeWhereInput>>;
  productId?: Maybe<IntFilter>;
  sizeId?: Maybe<IntFilter>;
  product?: Maybe<ProductWhereInput>;
  size?: Maybe<SizeWhereInput>;
};

export type ProductToSizeWhereUniqueInput = {
  productId_sizeId?: Maybe<ProductToSizeProductIdSizeIdCompoundUniqueInput>;
};

export type ProductToTag = {
  __typename?: 'ProductToTag';
  productId: Scalars['Int'];
  tagId: Scalars['Int'];
  product: Product;
  tag?: Maybe<Tag>;
};

export type ProductToTagCreateManyProductInput = {
  tagId: Scalars['Int'];
};

export type ProductToTagCreateManyProductInputEnvelope = {
  data?: Maybe<Array<ProductToTagCreateManyProductInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToTagCreateManyTagInput = {
  productId: Scalars['Int'];
};

export type ProductToTagCreateManyTagInputEnvelope = {
  data?: Maybe<Array<ProductToTagCreateManyTagInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductToTagCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<ProductToTagCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToTagCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<ProductToTagCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToTagWhereUniqueInput>>;
};

export type ProductToTagCreateNestedManyWithoutTagInput = {
  create?: Maybe<Array<ProductToTagCreateWithoutTagInput>>;
  connectOrCreate?: Maybe<Array<ProductToTagCreateOrConnectWithoutTagInput>>;
  createMany?: Maybe<ProductToTagCreateManyTagInputEnvelope>;
  connect?: Maybe<Array<ProductToTagWhereUniqueInput>>;
};

export type ProductToTagCreateOrConnectWithoutProductInput = {
  where: ProductToTagWhereUniqueInput;
  create: ProductToTagCreateWithoutProductInput;
};

export type ProductToTagCreateOrConnectWithoutTagInput = {
  where: ProductToTagWhereUniqueInput;
  create: ProductToTagCreateWithoutTagInput;
};

export type ProductToTagCreateWithoutProductInput = {
  tag?: Maybe<TagCreateNestedOneWithoutProductInput>;
};

export type ProductToTagCreateWithoutTagInput = {
  product: ProductCreateNestedOneWithoutTagsInput;
};

export type ProductToTagListRelationFilter = {
  every?: Maybe<ProductToTagWhereInput>;
  some?: Maybe<ProductToTagWhereInput>;
  none?: Maybe<ProductToTagWhereInput>;
};

export type ProductToTagProductIdTagIdCompoundUniqueInput = {
  productId: Scalars['Int'];
  tagId: Scalars['Int'];
};

export type ProductToTagScalarWhereInput = {
  AND?: Maybe<Array<ProductToTagScalarWhereInput>>;
  OR?: Maybe<Array<ProductToTagScalarWhereInput>>;
  NOT?: Maybe<Array<ProductToTagScalarWhereInput>>;
  productId?: Maybe<IntFilter>;
  tagId?: Maybe<IntFilter>;
};

export type ProductToTagUpdateManyMutationInput = {
  _: Scalars['String'];
};

export type ProductToTagUpdateManyWithWhereWithoutProductInput = {
  where: ProductToTagScalarWhereInput;
  data: ProductToTagUpdateManyMutationInput;
};

export type ProductToTagUpdateManyWithWhereWithoutTagInput = {
  where: ProductToTagScalarWhereInput;
  data: ProductToTagUpdateManyMutationInput;
};

export type ProductToTagUpdateManyWithoutProductInput = {
  create?: Maybe<Array<ProductToTagCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductToTagCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<ProductToTagUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<ProductToTagCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductToTagWhereUniqueInput>>;
  set?: Maybe<Array<ProductToTagWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToTagWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToTagWhereUniqueInput>>;
  update?: Maybe<Array<ProductToTagUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<ProductToTagUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<ProductToTagScalarWhereInput>>;
};

export type ProductToTagUpdateManyWithoutTagInput = {
  create?: Maybe<Array<ProductToTagCreateWithoutTagInput>>;
  connectOrCreate?: Maybe<Array<ProductToTagCreateOrConnectWithoutTagInput>>;
  upsert?: Maybe<Array<ProductToTagUpsertWithWhereUniqueWithoutTagInput>>;
  createMany?: Maybe<ProductToTagCreateManyTagInputEnvelope>;
  connect?: Maybe<Array<ProductToTagWhereUniqueInput>>;
  set?: Maybe<Array<ProductToTagWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductToTagWhereUniqueInput>>;
  delete?: Maybe<Array<ProductToTagWhereUniqueInput>>;
  update?: Maybe<Array<ProductToTagUpdateWithWhereUniqueWithoutTagInput>>;
  updateMany?: Maybe<Array<ProductToTagUpdateManyWithWhereWithoutTagInput>>;
  deleteMany?: Maybe<Array<ProductToTagScalarWhereInput>>;
};

export type ProductToTagUpdateWithWhereUniqueWithoutProductInput = {
  where: ProductToTagWhereUniqueInput;
  data: ProductToTagUpdateWithoutProductInput;
};

export type ProductToTagUpdateWithWhereUniqueWithoutTagInput = {
  where: ProductToTagWhereUniqueInput;
  data: ProductToTagUpdateWithoutTagInput;
};

export type ProductToTagUpdateWithoutProductInput = {
  tag?: Maybe<TagUpdateOneWithoutProductInput>;
};

export type ProductToTagUpdateWithoutTagInput = {
  product?: Maybe<ProductUpdateOneRequiredWithoutTagsInput>;
};

export type ProductToTagUpsertWithWhereUniqueWithoutProductInput = {
  where: ProductToTagWhereUniqueInput;
  update: ProductToTagUpdateWithoutProductInput;
  create: ProductToTagCreateWithoutProductInput;
};

export type ProductToTagUpsertWithWhereUniqueWithoutTagInput = {
  where: ProductToTagWhereUniqueInput;
  update: ProductToTagUpdateWithoutTagInput;
  create: ProductToTagCreateWithoutTagInput;
};

export type ProductToTagWhereInput = {
  AND?: Maybe<Array<ProductToTagWhereInput>>;
  OR?: Maybe<Array<ProductToTagWhereInput>>;
  NOT?: Maybe<Array<ProductToTagWhereInput>>;
  productId?: Maybe<IntFilter>;
  tagId?: Maybe<IntFilter>;
  product?: Maybe<ProductWhereInput>;
  tag?: Maybe<TagWhereInput>;
};

export type ProductToTagWhereUniqueInput = {
  productId_tagId?: Maybe<ProductToTagProductIdTagIdCompoundUniqueInput>;
};

export type ProductTrans = {
  __typename?: 'ProductTrans';
  id: Scalars['Int'];
  productId: Scalars['Int'];
  languageCode: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  highlights?: Maybe<Scalars['String']>;
  metaData?: Maybe<Scalars['String']>;
  isDeleted: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  product: Product;
};

export type ProductTransCreateManyProductInput = {
  id?: Maybe<Scalars['Int']>;
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  highlights?: Maybe<Scalars['String']>;
  metaData?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ProductTransCreateManyProductInputEnvelope = {
  data?: Maybe<Array<ProductTransCreateManyProductInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductTransCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<ProductTransCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductTransCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<ProductTransCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductTransWhereUniqueInput>>;
};

export type ProductTransCreateOrConnectWithoutProductInput = {
  where: ProductTransWhereUniqueInput;
  create: ProductTransCreateWithoutProductInput;
};

export type ProductTransCreateWithoutProductInput = {
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  highlights?: Maybe<Scalars['String']>;
  metaData?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ProductTransListRelationFilter = {
  every?: Maybe<ProductTransWhereInput>;
  some?: Maybe<ProductTransWhereInput>;
  none?: Maybe<ProductTransWhereInput>;
};

export type ProductTransScalarWhereInput = {
  AND?: Maybe<Array<ProductTransScalarWhereInput>>;
  OR?: Maybe<Array<ProductTransScalarWhereInput>>;
  NOT?: Maybe<Array<ProductTransScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  productId?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  shortDescription?: Maybe<StringNullableFilter>;
  longDescription?: Maybe<StringNullableFilter>;
  highlights?: Maybe<StringNullableFilter>;
  metaData?: Maybe<StringNullableFilter>;
  isDeleted?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type ProductTransUpdateManyMutationInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  shortDescription?: Maybe<NullableStringFieldUpdateOperationsInput>;
  longDescription?: Maybe<NullableStringFieldUpdateOperationsInput>;
  highlights?: Maybe<NullableStringFieldUpdateOperationsInput>;
  metaData?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ProductTransUpdateManyWithWhereWithoutProductInput = {
  where: ProductTransScalarWhereInput;
  data: ProductTransUpdateManyMutationInput;
};

export type ProductTransUpdateManyWithoutProductInput = {
  create?: Maybe<Array<ProductTransCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductTransCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<ProductTransUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<ProductTransCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductTransWhereUniqueInput>>;
  set?: Maybe<Array<ProductTransWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductTransWhereUniqueInput>>;
  delete?: Maybe<Array<ProductTransWhereUniqueInput>>;
  update?: Maybe<Array<ProductTransUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<ProductTransUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<ProductTransScalarWhereInput>>;
};

export type ProductTransUpdateWithWhereUniqueWithoutProductInput = {
  where: ProductTransWhereUniqueInput;
  data: ProductTransUpdateWithoutProductInput;
};

export type ProductTransUpdateWithoutProductInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  shortDescription?: Maybe<NullableStringFieldUpdateOperationsInput>;
  longDescription?: Maybe<NullableStringFieldUpdateOperationsInput>;
  highlights?: Maybe<NullableStringFieldUpdateOperationsInput>;
  metaData?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ProductTransUpsertWithWhereUniqueWithoutProductInput = {
  where: ProductTransWhereUniqueInput;
  update: ProductTransUpdateWithoutProductInput;
  create: ProductTransCreateWithoutProductInput;
};

export type ProductTransWhereInput = {
  AND?: Maybe<Array<ProductTransWhereInput>>;
  OR?: Maybe<Array<ProductTransWhereInput>>;
  NOT?: Maybe<Array<ProductTransWhereInput>>;
  id?: Maybe<IntFilter>;
  productId?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  shortDescription?: Maybe<StringNullableFilter>;
  longDescription?: Maybe<StringNullableFilter>;
  highlights?: Maybe<StringNullableFilter>;
  metaData?: Maybe<StringNullableFilter>;
  isDeleted?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  product?: Maybe<ProductWhereInput>;
};

export type ProductTransWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ProductUpdateInput = {
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantityStep?: Maybe<IntFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  stockStatus?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  costPerItem?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mainPhoto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutProductsInput>;
  items?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  files?: Maybe<ProductFileUpdateManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeUpdateManyWithoutProductInput>;
  tags?: Maybe<ProductToTagUpdateManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryUpdateManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeUpdateManyWithoutProductInput>;
  colours?: Maybe<ProductToColourUpdateManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionUpdateManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialUpdateManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelUpdateManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteUpdateManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransUpdateManyWithoutProductInput>;
};

export type ProductUpdateManyMutationInput = {
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantityStep?: Maybe<IntFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  stockStatus?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  costPerItem?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mainPhoto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutVendorInput = {
  where: ProductScalarWhereInput;
  data: ProductUpdateManyMutationInput;
};

export type ProductUpdateManyWithoutVendorInput = {
  create?: Maybe<Array<ProductCreateWithoutVendorInput>>;
  connectOrCreate?: Maybe<Array<ProductCreateOrConnectWithoutVendorInput>>;
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutVendorInput>>;
  createMany?: Maybe<ProductCreateManyVendorInputEnvelope>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutVendorInput>>;
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereWithoutVendorInput>>;
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>;
};

export type ProductUpdateOneRequiredWithoutCategoriesInput = {
  create?: Maybe<ProductCreateWithoutCategoriesInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutCategoriesInput>;
  upsert?: Maybe<ProductUpsertWithoutCategoriesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutCategoriesInput>;
};

export type ProductUpdateOneRequiredWithoutColoursInput = {
  create?: Maybe<ProductCreateWithoutColoursInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutColoursInput>;
  upsert?: Maybe<ProductUpsertWithoutColoursInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutColoursInput>;
};

export type ProductUpdateOneRequiredWithoutDescriptionsInput = {
  create?: Maybe<ProductCreateWithoutDescriptionsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutDescriptionsInput>;
  upsert?: Maybe<ProductUpsertWithoutDescriptionsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutDescriptionsInput>;
};

export type ProductUpdateOneRequiredWithoutFilesInput = {
  create?: Maybe<ProductCreateWithoutFilesInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutFilesInput>;
  upsert?: Maybe<ProductUpsertWithoutFilesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutFilesInput>;
};

export type ProductUpdateOneRequiredWithoutItemsInput = {
  create?: Maybe<ProductCreateWithoutItemsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutItemsInput>;
  upsert?: Maybe<ProductUpsertWithoutItemsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutItemsInput>;
};

export type ProductUpdateOneRequiredWithoutLabelsInput = {
  create?: Maybe<ProductCreateWithoutLabelsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutLabelsInput>;
  upsert?: Maybe<ProductUpsertWithoutLabelsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutLabelsInput>;
};

export type ProductUpdateOneRequiredWithoutMaterialsInput = {
  create?: Maybe<ProductCreateWithoutMaterialsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutMaterialsInput>;
  upsert?: Maybe<ProductUpsertWithoutMaterialsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutMaterialsInput>;
};

export type ProductUpdateOneRequiredWithoutShapesInput = {
  create?: Maybe<ProductCreateWithoutShapesInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutShapesInput>;
  upsert?: Maybe<ProductUpsertWithoutShapesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutShapesInput>;
};

export type ProductUpdateOneRequiredWithoutSizesInput = {
  create?: Maybe<ProductCreateWithoutSizesInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutSizesInput>;
  upsert?: Maybe<ProductUpsertWithoutSizesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutSizesInput>;
};

export type ProductUpdateOneRequiredWithoutTagsInput = {
  create?: Maybe<ProductCreateWithoutTagsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutTagsInput>;
  upsert?: Maybe<ProductUpsertWithoutTagsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutTagsInput>;
};

export type ProductUpdateOneRequiredWithoutUserFavouritesInput = {
  create?: Maybe<ProductCreateWithoutUserFavouritesInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutUserFavouritesInput>;
  upsert?: Maybe<ProductUpsertWithoutUserFavouritesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutUserFavouritesInput>;
};

export type ProductUpdateWithWhereUniqueWithoutVendorInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutVendorInput;
};

export type ProductUpdateWithoutCategoriesInput = {
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantityStep?: Maybe<IntFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  stockStatus?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  costPerItem?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mainPhoto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutProductsInput>;
  items?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  files?: Maybe<ProductFileUpdateManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeUpdateManyWithoutProductInput>;
  tags?: Maybe<ProductToTagUpdateManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeUpdateManyWithoutProductInput>;
  colours?: Maybe<ProductToColourUpdateManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionUpdateManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialUpdateManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelUpdateManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteUpdateManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutColoursInput = {
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantityStep?: Maybe<IntFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  stockStatus?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  costPerItem?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mainPhoto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutProductsInput>;
  items?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  files?: Maybe<ProductFileUpdateManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeUpdateManyWithoutProductInput>;
  tags?: Maybe<ProductToTagUpdateManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryUpdateManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeUpdateManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionUpdateManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialUpdateManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelUpdateManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteUpdateManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutDescriptionsInput = {
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantityStep?: Maybe<IntFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  stockStatus?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  costPerItem?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mainPhoto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutProductsInput>;
  items?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  files?: Maybe<ProductFileUpdateManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeUpdateManyWithoutProductInput>;
  tags?: Maybe<ProductToTagUpdateManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryUpdateManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeUpdateManyWithoutProductInput>;
  colours?: Maybe<ProductToColourUpdateManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialUpdateManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelUpdateManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteUpdateManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutFilesInput = {
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantityStep?: Maybe<IntFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  stockStatus?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  costPerItem?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mainPhoto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutProductsInput>;
  items?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeUpdateManyWithoutProductInput>;
  tags?: Maybe<ProductToTagUpdateManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryUpdateManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeUpdateManyWithoutProductInput>;
  colours?: Maybe<ProductToColourUpdateManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionUpdateManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialUpdateManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelUpdateManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteUpdateManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutItemsInput = {
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantityStep?: Maybe<IntFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  stockStatus?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  costPerItem?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mainPhoto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutProductsInput>;
  files?: Maybe<ProductFileUpdateManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeUpdateManyWithoutProductInput>;
  tags?: Maybe<ProductToTagUpdateManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryUpdateManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeUpdateManyWithoutProductInput>;
  colours?: Maybe<ProductToColourUpdateManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionUpdateManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialUpdateManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelUpdateManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteUpdateManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutLabelsInput = {
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantityStep?: Maybe<IntFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  stockStatus?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  costPerItem?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mainPhoto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutProductsInput>;
  items?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  files?: Maybe<ProductFileUpdateManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeUpdateManyWithoutProductInput>;
  tags?: Maybe<ProductToTagUpdateManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryUpdateManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeUpdateManyWithoutProductInput>;
  colours?: Maybe<ProductToColourUpdateManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionUpdateManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialUpdateManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteUpdateManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutMaterialsInput = {
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantityStep?: Maybe<IntFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  stockStatus?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  costPerItem?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mainPhoto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutProductsInput>;
  items?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  files?: Maybe<ProductFileUpdateManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeUpdateManyWithoutProductInput>;
  tags?: Maybe<ProductToTagUpdateManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryUpdateManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeUpdateManyWithoutProductInput>;
  colours?: Maybe<ProductToColourUpdateManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionUpdateManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelUpdateManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteUpdateManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutShapesInput = {
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantityStep?: Maybe<IntFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  stockStatus?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  costPerItem?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mainPhoto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutProductsInput>;
  items?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  files?: Maybe<ProductFileUpdateManyWithoutProductInput>;
  tags?: Maybe<ProductToTagUpdateManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryUpdateManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeUpdateManyWithoutProductInput>;
  colours?: Maybe<ProductToColourUpdateManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionUpdateManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialUpdateManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelUpdateManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteUpdateManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutSizesInput = {
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantityStep?: Maybe<IntFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  stockStatus?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  costPerItem?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mainPhoto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutProductsInput>;
  items?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  files?: Maybe<ProductFileUpdateManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeUpdateManyWithoutProductInput>;
  tags?: Maybe<ProductToTagUpdateManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryUpdateManyWithoutProductInput>;
  colours?: Maybe<ProductToColourUpdateManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionUpdateManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialUpdateManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelUpdateManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteUpdateManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutTagsInput = {
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantityStep?: Maybe<IntFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  stockStatus?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  costPerItem?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mainPhoto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutProductsInput>;
  items?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  files?: Maybe<ProductFileUpdateManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeUpdateManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryUpdateManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeUpdateManyWithoutProductInput>;
  colours?: Maybe<ProductToColourUpdateManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionUpdateManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialUpdateManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelUpdateManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteUpdateManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutUserFavouritesInput = {
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantityStep?: Maybe<IntFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  stockStatus?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  costPerItem?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mainPhoto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutProductsInput>;
  items?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  files?: Maybe<ProductFileUpdateManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeUpdateManyWithoutProductInput>;
  tags?: Maybe<ProductToTagUpdateManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryUpdateManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeUpdateManyWithoutProductInput>;
  colours?: Maybe<ProductToColourUpdateManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionUpdateManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialUpdateManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelUpdateManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutVendorInput = {
  regularPrice?: Maybe<FloatFieldUpdateOperationsInput>;
  salePrice?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  quantityStep?: Maybe<IntFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  stockStatus?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  costPerItem?: Maybe<IntFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mainPhoto?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  items?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  files?: Maybe<ProductFileUpdateManyWithoutProductInput>;
  shapes?: Maybe<ProductToShapeUpdateManyWithoutProductInput>;
  tags?: Maybe<ProductToTagUpdateManyWithoutProductInput>;
  categories?: Maybe<ProductToCategoryUpdateManyWithoutProductInput>;
  sizes?: Maybe<ProductToSizeUpdateManyWithoutProductInput>;
  colours?: Maybe<ProductToColourUpdateManyWithoutProductInput>;
  descriptions?: Maybe<ProductToDescriptionUpdateManyWithoutProductInput>;
  materials?: Maybe<ProductToMaterialUpdateManyWithoutProductInput>;
  labels?: Maybe<ProductToLabelUpdateManyWithoutProductInput>;
  userFavourites?: Maybe<UserFavouriteUpdateManyWithoutProductInput>;
  elment_trans?: Maybe<ProductTransUpdateManyWithoutProductInput>;
};

export type ProductUpsertWithWhereUniqueWithoutVendorInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutVendorInput;
  create: ProductCreateWithoutVendorInput;
};

export type ProductUpsertWithoutCategoriesInput = {
  update: ProductUpdateWithoutCategoriesInput;
  create: ProductCreateWithoutCategoriesInput;
};

export type ProductUpsertWithoutColoursInput = {
  update: ProductUpdateWithoutColoursInput;
  create: ProductCreateWithoutColoursInput;
};

export type ProductUpsertWithoutDescriptionsInput = {
  update: ProductUpdateWithoutDescriptionsInput;
  create: ProductCreateWithoutDescriptionsInput;
};

export type ProductUpsertWithoutFilesInput = {
  update: ProductUpdateWithoutFilesInput;
  create: ProductCreateWithoutFilesInput;
};

export type ProductUpsertWithoutItemsInput = {
  update: ProductUpdateWithoutItemsInput;
  create: ProductCreateWithoutItemsInput;
};

export type ProductUpsertWithoutLabelsInput = {
  update: ProductUpdateWithoutLabelsInput;
  create: ProductCreateWithoutLabelsInput;
};

export type ProductUpsertWithoutMaterialsInput = {
  update: ProductUpdateWithoutMaterialsInput;
  create: ProductCreateWithoutMaterialsInput;
};

export type ProductUpsertWithoutShapesInput = {
  update: ProductUpdateWithoutShapesInput;
  create: ProductCreateWithoutShapesInput;
};

export type ProductUpsertWithoutSizesInput = {
  update: ProductUpdateWithoutSizesInput;
  create: ProductCreateWithoutSizesInput;
};

export type ProductUpsertWithoutTagsInput = {
  update: ProductUpdateWithoutTagsInput;
  create: ProductCreateWithoutTagsInput;
};

export type ProductUpsertWithoutUserFavouritesInput = {
  update: ProductUpdateWithoutUserFavouritesInput;
  create: ProductCreateWithoutUserFavouritesInput;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
  regularPrice?: Maybe<FloatFilter>;
  salePrice?: Maybe<FloatFilter>;
  saleStart?: Maybe<DateTimeNullableFilter>;
  saleEnd?: Maybe<DateTimeNullableFilter>;
  quantityStep?: Maybe<IntFilter>;
  stock?: Maybe<IntFilter>;
  weight?: Maybe<FloatFilter>;
  sku?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
  isDeleted?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  width?: Maybe<FloatFilter>;
  height?: Maybe<FloatFilter>;
  length?: Maybe<FloatFilter>;
  stockStatus?: Maybe<IntFilter>;
  isFeatured?: Maybe<IntFilter>;
  costPerItem?: Maybe<IntFilter>;
  slug?: Maybe<StringNullableFilter>;
  mainPhoto?: Maybe<StringNullableFilter>;
  title?: Maybe<StringNullableFilter>;
  isApproved?: Maybe<IntFilter>;
  vendor?: Maybe<UserWhereInput>;
  items?: Maybe<OrderItemListRelationFilter>;
  files?: Maybe<ProductFileListRelationFilter>;
  shapes?: Maybe<ProductToShapeListRelationFilter>;
  tags?: Maybe<ProductToTagListRelationFilter>;
  categories?: Maybe<ProductToCategoryListRelationFilter>;
  sizes?: Maybe<ProductToSizeListRelationFilter>;
  colours?: Maybe<ProductToColourListRelationFilter>;
  descriptions?: Maybe<ProductToDescriptionListRelationFilter>;
  materials?: Maybe<ProductToMaterialListRelationFilter>;
  labels?: Maybe<ProductToLabelListRelationFilter>;
  userFavourites?: Maybe<UserFavouriteListRelationFilter>;
  elment_trans?: Maybe<ProductTransListRelationFilter>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  filters?: Maybe<FiltersPayload>;
  stockFilters?: Maybe<FiltersPayload>;
  productCategories: Array<ProductCategory>;
  vendors?: Maybe<Array<Maybe<User>>>;
  shipmentadr?: Maybe<Shipmentadr>;
  shipmentadrs: Array<Shipmentadr>;
  quotation?: Maybe<Quotation>;
  quotations: Array<Quotation>;
  orders: Array<Order>;
  order?: Maybe<Order>;
  products: Array<Product>;
  stocks: Array<Stock>;
  product?: Maybe<Product>;
  stock?: Maybe<Stock>;
  coupons: Array<Coupon>;
  couponCheck: Array<Coupon>;
  cargos: Array<Cargo>;
  AdminUser?: Maybe<User>;
  AdminUsers: Array<User>;
  AdminUsersCount?: Maybe<Scalars['Int']>;
  AdminOrder?: Maybe<Order>;
  AdminOrders: Array<Order>;
  AdminOrdersCount?: Maybe<Scalars['Int']>;
  AdminCountry?: Maybe<Country>;
  AdminCountries: Array<Country>;
  AdminCountriesCount?: Maybe<Scalars['Int']>;
  AdminArticle?: Maybe<Article>;
  AdminArticles: Array<Article>;
  AdminArticlesCount?: Maybe<Scalars['Int']>;
  AdminBankAccount?: Maybe<BankAccount>;
  AdminBankAccounts: Array<BankAccount>;
  AdminBankAccountsCount?: Maybe<Scalars['Int']>;
  AdminBankCard?: Maybe<BankCard>;
  AdminBankCards: Array<BankCard>;
  AdminBankCardsCount?: Maybe<Scalars['Int']>;
  AdminCargo?: Maybe<Cargo>;
  AdminCargos: Array<Cargo>;
  AdminCargosCount?: Maybe<Scalars['Int']>;
  AdminCity?: Maybe<City>;
  AdminCities: Array<City>;
  AdminCitiesCount?: Maybe<Scalars['Int']>;
  AdminColour?: Maybe<Colour>;
  AdminColours: Array<Colour>;
  AdminColoursCount?: Maybe<Scalars['Int']>;
  AdminContact?: Maybe<Contact>;
  AdminContacts: Array<Contact>;
  AdminContactsCount?: Maybe<Scalars['Int']>;
  AdminCoupon?: Maybe<Coupon>;
  AdminCoupons: Array<Coupon>;
  AdminCouponsCount?: Maybe<Scalars['Int']>;
  AdminCouponsUsed?: Maybe<CouponsUsed>;
  AdminCouponsUseds: Array<CouponsUsed>;
  AdminCouponsUsedsCount?: Maybe<Scalars['Int']>;
  AdminCurrency?: Maybe<Currency>;
  AdminCurrencies: Array<Currency>;
  AdminCurrenciesCount?: Maybe<Scalars['Int']>;
  AdminLabel?: Maybe<Label>;
  AdminLabels: Array<Label>;
  AdminLabelsCount?: Maybe<Scalars['Int']>;
  AdminMaterial?: Maybe<Material>;
  AdminMaterials: Array<Material>;
  AdminMaterialsCount?: Maybe<Scalars['Int']>;
  AdminProduct?: Maybe<Product>;
  AdminProducts: Array<Product>;
  AdminProductsCount?: Maybe<Scalars['Int']>;
  AdminQuotation?: Maybe<Quotation>;
  AdminQuotations: Array<Quotation>;
  AdminQuotationsCount?: Maybe<Scalars['Int']>;
  AdminShipmentadr?: Maybe<Shipmentadr>;
  AdminShipmentadrs: Array<Shipmentadr>;
  AdminShipmentadrsCount?: Maybe<Scalars['Int']>;
};


export type QueryFiltersArgs = {
  vendorId?: Maybe<Scalars['Int']>;
  langCode: Scalars['String'];
};


export type QueryStockFiltersArgs = {
  vendorId?: Maybe<Scalars['Int']>;
  langCode: Scalars['String'];
};


export type QueryProductCategoriesArgs = {
  where?: Maybe<ProductCategoryWhereInput>;
  orderBy?: Maybe<Array<ProductCategoryOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductCategoryWhereUniqueInput>;
};


export type QueryVendorsArgs = {
  categoriesIds?: Maybe<IntFilter>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryShipmentadrArgs = {
  where: ShipmentadrWhereUniqueInput;
};


export type QueryShipmentadrsArgs = {
  where?: Maybe<ShipmentadrWhereInput>;
  orderBy?: Maybe<Array<ShipmentadrOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ShipmentadrWhereUniqueInput>;
};


export type QueryQuotationArgs = {
  where: QuotationWhereUniqueInput;
};


export type QueryQuotationsArgs = {
  where?: Maybe<QuotationWhereInput>;
  orderBy?: Maybe<Array<QuotationOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<QuotationWhereUniqueInput>;
};


export type QueryOrdersArgs = {
  where?: Maybe<OrderWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderWhereUniqueInput>;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductWhereUniqueInput>;
};


export type QueryStocksArgs = {
  where?: Maybe<StockWhereInput>;
  orderBy?: Maybe<Array<StockOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockWhereUniqueInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryStockArgs = {
  where: StockWhereUniqueInput;
};


export type QueryCouponsArgs = {
  where?: Maybe<CouponWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CouponWhereUniqueInput>;
};


export type QueryCouponCheckArgs = {
  where?: Maybe<CouponWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CouponWhereUniqueInput>;
};


export type QueryCargosArgs = {
  where?: Maybe<CargoWhereInput>;
  orderBy?: Maybe<Array<CargoOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CargoWhereUniqueInput>;
};


export type QueryAdminUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryAdminUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UserWhereUniqueInput>;
};


export type QueryAdminUsersCountArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryAdminOrdersArgs = {
  where?: Maybe<OrderWhereInput>;
  orderBy?: Maybe<Array<OrderOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderWhereUniqueInput>;
};


export type QueryAdminOrdersCountArgs = {
  where?: Maybe<OrderWhereInput>;
  orderBy?: Maybe<OrderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminCountryArgs = {
  where: CountryWhereUniqueInput;
};


export type QueryAdminCountriesArgs = {
  where?: Maybe<CountryWhereInput>;
  orderBy?: Maybe<Array<CountryOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CountryWhereUniqueInput>;
};


export type QueryAdminCountriesCountArgs = {
  where?: Maybe<CountryWhereInput>;
  orderBy?: Maybe<CountryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CountryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminArticleArgs = {
  where: ArticleWhereUniqueInput;
};


export type QueryAdminArticlesArgs = {
  where?: Maybe<ArticleWhereInput>;
  orderBy?: Maybe<Array<ArticleOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ArticleWhereUniqueInput>;
};


export type QueryAdminArticlesCountArgs = {
  where?: Maybe<ArticleWhereInput>;
  orderBy?: Maybe<ArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ArticleWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminBankAccountArgs = {
  where: BankAccountWhereUniqueInput;
};


export type QueryAdminBankAccountsArgs = {
  where?: Maybe<BankAccountWhereInput>;
  orderBy?: Maybe<Array<BankAccountOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<BankAccountWhereUniqueInput>;
};


export type QueryAdminBankAccountsCountArgs = {
  where?: Maybe<BankAccountWhereInput>;
  orderBy?: Maybe<BankAccountOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<BankAccountWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminBankCardArgs = {
  where: BankCardWhereUniqueInput;
};


export type QueryAdminBankCardsArgs = {
  where?: Maybe<BankCardWhereInput>;
  orderBy?: Maybe<Array<BankCardOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<BankCardWhereUniqueInput>;
};


export type QueryAdminBankCardsCountArgs = {
  where?: Maybe<BankCardWhereInput>;
  orderBy?: Maybe<BankCardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<BankCardWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminCargoArgs = {
  where: CargoWhereUniqueInput;
};


export type QueryAdminCargosArgs = {
  where?: Maybe<CargoWhereInput>;
  orderBy?: Maybe<Array<CargoOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CargoWhereUniqueInput>;
};


export type QueryAdminCargosCountArgs = {
  where?: Maybe<CargoWhereInput>;
  orderBy?: Maybe<CargoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CargoWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminCityArgs = {
  where: CityWhereUniqueInput;
};


export type QueryAdminCitiesArgs = {
  where?: Maybe<CityWhereInput>;
  orderBy?: Maybe<Array<CityOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CityWhereUniqueInput>;
};


export type QueryAdminCitiesCountArgs = {
  where?: Maybe<CityWhereInput>;
  orderBy?: Maybe<CityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CityWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminColourArgs = {
  where: ColourWhereUniqueInput;
};


export type QueryAdminColoursArgs = {
  where?: Maybe<ColourWhereInput>;
  orderBy?: Maybe<Array<ColourOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ColourWhereUniqueInput>;
};


export type QueryAdminColoursCountArgs = {
  where?: Maybe<ColourWhereInput>;
  orderBy?: Maybe<ColourOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ColourWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminContactArgs = {
  where: ContactWhereUniqueInput;
};


export type QueryAdminContactsArgs = {
  where?: Maybe<ContactWhereInput>;
  orderBy?: Maybe<Array<ContactOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ContactWhereUniqueInput>;
};


export type QueryAdminContactsCountArgs = {
  where?: Maybe<ContactWhereInput>;
  orderBy?: Maybe<ContactOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ContactWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminCouponArgs = {
  where: CouponWhereUniqueInput;
};


export type QueryAdminCouponsArgs = {
  where?: Maybe<CouponWhereInput>;
  orderBy?: Maybe<Array<CouponOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CouponWhereUniqueInput>;
};


export type QueryAdminCouponsCountArgs = {
  where?: Maybe<CouponWhereInput>;
  orderBy?: Maybe<CouponOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CouponWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminCouponsUsedArgs = {
  where: CouponsUsedWhereUniqueInput;
};


export type QueryAdminCouponsUsedsArgs = {
  where?: Maybe<CouponsUsedWhereInput>;
  orderBy?: Maybe<Array<CouponsUsedOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CouponsUsedWhereUniqueInput>;
};


export type QueryAdminCouponsUsedsCountArgs = {
  where?: Maybe<CouponsUsedWhereInput>;
  orderBy?: Maybe<CouponsUsedOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CouponsUsedWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminCurrencyArgs = {
  where: CurrencyWhereUniqueInput;
};


export type QueryAdminCurrenciesArgs = {
  where?: Maybe<CurrencyWhereInput>;
  orderBy?: Maybe<Array<CurrencyOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CurrencyWhereUniqueInput>;
};


export type QueryAdminCurrenciesCountArgs = {
  where?: Maybe<CurrencyWhereInput>;
  orderBy?: Maybe<CurrencyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CurrencyWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminLabelArgs = {
  where: LabelWhereUniqueInput;
};


export type QueryAdminLabelsArgs = {
  where?: Maybe<LabelWhereInput>;
  orderBy?: Maybe<Array<LabelOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<LabelWhereUniqueInput>;
};


export type QueryAdminLabelsCountArgs = {
  where?: Maybe<LabelWhereInput>;
  orderBy?: Maybe<LabelOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<LabelWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminMaterialArgs = {
  where: MaterialWhereUniqueInput;
};


export type QueryAdminMaterialsArgs = {
  where?: Maybe<MaterialWhereInput>;
  orderBy?: Maybe<Array<MaterialOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MaterialWhereUniqueInput>;
};


export type QueryAdminMaterialsCountArgs = {
  where?: Maybe<MaterialWhereInput>;
  orderBy?: Maybe<MaterialOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MaterialWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryAdminProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductWhereUniqueInput>;
};


export type QueryAdminProductsCountArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminQuotationArgs = {
  where: QuotationWhereUniqueInput;
};


export type QueryAdminQuotationsArgs = {
  where?: Maybe<QuotationWhereInput>;
  orderBy?: Maybe<Array<QuotationOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<QuotationWhereUniqueInput>;
};


export type QueryAdminQuotationsCountArgs = {
  where?: Maybe<QuotationWhereInput>;
  orderBy?: Maybe<QuotationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<QuotationWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAdminShipmentadrArgs = {
  where: ShipmentadrWhereUniqueInput;
};


export type QueryAdminShipmentadrsArgs = {
  where?: Maybe<ShipmentadrWhereInput>;
  orderBy?: Maybe<Array<ShipmentadrOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ShipmentadrWhereUniqueInput>;
};


export type QueryAdminShipmentadrsCountArgs = {
  where?: Maybe<ShipmentadrWhereInput>;
  orderBy?: Maybe<ShipmentadrOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ShipmentadrWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
};

export type Quotation = {
  __typename?: 'Quotation';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  vendorId: Scalars['Int'];
  clientId: Scalars['Int'];
  categoryId: Scalars['Int'];
  quantity: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  estimatedDeliveryDate?: Maybe<Scalars['String']>;
  destinationCountryCode?: Maybe<Scalars['String']>;
  client?: Maybe<User>;
  vendor?: Maybe<User>;
  category: ProductCategory;
};

export type QuotationCreateInput = {
  title?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  estimatedDeliveryDate?: Maybe<Scalars['String']>;
  destinationCountryCode?: Maybe<Scalars['String']>;
  client?: Maybe<UserCreateNestedOneWithoutQuotationClientsInput>;
  vendor?: Maybe<UserCreateNestedOneWithoutQuotationVendorsInput>;
  category?: Maybe<ProductCategoryCreateNestedOneWithoutQuotationsInput>;
};

export type QuotationCreateManyCategoryInput = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['Int']>;
  clientId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  estimatedDeliveryDate?: Maybe<Scalars['String']>;
  destinationCountryCode?: Maybe<Scalars['String']>;
};

export type QuotationCreateManyCategoryInputEnvelope = {
  data?: Maybe<Array<QuotationCreateManyCategoryInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type QuotationCreateManyClientInput = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  estimatedDeliveryDate?: Maybe<Scalars['String']>;
  destinationCountryCode?: Maybe<Scalars['String']>;
};

export type QuotationCreateManyClientInputEnvelope = {
  data?: Maybe<Array<QuotationCreateManyClientInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type QuotationCreateManyVendorInput = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  estimatedDeliveryDate?: Maybe<Scalars['String']>;
  destinationCountryCode?: Maybe<Scalars['String']>;
};

export type QuotationCreateManyVendorInputEnvelope = {
  data?: Maybe<Array<QuotationCreateManyVendorInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type QuotationCreateNestedManyWithoutCategoryInput = {
  create?: Maybe<Array<QuotationCreateWithoutCategoryInput>>;
  connectOrCreate?: Maybe<Array<QuotationCreateOrConnectWithoutCategoryInput>>;
  createMany?: Maybe<QuotationCreateManyCategoryInputEnvelope>;
  connect?: Maybe<Array<QuotationWhereUniqueInput>>;
};

export type QuotationCreateNestedManyWithoutClientInput = {
  create?: Maybe<Array<QuotationCreateWithoutClientInput>>;
  connectOrCreate?: Maybe<Array<QuotationCreateOrConnectWithoutClientInput>>;
  createMany?: Maybe<QuotationCreateManyClientInputEnvelope>;
  connect?: Maybe<Array<QuotationWhereUniqueInput>>;
};

export type QuotationCreateNestedManyWithoutVendorInput = {
  create?: Maybe<Array<QuotationCreateWithoutVendorInput>>;
  connectOrCreate?: Maybe<Array<QuotationCreateOrConnectWithoutVendorInput>>;
  createMany?: Maybe<QuotationCreateManyVendorInputEnvelope>;
  connect?: Maybe<Array<QuotationWhereUniqueInput>>;
};

export type QuotationCreateOrConnectWithoutCategoryInput = {
  where: QuotationWhereUniqueInput;
  create: QuotationCreateWithoutCategoryInput;
};

export type QuotationCreateOrConnectWithoutClientInput = {
  where: QuotationWhereUniqueInput;
  create: QuotationCreateWithoutClientInput;
};

export type QuotationCreateOrConnectWithoutVendorInput = {
  where: QuotationWhereUniqueInput;
  create: QuotationCreateWithoutVendorInput;
};

export type QuotationCreateWithoutCategoryInput = {
  title?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  estimatedDeliveryDate?: Maybe<Scalars['String']>;
  destinationCountryCode?: Maybe<Scalars['String']>;
  client?: Maybe<UserCreateNestedOneWithoutQuotationClientsInput>;
  vendor?: Maybe<UserCreateNestedOneWithoutQuotationVendorsInput>;
};

export type QuotationCreateWithoutClientInput = {
  title?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  estimatedDeliveryDate?: Maybe<Scalars['String']>;
  destinationCountryCode?: Maybe<Scalars['String']>;
  vendor?: Maybe<UserCreateNestedOneWithoutQuotationVendorsInput>;
  category?: Maybe<ProductCategoryCreateNestedOneWithoutQuotationsInput>;
};

export type QuotationCreateWithoutVendorInput = {
  title?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  estimatedDeliveryDate?: Maybe<Scalars['String']>;
  destinationCountryCode?: Maybe<Scalars['String']>;
  client?: Maybe<UserCreateNestedOneWithoutQuotationClientsInput>;
  category?: Maybe<ProductCategoryCreateNestedOneWithoutQuotationsInput>;
};

export type QuotationListRelationFilter = {
  every?: Maybe<QuotationWhereInput>;
  some?: Maybe<QuotationWhereInput>;
  none?: Maybe<QuotationWhereInput>;
};

export type QuotationOrderByInput = {
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  vendorId?: Maybe<SortOrder>;
  clientId?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  quantity?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  photo?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
  estimatedDeliveryDate?: Maybe<SortOrder>;
  destinationCountryCode?: Maybe<SortOrder>;
};

export type QuotationScalarWhereInput = {
  AND?: Maybe<Array<QuotationScalarWhereInput>>;
  OR?: Maybe<Array<QuotationScalarWhereInput>>;
  NOT?: Maybe<Array<QuotationScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringNullableFilter>;
  vendorId?: Maybe<IntFilter>;
  clientId?: Maybe<IntFilter>;
  categoryId?: Maybe<IntFilter>;
  quantity?: Maybe<IntFilter>;
  description?: Maybe<StringNullableFilter>;
  photo?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  estimatedDeliveryDate?: Maybe<StringNullableFilter>;
  destinationCountryCode?: Maybe<StringNullableFilter>;
};

export type QuotationUpdateInput = {
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimatedDeliveryDate?: Maybe<NullableStringFieldUpdateOperationsInput>;
  destinationCountryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  client?: Maybe<UserUpdateOneWithoutQuotationClientsInput>;
  vendor?: Maybe<UserUpdateOneWithoutQuotationVendorsInput>;
  category?: Maybe<ProductCategoryUpdateOneRequiredWithoutQuotationsInput>;
};

export type QuotationUpdateManyMutationInput = {
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimatedDeliveryDate?: Maybe<NullableStringFieldUpdateOperationsInput>;
  destinationCountryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type QuotationUpdateManyWithWhereWithoutCategoryInput = {
  where: QuotationScalarWhereInput;
  data: QuotationUpdateManyMutationInput;
};

export type QuotationUpdateManyWithWhereWithoutClientInput = {
  where: QuotationScalarWhereInput;
  data: QuotationUpdateManyMutationInput;
};

export type QuotationUpdateManyWithWhereWithoutVendorInput = {
  where: QuotationScalarWhereInput;
  data: QuotationUpdateManyMutationInput;
};

export type QuotationUpdateManyWithoutCategoryInput = {
  create?: Maybe<Array<QuotationCreateWithoutCategoryInput>>;
  connectOrCreate?: Maybe<Array<QuotationCreateOrConnectWithoutCategoryInput>>;
  upsert?: Maybe<Array<QuotationUpsertWithWhereUniqueWithoutCategoryInput>>;
  createMany?: Maybe<QuotationCreateManyCategoryInputEnvelope>;
  connect?: Maybe<Array<QuotationWhereUniqueInput>>;
  set?: Maybe<Array<QuotationWhereUniqueInput>>;
  disconnect?: Maybe<Array<QuotationWhereUniqueInput>>;
  delete?: Maybe<Array<QuotationWhereUniqueInput>>;
  update?: Maybe<Array<QuotationUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: Maybe<Array<QuotationUpdateManyWithWhereWithoutCategoryInput>>;
  deleteMany?: Maybe<Array<QuotationScalarWhereInput>>;
};

export type QuotationUpdateManyWithoutClientInput = {
  create?: Maybe<Array<QuotationCreateWithoutClientInput>>;
  connectOrCreate?: Maybe<Array<QuotationCreateOrConnectWithoutClientInput>>;
  upsert?: Maybe<Array<QuotationUpsertWithWhereUniqueWithoutClientInput>>;
  createMany?: Maybe<QuotationCreateManyClientInputEnvelope>;
  connect?: Maybe<Array<QuotationWhereUniqueInput>>;
  set?: Maybe<Array<QuotationWhereUniqueInput>>;
  disconnect?: Maybe<Array<QuotationWhereUniqueInput>>;
  delete?: Maybe<Array<QuotationWhereUniqueInput>>;
  update?: Maybe<Array<QuotationUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: Maybe<Array<QuotationUpdateManyWithWhereWithoutClientInput>>;
  deleteMany?: Maybe<Array<QuotationScalarWhereInput>>;
};

export type QuotationUpdateManyWithoutVendorInput = {
  create?: Maybe<Array<QuotationCreateWithoutVendorInput>>;
  connectOrCreate?: Maybe<Array<QuotationCreateOrConnectWithoutVendorInput>>;
  upsert?: Maybe<Array<QuotationUpsertWithWhereUniqueWithoutVendorInput>>;
  createMany?: Maybe<QuotationCreateManyVendorInputEnvelope>;
  connect?: Maybe<Array<QuotationWhereUniqueInput>>;
  set?: Maybe<Array<QuotationWhereUniqueInput>>;
  disconnect?: Maybe<Array<QuotationWhereUniqueInput>>;
  delete?: Maybe<Array<QuotationWhereUniqueInput>>;
  update?: Maybe<Array<QuotationUpdateWithWhereUniqueWithoutVendorInput>>;
  updateMany?: Maybe<Array<QuotationUpdateManyWithWhereWithoutVendorInput>>;
  deleteMany?: Maybe<Array<QuotationScalarWhereInput>>;
};

export type QuotationUpdateWithWhereUniqueWithoutCategoryInput = {
  where: QuotationWhereUniqueInput;
  data: QuotationUpdateWithoutCategoryInput;
};

export type QuotationUpdateWithWhereUniqueWithoutClientInput = {
  where: QuotationWhereUniqueInput;
  data: QuotationUpdateWithoutClientInput;
};

export type QuotationUpdateWithWhereUniqueWithoutVendorInput = {
  where: QuotationWhereUniqueInput;
  data: QuotationUpdateWithoutVendorInput;
};

export type QuotationUpdateWithoutCategoryInput = {
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimatedDeliveryDate?: Maybe<NullableStringFieldUpdateOperationsInput>;
  destinationCountryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  client?: Maybe<UserUpdateOneWithoutQuotationClientsInput>;
  vendor?: Maybe<UserUpdateOneWithoutQuotationVendorsInput>;
};

export type QuotationUpdateWithoutClientInput = {
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimatedDeliveryDate?: Maybe<NullableStringFieldUpdateOperationsInput>;
  destinationCountryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutQuotationVendorsInput>;
  category?: Maybe<ProductCategoryUpdateOneRequiredWithoutQuotationsInput>;
};

export type QuotationUpdateWithoutVendorInput = {
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  estimatedDeliveryDate?: Maybe<NullableStringFieldUpdateOperationsInput>;
  destinationCountryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  client?: Maybe<UserUpdateOneWithoutQuotationClientsInput>;
  category?: Maybe<ProductCategoryUpdateOneRequiredWithoutQuotationsInput>;
};

export type QuotationUpsertWithWhereUniqueWithoutCategoryInput = {
  where: QuotationWhereUniqueInput;
  update: QuotationUpdateWithoutCategoryInput;
  create: QuotationCreateWithoutCategoryInput;
};

export type QuotationUpsertWithWhereUniqueWithoutClientInput = {
  where: QuotationWhereUniqueInput;
  update: QuotationUpdateWithoutClientInput;
  create: QuotationCreateWithoutClientInput;
};

export type QuotationUpsertWithWhereUniqueWithoutVendorInput = {
  where: QuotationWhereUniqueInput;
  update: QuotationUpdateWithoutVendorInput;
  create: QuotationCreateWithoutVendorInput;
};

export type QuotationWhereInput = {
  AND?: Maybe<Array<QuotationWhereInput>>;
  OR?: Maybe<Array<QuotationWhereInput>>;
  NOT?: Maybe<Array<QuotationWhereInput>>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringNullableFilter>;
  vendorId?: Maybe<IntFilter>;
  clientId?: Maybe<IntFilter>;
  categoryId?: Maybe<IntFilter>;
  quantity?: Maybe<IntFilter>;
  description?: Maybe<StringNullableFilter>;
  photo?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  estimatedDeliveryDate?: Maybe<StringNullableFilter>;
  destinationCountryCode?: Maybe<StringNullableFilter>;
  client?: Maybe<UserWhereInput>;
  vendor?: Maybe<UserWhereInput>;
  category?: Maybe<ProductCategoryWhereInput>;
};

export type QuotationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Rate = {
  __typename?: 'Rate';
  id: Scalars['Int'];
  rate: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  votedId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type RateCreateInput = {
  rate: Scalars['Int'];
  votedId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserCreateNestedOneWithoutRatesInput>;
};

export type RateCreateManyUserInput = {
  id?: Maybe<Scalars['Int']>;
  rate: Scalars['Int'];
  votedId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type RateCreateManyUserInputEnvelope = {
  data?: Maybe<Array<RateCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RateCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<RateCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<RateCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<RateCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<RateWhereUniqueInput>>;
};

export type RateCreateOrConnectWithoutUserInput = {
  where: RateWhereUniqueInput;
  create: RateCreateWithoutUserInput;
};

export type RateCreateWithoutUserInput = {
  rate: Scalars['Int'];
  votedId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type RateListRelationFilter = {
  every?: Maybe<RateWhereInput>;
  some?: Maybe<RateWhereInput>;
  none?: Maybe<RateWhereInput>;
};

export type RateScalarWhereInput = {
  AND?: Maybe<Array<RateScalarWhereInput>>;
  OR?: Maybe<Array<RateScalarWhereInput>>;
  NOT?: Maybe<Array<RateScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  rate?: Maybe<IntFilter>;
  userId?: Maybe<IntNullableFilter>;
  votedId?: Maybe<IntNullableFilter>;
  type?: Maybe<StringNullableFilter>;
  comment?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type RateUpdateManyMutationInput = {
  rate?: Maybe<IntFieldUpdateOperationsInput>;
  votedId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  comment?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type RateUpdateManyWithWhereWithoutUserInput = {
  where: RateScalarWhereInput;
  data: RateUpdateManyMutationInput;
};

export type RateUpdateManyWithoutUserInput = {
  create?: Maybe<Array<RateCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<RateCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<RateUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<RateCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<RateWhereUniqueInput>>;
  set?: Maybe<Array<RateWhereUniqueInput>>;
  disconnect?: Maybe<Array<RateWhereUniqueInput>>;
  delete?: Maybe<Array<RateWhereUniqueInput>>;
  update?: Maybe<Array<RateUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<RateUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<RateScalarWhereInput>>;
};

export type RateUpdateWithWhereUniqueWithoutUserInput = {
  where: RateWhereUniqueInput;
  data: RateUpdateWithoutUserInput;
};

export type RateUpdateWithoutUserInput = {
  rate?: Maybe<IntFieldUpdateOperationsInput>;
  votedId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  comment?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type RateUpsertWithWhereUniqueWithoutUserInput = {
  where: RateWhereUniqueInput;
  update: RateUpdateWithoutUserInput;
  create: RateCreateWithoutUserInput;
};

export type RateWhereInput = {
  AND?: Maybe<Array<RateWhereInput>>;
  OR?: Maybe<Array<RateWhereInput>>;
  NOT?: Maybe<Array<RateWhereInput>>;
  id?: Maybe<IntFilter>;
  rate?: Maybe<IntFilter>;
  userId?: Maybe<IntNullableFilter>;
  votedId?: Maybe<IntNullableFilter>;
  type?: Maybe<StringNullableFilter>;
  comment?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  user?: Maybe<UserWhereInput>;
};

export type RateWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['Int'];
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  rolePermissions: Array<RolePermission>;
  userToRoles: Array<UserToRole>;
};


export type RoleRolePermissionsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<RolePermissionWhereUniqueInput>;
};


export type RoleUserToRolesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UserToRoleWhereUniqueInput>;
};

export type RoleCreateNestedOneWithoutUserToRolesInput = {
  create?: Maybe<RoleCreateWithoutUserToRolesInput>;
  connectOrCreate?: Maybe<RoleCreateOrConnectWithoutUserToRolesInput>;
  connect?: Maybe<RoleWhereUniqueInput>;
};

export type RoleCreateOrConnectWithoutUserToRolesInput = {
  where: RoleWhereUniqueInput;
  create: RoleCreateWithoutUserToRolesInput;
};

export type RoleCreateWithoutUserToRolesInput = {
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  rolePermissions?: Maybe<RolePermissionCreateNestedManyWithoutRoleInput>;
};

export type RolePermission = {
  __typename?: 'RolePermission';
  id: Scalars['Int'];
  roleId: Scalars['Int'];
  permissionId: Scalars['Int'];
  permission: Permission;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  role: Role;
};

export type RolePermissionCreateManyRoleInput = {
  id?: Maybe<Scalars['Int']>;
  permissionId: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type RolePermissionCreateManyRoleInputEnvelope = {
  data?: Maybe<Array<RolePermissionCreateManyRoleInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RolePermissionCreateNestedManyWithoutRoleInput = {
  create?: Maybe<Array<RolePermissionCreateWithoutRoleInput>>;
  connectOrCreate?: Maybe<Array<RolePermissionCreateOrConnectWithoutRoleInput>>;
  createMany?: Maybe<RolePermissionCreateManyRoleInputEnvelope>;
  connect?: Maybe<Array<RolePermissionWhereUniqueInput>>;
};

export type RolePermissionCreateOrConnectWithoutRoleInput = {
  where: RolePermissionWhereUniqueInput;
  create: RolePermissionCreateWithoutRoleInput;
};

export type RolePermissionCreateWithoutRoleInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  permission: PermissionCreateNestedOneWithoutRolePermissionsInput;
};

export type RolePermissionListRelationFilter = {
  every?: Maybe<RolePermissionWhereInput>;
  some?: Maybe<RolePermissionWhereInput>;
  none?: Maybe<RolePermissionWhereInput>;
};

export type RolePermissionScalarWhereInput = {
  AND?: Maybe<Array<RolePermissionScalarWhereInput>>;
  OR?: Maybe<Array<RolePermissionScalarWhereInput>>;
  NOT?: Maybe<Array<RolePermissionScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  roleId?: Maybe<IntFilter>;
  permissionId?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type RolePermissionUpdateManyMutationInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
  where: RolePermissionScalarWhereInput;
  data: RolePermissionUpdateManyMutationInput;
};

export type RolePermissionUpdateManyWithoutRoleInput = {
  create?: Maybe<Array<RolePermissionCreateWithoutRoleInput>>;
  connectOrCreate?: Maybe<Array<RolePermissionCreateOrConnectWithoutRoleInput>>;
  upsert?: Maybe<Array<RolePermissionUpsertWithWhereUniqueWithoutRoleInput>>;
  createMany?: Maybe<RolePermissionCreateManyRoleInputEnvelope>;
  connect?: Maybe<Array<RolePermissionWhereUniqueInput>>;
  set?: Maybe<Array<RolePermissionWhereUniqueInput>>;
  disconnect?: Maybe<Array<RolePermissionWhereUniqueInput>>;
  delete?: Maybe<Array<RolePermissionWhereUniqueInput>>;
  update?: Maybe<Array<RolePermissionUpdateWithWhereUniqueWithoutRoleInput>>;
  updateMany?: Maybe<Array<RolePermissionUpdateManyWithWhereWithoutRoleInput>>;
  deleteMany?: Maybe<Array<RolePermissionScalarWhereInput>>;
};

export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
  where: RolePermissionWhereUniqueInput;
  data: RolePermissionUpdateWithoutRoleInput;
};

export type RolePermissionUpdateWithoutRoleInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  permission?: Maybe<PermissionUpdateOneRequiredWithoutRolePermissionsInput>;
};

export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
  where: RolePermissionWhereUniqueInput;
  update: RolePermissionUpdateWithoutRoleInput;
  create: RolePermissionCreateWithoutRoleInput;
};

export type RolePermissionWhereInput = {
  AND?: Maybe<Array<RolePermissionWhereInput>>;
  OR?: Maybe<Array<RolePermissionWhereInput>>;
  NOT?: Maybe<Array<RolePermissionWhereInput>>;
  id?: Maybe<IntFilter>;
  roleId?: Maybe<IntFilter>;
  permissionId?: Maybe<IntFilter>;
  permission?: Maybe<PermissionWhereInput>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  role?: Maybe<RoleWhereInput>;
};

export type RolePermissionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type RoleUpdateOneRequiredWithoutUserToRolesInput = {
  create?: Maybe<RoleCreateWithoutUserToRolesInput>;
  connectOrCreate?: Maybe<RoleCreateOrConnectWithoutUserToRolesInput>;
  upsert?: Maybe<RoleUpsertWithoutUserToRolesInput>;
  connect?: Maybe<RoleWhereUniqueInput>;
  update?: Maybe<RoleUpdateWithoutUserToRolesInput>;
};

export type RoleUpdateWithoutUserToRolesInput = {
  titleAR?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  rolePermissions?: Maybe<RolePermissionUpdateManyWithoutRoleInput>;
};

export type RoleUpsertWithoutUserToRolesInput = {
  update: RoleUpdateWithoutUserToRolesInput;
  create: RoleCreateWithoutUserToRolesInput;
};

export type RoleWhereInput = {
  AND?: Maybe<Array<RoleWhereInput>>;
  OR?: Maybe<Array<RoleWhereInput>>;
  NOT?: Maybe<Array<RoleWhereInput>>;
  id?: Maybe<IntFilter>;
  titleAR?: Maybe<StringNullableFilter>;
  titleEN?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  rolePermissions?: Maybe<RolePermissionListRelationFilter>;
  userToRoles?: Maybe<UserToRoleListRelationFilter>;
};

export type RoleWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Setting = {
  __typename?: 'Setting';
  id: Scalars['Int'];
  titleAR?: Maybe<Scalars['String']>;
  titleTR?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  fb?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  snapchat?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  mainUrl?: Maybe<Scalars['String']>;
  apiUrl?: Maybe<Scalars['String']>;
  openTime?: Maybe<Scalars['String']>;
  closeTime?: Maybe<Scalars['String']>;
  enableRating: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  playStoreLink?: Maybe<Scalars['String']>;
  appStoreLink?: Maybe<Scalars['String']>;
  notifyBySms: Scalars['Int'];
  notifyByEmail: Scalars['Int'];
  notifyByVoice: Scalars['Int'];
  favicon?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Scalars['String']>;
  defaultCurrency?: Maybe<Scalars['String']>;
  cookiesOpened: Scalars['Int'];
  teslimatAdresi?: Maybe<Scalars['String']>;
  faturaBelgi?: Maybe<Scalars['String']>;
  device_key?: Maybe<Scalars['String']>;
  notificationPhone?: Maybe<Scalars['String']>;
  notificationEmail?: Maybe<Scalars['String']>;
};

export type Shape = {
  __typename?: 'Shape';
  id: Scalars['Int'];
  elment_trans: Array<ShapeTrans>;
  productToShape: Array<ProductToShape>;
  stockToShape: Array<StockToShape>;
};


export type ShapeElment_TransArgs = {
  where?: Maybe<ShapeTransWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ShapeTransWhereUniqueInput>;
};


export type ShapeProductToShapeArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToShapeWhereUniqueInput>;
};


export type ShapeStockToShapeArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToShapeWhereUniqueInput>;
};

export type ShapeCreateNestedOneWithoutProductToShapeInput = {
  create?: Maybe<ShapeCreateWithoutProductToShapeInput>;
  connectOrCreate?: Maybe<ShapeCreateOrConnectWithoutProductToShapeInput>;
  connect?: Maybe<ShapeWhereUniqueInput>;
};

export type ShapeCreateNestedOneWithoutStockToShapeInput = {
  create?: Maybe<ShapeCreateWithoutStockToShapeInput>;
  connectOrCreate?: Maybe<ShapeCreateOrConnectWithoutStockToShapeInput>;
  connect?: Maybe<ShapeWhereUniqueInput>;
};

export type ShapeCreateOrConnectWithoutProductToShapeInput = {
  where: ShapeWhereUniqueInput;
  create: ShapeCreateWithoutProductToShapeInput;
};

export type ShapeCreateOrConnectWithoutStockToShapeInput = {
  where: ShapeWhereUniqueInput;
  create: ShapeCreateWithoutStockToShapeInput;
};

export type ShapeCreateWithoutProductToShapeInput = {
  elment_trans?: Maybe<ShapeTransCreateNestedManyWithoutShapeInput>;
  stockToShape?: Maybe<StockToShapeCreateNestedManyWithoutShapeInput>;
};

export type ShapeCreateWithoutStockToShapeInput = {
  elment_trans?: Maybe<ShapeTransCreateNestedManyWithoutShapeInput>;
  productToShape?: Maybe<ProductToShapeCreateNestedManyWithoutShapeInput>;
};

export type ShapeTrans = {
  __typename?: 'ShapeTrans';
  id: Scalars['Int'];
  rowId: Scalars['Int'];
  languageCode: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  shape: Shape;
};

export type ShapeTransCreateManyShapeInput = {
  id?: Maybe<Scalars['Int']>;
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ShapeTransCreateManyShapeInputEnvelope = {
  data?: Maybe<Array<ShapeTransCreateManyShapeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ShapeTransCreateNestedManyWithoutShapeInput = {
  create?: Maybe<Array<ShapeTransCreateWithoutShapeInput>>;
  connectOrCreate?: Maybe<Array<ShapeTransCreateOrConnectWithoutShapeInput>>;
  createMany?: Maybe<ShapeTransCreateManyShapeInputEnvelope>;
  connect?: Maybe<Array<ShapeTransWhereUniqueInput>>;
};

export type ShapeTransCreateOrConnectWithoutShapeInput = {
  where: ShapeTransWhereUniqueInput;
  create: ShapeTransCreateWithoutShapeInput;
};

export type ShapeTransCreateWithoutShapeInput = {
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ShapeTransListRelationFilter = {
  every?: Maybe<ShapeTransWhereInput>;
  some?: Maybe<ShapeTransWhereInput>;
  none?: Maybe<ShapeTransWhereInput>;
};

export type ShapeTransScalarWhereInput = {
  AND?: Maybe<Array<ShapeTransScalarWhereInput>>;
  OR?: Maybe<Array<ShapeTransScalarWhereInput>>;
  NOT?: Maybe<Array<ShapeTransScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  rowId?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
};

export type ShapeTransUpdateManyMutationInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ShapeTransUpdateManyWithWhereWithoutShapeInput = {
  where: ShapeTransScalarWhereInput;
  data: ShapeTransUpdateManyMutationInput;
};

export type ShapeTransUpdateManyWithoutShapeInput = {
  create?: Maybe<Array<ShapeTransCreateWithoutShapeInput>>;
  connectOrCreate?: Maybe<Array<ShapeTransCreateOrConnectWithoutShapeInput>>;
  upsert?: Maybe<Array<ShapeTransUpsertWithWhereUniqueWithoutShapeInput>>;
  createMany?: Maybe<ShapeTransCreateManyShapeInputEnvelope>;
  connect?: Maybe<Array<ShapeTransWhereUniqueInput>>;
  set?: Maybe<Array<ShapeTransWhereUniqueInput>>;
  disconnect?: Maybe<Array<ShapeTransWhereUniqueInput>>;
  delete?: Maybe<Array<ShapeTransWhereUniqueInput>>;
  update?: Maybe<Array<ShapeTransUpdateWithWhereUniqueWithoutShapeInput>>;
  updateMany?: Maybe<Array<ShapeTransUpdateManyWithWhereWithoutShapeInput>>;
  deleteMany?: Maybe<Array<ShapeTransScalarWhereInput>>;
};

export type ShapeTransUpdateWithWhereUniqueWithoutShapeInput = {
  where: ShapeTransWhereUniqueInput;
  data: ShapeTransUpdateWithoutShapeInput;
};

export type ShapeTransUpdateWithoutShapeInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ShapeTransUpsertWithWhereUniqueWithoutShapeInput = {
  where: ShapeTransWhereUniqueInput;
  update: ShapeTransUpdateWithoutShapeInput;
  create: ShapeTransCreateWithoutShapeInput;
};

export type ShapeTransWhereInput = {
  AND?: Maybe<Array<ShapeTransWhereInput>>;
  OR?: Maybe<Array<ShapeTransWhereInput>>;
  NOT?: Maybe<Array<ShapeTransWhereInput>>;
  id?: Maybe<IntFilter>;
  rowId?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  shape?: Maybe<ShapeWhereInput>;
};

export type ShapeTransWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ShapeUpdateOneWithoutProductToShapeInput = {
  create?: Maybe<ShapeCreateWithoutProductToShapeInput>;
  connectOrCreate?: Maybe<ShapeCreateOrConnectWithoutProductToShapeInput>;
  upsert?: Maybe<ShapeUpsertWithoutProductToShapeInput>;
  connect?: Maybe<ShapeWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ShapeUpdateWithoutProductToShapeInput>;
};

export type ShapeUpdateOneWithoutStockToShapeInput = {
  create?: Maybe<ShapeCreateWithoutStockToShapeInput>;
  connectOrCreate?: Maybe<ShapeCreateOrConnectWithoutStockToShapeInput>;
  upsert?: Maybe<ShapeUpsertWithoutStockToShapeInput>;
  connect?: Maybe<ShapeWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ShapeUpdateWithoutStockToShapeInput>;
};

export type ShapeUpdateWithoutProductToShapeInput = {
  elment_trans?: Maybe<ShapeTransUpdateManyWithoutShapeInput>;
  stockToShape?: Maybe<StockToShapeUpdateManyWithoutShapeInput>;
};

export type ShapeUpdateWithoutStockToShapeInput = {
  elment_trans?: Maybe<ShapeTransUpdateManyWithoutShapeInput>;
  productToShape?: Maybe<ProductToShapeUpdateManyWithoutShapeInput>;
};

export type ShapeUpsertWithoutProductToShapeInput = {
  update: ShapeUpdateWithoutProductToShapeInput;
  create: ShapeCreateWithoutProductToShapeInput;
};

export type ShapeUpsertWithoutStockToShapeInput = {
  update: ShapeUpdateWithoutStockToShapeInput;
  create: ShapeCreateWithoutStockToShapeInput;
};

export type ShapeWhereInput = {
  AND?: Maybe<Array<ShapeWhereInput>>;
  OR?: Maybe<Array<ShapeWhereInput>>;
  NOT?: Maybe<Array<ShapeWhereInput>>;
  id?: Maybe<IntFilter>;
  elment_trans?: Maybe<ShapeTransListRelationFilter>;
  productToShape?: Maybe<ProductToShapeListRelationFilter>;
  stockToShape?: Maybe<StockToShapeListRelationFilter>;
};

export type ShapeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Shipmentadr = {
  __typename?: 'Shipmentadr';
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  receiverMobile?: Maybe<Scalars['String']>;
  receiverMobile2?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  cityId?: Maybe<Scalars['Int']>;
  city?: Maybe<City>;
  region?: Maybe<Scalars['String']>;
  blockNr?: Maybe<Scalars['String']>;
  road?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  apartment?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isDeleted: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isDefault: Scalars['Int'];
  orders: Array<Order>;
};


export type ShipmentadrOrdersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderWhereUniqueInput>;
};

export type ShipmentadrCreateInput = {
  userId?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  receiverMobile?: Maybe<Scalars['String']>;
  receiverMobile2?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  blockNr?: Maybe<Scalars['String']>;
  road?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  apartment?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isDefault?: Maybe<Scalars['Int']>;
  country?: Maybe<CountryCreateNestedOneWithoutShipmentAddressesInput>;
  city?: Maybe<CityCreateNestedOneWithoutShipmentadrInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutShipmentAddressInput>;
};

export type ShipmentadrCreateManyCityInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  receiverMobile?: Maybe<Scalars['String']>;
  receiverMobile2?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  blockNr?: Maybe<Scalars['String']>;
  road?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  apartment?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isDefault?: Maybe<Scalars['Int']>;
};

export type ShipmentadrCreateManyCityInputEnvelope = {
  data?: Maybe<Array<ShipmentadrCreateManyCityInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ShipmentadrCreateManyCountryInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  receiverMobile?: Maybe<Scalars['String']>;
  receiverMobile2?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Int']>;
  region?: Maybe<Scalars['String']>;
  blockNr?: Maybe<Scalars['String']>;
  road?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  apartment?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isDefault?: Maybe<Scalars['Int']>;
};

export type ShipmentadrCreateManyCountryInputEnvelope = {
  data?: Maybe<Array<ShipmentadrCreateManyCountryInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ShipmentadrCreateNestedManyWithoutCityInput = {
  create?: Maybe<Array<ShipmentadrCreateWithoutCityInput>>;
  connectOrCreate?: Maybe<Array<ShipmentadrCreateOrConnectWithoutCityInput>>;
  createMany?: Maybe<ShipmentadrCreateManyCityInputEnvelope>;
  connect?: Maybe<Array<ShipmentadrWhereUniqueInput>>;
};

export type ShipmentadrCreateNestedManyWithoutCountryInput = {
  create?: Maybe<Array<ShipmentadrCreateWithoutCountryInput>>;
  connectOrCreate?: Maybe<Array<ShipmentadrCreateOrConnectWithoutCountryInput>>;
  createMany?: Maybe<ShipmentadrCreateManyCountryInputEnvelope>;
  connect?: Maybe<Array<ShipmentadrWhereUniqueInput>>;
};

export type ShipmentadrCreateNestedOneWithoutOrdersInput = {
  create?: Maybe<ShipmentadrCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<ShipmentadrCreateOrConnectWithoutOrdersInput>;
  connect?: Maybe<ShipmentadrWhereUniqueInput>;
};

export type ShipmentadrCreateOrConnectWithoutCityInput = {
  where: ShipmentadrWhereUniqueInput;
  create: ShipmentadrCreateWithoutCityInput;
};

export type ShipmentadrCreateOrConnectWithoutCountryInput = {
  where: ShipmentadrWhereUniqueInput;
  create: ShipmentadrCreateWithoutCountryInput;
};

export type ShipmentadrCreateOrConnectWithoutOrdersInput = {
  where: ShipmentadrWhereUniqueInput;
  create: ShipmentadrCreateWithoutOrdersInput;
};

export type ShipmentadrCreateWithoutCityInput = {
  userId?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  receiverMobile?: Maybe<Scalars['String']>;
  receiverMobile2?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  blockNr?: Maybe<Scalars['String']>;
  road?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  apartment?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isDefault?: Maybe<Scalars['Int']>;
  country?: Maybe<CountryCreateNestedOneWithoutShipmentAddressesInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutShipmentAddressInput>;
};

export type ShipmentadrCreateWithoutCountryInput = {
  userId?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  receiverMobile?: Maybe<Scalars['String']>;
  receiverMobile2?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  blockNr?: Maybe<Scalars['String']>;
  road?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  apartment?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isDefault?: Maybe<Scalars['Int']>;
  city?: Maybe<CityCreateNestedOneWithoutShipmentadrInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutShipmentAddressInput>;
};

export type ShipmentadrCreateWithoutOrdersInput = {
  userId?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  receiverMobile?: Maybe<Scalars['String']>;
  receiverMobile2?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  blockNr?: Maybe<Scalars['String']>;
  road?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  apartment?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  isDefault?: Maybe<Scalars['Int']>;
  country?: Maybe<CountryCreateNestedOneWithoutShipmentAddressesInput>;
  city?: Maybe<CityCreateNestedOneWithoutShipmentadrInput>;
};

export type ShipmentadrListRelationFilter = {
  every?: Maybe<ShipmentadrWhereInput>;
  some?: Maybe<ShipmentadrWhereInput>;
  none?: Maybe<ShipmentadrWhereInput>;
};

export type ShipmentadrOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  receiverMobile?: Maybe<SortOrder>;
  receiverMobile2?: Maybe<SortOrder>;
  countryCode?: Maybe<SortOrder>;
  cityId?: Maybe<SortOrder>;
  region?: Maybe<SortOrder>;
  blockNr?: Maybe<SortOrder>;
  road?: Maybe<SortOrder>;
  building?: Maybe<SortOrder>;
  apartment?: Maybe<SortOrder>;
  postalCode?: Maybe<SortOrder>;
  adrs?: Maybe<SortOrder>;
  notes?: Maybe<SortOrder>;
  isDeleted?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
  isDefault?: Maybe<SortOrder>;
};

export type ShipmentadrScalarWhereInput = {
  AND?: Maybe<Array<ShipmentadrScalarWhereInput>>;
  OR?: Maybe<Array<ShipmentadrScalarWhereInput>>;
  NOT?: Maybe<Array<ShipmentadrScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntNullableFilter>;
  firstName?: Maybe<StringNullableFilter>;
  lastName?: Maybe<StringNullableFilter>;
  receiverMobile?: Maybe<StringNullableFilter>;
  receiverMobile2?: Maybe<StringNullableFilter>;
  countryCode?: Maybe<StringNullableFilter>;
  cityId?: Maybe<IntNullableFilter>;
  region?: Maybe<StringNullableFilter>;
  blockNr?: Maybe<StringNullableFilter>;
  road?: Maybe<StringNullableFilter>;
  building?: Maybe<StringNullableFilter>;
  apartment?: Maybe<StringNullableFilter>;
  postalCode?: Maybe<StringNullableFilter>;
  adrs?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  isDeleted?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  isDefault?: Maybe<IntFilter>;
};

export type ShipmentadrUpdateInput = {
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  receiverMobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  receiverMobile2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  region?: Maybe<NullableStringFieldUpdateOperationsInput>;
  blockNr?: Maybe<NullableStringFieldUpdateOperationsInput>;
  road?: Maybe<NullableStringFieldUpdateOperationsInput>;
  building?: Maybe<NullableStringFieldUpdateOperationsInput>;
  apartment?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postalCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isDefault?: Maybe<IntFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutShipmentAddressesInput>;
  city?: Maybe<CityUpdateOneWithoutShipmentadrInput>;
  orders?: Maybe<OrderUpdateManyWithoutShipmentAddressInput>;
};

export type ShipmentadrUpdateManyMutationInput = {
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  receiverMobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  receiverMobile2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  region?: Maybe<NullableStringFieldUpdateOperationsInput>;
  blockNr?: Maybe<NullableStringFieldUpdateOperationsInput>;
  road?: Maybe<NullableStringFieldUpdateOperationsInput>;
  building?: Maybe<NullableStringFieldUpdateOperationsInput>;
  apartment?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postalCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isDefault?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ShipmentadrUpdateManyWithWhereWithoutCityInput = {
  where: ShipmentadrScalarWhereInput;
  data: ShipmentadrUpdateManyMutationInput;
};

export type ShipmentadrUpdateManyWithWhereWithoutCountryInput = {
  where: ShipmentadrScalarWhereInput;
  data: ShipmentadrUpdateManyMutationInput;
};

export type ShipmentadrUpdateManyWithoutCityInput = {
  create?: Maybe<Array<ShipmentadrCreateWithoutCityInput>>;
  connectOrCreate?: Maybe<Array<ShipmentadrCreateOrConnectWithoutCityInput>>;
  upsert?: Maybe<Array<ShipmentadrUpsertWithWhereUniqueWithoutCityInput>>;
  createMany?: Maybe<ShipmentadrCreateManyCityInputEnvelope>;
  connect?: Maybe<Array<ShipmentadrWhereUniqueInput>>;
  set?: Maybe<Array<ShipmentadrWhereUniqueInput>>;
  disconnect?: Maybe<Array<ShipmentadrWhereUniqueInput>>;
  delete?: Maybe<Array<ShipmentadrWhereUniqueInput>>;
  update?: Maybe<Array<ShipmentadrUpdateWithWhereUniqueWithoutCityInput>>;
  updateMany?: Maybe<Array<ShipmentadrUpdateManyWithWhereWithoutCityInput>>;
  deleteMany?: Maybe<Array<ShipmentadrScalarWhereInput>>;
};

export type ShipmentadrUpdateManyWithoutCountryInput = {
  create?: Maybe<Array<ShipmentadrCreateWithoutCountryInput>>;
  connectOrCreate?: Maybe<Array<ShipmentadrCreateOrConnectWithoutCountryInput>>;
  upsert?: Maybe<Array<ShipmentadrUpsertWithWhereUniqueWithoutCountryInput>>;
  createMany?: Maybe<ShipmentadrCreateManyCountryInputEnvelope>;
  connect?: Maybe<Array<ShipmentadrWhereUniqueInput>>;
  set?: Maybe<Array<ShipmentadrWhereUniqueInput>>;
  disconnect?: Maybe<Array<ShipmentadrWhereUniqueInput>>;
  delete?: Maybe<Array<ShipmentadrWhereUniqueInput>>;
  update?: Maybe<Array<ShipmentadrUpdateWithWhereUniqueWithoutCountryInput>>;
  updateMany?: Maybe<Array<ShipmentadrUpdateManyWithWhereWithoutCountryInput>>;
  deleteMany?: Maybe<Array<ShipmentadrScalarWhereInput>>;
};

export type ShipmentadrUpdateOneWithoutOrdersInput = {
  create?: Maybe<ShipmentadrCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<ShipmentadrCreateOrConnectWithoutOrdersInput>;
  upsert?: Maybe<ShipmentadrUpsertWithoutOrdersInput>;
  connect?: Maybe<ShipmentadrWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ShipmentadrUpdateWithoutOrdersInput>;
};

export type ShipmentadrUpdateWithWhereUniqueWithoutCityInput = {
  where: ShipmentadrWhereUniqueInput;
  data: ShipmentadrUpdateWithoutCityInput;
};

export type ShipmentadrUpdateWithWhereUniqueWithoutCountryInput = {
  where: ShipmentadrWhereUniqueInput;
  data: ShipmentadrUpdateWithoutCountryInput;
};

export type ShipmentadrUpdateWithoutCityInput = {
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  receiverMobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  receiverMobile2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  region?: Maybe<NullableStringFieldUpdateOperationsInput>;
  blockNr?: Maybe<NullableStringFieldUpdateOperationsInput>;
  road?: Maybe<NullableStringFieldUpdateOperationsInput>;
  building?: Maybe<NullableStringFieldUpdateOperationsInput>;
  apartment?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postalCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isDefault?: Maybe<IntFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutShipmentAddressesInput>;
  orders?: Maybe<OrderUpdateManyWithoutShipmentAddressInput>;
};

export type ShipmentadrUpdateWithoutCountryInput = {
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  receiverMobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  receiverMobile2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  region?: Maybe<NullableStringFieldUpdateOperationsInput>;
  blockNr?: Maybe<NullableStringFieldUpdateOperationsInput>;
  road?: Maybe<NullableStringFieldUpdateOperationsInput>;
  building?: Maybe<NullableStringFieldUpdateOperationsInput>;
  apartment?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postalCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isDefault?: Maybe<IntFieldUpdateOperationsInput>;
  city?: Maybe<CityUpdateOneWithoutShipmentadrInput>;
  orders?: Maybe<OrderUpdateManyWithoutShipmentAddressInput>;
};

export type ShipmentadrUpdateWithoutOrdersInput = {
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  receiverMobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  receiverMobile2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  region?: Maybe<NullableStringFieldUpdateOperationsInput>;
  blockNr?: Maybe<NullableStringFieldUpdateOperationsInput>;
  road?: Maybe<NullableStringFieldUpdateOperationsInput>;
  building?: Maybe<NullableStringFieldUpdateOperationsInput>;
  apartment?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postalCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isDefault?: Maybe<IntFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutShipmentAddressesInput>;
  city?: Maybe<CityUpdateOneWithoutShipmentadrInput>;
};

export type ShipmentadrUpsertWithWhereUniqueWithoutCityInput = {
  where: ShipmentadrWhereUniqueInput;
  update: ShipmentadrUpdateWithoutCityInput;
  create: ShipmentadrCreateWithoutCityInput;
};

export type ShipmentadrUpsertWithWhereUniqueWithoutCountryInput = {
  where: ShipmentadrWhereUniqueInput;
  update: ShipmentadrUpdateWithoutCountryInput;
  create: ShipmentadrCreateWithoutCountryInput;
};

export type ShipmentadrUpsertWithoutOrdersInput = {
  update: ShipmentadrUpdateWithoutOrdersInput;
  create: ShipmentadrCreateWithoutOrdersInput;
};

export type ShipmentadrWhereInput = {
  AND?: Maybe<Array<ShipmentadrWhereInput>>;
  OR?: Maybe<Array<ShipmentadrWhereInput>>;
  NOT?: Maybe<Array<ShipmentadrWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntNullableFilter>;
  firstName?: Maybe<StringNullableFilter>;
  lastName?: Maybe<StringNullableFilter>;
  receiverMobile?: Maybe<StringNullableFilter>;
  receiverMobile2?: Maybe<StringNullableFilter>;
  countryCode?: Maybe<StringNullableFilter>;
  country?: Maybe<CountryWhereInput>;
  cityId?: Maybe<IntNullableFilter>;
  city?: Maybe<CityWhereInput>;
  region?: Maybe<StringNullableFilter>;
  blockNr?: Maybe<StringNullableFilter>;
  road?: Maybe<StringNullableFilter>;
  building?: Maybe<StringNullableFilter>;
  apartment?: Maybe<StringNullableFilter>;
  postalCode?: Maybe<StringNullableFilter>;
  adrs?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  isDeleted?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  isDefault?: Maybe<IntFilter>;
  orders?: Maybe<OrderListRelationFilter>;
};

export type ShipmentadrWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ShippingMethod = {
  __typename?: 'ShippingMethod';
  id: Scalars['Int'];
  cargoId: Scalars['Int'];
  titleAR?: Maybe<Scalars['String']>;
  titleEN?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Size = {
  __typename?: 'Size';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  productToSize: Array<ProductToSize>;
  stockToSize: Array<StockToSize>;
};


export type SizeProductToSizeArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToSizeWhereUniqueInput>;
};


export type SizeStockToSizeArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToSizeWhereUniqueInput>;
};

export type SizeCreateNestedOneWithoutProductToSizeInput = {
  create?: Maybe<SizeCreateWithoutProductToSizeInput>;
  connectOrCreate?: Maybe<SizeCreateOrConnectWithoutProductToSizeInput>;
  connect?: Maybe<SizeWhereUniqueInput>;
};

export type SizeCreateNestedOneWithoutStockToSizeInput = {
  create?: Maybe<SizeCreateWithoutStockToSizeInput>;
  connectOrCreate?: Maybe<SizeCreateOrConnectWithoutStockToSizeInput>;
  connect?: Maybe<SizeWhereUniqueInput>;
};

export type SizeCreateOrConnectWithoutProductToSizeInput = {
  where: SizeWhereUniqueInput;
  create: SizeCreateWithoutProductToSizeInput;
};

export type SizeCreateOrConnectWithoutStockToSizeInput = {
  where: SizeWhereUniqueInput;
  create: SizeCreateWithoutStockToSizeInput;
};

export type SizeCreateWithoutProductToSizeInput = {
  title?: Maybe<Scalars['String']>;
  stockToSize?: Maybe<StockToSizeCreateNestedManyWithoutSizeInput>;
};

export type SizeCreateWithoutStockToSizeInput = {
  title?: Maybe<Scalars['String']>;
  productToSize?: Maybe<ProductToSizeCreateNestedManyWithoutSizeInput>;
};

export type SizeUpdateOneWithoutProductToSizeInput = {
  create?: Maybe<SizeCreateWithoutProductToSizeInput>;
  connectOrCreate?: Maybe<SizeCreateOrConnectWithoutProductToSizeInput>;
  upsert?: Maybe<SizeUpsertWithoutProductToSizeInput>;
  connect?: Maybe<SizeWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SizeUpdateWithoutProductToSizeInput>;
};

export type SizeUpdateOneWithoutStockToSizeInput = {
  create?: Maybe<SizeCreateWithoutStockToSizeInput>;
  connectOrCreate?: Maybe<SizeCreateOrConnectWithoutStockToSizeInput>;
  upsert?: Maybe<SizeUpsertWithoutStockToSizeInput>;
  connect?: Maybe<SizeWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SizeUpdateWithoutStockToSizeInput>;
};

export type SizeUpdateWithoutProductToSizeInput = {
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stockToSize?: Maybe<StockToSizeUpdateManyWithoutSizeInput>;
};

export type SizeUpdateWithoutStockToSizeInput = {
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  productToSize?: Maybe<ProductToSizeUpdateManyWithoutSizeInput>;
};

export type SizeUpsertWithoutProductToSizeInput = {
  update: SizeUpdateWithoutProductToSizeInput;
  create: SizeCreateWithoutProductToSizeInput;
};

export type SizeUpsertWithoutStockToSizeInput = {
  update: SizeUpdateWithoutStockToSizeInput;
  create: SizeCreateWithoutStockToSizeInput;
};

export type SizeWhereInput = {
  AND?: Maybe<Array<SizeWhereInput>>;
  OR?: Maybe<Array<SizeWhereInput>>;
  NOT?: Maybe<Array<SizeWhereInput>>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringNullableFilter>;
  productToSize?: Maybe<ProductToSizeListRelationFilter>;
  stockToSize?: Maybe<StockToSizeListRelationFilter>;
};

export type SizeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Stock = {
  __typename?: 'Stock';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  weight: Scalars['Float'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  isApproved: Scalars['Int'];
  isSoldOut: Scalars['Int'];
  sku?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  isDeleted: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendor?: Maybe<User>;
  colours: Array<StockToColour>;
  shapes: Array<StockToShape>;
  tags: Array<StockToTag>;
  categories: Array<StockToCategory>;
  sizes: Array<StockToSize>;
  descriptions: Array<StockToDescription>;
  materials: Array<StockToMaterial>;
  labels: Array<StockToLabel>;
  files: Array<StockFile>;
  elment_trans: Array<StockTrans>;
};


export type StockColoursArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToColourWhereUniqueInput>;
};


export type StockShapesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToShapeWhereUniqueInput>;
};


export type StockTagsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToTagWhereUniqueInput>;
};


export type StockCategoriesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToCategoryWhereUniqueInput>;
};


export type StockSizesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToSizeWhereUniqueInput>;
};


export type StockDescriptionsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToDescriptionWhereUniqueInput>;
};


export type StockMaterialsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToMaterialWhereUniqueInput>;
};


export type StockLabelsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToLabelWhereUniqueInput>;
};


export type StockFilesArgs = {
  where?: Maybe<StockFileWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockFileWhereUniqueInput>;
};


export type StockElment_TransArgs = {
  where?: Maybe<StockTransWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockTransWhereUniqueInput>;
};

export type StockCreateManyVendorInput = {
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  isApproved?: Maybe<Scalars['Int']>;
  isSoldOut?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type StockCreateManyVendorInputEnvelope = {
  data?: Maybe<Array<StockCreateManyVendorInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockCreateNestedManyWithoutVendorInput = {
  create?: Maybe<Array<StockCreateWithoutVendorInput>>;
  connectOrCreate?: Maybe<Array<StockCreateOrConnectWithoutVendorInput>>;
  createMany?: Maybe<StockCreateManyVendorInputEnvelope>;
  connect?: Maybe<Array<StockWhereUniqueInput>>;
};

export type StockCreateNestedOneWithoutCategoriesInput = {
  create?: Maybe<StockCreateWithoutCategoriesInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutCategoriesInput>;
  connect?: Maybe<StockWhereUniqueInput>;
};

export type StockCreateNestedOneWithoutColoursInput = {
  create?: Maybe<StockCreateWithoutColoursInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutColoursInput>;
  connect?: Maybe<StockWhereUniqueInput>;
};

export type StockCreateNestedOneWithoutDescriptionsInput = {
  create?: Maybe<StockCreateWithoutDescriptionsInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutDescriptionsInput>;
  connect?: Maybe<StockWhereUniqueInput>;
};

export type StockCreateNestedOneWithoutFilesInput = {
  create?: Maybe<StockCreateWithoutFilesInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutFilesInput>;
  connect?: Maybe<StockWhereUniqueInput>;
};

export type StockCreateNestedOneWithoutLabelsInput = {
  create?: Maybe<StockCreateWithoutLabelsInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutLabelsInput>;
  connect?: Maybe<StockWhereUniqueInput>;
};

export type StockCreateNestedOneWithoutMaterialsInput = {
  create?: Maybe<StockCreateWithoutMaterialsInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutMaterialsInput>;
  connect?: Maybe<StockWhereUniqueInput>;
};

export type StockCreateNestedOneWithoutShapesInput = {
  create?: Maybe<StockCreateWithoutShapesInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutShapesInput>;
  connect?: Maybe<StockWhereUniqueInput>;
};

export type StockCreateNestedOneWithoutSizesInput = {
  create?: Maybe<StockCreateWithoutSizesInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutSizesInput>;
  connect?: Maybe<StockWhereUniqueInput>;
};

export type StockCreateNestedOneWithoutTagsInput = {
  create?: Maybe<StockCreateWithoutTagsInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutTagsInput>;
  connect?: Maybe<StockWhereUniqueInput>;
};

export type StockCreateOrConnectWithoutCategoriesInput = {
  where: StockWhereUniqueInput;
  create: StockCreateWithoutCategoriesInput;
};

export type StockCreateOrConnectWithoutColoursInput = {
  where: StockWhereUniqueInput;
  create: StockCreateWithoutColoursInput;
};

export type StockCreateOrConnectWithoutDescriptionsInput = {
  where: StockWhereUniqueInput;
  create: StockCreateWithoutDescriptionsInput;
};

export type StockCreateOrConnectWithoutFilesInput = {
  where: StockWhereUniqueInput;
  create: StockCreateWithoutFilesInput;
};

export type StockCreateOrConnectWithoutLabelsInput = {
  where: StockWhereUniqueInput;
  create: StockCreateWithoutLabelsInput;
};

export type StockCreateOrConnectWithoutMaterialsInput = {
  where: StockWhereUniqueInput;
  create: StockCreateWithoutMaterialsInput;
};

export type StockCreateOrConnectWithoutShapesInput = {
  where: StockWhereUniqueInput;
  create: StockCreateWithoutShapesInput;
};

export type StockCreateOrConnectWithoutSizesInput = {
  where: StockWhereUniqueInput;
  create: StockCreateWithoutSizesInput;
};

export type StockCreateOrConnectWithoutTagsInput = {
  where: StockWhereUniqueInput;
  create: StockCreateWithoutTagsInput;
};

export type StockCreateOrConnectWithoutVendorInput = {
  where: StockWhereUniqueInput;
  create: StockCreateWithoutVendorInput;
};

export type StockCreateWithoutCategoriesInput = {
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  isApproved?: Maybe<Scalars['Int']>;
  isSoldOut?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendor?: Maybe<UserCreateNestedOneWithoutStocksInput>;
  colours?: Maybe<StockToColourCreateNestedManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeCreateNestedManyWithoutStockInput>;
  tags?: Maybe<StockToTagCreateNestedManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeCreateNestedManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionCreateNestedManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialCreateNestedManyWithoutStockInput>;
  labels?: Maybe<StockToLabelCreateNestedManyWithoutStockInput>;
  files?: Maybe<StockFileCreateNestedManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransCreateNestedManyWithoutStockInput>;
};

export type StockCreateWithoutColoursInput = {
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  isApproved?: Maybe<Scalars['Int']>;
  isSoldOut?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendor?: Maybe<UserCreateNestedOneWithoutStocksInput>;
  shapes?: Maybe<StockToShapeCreateNestedManyWithoutStockInput>;
  tags?: Maybe<StockToTagCreateNestedManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryCreateNestedManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeCreateNestedManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionCreateNestedManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialCreateNestedManyWithoutStockInput>;
  labels?: Maybe<StockToLabelCreateNestedManyWithoutStockInput>;
  files?: Maybe<StockFileCreateNestedManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransCreateNestedManyWithoutStockInput>;
};

export type StockCreateWithoutDescriptionsInput = {
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  isApproved?: Maybe<Scalars['Int']>;
  isSoldOut?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendor?: Maybe<UserCreateNestedOneWithoutStocksInput>;
  colours?: Maybe<StockToColourCreateNestedManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeCreateNestedManyWithoutStockInput>;
  tags?: Maybe<StockToTagCreateNestedManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryCreateNestedManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeCreateNestedManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialCreateNestedManyWithoutStockInput>;
  labels?: Maybe<StockToLabelCreateNestedManyWithoutStockInput>;
  files?: Maybe<StockFileCreateNestedManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransCreateNestedManyWithoutStockInput>;
};

export type StockCreateWithoutFilesInput = {
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  isApproved?: Maybe<Scalars['Int']>;
  isSoldOut?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendor?: Maybe<UserCreateNestedOneWithoutStocksInput>;
  colours?: Maybe<StockToColourCreateNestedManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeCreateNestedManyWithoutStockInput>;
  tags?: Maybe<StockToTagCreateNestedManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryCreateNestedManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeCreateNestedManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionCreateNestedManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialCreateNestedManyWithoutStockInput>;
  labels?: Maybe<StockToLabelCreateNestedManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransCreateNestedManyWithoutStockInput>;
};

export type StockCreateWithoutLabelsInput = {
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  isApproved?: Maybe<Scalars['Int']>;
  isSoldOut?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendor?: Maybe<UserCreateNestedOneWithoutStocksInput>;
  colours?: Maybe<StockToColourCreateNestedManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeCreateNestedManyWithoutStockInput>;
  tags?: Maybe<StockToTagCreateNestedManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryCreateNestedManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeCreateNestedManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionCreateNestedManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialCreateNestedManyWithoutStockInput>;
  files?: Maybe<StockFileCreateNestedManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransCreateNestedManyWithoutStockInput>;
};

export type StockCreateWithoutMaterialsInput = {
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  isApproved?: Maybe<Scalars['Int']>;
  isSoldOut?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendor?: Maybe<UserCreateNestedOneWithoutStocksInput>;
  colours?: Maybe<StockToColourCreateNestedManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeCreateNestedManyWithoutStockInput>;
  tags?: Maybe<StockToTagCreateNestedManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryCreateNestedManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeCreateNestedManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionCreateNestedManyWithoutStockInput>;
  labels?: Maybe<StockToLabelCreateNestedManyWithoutStockInput>;
  files?: Maybe<StockFileCreateNestedManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransCreateNestedManyWithoutStockInput>;
};

export type StockCreateWithoutShapesInput = {
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  isApproved?: Maybe<Scalars['Int']>;
  isSoldOut?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendor?: Maybe<UserCreateNestedOneWithoutStocksInput>;
  colours?: Maybe<StockToColourCreateNestedManyWithoutStockInput>;
  tags?: Maybe<StockToTagCreateNestedManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryCreateNestedManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeCreateNestedManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionCreateNestedManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialCreateNestedManyWithoutStockInput>;
  labels?: Maybe<StockToLabelCreateNestedManyWithoutStockInput>;
  files?: Maybe<StockFileCreateNestedManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransCreateNestedManyWithoutStockInput>;
};

export type StockCreateWithoutSizesInput = {
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  isApproved?: Maybe<Scalars['Int']>;
  isSoldOut?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendor?: Maybe<UserCreateNestedOneWithoutStocksInput>;
  colours?: Maybe<StockToColourCreateNestedManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeCreateNestedManyWithoutStockInput>;
  tags?: Maybe<StockToTagCreateNestedManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryCreateNestedManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionCreateNestedManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialCreateNestedManyWithoutStockInput>;
  labels?: Maybe<StockToLabelCreateNestedManyWithoutStockInput>;
  files?: Maybe<StockFileCreateNestedManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransCreateNestedManyWithoutStockInput>;
};

export type StockCreateWithoutTagsInput = {
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  isApproved?: Maybe<Scalars['Int']>;
  isSoldOut?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendor?: Maybe<UserCreateNestedOneWithoutStocksInput>;
  colours?: Maybe<StockToColourCreateNestedManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeCreateNestedManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryCreateNestedManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeCreateNestedManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionCreateNestedManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialCreateNestedManyWithoutStockInput>;
  labels?: Maybe<StockToLabelCreateNestedManyWithoutStockInput>;
  files?: Maybe<StockFileCreateNestedManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransCreateNestedManyWithoutStockInput>;
};

export type StockCreateWithoutVendorInput = {
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  saleStart?: Maybe<Scalars['DateTime']>;
  saleEnd?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  isApproved?: Maybe<Scalars['Int']>;
  isSoldOut?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  colours?: Maybe<StockToColourCreateNestedManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeCreateNestedManyWithoutStockInput>;
  tags?: Maybe<StockToTagCreateNestedManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryCreateNestedManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeCreateNestedManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionCreateNestedManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialCreateNestedManyWithoutStockInput>;
  labels?: Maybe<StockToLabelCreateNestedManyWithoutStockInput>;
  files?: Maybe<StockFileCreateNestedManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransCreateNestedManyWithoutStockInput>;
};

export type StockFile = {
  __typename?: 'StockFile';
  id: Scalars['Int'];
  stockId: Scalars['Int'];
  fileName?: Maybe<Scalars['String']>;
  colourId: Scalars['Int'];
  isFeatured: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  colour: Colour;
  stock: Stock;
};

export type StockFileCreateManyColourInput = {
  id?: Maybe<Scalars['Int']>;
  stockId: Scalars['Int'];
  fileName?: Maybe<Scalars['String']>;
  isFeatured: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type StockFileCreateManyColourInputEnvelope = {
  data?: Maybe<Array<StockFileCreateManyColourInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockFileCreateManyStockInput = {
  id?: Maybe<Scalars['Int']>;
  fileName?: Maybe<Scalars['String']>;
  colourId: Scalars['Int'];
  isFeatured: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type StockFileCreateManyStockInputEnvelope = {
  data?: Maybe<Array<StockFileCreateManyStockInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockFileCreateNestedManyWithoutColourInput = {
  create?: Maybe<Array<StockFileCreateWithoutColourInput>>;
  connectOrCreate?: Maybe<Array<StockFileCreateOrConnectWithoutColourInput>>;
  createMany?: Maybe<StockFileCreateManyColourInputEnvelope>;
  connect?: Maybe<Array<StockFileWhereUniqueInput>>;
};

export type StockFileCreateNestedManyWithoutStockInput = {
  create?: Maybe<Array<StockFileCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockFileCreateOrConnectWithoutStockInput>>;
  createMany?: Maybe<StockFileCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockFileWhereUniqueInput>>;
};

export type StockFileCreateOrConnectWithoutColourInput = {
  where: StockFileWhereUniqueInput;
  create: StockFileCreateWithoutColourInput;
};

export type StockFileCreateOrConnectWithoutStockInput = {
  where: StockFileWhereUniqueInput;
  create: StockFileCreateWithoutStockInput;
};

export type StockFileCreateWithoutColourInput = {
  fileName?: Maybe<Scalars['String']>;
  isFeatured: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  stock: StockCreateNestedOneWithoutFilesInput;
};

export type StockFileCreateWithoutStockInput = {
  fileName?: Maybe<Scalars['String']>;
  isFeatured: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  colour: ColourCreateNestedOneWithoutStockFilesInput;
};

export type StockFileListRelationFilter = {
  every?: Maybe<StockFileWhereInput>;
  some?: Maybe<StockFileWhereInput>;
  none?: Maybe<StockFileWhereInput>;
};

export type StockFileScalarWhereInput = {
  AND?: Maybe<Array<StockFileScalarWhereInput>>;
  OR?: Maybe<Array<StockFileScalarWhereInput>>;
  NOT?: Maybe<Array<StockFileScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  stockId?: Maybe<IntFilter>;
  fileName?: Maybe<StringNullableFilter>;
  colourId?: Maybe<IntFilter>;
  isFeatured?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type StockFileUpdateManyMutationInput = {
  fileName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type StockFileUpdateManyWithWhereWithoutColourInput = {
  where: StockFileScalarWhereInput;
  data: StockFileUpdateManyMutationInput;
};

export type StockFileUpdateManyWithWhereWithoutStockInput = {
  where: StockFileScalarWhereInput;
  data: StockFileUpdateManyMutationInput;
};

export type StockFileUpdateManyWithoutColourInput = {
  create?: Maybe<Array<StockFileCreateWithoutColourInput>>;
  connectOrCreate?: Maybe<Array<StockFileCreateOrConnectWithoutColourInput>>;
  upsert?: Maybe<Array<StockFileUpsertWithWhereUniqueWithoutColourInput>>;
  createMany?: Maybe<StockFileCreateManyColourInputEnvelope>;
  connect?: Maybe<Array<StockFileWhereUniqueInput>>;
  set?: Maybe<Array<StockFileWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockFileWhereUniqueInput>>;
  delete?: Maybe<Array<StockFileWhereUniqueInput>>;
  update?: Maybe<Array<StockFileUpdateWithWhereUniqueWithoutColourInput>>;
  updateMany?: Maybe<Array<StockFileUpdateManyWithWhereWithoutColourInput>>;
  deleteMany?: Maybe<Array<StockFileScalarWhereInput>>;
};

export type StockFileUpdateManyWithoutStockInput = {
  create?: Maybe<Array<StockFileCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockFileCreateOrConnectWithoutStockInput>>;
  upsert?: Maybe<Array<StockFileUpsertWithWhereUniqueWithoutStockInput>>;
  createMany?: Maybe<StockFileCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockFileWhereUniqueInput>>;
  set?: Maybe<Array<StockFileWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockFileWhereUniqueInput>>;
  delete?: Maybe<Array<StockFileWhereUniqueInput>>;
  update?: Maybe<Array<StockFileUpdateWithWhereUniqueWithoutStockInput>>;
  updateMany?: Maybe<Array<StockFileUpdateManyWithWhereWithoutStockInput>>;
  deleteMany?: Maybe<Array<StockFileScalarWhereInput>>;
};

export type StockFileUpdateWithWhereUniqueWithoutColourInput = {
  where: StockFileWhereUniqueInput;
  data: StockFileUpdateWithoutColourInput;
};

export type StockFileUpdateWithWhereUniqueWithoutStockInput = {
  where: StockFileWhereUniqueInput;
  data: StockFileUpdateWithoutStockInput;
};

export type StockFileUpdateWithoutColourInput = {
  fileName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  stock?: Maybe<StockUpdateOneRequiredWithoutFilesInput>;
};

export type StockFileUpdateWithoutStockInput = {
  fileName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  colour?: Maybe<ColourUpdateOneRequiredWithoutStockFilesInput>;
};

export type StockFileUpsertWithWhereUniqueWithoutColourInput = {
  where: StockFileWhereUniqueInput;
  update: StockFileUpdateWithoutColourInput;
  create: StockFileCreateWithoutColourInput;
};

export type StockFileUpsertWithWhereUniqueWithoutStockInput = {
  where: StockFileWhereUniqueInput;
  update: StockFileUpdateWithoutStockInput;
  create: StockFileCreateWithoutStockInput;
};

export type StockFileWhereInput = {
  AND?: Maybe<Array<StockFileWhereInput>>;
  OR?: Maybe<Array<StockFileWhereInput>>;
  NOT?: Maybe<Array<StockFileWhereInput>>;
  id?: Maybe<IntFilter>;
  stockId?: Maybe<IntFilter>;
  fileName?: Maybe<StringNullableFilter>;
  colourId?: Maybe<IntFilter>;
  isFeatured?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  colour?: Maybe<ColourWhereInput>;
  stock?: Maybe<StockWhereInput>;
};

export type StockFileWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type StockListRelationFilter = {
  every?: Maybe<StockWhereInput>;
  some?: Maybe<StockWhereInput>;
  none?: Maybe<StockWhereInput>;
};

export type StockOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  quantity?: Maybe<SortOrder>;
  saleStart?: Maybe<SortOrder>;
  saleEnd?: Maybe<SortOrder>;
  weight?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  length?: Maybe<SortOrder>;
  isApproved?: Maybe<SortOrder>;
  isSoldOut?: Maybe<SortOrder>;
  sku?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  isDeleted?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
};

export type StockScalarWhereInput = {
  AND?: Maybe<Array<StockScalarWhereInput>>;
  OR?: Maybe<Array<StockScalarWhereInput>>;
  NOT?: Maybe<Array<StockScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
  price?: Maybe<FloatFilter>;
  quantity?: Maybe<FloatFilter>;
  saleStart?: Maybe<DateTimeNullableFilter>;
  saleEnd?: Maybe<DateTimeNullableFilter>;
  weight?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
  height?: Maybe<FloatFilter>;
  length?: Maybe<FloatFilter>;
  isApproved?: Maybe<IntFilter>;
  isSoldOut?: Maybe<IntFilter>;
  sku?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
  isDeleted?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type StockToCategory = {
  __typename?: 'StockToCategory';
  stockId: Scalars['Int'];
  prdctcatId: Scalars['Int'];
  stock: Stock;
  category?: Maybe<ProductCategory>;
};

export type StockToCategoryCreateManyCategoryInput = {
  stockId: Scalars['Int'];
};

export type StockToCategoryCreateManyCategoryInputEnvelope = {
  data?: Maybe<Array<StockToCategoryCreateManyCategoryInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToCategoryCreateManyStockInput = {
  prdctcatId: Scalars['Int'];
};

export type StockToCategoryCreateManyStockInputEnvelope = {
  data?: Maybe<Array<StockToCategoryCreateManyStockInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToCategoryCreateNestedManyWithoutCategoryInput = {
  create?: Maybe<Array<StockToCategoryCreateWithoutCategoryInput>>;
  connectOrCreate?: Maybe<Array<StockToCategoryCreateOrConnectWithoutCategoryInput>>;
  createMany?: Maybe<StockToCategoryCreateManyCategoryInputEnvelope>;
  connect?: Maybe<Array<StockToCategoryWhereUniqueInput>>;
};

export type StockToCategoryCreateNestedManyWithoutStockInput = {
  create?: Maybe<Array<StockToCategoryCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToCategoryCreateOrConnectWithoutStockInput>>;
  createMany?: Maybe<StockToCategoryCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToCategoryWhereUniqueInput>>;
};

export type StockToCategoryCreateOrConnectWithoutCategoryInput = {
  where: StockToCategoryWhereUniqueInput;
  create: StockToCategoryCreateWithoutCategoryInput;
};

export type StockToCategoryCreateOrConnectWithoutStockInput = {
  where: StockToCategoryWhereUniqueInput;
  create: StockToCategoryCreateWithoutStockInput;
};

export type StockToCategoryCreateWithoutCategoryInput = {
  stock: StockCreateNestedOneWithoutCategoriesInput;
};

export type StockToCategoryCreateWithoutStockInput = {
  category?: Maybe<ProductCategoryCreateNestedOneWithoutStockInput>;
};

export type StockToCategoryListRelationFilter = {
  every?: Maybe<StockToCategoryWhereInput>;
  some?: Maybe<StockToCategoryWhereInput>;
  none?: Maybe<StockToCategoryWhereInput>;
};

export type StockToCategoryScalarWhereInput = {
  AND?: Maybe<Array<StockToCategoryScalarWhereInput>>;
  OR?: Maybe<Array<StockToCategoryScalarWhereInput>>;
  NOT?: Maybe<Array<StockToCategoryScalarWhereInput>>;
  stockId?: Maybe<IntFilter>;
  prdctcatId?: Maybe<IntFilter>;
};

export type StockToCategoryStockIdPrdctcatIdCompoundUniqueInput = {
  stockId: Scalars['Int'];
  prdctcatId: Scalars['Int'];
};

export type StockToCategoryUpdateManyMutationInput = {
  _: Scalars['String'];
};

export type StockToCategoryUpdateManyWithWhereWithoutCategoryInput = {
  where: StockToCategoryScalarWhereInput;
  data: StockToCategoryUpdateManyMutationInput;
};

export type StockToCategoryUpdateManyWithWhereWithoutStockInput = {
  where: StockToCategoryScalarWhereInput;
  data: StockToCategoryUpdateManyMutationInput;
};

export type StockToCategoryUpdateManyWithoutCategoryInput = {
  create?: Maybe<Array<StockToCategoryCreateWithoutCategoryInput>>;
  connectOrCreate?: Maybe<Array<StockToCategoryCreateOrConnectWithoutCategoryInput>>;
  upsert?: Maybe<Array<StockToCategoryUpsertWithWhereUniqueWithoutCategoryInput>>;
  createMany?: Maybe<StockToCategoryCreateManyCategoryInputEnvelope>;
  connect?: Maybe<Array<StockToCategoryWhereUniqueInput>>;
  set?: Maybe<Array<StockToCategoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToCategoryWhereUniqueInput>>;
  delete?: Maybe<Array<StockToCategoryWhereUniqueInput>>;
  update?: Maybe<Array<StockToCategoryUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: Maybe<Array<StockToCategoryUpdateManyWithWhereWithoutCategoryInput>>;
  deleteMany?: Maybe<Array<StockToCategoryScalarWhereInput>>;
};

export type StockToCategoryUpdateManyWithoutStockInput = {
  create?: Maybe<Array<StockToCategoryCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToCategoryCreateOrConnectWithoutStockInput>>;
  upsert?: Maybe<Array<StockToCategoryUpsertWithWhereUniqueWithoutStockInput>>;
  createMany?: Maybe<StockToCategoryCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToCategoryWhereUniqueInput>>;
  set?: Maybe<Array<StockToCategoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToCategoryWhereUniqueInput>>;
  delete?: Maybe<Array<StockToCategoryWhereUniqueInput>>;
  update?: Maybe<Array<StockToCategoryUpdateWithWhereUniqueWithoutStockInput>>;
  updateMany?: Maybe<Array<StockToCategoryUpdateManyWithWhereWithoutStockInput>>;
  deleteMany?: Maybe<Array<StockToCategoryScalarWhereInput>>;
};

export type StockToCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
  where: StockToCategoryWhereUniqueInput;
  data: StockToCategoryUpdateWithoutCategoryInput;
};

export type StockToCategoryUpdateWithWhereUniqueWithoutStockInput = {
  where: StockToCategoryWhereUniqueInput;
  data: StockToCategoryUpdateWithoutStockInput;
};

export type StockToCategoryUpdateWithoutCategoryInput = {
  stock?: Maybe<StockUpdateOneRequiredWithoutCategoriesInput>;
};

export type StockToCategoryUpdateWithoutStockInput = {
  category?: Maybe<ProductCategoryUpdateOneWithoutStockInput>;
};

export type StockToCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
  where: StockToCategoryWhereUniqueInput;
  update: StockToCategoryUpdateWithoutCategoryInput;
  create: StockToCategoryCreateWithoutCategoryInput;
};

export type StockToCategoryUpsertWithWhereUniqueWithoutStockInput = {
  where: StockToCategoryWhereUniqueInput;
  update: StockToCategoryUpdateWithoutStockInput;
  create: StockToCategoryCreateWithoutStockInput;
};

export type StockToCategoryWhereInput = {
  AND?: Maybe<Array<StockToCategoryWhereInput>>;
  OR?: Maybe<Array<StockToCategoryWhereInput>>;
  NOT?: Maybe<Array<StockToCategoryWhereInput>>;
  stockId?: Maybe<IntFilter>;
  prdctcatId?: Maybe<IntFilter>;
  stock?: Maybe<StockWhereInput>;
  category?: Maybe<ProductCategoryWhereInput>;
};

export type StockToCategoryWhereUniqueInput = {
  stockId_prdctcatId?: Maybe<StockToCategoryStockIdPrdctcatIdCompoundUniqueInput>;
};

export type StockToColour = {
  __typename?: 'StockToColour';
  stockId: Scalars['Int'];
  colourId: Scalars['Int'];
  quantity: Scalars['Int'];
  sku?: Maybe<Scalars['String']>;
  stock: Stock;
  colour?: Maybe<Colour>;
};

export type StockToColourCreateManyColourInput = {
  stockId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
};

export type StockToColourCreateManyColourInputEnvelope = {
  data?: Maybe<Array<StockToColourCreateManyColourInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToColourCreateManyStockInput = {
  colourId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
};

export type StockToColourCreateManyStockInputEnvelope = {
  data?: Maybe<Array<StockToColourCreateManyStockInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToColourCreateNestedManyWithoutColourInput = {
  create?: Maybe<Array<StockToColourCreateWithoutColourInput>>;
  connectOrCreate?: Maybe<Array<StockToColourCreateOrConnectWithoutColourInput>>;
  createMany?: Maybe<StockToColourCreateManyColourInputEnvelope>;
  connect?: Maybe<Array<StockToColourWhereUniqueInput>>;
};

export type StockToColourCreateNestedManyWithoutStockInput = {
  create?: Maybe<Array<StockToColourCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToColourCreateOrConnectWithoutStockInput>>;
  createMany?: Maybe<StockToColourCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToColourWhereUniqueInput>>;
};

export type StockToColourCreateOrConnectWithoutColourInput = {
  where: StockToColourWhereUniqueInput;
  create: StockToColourCreateWithoutColourInput;
};

export type StockToColourCreateOrConnectWithoutStockInput = {
  where: StockToColourWhereUniqueInput;
  create: StockToColourCreateWithoutStockInput;
};

export type StockToColourCreateWithoutColourInput = {
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  stock?: Maybe<StockCreateNestedOneWithoutColoursInput>;
};

export type StockToColourCreateWithoutStockInput = {
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  colour?: Maybe<ColourCreateNestedOneWithoutStockInput>;
};

export type StockToColourListRelationFilter = {
  every?: Maybe<StockToColourWhereInput>;
  some?: Maybe<StockToColourWhereInput>;
  none?: Maybe<StockToColourWhereInput>;
};

export type StockToColourScalarWhereInput = {
  AND?: Maybe<Array<StockToColourScalarWhereInput>>;
  OR?: Maybe<Array<StockToColourScalarWhereInput>>;
  NOT?: Maybe<Array<StockToColourScalarWhereInput>>;
  stockId?: Maybe<IntFilter>;
  colourId?: Maybe<IntFilter>;
  quantity?: Maybe<IntFilter>;
  sku?: Maybe<StringNullableFilter>;
};

export type StockToColourStockIdColourIdCompoundUniqueInput = {
  stockId: Scalars['Int'];
  colourId: Scalars['Int'];
};

export type StockToColourUpdateManyMutationInput = {
  _: Scalars['String'];
};

export type StockToColourUpdateManyWithWhereWithoutColourInput = {
  where: StockToColourScalarWhereInput;
  data: StockToColourUpdateManyMutationInput;
};

export type StockToColourUpdateManyWithWhereWithoutStockInput = {
  where: StockToColourScalarWhereInput;
  data: StockToColourUpdateManyMutationInput;
};

export type StockToColourUpdateManyWithoutColourInput = {
  create?: Maybe<Array<StockToColourCreateWithoutColourInput>>;
  connectOrCreate?: Maybe<Array<StockToColourCreateOrConnectWithoutColourInput>>;
  upsert?: Maybe<Array<StockToColourUpsertWithWhereUniqueWithoutColourInput>>;
  createMany?: Maybe<StockToColourCreateManyColourInputEnvelope>;
  connect?: Maybe<Array<StockToColourWhereUniqueInput>>;
  set?: Maybe<Array<StockToColourWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToColourWhereUniqueInput>>;
  delete?: Maybe<Array<StockToColourWhereUniqueInput>>;
  update?: Maybe<Array<StockToColourUpdateWithWhereUniqueWithoutColourInput>>;
  updateMany?: Maybe<Array<StockToColourUpdateManyWithWhereWithoutColourInput>>;
  deleteMany?: Maybe<Array<StockToColourScalarWhereInput>>;
};

export type StockToColourUpdateManyWithoutStockInput = {
  create?: Maybe<Array<StockToColourCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToColourCreateOrConnectWithoutStockInput>>;
  upsert?: Maybe<Array<StockToColourUpsertWithWhereUniqueWithoutStockInput>>;
  createMany?: Maybe<StockToColourCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToColourWhereUniqueInput>>;
  set?: Maybe<Array<StockToColourWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToColourWhereUniqueInput>>;
  delete?: Maybe<Array<StockToColourWhereUniqueInput>>;
  update?: Maybe<Array<StockToColourUpdateWithWhereUniqueWithoutStockInput>>;
  updateMany?: Maybe<Array<StockToColourUpdateManyWithWhereWithoutStockInput>>;
  deleteMany?: Maybe<Array<StockToColourScalarWhereInput>>;
};

export type StockToColourUpdateWithWhereUniqueWithoutColourInput = {
  where: StockToColourWhereUniqueInput;
  data: StockToColourUpdateWithoutColourInput;
};

export type StockToColourUpdateWithWhereUniqueWithoutStockInput = {
  where: StockToColourWhereUniqueInput;
  data: StockToColourUpdateWithoutStockInput;
};

export type StockToColourUpdateWithoutColourInput = {
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stock?: Maybe<StockUpdateOneRequiredWithoutColoursInput>;
};

export type StockToColourUpdateWithoutStockInput = {
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  colour?: Maybe<ColourUpdateOneWithoutStockInput>;
};

export type StockToColourUpsertWithWhereUniqueWithoutColourInput = {
  where: StockToColourWhereUniqueInput;
  update: StockToColourUpdateWithoutColourInput;
  create: StockToColourCreateWithoutColourInput;
};

export type StockToColourUpsertWithWhereUniqueWithoutStockInput = {
  where: StockToColourWhereUniqueInput;
  update: StockToColourUpdateWithoutStockInput;
  create: StockToColourCreateWithoutStockInput;
};

export type StockToColourWhereInput = {
  AND?: Maybe<Array<StockToColourWhereInput>>;
  OR?: Maybe<Array<StockToColourWhereInput>>;
  NOT?: Maybe<Array<StockToColourWhereInput>>;
  stockId?: Maybe<IntFilter>;
  colourId?: Maybe<IntFilter>;
  quantity?: Maybe<IntFilter>;
  sku?: Maybe<StringNullableFilter>;
  stock?: Maybe<StockWhereInput>;
  colour?: Maybe<ColourWhereInput>;
};

export type StockToColourWhereUniqueInput = {
  stockId_colourId?: Maybe<StockToColourStockIdColourIdCompoundUniqueInput>;
};

export type StockToDescription = {
  __typename?: 'StockToDescription';
  stockId: Scalars['Int'];
  descriptionId: Scalars['Int'];
  stock: Stock;
  description?: Maybe<ProductDescription>;
};

export type StockToDescriptionCreateManyDescriptionInput = {
  stockId: Scalars['Int'];
};

export type StockToDescriptionCreateManyDescriptionInputEnvelope = {
  data?: Maybe<Array<StockToDescriptionCreateManyDescriptionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToDescriptionCreateManyStockInput = {
  descriptionId: Scalars['Int'];
};

export type StockToDescriptionCreateManyStockInputEnvelope = {
  data?: Maybe<Array<StockToDescriptionCreateManyStockInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToDescriptionCreateNestedManyWithoutDescriptionInput = {
  create?: Maybe<Array<StockToDescriptionCreateWithoutDescriptionInput>>;
  connectOrCreate?: Maybe<Array<StockToDescriptionCreateOrConnectWithoutDescriptionInput>>;
  createMany?: Maybe<StockToDescriptionCreateManyDescriptionInputEnvelope>;
  connect?: Maybe<Array<StockToDescriptionWhereUniqueInput>>;
};

export type StockToDescriptionCreateNestedManyWithoutStockInput = {
  create?: Maybe<Array<StockToDescriptionCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToDescriptionCreateOrConnectWithoutStockInput>>;
  createMany?: Maybe<StockToDescriptionCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToDescriptionWhereUniqueInput>>;
};

export type StockToDescriptionCreateOrConnectWithoutDescriptionInput = {
  where: StockToDescriptionWhereUniqueInput;
  create: StockToDescriptionCreateWithoutDescriptionInput;
};

export type StockToDescriptionCreateOrConnectWithoutStockInput = {
  where: StockToDescriptionWhereUniqueInput;
  create: StockToDescriptionCreateWithoutStockInput;
};

export type StockToDescriptionCreateWithoutDescriptionInput = {
  stock: StockCreateNestedOneWithoutDescriptionsInput;
};

export type StockToDescriptionCreateWithoutStockInput = {
  description?: Maybe<ProductDescriptionCreateNestedOneWithoutStockToDescriptionInput>;
};

export type StockToDescriptionListRelationFilter = {
  every?: Maybe<StockToDescriptionWhereInput>;
  some?: Maybe<StockToDescriptionWhereInput>;
  none?: Maybe<StockToDescriptionWhereInput>;
};

export type StockToDescriptionScalarWhereInput = {
  AND?: Maybe<Array<StockToDescriptionScalarWhereInput>>;
  OR?: Maybe<Array<StockToDescriptionScalarWhereInput>>;
  NOT?: Maybe<Array<StockToDescriptionScalarWhereInput>>;
  stockId?: Maybe<IntFilter>;
  descriptionId?: Maybe<IntFilter>;
};

export type StockToDescriptionStockIdDescriptionIdCompoundUniqueInput = {
  stockId: Scalars['Int'];
  descriptionId: Scalars['Int'];
};

export type StockToDescriptionUpdateManyMutationInput = {
  _: Scalars['String'];
};

export type StockToDescriptionUpdateManyWithWhereWithoutDescriptionInput = {
  where: StockToDescriptionScalarWhereInput;
  data: StockToDescriptionUpdateManyMutationInput;
};

export type StockToDescriptionUpdateManyWithWhereWithoutStockInput = {
  where: StockToDescriptionScalarWhereInput;
  data: StockToDescriptionUpdateManyMutationInput;
};

export type StockToDescriptionUpdateManyWithoutDescriptionInput = {
  create?: Maybe<Array<StockToDescriptionCreateWithoutDescriptionInput>>;
  connectOrCreate?: Maybe<Array<StockToDescriptionCreateOrConnectWithoutDescriptionInput>>;
  upsert?: Maybe<Array<StockToDescriptionUpsertWithWhereUniqueWithoutDescriptionInput>>;
  createMany?: Maybe<StockToDescriptionCreateManyDescriptionInputEnvelope>;
  connect?: Maybe<Array<StockToDescriptionWhereUniqueInput>>;
  set?: Maybe<Array<StockToDescriptionWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToDescriptionWhereUniqueInput>>;
  delete?: Maybe<Array<StockToDescriptionWhereUniqueInput>>;
  update?: Maybe<Array<StockToDescriptionUpdateWithWhereUniqueWithoutDescriptionInput>>;
  updateMany?: Maybe<Array<StockToDescriptionUpdateManyWithWhereWithoutDescriptionInput>>;
  deleteMany?: Maybe<Array<StockToDescriptionScalarWhereInput>>;
};

export type StockToDescriptionUpdateManyWithoutStockInput = {
  create?: Maybe<Array<StockToDescriptionCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToDescriptionCreateOrConnectWithoutStockInput>>;
  upsert?: Maybe<Array<StockToDescriptionUpsertWithWhereUniqueWithoutStockInput>>;
  createMany?: Maybe<StockToDescriptionCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToDescriptionWhereUniqueInput>>;
  set?: Maybe<Array<StockToDescriptionWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToDescriptionWhereUniqueInput>>;
  delete?: Maybe<Array<StockToDescriptionWhereUniqueInput>>;
  update?: Maybe<Array<StockToDescriptionUpdateWithWhereUniqueWithoutStockInput>>;
  updateMany?: Maybe<Array<StockToDescriptionUpdateManyWithWhereWithoutStockInput>>;
  deleteMany?: Maybe<Array<StockToDescriptionScalarWhereInput>>;
};

export type StockToDescriptionUpdateWithWhereUniqueWithoutDescriptionInput = {
  where: StockToDescriptionWhereUniqueInput;
  data: StockToDescriptionUpdateWithoutDescriptionInput;
};

export type StockToDescriptionUpdateWithWhereUniqueWithoutStockInput = {
  where: StockToDescriptionWhereUniqueInput;
  data: StockToDescriptionUpdateWithoutStockInput;
};

export type StockToDescriptionUpdateWithoutDescriptionInput = {
  stock?: Maybe<StockUpdateOneRequiredWithoutDescriptionsInput>;
};

export type StockToDescriptionUpdateWithoutStockInput = {
  description?: Maybe<ProductDescriptionUpdateOneWithoutStockToDescriptionInput>;
};

export type StockToDescriptionUpsertWithWhereUniqueWithoutDescriptionInput = {
  where: StockToDescriptionWhereUniqueInput;
  update: StockToDescriptionUpdateWithoutDescriptionInput;
  create: StockToDescriptionCreateWithoutDescriptionInput;
};

export type StockToDescriptionUpsertWithWhereUniqueWithoutStockInput = {
  where: StockToDescriptionWhereUniqueInput;
  update: StockToDescriptionUpdateWithoutStockInput;
  create: StockToDescriptionCreateWithoutStockInput;
};

export type StockToDescriptionWhereInput = {
  AND?: Maybe<Array<StockToDescriptionWhereInput>>;
  OR?: Maybe<Array<StockToDescriptionWhereInput>>;
  NOT?: Maybe<Array<StockToDescriptionWhereInput>>;
  stockId?: Maybe<IntFilter>;
  descriptionId?: Maybe<IntFilter>;
  stock?: Maybe<StockWhereInput>;
  description?: Maybe<ProductDescriptionWhereInput>;
};

export type StockToDescriptionWhereUniqueInput = {
  stockId_descriptionId?: Maybe<StockToDescriptionStockIdDescriptionIdCompoundUniqueInput>;
};

export type StockToLabel = {
  __typename?: 'StockToLabel';
  stockId: Scalars['Int'];
  labelId: Scalars['Int'];
  stock: Stock;
  label?: Maybe<Label>;
};

export type StockToLabelCreateManyLabelInput = {
  stockId: Scalars['Int'];
};

export type StockToLabelCreateManyLabelInputEnvelope = {
  data?: Maybe<Array<StockToLabelCreateManyLabelInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToLabelCreateManyStockInput = {
  labelId: Scalars['Int'];
};

export type StockToLabelCreateManyStockInputEnvelope = {
  data?: Maybe<Array<StockToLabelCreateManyStockInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToLabelCreateNestedManyWithoutLabelInput = {
  create?: Maybe<Array<StockToLabelCreateWithoutLabelInput>>;
  connectOrCreate?: Maybe<Array<StockToLabelCreateOrConnectWithoutLabelInput>>;
  createMany?: Maybe<StockToLabelCreateManyLabelInputEnvelope>;
  connect?: Maybe<Array<StockToLabelWhereUniqueInput>>;
};

export type StockToLabelCreateNestedManyWithoutStockInput = {
  create?: Maybe<Array<StockToLabelCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToLabelCreateOrConnectWithoutStockInput>>;
  createMany?: Maybe<StockToLabelCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToLabelWhereUniqueInput>>;
};

export type StockToLabelCreateOrConnectWithoutLabelInput = {
  where: StockToLabelWhereUniqueInput;
  create: StockToLabelCreateWithoutLabelInput;
};

export type StockToLabelCreateOrConnectWithoutStockInput = {
  where: StockToLabelWhereUniqueInput;
  create: StockToLabelCreateWithoutStockInput;
};

export type StockToLabelCreateWithoutLabelInput = {
  stock: StockCreateNestedOneWithoutLabelsInput;
};

export type StockToLabelCreateWithoutStockInput = {
  label?: Maybe<LabelCreateNestedOneWithoutStockToLabelInput>;
};

export type StockToLabelListRelationFilter = {
  every?: Maybe<StockToLabelWhereInput>;
  some?: Maybe<StockToLabelWhereInput>;
  none?: Maybe<StockToLabelWhereInput>;
};

export type StockToLabelScalarWhereInput = {
  AND?: Maybe<Array<StockToLabelScalarWhereInput>>;
  OR?: Maybe<Array<StockToLabelScalarWhereInput>>;
  NOT?: Maybe<Array<StockToLabelScalarWhereInput>>;
  stockId?: Maybe<IntFilter>;
  labelId?: Maybe<IntFilter>;
};

export type StockToLabelStockIdLabelIdCompoundUniqueInput = {
  stockId: Scalars['Int'];
  labelId: Scalars['Int'];
};

export type StockToLabelUpdateManyMutationInput = {
  _: Scalars['String'];
};

export type StockToLabelUpdateManyWithWhereWithoutLabelInput = {
  where: StockToLabelScalarWhereInput;
  data: StockToLabelUpdateManyMutationInput;
};

export type StockToLabelUpdateManyWithWhereWithoutStockInput = {
  where: StockToLabelScalarWhereInput;
  data: StockToLabelUpdateManyMutationInput;
};

export type StockToLabelUpdateManyWithoutLabelInput = {
  create?: Maybe<Array<StockToLabelCreateWithoutLabelInput>>;
  connectOrCreate?: Maybe<Array<StockToLabelCreateOrConnectWithoutLabelInput>>;
  upsert?: Maybe<Array<StockToLabelUpsertWithWhereUniqueWithoutLabelInput>>;
  createMany?: Maybe<StockToLabelCreateManyLabelInputEnvelope>;
  connect?: Maybe<Array<StockToLabelWhereUniqueInput>>;
  set?: Maybe<Array<StockToLabelWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToLabelWhereUniqueInput>>;
  delete?: Maybe<Array<StockToLabelWhereUniqueInput>>;
  update?: Maybe<Array<StockToLabelUpdateWithWhereUniqueWithoutLabelInput>>;
  updateMany?: Maybe<Array<StockToLabelUpdateManyWithWhereWithoutLabelInput>>;
  deleteMany?: Maybe<Array<StockToLabelScalarWhereInput>>;
};

export type StockToLabelUpdateManyWithoutStockInput = {
  create?: Maybe<Array<StockToLabelCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToLabelCreateOrConnectWithoutStockInput>>;
  upsert?: Maybe<Array<StockToLabelUpsertWithWhereUniqueWithoutStockInput>>;
  createMany?: Maybe<StockToLabelCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToLabelWhereUniqueInput>>;
  set?: Maybe<Array<StockToLabelWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToLabelWhereUniqueInput>>;
  delete?: Maybe<Array<StockToLabelWhereUniqueInput>>;
  update?: Maybe<Array<StockToLabelUpdateWithWhereUniqueWithoutStockInput>>;
  updateMany?: Maybe<Array<StockToLabelUpdateManyWithWhereWithoutStockInput>>;
  deleteMany?: Maybe<Array<StockToLabelScalarWhereInput>>;
};

export type StockToLabelUpdateWithWhereUniqueWithoutLabelInput = {
  where: StockToLabelWhereUniqueInput;
  data: StockToLabelUpdateWithoutLabelInput;
};

export type StockToLabelUpdateWithWhereUniqueWithoutStockInput = {
  where: StockToLabelWhereUniqueInput;
  data: StockToLabelUpdateWithoutStockInput;
};

export type StockToLabelUpdateWithoutLabelInput = {
  stock?: Maybe<StockUpdateOneRequiredWithoutLabelsInput>;
};

export type StockToLabelUpdateWithoutStockInput = {
  label?: Maybe<LabelUpdateOneWithoutStockToLabelInput>;
};

export type StockToLabelUpsertWithWhereUniqueWithoutLabelInput = {
  where: StockToLabelWhereUniqueInput;
  update: StockToLabelUpdateWithoutLabelInput;
  create: StockToLabelCreateWithoutLabelInput;
};

export type StockToLabelUpsertWithWhereUniqueWithoutStockInput = {
  where: StockToLabelWhereUniqueInput;
  update: StockToLabelUpdateWithoutStockInput;
  create: StockToLabelCreateWithoutStockInput;
};

export type StockToLabelWhereInput = {
  AND?: Maybe<Array<StockToLabelWhereInput>>;
  OR?: Maybe<Array<StockToLabelWhereInput>>;
  NOT?: Maybe<Array<StockToLabelWhereInput>>;
  stockId?: Maybe<IntFilter>;
  labelId?: Maybe<IntFilter>;
  stock?: Maybe<StockWhereInput>;
  label?: Maybe<LabelWhereInput>;
};

export type StockToLabelWhereUniqueInput = {
  stockId_labelId?: Maybe<StockToLabelStockIdLabelIdCompoundUniqueInput>;
};

export type StockToMaterial = {
  __typename?: 'StockToMaterial';
  stockId: Scalars['Int'];
  materialId: Scalars['Int'];
  value: Scalars['Float'];
  stock: Stock;
  material?: Maybe<Material>;
};

export type StockToMaterialCreateManyMaterialInput = {
  stockId: Scalars['Int'];
  value: Scalars['Float'];
};

export type StockToMaterialCreateManyMaterialInputEnvelope = {
  data?: Maybe<Array<StockToMaterialCreateManyMaterialInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToMaterialCreateManyStockInput = {
  materialId: Scalars['Int'];
  value: Scalars['Float'];
};

export type StockToMaterialCreateManyStockInputEnvelope = {
  data?: Maybe<Array<StockToMaterialCreateManyStockInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToMaterialCreateNestedManyWithoutMaterialInput = {
  create?: Maybe<Array<StockToMaterialCreateWithoutMaterialInput>>;
  connectOrCreate?: Maybe<Array<StockToMaterialCreateOrConnectWithoutMaterialInput>>;
  createMany?: Maybe<StockToMaterialCreateManyMaterialInputEnvelope>;
  connect?: Maybe<Array<StockToMaterialWhereUniqueInput>>;
};

export type StockToMaterialCreateNestedManyWithoutStockInput = {
  create?: Maybe<Array<StockToMaterialCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToMaterialCreateOrConnectWithoutStockInput>>;
  createMany?: Maybe<StockToMaterialCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToMaterialWhereUniqueInput>>;
};

export type StockToMaterialCreateOrConnectWithoutMaterialInput = {
  where: StockToMaterialWhereUniqueInput;
  create: StockToMaterialCreateWithoutMaterialInput;
};

export type StockToMaterialCreateOrConnectWithoutStockInput = {
  where: StockToMaterialWhereUniqueInput;
  create: StockToMaterialCreateWithoutStockInput;
};

export type StockToMaterialCreateWithoutMaterialInput = {
  value: Scalars['Float'];
  stock: StockCreateNestedOneWithoutMaterialsInput;
};

export type StockToMaterialCreateWithoutStockInput = {
  value: Scalars['Float'];
  material?: Maybe<MaterialCreateNestedOneWithoutStockToMaterialInput>;
};

export type StockToMaterialListRelationFilter = {
  every?: Maybe<StockToMaterialWhereInput>;
  some?: Maybe<StockToMaterialWhereInput>;
  none?: Maybe<StockToMaterialWhereInput>;
};

export type StockToMaterialScalarWhereInput = {
  AND?: Maybe<Array<StockToMaterialScalarWhereInput>>;
  OR?: Maybe<Array<StockToMaterialScalarWhereInput>>;
  NOT?: Maybe<Array<StockToMaterialScalarWhereInput>>;
  stockId?: Maybe<IntFilter>;
  materialId?: Maybe<IntFilter>;
  value?: Maybe<FloatFilter>;
};

export type StockToMaterialStockIdMaterialIdCompoundUniqueInput = {
  stockId: Scalars['Int'];
  materialId: Scalars['Int'];
};

export type StockToMaterialUpdateManyMutationInput = {
  value?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type StockToMaterialUpdateManyWithWhereWithoutMaterialInput = {
  where: StockToMaterialScalarWhereInput;
  data: StockToMaterialUpdateManyMutationInput;
};

export type StockToMaterialUpdateManyWithWhereWithoutStockInput = {
  where: StockToMaterialScalarWhereInput;
  data: StockToMaterialUpdateManyMutationInput;
};

export type StockToMaterialUpdateManyWithoutMaterialInput = {
  create?: Maybe<Array<StockToMaterialCreateWithoutMaterialInput>>;
  connectOrCreate?: Maybe<Array<StockToMaterialCreateOrConnectWithoutMaterialInput>>;
  upsert?: Maybe<Array<StockToMaterialUpsertWithWhereUniqueWithoutMaterialInput>>;
  createMany?: Maybe<StockToMaterialCreateManyMaterialInputEnvelope>;
  connect?: Maybe<Array<StockToMaterialWhereUniqueInput>>;
  set?: Maybe<Array<StockToMaterialWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToMaterialWhereUniqueInput>>;
  delete?: Maybe<Array<StockToMaterialWhereUniqueInput>>;
  update?: Maybe<Array<StockToMaterialUpdateWithWhereUniqueWithoutMaterialInput>>;
  updateMany?: Maybe<Array<StockToMaterialUpdateManyWithWhereWithoutMaterialInput>>;
  deleteMany?: Maybe<Array<StockToMaterialScalarWhereInput>>;
};

export type StockToMaterialUpdateManyWithoutStockInput = {
  create?: Maybe<Array<StockToMaterialCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToMaterialCreateOrConnectWithoutStockInput>>;
  upsert?: Maybe<Array<StockToMaterialUpsertWithWhereUniqueWithoutStockInput>>;
  createMany?: Maybe<StockToMaterialCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToMaterialWhereUniqueInput>>;
  set?: Maybe<Array<StockToMaterialWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToMaterialWhereUniqueInput>>;
  delete?: Maybe<Array<StockToMaterialWhereUniqueInput>>;
  update?: Maybe<Array<StockToMaterialUpdateWithWhereUniqueWithoutStockInput>>;
  updateMany?: Maybe<Array<StockToMaterialUpdateManyWithWhereWithoutStockInput>>;
  deleteMany?: Maybe<Array<StockToMaterialScalarWhereInput>>;
};

export type StockToMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
  where: StockToMaterialWhereUniqueInput;
  data: StockToMaterialUpdateWithoutMaterialInput;
};

export type StockToMaterialUpdateWithWhereUniqueWithoutStockInput = {
  where: StockToMaterialWhereUniqueInput;
  data: StockToMaterialUpdateWithoutStockInput;
};

export type StockToMaterialUpdateWithoutMaterialInput = {
  value?: Maybe<FloatFieldUpdateOperationsInput>;
  stock?: Maybe<StockUpdateOneRequiredWithoutMaterialsInput>;
};

export type StockToMaterialUpdateWithoutStockInput = {
  value?: Maybe<FloatFieldUpdateOperationsInput>;
  material?: Maybe<MaterialUpdateOneWithoutStockToMaterialInput>;
};

export type StockToMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
  where: StockToMaterialWhereUniqueInput;
  update: StockToMaterialUpdateWithoutMaterialInput;
  create: StockToMaterialCreateWithoutMaterialInput;
};

export type StockToMaterialUpsertWithWhereUniqueWithoutStockInput = {
  where: StockToMaterialWhereUniqueInput;
  update: StockToMaterialUpdateWithoutStockInput;
  create: StockToMaterialCreateWithoutStockInput;
};

export type StockToMaterialWhereInput = {
  AND?: Maybe<Array<StockToMaterialWhereInput>>;
  OR?: Maybe<Array<StockToMaterialWhereInput>>;
  NOT?: Maybe<Array<StockToMaterialWhereInput>>;
  stockId?: Maybe<IntFilter>;
  materialId?: Maybe<IntFilter>;
  value?: Maybe<FloatFilter>;
  stock?: Maybe<StockWhereInput>;
  material?: Maybe<MaterialWhereInput>;
};

export type StockToMaterialWhereUniqueInput = {
  stockId_materialId?: Maybe<StockToMaterialStockIdMaterialIdCompoundUniqueInput>;
};

export type StockToShape = {
  __typename?: 'StockToShape';
  stockId: Scalars['Int'];
  shapeId: Scalars['Int'];
  value: Scalars['Float'];
  stock: Stock;
  shape?: Maybe<Shape>;
};

export type StockToShapeCreateManyShapeInput = {
  stockId: Scalars['Int'];
  value: Scalars['Float'];
};

export type StockToShapeCreateManyShapeInputEnvelope = {
  data?: Maybe<Array<StockToShapeCreateManyShapeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToShapeCreateManyStockInput = {
  shapeId: Scalars['Int'];
  value: Scalars['Float'];
};

export type StockToShapeCreateManyStockInputEnvelope = {
  data?: Maybe<Array<StockToShapeCreateManyStockInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToShapeCreateNestedManyWithoutShapeInput = {
  create?: Maybe<Array<StockToShapeCreateWithoutShapeInput>>;
  connectOrCreate?: Maybe<Array<StockToShapeCreateOrConnectWithoutShapeInput>>;
  createMany?: Maybe<StockToShapeCreateManyShapeInputEnvelope>;
  connect?: Maybe<Array<StockToShapeWhereUniqueInput>>;
};

export type StockToShapeCreateNestedManyWithoutStockInput = {
  create?: Maybe<Array<StockToShapeCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToShapeCreateOrConnectWithoutStockInput>>;
  createMany?: Maybe<StockToShapeCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToShapeWhereUniqueInput>>;
};

export type StockToShapeCreateOrConnectWithoutShapeInput = {
  where: StockToShapeWhereUniqueInput;
  create: StockToShapeCreateWithoutShapeInput;
};

export type StockToShapeCreateOrConnectWithoutStockInput = {
  where: StockToShapeWhereUniqueInput;
  create: StockToShapeCreateWithoutStockInput;
};

export type StockToShapeCreateWithoutShapeInput = {
  value: Scalars['Float'];
  stock: StockCreateNestedOneWithoutShapesInput;
};

export type StockToShapeCreateWithoutStockInput = {
  value: Scalars['Float'];
  shape?: Maybe<ShapeCreateNestedOneWithoutStockToShapeInput>;
};

export type StockToShapeListRelationFilter = {
  every?: Maybe<StockToShapeWhereInput>;
  some?: Maybe<StockToShapeWhereInput>;
  none?: Maybe<StockToShapeWhereInput>;
};

export type StockToShapeScalarWhereInput = {
  AND?: Maybe<Array<StockToShapeScalarWhereInput>>;
  OR?: Maybe<Array<StockToShapeScalarWhereInput>>;
  NOT?: Maybe<Array<StockToShapeScalarWhereInput>>;
  stockId?: Maybe<IntFilter>;
  shapeId?: Maybe<IntFilter>;
  value?: Maybe<FloatFilter>;
};

export type StockToShapeStockIdShapeIdCompoundUniqueInput = {
  stockId: Scalars['Int'];
  shapeId: Scalars['Int'];
};

export type StockToShapeUpdateManyMutationInput = {
  value?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type StockToShapeUpdateManyWithWhereWithoutShapeInput = {
  where: StockToShapeScalarWhereInput;
  data: StockToShapeUpdateManyMutationInput;
};

export type StockToShapeUpdateManyWithWhereWithoutStockInput = {
  where: StockToShapeScalarWhereInput;
  data: StockToShapeUpdateManyMutationInput;
};

export type StockToShapeUpdateManyWithoutShapeInput = {
  create?: Maybe<Array<StockToShapeCreateWithoutShapeInput>>;
  connectOrCreate?: Maybe<Array<StockToShapeCreateOrConnectWithoutShapeInput>>;
  upsert?: Maybe<Array<StockToShapeUpsertWithWhereUniqueWithoutShapeInput>>;
  createMany?: Maybe<StockToShapeCreateManyShapeInputEnvelope>;
  connect?: Maybe<Array<StockToShapeWhereUniqueInput>>;
  set?: Maybe<Array<StockToShapeWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToShapeWhereUniqueInput>>;
  delete?: Maybe<Array<StockToShapeWhereUniqueInput>>;
  update?: Maybe<Array<StockToShapeUpdateWithWhereUniqueWithoutShapeInput>>;
  updateMany?: Maybe<Array<StockToShapeUpdateManyWithWhereWithoutShapeInput>>;
  deleteMany?: Maybe<Array<StockToShapeScalarWhereInput>>;
};

export type StockToShapeUpdateManyWithoutStockInput = {
  create?: Maybe<Array<StockToShapeCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToShapeCreateOrConnectWithoutStockInput>>;
  upsert?: Maybe<Array<StockToShapeUpsertWithWhereUniqueWithoutStockInput>>;
  createMany?: Maybe<StockToShapeCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToShapeWhereUniqueInput>>;
  set?: Maybe<Array<StockToShapeWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToShapeWhereUniqueInput>>;
  delete?: Maybe<Array<StockToShapeWhereUniqueInput>>;
  update?: Maybe<Array<StockToShapeUpdateWithWhereUniqueWithoutStockInput>>;
  updateMany?: Maybe<Array<StockToShapeUpdateManyWithWhereWithoutStockInput>>;
  deleteMany?: Maybe<Array<StockToShapeScalarWhereInput>>;
};

export type StockToShapeUpdateWithWhereUniqueWithoutShapeInput = {
  where: StockToShapeWhereUniqueInput;
  data: StockToShapeUpdateWithoutShapeInput;
};

export type StockToShapeUpdateWithWhereUniqueWithoutStockInput = {
  where: StockToShapeWhereUniqueInput;
  data: StockToShapeUpdateWithoutStockInput;
};

export type StockToShapeUpdateWithoutShapeInput = {
  value?: Maybe<FloatFieldUpdateOperationsInput>;
  stock?: Maybe<StockUpdateOneRequiredWithoutShapesInput>;
};

export type StockToShapeUpdateWithoutStockInput = {
  value?: Maybe<FloatFieldUpdateOperationsInput>;
  shape?: Maybe<ShapeUpdateOneWithoutStockToShapeInput>;
};

export type StockToShapeUpsertWithWhereUniqueWithoutShapeInput = {
  where: StockToShapeWhereUniqueInput;
  update: StockToShapeUpdateWithoutShapeInput;
  create: StockToShapeCreateWithoutShapeInput;
};

export type StockToShapeUpsertWithWhereUniqueWithoutStockInput = {
  where: StockToShapeWhereUniqueInput;
  update: StockToShapeUpdateWithoutStockInput;
  create: StockToShapeCreateWithoutStockInput;
};

export type StockToShapeWhereInput = {
  AND?: Maybe<Array<StockToShapeWhereInput>>;
  OR?: Maybe<Array<StockToShapeWhereInput>>;
  NOT?: Maybe<Array<StockToShapeWhereInput>>;
  stockId?: Maybe<IntFilter>;
  shapeId?: Maybe<IntFilter>;
  value?: Maybe<FloatFilter>;
  stock?: Maybe<StockWhereInput>;
  shape?: Maybe<ShapeWhereInput>;
};

export type StockToShapeWhereUniqueInput = {
  stockId_shapeId?: Maybe<StockToShapeStockIdShapeIdCompoundUniqueInput>;
};

export type StockToSize = {
  __typename?: 'StockToSize';
  stockId: Scalars['Int'];
  sizeId: Scalars['Int'];
  stock: Stock;
  size?: Maybe<Size>;
};

export type StockToSizeCreateManySizeInput = {
  stockId: Scalars['Int'];
};

export type StockToSizeCreateManySizeInputEnvelope = {
  data?: Maybe<Array<StockToSizeCreateManySizeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToSizeCreateManyStockInput = {
  sizeId: Scalars['Int'];
};

export type StockToSizeCreateManyStockInputEnvelope = {
  data?: Maybe<Array<StockToSizeCreateManyStockInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToSizeCreateNestedManyWithoutSizeInput = {
  create?: Maybe<Array<StockToSizeCreateWithoutSizeInput>>;
  connectOrCreate?: Maybe<Array<StockToSizeCreateOrConnectWithoutSizeInput>>;
  createMany?: Maybe<StockToSizeCreateManySizeInputEnvelope>;
  connect?: Maybe<Array<StockToSizeWhereUniqueInput>>;
};

export type StockToSizeCreateNestedManyWithoutStockInput = {
  create?: Maybe<Array<StockToSizeCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToSizeCreateOrConnectWithoutStockInput>>;
  createMany?: Maybe<StockToSizeCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToSizeWhereUniqueInput>>;
};

export type StockToSizeCreateOrConnectWithoutSizeInput = {
  where: StockToSizeWhereUniqueInput;
  create: StockToSizeCreateWithoutSizeInput;
};

export type StockToSizeCreateOrConnectWithoutStockInput = {
  where: StockToSizeWhereUniqueInput;
  create: StockToSizeCreateWithoutStockInput;
};

export type StockToSizeCreateWithoutSizeInput = {
  stock: StockCreateNestedOneWithoutSizesInput;
};

export type StockToSizeCreateWithoutStockInput = {
  size?: Maybe<SizeCreateNestedOneWithoutStockToSizeInput>;
};

export type StockToSizeListRelationFilter = {
  every?: Maybe<StockToSizeWhereInput>;
  some?: Maybe<StockToSizeWhereInput>;
  none?: Maybe<StockToSizeWhereInput>;
};

export type StockToSizeScalarWhereInput = {
  AND?: Maybe<Array<StockToSizeScalarWhereInput>>;
  OR?: Maybe<Array<StockToSizeScalarWhereInput>>;
  NOT?: Maybe<Array<StockToSizeScalarWhereInput>>;
  stockId?: Maybe<IntFilter>;
  sizeId?: Maybe<IntFilter>;
};

export type StockToSizeStockIdSizeIdCompoundUniqueInput = {
  stockId: Scalars['Int'];
  sizeId: Scalars['Int'];
};

export type StockToSizeUpdateManyMutationInput = {
  _: Scalars['String'];
};

export type StockToSizeUpdateManyWithWhereWithoutSizeInput = {
  where: StockToSizeScalarWhereInput;
  data: StockToSizeUpdateManyMutationInput;
};

export type StockToSizeUpdateManyWithWhereWithoutStockInput = {
  where: StockToSizeScalarWhereInput;
  data: StockToSizeUpdateManyMutationInput;
};

export type StockToSizeUpdateManyWithoutSizeInput = {
  create?: Maybe<Array<StockToSizeCreateWithoutSizeInput>>;
  connectOrCreate?: Maybe<Array<StockToSizeCreateOrConnectWithoutSizeInput>>;
  upsert?: Maybe<Array<StockToSizeUpsertWithWhereUniqueWithoutSizeInput>>;
  createMany?: Maybe<StockToSizeCreateManySizeInputEnvelope>;
  connect?: Maybe<Array<StockToSizeWhereUniqueInput>>;
  set?: Maybe<Array<StockToSizeWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToSizeWhereUniqueInput>>;
  delete?: Maybe<Array<StockToSizeWhereUniqueInput>>;
  update?: Maybe<Array<StockToSizeUpdateWithWhereUniqueWithoutSizeInput>>;
  updateMany?: Maybe<Array<StockToSizeUpdateManyWithWhereWithoutSizeInput>>;
  deleteMany?: Maybe<Array<StockToSizeScalarWhereInput>>;
};

export type StockToSizeUpdateManyWithoutStockInput = {
  create?: Maybe<Array<StockToSizeCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToSizeCreateOrConnectWithoutStockInput>>;
  upsert?: Maybe<Array<StockToSizeUpsertWithWhereUniqueWithoutStockInput>>;
  createMany?: Maybe<StockToSizeCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToSizeWhereUniqueInput>>;
  set?: Maybe<Array<StockToSizeWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToSizeWhereUniqueInput>>;
  delete?: Maybe<Array<StockToSizeWhereUniqueInput>>;
  update?: Maybe<Array<StockToSizeUpdateWithWhereUniqueWithoutStockInput>>;
  updateMany?: Maybe<Array<StockToSizeUpdateManyWithWhereWithoutStockInput>>;
  deleteMany?: Maybe<Array<StockToSizeScalarWhereInput>>;
};

export type StockToSizeUpdateWithWhereUniqueWithoutSizeInput = {
  where: StockToSizeWhereUniqueInput;
  data: StockToSizeUpdateWithoutSizeInput;
};

export type StockToSizeUpdateWithWhereUniqueWithoutStockInput = {
  where: StockToSizeWhereUniqueInput;
  data: StockToSizeUpdateWithoutStockInput;
};

export type StockToSizeUpdateWithoutSizeInput = {
  stock?: Maybe<StockUpdateOneRequiredWithoutSizesInput>;
};

export type StockToSizeUpdateWithoutStockInput = {
  size?: Maybe<SizeUpdateOneWithoutStockToSizeInput>;
};

export type StockToSizeUpsertWithWhereUniqueWithoutSizeInput = {
  where: StockToSizeWhereUniqueInput;
  update: StockToSizeUpdateWithoutSizeInput;
  create: StockToSizeCreateWithoutSizeInput;
};

export type StockToSizeUpsertWithWhereUniqueWithoutStockInput = {
  where: StockToSizeWhereUniqueInput;
  update: StockToSizeUpdateWithoutStockInput;
  create: StockToSizeCreateWithoutStockInput;
};

export type StockToSizeWhereInput = {
  AND?: Maybe<Array<StockToSizeWhereInput>>;
  OR?: Maybe<Array<StockToSizeWhereInput>>;
  NOT?: Maybe<Array<StockToSizeWhereInput>>;
  stockId?: Maybe<IntFilter>;
  sizeId?: Maybe<IntFilter>;
  stock?: Maybe<StockWhereInput>;
  size?: Maybe<SizeWhereInput>;
};

export type StockToSizeWhereUniqueInput = {
  stockId_sizeId?: Maybe<StockToSizeStockIdSizeIdCompoundUniqueInput>;
};

export type StockToTag = {
  __typename?: 'StockToTag';
  stockId: Scalars['Int'];
  tagId: Scalars['Int'];
  stock: Stock;
  tag?: Maybe<Tag>;
};

export type StockToTagCreateManyStockInput = {
  tagId: Scalars['Int'];
};

export type StockToTagCreateManyStockInputEnvelope = {
  data?: Maybe<Array<StockToTagCreateManyStockInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToTagCreateManyTagInput = {
  stockId: Scalars['Int'];
};

export type StockToTagCreateManyTagInputEnvelope = {
  data?: Maybe<Array<StockToTagCreateManyTagInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockToTagCreateNestedManyWithoutStockInput = {
  create?: Maybe<Array<StockToTagCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToTagCreateOrConnectWithoutStockInput>>;
  createMany?: Maybe<StockToTagCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToTagWhereUniqueInput>>;
};

export type StockToTagCreateNestedManyWithoutTagInput = {
  create?: Maybe<Array<StockToTagCreateWithoutTagInput>>;
  connectOrCreate?: Maybe<Array<StockToTagCreateOrConnectWithoutTagInput>>;
  createMany?: Maybe<StockToTagCreateManyTagInputEnvelope>;
  connect?: Maybe<Array<StockToTagWhereUniqueInput>>;
};

export type StockToTagCreateOrConnectWithoutStockInput = {
  where: StockToTagWhereUniqueInput;
  create: StockToTagCreateWithoutStockInput;
};

export type StockToTagCreateOrConnectWithoutTagInput = {
  where: StockToTagWhereUniqueInput;
  create: StockToTagCreateWithoutTagInput;
};

export type StockToTagCreateWithoutStockInput = {
  tag?: Maybe<TagCreateNestedOneWithoutStockInput>;
};

export type StockToTagCreateWithoutTagInput = {
  stock: StockCreateNestedOneWithoutTagsInput;
};

export type StockToTagListRelationFilter = {
  every?: Maybe<StockToTagWhereInput>;
  some?: Maybe<StockToTagWhereInput>;
  none?: Maybe<StockToTagWhereInput>;
};

export type StockToTagScalarWhereInput = {
  AND?: Maybe<Array<StockToTagScalarWhereInput>>;
  OR?: Maybe<Array<StockToTagScalarWhereInput>>;
  NOT?: Maybe<Array<StockToTagScalarWhereInput>>;
  stockId?: Maybe<IntFilter>;
  tagId?: Maybe<IntFilter>;
};

export type StockToTagStockIdTagIdCompoundUniqueInput = {
  stockId: Scalars['Int'];
  tagId: Scalars['Int'];
};

export type StockToTagUpdateManyMutationInput = {
  _: Scalars['String'];
};

export type StockToTagUpdateManyWithWhereWithoutStockInput = {
  where: StockToTagScalarWhereInput;
  data: StockToTagUpdateManyMutationInput;
};

export type StockToTagUpdateManyWithWhereWithoutTagInput = {
  where: StockToTagScalarWhereInput;
  data: StockToTagUpdateManyMutationInput;
};

export type StockToTagUpdateManyWithoutStockInput = {
  create?: Maybe<Array<StockToTagCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockToTagCreateOrConnectWithoutStockInput>>;
  upsert?: Maybe<Array<StockToTagUpsertWithWhereUniqueWithoutStockInput>>;
  createMany?: Maybe<StockToTagCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockToTagWhereUniqueInput>>;
  set?: Maybe<Array<StockToTagWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToTagWhereUniqueInput>>;
  delete?: Maybe<Array<StockToTagWhereUniqueInput>>;
  update?: Maybe<Array<StockToTagUpdateWithWhereUniqueWithoutStockInput>>;
  updateMany?: Maybe<Array<StockToTagUpdateManyWithWhereWithoutStockInput>>;
  deleteMany?: Maybe<Array<StockToTagScalarWhereInput>>;
};

export type StockToTagUpdateManyWithoutTagInput = {
  create?: Maybe<Array<StockToTagCreateWithoutTagInput>>;
  connectOrCreate?: Maybe<Array<StockToTagCreateOrConnectWithoutTagInput>>;
  upsert?: Maybe<Array<StockToTagUpsertWithWhereUniqueWithoutTagInput>>;
  createMany?: Maybe<StockToTagCreateManyTagInputEnvelope>;
  connect?: Maybe<Array<StockToTagWhereUniqueInput>>;
  set?: Maybe<Array<StockToTagWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockToTagWhereUniqueInput>>;
  delete?: Maybe<Array<StockToTagWhereUniqueInput>>;
  update?: Maybe<Array<StockToTagUpdateWithWhereUniqueWithoutTagInput>>;
  updateMany?: Maybe<Array<StockToTagUpdateManyWithWhereWithoutTagInput>>;
  deleteMany?: Maybe<Array<StockToTagScalarWhereInput>>;
};

export type StockToTagUpdateWithWhereUniqueWithoutStockInput = {
  where: StockToTagWhereUniqueInput;
  data: StockToTagUpdateWithoutStockInput;
};

export type StockToTagUpdateWithWhereUniqueWithoutTagInput = {
  where: StockToTagWhereUniqueInput;
  data: StockToTagUpdateWithoutTagInput;
};

export type StockToTagUpdateWithoutStockInput = {
  tag?: Maybe<TagUpdateOneWithoutStockInput>;
};

export type StockToTagUpdateWithoutTagInput = {
  stock?: Maybe<StockUpdateOneRequiredWithoutTagsInput>;
};

export type StockToTagUpsertWithWhereUniqueWithoutStockInput = {
  where: StockToTagWhereUniqueInput;
  update: StockToTagUpdateWithoutStockInput;
  create: StockToTagCreateWithoutStockInput;
};

export type StockToTagUpsertWithWhereUniqueWithoutTagInput = {
  where: StockToTagWhereUniqueInput;
  update: StockToTagUpdateWithoutTagInput;
  create: StockToTagCreateWithoutTagInput;
};

export type StockToTagWhereInput = {
  AND?: Maybe<Array<StockToTagWhereInput>>;
  OR?: Maybe<Array<StockToTagWhereInput>>;
  NOT?: Maybe<Array<StockToTagWhereInput>>;
  stockId?: Maybe<IntFilter>;
  tagId?: Maybe<IntFilter>;
  stock?: Maybe<StockWhereInput>;
  tag?: Maybe<TagWhereInput>;
};

export type StockToTagWhereUniqueInput = {
  stockId_tagId?: Maybe<StockToTagStockIdTagIdCompoundUniqueInput>;
};

export type StockTrans = {
  __typename?: 'StockTrans';
  id: Scalars['Int'];
  stockId: Scalars['Int'];
  languageCode: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stock: Stock;
};

export type StockTransCreateManyStockInput = {
  id?: Maybe<Scalars['Int']>;
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type StockTransCreateManyStockInputEnvelope = {
  data?: Maybe<Array<StockTransCreateManyStockInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StockTransCreateNestedManyWithoutStockInput = {
  create?: Maybe<Array<StockTransCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockTransCreateOrConnectWithoutStockInput>>;
  createMany?: Maybe<StockTransCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockTransWhereUniqueInput>>;
};

export type StockTransCreateOrConnectWithoutStockInput = {
  where: StockTransWhereUniqueInput;
  create: StockTransCreateWithoutStockInput;
};

export type StockTransCreateWithoutStockInput = {
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type StockTransListRelationFilter = {
  every?: Maybe<StockTransWhereInput>;
  some?: Maybe<StockTransWhereInput>;
  none?: Maybe<StockTransWhereInput>;
};

export type StockTransScalarWhereInput = {
  AND?: Maybe<Array<StockTransScalarWhereInput>>;
  OR?: Maybe<Array<StockTransScalarWhereInput>>;
  NOT?: Maybe<Array<StockTransScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  stockId?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  slug?: Maybe<StringNullableFilter>;
};

export type StockTransUpdateManyMutationInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type StockTransUpdateManyWithWhereWithoutStockInput = {
  where: StockTransScalarWhereInput;
  data: StockTransUpdateManyMutationInput;
};

export type StockTransUpdateManyWithoutStockInput = {
  create?: Maybe<Array<StockTransCreateWithoutStockInput>>;
  connectOrCreate?: Maybe<Array<StockTransCreateOrConnectWithoutStockInput>>;
  upsert?: Maybe<Array<StockTransUpsertWithWhereUniqueWithoutStockInput>>;
  createMany?: Maybe<StockTransCreateManyStockInputEnvelope>;
  connect?: Maybe<Array<StockTransWhereUniqueInput>>;
  set?: Maybe<Array<StockTransWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockTransWhereUniqueInput>>;
  delete?: Maybe<Array<StockTransWhereUniqueInput>>;
  update?: Maybe<Array<StockTransUpdateWithWhereUniqueWithoutStockInput>>;
  updateMany?: Maybe<Array<StockTransUpdateManyWithWhereWithoutStockInput>>;
  deleteMany?: Maybe<Array<StockTransScalarWhereInput>>;
};

export type StockTransUpdateWithWhereUniqueWithoutStockInput = {
  where: StockTransWhereUniqueInput;
  data: StockTransUpdateWithoutStockInput;
};

export type StockTransUpdateWithoutStockInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type StockTransUpsertWithWhereUniqueWithoutStockInput = {
  where: StockTransWhereUniqueInput;
  update: StockTransUpdateWithoutStockInput;
  create: StockTransCreateWithoutStockInput;
};

export type StockTransWhereInput = {
  AND?: Maybe<Array<StockTransWhereInput>>;
  OR?: Maybe<Array<StockTransWhereInput>>;
  NOT?: Maybe<Array<StockTransWhereInput>>;
  id?: Maybe<IntFilter>;
  stockId?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  slug?: Maybe<StringNullableFilter>;
  stock?: Maybe<StockWhereInput>;
};

export type StockTransWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type StockUpdateManyMutationInput = {
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  isSoldOut?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type StockUpdateManyWithWhereWithoutVendorInput = {
  where: StockScalarWhereInput;
  data: StockUpdateManyMutationInput;
};

export type StockUpdateManyWithoutVendorInput = {
  create?: Maybe<Array<StockCreateWithoutVendorInput>>;
  connectOrCreate?: Maybe<Array<StockCreateOrConnectWithoutVendorInput>>;
  upsert?: Maybe<Array<StockUpsertWithWhereUniqueWithoutVendorInput>>;
  createMany?: Maybe<StockCreateManyVendorInputEnvelope>;
  connect?: Maybe<Array<StockWhereUniqueInput>>;
  set?: Maybe<Array<StockWhereUniqueInput>>;
  disconnect?: Maybe<Array<StockWhereUniqueInput>>;
  delete?: Maybe<Array<StockWhereUniqueInput>>;
  update?: Maybe<Array<StockUpdateWithWhereUniqueWithoutVendorInput>>;
  updateMany?: Maybe<Array<StockUpdateManyWithWhereWithoutVendorInput>>;
  deleteMany?: Maybe<Array<StockScalarWhereInput>>;
};

export type StockUpdateOneRequiredWithoutCategoriesInput = {
  create?: Maybe<StockCreateWithoutCategoriesInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutCategoriesInput>;
  upsert?: Maybe<StockUpsertWithoutCategoriesInput>;
  connect?: Maybe<StockWhereUniqueInput>;
  update?: Maybe<StockUpdateWithoutCategoriesInput>;
};

export type StockUpdateOneRequiredWithoutColoursInput = {
  create?: Maybe<StockCreateWithoutColoursInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutColoursInput>;
  upsert?: Maybe<StockUpsertWithoutColoursInput>;
  connect?: Maybe<StockWhereUniqueInput>;
  update?: Maybe<StockUpdateWithoutColoursInput>;
};

export type StockUpdateOneRequiredWithoutDescriptionsInput = {
  create?: Maybe<StockCreateWithoutDescriptionsInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutDescriptionsInput>;
  upsert?: Maybe<StockUpsertWithoutDescriptionsInput>;
  connect?: Maybe<StockWhereUniqueInput>;
  update?: Maybe<StockUpdateWithoutDescriptionsInput>;
};

export type StockUpdateOneRequiredWithoutFilesInput = {
  create?: Maybe<StockCreateWithoutFilesInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutFilesInput>;
  upsert?: Maybe<StockUpsertWithoutFilesInput>;
  connect?: Maybe<StockWhereUniqueInput>;
  update?: Maybe<StockUpdateWithoutFilesInput>;
};

export type StockUpdateOneRequiredWithoutLabelsInput = {
  create?: Maybe<StockCreateWithoutLabelsInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutLabelsInput>;
  upsert?: Maybe<StockUpsertWithoutLabelsInput>;
  connect?: Maybe<StockWhereUniqueInput>;
  update?: Maybe<StockUpdateWithoutLabelsInput>;
};

export type StockUpdateOneRequiredWithoutMaterialsInput = {
  create?: Maybe<StockCreateWithoutMaterialsInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutMaterialsInput>;
  upsert?: Maybe<StockUpsertWithoutMaterialsInput>;
  connect?: Maybe<StockWhereUniqueInput>;
  update?: Maybe<StockUpdateWithoutMaterialsInput>;
};

export type StockUpdateOneRequiredWithoutShapesInput = {
  create?: Maybe<StockCreateWithoutShapesInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutShapesInput>;
  upsert?: Maybe<StockUpsertWithoutShapesInput>;
  connect?: Maybe<StockWhereUniqueInput>;
  update?: Maybe<StockUpdateWithoutShapesInput>;
};

export type StockUpdateOneRequiredWithoutSizesInput = {
  create?: Maybe<StockCreateWithoutSizesInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutSizesInput>;
  upsert?: Maybe<StockUpsertWithoutSizesInput>;
  connect?: Maybe<StockWhereUniqueInput>;
  update?: Maybe<StockUpdateWithoutSizesInput>;
};

export type StockUpdateOneRequiredWithoutTagsInput = {
  create?: Maybe<StockCreateWithoutTagsInput>;
  connectOrCreate?: Maybe<StockCreateOrConnectWithoutTagsInput>;
  upsert?: Maybe<StockUpsertWithoutTagsInput>;
  connect?: Maybe<StockWhereUniqueInput>;
  update?: Maybe<StockUpdateWithoutTagsInput>;
};

export type StockUpdateWithWhereUniqueWithoutVendorInput = {
  where: StockWhereUniqueInput;
  data: StockUpdateWithoutVendorInput;
};

export type StockUpdateWithoutCategoriesInput = {
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  isSoldOut?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutStocksInput>;
  colours?: Maybe<StockToColourUpdateManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeUpdateManyWithoutStockInput>;
  tags?: Maybe<StockToTagUpdateManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeUpdateManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionUpdateManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialUpdateManyWithoutStockInput>;
  labels?: Maybe<StockToLabelUpdateManyWithoutStockInput>;
  files?: Maybe<StockFileUpdateManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransUpdateManyWithoutStockInput>;
};

export type StockUpdateWithoutColoursInput = {
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  isSoldOut?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutStocksInput>;
  shapes?: Maybe<StockToShapeUpdateManyWithoutStockInput>;
  tags?: Maybe<StockToTagUpdateManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryUpdateManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeUpdateManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionUpdateManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialUpdateManyWithoutStockInput>;
  labels?: Maybe<StockToLabelUpdateManyWithoutStockInput>;
  files?: Maybe<StockFileUpdateManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransUpdateManyWithoutStockInput>;
};

export type StockUpdateWithoutDescriptionsInput = {
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  isSoldOut?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutStocksInput>;
  colours?: Maybe<StockToColourUpdateManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeUpdateManyWithoutStockInput>;
  tags?: Maybe<StockToTagUpdateManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryUpdateManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeUpdateManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialUpdateManyWithoutStockInput>;
  labels?: Maybe<StockToLabelUpdateManyWithoutStockInput>;
  files?: Maybe<StockFileUpdateManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransUpdateManyWithoutStockInput>;
};

export type StockUpdateWithoutFilesInput = {
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  isSoldOut?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutStocksInput>;
  colours?: Maybe<StockToColourUpdateManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeUpdateManyWithoutStockInput>;
  tags?: Maybe<StockToTagUpdateManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryUpdateManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeUpdateManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionUpdateManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialUpdateManyWithoutStockInput>;
  labels?: Maybe<StockToLabelUpdateManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransUpdateManyWithoutStockInput>;
};

export type StockUpdateWithoutLabelsInput = {
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  isSoldOut?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutStocksInput>;
  colours?: Maybe<StockToColourUpdateManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeUpdateManyWithoutStockInput>;
  tags?: Maybe<StockToTagUpdateManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryUpdateManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeUpdateManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionUpdateManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialUpdateManyWithoutStockInput>;
  files?: Maybe<StockFileUpdateManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransUpdateManyWithoutStockInput>;
};

export type StockUpdateWithoutMaterialsInput = {
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  isSoldOut?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutStocksInput>;
  colours?: Maybe<StockToColourUpdateManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeUpdateManyWithoutStockInput>;
  tags?: Maybe<StockToTagUpdateManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryUpdateManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeUpdateManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionUpdateManyWithoutStockInput>;
  labels?: Maybe<StockToLabelUpdateManyWithoutStockInput>;
  files?: Maybe<StockFileUpdateManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransUpdateManyWithoutStockInput>;
};

export type StockUpdateWithoutShapesInput = {
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  isSoldOut?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutStocksInput>;
  colours?: Maybe<StockToColourUpdateManyWithoutStockInput>;
  tags?: Maybe<StockToTagUpdateManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryUpdateManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeUpdateManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionUpdateManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialUpdateManyWithoutStockInput>;
  labels?: Maybe<StockToLabelUpdateManyWithoutStockInput>;
  files?: Maybe<StockFileUpdateManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransUpdateManyWithoutStockInput>;
};

export type StockUpdateWithoutSizesInput = {
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  isSoldOut?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutStocksInput>;
  colours?: Maybe<StockToColourUpdateManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeUpdateManyWithoutStockInput>;
  tags?: Maybe<StockToTagUpdateManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryUpdateManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionUpdateManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialUpdateManyWithoutStockInput>;
  labels?: Maybe<StockToLabelUpdateManyWithoutStockInput>;
  files?: Maybe<StockFileUpdateManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransUpdateManyWithoutStockInput>;
};

export type StockUpdateWithoutTagsInput = {
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  isSoldOut?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  vendor?: Maybe<UserUpdateOneWithoutStocksInput>;
  colours?: Maybe<StockToColourUpdateManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeUpdateManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryUpdateManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeUpdateManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionUpdateManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialUpdateManyWithoutStockInput>;
  labels?: Maybe<StockToLabelUpdateManyWithoutStockInput>;
  files?: Maybe<StockFileUpdateManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransUpdateManyWithoutStockInput>;
};

export type StockUpdateWithoutVendorInput = {
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  quantity?: Maybe<FloatFieldUpdateOperationsInput>;
  saleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  saleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  weight?: Maybe<FloatFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  length?: Maybe<FloatFieldUpdateOperationsInput>;
  isApproved?: Maybe<IntFieldUpdateOperationsInput>;
  isSoldOut?: Maybe<IntFieldUpdateOperationsInput>;
  sku?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  colours?: Maybe<StockToColourUpdateManyWithoutStockInput>;
  shapes?: Maybe<StockToShapeUpdateManyWithoutStockInput>;
  tags?: Maybe<StockToTagUpdateManyWithoutStockInput>;
  categories?: Maybe<StockToCategoryUpdateManyWithoutStockInput>;
  sizes?: Maybe<StockToSizeUpdateManyWithoutStockInput>;
  descriptions?: Maybe<StockToDescriptionUpdateManyWithoutStockInput>;
  materials?: Maybe<StockToMaterialUpdateManyWithoutStockInput>;
  labels?: Maybe<StockToLabelUpdateManyWithoutStockInput>;
  files?: Maybe<StockFileUpdateManyWithoutStockInput>;
  elment_trans?: Maybe<StockTransUpdateManyWithoutStockInput>;
};

export type StockUpsertWithWhereUniqueWithoutVendorInput = {
  where: StockWhereUniqueInput;
  update: StockUpdateWithoutVendorInput;
  create: StockCreateWithoutVendorInput;
};

export type StockUpsertWithoutCategoriesInput = {
  update: StockUpdateWithoutCategoriesInput;
  create: StockCreateWithoutCategoriesInput;
};

export type StockUpsertWithoutColoursInput = {
  update: StockUpdateWithoutColoursInput;
  create: StockCreateWithoutColoursInput;
};

export type StockUpsertWithoutDescriptionsInput = {
  update: StockUpdateWithoutDescriptionsInput;
  create: StockCreateWithoutDescriptionsInput;
};

export type StockUpsertWithoutFilesInput = {
  update: StockUpdateWithoutFilesInput;
  create: StockCreateWithoutFilesInput;
};

export type StockUpsertWithoutLabelsInput = {
  update: StockUpdateWithoutLabelsInput;
  create: StockCreateWithoutLabelsInput;
};

export type StockUpsertWithoutMaterialsInput = {
  update: StockUpdateWithoutMaterialsInput;
  create: StockCreateWithoutMaterialsInput;
};

export type StockUpsertWithoutShapesInput = {
  update: StockUpdateWithoutShapesInput;
  create: StockCreateWithoutShapesInput;
};

export type StockUpsertWithoutSizesInput = {
  update: StockUpdateWithoutSizesInput;
  create: StockCreateWithoutSizesInput;
};

export type StockUpsertWithoutTagsInput = {
  update: StockUpdateWithoutTagsInput;
  create: StockCreateWithoutTagsInput;
};

export type StockWhereInput = {
  AND?: Maybe<Array<StockWhereInput>>;
  OR?: Maybe<Array<StockWhereInput>>;
  NOT?: Maybe<Array<StockWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
  price?: Maybe<FloatFilter>;
  quantity?: Maybe<FloatFilter>;
  saleStart?: Maybe<DateTimeNullableFilter>;
  saleEnd?: Maybe<DateTimeNullableFilter>;
  weight?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
  height?: Maybe<FloatFilter>;
  length?: Maybe<FloatFilter>;
  isApproved?: Maybe<IntFilter>;
  isSoldOut?: Maybe<IntFilter>;
  sku?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
  isDeleted?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  vendor?: Maybe<UserWhereInput>;
  colours?: Maybe<StockToColourListRelationFilter>;
  shapes?: Maybe<StockToShapeListRelationFilter>;
  tags?: Maybe<StockToTagListRelationFilter>;
  categories?: Maybe<StockToCategoryListRelationFilter>;
  sizes?: Maybe<StockToSizeListRelationFilter>;
  descriptions?: Maybe<StockToDescriptionListRelationFilter>;
  materials?: Maybe<StockToMaterialListRelationFilter>;
  labels?: Maybe<StockToLabelListRelationFilter>;
  files?: Maybe<StockFileListRelationFilter>;
  elment_trans?: Maybe<StockTransListRelationFilter>;
};

export type StockWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  photo?: Maybe<Scalars['String']>;
  product: Array<ProductToTag>;
  elment_trans: Array<TagTrans>;
  stock: Array<StockToTag>;
};


export type TagProductArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductToTagWhereUniqueInput>;
};


export type TagElment_TransArgs = {
  where?: Maybe<TagTransWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<TagTransWhereUniqueInput>;
};


export type TagStockArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockToTagWhereUniqueInput>;
};

export type TagCreateNestedOneWithoutProductInput = {
  create?: Maybe<TagCreateWithoutProductInput>;
  connectOrCreate?: Maybe<TagCreateOrConnectWithoutProductInput>;
  connect?: Maybe<TagWhereUniqueInput>;
};

export type TagCreateNestedOneWithoutStockInput = {
  create?: Maybe<TagCreateWithoutStockInput>;
  connectOrCreate?: Maybe<TagCreateOrConnectWithoutStockInput>;
  connect?: Maybe<TagWhereUniqueInput>;
};

export type TagCreateOrConnectWithoutProductInput = {
  where: TagWhereUniqueInput;
  create: TagCreateWithoutProductInput;
};

export type TagCreateOrConnectWithoutStockInput = {
  where: TagWhereUniqueInput;
  create: TagCreateWithoutStockInput;
};

export type TagCreateWithoutProductInput = {
  photo?: Maybe<Scalars['String']>;
  elment_trans?: Maybe<TagTransCreateNestedManyWithoutTagInput>;
  stock?: Maybe<StockToTagCreateNestedManyWithoutTagInput>;
};

export type TagCreateWithoutStockInput = {
  photo?: Maybe<Scalars['String']>;
  product?: Maybe<ProductToTagCreateNestedManyWithoutTagInput>;
  elment_trans?: Maybe<TagTransCreateNestedManyWithoutTagInput>;
};

export type TagTrans = {
  __typename?: 'TagTrans';
  id: Scalars['Int'];
  rowId: Scalars['Int'];
  languageCode: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  tag: Tag;
};

export type TagTransCreateManyTagInput = {
  id?: Maybe<Scalars['Int']>;
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TagTransCreateManyTagInputEnvelope = {
  data?: Maybe<Array<TagTransCreateManyTagInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TagTransCreateNestedManyWithoutTagInput = {
  create?: Maybe<Array<TagTransCreateWithoutTagInput>>;
  connectOrCreate?: Maybe<Array<TagTransCreateOrConnectWithoutTagInput>>;
  createMany?: Maybe<TagTransCreateManyTagInputEnvelope>;
  connect?: Maybe<Array<TagTransWhereUniqueInput>>;
};

export type TagTransCreateOrConnectWithoutTagInput = {
  where: TagTransWhereUniqueInput;
  create: TagTransCreateWithoutTagInput;
};

export type TagTransCreateWithoutTagInput = {
  languageCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TagTransListRelationFilter = {
  every?: Maybe<TagTransWhereInput>;
  some?: Maybe<TagTransWhereInput>;
  none?: Maybe<TagTransWhereInput>;
};

export type TagTransScalarWhereInput = {
  AND?: Maybe<Array<TagTransScalarWhereInput>>;
  OR?: Maybe<Array<TagTransScalarWhereInput>>;
  NOT?: Maybe<Array<TagTransScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  rowId?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
};

export type TagTransUpdateManyMutationInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type TagTransUpdateManyWithWhereWithoutTagInput = {
  where: TagTransScalarWhereInput;
  data: TagTransUpdateManyMutationInput;
};

export type TagTransUpdateManyWithoutTagInput = {
  create?: Maybe<Array<TagTransCreateWithoutTagInput>>;
  connectOrCreate?: Maybe<Array<TagTransCreateOrConnectWithoutTagInput>>;
  upsert?: Maybe<Array<TagTransUpsertWithWhereUniqueWithoutTagInput>>;
  createMany?: Maybe<TagTransCreateManyTagInputEnvelope>;
  connect?: Maybe<Array<TagTransWhereUniqueInput>>;
  set?: Maybe<Array<TagTransWhereUniqueInput>>;
  disconnect?: Maybe<Array<TagTransWhereUniqueInput>>;
  delete?: Maybe<Array<TagTransWhereUniqueInput>>;
  update?: Maybe<Array<TagTransUpdateWithWhereUniqueWithoutTagInput>>;
  updateMany?: Maybe<Array<TagTransUpdateManyWithWhereWithoutTagInput>>;
  deleteMany?: Maybe<Array<TagTransScalarWhereInput>>;
};

export type TagTransUpdateWithWhereUniqueWithoutTagInput = {
  where: TagTransWhereUniqueInput;
  data: TagTransUpdateWithoutTagInput;
};

export type TagTransUpdateWithoutTagInput = {
  languageCode?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type TagTransUpsertWithWhereUniqueWithoutTagInput = {
  where: TagTransWhereUniqueInput;
  update: TagTransUpdateWithoutTagInput;
  create: TagTransCreateWithoutTagInput;
};

export type TagTransWhereInput = {
  AND?: Maybe<Array<TagTransWhereInput>>;
  OR?: Maybe<Array<TagTransWhereInput>>;
  NOT?: Maybe<Array<TagTransWhereInput>>;
  id?: Maybe<IntFilter>;
  rowId?: Maybe<IntFilter>;
  languageCode?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  tag?: Maybe<TagWhereInput>;
};

export type TagTransWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type TagUpdateOneWithoutProductInput = {
  create?: Maybe<TagCreateWithoutProductInput>;
  connectOrCreate?: Maybe<TagCreateOrConnectWithoutProductInput>;
  upsert?: Maybe<TagUpsertWithoutProductInput>;
  connect?: Maybe<TagWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TagUpdateWithoutProductInput>;
};

export type TagUpdateOneWithoutStockInput = {
  create?: Maybe<TagCreateWithoutStockInput>;
  connectOrCreate?: Maybe<TagCreateOrConnectWithoutStockInput>;
  upsert?: Maybe<TagUpsertWithoutStockInput>;
  connect?: Maybe<TagWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TagUpdateWithoutStockInput>;
};

export type TagUpdateWithoutProductInput = {
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  elment_trans?: Maybe<TagTransUpdateManyWithoutTagInput>;
  stock?: Maybe<StockToTagUpdateManyWithoutTagInput>;
};

export type TagUpdateWithoutStockInput = {
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  product?: Maybe<ProductToTagUpdateManyWithoutTagInput>;
  elment_trans?: Maybe<TagTransUpdateManyWithoutTagInput>;
};

export type TagUpsertWithoutProductInput = {
  update: TagUpdateWithoutProductInput;
  create: TagCreateWithoutProductInput;
};

export type TagUpsertWithoutStockInput = {
  update: TagUpdateWithoutStockInput;
  create: TagCreateWithoutStockInput;
};

export type TagWhereInput = {
  AND?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  NOT?: Maybe<Array<TagWhereInput>>;
  id?: Maybe<IntFilter>;
  photo?: Maybe<StringNullableFilter>;
  product?: Maybe<ProductToTagListRelationFilter>;
  elment_trans?: Maybe<TagTransListRelationFilter>;
  stock?: Maybe<StockToTagListRelationFilter>;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  groupId: Scalars['Int'];
  isDeleted: Scalars['Int'];
  super: Scalars['Int'];
  countryId?: Maybe<Scalars['Int']>;
  cityId: Scalars['Int'];
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId: Scalars['Int'];
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit: Scalars['Float'];
  fieldId: Scalars['Int'];
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill: Scalars['Float'];
  taxRate: Scalars['Int'];
  isFeatured: Scalars['Int'];
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang: Scalars['String'];
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency: Scalars['String'];
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished: Scalars['Int'];
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin: Scalars['Int'];
  orderAssigned: Scalars['DateTime'];
  country?: Maybe<Country>;
  products: Array<Product>;
  stocks: Array<Stock>;
  quotationClients: Array<Quotation>;
  quotationVendors: Array<Quotation>;
  clientCouponsUsed: Array<CouponsUsed>;
  vendorCouponsUsed: Array<CouponsUsed>;
  orders: Array<Order>;
  salesOrders: Array<Order>;
  orderItems: Array<OrderItem>;
  orderVendors: Array<OrderVendor>;
  cargoCodes: Array<CargoCode>;
  userPriceVariations: Array<UserPriceVariation>;
  roles: Array<UserToRole>;
  views: Array<View>;
  rates: Array<Rate>;
  followers: Array<UserFollowing>;
  followerd: Array<UserFollowing>;
  favourites: Array<UserFavourite>;
  full_name?: Maybe<Scalars['String']>;
  productsCount?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Int']>;
};


export type UserProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductWhereUniqueInput>;
};


export type UserStocksArgs = {
  where?: Maybe<StockWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<StockWhereUniqueInput>;
};


export type UserQuotationClientsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<QuotationWhereUniqueInput>;
};


export type UserQuotationVendorsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<QuotationWhereUniqueInput>;
};


export type UserClientCouponsUsedArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CouponsUsedWhereUniqueInput>;
};


export type UserVendorCouponsUsedArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CouponsUsedWhereUniqueInput>;
};


export type UserOrdersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderWhereUniqueInput>;
};


export type UserSalesOrdersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderWhereUniqueInput>;
};


export type UserOrderItemsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderItemWhereUniqueInput>;
};


export type UserOrderVendorsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<OrderVendorWhereUniqueInput>;
};


export type UserCargoCodesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CargoCodeWhereUniqueInput>;
};


export type UserUserPriceVariationsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UserPriceVariationWhereUniqueInput>;
};


export type UserRolesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UserToRoleWhereUniqueInput>;
};


export type UserViewsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ViewWhereUniqueInput>;
};


export type UserRatesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<RateWhereUniqueInput>;
};


export type UserFollowersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UserFollowingWhereUniqueInput>;
};


export type UserFollowerdArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UserFollowingWhereUniqueInput>;
};


export type UserFavouritesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UserFavouriteWhereUniqueInput>;
};

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyCountryInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
};

export type UserCreateManyCountryInputEnvelope = {
  data?: Maybe<Array<UserCreateManyCountryInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserCreateNestedManyWithoutCountryInput = {
  create?: Maybe<Array<UserCreateWithoutCountryInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutCountryInput>>;
  createMany?: Maybe<UserCreateManyCountryInputEnvelope>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedOneWithoutCargoCodesInput = {
  create?: Maybe<UserCreateWithoutCargoCodesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCargoCodesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutClientCouponsUsedInput = {
  create?: Maybe<UserCreateWithoutClientCouponsUsedInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutClientCouponsUsedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutFavouritesInput = {
  create?: Maybe<UserCreateWithoutFavouritesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFavouritesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutFollowerdInput = {
  create?: Maybe<UserCreateWithoutFollowerdInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFollowerdInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutFollowersInput = {
  create?: Maybe<UserCreateWithoutFollowersInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFollowersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutOrderItemsInput = {
  create?: Maybe<UserCreateWithoutOrderItemsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutOrderItemsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutOrderVendorsInput = {
  create?: Maybe<UserCreateWithoutOrderVendorsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutOrderVendorsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutOrdersInput = {
  create?: Maybe<UserCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutOrdersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutProductsInput = {
  create?: Maybe<UserCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutProductsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutQuotationClientsInput = {
  create?: Maybe<UserCreateWithoutQuotationClientsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutQuotationClientsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutQuotationVendorsInput = {
  create?: Maybe<UserCreateWithoutQuotationVendorsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutQuotationVendorsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutRatesInput = {
  create?: Maybe<UserCreateWithoutRatesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRatesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutSalesOrdersInput = {
  create?: Maybe<UserCreateWithoutSalesOrdersInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSalesOrdersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutStocksInput = {
  create?: Maybe<UserCreateWithoutStocksInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutStocksInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutVendorCouponsUsedInput = {
  create?: Maybe<UserCreateWithoutVendorCouponsUsedInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutVendorCouponsUsedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutViewsInput = {
  create?: Maybe<UserCreateWithoutViewsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutViewsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutCargoCodesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutCargoCodesInput;
};

export type UserCreateOrConnectWithoutClientCouponsUsedInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutClientCouponsUsedInput;
};

export type UserCreateOrConnectWithoutCountryInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutCountryInput;
};

export type UserCreateOrConnectWithoutFavouritesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFavouritesInput;
};

export type UserCreateOrConnectWithoutFollowerdInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFollowerdInput;
};

export type UserCreateOrConnectWithoutFollowersInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFollowersInput;
};

export type UserCreateOrConnectWithoutOrderItemsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutOrderItemsInput;
};

export type UserCreateOrConnectWithoutOrderVendorsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutOrderVendorsInput;
};

export type UserCreateOrConnectWithoutOrdersInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutOrdersInput;
};

export type UserCreateOrConnectWithoutProductsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutProductsInput;
};

export type UserCreateOrConnectWithoutQuotationClientsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutQuotationClientsInput;
};

export type UserCreateOrConnectWithoutQuotationVendorsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutQuotationVendorsInput;
};

export type UserCreateOrConnectWithoutRatesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutRatesInput;
};

export type UserCreateOrConnectWithoutSalesOrdersInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutSalesOrdersInput;
};

export type UserCreateOrConnectWithoutStocksInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutStocksInput;
};

export type UserCreateOrConnectWithoutVendorCouponsUsedInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutVendorCouponsUsedInput;
};

export type UserCreateOrConnectWithoutViewsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutViewsInput;
};

export type UserCreateWithoutCargoCodesInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutClientCouponsUsedInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutCountryInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutFavouritesInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
};

export type UserCreateWithoutFollowerdInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutFollowersInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutOrderItemsInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutOrderVendorsInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutOrdersInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutProductsInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutQuotationClientsInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutQuotationVendorsInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutRatesInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSalesOrdersInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutStocksInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutVendorCouponsUsedInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  views?: Maybe<ViewCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutViewsInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified_at?: Maybe<Scalars['DateTime']>;
  password?: Maybe<Scalars['String']>;
  remember_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Int']>;
  super?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  brandName?: Maybe<Scalars['String']>;
  brandUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  adrs?: Maybe<Scalars['String']>;
  bnkAccntNm?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  bnkCntryId?: Maybe<Scalars['Int']>;
  bankName?: Maybe<Scalars['String']>;
  erpSystem?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  userCredit?: Maybe<Scalars['Float']>;
  fieldId?: Maybe<Scalars['Int']>;
  passport?: Maybe<Scalars['String']>;
  commercialTitle?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxAdminstration?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mersisNo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  minBill?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  contactLang?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  twitter_id?: Maybe<Scalars['String']>;
  legalInfoFile?: Maybe<Scalars['String']>;
  preferredCurrency?: Maybe<Scalars['String']>;
  signatureFile?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Int']>;
  theOrder?: Maybe<Scalars['Int']>;
  device_key?: Maybe<Scalars['String']>;
  teslimatAdresi?: Maybe<Scalars['String']>;
  teslimatPhone?: Maybe<Scalars['String']>;
  workPlaceAdrs?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tc?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Int']>;
  orderAssigned?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutVendorInput>;
  stocks?: Maybe<StockCreateNestedManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationCreateNestedManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationCreateNestedManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedCreateNestedManyWithoutVendorInput>;
  orders?: Maybe<OrderCreateNestedManyWithoutUserInput>;
  salesOrders?: Maybe<OrderCreateNestedManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorCreateNestedManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeCreateNestedManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationCreateNestedManyWithoutUserInput>;
  roles?: Maybe<UserToRoleCreateNestedManyWithoutUserInput>;
  rates?: Maybe<RateCreateNestedManyWithoutUserInput>;
  followers?: Maybe<UserFollowingCreateNestedManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingCreateNestedManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteCreateNestedManyWithoutUserInput>;
};

export type UserFavourite = {
  __typename?: 'UserFavourite';
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  productId: Scalars['Int'];
  user?: Maybe<User>;
  product: Product;
};

export type UserFavouriteCreateInput = {
  user?: Maybe<UserCreateNestedOneWithoutFavouritesInput>;
  product: ProductCreateNestedOneWithoutUserFavouritesInput;
};

export type UserFavouriteCreateManyProductInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserFavouriteCreateManyProductInputEnvelope = {
  data?: Maybe<Array<UserFavouriteCreateManyProductInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserFavouriteCreateManyUserInput = {
  id?: Maybe<Scalars['Int']>;
  productId: Scalars['Int'];
};

export type UserFavouriteCreateManyUserInputEnvelope = {
  data?: Maybe<Array<UserFavouriteCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserFavouriteCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<UserFavouriteCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<UserFavouriteCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<UserFavouriteCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<UserFavouriteWhereUniqueInput>>;
};

export type UserFavouriteCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<UserFavouriteCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<UserFavouriteCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<UserFavouriteCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<UserFavouriteWhereUniqueInput>>;
};

export type UserFavouriteCreateOrConnectWithoutProductInput = {
  where: UserFavouriteWhereUniqueInput;
  create: UserFavouriteCreateWithoutProductInput;
};

export type UserFavouriteCreateOrConnectWithoutUserInput = {
  where: UserFavouriteWhereUniqueInput;
  create: UserFavouriteCreateWithoutUserInput;
};

export type UserFavouriteCreateWithoutProductInput = {
  user?: Maybe<UserCreateNestedOneWithoutFavouritesInput>;
};

export type UserFavouriteCreateWithoutUserInput = {
  product: ProductCreateNestedOneWithoutUserFavouritesInput;
};

export type UserFavouriteListRelationFilter = {
  every?: Maybe<UserFavouriteWhereInput>;
  some?: Maybe<UserFavouriteWhereInput>;
  none?: Maybe<UserFavouriteWhereInput>;
};

export type UserFavouriteScalarWhereInput = {
  AND?: Maybe<Array<UserFavouriteScalarWhereInput>>;
  OR?: Maybe<Array<UserFavouriteScalarWhereInput>>;
  NOT?: Maybe<Array<UserFavouriteScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntNullableFilter>;
  productId?: Maybe<IntFilter>;
};

export type UserFavouriteUpdateManyMutationInput = {
  _: Scalars['String'];
};

export type UserFavouriteUpdateManyWithWhereWithoutProductInput = {
  where: UserFavouriteScalarWhereInput;
  data: UserFavouriteUpdateManyMutationInput;
};

export type UserFavouriteUpdateManyWithWhereWithoutUserInput = {
  where: UserFavouriteScalarWhereInput;
  data: UserFavouriteUpdateManyMutationInput;
};

export type UserFavouriteUpdateManyWithoutProductInput = {
  create?: Maybe<Array<UserFavouriteCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<UserFavouriteCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<UserFavouriteUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<UserFavouriteCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<UserFavouriteWhereUniqueInput>>;
  set?: Maybe<Array<UserFavouriteWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserFavouriteWhereUniqueInput>>;
  delete?: Maybe<Array<UserFavouriteWhereUniqueInput>>;
  update?: Maybe<Array<UserFavouriteUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<UserFavouriteUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<UserFavouriteScalarWhereInput>>;
};

export type UserFavouriteUpdateManyWithoutUserInput = {
  create?: Maybe<Array<UserFavouriteCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<UserFavouriteCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<UserFavouriteUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<UserFavouriteCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<UserFavouriteWhereUniqueInput>>;
  set?: Maybe<Array<UserFavouriteWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserFavouriteWhereUniqueInput>>;
  delete?: Maybe<Array<UserFavouriteWhereUniqueInput>>;
  update?: Maybe<Array<UserFavouriteUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<UserFavouriteUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<UserFavouriteScalarWhereInput>>;
};

export type UserFavouriteUpdateWithWhereUniqueWithoutProductInput = {
  where: UserFavouriteWhereUniqueInput;
  data: UserFavouriteUpdateWithoutProductInput;
};

export type UserFavouriteUpdateWithWhereUniqueWithoutUserInput = {
  where: UserFavouriteWhereUniqueInput;
  data: UserFavouriteUpdateWithoutUserInput;
};

export type UserFavouriteUpdateWithoutProductInput = {
  user?: Maybe<UserUpdateOneWithoutFavouritesInput>;
};

export type UserFavouriteUpdateWithoutUserInput = {
  product?: Maybe<ProductUpdateOneRequiredWithoutUserFavouritesInput>;
};

export type UserFavouriteUpsertWithWhereUniqueWithoutProductInput = {
  where: UserFavouriteWhereUniqueInput;
  update: UserFavouriteUpdateWithoutProductInput;
  create: UserFavouriteCreateWithoutProductInput;
};

export type UserFavouriteUpsertWithWhereUniqueWithoutUserInput = {
  where: UserFavouriteWhereUniqueInput;
  update: UserFavouriteUpdateWithoutUserInput;
  create: UserFavouriteCreateWithoutUserInput;
};

export type UserFavouriteWhereInput = {
  AND?: Maybe<Array<UserFavouriteWhereInput>>;
  OR?: Maybe<Array<UserFavouriteWhereInput>>;
  NOT?: Maybe<Array<UserFavouriteWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntNullableFilter>;
  productId?: Maybe<IntFilter>;
  user?: Maybe<UserWhereInput>;
  product?: Maybe<ProductWhereInput>;
};

export type UserFavouriteWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type UserFollowing = {
  __typename?: 'UserFollowing';
  id: Scalars['Int'];
  followerId: Scalars['Int'];
  followedId: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  follower: User;
  followed: User;
};

export type UserFollowingCreateInput = {
  followedId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  follower?: Maybe<UserCreateNestedOneWithoutFollowerdInput>;
  followed?: Maybe<UserCreateNestedOneWithoutFollowersInput>;
};

export type UserFollowingCreateManyFollowedInput = {
  id?: Maybe<Scalars['Int']>;
  followedId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type UserFollowingCreateManyFollowedInputEnvelope = {
  data?: Maybe<Array<UserFollowingCreateManyFollowedInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserFollowingCreateManyFollowerInput = {
  id?: Maybe<Scalars['Int']>;
  followedId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type UserFollowingCreateManyFollowerInputEnvelope = {
  data?: Maybe<Array<UserFollowingCreateManyFollowerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserFollowingCreateNestedManyWithoutFollowedInput = {
  create?: Maybe<Array<UserFollowingCreateWithoutFollowedInput>>;
  connectOrCreate?: Maybe<Array<UserFollowingCreateOrConnectWithoutFollowedInput>>;
  createMany?: Maybe<UserFollowingCreateManyFollowedInputEnvelope>;
  connect?: Maybe<Array<UserFollowingWhereUniqueInput>>;
};

export type UserFollowingCreateNestedManyWithoutFollowerInput = {
  create?: Maybe<Array<UserFollowingCreateWithoutFollowerInput>>;
  connectOrCreate?: Maybe<Array<UserFollowingCreateOrConnectWithoutFollowerInput>>;
  createMany?: Maybe<UserFollowingCreateManyFollowerInputEnvelope>;
  connect?: Maybe<Array<UserFollowingWhereUniqueInput>>;
};

export type UserFollowingCreateOrConnectWithoutFollowedInput = {
  where: UserFollowingWhereUniqueInput;
  create: UserFollowingCreateWithoutFollowedInput;
};

export type UserFollowingCreateOrConnectWithoutFollowerInput = {
  where: UserFollowingWhereUniqueInput;
  create: UserFollowingCreateWithoutFollowerInput;
};

export type UserFollowingCreateWithoutFollowedInput = {
  followedId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  follower?: Maybe<UserCreateNestedOneWithoutFollowerdInput>;
};

export type UserFollowingCreateWithoutFollowerInput = {
  followedId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  followed?: Maybe<UserCreateNestedOneWithoutFollowersInput>;
};

export type UserFollowingListRelationFilter = {
  every?: Maybe<UserFollowingWhereInput>;
  some?: Maybe<UserFollowingWhereInput>;
  none?: Maybe<UserFollowingWhereInput>;
};

export type UserFollowingScalarWhereInput = {
  AND?: Maybe<Array<UserFollowingScalarWhereInput>>;
  OR?: Maybe<Array<UserFollowingScalarWhereInput>>;
  NOT?: Maybe<Array<UserFollowingScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  followerId?: Maybe<IntFilter>;
  followedId?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type UserFollowingUpdateManyMutationInput = {
  followedId?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserFollowingUpdateManyWithWhereWithoutFollowedInput = {
  where: UserFollowingScalarWhereInput;
  data: UserFollowingUpdateManyMutationInput;
};

export type UserFollowingUpdateManyWithWhereWithoutFollowerInput = {
  where: UserFollowingScalarWhereInput;
  data: UserFollowingUpdateManyMutationInput;
};

export type UserFollowingUpdateManyWithoutFollowedInput = {
  create?: Maybe<Array<UserFollowingCreateWithoutFollowedInput>>;
  connectOrCreate?: Maybe<Array<UserFollowingCreateOrConnectWithoutFollowedInput>>;
  upsert?: Maybe<Array<UserFollowingUpsertWithWhereUniqueWithoutFollowedInput>>;
  createMany?: Maybe<UserFollowingCreateManyFollowedInputEnvelope>;
  connect?: Maybe<Array<UserFollowingWhereUniqueInput>>;
  set?: Maybe<Array<UserFollowingWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserFollowingWhereUniqueInput>>;
  delete?: Maybe<Array<UserFollowingWhereUniqueInput>>;
  update?: Maybe<Array<UserFollowingUpdateWithWhereUniqueWithoutFollowedInput>>;
  updateMany?: Maybe<Array<UserFollowingUpdateManyWithWhereWithoutFollowedInput>>;
  deleteMany?: Maybe<Array<UserFollowingScalarWhereInput>>;
};

export type UserFollowingUpdateManyWithoutFollowerInput = {
  create?: Maybe<Array<UserFollowingCreateWithoutFollowerInput>>;
  connectOrCreate?: Maybe<Array<UserFollowingCreateOrConnectWithoutFollowerInput>>;
  upsert?: Maybe<Array<UserFollowingUpsertWithWhereUniqueWithoutFollowerInput>>;
  createMany?: Maybe<UserFollowingCreateManyFollowerInputEnvelope>;
  connect?: Maybe<Array<UserFollowingWhereUniqueInput>>;
  set?: Maybe<Array<UserFollowingWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserFollowingWhereUniqueInput>>;
  delete?: Maybe<Array<UserFollowingWhereUniqueInput>>;
  update?: Maybe<Array<UserFollowingUpdateWithWhereUniqueWithoutFollowerInput>>;
  updateMany?: Maybe<Array<UserFollowingUpdateManyWithWhereWithoutFollowerInput>>;
  deleteMany?: Maybe<Array<UserFollowingScalarWhereInput>>;
};

export type UserFollowingUpdateWithWhereUniqueWithoutFollowedInput = {
  where: UserFollowingWhereUniqueInput;
  data: UserFollowingUpdateWithoutFollowedInput;
};

export type UserFollowingUpdateWithWhereUniqueWithoutFollowerInput = {
  where: UserFollowingWhereUniqueInput;
  data: UserFollowingUpdateWithoutFollowerInput;
};

export type UserFollowingUpdateWithoutFollowedInput = {
  followedId?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  follower?: Maybe<UserUpdateOneRequiredWithoutFollowerdInput>;
};

export type UserFollowingUpdateWithoutFollowerInput = {
  followedId?: Maybe<IntFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  followed?: Maybe<UserUpdateOneRequiredWithoutFollowersInput>;
};

export type UserFollowingUpsertWithWhereUniqueWithoutFollowedInput = {
  where: UserFollowingWhereUniqueInput;
  update: UserFollowingUpdateWithoutFollowedInput;
  create: UserFollowingCreateWithoutFollowedInput;
};

export type UserFollowingUpsertWithWhereUniqueWithoutFollowerInput = {
  where: UserFollowingWhereUniqueInput;
  update: UserFollowingUpdateWithoutFollowerInput;
  create: UserFollowingCreateWithoutFollowerInput;
};

export type UserFollowingWhereInput = {
  AND?: Maybe<Array<UserFollowingWhereInput>>;
  OR?: Maybe<Array<UserFollowingWhereInput>>;
  NOT?: Maybe<Array<UserFollowingWhereInput>>;
  id?: Maybe<IntFilter>;
  followerId?: Maybe<IntFilter>;
  followedId?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  follower?: Maybe<UserWhereInput>;
  followed?: Maybe<UserWhereInput>;
};

export type UserFollowingWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  email_verified_at?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  remember_token?: Maybe<SortOrder>;
  created_at?: Maybe<SortOrder>;
  updated_at?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  activationCode?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  groupId?: Maybe<SortOrder>;
  isDeleted?: Maybe<SortOrder>;
  super?: Maybe<SortOrder>;
  countryId?: Maybe<SortOrder>;
  cityId?: Maybe<SortOrder>;
  brandName?: Maybe<SortOrder>;
  brandUsername?: Maybe<SortOrder>;
  website?: Maybe<SortOrder>;
  adrs?: Maybe<SortOrder>;
  bnkAccntNm?: Maybe<SortOrder>;
  iban?: Maybe<SortOrder>;
  swiftCode?: Maybe<SortOrder>;
  bnkCntryId?: Maybe<SortOrder>;
  bankName?: Maybe<SortOrder>;
  erpSystem?: Maybe<SortOrder>;
  photo?: Maybe<SortOrder>;
  userCredit?: Maybe<SortOrder>;
  fieldId?: Maybe<SortOrder>;
  passport?: Maybe<SortOrder>;
  commercialTitle?: Maybe<SortOrder>;
  taxNumber?: Maybe<SortOrder>;
  taxAdminstration?: Maybe<SortOrder>;
  postcode?: Maybe<SortOrder>;
  mersisNo?: Maybe<SortOrder>;
  logo?: Maybe<SortOrder>;
  minBill?: Maybe<SortOrder>;
  taxRate?: Maybe<SortOrder>;
  isFeatured?: Maybe<SortOrder>;
  facebook?: Maybe<SortOrder>;
  twitter?: Maybe<SortOrder>;
  instagram?: Maybe<SortOrder>;
  youtube?: Maybe<SortOrder>;
  contactLang?: Maybe<SortOrder>;
  facebook_id?: Maybe<SortOrder>;
  google_id?: Maybe<SortOrder>;
  twitter_id?: Maybe<SortOrder>;
  legalInfoFile?: Maybe<SortOrder>;
  preferredCurrency?: Maybe<SortOrder>;
  signatureFile?: Maybe<SortOrder>;
  countryCode?: Maybe<SortOrder>;
  isPublished?: Maybe<SortOrder>;
  theOrder?: Maybe<SortOrder>;
  device_key?: Maybe<SortOrder>;
  teslimatAdresi?: Maybe<SortOrder>;
  teslimatPhone?: Maybe<SortOrder>;
  workPlaceAdrs?: Maybe<SortOrder>;
  stripeId?: Maybe<SortOrder>;
  tc?: Maybe<SortOrder>;
  firebaseId?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  firstLogin?: Maybe<SortOrder>;
  orderAssigned?: Maybe<SortOrder>;
};

export type UserPriceVariation = {
  __typename?: 'UserPriceVariation';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  from: Scalars['Int'];
  to: Scalars['Int'];
  discount: Scalars['Float'];
  user: User;
};

export type UserPriceVariationCreateManyUserInput = {
  id?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Float']>;
};

export type UserPriceVariationCreateManyUserInputEnvelope = {
  data?: Maybe<Array<UserPriceVariationCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserPriceVariationCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<UserPriceVariationCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<UserPriceVariationCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<UserPriceVariationCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<UserPriceVariationWhereUniqueInput>>;
};

export type UserPriceVariationCreateOrConnectWithoutUserInput = {
  where: UserPriceVariationWhereUniqueInput;
  create: UserPriceVariationCreateWithoutUserInput;
};

export type UserPriceVariationCreateWithoutUserInput = {
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['Float']>;
};

export type UserPriceVariationListRelationFilter = {
  every?: Maybe<UserPriceVariationWhereInput>;
  some?: Maybe<UserPriceVariationWhereInput>;
  none?: Maybe<UserPriceVariationWhereInput>;
};

export type UserPriceVariationScalarWhereInput = {
  AND?: Maybe<Array<UserPriceVariationScalarWhereInput>>;
  OR?: Maybe<Array<UserPriceVariationScalarWhereInput>>;
  NOT?: Maybe<Array<UserPriceVariationScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
  from?: Maybe<IntFilter>;
  to?: Maybe<IntFilter>;
  discount?: Maybe<FloatFilter>;
};

export type UserPriceVariationUpdateManyMutationInput = {
  from?: Maybe<IntFieldUpdateOperationsInput>;
  to?: Maybe<IntFieldUpdateOperationsInput>;
  discount?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type UserPriceVariationUpdateManyWithWhereWithoutUserInput = {
  where: UserPriceVariationScalarWhereInput;
  data: UserPriceVariationUpdateManyMutationInput;
};

export type UserPriceVariationUpdateManyWithoutUserInput = {
  create?: Maybe<Array<UserPriceVariationCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<UserPriceVariationCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<UserPriceVariationUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<UserPriceVariationCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<UserPriceVariationWhereUniqueInput>>;
  set?: Maybe<Array<UserPriceVariationWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserPriceVariationWhereUniqueInput>>;
  delete?: Maybe<Array<UserPriceVariationWhereUniqueInput>>;
  update?: Maybe<Array<UserPriceVariationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<UserPriceVariationUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<UserPriceVariationScalarWhereInput>>;
};

export type UserPriceVariationUpdateWithWhereUniqueWithoutUserInput = {
  where: UserPriceVariationWhereUniqueInput;
  data: UserPriceVariationUpdateWithoutUserInput;
};

export type UserPriceVariationUpdateWithoutUserInput = {
  from?: Maybe<IntFieldUpdateOperationsInput>;
  to?: Maybe<IntFieldUpdateOperationsInput>;
  discount?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type UserPriceVariationUpsertWithWhereUniqueWithoutUserInput = {
  where: UserPriceVariationWhereUniqueInput;
  update: UserPriceVariationUpdateWithoutUserInput;
  create: UserPriceVariationCreateWithoutUserInput;
};

export type UserPriceVariationWhereInput = {
  AND?: Maybe<Array<UserPriceVariationWhereInput>>;
  OR?: Maybe<Array<UserPriceVariationWhereInput>>;
  NOT?: Maybe<Array<UserPriceVariationWhereInput>>;
  id?: Maybe<IntFilter>;
  userId?: Maybe<IntFilter>;
  from?: Maybe<IntFilter>;
  to?: Maybe<IntFilter>;
  discount?: Maybe<FloatFilter>;
  user?: Maybe<UserWhereInput>;
};

export type UserPriceVariationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  email_verified_at?: Maybe<DateTimeNullableFilter>;
  password?: Maybe<StringNullableFilter>;
  remember_token?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  firstName?: Maybe<StringNullableFilter>;
  lastName?: Maybe<StringNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  activationCode?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
  groupId?: Maybe<IntFilter>;
  isDeleted?: Maybe<IntFilter>;
  super?: Maybe<IntFilter>;
  countryId?: Maybe<IntNullableFilter>;
  cityId?: Maybe<IntFilter>;
  brandName?: Maybe<StringNullableFilter>;
  brandUsername?: Maybe<StringNullableFilter>;
  website?: Maybe<StringNullableFilter>;
  adrs?: Maybe<StringNullableFilter>;
  bnkAccntNm?: Maybe<StringNullableFilter>;
  iban?: Maybe<StringNullableFilter>;
  swiftCode?: Maybe<StringNullableFilter>;
  bnkCntryId?: Maybe<IntFilter>;
  bankName?: Maybe<StringNullableFilter>;
  erpSystem?: Maybe<StringNullableFilter>;
  photo?: Maybe<StringNullableFilter>;
  userCredit?: Maybe<FloatFilter>;
  fieldId?: Maybe<IntFilter>;
  passport?: Maybe<StringNullableFilter>;
  commercialTitle?: Maybe<StringNullableFilter>;
  taxNumber?: Maybe<StringNullableFilter>;
  taxAdminstration?: Maybe<StringNullableFilter>;
  postcode?: Maybe<StringNullableFilter>;
  mersisNo?: Maybe<StringNullableFilter>;
  logo?: Maybe<StringNullableFilter>;
  minBill?: Maybe<FloatFilter>;
  taxRate?: Maybe<IntFilter>;
  isFeatured?: Maybe<IntFilter>;
  facebook?: Maybe<StringNullableFilter>;
  twitter?: Maybe<StringNullableFilter>;
  instagram?: Maybe<StringNullableFilter>;
  youtube?: Maybe<StringNullableFilter>;
  contactLang?: Maybe<StringFilter>;
  facebook_id?: Maybe<StringNullableFilter>;
  google_id?: Maybe<StringNullableFilter>;
  twitter_id?: Maybe<StringNullableFilter>;
  legalInfoFile?: Maybe<StringNullableFilter>;
  preferredCurrency?: Maybe<StringFilter>;
  signatureFile?: Maybe<StringNullableFilter>;
  countryCode?: Maybe<StringNullableFilter>;
  isPublished?: Maybe<IntFilter>;
  theOrder?: Maybe<IntNullableFilter>;
  device_key?: Maybe<StringNullableFilter>;
  teslimatAdresi?: Maybe<StringNullableFilter>;
  teslimatPhone?: Maybe<StringNullableFilter>;
  workPlaceAdrs?: Maybe<StringNullableFilter>;
  stripeId?: Maybe<StringNullableFilter>;
  tc?: Maybe<StringNullableFilter>;
  firebaseId?: Maybe<StringNullableFilter>;
  slug?: Maybe<StringNullableFilter>;
  firstLogin?: Maybe<IntFilter>;
  orderAssigned?: Maybe<DateTimeFilter>;
};

export type UserToRole = {
  __typename?: 'UserToRole';
  userId: Scalars['Int'];
  roleId: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  user: User;
  role: Role;
};

export type UserToRoleCreateManyUserInput = {
  roleId: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type UserToRoleCreateManyUserInputEnvelope = {
  data?: Maybe<Array<UserToRoleCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserToRoleCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<UserToRoleCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<UserToRoleCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<UserToRoleCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<UserToRoleWhereUniqueInput>>;
};

export type UserToRoleCreateOrConnectWithoutUserInput = {
  where: UserToRoleWhereUniqueInput;
  create: UserToRoleCreateWithoutUserInput;
};

export type UserToRoleCreateWithoutUserInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  role: RoleCreateNestedOneWithoutUserToRolesInput;
};

export type UserToRoleListRelationFilter = {
  every?: Maybe<UserToRoleWhereInput>;
  some?: Maybe<UserToRoleWhereInput>;
  none?: Maybe<UserToRoleWhereInput>;
};

export type UserToRoleScalarWhereInput = {
  AND?: Maybe<Array<UserToRoleScalarWhereInput>>;
  OR?: Maybe<Array<UserToRoleScalarWhereInput>>;
  NOT?: Maybe<Array<UserToRoleScalarWhereInput>>;
  userId?: Maybe<IntFilter>;
  roleId?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
};

export type UserToRoleUpdateManyMutationInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserToRoleUpdateManyWithWhereWithoutUserInput = {
  where: UserToRoleScalarWhereInput;
  data: UserToRoleUpdateManyMutationInput;
};

export type UserToRoleUpdateManyWithoutUserInput = {
  create?: Maybe<Array<UserToRoleCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<UserToRoleCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<UserToRoleUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<UserToRoleCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<UserToRoleWhereUniqueInput>>;
  set?: Maybe<Array<UserToRoleWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserToRoleWhereUniqueInput>>;
  delete?: Maybe<Array<UserToRoleWhereUniqueInput>>;
  update?: Maybe<Array<UserToRoleUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<UserToRoleUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<UserToRoleScalarWhereInput>>;
};

export type UserToRoleUpdateWithWhereUniqueWithoutUserInput = {
  where: UserToRoleWhereUniqueInput;
  data: UserToRoleUpdateWithoutUserInput;
};

export type UserToRoleUpdateWithoutUserInput = {
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  role?: Maybe<RoleUpdateOneRequiredWithoutUserToRolesInput>;
};

export type UserToRoleUpsertWithWhereUniqueWithoutUserInput = {
  where: UserToRoleWhereUniqueInput;
  update: UserToRoleUpdateWithoutUserInput;
  create: UserToRoleCreateWithoutUserInput;
};

export type UserToRoleUserIdRoleIdCompoundUniqueInput = {
  userId: Scalars['Int'];
  roleId: Scalars['Int'];
};

export type UserToRoleWhereInput = {
  AND?: Maybe<Array<UserToRoleWhereInput>>;
  OR?: Maybe<Array<UserToRoleWhereInput>>;
  NOT?: Maybe<Array<UserToRoleWhereInput>>;
  userId?: Maybe<IntFilter>;
  roleId?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  user?: Maybe<UserWhereInput>;
  role?: Maybe<RoleWhereInput>;
};

export type UserToRoleWhereUniqueInput = {
  userId_roleId?: Maybe<UserToRoleUserIdRoleIdCompoundUniqueInput>;
};

export type UserUpdateInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutCountryInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserUpdateManyWithoutCountryInput = {
  create?: Maybe<Array<UserCreateWithoutCountryInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutCountryInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutCountryInput>>;
  createMany?: Maybe<UserCreateManyCountryInputEnvelope>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutCountryInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutCountryInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateOneRequiredWithoutCargoCodesInput = {
  create?: Maybe<UserCreateWithoutCargoCodesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCargoCodesInput>;
  upsert?: Maybe<UserUpsertWithoutCargoCodesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutCargoCodesInput>;
};

export type UserUpdateOneRequiredWithoutFollowerdInput = {
  create?: Maybe<UserCreateWithoutFollowerdInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFollowerdInput>;
  upsert?: Maybe<UserUpsertWithoutFollowerdInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutFollowerdInput>;
};

export type UserUpdateOneRequiredWithoutFollowersInput = {
  create?: Maybe<UserCreateWithoutFollowersInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFollowersInput>;
  upsert?: Maybe<UserUpsertWithoutFollowersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutFollowersInput>;
};

export type UserUpdateOneRequiredWithoutOrderItemsInput = {
  create?: Maybe<UserCreateWithoutOrderItemsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutOrderItemsInput>;
  upsert?: Maybe<UserUpsertWithoutOrderItemsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutOrderItemsInput>;
};

export type UserUpdateOneRequiredWithoutOrderVendorsInput = {
  create?: Maybe<UserCreateWithoutOrderVendorsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutOrderVendorsInput>;
  upsert?: Maybe<UserUpsertWithoutOrderVendorsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutOrderVendorsInput>;
};

export type UserUpdateOneRequiredWithoutOrdersInput = {
  create?: Maybe<UserCreateWithoutOrdersInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutOrdersInput>;
  upsert?: Maybe<UserUpsertWithoutOrdersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutOrdersInput>;
};

export type UserUpdateOneRequiredWithoutViewsInput = {
  create?: Maybe<UserCreateWithoutViewsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutViewsInput>;
  upsert?: Maybe<UserUpsertWithoutViewsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutViewsInput>;
};

export type UserUpdateOneWithoutClientCouponsUsedInput = {
  create?: Maybe<UserCreateWithoutClientCouponsUsedInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutClientCouponsUsedInput>;
  upsert?: Maybe<UserUpsertWithoutClientCouponsUsedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutClientCouponsUsedInput>;
};

export type UserUpdateOneWithoutFavouritesInput = {
  create?: Maybe<UserCreateWithoutFavouritesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFavouritesInput>;
  upsert?: Maybe<UserUpsertWithoutFavouritesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutFavouritesInput>;
};

export type UserUpdateOneWithoutProductsInput = {
  create?: Maybe<UserCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutProductsInput>;
  upsert?: Maybe<UserUpsertWithoutProductsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutProductsInput>;
};

export type UserUpdateOneWithoutQuotationClientsInput = {
  create?: Maybe<UserCreateWithoutQuotationClientsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutQuotationClientsInput>;
  upsert?: Maybe<UserUpsertWithoutQuotationClientsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutQuotationClientsInput>;
};

export type UserUpdateOneWithoutQuotationVendorsInput = {
  create?: Maybe<UserCreateWithoutQuotationVendorsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutQuotationVendorsInput>;
  upsert?: Maybe<UserUpsertWithoutQuotationVendorsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutQuotationVendorsInput>;
};

export type UserUpdateOneWithoutSalesOrdersInput = {
  create?: Maybe<UserCreateWithoutSalesOrdersInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSalesOrdersInput>;
  upsert?: Maybe<UserUpsertWithoutSalesOrdersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutSalesOrdersInput>;
};

export type UserUpdateOneWithoutStocksInput = {
  create?: Maybe<UserCreateWithoutStocksInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutStocksInput>;
  upsert?: Maybe<UserUpsertWithoutStocksInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutStocksInput>;
};

export type UserUpdateOneWithoutVendorCouponsUsedInput = {
  create?: Maybe<UserCreateWithoutVendorCouponsUsedInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutVendorCouponsUsedInput>;
  upsert?: Maybe<UserUpsertWithoutVendorCouponsUsedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutVendorCouponsUsedInput>;
};

export type UserUpdateWithWhereUniqueWithoutCountryInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutCountryInput;
};

export type UserUpdateWithoutCargoCodesInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutClientCouponsUsedInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutCountryInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutFavouritesInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
};

export type UserUpdateWithoutFollowerdInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutFollowersInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutOrderItemsInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutOrderVendorsInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutOrdersInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutProductsInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutQuotationClientsInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutQuotationVendorsInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutSalesOrdersInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutStocksInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutVendorCouponsUsedInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  views?: Maybe<ViewUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutViewsInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email_verified_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  remember_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  activationCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<IntFieldUpdateOperationsInput>;
  groupId?: Maybe<IntFieldUpdateOperationsInput>;
  isDeleted?: Maybe<IntFieldUpdateOperationsInput>;
  super?: Maybe<IntFieldUpdateOperationsInput>;
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  brandName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brandUsername?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  adrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkAccntNm?: Maybe<NullableStringFieldUpdateOperationsInput>;
  iban?: Maybe<NullableStringFieldUpdateOperationsInput>;
  swiftCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bnkCntryId?: Maybe<IntFieldUpdateOperationsInput>;
  bankName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  erpSystem?: Maybe<NullableStringFieldUpdateOperationsInput>;
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userCredit?: Maybe<FloatFieldUpdateOperationsInput>;
  fieldId?: Maybe<IntFieldUpdateOperationsInput>;
  passport?: Maybe<NullableStringFieldUpdateOperationsInput>;
  commercialTitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  taxAdminstration?: Maybe<NullableStringFieldUpdateOperationsInput>;
  postcode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mersisNo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  minBill?: Maybe<FloatFieldUpdateOperationsInput>;
  taxRate?: Maybe<IntFieldUpdateOperationsInput>;
  isFeatured?: Maybe<IntFieldUpdateOperationsInput>;
  facebook?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: Maybe<NullableStringFieldUpdateOperationsInput>;
  youtube?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contactLang?: Maybe<StringFieldUpdateOperationsInput>;
  facebook_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  google_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  twitter_id?: Maybe<NullableStringFieldUpdateOperationsInput>;
  legalInfoFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  preferredCurrency?: Maybe<StringFieldUpdateOperationsInput>;
  signatureFile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  countryCode?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isPublished?: Maybe<IntFieldUpdateOperationsInput>;
  theOrder?: Maybe<NullableIntFieldUpdateOperationsInput>;
  device_key?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatAdresi?: Maybe<NullableStringFieldUpdateOperationsInput>;
  teslimatPhone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  workPlaceAdrs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tc?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firebaseId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  slug?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstLogin?: Maybe<IntFieldUpdateOperationsInput>;
  orderAssigned?: Maybe<DateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutVendorInput>;
  stocks?: Maybe<StockUpdateManyWithoutVendorInput>;
  quotationClients?: Maybe<QuotationUpdateManyWithoutClientInput>;
  quotationVendors?: Maybe<QuotationUpdateManyWithoutVendorInput>;
  clientCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutClientInput>;
  vendorCouponsUsed?: Maybe<CouponsUsedUpdateManyWithoutVendorInput>;
  orders?: Maybe<OrderUpdateManyWithoutUserInput>;
  salesOrders?: Maybe<OrderUpdateManyWithoutSaleUserInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutVendorInput>;
  orderVendors?: Maybe<OrderVendorUpdateManyWithoutVendorInput>;
  cargoCodes?: Maybe<CargoCodeUpdateManyWithoutUserInput>;
  userPriceVariations?: Maybe<UserPriceVariationUpdateManyWithoutUserInput>;
  roles?: Maybe<UserToRoleUpdateManyWithoutUserInput>;
  rates?: Maybe<RateUpdateManyWithoutUserInput>;
  followers?: Maybe<UserFollowingUpdateManyWithoutFollowedInput>;
  followerd?: Maybe<UserFollowingUpdateManyWithoutFollowerInput>;
  favourites?: Maybe<UserFavouriteUpdateManyWithoutUserInput>;
};

export type UserUpsertWithWhereUniqueWithoutCountryInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutCountryInput;
  create: UserCreateWithoutCountryInput;
};

export type UserUpsertWithoutCargoCodesInput = {
  update: UserUpdateWithoutCargoCodesInput;
  create: UserCreateWithoutCargoCodesInput;
};

export type UserUpsertWithoutClientCouponsUsedInput = {
  update: UserUpdateWithoutClientCouponsUsedInput;
  create: UserCreateWithoutClientCouponsUsedInput;
};

export type UserUpsertWithoutFavouritesInput = {
  update: UserUpdateWithoutFavouritesInput;
  create: UserCreateWithoutFavouritesInput;
};

export type UserUpsertWithoutFollowerdInput = {
  update: UserUpdateWithoutFollowerdInput;
  create: UserCreateWithoutFollowerdInput;
};

export type UserUpsertWithoutFollowersInput = {
  update: UserUpdateWithoutFollowersInput;
  create: UserCreateWithoutFollowersInput;
};

export type UserUpsertWithoutOrderItemsInput = {
  update: UserUpdateWithoutOrderItemsInput;
  create: UserCreateWithoutOrderItemsInput;
};

export type UserUpsertWithoutOrderVendorsInput = {
  update: UserUpdateWithoutOrderVendorsInput;
  create: UserCreateWithoutOrderVendorsInput;
};

export type UserUpsertWithoutOrdersInput = {
  update: UserUpdateWithoutOrdersInput;
  create: UserCreateWithoutOrdersInput;
};

export type UserUpsertWithoutProductsInput = {
  update: UserUpdateWithoutProductsInput;
  create: UserCreateWithoutProductsInput;
};

export type UserUpsertWithoutQuotationClientsInput = {
  update: UserUpdateWithoutQuotationClientsInput;
  create: UserCreateWithoutQuotationClientsInput;
};

export type UserUpsertWithoutQuotationVendorsInput = {
  update: UserUpdateWithoutQuotationVendorsInput;
  create: UserCreateWithoutQuotationVendorsInput;
};

export type UserUpsertWithoutSalesOrdersInput = {
  update: UserUpdateWithoutSalesOrdersInput;
  create: UserCreateWithoutSalesOrdersInput;
};

export type UserUpsertWithoutStocksInput = {
  update: UserUpdateWithoutStocksInput;
  create: UserCreateWithoutStocksInput;
};

export type UserUpsertWithoutVendorCouponsUsedInput = {
  update: UserUpdateWithoutVendorCouponsUsedInput;
  create: UserCreateWithoutVendorCouponsUsedInput;
};

export type UserUpsertWithoutViewsInput = {
  update: UserUpdateWithoutViewsInput;
  create: UserCreateWithoutViewsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  email_verified_at?: Maybe<DateTimeNullableFilter>;
  password?: Maybe<StringNullableFilter>;
  remember_token?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  firstName?: Maybe<StringNullableFilter>;
  lastName?: Maybe<StringNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  activationCode?: Maybe<StringNullableFilter>;
  status?: Maybe<IntFilter>;
  groupId?: Maybe<IntFilter>;
  isDeleted?: Maybe<IntFilter>;
  super?: Maybe<IntFilter>;
  countryId?: Maybe<IntNullableFilter>;
  cityId?: Maybe<IntFilter>;
  brandName?: Maybe<StringNullableFilter>;
  brandUsername?: Maybe<StringNullableFilter>;
  website?: Maybe<StringNullableFilter>;
  adrs?: Maybe<StringNullableFilter>;
  bnkAccntNm?: Maybe<StringNullableFilter>;
  iban?: Maybe<StringNullableFilter>;
  swiftCode?: Maybe<StringNullableFilter>;
  bnkCntryId?: Maybe<IntFilter>;
  bankName?: Maybe<StringNullableFilter>;
  erpSystem?: Maybe<StringNullableFilter>;
  photo?: Maybe<StringNullableFilter>;
  userCredit?: Maybe<FloatFilter>;
  fieldId?: Maybe<IntFilter>;
  passport?: Maybe<StringNullableFilter>;
  commercialTitle?: Maybe<StringNullableFilter>;
  taxNumber?: Maybe<StringNullableFilter>;
  taxAdminstration?: Maybe<StringNullableFilter>;
  postcode?: Maybe<StringNullableFilter>;
  mersisNo?: Maybe<StringNullableFilter>;
  logo?: Maybe<StringNullableFilter>;
  minBill?: Maybe<FloatFilter>;
  taxRate?: Maybe<IntFilter>;
  isFeatured?: Maybe<IntFilter>;
  facebook?: Maybe<StringNullableFilter>;
  twitter?: Maybe<StringNullableFilter>;
  instagram?: Maybe<StringNullableFilter>;
  youtube?: Maybe<StringNullableFilter>;
  contactLang?: Maybe<StringFilter>;
  facebook_id?: Maybe<StringNullableFilter>;
  google_id?: Maybe<StringNullableFilter>;
  twitter_id?: Maybe<StringNullableFilter>;
  legalInfoFile?: Maybe<StringNullableFilter>;
  preferredCurrency?: Maybe<StringFilter>;
  signatureFile?: Maybe<StringNullableFilter>;
  countryCode?: Maybe<StringNullableFilter>;
  isPublished?: Maybe<IntFilter>;
  theOrder?: Maybe<IntNullableFilter>;
  device_key?: Maybe<StringNullableFilter>;
  teslimatAdresi?: Maybe<StringNullableFilter>;
  teslimatPhone?: Maybe<StringNullableFilter>;
  workPlaceAdrs?: Maybe<StringNullableFilter>;
  stripeId?: Maybe<StringNullableFilter>;
  tc?: Maybe<StringNullableFilter>;
  firebaseId?: Maybe<StringNullableFilter>;
  slug?: Maybe<StringNullableFilter>;
  firstLogin?: Maybe<IntFilter>;
  orderAssigned?: Maybe<DateTimeFilter>;
  country?: Maybe<CountryWhereInput>;
  products?: Maybe<ProductListRelationFilter>;
  stocks?: Maybe<StockListRelationFilter>;
  quotationClients?: Maybe<QuotationListRelationFilter>;
  quotationVendors?: Maybe<QuotationListRelationFilter>;
  clientCouponsUsed?: Maybe<CouponsUsedListRelationFilter>;
  vendorCouponsUsed?: Maybe<CouponsUsedListRelationFilter>;
  orders?: Maybe<OrderListRelationFilter>;
  salesOrders?: Maybe<OrderListRelationFilter>;
  orderItems?: Maybe<OrderItemListRelationFilter>;
  orderVendors?: Maybe<OrderVendorListRelationFilter>;
  cargoCodes?: Maybe<CargoCodeListRelationFilter>;
  userPriceVariations?: Maybe<UserPriceVariationListRelationFilter>;
  roles?: Maybe<UserToRoleListRelationFilter>;
  views?: Maybe<ViewListRelationFilter>;
  rates?: Maybe<RateListRelationFilter>;
  followers?: Maybe<UserFollowingListRelationFilter>;
  followerd?: Maybe<UserFollowingListRelationFilter>;
  favourites?: Maybe<UserFavouriteListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type View = {
  __typename?: 'View';
  id: Scalars['Int'];
  elementId: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  countryCode?: Maybe<Scalars['String']>;
  user: User;
  country?: Maybe<Country>;
};

export type ViewCreateManyCountryInput = {
  id?: Maybe<Scalars['Int']>;
  elementId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ViewCreateManyCountryInputEnvelope = {
  data?: Maybe<Array<ViewCreateManyCountryInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ViewCreateManyUserInput = {
  id?: Maybe<Scalars['Int']>;
  elementId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  countryCode?: Maybe<Scalars['String']>;
};

export type ViewCreateManyUserInputEnvelope = {
  data?: Maybe<Array<ViewCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ViewCreateNestedManyWithoutCountryInput = {
  create?: Maybe<Array<ViewCreateWithoutCountryInput>>;
  connectOrCreate?: Maybe<Array<ViewCreateOrConnectWithoutCountryInput>>;
  createMany?: Maybe<ViewCreateManyCountryInputEnvelope>;
  connect?: Maybe<Array<ViewWhereUniqueInput>>;
};

export type ViewCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<ViewCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<ViewCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<ViewCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<ViewWhereUniqueInput>>;
};

export type ViewCreateOrConnectWithoutCountryInput = {
  where: ViewWhereUniqueInput;
  create: ViewCreateWithoutCountryInput;
};

export type ViewCreateOrConnectWithoutUserInput = {
  where: ViewWhereUniqueInput;
  create: ViewCreateWithoutUserInput;
};

export type ViewCreateWithoutCountryInput = {
  elementId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserCreateNestedOneWithoutViewsInput>;
};

export type ViewCreateWithoutUserInput = {
  elementId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  country?: Maybe<CountryCreateNestedOneWithoutViewsInput>;
};

export type ViewListRelationFilter = {
  every?: Maybe<ViewWhereInput>;
  some?: Maybe<ViewWhereInput>;
  none?: Maybe<ViewWhereInput>;
};

export type ViewScalarWhereInput = {
  AND?: Maybe<Array<ViewScalarWhereInput>>;
  OR?: Maybe<Array<ViewScalarWhereInput>>;
  NOT?: Maybe<Array<ViewScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  elementId?: Maybe<IntFilter>;
  type?: Maybe<StringNullableFilter>;
  userId?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  countryCode?: Maybe<StringNullableFilter>;
};

export type ViewUpdateManyMutationInput = {
  elementId?: Maybe<IntFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ViewUpdateManyWithWhereWithoutCountryInput = {
  where: ViewScalarWhereInput;
  data: ViewUpdateManyMutationInput;
};

export type ViewUpdateManyWithWhereWithoutUserInput = {
  where: ViewScalarWhereInput;
  data: ViewUpdateManyMutationInput;
};

export type ViewUpdateManyWithoutCountryInput = {
  create?: Maybe<Array<ViewCreateWithoutCountryInput>>;
  connectOrCreate?: Maybe<Array<ViewCreateOrConnectWithoutCountryInput>>;
  upsert?: Maybe<Array<ViewUpsertWithWhereUniqueWithoutCountryInput>>;
  createMany?: Maybe<ViewCreateManyCountryInputEnvelope>;
  connect?: Maybe<Array<ViewWhereUniqueInput>>;
  set?: Maybe<Array<ViewWhereUniqueInput>>;
  disconnect?: Maybe<Array<ViewWhereUniqueInput>>;
  delete?: Maybe<Array<ViewWhereUniqueInput>>;
  update?: Maybe<Array<ViewUpdateWithWhereUniqueWithoutCountryInput>>;
  updateMany?: Maybe<Array<ViewUpdateManyWithWhereWithoutCountryInput>>;
  deleteMany?: Maybe<Array<ViewScalarWhereInput>>;
};

export type ViewUpdateManyWithoutUserInput = {
  create?: Maybe<Array<ViewCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<ViewCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<ViewUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<ViewCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<ViewWhereUniqueInput>>;
  set?: Maybe<Array<ViewWhereUniqueInput>>;
  disconnect?: Maybe<Array<ViewWhereUniqueInput>>;
  delete?: Maybe<Array<ViewWhereUniqueInput>>;
  update?: Maybe<Array<ViewUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<ViewUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<ViewScalarWhereInput>>;
};

export type ViewUpdateWithWhereUniqueWithoutCountryInput = {
  where: ViewWhereUniqueInput;
  data: ViewUpdateWithoutCountryInput;
};

export type ViewUpdateWithWhereUniqueWithoutUserInput = {
  where: ViewWhereUniqueInput;
  data: ViewUpdateWithoutUserInput;
};

export type ViewUpdateWithoutCountryInput = {
  elementId?: Maybe<IntFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutViewsInput>;
};

export type ViewUpdateWithoutUserInput = {
  elementId?: Maybe<IntFieldUpdateOperationsInput>;
  type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  country?: Maybe<CountryUpdateOneWithoutViewsInput>;
};

export type ViewUpsertWithWhereUniqueWithoutCountryInput = {
  where: ViewWhereUniqueInput;
  update: ViewUpdateWithoutCountryInput;
  create: ViewCreateWithoutCountryInput;
};

export type ViewUpsertWithWhereUniqueWithoutUserInput = {
  where: ViewWhereUniqueInput;
  update: ViewUpdateWithoutUserInput;
  create: ViewCreateWithoutUserInput;
};

export type ViewWhereInput = {
  AND?: Maybe<Array<ViewWhereInput>>;
  OR?: Maybe<Array<ViewWhereInput>>;
  NOT?: Maybe<Array<ViewWhereInput>>;
  id?: Maybe<IntFilter>;
  elementId?: Maybe<IntFilter>;
  type?: Maybe<StringNullableFilter>;
  userId?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeNullableFilter>;
  updated_at?: Maybe<DateTimeNullableFilter>;
  countryCode?: Maybe<StringNullableFilter>;
  user?: Maybe<UserWhereInput>;
  country?: Maybe<CountryWhereInput>;
};

export type ViewWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type GetVendorsByCategoryQueryVariables = Exact<{
  categoriesIds?: Maybe<IntFilter>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type GetVendorsByCategoryQuery = { __typename?: 'Query', rows?: Maybe<Array<Maybe<{ __typename?: 'User', id: number, photo?: Maybe<string>, logo?: Maybe<string>, brandName?: Maybe<string>, minBill: number, productsCount?: Maybe<number>, rate?: Maybe<number> }>>> };

export type StocksFragmentFragment = { __typename?: 'Stock', id: number, price: number, saleEnd?: Maybe<any>, quantity: number, elment_trans: Array<{ __typename?: 'StockTrans', title?: Maybe<string> }>, files: Array<{ __typename?: 'StockFile', fileName?: Maybe<string> }> };

export type FetchStocksQueryVariables = Exact<{
  langCode?: Maybe<Scalars['String']>;
  where?: Maybe<StockWhereInput>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy?: Maybe<Array<StockOrderByInput> | StockOrderByInput>;
}>;


export type FetchStocksQuery = { __typename?: 'Query', rows: Array<{ __typename?: 'Stock', id: number, price: number, saleEnd?: Maybe<any>, quantity: number, elment_trans: Array<{ __typename?: 'StockTrans', title?: Maybe<string> }>, files: Array<{ __typename?: 'StockFile', fileName?: Maybe<string> }> }> };

export type ProductsFragmentFragment = { __typename?: 'Product', id: number, title?: Maybe<string>, regularPrice: number, maxDiscount?: Maybe<number>, vendor?: Maybe<{ __typename?: 'User', id: number, brandName?: Maybe<string>, logo?: Maybe<string>, minBill: number }>, files: Array<{ __typename?: 'ProductFile', fileName?: Maybe<string> }> };

export type GetProductsQueryVariables = Exact<{
  where?: Maybe<ProductWhereInput>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy?: Maybe<Array<ProductOrderByInput> | ProductOrderByInput>;
}>;


export type GetProductsQuery = { __typename?: 'Query', rows: Array<{ __typename?: 'Product', id: number, title?: Maybe<string>, regularPrice: number, maxDiscount?: Maybe<number>, vendor?: Maybe<{ __typename?: 'User', id: number, brandName?: Maybe<string>, logo?: Maybe<string>, minBill: number }>, files: Array<{ __typename?: 'ProductFile', fileName?: Maybe<string> }> }> };

export type ProductsSearchFragmentFragment = { __typename?: 'Product', id: number, title?: Maybe<string>, regularPrice: number, maxDiscount?: Maybe<number>, vendor?: Maybe<{ __typename?: 'User', brandName?: Maybe<string>, logo?: Maybe<string>, minBill: number, id: number }>, files: Array<{ __typename?: 'ProductFile', fileName?: Maybe<string> }> };

export type GetSearchsQueryVariables = Exact<{
  where?: Maybe<ProductWhereInput>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy?: Maybe<Array<ProductOrderByInput> | ProductOrderByInput>;
}>;


export type GetSearchsQuery = { __typename?: 'Query', rows: Array<{ __typename?: 'Product', id: number, title?: Maybe<string>, regularPrice: number, maxDiscount?: Maybe<number>, vendor?: Maybe<{ __typename?: 'User', brandName?: Maybe<string>, logo?: Maybe<string>, minBill: number, id: number }>, files: Array<{ __typename?: 'ProductFile', fileName?: Maybe<string> }> }> };

export type GetSuggestionsQueryVariables = Exact<{
  where?: Maybe<ProductWhereInput>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy?: Maybe<Array<ProductOrderByInput> | ProductOrderByInput>;
}>;


export type GetSuggestionsQuery = { __typename?: 'Query', rows: Array<{ __typename?: 'Product', id: number, title?: Maybe<string>, regularPrice: number, files: Array<{ __typename?: 'ProductFile', fileName?: Maybe<string> }> }> };

export type GetStockQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
  langCode: Scalars['String'];
}>;


export type GetStockQuery = { __typename?: 'Query', row?: Maybe<{ __typename?: 'Stock', id: number, price: number, quantity: number, vendor?: Maybe<{ __typename?: 'User', brandName?: Maybe<string>, taxRate: number, minBill: number, logo?: Maybe<string>, stocks: Array<{ __typename?: 'Stock', id: number, price: number, saleEnd?: Maybe<any>, quantity: number, elment_trans: Array<{ __typename?: 'StockTrans', title?: Maybe<string> }>, files: Array<{ __typename?: 'StockFile', fileName?: Maybe<string> }> }> }>, elment_trans: Array<{ __typename?: 'StockTrans', title?: Maybe<string> }>, descriptions: Array<{ __typename?: 'StockToDescription', description?: Maybe<{ __typename?: 'ProductDescription', id: number, elment_trans: Array<{ __typename?: 'ProductDescriptionTrans', title?: Maybe<string> }> }> }>, sizes: Array<{ __typename?: 'StockToSize', size?: Maybe<{ __typename?: 'Size', id: number, title?: Maybe<string> }> }>, tags: Array<{ __typename?: 'StockToTag', tag?: Maybe<{ __typename?: 'Tag', id: number, elment_trans: Array<{ __typename?: 'TagTrans', title?: Maybe<string> }> }> }>, colours: Array<{ __typename?: 'StockToColour', colour?: Maybe<{ __typename?: 'Colour', id: number, files: Array<{ __typename?: 'StockFile', fileName?: Maybe<string> }> }> }> }> };

export type GetProductQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
  langCode: Scalars['String'];
}>;


export type GetProductQuery = { __typename?: 'Query', row?: Maybe<{ __typename?: 'Product', id: number, title?: Maybe<string>, regularPrice: number, rate?: Maybe<number>, favouritesCount?: Maybe<number>, stock: number, quantityStep: number, weight: number, elment_trans: Array<{ __typename?: 'ProductTrans', longDescription?: Maybe<string> }>, vendor?: Maybe<{ __typename?: 'User', id: number, brandName?: Maybe<string>, taxRate: number, minBill: number, logo?: Maybe<string>, products: Array<{ __typename?: 'Product', id: number, title?: Maybe<string>, regularPrice: number, maxDiscount?: Maybe<number>, vendor?: Maybe<{ __typename?: 'User', id: number, brandName?: Maybe<string>, logo?: Maybe<string>, minBill: number }>, files: Array<{ __typename?: 'ProductFile', fileName?: Maybe<string> }> }>, userPriceVariations: Array<{ __typename?: 'UserPriceVariation', id: number, discount: number, from: number, to: number }> }>, descriptions: Array<{ __typename?: 'ProductToDescription', description?: Maybe<{ __typename?: 'ProductDescription', id: number, elment_trans: Array<{ __typename?: 'ProductDescriptionTrans', title?: Maybe<string> }> }> }>, sizes: Array<{ __typename?: 'ProductToSize', size?: Maybe<{ __typename?: 'Size', id: number, title?: Maybe<string> }> }>, tags: Array<{ __typename?: 'ProductToTag', tag?: Maybe<{ __typename?: 'Tag', id: number, elment_trans: Array<{ __typename?: 'TagTrans', title?: Maybe<string> }> }> }>, colours: Array<{ __typename?: 'ProductToColour', sku?: Maybe<string>, colour: { __typename?: 'Colour', id: number, files: Array<{ __typename?: 'ProductFile', fileName?: Maybe<string> }> } }> }> };

export type GetProductsCategoriesQueryVariables = Exact<{
  langCode: Scalars['String'];
}>;


export type GetProductsCategoriesQuery = { __typename?: 'Query', rows: Array<{ __typename?: 'ProductCategory', id: number, parentId: number, photo?: Maybe<string>, elment_trans: Array<{ __typename?: 'ProductCategoryTrans', title?: Maybe<string> }> }> };

export type FetchOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchOrdersQuery = { __typename?: 'Query', rows: Array<{ __typename?: 'Order', id: number, created_at?: Maybe<any>, adminNote?: Maybe<string>, paymentStatus?: Maybe<string>, totalPrice?: Maybe<number>, shippingCost?: Maybe<number> }> };

export type FetchOrderQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FetchOrderQuery = { __typename?: 'Query', row?: Maybe<{ __typename?: 'Order', id: number, created_at?: Maybe<any>, totalPrice?: Maybe<number>, paymentType?: Maybe<string>, shippingCost?: Maybe<number>, adminNote?: Maybe<string>, couponDiscountValue?: Maybe<number>, shippingMethod?: Maybe<string>, paymentStatus?: Maybe<string>, user: { __typename?: 'User', id: number }, vendors: Array<{ __typename?: 'OrderVendor', orderStatus?: Maybe<string>, vendor: { __typename?: 'User', id: number, brandName?: Maybe<string>, taxRate: number, minBill: number }, items: Array<{ __typename?: 'OrderItem', quantity: number, sku?: Maybe<string>, variationId: number, regularPrice: number, images: Array<{ __typename?: 'ProductFile', fileName?: Maybe<string> }>, product: { __typename?: 'Product', id: number, title?: Maybe<string>, regularPrice: number, weight: number, quantityStep: number } }> }>, shipmentAddress?: Maybe<{ __typename?: 'Shipmentadr', isDefault: number, id: number, adrs?: Maybe<string>, apartment?: Maybe<string>, cityId?: Maybe<number>, countryCode?: Maybe<string>, firstName?: Maybe<string>, lastName?: Maybe<string>, postalCode?: Maybe<string>, receiverMobile?: Maybe<string>, region?: Maybe<string>, road?: Maybe<string>, city?: Maybe<{ __typename?: 'City', titleEN?: Maybe<string> }>, country?: Maybe<{ __typename?: 'Country', id: number, titleEN?: Maybe<string> }> }>, cargo?: Maybe<{ __typename?: 'Cargo', titleEN?: Maybe<string> }> }> };

export type CancelOrderMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CancelOrderMutation = { __typename?: 'Mutation', row?: Maybe<{ __typename?: 'Order', id: number }> };

export type CreateCartOrderMutationVariables = Exact<{
  orderId?: Maybe<Scalars['Int']>;
  items: Array<Maybe<InputDataOrderItemType>> | Maybe<InputDataOrderItemType>;
}>;


export type CreateCartOrderMutation = { __typename?: 'Mutation', row?: Maybe<{ __typename?: 'OrderPayload', id?: Maybe<number> }> };

export type CreateOrderMutationVariables = Exact<{
  data?: Maybe<InputDataOrderType>;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', row?: Maybe<{ __typename?: 'OrderPayload', id?: Maybe<number> }> };

export type CreateFollowMutationVariables = Exact<{
  followedId: Scalars['Int'];
}>;


export type CreateFollowMutation = { __typename?: 'Mutation', row: { __typename?: 'UserFollowing', id: number, followerId: number, followedId: number } };

export type DeleteFollowMutationVariables = Exact<{
  followedId: Scalars['Int'];
}>;


export type DeleteFollowMutation = { __typename?: 'Mutation', row?: Maybe<{ __typename?: 'UserFollowing', id: number, followerId: number, followedId: number }> };

export type PostLoginFirebaseMutationVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  firebaseToken: Scalars['String'];
  deviceId?: Maybe<Scalars['String']>;
}>;


export type PostLoginFirebaseMutation = { __typename?: 'Mutation', row?: Maybe<{ __typename?: 'AuthPayload', accessToken?: Maybe<string>, user?: Maybe<{ __typename?: 'User', id: number, full_name?: Maybe<string>, firstName?: Maybe<string>, lastName?: Maybe<string>, contactLang: string, countryId?: Maybe<number>, photo?: Maybe<string>, preferredCurrency: string, phone?: Maybe<string>, email?: Maybe<string>, groupId: number }> }> };

export type FetchVendorFiltersQueryVariables = Exact<{
  vendorId?: Maybe<Scalars['Int']>;
  langCode: Scalars['String'];
}>;


export type FetchVendorFiltersQuery = { __typename?: 'Query', rows?: Maybe<{ __typename?: 'FiltersPayload', categories?: Maybe<Array<Maybe<{ __typename?: 'ProductCategory', id: number, elment_trans: Array<{ __typename?: 'ProductCategoryTrans', title?: Maybe<string> }> }>>>, colours?: Maybe<Array<Maybe<{ __typename?: 'Colour', id: number, elment_trans: Array<{ __typename?: 'ColourTrans', title?: Maybe<string> }> }>>>, descriptions?: Maybe<Array<Maybe<{ __typename?: 'ProductDescription', id: number, elment_trans: Array<{ __typename?: 'ProductDescriptionTrans', title?: Maybe<string> }> }>>>, materials?: Maybe<Array<Maybe<{ __typename?: 'Material', id: number, elment_trans: Array<{ __typename?: 'MaterialTrans', title?: Maybe<string> }> }>>>, shapes?: Maybe<Array<Maybe<{ __typename?: 'Shape', id: number, elment_trans: Array<{ __typename?: 'ShapeTrans', title?: Maybe<string> }> }>>>, labels?: Maybe<Array<Maybe<{ __typename?: 'Label', id: number }>>>, sizes?: Maybe<Array<Maybe<{ __typename?: 'Size', id: number, title?: Maybe<string> }>>>, tags?: Maybe<Array<Maybe<{ __typename?: 'Tag', id: number, elment_trans: Array<{ __typename?: 'TagTrans', title?: Maybe<string> }> }>>> }> };

export type ShipmentadrFragmentFragment = { __typename?: 'Shipmentadr', isDefault: number, id: number, adrs?: Maybe<string>, apartment?: Maybe<string>, cityId?: Maybe<number>, countryCode?: Maybe<string>, firstName?: Maybe<string>, lastName?: Maybe<string>, postalCode?: Maybe<string>, receiverMobile?: Maybe<string>, region?: Maybe<string>, road?: Maybe<string>, city?: Maybe<{ __typename?: 'City', titleEN?: Maybe<string> }>, country?: Maybe<{ __typename?: 'Country', id: number, titleEN?: Maybe<string> }> };

export type FetchAddressQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FetchAddressQuery = { __typename?: 'Query', row?: Maybe<{ __typename?: 'Shipmentadr', isDefault: number, id: number, adrs?: Maybe<string>, apartment?: Maybe<string>, cityId?: Maybe<number>, countryCode?: Maybe<string>, firstName?: Maybe<string>, lastName?: Maybe<string>, postalCode?: Maybe<string>, receiverMobile?: Maybe<string>, region?: Maybe<string>, road?: Maybe<string>, city?: Maybe<{ __typename?: 'City', titleEN?: Maybe<string> }>, country?: Maybe<{ __typename?: 'Country', id: number, titleEN?: Maybe<string> }> }> };

export type FetchAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAddressesQuery = { __typename?: 'Query', rows: Array<{ __typename?: 'Shipmentadr', isDefault: number, id: number, adrs?: Maybe<string>, apartment?: Maybe<string>, cityId?: Maybe<number>, countryCode?: Maybe<string>, firstName?: Maybe<string>, lastName?: Maybe<string>, postalCode?: Maybe<string>, receiverMobile?: Maybe<string>, region?: Maybe<string>, road?: Maybe<string>, city?: Maybe<{ __typename?: 'City', titleEN?: Maybe<string> }>, country?: Maybe<{ __typename?: 'Country', id: number, titleEN?: Maybe<string> }> }> };

export type FetchCouponsQueryVariables = Exact<{
  clientId: Scalars['Int'];
}>;


export type FetchCouponsQuery = { __typename?: 'Query', rows: Array<{ __typename?: 'Coupon', id: number, description?: Maybe<string>, maximumAmount: number, validTo: any, couponValue: number, minimumValueToBeApplied: number, couponsUsed: Array<{ __typename?: 'CouponsUsed', client?: Maybe<{ __typename?: 'User', id: number }> }> }> };

export type Unnamed_1_MutationVariables = Exact<{
  file?: Maybe<Scalars['Upload']>;
  type: Scalars['String'];
  rowId?: Maybe<Scalars['Int']>;
}>;


export type Unnamed_1_Mutation = { __typename?: 'Mutation', row?: Maybe<{ __typename?: 'File', filename?: Maybe<string> }> };

export type CheckCouponQueryVariables = Exact<{
  couponCode?: Maybe<Scalars['String']>;
}>;


export type CheckCouponQuery = { __typename?: 'Query', rows: Array<{ __typename?: 'Coupon', id: number, couponValue: number, maximumAmount: number, minimumValueToBeApplied: number }> };

export type CreateAddressMutationVariables = Exact<{
  apartment?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Int']>;
  countryId?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  receiverMobile?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  road?: Maybe<Scalars['String']>;
}>;


export type CreateAddressMutation = { __typename?: 'Mutation', row: { __typename?: 'Shipmentadr', isDefault: number, id: number, adrs?: Maybe<string>, apartment?: Maybe<string>, cityId?: Maybe<number>, countryCode?: Maybe<string>, firstName?: Maybe<string>, lastName?: Maybe<string>, postalCode?: Maybe<string>, receiverMobile?: Maybe<string>, region?: Maybe<string>, road?: Maybe<string>, city?: Maybe<{ __typename?: 'City', titleEN?: Maybe<string> }>, country?: Maybe<{ __typename?: 'Country', id: number, titleEN?: Maybe<string> }> } };

export type UpdateAddressMutationVariables = Exact<{
  id: Scalars['Int'];
  apartment?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Int']>;
  countryId?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  receiverMobile?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  road?: Maybe<Scalars['String']>;
  isDefault?: Maybe<Scalars['Int']>;
}>;


export type UpdateAddressMutation = { __typename?: 'Mutation', row: { __typename?: 'Shipmentadr', isDefault: number, id: number, adrs?: Maybe<string>, apartment?: Maybe<string>, cityId?: Maybe<number>, countryCode?: Maybe<string>, firstName?: Maybe<string>, lastName?: Maybe<string>, postalCode?: Maybe<string>, receiverMobile?: Maybe<string>, region?: Maybe<string>, road?: Maybe<string>, city?: Maybe<{ __typename?: 'City', titleEN?: Maybe<string> }>, country?: Maybe<{ __typename?: 'Country', id: number, titleEN?: Maybe<string> }> } };

export type DeleteAddressMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteAddressMutation = { __typename?: 'Mutation', row?: Maybe<{ __typename?: 'Shipmentadr', id: number }> };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int'];
  data: UserUpdateInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', row?: Maybe<{ __typename?: 'User', id: number }> };

export type CreateQutationMutationVariables = Exact<{
  vendorId: Scalars['Int'];
  categoryId: Scalars['Int'];
  title: Scalars['String'];
  quantity: Scalars['Int'];
  description: Scalars['String'];
  destinationCountryCode?: Maybe<Scalars['String']>;
  estimatedDeliveryDate?: Maybe<Scalars['String']>;
  langCode?: Maybe<Scalars['String']>;
}>;


export type CreateQutationMutation = { __typename?: 'Mutation', row: { __typename?: 'Quotation', id: number, created_at?: Maybe<any>, updated_at?: Maybe<any>, title?: Maybe<string>, status: number, quantity: number, description?: Maybe<string>, photo?: Maybe<string>, category: { __typename?: 'ProductCategory', elment_trans: Array<{ __typename?: 'ProductCategoryTrans', title?: Maybe<string> }> } } };

export type QuotationFragmentFragment = { __typename?: 'Quotation', id: number, created_at?: Maybe<any>, updated_at?: Maybe<any>, title?: Maybe<string>, status: number, quantity: number, description?: Maybe<string>, photo?: Maybe<string>, category: { __typename?: 'ProductCategory', elment_trans: Array<{ __typename?: 'ProductCategoryTrans', title?: Maybe<string> }> } };

export type FetchQuotationQueryVariables = Exact<{
  langCode?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
}>;


export type FetchQuotationQuery = { __typename?: 'Query', row?: Maybe<{ __typename?: 'Quotation', id: number, created_at?: Maybe<any>, updated_at?: Maybe<any>, title?: Maybe<string>, status: number, quantity: number, description?: Maybe<string>, photo?: Maybe<string>, category: { __typename?: 'ProductCategory', elment_trans: Array<{ __typename?: 'ProductCategoryTrans', title?: Maybe<string> }> } }> };

export type FetchQuotationsQueryVariables = Exact<{
  langCode?: Maybe<Scalars['String']>;
}>;


export type FetchQuotationsQuery = { __typename?: 'Query', rows: Array<{ __typename?: 'Quotation', id: number, created_at?: Maybe<any>, updated_at?: Maybe<any>, title?: Maybe<string>, status: number, quantity: number, description?: Maybe<string>, photo?: Maybe<string>, category: { __typename?: 'ProductCategory', elment_trans: Array<{ __typename?: 'ProductCategoryTrans', title?: Maybe<string> }> } }> };

export type CreateFavouritesMutationVariables = Exact<{
  productId: Scalars['Int'];
}>;


export type CreateFavouritesMutation = { __typename?: 'Mutation', row: { __typename?: 'UserFavourite', id: number, userId?: Maybe<number>, productId: number } };

export type DeleteFavouritesMutationVariables = Exact<{
  productId: Scalars['Int'];
}>;


export type DeleteFavouritesMutation = { __typename?: 'Mutation', row?: Maybe<{ __typename?: 'UserFavourite', id: number, userId?: Maybe<number>, productId: number }> };
