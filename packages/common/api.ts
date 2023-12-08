import unionBy from 'lodash/unionBy';

import {gql} from '@redux-requests/graphql';
//TODO: seperate for common use
import {RequestActionMeta} from '@redux-requests/core';
import {
    CancelOrderMutation,
    CheckCouponQuery,
    CreateAddressMutation,
    CreateCartOrderMutation,
    CreateFavouritesMutation,
    CreateFollowMutation,
    CreateOrderMutation,
    CreateQutationMutation,
    DeleteAddressMutation,
    DeleteFavouritesMutation,
    DeleteFollowMutation,
    FetchAddressesQuery,
    FetchAddressQuery,
    FetchCouponsQuery,
    FetchOrderQuery,
    FetchOrdersQuery,
    FetchQuotationQuery,
    FetchQuotationsQuery,
    FetchStocksQuery,
    FetchVendorFiltersQuery,
    GetProductQuery,
    GetProductsCategoriesQuery,
    GetProductsQuery,
    GetSearchsQuery,
    GetStockQuery,
    GetSuggestionsQuery,
    GetVendorsByCategoryQuery,
    PostLoginFirebaseMutation,
    UpdateAddressMutation,
    UpdateUserMutation,
} from './types/graphql';

type RequestAction<Data = any, TransformedData = Data> = {
    type?: string;
    request: any | any[];
    meta?: RequestActionMeta<Data, TransformedData>;
};

