import {API_ProductsCategoriesParams, API_ProductsParams, CourierType} from 'typescript/types';
import {store} from 'app-redux/store';
import {RequestAction} from '@redux-requests/core';
import {
    loginFirebaseRoot,
    productsCategoriesRootObject,
    productsRootObject,
    vendrosByCategoryRootObject,
    AddressesRootObject,
    couriersRootObject,
    paymentMethodsRootObject,
    couponsRootObject,
    product,
    filters,
    quotations,
    Orders,
    Order,
    Stocks,
} from 'typescript/api.types';
import {getDefaultDeviceLanguage} from './general';
import {concatPaginaition} from 'utils/helper';
import unionBy from 'lodash/unionBy';
import {gql} from '@redux-requests/graphql';

const langCode = () => {
    return store.getState().auth.contactLang ? store.getState().auth.contactLang : getDefaultDeviceLanguage();
};

const onRequest = (request: any, requestAction: any, store) => {
    const token = store.getState().auth.token;

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
};

const onError = (error: any, requestAction: any, store) => {
    // on Timeout
    if (error?.code == 'ECONNABORTED') {
        throw {success: false, message: 'time out'};
    }
    return error.response;
};

export const FETCH_VENDORS_BY_CATEGORY = 'FETCH_VENDORS_BY_CATEGORY';
export const getVendorsByCategory = (data): RequestAction<vendrosByCategoryRootObject> => ({
    type: FETCH_VENDORS_BY_CATEGORY,
    request: {
        // url: '/vendors-by-category',
        // params: {...data, langCode: langCode()},
        query: gql`
            query ($categoriesIds: IntFilter, $skip: Int, $take: Int) {
                rows: vendors(categoriesIds: $categoriesIds, skip: $skip, take: $take) {
                    id
                    photo
                    logo
                    brandName
                    minBill
                    productsCount
                    # rate
                }
            }
        `,
        variables: {
            ...data,
            categoriesIds: data?.categoriesIds?.length > 0 ? {in: data.categoriesIds.map(c => c.id)} : {},
            langCode: langCode(),
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
});

export const FETCH_VENDORS = 'FETCH_VENDORS';
export const getVendors = (category_id = 0): RequestAction => {
    return {
        type: FETCH_VENDORS,
        request: {
            url: category_id === 0 ? '/users-by-group/3' : `/vendors-by-category/?categoryId=${category_id}`,
            params: {langCode: langCode()},
        },
    };
};

export const FETCH_USER_LOCATION = 'FETCH_USER_LOCATION';
export const getUserLocation = (ip: string): RequestAction => {
    return {
        type: FETCH_USER_LOCATION,
        request: {
            url: `http://ip-api.com/json/${ip}?fields=countryCode`,
        },
    };
};

export const FETCH_ALL_FILTERS = 'FETCH_ALL_FILTERS';
export const getAllFilters = (): RequestAction => ({
    type: FETCH_ALL_FILTERS,
    request: {
        url: ['/colours', '/brands', '/materials', '/sizes', '/shapes', '/products-categories'],
        params: {langCode: langCode()},
    },
});

export const FETCH_PAYMENT_METHODS = 'FETCH_PAYMENT_METHODS';
export const getPaymentMethods = (): RequestAction<paymentMethodsRootObject> => ({
    type: FETCH_PAYMENT_METHODS,
    request: {
        url: '/payment-methods',
        params: {langCode: langCode()},
    },
});

export const FETCH_VENDOR_TOTAL_PRODUCTS = 'FETCH_VENDOR_TOTAL_PRODUCTS';
export const fetchVendorTotalProducts = (vendorId: number): RequestAction => ({
    type: FETCH_VENDOR_TOTAL_PRODUCTS,
    request: {
        url: '/products-stats',
        params: {langCode: langCode(), vendorId},
    },
});

export const FETCH_USER_PRICES = 'FETCH_USER_PRICES';
export const getUserPrices = (vendorId: number): RequestAction => ({
    type: FETCH_USER_PRICES,
    request: {
        url: `/user-prices-variations/${vendorId}`,
        params: {langCode: langCode()},
    },
});

const StocksFragment = gql`
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
`;
const getStocksWhere = data => {
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
    return where;
};
export const FETCH_STOCKS = 'FETCH_STOCKS';
export const fetchStocks = (data: API_ProductsParams): RequestAction<Stocks.RootObject> => ({
    type: FETCH_STOCKS,
    request: {
        // url: '/stocks',
        // params: {
        //   ...data,
        //   //TODO : remove this
        //   status: 0,
        //   langCode: langCode(),
        // },

        query: gql`
            query (
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
            ${StocksFragment}
        `,
        variables: {
            // ...data,
            limit: data?.limit || 10,
            offset: data?.offset || 0,
            where: getStocksWhere(data),
            // orderBy: {id: 'desc'},
            orderBy: {[data.sortBy]: data.sortSign},
            langCode: langCode(),
        },
    },
    meta: {
        driver: 'graphql',
        // onError,
        getData: (newData, currentData) => ({
            ...newData,
            rows: unionBy(currentData?.rows || [], newData?.rows, 'id'),
            hasMore: newData?.rows?.length > 0,
        }),
    },
});

export const FETCH_STOCKS2 = 'FETCH_STOCKS2';
export const fetchStocks2 = (data: API_ProductsParams): RequestAction<Stocks.RootObject> => ({
    type: FETCH_STOCKS2,
    request: {
        query: fetchStocks(data).request.query,
        variables: fetchStocks(data).request.variables,
    },
    meta: {
        driver: 'graphql',
    },
});

const ProductsSearchFragment = gql`
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
`;
const ProductsFragment = gql`
    fragment ProductsFragment on Product {
        id
        title
        regularPrice
        maxDiscount
        vendor {
            id
        }
        weight
        files(take: 1, where: {isFeatured: {equals: 1}}) {
            fileName
        }
    }
`;
const getProductsWhere = data => {
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
    if (data?.isFeatured.length > 0) {
        where = {...where, isFeatured: {equals: data?.isFeatured}};
    }
    if (data?.priceMin > 0 && data?.priceMax > 0) {
        where = {
            ...where,
            AND: [{regularPrice: {gte: data?.priceMin}}, {regularPrice: {lte: data?.priceMax}}],
        };
    }
    if (data?.categoriesIds?.length > 0) {
        where = {
            ...where,
            categories: {
                some: {prdctcatId: {in: data?.categoriesIds.map(c => c.id)}},
            },
        };
    }
    if (data?.tagsIds?.length > 0) {
        where = {
            ...where,
            tags: {some: {tagId: {in: data?.tagsIds?.map(c => c.id)}}},
        };
    }
    if (data?.sizesIds?.length > 0) {
        where = {
            ...where,
            sizes: {some: {sizeId: {in: data?.sizesIds?.map(c => c.id)}}},
        };
    }
    if (data?.materialsIds?.length > 0) {
        where = {
            ...where,
            materials: {some: {materialId: {in: data?.materialsIds?.map(c => c.id)}}},
        };
    }
    if (data?.coloursIds?.length > 0) {
        where = {
            ...where,
            colours: {some: {colourId: {in: data?.coloursIds?.map(c => c.id)}}},
        };
    }
    if (data?.labelsIds?.length > 0) {
        where = {
            ...where,
            labels: {some: {labelId: {in: data?.labelsIds?.map(c => c.id)}}},
        };
    }
    if (data?.userId) {
        where = {...where, userId: {equals: data?.userId}};
    }
    return where;
};
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const getProducts = (data: API_ProductsParams): RequestAction<productsRootObject> => ({
    type: FETCH_PRODUCTS,
    request: {
        // url: '/products',
        // params: {...data, langCode: langCode()},
        query: gql`
            query (
                $where: ProductWhereInput
                # $title: String
                # $userId: Int
                $limit: Int!
                $offset: Int!
                $orderBy: [ProductOrderByInput!]
            ) {
                rows: products(
                    take: $limit
                    skip: $offset
                    # where: {userId: {equals: $userId}, title: {contains: $title}}
                    where: $where
                    orderBy: $orderBy
                ) {
                    ...ProductsFragment
                }
            }
            ${ProductsFragment}
        `,
        variables: {
            // ...data,
            limit: data?.limit || 10,
            offset: data?.offset || 0,
            where: getProductsWhere(data),
            orderBy: {[data.sortBy]: data.sortSign},
            langCode: langCode(),
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
});

export const FETCH_SEARCH_PRODUCTS = 'FETCH_SEARCH_PRODUCTS';
export const getSearchProducts = (data: API_ProductsParams): RequestAction<productsRootObject> => ({
    type: FETCH_SEARCH_PRODUCTS,
    request: {
        // url: '/products',
        // params: {...data, langCode: langCode()},
        query: gql`
            query (
                $where: ProductWhereInput
                # $title: String
                # $userId: Int
                $limit: Int!
                $offset: Int!
                $orderBy: [ProductOrderByInput!]
            ) {
                rows: products(
                    take: $limit
                    skip: $offset
                    # where: {userId: {equals: $userId}, title: {contains: $title}}
                    where: $where
                    orderBy: $orderBy
                ) {
                    ...ProductsFragment
                }
            }
            ${ProductsFragment}
        `,
        variables: {
            // ...data,
            limit: data?.limit || 10,
            offset: data?.offset || 0,
            where: getProductsWhere(data),
            orderBy: {[data.sortBy]: data.sortSign},
            langCode: langCode(),
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
});
export const FETCH_HOME_SEARCH_PRODUCTS = 'FETCH_HOME_SEARCH_PRODUCTS';
export const getHomeSearchProducts = (data: API_ProductsParams): RequestAction<productsRootObject> => {
    console.log('data', data.search);
    return {
        ...getSearchProducts(data),
        type: FETCH_HOME_SEARCH_PRODUCTS,
    };
};

export const FETCH_STOCK_PRODUCTS = 'FETCH_STOCK_PRODUCTS';
export const getStockProducts = (data: API_ProductsParams): RequestAction<productsRootObject> => ({
    type: FETCH_STOCK_PRODUCTS,
    request: {
        url: '/products',
        params: {...data, langCode: langCode()},
    },
    meta: {
        getData: (newData, currentData) => ({
            ...newData,
            rows: unionBy(currentData?.rows || [], newData?.rows, 'id'),
        }),
    },
});

const StocksSearchFragment = gql`
    fragment StocksSearchFragment on Stock {
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
`;
export const FETCH_STOCK_SEARCH = 'FETCH_STOCK_SEARCH';
export const getStockSearchs = (data: API_ProductsParams): RequestAction => ({
    type: FETCH_STOCK_SEARCH,
    request: {
        // url: '/search',
        // params: {...data, langCode: langCode()},
        query: gql`
            query ($search: String, $limit: Int!, $offset: Int!, $orderBy: [StockOrderByInput!]) {
                rows: stocks(take: $limit, skip: $offset, where: {title: {contains: $search}}, orderBy: $orderBy) {
                    ...StocksSearchFragment
                }
            }
            ${StocksSearchFragment}
        `,
        variables: {
            ...data,
            orderBy: {id: 'desc'},
            langCode: langCode(),
        },
    },
    meta: {driver: 'graphql'},
});

export const FETCH_SEARCH = 'FETCH_SEARCH';
export const getSearchs = (data: API_ProductsParams): RequestAction => ({
    type: FETCH_SEARCH,
    request: {
        // url: '/search',
        // params: {...data, langCode: langCode()},
        query: gql`
            query ($where: ProductWhereInput, $limit: Int!, $offset: Int!, $orderBy: [ProductOrderByInput!]) {
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
            ${ProductsSearchFragment}
        `,
        variables: {
            ...data,
            where: getProductsWhere(data),
            orderBy: {id: 'desc'},
            langCode: langCode(),
        },
    },
    meta: {driver: 'graphql'},
});

export const FETCH_STOCK = 'FETCH_STOCK';
export const getStock = (id: number): RequestAction<product.RootObject> => ({
    type: FETCH_STOCK,
    request: {
        // url: `/stocks/${id}`,
        query: gql`
            query ($id: Int, $langCode: String!) {
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
                        stocks(take: 10, where: {id: {not: {equals: $id}}}) {
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
            ${StocksFragment}
        `,
        variables: {
            id,
            langCode: langCode(),
        },
        // params: {langCode: langCode(), offset: 0, limit: 6},
    },
    meta: {
        driver: 'graphql',
    },
});

export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const getProduct = (id: number): RequestAction<product.RootObject> => ({
    type: FETCH_PRODUCT,
    request: {
        // url: `/products/${id}`,
        // params: {langCode: langCode(), offset: 0, limit: 6},
        query: gql`
            query ($id: Int, $langCode: String!) {
                row: product(where: {id: $id}) {
                    id
                    title
                    regularPrice
                    rate
                    favouritesCount
                    stock
                    quantityStep
                    weight
                    elment_trans {
                        longDescription
                    }
                    # elment_trans[0]?.longDescription
                    vendor {
                        id
                        brandName
                        taxRate
                        minBill
                        logo
                        products(take: 10, where: {id: {not: {equals: $id}}}) {
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
                            files(take: 5, where: {productId: {equals: $id}}) {
                                fileName
                            }
                        }
                    }
                }
            }
            ${ProductsFragment}
        `,
        variables: {
            id,
            langCode: langCode(),
        },
    },
    meta: {
        driver: 'graphql',
    },
});

export const FETCH_PRODUCTS_CATEGORIES = 'FETCH_PRODUCTS_CATEGORIES';
export const getProductsCategories = (): RequestAction<productsCategoriesRootObject> => ({
    type: FETCH_PRODUCTS_CATEGORIES,
    request: {
        // url: '/products-categories-by-order',
        // params: {langCode: langCode()},
        query: gql`
            query ($langCode: String!) {
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
                    photo
                    elment_trans(where: {languageCode: {equals: $langCode}}) {
                        title
                    }
                }
            }
        `,
        variables: {langCode: langCode()},
    },
    meta: {
        driver: 'graphql',
    },
});

export const FETCH_PRODUCTS_CATEGORIES2 = 'FETCH_PRODUCTS_CATEGORIES2';
export const getProductsCategories2 = (
    data: API_ProductsCategoriesParams,
): RequestAction<productsCategoriesRootObject> => ({
    type: FETCH_PRODUCTS_CATEGORIES2,
    request: {
        url: '/products-categories-by-order',
        params: {
            ...data,
            langCode: langCode(),
        },
    },
});

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const fetchOrders = (offset: number): RequestAction<Orders.RootObject> => ({
    type: FETCH_ORDERS,
    request: {
        // url: '/orders',
        // params: {
        //   langCode: langCode(),
        //   limit: 30,
        //   sortBy: 'id',
        //   sortSign: 'DESC',
        //   offset,
        // },
        query: gql`
            query {
                rows: orders(where: {paymentType: {not: {equals: ""}}}) {
                    id
                    created_at
                    adminNote
                    paymentStatus
                    totalPrice
                    shippingCost
                }
            }
        `,
        variables: {
            langCode: langCode(),
        },
    },
    meta: {
        driver: 'graphql',
        onRequest,
        // getData: (data, currentData) => {
        //   if (currentData == undefined) {
        //     return data;
        //   } else {
        //     return {rows: [...currentData.rows, ...data.rows]};
        //   }
        // },
    },
});

export const FETCH_ORDER = 'FETCH_ORDER';
export const fetchOrder = (id: number): RequestAction<Order.RootObject> => ({
    type: FETCH_ORDER,
    request: {
        // url: `/orders/${id}`,
        // params: {
        //   langCode: langCode(),
        // },
        query: gql`
            query ($id: Int!) {
                row: order(where: {id: $id}) {
                    user {
                        id
                    }
                    id
                    created_at
                    totalPrice
                    paymentType
                    shippingCost
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
                        id
                        country {
                            titleEN
                        }
                    }
                    cargo {
                        titleEN
                    }
                }
            }
        `,
        variables: {id, langCode: langCode()},
    },
    meta: {
        driver: 'graphql',
        onRequest,
    },
});

export const CANCEL_ORDER = 'CANCEL_ORDER';
export const cancelOrder = (id: number): RequestAction => ({
    type: CANCEL_ORDER,
    request: {
        // url: `/orders/${id}`,
        // // method: 'cancel',
        // method: 'delete',
        // params: {
        //   langCode: langCode(),
        // },
        query: gql`
            mutation ($id: Int!) {
                row: updateOneOrder(where: {id: $id}, data: {isDeleted: {set: 1}}) {
                    id
                }
            }
        `,
        variables: {id},
    },
    meta: {
        driver: 'graphql',
        onRequest,
        onSuccess: (response, requestAction, store) => {
            store.dispatch(fetchOrders(0));
            return response;
        },
    },
});

export const CREATE_RATE = 'CREATE_RATE';
export const createRate = (data): RequestAction => ({
    type: CREATE_RATE,
    request: {
        // url: '/store-rates',
        // method: 'post',
        // params: {langCode: langCode()},
        // data: {...data},
        query: gql`
            mutation ($data: RateCreateInput!) {
                row: createOneRate(data: $data) {
                    id
                }
            }
        `,
        variables: {data, langCode: langCode()},
    },
    meta: {driver: 'graphql', onRequest},
});

export const CREATE_STORE_VIEW = 'CREATE_STORE_VIEW';
export const createStoreView = (elementId: number, type: 'product' | 'vendor', userId: number): RequestAction => ({
    type: CREATE_STORE_VIEW,
    request: {
        url: '/store-views',
        method: 'post',
        params: {langCode: langCode()},
        data: {elementId, type, userId},
    },
    meta: {onRequest},
});

export const CREATE_CART_ORDER = 'CREATE_CART_ORDER';
export const createCartOrder = (data: any): RequestAction => ({
    type: CREATE_CART_ORDER,
    request: {
        // url: '/orders',
        // method: 'post',
        // params: {langCode: langCode()},
        // data,
        query: gql`
            mutation ($orderId: Int, $items: [InputDataOrderItemType]!) {
                row: createCartOrder(data: {orderId: $orderId, items: $items}) {
                    id
                }
            }
        `,
        variables: {...data},
    },
    meta: {driver: 'graphql', onRequest},
});

export const CREATE_ORDER = 'CREATE_ORDER';
export const createOrder = (data: any): RequestAction => ({
    type: CREATE_ORDER,
    request: {
        // url: '/orders',
        // method: 'post',
        // params: {langCode: langCode()},
        // data,
        query: gql`
            mutation ($data: InputDataOrderType) {
                row: createOrder(data: $data) {
                    id
                }
            }
        `,
        variables: {data: data},
    },
    meta: {driver: 'graphql', onRequest},
});

export const CREATE_FOLLOW = 'CREATE_FOLLOW';
export const createFollow = (data: object): RequestAction => ({
    type: CREATE_FOLLOW,
    request: {
        // url: '/users-following',
        // method: 'post',
        // params: {langCode: langCode()},
        // data,
        query: gql`
            mutation ($followedId: Int!) {
                row: createOneUserFollowing(data: {followedId: $followedId}) {
                    id
                    followerId
                    followedId
                }
            }
        `,
        variables: {followedId: data.followedId},
    },
    meta: {driver: 'graphql', onRequest},
});

export const DELETE_FOLLOW = 'DELETE_FOLLOW';
export const deleteFollow = (vendorId: number): RequestAction => ({
    type: DELETE_FOLLOW,
    request: {
        // url: `/unfollow/${userId}/${vendorId}`,
        // params: {langCode: langCode()},
        // method: 'put',
        query: gql`
            mutation ($followedId: Int!) {
                row: deleteOneUserFollowing(followedId: $followedId) {
                    id
                    followerId
                    followedId
                }
            }
        `,
        variables: {followedId: vendorId},
    },
    meta: {driver: 'graphql', onRequest},
});

export const POST_LOGIN = 'POST_LOGIN';
export const postLogin = (phone: number): RequestAction => ({
    type: POST_LOGIN,
    request: {
        url: '/login',
        method: 'post',
        params: {langCode: langCode()},
        data: {phone},
    },
});

export const POST_LOGIN_FIREBASE = 'POST_LOGIN_FIREBASE';
export const postLoginFirebase = (
    phone: string,
    email: string,
    firebaseToken: string,
    deviceId: string = '',
): RequestAction<loginFirebaseRoot> => ({
    type: POST_LOGIN_FIREBASE,
    // request: {
    //   url: '/login-firebase',
    //   method: 'post',
    //   params: {langCode: langCode()},
    //   data: {phone, device_key: deviceId, firebaseToken},
    // },
    request: {
        query: gql`
            mutation ($email: String, $phone: String, $firebaseToken: String!, $deviceId: String) {
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
                    }
                    accessToken
                }
            }
        `,
        variables: {phone, email, deviceId, firebaseToken, langCode: langCode()},
    },
    meta: {
        driver: 'graphql',
    },
});
export const POST_LOGIN_FIREBASE_EMAIL = 'POST_LOGIN_FIREBASE_EMAIL';
export const postLoginFirebaseByEmail = (email: string, firebaseToken: string): RequestAction<loginFirebaseRoot> => ({
    type: POST_LOGIN_FIREBASE,
    request: {
        url: '/login-firebase',
        method: 'post',
        params: {langCode: langCode()},
        data: {email, firebaseToken},
    },
});

export const POST_OTP = 'POST_OTP';
export const postOtp = (phone: number, otp: number): RequestAction => ({
    type: POST_LOGIN,
    request: {
        url: '/otp',
        method: 'post',
        params: {langCode: langCode()},
        data: {phone, otp},
    },
});

export const POST_REGISTER = 'POST_REGISTER';
export const postRegister = (phone: number, otp: number): RequestAction => ({
    type: POST_REGISTER,
    request: {
        url: '/register',
        method: 'post',
        params: {langCode: langCode()},
        data: {phone, otp},
    },
});

export const FETCH_VENDOR_FILTERS = 'FETCH_VENDOR_FILTERS';
export const fetchVendorFilters = (vendorId: number): RequestAction<filters.RootObject> => ({
    type: FETCH_VENDOR_FILTERS,
    request: {
        // url: `/get-filters/${vendorId}`,
        // params: {langCode: langCode()},
        query: gql`
            query ($vendorId: Int, $langCode: String!) {
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
        variables: {vendorId, langCode: langCode()},
    },
    meta: {driver: 'graphql'},
});
export const FETCH_STOCK_FILTERS = 'FETCH_STOCK_FILTERS';
export const fetchStockFilters = (vendorId: number): RequestAction<filters.RootObject> => ({
    type: FETCH_STOCK_FILTERS,
    request: {
        // url: `/get-filters/${vendorId}`,
        // params: {langCode: langCode()},
        query: gql`
            query ($vendorId: Int, $langCode: String!) {
                rows: stockFilters(vendorId: $vendorId, langCode: $langCode) {
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
        variables: {vendorId, langCode: langCode()},
    },
    meta: {driver: 'graphql'},
});

export const FETCH_CARGOS_CODES = 'FETCH_CARGOS_CODES';
export const fetchCargosCodes = (): RequestAction => ({
    type: FETCH_CARGOS_CODES,
    request: {
        url: '/cargos-codes',
        params: {langCode: langCode()},
    },
    meta: {onRequest},
});

export const FETCH_CARGOS = 'FETCH_CARGOS';
export const fetchCargos = (countryCode: string): RequestAction => ({
    type: FETCH_CARGOS,
    request: {
        url: `/cargos-by-country/${countryCode}`,
        params: {langCode: langCode()},
        // params: {langCode: langCode(), countryCode},
    },
    // meta: {onRequest},
});

export const FETCH_ADDRESSES = 'FETCH_ADDRESSES';
export const fetchAddresses = (): RequestAction<AddressesRootObject> => ({
    type: FETCH_ADDRESSES,
    request: {
        query: gql`
            query {
                rows: shipmentadrs {
                    ...ShipmentadrFragment
                }
            }
            ${ShipmentadrFragment}
        `,
        variables: {langCode: langCode()},
    },
    meta: {
        driver: 'graphql',
        onRequest,
    },
});

export const FETCH_COUPONS = 'FETCH_COUPONS';
export const fetchCoupons = (): RequestAction<couponsRootObject> => ({
    type: FETCH_COUPONS,
    request: {
        // url: '/coupons',
        // params: {langCode: langCode()},
        query: gql`
            query ($clientId: Int!) {
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
            langCode: langCode(),
            clientId: store.getState().auth.id,
        },
    },
    meta: {
        driver: 'graphql',
        onRequest,
    },
});

export const FETCH_COUPONS_BY_USER = 'FETCH_COUPONS_BY_USER';
export const fetchCouponsByUser = (userId: number): RequestAction => ({
    type: FETCH_COUPONS_BY_USER,
    request: {
        url: '/coupons',
        params: {userId, langCode: langCode()},
    },
    meta: {onRequest},
});

export const UPLOAD_AVATAR = 'UPLOAD_AVATAR';
export const uploadAvatar = (userId: number, files: any): RequestAction => ({
    type: UPLOAD_AVATAR,
    request: {
        // url: '/upload-files',
        // method: 'post',
        // params: {
        //   rowId: userId,
        //   type: 'user',
        //   langCode: langCode(),
        // },
        // data: files,
        // 'Content-Type': 'multipart/form-data',
        // query: gql`
        //   mutation($files: [Upload!]!) {
        //     multipleUpload(files:$files) {
        //       filename
        //       mimetype
        //       encoding
        //     }
        //   }
        // `,
        query: gql`
            mutation ($file: Upload, $type: String!) {
                row: singleUpload(file: $file, type: $type) {
                    filename
                }
            }
        `,
        variables: {
            file: files,
            type: 'user',
            langCode: langCode(),
        },
        // variables:{
        //   userId,
        //   files
        // }
    },
    meta: {
        driver: 'graphql',
        onRequest: (request: any, requestAction: any, store) => {
            const token = store.getState().auth.token;

            if (token) {
                return {
                    ...request,
                    headers: {
                        ...request.headers,
                        // 'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                };
            }

            return request;
        },
    },
});

export const UPLOAD_FILE = 'UPLOAD_FILE';
export const uploadFile = (
    rowId: number,
    files: any,
    type: 'user' | 'product' | 'product_category' | 'payment',
): RequestAction => ({
    type: UPLOAD_FILE,
    request: {
        // url: '/upload-files',
        // method: 'post',
        // params: {
        //   rowId: userId,
        //   type,
        //   langCode: langCode(),
        // },
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
        // data: files,
        // 'Content-Type': 'multipart/form-data',
    },
    meta: {
        driver: 'graphql',
        onRequest: (request: any, requestAction: any, store) => {
            const token = store.getState().auth.token;

            if (token) {
                return {
                    ...request,
                    headers: {
                        ...request.headers,
                        // 'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                };
            }

            return request;
        },
    },
});

export const CHECK_COUPON = 'CHECK_COUPON';
export const checkCoupon = (couponCode: string): RequestAction => ({
    type: CHECK_COUPON,
    request: {
        // url: '/coupon-info',
        // method: 'get',
        // params: {couponCode, userId, langCode: langCode()},
        query: gql`
            query ($couponCode: String) {
                rows: couponCheck(where: {couponCode: {equals: $couponCode}}) {
                    id
                    couponValue
                    maximumAmount
                    minimumValueToBeApplied
                }
            }
        `,
        variables: {couponCode, langCode: langCode()},
    },
    meta: {
        driver: 'graphql',
        onRequest,
    },
});

export const CREATE_COURIER = 'CREATE_COURIER';
export const createCourier = (data): RequestAction => ({
    type: CREATE_COURIER,
    request: {
        url: '/couriers',
        method: 'post',
        params: {langCode: langCode()},
        data,
    },
    meta: {
        onRequest,
        onSuccess: (response, requestAction, store) => {
            store.dispatch(fetchCouriers());
            return response;
        },
    },
});

export const UPDATE_COURIER = 'UPDATE_COURIER';
export const updateCourier = (data: CourierType): RequestAction => ({
    type: UPDATE_COURIER,
    request: {
        url: `/couriers/${data.id}`,
        method: 'put',
        params: {langCode: langCode()},
        data,
    },
    meta: {
        onRequest,
        onSuccess: (response, requestAction, store) => {
            store.dispatch(fetchCouriers());
            return response;
        },
    },
});

export const FETCH_COURIERS = 'FETCH_COURIERS';
export const fetchCouriers = (): RequestAction<couriersRootObject> => ({
    type: FETCH_COURIERS,
    request: {
        url: '/couriers-by-user',
        params: {langCode: langCode()},
    },
    meta: {
        onRequest,
    },
});

export const DELETE_COURIER = 'DELETE_COURIER';
export const deleteCourier = (id: number): RequestAction => {
    return {
        type: DELETE_COURIER,
        request: {
            url: `/couriers/${id}`,
            method: 'delete',
            params: {langCode: langCode()},
        },
        meta: {
            onRequest,
            onSuccess: (response, requestAction, store) => {
                store.dispatch(fetchCouriers());
                return response;
            },
        },
    };
};

// adrs: "none"
//  apartment: "23"
//  cityId: 378388
//  countryCode: "TR"
//  firstName: "Test"
//  lastName: "Test"
//  postalCode: "32"
//  receiverMobile: "+9044444"
//  receiverMobile2: 0
//  region: "234"
//  road: "234"
//  stateId: []
//  userId: 3876

const ShipmentadrFragment = gql`
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
            titleEN
        }
    }
`;

export const CREATE_ADDRESS = 'CREATE_ADDRESS';
export const createAddress = (values: object): RequestAction => {
    return {
        type: CREATE_ADDRESS,
        request: {
            query: gql`
                mutation (
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
                ${ShipmentadrFragment}
            `,
            variables: {...values, langCode: langCode()},
        },
        // request: {
        //   url: '/shipmentadrs',
        //   method: 'post',
        //   params: {langCode: langCode()},
        //   data: values,
        // },
        meta: {
            driver: 'graphql',
            onRequest,
            onSuccess: (response, requestAction, store) => {
                store.dispatch(fetchAddresses());
                return response;
            },
        },
    };
};

export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const updateAddress = (values: object): RequestAction => {
    return {
        type: UPDATE_ADDRESS,
        request: {
            // url: `/shipmentadrs/${values.id}`,
            // method: 'put',
            // params: {langCode: langCode()},
            // data: values,
            query: gql`
                mutation (
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
                ${ShipmentadrFragment}
            `,
            variables: {...values, langCode: langCode()},
        },
        meta: {
            driver: 'graphql',
            onRequest,
            onSuccess: (response, requestAction, store) => {
                store.dispatch(fetchAddresses());
                return response;
            },
        },
    };
};
export const DELETE_ADDRESS = 'DELETE_ADDRESS';
export const deleteAddress = (id: number): RequestAction => {
    return {
        type: DELETE_ADDRESS,
        request: {
            // url: `/shipmentadrs/${id}`,
            // method: 'delete',
            // params: {langCode: langCode()},
            query: gql`
                mutation ($id: Int!) {
                    deleteOneShipmentadr(where: {id: $id}) {
                        id
                    }
                }
            `,
            variables: {id},
        },
        meta: {
            driver: 'graphql',
            onRequest,
            onSuccess: (response, requestAction, store) => {
                store.dispatch(fetchAddresses());
                return response;
            },
        },
    };
};

export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = (values: object): RequestAction => {
    return {
        type: UPDATE_USER,
        request: {
            // url: `/users/${values.id}`,
            // method: 'put',
            // params: {langCode: langCode()},
            // data: values,
            query: gql`
                mutation (
                    $id: Int!
                    $countryId: Int
                    $preferredCurrency: String
                    $contactLang: String
                    $firstName: String
                    $lastName: String
                    $phone: String
                ) {
                    row: updateOneUser(
                        where: {id: $id}
                        data: {
                            countryId: {set: $countryId}
                            preferredCurrency: {set: $preferredCurrency}
                            contactLang: {set: $contactLang}
                            firstName: {set: $firstName}
                            lastName: {set: $lastName}
                            phone: {set: $phone}
                        }
                    ) {
                        id
                    }
                }
            `,
            variables: {...values, langCode: langCode()},
        },
        meta: {
            driver: 'graphql',
            onRequest,
            onError: (error, requestAction, store) => {
                return error.response;
            },
        },
    };
};

export const UPDATE_CARGO_CODE = 'UPDATE_CARGO_CODE';
export const updateCargoCode = (values: object): RequestAction => {
    return {
        type: UPDATE_CARGO_CODE,
        request: {
            url: `/cargo-code/${values.id}`,
            method: 'put',
            params: {langCode: langCode()},
            data: values,
        },
        meta: {
            onRequest,
            onSuccess: (response, requestAction, store) => {
                store.dispatch(fetchCargoCode());
                return response;
            },
        },
    };
};
export const FETCH_CITIES = 'FETCH_CITIES';
export const fetchCities = (countryCode: string): RequestAction => ({
    type: FETCH_CITIES,
    request: {
        url: `/country-cities/${countryCode}`,
        params: {langCode: langCode()},
    },
});

export const CREATE_CARD = 'CREATE_CARD';
export const createCard = (values: object): RequestAction => ({
    type: CREATE_CARD,
    request: {
        url: '/bank-cards',
        method: 'post',
        params: {langCode: langCode()},
        data: values,
    },
    meta: {
        onRequest,
        onSuccess: (response, requestAction, store) => {
            store.dispatch(fetchCards());
            return response;
        },
    },
});
export const DELETE_CARD = 'DELETE_CARD';
export const deleteCard = (id: number): RequestAction => ({
    type: DELETE_CARD,
    request: {
        url: `/bank-cards/${id}`,
        method: 'delete',
        params: {langCode: langCode()},
    },
    meta: {
        onRequest,
        onSuccess: (response, requestAction, store) => {
            store.dispatch(fetchCards());
            return response;
        },
    },
});

export const UPDATE_SETTING = 'UPDATE_SETTING';
export const updateSetting = (id: number, name: string, value: any): RequestAction => ({
    type: UPDATE_SETTING,
    request: {
        url: '/update_setting',
        method: 'post',
        params: {langCode: langCode()},
        data: {id, name, value},
    },
});

const QuotationFragment = gql`
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
`;

export const FETCH_QUOTATIONS = 'FETCH_QUOTATIONS';
export const fetchQuotations = (data: object): RequestAction<quotations.RootObject> => ({
    type: FETCH_QUOTATIONS,
    request: {
        // url: '/quotations',
        // params: {...data, langCode: langCode()},
        query: gql`
            query ($langCode: String) {
                rows: quotations {
                    ...QuotationFragment
                }
            }
            ${QuotationFragment}
        `,
        variables: {...data, langCode: langCode()},
    },
    meta: {driver: 'graphql', onRequest},
});

export const CREATE_QUTATION = 'CREATE_QUTATION';
export const createQutation = (data: object): RequestAction<{success: boolean; rowId: number}> => ({
    type: CREATE_QUTATION,
    request: {
        // url: '/quotations',
        // method: 'post',
        // params: {langCode: langCode()},
        // data,
        query: gql`
            mutation (
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
            ${QuotationFragment}
        `,
        variables: {...data, langCode: langCode()},
    },
    meta: {
        driver: 'graphql',
        onRequest,
        onSuccess: (response, requestAction, store) => {
            store.dispatch(fetchQuotations());
            return response;
        },
    },
});

export const FETCH_USER_TRANSFER_LOGS = 'FETCH_USER_TRANSFER_LOGS';
export const fetchUserTransferLogs = (userId: number, offset: number, limit: number): RequestAction => ({
    type: FETCH_USER_TRANSFER_LOGS,
    request: {
        url: '/users-transfers',
        params: {
            transferedFrom: userId,
            offset,
            limit,
            langCode: langCode(),
        },
    },
    meta: {onRequest},
});

export const FETCH_CARDS = 'FETCH_CARDS';
export const fetchCards = (userId: number): RequestAction => ({
    type: FETCH_CARDS,
    request: {
        url: '/bank-cards',
        // url: '/bank-cards',
        params: {userId, langCode: langCode()},
    },
    meta: {onRequest},
});

export const UPDATE_CARD = 'UPDATE_CARD';
export const updateCard = (data: CourierType): RequestAction => ({
    type: UPDATE_CARD,
    request: {
        url: `/bank-cards/${data.id}`,
        method: 'put',
        params: {langCode: langCode()},
        data,
    },
    meta: {
        onRequest,
        onSuccess: (response, requestAction, store) => {
            store.dispatch(fetchCards());
            return response;
        },
    },
});

export const ADD_CREDIT = 'ADD_CREDIT';
export const addCredit = (data: object): RequestAction => ({
    type: ADD_CREDIT,
    request: {
        url: '/charge-account',
        method: 'post',
        params: {langCode: langCode()},
        data,
    },
    meta: {onRequest},
});

export const TRANSFER_MONEY = 'TRANSFER_MONEY';
export const transferMoney = (data: object): RequestAction => ({
    type: TRANSFER_MONEY,
    request: {
        url: '/users-transfers',
        method: 'post',
        params: {langCode: langCode()},
        data,
    },
    meta: {onRequest},
});
export const FETCH_TOTAL_TRANSFERED_FROM = 'FETCH_TOTAL_TRANSFERED_FROM';
export const fetchTotalTransferedFrom = (userId: number): RequestAction => ({
    type: FETCH_TOTAL_TRANSFERED_FROM,
    request: {
        url: '/get-total-transfered',
        params: {userId, Way: 'from', langCode: langCode()},
    },
    meta: {onRequest},
});
export const FETCH_TOTAL_TRANSFERED_TO = 'FETCH_TOTAL_TRANSFERED_TO';
export const fetchTotalTransferedTo = (userId: number): RequestAction => ({
    type: FETCH_TOTAL_TRANSFERED_TO,
    request: {
        url: '/get-total-transfered',
        params: {userId, Way: 'to', langCode: langCode()},
    },
    meta: {onRequest},
});

export const GET_PRODUCT_DISCOUNT = 'GET_PRODUCT_DISCOUNT';
export const getProductDiscount = (vendorId: number, quantity: number): RequestAction => ({
    type: GET_PRODUCT_DISCOUNT,
    request: {
        url: '/get-product-price',
        params: {userId: vendorId, quantity, langCode: langCode()},
    },
});

export const CREATE_FAVOURITES = 'CREATE_FAVOURITES';
export const createFavourites = (data): RequestAction => ({
    type: CREATE_FAVOURITES,
    request: {
        // url: '/users-favourites',
        // method: 'post',
        // params: {langCode: langCode()},
        // data,
        query: gql`
            mutation ($productId: Int!) {
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
        onRequest,
        // onSuccess: (response, requestAction, store) => {
        //   store.dispatch(fetchFavourites());
        //   return response;
        // },
    },
});

export const DELETE_FAVOURITES = 'DELETE_FAVOURITES';
export const deleteFavourites = (id: number): RequestAction => {
    return {
        type: DELETE_FAVOURITES,
        request: {
            // url: `/users-favourites/${id}`,
            // method: 'delete',
            // params: {langCode: langCode()},
            query: gql`
                mutation ($productId: Int!) {
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
            onRequest,
            // onSuccess: (response, requestAction, store) => {
            //   store.dispatch(fetchFavourites());
            //   return response;
            // },
        },
    };
};

export const FETCH_FAVOURITES = 'FETCH_FAVOURITES';
export const fetchFavourites = (): RequestAction<couriersRootObject> => ({
    type: FETCH_FAVOURITES,
    request: {
        url: '/favourites-by-user',
        params: {langCode: langCode()},
    },
    meta: {
        // driver:'graphql'
        onRequest,
    },
});
//create
//remove

//users-favourites
//user-favourites