const KartonahApi = {
    initilized: false,
    baseURL: 'https://dev.kartonah.com/api',
    store: null,
    langCode: 'en',

    //constats
    FETCH_FAVOURITES: 'FETCH_FAVOURITES',
    FETCH_VENDORS_BY_CATEGORY: 'FETCH_VENDORS_BY_CATEGORY',
    FETCH_VENDORS: 'FETCH_VENDORS',
    FETCH_USER_LOCATION: 'FETCH_USER_LOCATION',
    GET_COUNTRY: 'GET_COUNTRY',
    FETCH_ALL_FILTERS: 'FETCH_ALL_FILTERS',
    FETCH_PAYMENT_METHODS: 'FETCH_PAYMENT_METHODS',
    FETCH_VENDOR_TOTAL_PRODUCTS: 'FETCH_VENDOR_TOTAL_PRODUCTS',
    FETCH_USER_PRICES: 'FETCH_USER_PRICES',
    FETCH_STOCKS: 'FETCH_STOCKS',
    FETCH_PRODUCTS: 'FETCH_PRODUCTS',
    FETCH_PRODUCTS2: 'FETCH_PRODUCTS2',
    FETCH_SALE_PRODUCTS: 'FETCH_SALE_PRODUCTS',
    FETCH_SEARCH: 'FETCH_SEARCH',
    FETCH_SUGGESTION: 'FETCH_SUGGESTION',
    FETCH_STOCK: 'FETCH_STOCK',
    FETCH_HOME: 'FETCH_HOME',
    FETCH_PRODUCT: 'FETCH_PRODUCT',
    FETCH_VENDOR_RELATED: 'FETCH_VENDOR_RELATED',
    FETCH_PRODUCTS_CATEGORIES: 'FETCH_PRODUCTS_CATEGORIES',
    FETCH_PRODUCTS_CATEGORIES2: 'FETCH_PRODUCTS_CATEGORIES2',
    FETCH_ORDERS: 'FETCH_ORDERS',
    FETCH_ORDER: 'FETCH_ORDER',
    CANCEL_ORDER: 'CANCEL_ORDER',
    CREATE_STORE_VIEW: 'CREATE_STORE_VIEW',
    CREATE_CART_ORDER: 'CREATE_CART_ORDER',
    CREATE_ORDER: 'CREATE_ORDER',
    CREATE_FOLLOW: 'CREATE_FOLLOW',
    DELETE_FOLLOW: 'DELETE_FOLLOW',
    POST_LOGIN: 'POST_LOGIN',
    POST_LOGIN_FIREBASE: 'POST_LOGIN_FIREBASE',
    POST_OTP: 'POST_OTP',
    POST_REGISTER: 'POST_REGISTER',
    FETCH_VENDOR_FILTERS: 'FETCH_VENDOR_FILTERS',
    FETCH_CARGOS_CODES: 'FETCH_CARGOS_CODES',
    FETCH_CARGOS: 'FETCH_CARGOS',
    FETCH_ADDRESSES: 'FETCH_ADDRESSES',
    FETCH_ADDRESS: 'FETCH_ADDRESS',
    FETCH_COUPONS: 'FETCH_COUPONS',
    FETCH_COUPONS_BY_USER: 'FETCH_COUPONS_BY_USER',
    UPLOAD_AVATAR: 'UPLOAD_AVATAR',
    UPLOAD_FILE: 'UPLOAD_FILE',
    CHECK_COUPON: 'CHECK_COUPON',
    CREATE_COURIER: 'CREATE_COURIER',
    UPDATE_COURIER: 'UPDATE_COURIER',
    FETCH_COURIERS: 'FETCH_COURIERS',
    DELETE_COURIER: 'DELETE_COURIER',
    CREATE_ADDRESS: 'CREATE_ADDRESS',
    UPDATE_ADDRESS: 'UPDATE_ADDRESS',
    DELETE_ADDRESS: 'DELETE_ADDRESS',
    UPDATE_USER: 'UPDATE_USER',
    UPDATE_CARGO_CODE: 'UPDATE_CARGO_CODE',
    FETCH_CITIES: 'FETCH_CITIES',
    CREATE_QUTATION: 'CREATE_QUTATION',
    CREATE_CARD: 'CREATE_CARD',
    DELETE_CARD: 'DELETE_CARD',
    UPDATE_SETTING: 'UPDATE_SETTING',
    FETCH_QUOTATIONS: 'FETCH_QUOTATIONS',
    FETCH_QUOTATION: 'FETCH_QUOTATION',
    FETCH_USER_TRANSFER_LOGS: 'FETCH_USER_TRANSFER_LOGS',
    FETCH_CARDS: 'FETCH_CARDS',
    UPDATE_CARD: 'UPDATE_CARD',
    ADD_CREDIT: 'ADD_CREDIT',
    TRANSFER_MONEY: 'TRANSFER_MONEY',
    FETCH_TOTAL_TRANSFERED_FROM: 'FETCH_TOTAL_TRANSFERED_FROM',
    FETCH_TOTAL_TRANSFERED_TO: 'FETCH_TOTAL_TRANSFERED_TO',
    GET_PRODUCT_DISCOUNT: 'GET_PRODUCT_DISCOUNT',
    CREATE_FAVOURITES: 'CREATE_FAVOURITES',
    DELETE_FAVOURITES: 'DELETE_FAVOURITES',

    init: function ({store, langCode}: {store: any; langCode: 'ar' | 'en' | string}) {
        // console.log("this.init",this.initilized)
        // if(!this.initilized){
        try {
            this.langCode = langCode;
            this.store = store;
            this.initilized = true;
            store?.dispatch({type: 'LOCALE_CHANGE', locale: langCode});
        } catch (error) {
            return error;
        }
        // }
    },

    onRequest: function (request: any, requestAction: any, store) {
        const token = KartonahApi.store?.getState()?.auth?.token;
        console.log('token', KartonahApi.store?.getState()?.auth?.token);

        if (token) {
            return {
                ...request,
                headers: {
                    ...request.headers,
                    Authorization: `Bearer ${token}`,
                },
            };
        }

        return request;
    },

    getVendorsByCategory: function (data): RequestAction<{rows: GetVendorsByCategoryQuery['rows']; hasMore: boolean}> {
        return {
            type: KartonahApi.FETCH_VENDORS_BY_CATEGORY,
            request: {
                // url: '/vendors-by-category',
                // params: {...data, langCode: KartonahApi.langCode},
                query: gql`
                    query GetVendorsByCategory($categoriesIds: IntFilter, $skip: Int, $take: Int) {
                        rows: vendors(categoriesIds: $categoriesIds, skip: $skip, take: $take) {
                            id
                            photo
                            logo
                            brandName
                            minBill
                            productsCount
                            rate
                        }
                    }
                `,
                variables: {
                    ...data,
                    categoriesIds: data?.categoriesIds?.length > 0 ? {in: data.categoriesIds.map((c) => c.id)} : {},
                    langCode: KartonahApi.langCode,
                },
            },
            meta: {
                driver: 'graphql',
                getData: (newData, currentData) => {
                    return {
                        ...newData,
                        rows: unionBy(currentData?.rows || [], newData?.rows, 'id'),
                        hasMore: newData?.rows?.length > 0,
                    };
                },
            },
        };
    },
    //TODO: change to graphql
    getVendors: function (category_id = 0): RequestAction {
        return {
            type: KartonahApi.FETCH_VENDORS,
            request: {
                url: category_id === 0 ? '/users-by-group/3' : `/vendors-by-category/?categoryId=${category_id}`,
                params: {langCode: KartonahApi.langCode},
            },
        };
    },

    getUserLocation: function (ip: string): RequestAction {
        return {
            type: KartonahApi.FETCH_USER_LOCATION,
            request: {
                url: `http://ip-api.com/json/${ip}?fields=countryCode`,
            },
        };
    },

    getCountry: function (id: number): RequestAction {
        return {
            type: KartonahApi.GET_COUNTRY,
            request: {
                query: gql`
                    query GetCountry($id: Int!) {
                        row: country(where: {id: $id}) {
                            id
                            countryCode
                            isShippingPriceIncluded
                            currencies {
                                shippingPrice
                                currency {
                                    id
                                    currencyCode
                                    exchangeRate
                                }
                            }
                        }
                    }
                `,
                variables: {
                    id,
                },
            },
            meta: {driver: 'graphql'},
        };
    },

    getAllFilters: function (): RequestAction {
        return {
            type: KartonahApi.FETCH_ALL_FILTERS,
            request: {
                url: ['/colours', '/brands', '/materials', '/sizes', '/shapes', '/products-categories'],
                params: {langCode: KartonahApi.langCode},
            },
        };
    },

    getPaymentMethods: function (): RequestAction {
        return {
            type: KartonahApi.FETCH_PAYMENT_METHODS,
            request: {
                url: '/payment-methods',
                params: {langCode: KartonahApi.langCode},
            },
        };
    },

    fetchVendorTotalProducts: function (vendorId: number): RequestAction {
        return {
            type: KartonahApi.FETCH_VENDOR_TOTAL_PRODUCTS,
            request: {
                url: '/products-stats',
                params: {langCode: KartonahApi.langCode, vendorId},
            },
        };
    },

    getUserPrices: function (vendorId: number): RequestAction {
        return {
            type: KartonahApi.FETCH_USER_PRICES,
            request: {
                url: `/user-prices-variations/${vendorId}`,
                params: {langCode: KartonahApi.langCode},
            },
        };
    },
    StocksFragment: gql`
        fragment StocksFragment on Stock {
            id
            price
            saleEnd
            elment_trans(where: {languageCode: {equals: $langCode}}) {
                title
            }
            quantity
            files(take: 1, where: {isFeatured: {equals: 1}}) {
                fileName
            }
        }
    `,
    getStocksWhere: function (data) {
        let where = {};
        // priceMax: 100,
        // rating: [],
        if (data?.title) {
            where = {...where, elment_trans: {some: {title: {contains: data?.title}}}};
        }
        if (data?.search) {
            where = {...where, elment_trans: {some: {title: {contains: data?.search}}}};
        }
        if (data?.isFeatured.length > 0) {
            where = {...where, isFeatured: {equals: data?.isFeatured}};
        }
        if (data?.priceMin > 0 && data?.priceMax > 0) {
            where = {
                ...where,
                AND: [{price: {gte: data?.priceMin}}, {price: {lte: data?.priceMax}}],
            };
        }
        if (data?.categoriesIds?.length > 0) {
            where = {
                ...where,
                categories: {some: {prdctcatId: {in: data?.categoriesIds}}},
            };
        }
        if (data?.tagsIds?.length > 0) {
            where = {
                ...where,
                tags: {some: {tagId: {in: data?.tagsIds}}},
            };
        }
        if (data?.sizesIds?.length > 0) {
            where = {
                ...where,
                sizes: {some: {sizeId: {in: data?.sizesIds}}},
            };
        }
        if (data?.materialsIds?.length > 0) {
            where = {
                ...where,
                materials: {some: {materialId: {in: data?.materialsIds}}},
            };
        }
        if (data?.coloursIds?.length > 0) {
            where = {
                ...where,
                colours: {some: {colourId: {in: data?.coloursIds}}},
            };
        }
        if (data?.labelsIds?.length > 0) {
            where = {
                ...where,
                labels: {some: {labelId: {in: data?.labelsIds}}},
            };
        }
        if (data?.userId) {
            where = {...where, userId: {equals: data?.userId}};
        }
        where = {...where, isDeleted: {equals: 0}, isApproved: {equals: 1}};
        return where;
    },

    fetchStocks: function (data): RequestAction<{rows: FetchStocksQuery['rows']; hasMore: boolean}> {
        return {
            type: KartonahApi.FETCH_STOCKS,
            request: {
                query: gql`
                    query FetchStocks(
                        $langCode: String
                        $where: StockWhereInput
                        $limit: Int!
                        $offset: Int!
                        $orderBy: [StockOrderByInput!]
                    ) {
                        rows: stocks(take: $limit, skip: $offset, where: $where, orderBy: $orderBy) {
                            ...StocksFragment
                        }
                    }
                    ${KartonahApi.StocksFragment}
                `,
                variables: {
                    // ...data,
                    limit: data?.limit || 10,
                    offset: data?.offset || 0,
                    where: KartonahApi.getStocksWhere(data),
                    // orderBy: {id: 'desc'},
                    orderBy: {[data.sortBy]: data.sortSign},
                    langCode: KartonahApi.langCode,
                },
            },
            meta: {
                driver: 'graphql',
                getData: (newData, currentData) => ({
                    ...newData,
                    rows: unionBy(currentData?.rows || [], newData?.rows, 'id'),
                    hasMore: newData?.rows?.length > 0,
                }),
            },
        };
    },
    fetchStocks2: function (data): RequestAction {
        return {
            type: KartonahApi.FETCH_STOCKS,
            request: {
                query: KartonahApi.fetchStocks(data)?.request?.query,
                variables: KartonahApi.fetchStocks(data)?.request?.variables,
            },
            meta: {
                driver: 'graphql',
            },
        };
    },
    ProductsFragment: gql`
        fragment ProductsFragment on Product {
            id
            title
            regularPrice
            maxDiscount
            weight
            vendor {
                id
                brandName
                logo
                minBill
            }
            files(take: 1, where: {isFeatured: {equals: 1}}) {
                fileName
            }
        }
    `,
    getProductsWhere: function (data) {
        let where = {};
        // priceMax: 100,
        // rating: [],

        if (data?.search || data?.title) {
            let search = data?.title ? data?.title : data?.search;
            where = {
                ...where,
                OR: [
                    {
                        title: {contains: search},
                    },
                    {
                        tags: {
                            some: {
                                tag: {elment_trans: {some: {title: {contains: search}}}},
                            },
                        },
                    },
                    {
                        shapes: {
                            some: {
                                shape: {elment_trans: {some: {title: {contains: search}}}},
                            },
                        },
                    },
                    {
                        sizes: {
                            some: {
                                size: {title: {contains: search}},
                            },
                        },
                    },
                    {
                        materials: {
                            some: {
                                material: {elment_trans: {some: {title: {contains: search}}}},
                            },
                        },
                    },
                    {
                        descriptions: {
                            some: {
                                description: {
                                    elment_trans: {some: {title: {contains: search}}},
                                },
                            },
                        },
                    },
                ],
            };
        }
        if (data?.isFeatured?.length > 0) {
            where = {...where, isFeatured: {equals: data?.isFeatured}};
        }
        if (data?.priceMin > 0 || data?.priceMax > 0) {
            where = {
                ...where,
                AND: [{regularPrice: {gte: data?.priceMin}}, {regularPrice: {lte: data?.priceMax}}],
            };
        }
        if (data?.categoriesIds?.length > 0) {
            where = {
                ...where,
                categories: {
                    some: {prdctcatId: {in: data?.categoriesIds.map((c) => c.id)}},
                },
            };
        }
        if (data?.tagsIds?.length > 0) {
            where = {
                ...where,
                tags: {some: {tagId: {in: data?.tagsIds?.map((c) => c.id)}}},
            };
        }
        if (data?.sizesIds?.length > 0) {
            where = {
                ...where,
                sizes: {some: {sizeId: {in: data?.sizesIds?.map((c) => c.id)}}},
            };
        }
        if (data?.materialsIds?.length > 0) {
            where = {
                ...where,
                materials: {some: {materialId: {in: data?.materialsIds?.map((c) => c.id)}}},
            };
        }
        if (data?.coloursIds?.length > 0) {
            where = {
                ...where,
                colours: {some: {colourId: {in: data?.coloursIds?.map((c) => c.id)}}},
            };
        }
        if (data?.labelsIds?.length > 0) {
            where = {
                ...where,
                labels: {some: {labelId: {in: data?.labelsIds?.map((c) => c.id)}}},
            };
        }
        if (data?.userId) {
            where = {...where, userId: {equals: data?.userId}};
        }
        return where;
    },

    getProducts: function (data): RequestAction<{rows: GetProductsQuery['rows']; hasMore: boolean}> {
        return {
            type: KartonahApi.FETCH_PRODUCTS,
            request: {
                query: gql`
                    query GetProducts(
                        $where: ProductWhereInput
                        $limit: Int!
                        $offset: Int!
                        $orderBy: [ProductOrderByInput!]
                    ) {
                        rows: products(take: $limit, skip: $offset, where: $where, orderBy: $orderBy) {
                            ...ProductsFragment
                        }
                    }
                    ${KartonahApi.ProductsFragment}
                `,
                variables: {
                    // ...data,
                    limit: data?.limit || 15,
                    offset: data?.offset || 0,
                    where: KartonahApi.getProductsWhere(data),
                    orderBy: data.sortBy && data.sortSign ? {[data.sortBy]: data.sortSign} : {id: 'desc'},
                    // langCode: KartonahApi.langCode,
                },
            },
            meta: {
                driver: 'graphql',
                getData: (newData, currentData) => ({
                    ...newData,
                    rows: unionBy(currentData?.rows || [], newData?.rows, 'id'),
                    hasMore: newData?.rows?.length > 0,
                }),
            },
        };
    },
    getProducts2: function (data): RequestAction<{rows: GetProductsQuery['rows']; hasMore: boolean}> {
        return {
            ...KartonahApi.getProducts(data),
            type: KartonahApi.FETCH_PRODUCTS2,
        };
    },
    getVendorRelated: function (data): RequestAction<{rows: GetProductsQuery['rows']; hasMore: boolean}> {
        return {
            type: KartonahApi.FETCH_VENDOR_RELATED,
            request: {
                query: gql`
                    query GetVendorRelated(
                        $where: ProductWhereInput
                        $limit: Int!
                        $userId: Int!
                        $offset: Int! # $orderBy: [ProductOrderByInput!]
                    ) {
                        byRecent: products(take: $limit, skip: $offset, where: $where, orderBy: {id: desc}) {
                            ...ProductsFragment
                        }
                        byViews: hotProducts(userId: $userId) {
                            ...ProductsFragment
                        }
                    }
                    ${KartonahApi.ProductsFragment}
                `,
                variables: {
                    userId: data?.userId || null,
                    limit: data?.limit || 15,
                    offset: data?.offset || 0,
                    where: KartonahApi.getProductsWhere(data),
                    orderBy: data.sortBy && data.sortSign ? {[data.sortBy]: data.sortSign} : {id: 'desc'},
                    // langCode: KartonahApi.langCode,
                },
            },
            meta: {
                driver: 'graphql',
            },
        };
    },
    getHome: function (data): RequestAction<{rows: GetProductsQuery['rows']}> {
        return {
            type: KartonahApi.FETCH_HOME,
            request: {
                query: gql`
                    query GetHome(
                        # $where: ProductWhereInput
                        # $limit: Int!
                        # $offset: Int!
                        # $orderBy: [ProductOrderByInput!]
                        $langCode: String!
                    ) {
                        banners: banners {
                            id
                            targetId
                            type
                            elment_trans(where: {languageCode: {equals: $langCode}}) {
                                url
                            }
                        }
                        categories: productCategories(
                            where: {
                                parentId: {equals: 0}
                                status: {equals: 1}
                                isDeleted: {equals: 0}
                                OR: [{products: {some: {}}}, {parentId: {equals: 0}}]
                            }
                            orderBy: {theOrder: asc}
                        ) {
                            id
                            parentId
                            photo
                            elment_trans(where: {languageCode: {equals: $langCode}}) {
                                title
                            }
                        }
                        recentProducts: products(take: 6, skip: 0, orderBy: {id: desc}) {
                            ...ProductsFragment
                        }
                        newVendors: users(skip: 0, take: 6, orderBy: {id: desc}, where: {photo: {not: null}}) {
                            id
                            photo
                            logo
                            brandName
                            minBill
                            productsCount
                            rate
                        }
                        topVendors: topVendors {
                            id
                            photo
                            logo
                            brandName
                            minBill
                            productsCount
                            rate
                        }
                        hotStocks: stocks(take: 6, skip: 0, orderBy: {id: asc}) {
                            ...StocksFragment
                        }
                        hotProducts: hotProducts {
                            ...ProductsFragment
                        }
                        # hotProducts: products(take: 6, skip: 0, orderBy: {id: asc}) {
                        #     ...ProductsFragment
                        # }
                    }
                    ${KartonahApi.ProductsFragment}
                    ${KartonahApi.StocksFragment}
                `,
                variables: {
                    // limit: data?.limit || 15,
                    // offset: data?.offset || 0,
                    // where: KartonahApi.getProductsWhere(data),
                    // orderBy: data.sortBy && data.sortSign ? {[data.sortBy]: data.sortSign} : {id: 'desc'},
                    langCode: KartonahApi.langCode,
                },
            },
            meta: {
                driver: 'graphql',
            },
        };
    },
    getSaleProducts: function (data): RequestAction {
        return {
            type: KartonahApi.FETCH_SALE_PRODUCTS,
            request: {
                url: '/products',
                params: {...data, langCode: KartonahApi.langCode},
            },
            meta: {
                getData: (newData, currentData) => ({
                    ...newData,
                    rows: unionBy(currentData?.rows || [], newData?.rows, 'id'),
                }),
            },
        };
    },
    ProductsSearchFragment: gql`
        fragment ProductsSearchFragment on Product {
            id
            title
            regularPrice
            maxDiscount
            vendor {
                brandName
                logo
                minBill
                # productsCount
                id
            }
            files(take: 1, where: {isFeatured: {equals: 1}}) {
                fileName
            }
        }
    `,
    getSearchs: function (data): RequestAction<{rows: GetSearchsQuery['rows']; hasMore: boolean}> {
        return {
            type: KartonahApi.FETCH_SEARCH,
            request: {
                // url: '/search',
                // params: {...data, langCode: KartonahApi.langCode},
                query: gql`
                    query GetSearchs(
                        $where: ProductWhereInput
                        $limit: Int!
                        $offset: Int!
                        $orderBy: [ProductOrderByInput!]
                    ) {
                        rows: products(
                            take: $limit
                            skip: $offset
                            # where: {title: {contains: $search}}
                            where: $where
                            orderBy: $orderBy
                        ) {
                            ...ProductsSearchFragment
                        }
                    }
                    ${KartonahApi.ProductsSearchFragment}
                `,
                variables: {
                    limit: data?.limit || 10,
                    offset: data?.offset || 0,
                    where: KartonahApi.getProductsWhere(data),
                    orderBy: {id: 'desc'},
                    // langCode: KartonahApi.langCode,
                },
            },
            meta: {
                driver: 'graphql',
            },
        };
    },
    getSuggestions: function (data): RequestAction<{rows: GetSuggestionsQuery['rows']; hasMore: boolean}> {
        return {
            type: KartonahApi.FETCH_SUGGESTION,
            request: {
                // url: '/search',
                // params: {...data, langCode: KartonahApi.langCode},
                query: gql`
                    query GetSuggestions(
                        $where: ProductWhereInput
                        $limit: Int!
                        $offset: Int!
                        $orderBy: [ProductOrderByInput!]
                    ) {
                        rows: products(
                            take: $limit
                            skip: $offset
                            # where: {title: {contains: $search}}
                            where: $where
                            orderBy: $orderBy
                        ) {
                            id
                            title
                            regularPrice
                            files(take: 1, where: {isFeatured: {equals: 1}}) {
                                fileName
                            }
                        }
                    }
                `,
                variables: {
                    limit: data?.limit || 10,
                    offset: data?.offset || 0,
                    where: KartonahApi.getProductsWhere(data),
                    orderBy: {id: 'desc'},
                    // langCode: KartonahApi.langCode,
                },
            },
            meta: {
                driver: 'graphql',
            },
        };
    },

    getStock: function (id: number): RequestAction<{row: GetStockQuery['row']}> {
        return {
            type: KartonahApi.FETCH_STOCK,
            request: {
                // url: `/stocks/${id}`,
                // params: {langCode: KartonahApi.langCode, offset: 0, limit: 6},
                query: gql`
                    query GetStock($id: Int, $langCode: String!) {
                        row: stock(where: {id: $id}) {
                            id
                            # title
                            price
                            quantity
                            # rate
                            # favouritesCount
                            # stock
                            # quantityStep
                            # weight
                            vendor {
                                brandName
                                taxRate
                                minBill
                                logo
                                stocks(
                                    take: 10
                                    where: {id: {not: {equals: $id}}, isDeleted: {equals: 0}, isApproved: {equals: 1}}
                                ) {
                                    ...StocksFragment
                                }
                            }
                            elment_trans(where: {languageCode: {equals: $langCode}}) {
                                title
                            }
                            descriptions {
                                description {
                                    id
                                    elment_trans(where: {languageCode: {equals: $langCode}}) {
                                        title
                                    }
                                }
                            }
                            sizes {
                                size {
                                    id
                                    title
                                }
                            }
                            tags {
                                tag {
                                    id
                                    elment_trans(where: {languageCode: {equals: $langCode}}) {
                                        title
                                    }
                                }
                            }
                            colours {
                                # sku
                                colour {
                                    id
                                    files: stockFiles(take: 5, where: {stockId: {equals: $id}}) {
                                        fileName
                                    }
                                }
                            }
                        }
                    }
                    ${KartonahApi.StocksFragment}
                `,
                variables: {
                    id,
                    langCode: KartonahApi.langCode,
                },
            },
            meta: {
                driver: 'graphql',
            },
        };
    },

    getProduct: function (id: number): RequestAction<{row: GetProductQuery['row']}> {
        return {
            type: KartonahApi.FETCH_PRODUCT,
            request: {
                query: gql`
                    query GetProduct($id: Int, $langCode: String!) {
                        row: product(where: {id: $id}) {
                            id
                            title
                            regularPrice
                            rate
                            favouritesCount
                            stock
                            quantityStep
                            weight
                            elment_trans(where: {languageCode: {equals: $langCode}}) {
                                longDescription
                            }
                            vendor {
                                id
                                brandName
                                taxRate
                                minBill
                                logo
                                products(
                                    take: 10
                                    where: {
                                        id: {not: {equals: $id}}
                                        isDeleted: {equals: 0}
                                        status: {equals: 1}
                                        isApproved: {equals: 1}
                                    }
                                ) {
                                    ...ProductsFragment
                                }
                                userPriceVariations {
                                    id
                                    discount
                                    from
                                    to
                                }
                            }
                            descriptions {
                                description {
                                    id
                                    elment_trans(where: {languageCode: {equals: $langCode}}) {
                                        title
                                    }
                                }
                            }
                            sizes {
                                size {
                                    id
                                    title
                                }
                            }
                            tags {
                                tag {
                                    id
                                    elment_trans(where: {languageCode: {equals: $langCode}}) {
                                        title
                                    }
                                }
                            }
                            colours {
                                sku
                                colour {
                                    id
                                    code
                                    files(take: 5, where: {productId: {equals: $id}}) {
                                        fileName
                                    }
                                }
                            }
                        }
                    }
                    ${KartonahApi.ProductsFragment}
                `,
                variables: {
                    id,
                    langCode: KartonahApi.langCode,
                },
            },
            meta: {
                driver: 'graphql',
            },
        };
    },

    getProductsCategories: function (
        data = {},
    ): RequestAction<{rows: GetProductsCategoriesQuery['rows']; hasMore: boolean}> {
        return {
            type: KartonahApi.FETCH_PRODUCTS_CATEGORIES,
            request: {
                query: gql`
                    query GetProductsCategories($langCode: String!) {
                        rows: productCategories(
                            where: {
                                status: {equals: 1}
                                isDeleted: {equals: 0}
                                OR: [{products: {some: {}}}, {parentId: {equals: 0}}]
                            }
                            orderBy: {theOrder: asc}
                        ) {
                            id
                            parentId
                            icon
                            elment_trans(where: {languageCode: {equals: $langCode}}) {
                                title
                            }
                        }
                    }
                `,
                variables: {langCode: KartonahApi.langCode},
            },
            meta: {
                driver: 'graphql',
            },
        };
    },

    getProductsCategories2: function (data): RequestAction {
        return {
            type: KartonahApi.FETCH_PRODUCTS_CATEGORIES2,
            request: {
                url: '/products-categories-by-order',
                params: {...data, langCode: KartonahApi.langCode},
            },
        };
    },

    fetchOrders: function (offset: number): RequestAction<{rows: FetchOrdersQuery['rows']; hasMore: boolean}> {
        return {
            type: KartonahApi.FETCH_ORDERS,
            request: {
                // url: '/orders',
                // params: {
                //   userId: KartonahApi.store?.getState()?.auth.id,
                //   langCode: KartonahApi.langCode,
                //   limit: 30,
                //   sortBy: 'id',
                //   sortSign: 'DESC',
                //   offset,
                // },
                query: gql`
                    query FetchOrders {
                        rows: orders(where: {paymentType: {not: {equals: ""}}}) {
                            id
                            created_at
                            adminNote
                            paymentStatus
                            totalPrice
                            shippingCost
                            isShippingPriceIncluded
                            exchangeRate
                            currencyCode
                            couponDiscountValue
                        }
                    }
                `,
                variables: {
                    langCode: KartonahApi.langCode,
                },
            },
            meta: {
                driver: 'graphql',
                onRequest: KartonahApi.onRequest,
                // getData: (data, currentData) => {
                //   if (currentData == undefined) {
                //     return data,
                //   } else {
                //     return {rows: [...currentData.rows, ...data.rows]},
                //   }
                // },
            },
        };
    },

    fetchOrder: function (id: number): RequestAction<{row: FetchOrderQuery['row']}> {
        return {
            type: KartonahApi.FETCH_ORDER,
            request: {
                // url: `/orders/${id}`,
                // params: {
                //   langCode: KartonahApi.langCode,
                // },
                query: gql`
                    query FetchOrder($id: Int!) {
                        row: order(where: {id: $id}) {
                            user {
                                id
                            }
                            id
                            created_at
                            totalPrice
                            paymentType
                            shippingCost
                            exchangeRate
                            currencyCode
                            isShippingPriceIncluded
                            adminNote
                            couponDiscountValue
                            shippingMethod
                            paymentStatus
                            vendors {
                                orderStatus
                                vendor {
                                    id
                                    brandName
                                    taxRate
                                    minBill
                                }
                                items {
                                    quantity
                                    sku
                                    variationId
                                    images {
                                        fileName
                                    }
                                    regularPrice
                                    product {
                                        id
                                        title
                                        regularPrice
                                        weight
                                        quantityStep
                                    }
                                }
                            }
                            shipmentAddress {
                                ...ShipmentadrFragment
                            }
                            cargo {
                                titleEN
                            }
                        }
                    }
                    ${KartonahApi.ShipmentadrFragment}
                `,
                variables: {id, langCode: KartonahApi.langCode},
            },
            meta: {
                driver: 'graphql',
                onRequest: KartonahApi.onRequest,
            },
        };
    },

    cancelOrder: function (id: number): RequestAction<{row: CancelOrderMutation['row']}> {
        return {
            type: KartonahApi.CANCEL_ORDER,
            request: {
                // url: `/orders/${id}`,
                // method: 'cancel',
                // method: 'delete',
                // params: {
                //   langCode: KartonahApi.langCode,
                // },
                query: gql`
                    mutation CancelOrder($id: Int!) {
                        row: updateOneOrder(where: {id: $id}, data: {isDeleted: {set: 1}}) {
                            id
                        }
                    }
                `,
                variables: {id},
            },
            meta: {
                driver: 'graphql',
                onRequest: KartonahApi.onRequest,
                onSuccess: function (response, requestAction, store) {
                    KartonahApi.store.dispatch(KartonahApi.fetchOrders(0));
                    return response;
                },
            },
        };
    },

    addToMailchimp: function (EMAIL: string): RequestAction {
        return {
            type: 'ADD_TO_MAILCHIMP',
            request: {
                url: 'https://gmail.us7.list-manage.com/subscribe/post?u=fad00a316d1e290f7186998f4&amp;id=f07925f563',
                method: 'post',
                data: {EMAIL},
            },
        };
    },

    createStoreView: function (elementId: number, type: 'product' | 'vendor', userId: number): RequestAction {
        return {
            type: KartonahApi.CREATE_STORE_VIEW,
            request: {
                url: '/store-views',
                method: 'post',
                params: {langCode: KartonahApi.langCode},
                data: {elementId, type, userId},
            },
            meta: {onRequest: KartonahApi.onRequest},
        };
    },

    createCartOrder: function (data: any): RequestAction<{row: CreateCartOrderMutation['row']}> {
        return {
            type: KartonahApi.CREATE_CART_ORDER,
            request: {
                query: gql`
                    mutation CreateCartOrder($orderId: Int, $items: [InputDataOrderItemType]!) {
                        row: createCartOrder(data: {orderId: $orderId, items: $items}) {
                            id
                        }
                    }
                `,
                variables: {...data},
            },
            meta: {driver: 'graphql', onRequest: KartonahApi.onRequest},
        };
    },
    getCreateOneData: function (values) {
        let d = {};
        if (values?.cargoId) {
            d = {
                ...d,
                cargoId: values?.cargoId,
            };
        }
        if (values?.couponId) {
            d = {
                ...d,
                couponId: values?.couponId,
            };
        }
        if (values?.shipmentAdrsId) {
            d = {
                ...d,
                shipmentAdrsId: values?.shipmentAdrsId,
            };
        }
        if (values?.currencyCode) {
            d = {
                ...d,
                currencyCode: values?.currencyCode,
            };
        }
        if (values?.notes) {
            d = {
                ...d,
                notes: values?.notes,
            };
        }
        if (values?.orderId) {
            d = {
                ...d,
                orderId: values?.orderId,
            };
        }
        if (values?.paymentType) {
            d = {
                ...d,
                paymentType: values?.paymentType,
            };
        }
        if (values?.shippingCost) {
            d = {
                ...d,
                shippingCost: values?.shippingCost,
            };
        }
        if (values?.shippingMethod) {
            d = {
                ...d,
                shippingMethod: values?.shippingMethod,
            };
        }
        if (values?.items) {
            d = {
                ...d,
                items: values?.items,
            };
        }
        return d;
    },
    createOrder: function (data: any): RequestAction<{row: CreateOrderMutation['row']}> {
        return {
            type: KartonahApi.CREATE_ORDER,
            request: {
                // url: '/orders',
                // method: 'post',
                // params: {langCode: KartonahApi.langCode},
                // data,
                query: gql`
                    mutation CreateOrder($data: InputDataOrderType) {
                        row: createOrder(data: $data) {
                            id
                        }
                    }
                `,
                variables: {data: KartonahApi.getCreateOneData(data)},
            },
            meta: {driver: 'graphql', onRequest: KartonahApi.onRequest},
        };
    },
    createFollow: function (data: {followedId: number}): RequestAction<{row: CreateFollowMutation['row']}> {
        return {
            type: KartonahApi.CREATE_FOLLOW,
            request: {
                // url: '/users-following',
                // method: 'post',
                // params: {langCode: KartonahApi.langCode},
                // data,
                query: gql`
                    mutation CreateFollow($followedId: Int!) {
                        row: createOneUserFollowing(data: {followedId: $followedId}) {
                            id
                            followerId
                            followedId
                        }
                    }
                `,
                variables: {followedId: data.followedId},
            },
            meta: {driver: 'graphql', onRequest: KartonahApi.onRequest},
        };
    },

    deleteFollow: function (vendorId: number, userId: number): RequestAction<{row: DeleteFollowMutation['row']}> {
        return {
            type: KartonahApi.DELETE_FOLLOW,
            request: {
                // url: `/unfollow/${userId}/${vendorId}`,
                // params: {langCode: KartonahApi.langCode},
                // method: 'put',
                query: gql`
                    mutation DeleteFollow($followedId: Int!) {
                        row: deleteOneUserFollowing(followedId: $followedId) {
                            id
                            followerId
                            followedId
                        }
                    }
                `,
                variables: {followedId: vendorId},
            },
            meta: {driver: 'graphql', onRequest: KartonahApi.onRequest},
        };
    },

    postLoginFirebase: function (
        phone: string,
        email: string,
        firebaseToken: string,
        deviceId: string = '',
    ): RequestAction<{row: PostLoginFirebaseMutation['row']}> {
        // var form_data = new FormData();
        // // for ( var key in item ) {
        //   form_data.append("phone", phone);
        //   form_data.append("device_key", uniqueId);
        // }
        return {
            type: KartonahApi.POST_LOGIN_FIREBASE,
            request: {
                // url: '/login-firebase',
                // method: 'post',
                // params: {langCode: KartonahApi.langCode},
                // data: {phone, device_key: uniqueId},
                // data: form_data,

                query: gql`
                    mutation PostLoginFirebase(
                        $email: String
                        $phone: String
                        $firebaseToken: String!
                        $deviceId: String
                    ) {
                        row: signIn(phone: $phone, email: $email, firebaseToken: $firebaseToken, deviceId: $deviceId) {
                            user {
                                id
                                full_name
                                firstName
                                lastName
                                contactLang
                                countryId
                                photo
                                preferredCurrency
                                phone
                                email
                                groupId
                            }
                            accessToken
                        }
                    }
                `,
                variables: {phone, email, deviceId, firebaseToken, langCode: KartonahApi.langCode},
            },
            meta: {
                driver: 'graphql',
                // onRequest: (request: any, requestAction: any, store) => ({
                //     ...request,
                //     headers: {
                //         ...request.headers,
                //         'Content-Type': 'application/x-www-form-urlencoded',
                //         // 'Content-Type': 'application/json'
                //     },
                // }),
            },
        };
    },

    postOtp: function (phone: number, otp: number): RequestAction {
        return {
            type: KartonahApi.POST_LOGIN,
            request: {
                url: '/otp',
                method: 'post',
                params: {langCode: KartonahApi.langCode},
                data: {phone, otp},
            },
        };
    },

    postRegister: function (phone: number, otp: number): RequestAction {
        return {
            type: KartonahApi.POST_REGISTER,
            request: {
                url: '/register',
                method: 'post',
                params: {langCode: KartonahApi.langCode},
                data: {phone, otp},
            },
        };
    },

    fetchVendorFilters: function (vendorId: number): RequestAction<{rows: FetchVendorFiltersQuery['rows']}> {
        return {
            type: KartonahApi.FETCH_VENDOR_FILTERS,
            request: {
                // url: `/get-filters/${vendorId}`,
                // params: {langCode: KartonahApi.langCode},
                query: gql`
                    query FetchVendorFilters($vendorId: Int, $langCode: String!) {
                        rows: filters(vendorId: $vendorId, langCode: $langCode) {
                            categories {
                                id
                                elment_trans(where: {languageCode: {equals: $langCode}}) {
                                    title
                                }
                            }
                            colours {
                                id
                                elment_trans(where: {languageCode: {equals: $langCode}}) {
                                    title
                                }
                            }
                            descriptions {
                                id
                                elment_trans(where: {languageCode: {equals: $langCode}}) {
                                    title
                                }
                            }
                            materials {
                                id
                                elment_trans(where: {languageCode: {equals: $langCode}}) {
                                    title
                                }
                            }
                            shapes {
                                id
                                elment_trans(where: {languageCode: {equals: $langCode}}) {
                                    title
                                }
                            }
                            labels {
                                id
                            }
                            sizes {
                                id
                                title
                            }
                            tags {
                                id
                                elment_trans(where: {languageCode: {equals: $langCode}}) {
                                    title
                                }
                            }
                        }
                    }
                `,
                variables: {vendorId, langCode: KartonahApi.langCode},
            },
            meta: {driver: 'graphql'},
        };
    },

    fetchCargosCodes: function (): RequestAction {
        return {
            type: KartonahApi.FETCH_CARGOS_CODES,
            request: {
                url: '/cargos-codes',
                params: {langCode: KartonahApi.langCode},
            },
            meta: {onRequest: KartonahApi.onRequest},
        };
    },

    fetchCargos: function (countryCode: string): RequestAction {
        return {
            type: KartonahApi.FETCH_CARGOS,
            request: {
                url: `/cargos-by-country/${countryCode}`,
                params: {langCode: KartonahApi.langCode},
                // params: {langCode: KartonahApi.langCode, countryCode},
            },
            // meta: {onRequest},
        };
    },

    ShipmentadrFragment: gql`
        fragment ShipmentadrFragment on Shipmentadr {
            isDefault
            id
            adrs
            apartment
            cityId
            countryCode
            firstName
            lastName
            postalCode
            receiverMobile
            region
            road
            city {
                titleEN
            }
            country {
                id
                titleEN
            }
        }
    `,
    fetchAddress: function (id: number): RequestAction<{row: FetchAddressQuery['row']}> {
        return {
            type: KartonahApi.FETCH_ADDRESS,
            request: {
                // url: '/address/' + id,
                // params: {langCode: KartonahApi.langCode},
                query: gql`
                    query FetchAddress($id: Int!) {
                        row: shipmentadr(where: {id: $id}) {
                            ...ShipmentadrFragment
                        }
                    }
                    ${KartonahApi.ShipmentadrFragment}
                `,
                variables: {id: id, langCode: KartonahApi.langCode},
            },
            meta: {driver: 'graphql', onRequest: KartonahApi.onRequest},
        };
    },

    fetchAddresses: function (): RequestAction<{rows: FetchAddressesQuery['rows']; hasMore: boolean}> {
        return {
            type: KartonahApi.FETCH_ADDRESSES,
            request: {
                // url: '/user-shpmnt-adrs',
                // params: {langCode: KartonahApi.langCode},
                query: gql`
                    query FetchAddresses {
                        rows: shipmentadrs {
                            ...ShipmentadrFragment
                        }
                    }
                    ${KartonahApi.ShipmentadrFragment}
                `,
                variables: {langCode: KartonahApi.langCode},
            },
            meta: {driver: 'graphql', onRequest: KartonahApi.onRequest},
        };
    },

    fetchCoupons: function (): RequestAction<{rows: FetchCouponsQuery['rows']}> {
        return {
            type: KartonahApi.FETCH_COUPONS,
            request: {
                // url: '/coupons',
                // params: {langCode: KartonahApi.langCode},
                query: gql`
                    query FetchCoupons($clientId: Int!) {
                        rows: coupons {
                            id
                            description
                            maximumAmount
                            validTo
                            couponValue
                            minimumValueToBeApplied
                            couponsUsed(where: {userId: {equals: $clientId}}) {
                                client {
                                    id
                                }
                            }
                        }
                    }
                `,
                variables: {
                    langCode: KartonahApi.langCode,
                    clientId: KartonahApi.store.getState().auth.id,
                },
            },
            meta: {driver: 'graphql', onRequest: KartonahApi.onRequest},
        };
    },

    fetchCouponsByUser: function (userId: number): RequestAction {
        return {
            type: KartonahApi.FETCH_COUPONS_BY_USER,
            request: {
                url: '/coupons',
                params: {userId, langCode: KartonahApi.langCode},
            },
            meta: {onRequest: KartonahApi.onRequest},
        };
    },

    uploadAvatar: function (userId: number, files: any): RequestAction {
        return {
            type: KartonahApi.UPLOAD_AVATAR,
            request: {
                url: '/upload-files',
                method: 'post',
                params: {
                    rowId: userId,
                    type: 'user',
                    langCode: KartonahApi.langCode,
                },
                data: files,
                'Content-Type': 'multipart/form-data',
            },
            meta: {
                onRequest: function (request: any, requestAction: any, store) {
                    const token = KartonahApi.store.getState().auth.token;

                    if (token) {
                        return {
                            ...request,
                            headers: {
                                ...request.headers,
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${token}`,
                            },
                        };
                    }

                    return request;
                },
            },
        };
    },

    uploadFile: function (
        rowId: number,
        files: any,
        type: 'user' | 'product' | 'product_category' | 'payment' | 'quotation',
    ): RequestAction {
        return {
            type: KartonahApi.UPLOAD_FILE,
            request: {
                query: gql`
                    mutation ($file: Upload, $type: String!, $rowId: Int) {
                        row: singleUpload(file: $file, type: $type, rowId: $rowId) {
                            filename
                        }
                    }
                `,
                variables: {
                    rowId,
                    file: files,
                    type,
                },
            },
            meta: {
                driver: 'graphql',
                onRequest: KartonahApi.onRequest,
            },
        };
    },

    checkCoupon: function (couponCode: string): RequestAction<{rows: CheckCouponQuery['rows']}> {
        return {
            type: KartonahApi.CHECK_COUPON,
            request: {
                // url: '/coupon-info',
                // method: 'get',
                // params: {couponCode, langCode: KartonahApi.langCode},
                query: gql`
                    query CheckCoupon($couponCode: String) {
                        rows: couponCheck(where: {couponCode: {equals: $couponCode}}) {
                            id
                            couponValue
                            maximumAmount
                            minimumValueToBeApplied
                        }
                    }
                `,
                variables: {couponCode, langCode: KartonahApi.langCode},
            },
            meta: {
                driver: 'graphql',
                onRequest: KartonahApi.onRequest,
            },
        };
    },

    // createCourier :function(data): RequestAction {return ({
    //   type: KartonahApi.CREATE_COURIER,
    //   request: {
    //     url: '/couriers',
    //     method: 'post',
    //     params: {langCode: KartonahApi.langCode},
    //     data,
    //   },
    //   meta: {
    //     onRequest:KartonahApi.onRequest,
    //     onSuccess: function(response, requestAction, store)  {
    //       KartonahApi.store.dispatch(KartonahApi.fetchCouriers());
    //       return response;
    //     },
    //   },
    // })},

    // updateCourier :function(data): RequestAction {return ({
    //   type: KartonahApi.UPDATE_COURIER,
    //   request: {
    //     url: `/couriers/${data.id}`,
    //     method: 'put',
    //     params: {langCode: KartonahApi.langCode},
    //     data,
    //   },
    //   meta: {
    //     onRequest:KartonahApi.onRequest,
    //     onSuccess: function(response, requestAction, store)  {
    //       KartonahApi.store.dispatch(KartonahApi.fetchCouriers());
    //       return response;
    //     },
    //   },
    // })},

    // fetchCouriers :function(): RequestAction<couriersRootObject> {return ({
    //   type: KartonahApi.FETCH_COURIERS,
    //   request: {
    //     url: '/couriers-by-user',
    //     params: {langCode: KartonahApi.langCode},
    //   },
    //   meta: {
    //     onRequest:KartonahApi.onRequest,
    //   },
    // })},

    // deleteCourier :function(id: number): RequestAction  {
    //   return {
    //     type: KartonahApi.DELETE_COURIER,
    //     request: {
    //       url: `/couriers/${id}`,
    //       method: 'delete',
    //       params: {langCode: KartonahApi.langCode},
    //     },
    //     meta: {
    //       onRequest:KartonahApi.onRequest,
    //       onSuccess: function(response, requestAction, store) {
    //         KartonahApi.store.dispatch(this.fetchCouriers());
    //         return response;
    //       },
    //     },
    //   };
    // },

    createAddress: function (values: any): RequestAction<{row: CreateAddressMutation['row']}> {
        return {
            type: KartonahApi.CREATE_ADDRESS,
            request: {
                // url: '/shipmentadrs',
                // method: 'post',
                // params: {langCode: KartonahApi.langCode},
                // data: values,
                query: gql`
                    mutation CreateAddress(
                        $apartment: String
                        $cityId: Int
                        $countryId: Int
                        $firstName: String
                        $lastName: String
                        $postalCode: String
                        $receiverMobile: String
                        $region: String
                        $road: String
                    ) {
                        row: upsertOneShipmentadr(
                            where: {id: 0}
                            create: {
                                apartment: $apartment
                                city: {connect: {id: $cityId}}
                                country: {connect: {id: $countryId}}
                                firstName: $firstName
                                lastName: $lastName
                                postalCode: $postalCode
                                receiverMobile: $receiverMobile
                                region: $region
                                road: $road
                            }
                            update: {}
                        ) {
                            ...ShipmentadrFragment
                        }
                    }
                    ${KartonahApi.ShipmentadrFragment}
                `,
                variables: {...values, langCode: KartonahApi.langCode},
            },
            meta: {
                driver: 'graphql',
                onRequest: KartonahApi.onRequest,
                onSuccess: function (response, requestAction, store) {
                    KartonahApi?.store.dispatch(KartonahApi.fetchAddresses());
                    return response;
                },
            },
        };
    },

    updateAddress: function (values: any): RequestAction<{row: UpdateAddressMutation['row']}> {
        return {
            type: KartonahApi.UPDATE_ADDRESS,
            request: {
                // url: `/shipmentadrs/${values.id}`,
                // method: 'put',
                // params: {langCode: KartonahApi.langCode},
                // data: values,
                query: gql`
                    mutation UpdateAddress(
                        $id: Int!
                        $apartment: String
                        $cityId: Int
                        $countryId: Int
                        $firstName: String
                        $lastName: String
                        $postalCode: String
                        $receiverMobile: String
                        $region: String
                        $road: String
                        $isDefault: Int
                    ) {
                        row: upsertOneShipmentadr(
                            where: {id: $id}
                            create: {}
                            update: {
                                apartment: {set: $apartment}
                                city: {connect: {id: $cityId}}
                                country: {connect: {id: $countryId}}
                                firstName: {set: $firstName}
                                lastName: {set: $lastName}
                                postalCode: {set: $postalCode}
                                receiverMobile: {set: $receiverMobile}
                                region: {set: $region}
                                road: {set: $road}
                                isDefault: {set: $isDefault}
                            }
                        ) {
                            ...ShipmentadrFragment
                        }
                    }
                    ${KartonahApi.ShipmentadrFragment}
                `,
                variables: {...values, langCode: KartonahApi.langCode},
            },
            meta: {
                driver: 'graphql',
                onRequest: KartonahApi.onRequest,
                onSuccess: function (response, requestAction, store) {
                    KartonahApi.store.dispatch(KartonahApi.fetchAddresses());
                    return response;
                },
            },
        };
    },

    deleteAddress: function (id: number): RequestAction<{row: DeleteAddressMutation['row']}> {
        return {
            type: KartonahApi.DELETE_ADDRESS,
            request: {
                // url: `/shipmentadrs/${id}`,
                // method: 'delete',
                // params: {langCode: KartonahApi.langCode},
                query: gql`
                    mutation DeleteAddress($id: Int!) {
                        row: deleteOneShipmentadr(where: {id: $id}) {
                            id
                        }
                    }
                `,
                variables: {id},
            },
            meta: {
                driver: 'graphql',
                onRequest: KartonahApi.onRequest,
                onSuccess: function (response, requestAction, store) {
                    KartonahApi.store.dispatch(KartonahApi.fetchAddresses());
                    return response;
                },
            },
        };
    },
    getUpdateUserData: function (values) {
        let d = {};
        if (values?.countryId) {
            d = {
                ...d,
                country: {connect: {id: values?.countryId}},
            };
        }
        // if (values?.preferredCurrency) {
        //     d = {
        //         ...d,
        //         preferredCurrency: {set: values?.preferredCurrency},
        //     };
        // }
        if (values?.contactLang) {
            d = {
                ...d,
                contactLang: {set: values?.contactLang},
            };
        }
        if (values?.firstName) {
            d = {
                ...d,
                firstName: {set: values?.firstName},
            };
        }
        if (values?.lastName) {
            d = {
                ...d,
                lastName: {set: values?.lastName},
            };
        }
        if (values?.phone) {
            d = {
                ...d,
                phone: {set: values?.phone},
            };
        }
        return d;
    },

    updateUser: function (values: any): RequestAction<{row: UpdateUserMutation['row']}> {
        return {
            type: KartonahApi.UPDATE_USER,
            request: {
                // url: `/users/${values.id}`,
                // method: 'put',
                // params: {langCode: KartonahApi.langCode},
                // data: values,
                query: gql`
                    mutation UpdateUser($id: Int!, $data: UserUpdateInput!) {
                        row: updateOneUser(where: {id: $id}, data: $data) {
                            id
                        }
                    }
                `,
                variables: {
                    id: values.id,
                    data: KartonahApi.getUpdateUserData(values),
                    langCode: KartonahApi.langCode,
                },
            },
            meta: {
                driver: 'graphql',
                onRequest: KartonahApi.onRequest,
            },
        };
    },

    updateCargoCode: function (values: any): RequestAction {
        return {
            type: KartonahApi.UPDATE_CARGO_CODE,
            request: {
                url: `/cargo-code/${values.id}`,
                method: 'put',
                params: {langCode: KartonahApi.langCode},
                data: values,
            },
            meta: {
                onRequest: KartonahApi.onRequest,
                onSuccess: function (response, requestAction, store) {
                    // KartonahApi.store.dispatch(KartonahApi.fetchCargoCode());
                    return response;
                },
            },
        };
    },

    fetchCities: function (countryCode: string): RequestAction {
        return {
            type: KartonahApi.FETCH_CITIES,
            request: {
                url: `/country-cities/${countryCode}`,
                params: {langCode: KartonahApi.langCode},
            },
        };
    },

    createQutation: function (data: object): RequestAction<{row: CreateQutationMutation['row']}> {
        return {
            type: KartonahApi.CREATE_QUTATION,
            request: {
                // url: '/quotations',
                // method: 'post',
                // params: {langCode: KartonahApi.langCode},
                // data,
                query: gql`
                    mutation CreateQutation(
                        $vendorId: Int!
                        $categoryId: Int!
                        $title: String!
                        $quantity: Int!
                        $description: String!
                        #$shipping_method: String
                        $destinationCountryCode: String
                        # $unit: String
                        $estimatedDeliveryDate: String
                        $langCode: String
                    ) {
                        row: createOneQuotation(
                            data: {
                                vendor: {connect: {id: $vendorId}}
                                category: {connect: {id: $categoryId}}
                                title: $title
                                quantity: $quantity
                                description: $description
                                #   shipping_method: $shipping_method
                                destinationCountryCode: $destinationCountryCode
                                # unit: $unit
                                estimatedDeliveryDate: $estimatedDeliveryDate
                            }
                        ) {
                            ...QuotationFragment
                        }
                    }
                    ${KartonahApi.QuotationFragment}
                `,
                variables: {...data, langCode: KartonahApi.langCode},
            },
            meta: {
                driver: 'graphql',
                onRequest: KartonahApi.onRequest,
                onSuccess: function (response, requestAction, store) {
                    KartonahApi.store.dispatch(KartonahApi.fetchQuotations({}));
                    return response;
                },
            },
        };
    },

    createCard: function (values: any): RequestAction {
        return {
            type: KartonahApi.CREATE_CARD,
            request: {
                url: '/bank-cards',
                method: 'post',
                params: {langCode: KartonahApi.langCode},
                data: values,
            },
            meta: {
                onRequest: KartonahApi.onRequest,
                onSuccess: function (response, requestAction, store) {
                    KartonahApi.store.dispatch(KartonahApi.fetchCards());
                    return response;
                },
            },
        };
    },

    deleteCard: function (id: number): RequestAction {
        return {
            type: KartonahApi.DELETE_CARD,
            request: {
                url: `/bank-cards/${id}`,
                method: 'delete',
                params: {langCode: KartonahApi.langCode},
            },
            meta: {
                onRequest: KartonahApi.onRequest,
                onSuccess: function (response, requestAction, store) {
                    KartonahApi.store.dispatch(KartonahApi.fetchCards());
                    return response;
                },
            },
        };
    },

    updateSetting: function (id: number, name: string, value: any): RequestAction {
        return {
            type: KartonahApi.UPDATE_SETTING,
            request: {
                url: '/update_setting',
                method: 'post',
                params: {langCode: KartonahApi.langCode},
                data: {id, name, value},
            },
        };
    },
    QuotationFragment: gql`
        fragment QuotationFragment on Quotation {
            id
            created_at
            updated_at
            title
            status
            quantity
            description
            photo
            category {
                elment_trans(where: {languageCode: {equals: $langCode}}) {
                    title
                }
            }
        }
    `,
    fetchQuotation: function (id: number): RequestAction<{row: FetchQuotationQuery['row']}> {
        return {
            type: KartonahApi.FETCH_QUOTATION,
            request: {
                // url: `/quotations/${id}`,
                // params: {langCode: KartonahApi.langCode},
                query: gql`
                    query FetchQuotation($langCode: String, $id: Int!) {
                        row: quotation(where: {id: $id}) {
                            ...QuotationFragment
                        }
                    }
                    ${KartonahApi.QuotationFragment}
                `,
                variables: {id, langCode: KartonahApi.langCode},
            },
            meta: {driver: 'graphql', onRequest: KartonahApi.onRequest},
        };
    },

    fetchQuotations: function (data: object): RequestAction<{rows: FetchQuotationsQuery['rows']; hasMore: boolean}> {
        return {
            type: KartonahApi.FETCH_QUOTATIONS,
            request: {
                // url: '/quotations',
                // params: {...data, langCode: KartonahApi.langCode},
                query: gql`
                    query FetchQuotations($langCode: String) {
                        rows: quotations {
                            ...QuotationFragment
                        }
                    }
                    ${KartonahApi.QuotationFragment}
                `,
                variables: {...data, langCode: KartonahApi.langCode},
            },
            meta: {driver: 'graphql', onRequest: KartonahApi.onRequest},
        };
    },

    fetchUserTransferLogs: function (userId: number, offset: number, limit: number): RequestAction {
        return {
            type: KartonahApi.FETCH_USER_TRANSFER_LOGS,
            request: {
                url: '/users-transfers',
                params: {
                    transferedFrom: userId,
                    offset,
                    limit,
                    langCode: KartonahApi.langCode,
                },
            },
            meta: {onRequest: KartonahApi.onRequest},
        };
    },

    fetchCards: function (): RequestAction {
        return {
            type: KartonahApi.FETCH_CARDS,
            request: {
                url: '/bank-cards',
                // url: '/bank-cards',
                params: {langCode: KartonahApi.langCode},
            },
            meta: {onRequest: KartonahApi.onRequest},
        };
    },

    updateCard: function (data): RequestAction {
        return {
            type: KartonahApi.UPDATE_CARD,
            request: {
                url: `/bank-cards/${data.id}`,
                method: 'put',
                params: {langCode: KartonahApi.langCode},
                data,
            },
            meta: {
                onRequest: KartonahApi.onRequest,
                onSuccess: function (response, requestAction, store) {
                    KartonahApi.store.dispatch(KartonahApi.fetchCards());
                    return response;
                },
            },
        };
    },

    addCredit: function (data: object): RequestAction {
        return {
            type: KartonahApi.ADD_CREDIT,
            request: {
                url: '/charge-account',
                method: 'post',
                params: {langCode: KartonahApi.langCode},
                data,
            },
            meta: {onRequest: KartonahApi.onRequest},
        };
    },

    transferMoney: function (data: object): RequestAction {
        return {
            type: KartonahApi.TRANSFER_MONEY,
            request: {
                url: '/users-transfers',
                method: 'post',
                params: {langCode: KartonahApi.langCode},
                data,
            },
            meta: {onRequest: KartonahApi.onRequest},
        };
    },

    fetchTotalTransferedFrom: function (userId: number): RequestAction {
        return {
            type: KartonahApi.FETCH_TOTAL_TRANSFERED_FROM,
            request: {
                url: '/get-total-transfered',
                params: {userId, Way: 'from', langCode: KartonahApi.langCode},
            },
            meta: {onRequest: KartonahApi.onRequest},
        };
    },

    fetchTotalTransferedTo: function (userId: number): RequestAction {
        return {
            type: KartonahApi.FETCH_TOTAL_TRANSFERED_TO,
            request: {
                url: '/get-total-transfered',
                params: {userId, Way: 'to', langCode: KartonahApi.langCode},
            },
            meta: {onRequest: KartonahApi.onRequest},
        };
    },

    getProductDiscount: function (vendorId: number, quantity: number): RequestAction {
        return {
            type: KartonahApi.GET_PRODUCT_DISCOUNT,
            request: {
                url: '/get-product-price',
                params: {userId: vendorId, quantity, langCode: KartonahApi.langCode},
            },
        };
    },

    createFavourites: function (data): RequestAction<{row: CreateFavouritesMutation['row']}> {
        return {
            type: KartonahApi.CREATE_FAVOURITES,
            request: {
                // url: '/users-favourites',
                // method: 'post',
                // params: {langCode: KartonahApi.langCode},
                // data,
                query: gql`
                    mutation CreateFavourites($productId: Int!) {
                        row: createOneUserFavourite(data: {product: {connect: {id: $productId}}}) {
                            id
                            userId
                            productId
                        }
                    }
                `,
                variables: {productId: data.id},
            },
            meta: {
                driver: 'graphql',
                onRequest: KartonahApi.onRequest,
                // onSuccess: function (response, requestAction, store) {
                //     KartonahApi.store.dispatch(KartonahApi.fetchFavourites());
                //     return response;
                // },
            },
        };
    },

    deleteFavourites: function (id: number): RequestAction<{row: DeleteFavouritesMutation['row']}> {
        return {
            type: KartonahApi.DELETE_FAVOURITES,
            request: {
                // url: `/users-favourites/${id}`,
                // method: 'delete',
                // params: {langCode: KartonahApi.langCode},
                query: gql`
                    mutation DeleteFavourites($productId: Int!) {
                        row: deleteOneUserFavourite(productId: $productId) {
                            id
                            userId
                            productId
                        }
                    }
                `,
                variables: {productId: id},
            },
            meta: {
                driver: 'graphql',
                onRequest: KartonahApi.onRequest,
                // onSuccess: function (response, requestAction, store) {
                //     KartonahApi.store.dispatch(KartonahApi.fetchFavourites());
                //     return response;
                // },
            },
        };
    },

    fetchFavourites: function (): RequestAction<any> {
        return {
            type: KartonahApi.FETCH_FAVOURITES,
            request: {
                url: '/favourites-by-user',
                params: {langCode: KartonahApi.langCode},
            },
            meta: {
                onRequest: KartonahApi.onRequest,
            },
        };
    },
};

// import {store} from 'app-redux/store';
// import {getDefaultDeviceLanguage} from './general';

// import {RequestAction} from '@redux-requests/core';

// import unionBy from 'lodash/unionBy';

// const langCode :() => {
//   return store.getState().auth.contactLang
//     ? store.getState().auth.contactLang
//     : getDefaultDeviceLanguage();
// };

export default KartonahApi;
