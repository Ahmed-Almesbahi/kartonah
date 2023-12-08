import Tools from '../../utils/Tools';

/** @format */

const types = {
    ADD_CART_ITEM: 'ADD_CART_ITEM',
    ADD_VENDOR_ITEM: 'ADD_VENDOR_ITEM',
    REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
    REMOVE_VENDOR_ITEM: 'REMOVE_VENDOR_ITEM',
    DELETE_CART_ITEM: 'DELETE_CART_ITEM',
    EMPTY_VENDOR: 'EMPTY_VENDOR',
    EMPTY_CART: 'EMPTY_CART',
    ADD_COUPON: 'ADD_COUPON',
    REMOVE_COUPON: 'REMOVE_COUPON',
    SET_NOTES: 'SET_NOTES',
    SET_CARD: 'SET_CARD',
    CREATE_NEW_ORDER_CART: 'CREATE_NEW_ORDER_CART',
    CREATE_NEW_ORDER_SUCCESS: 'CREATE_NEW_ORDER_SUCCESS',
    CREATE_NEW_ORDER_ERROR: 'CREATE_NEW_ORDER_ERROR',
    VALIDATE_CUSTOMER_INFO: 'VALIDATE_CUSTOMER_INFO',
    INVALIDATE_CUSTOMER_INFO: 'INVALIDATE_CUSTOMER_INFO',
    FETCH_MY_ORDER: 'FETCH_MY_ORDER',
    FETCH_CART_PENDING: 'FETCH_CART_PENDING',
    GET_SHIPPING_METHOD_PENDING: 'GET_SHIPPING_METHOD_PENDING',
    GET_SHIPPING_METHOD_SUCCESS: 'GET_SHIPPING_METHOD_SUCCESS',
    GET_SHIPPING_METHOD_FAIL: 'GET_SHIPPING_METHOD_FAIL',
    SELECTED_SHIPPING_METHOD: 'SELECTED_SHIPPING_METHOD',
    GET_ORDER_NOTES_PENDING: 'GET_ORDER_NOTES_PENDING',
    GET_ORDER_NOTES_SUCCESS: 'GET_ORDER_NOTES_SUCCESS',
    GET_ORDER_NOTES_FAIL: 'GET_ORDER_NOTES_FAIL',
    RESET_CART: 'RESET_CART',
    UPDATE_STATUS: 'UPDATE_STATUS',
    COMPLETE_ORDER: 'COMPLETE_ORDER',
};

export const actions = {
    addCartItem: (dispatch, product, variation) => {
        // let discount = await getProductDiscount(product.vendorId, product.quantity);

        // dispatch({
        //   type: types.ADD_VENDOR_ITEM,
        //   vendorId: product.vendorId,
        //   quantity: product.quantity,
        //   discount: getDiscount(product.vendorId),
        // });

        dispatch({
            type: types.ADD_CART_ITEM,
            product,
            variation,
        });
    },
    addVendor: async (dispatch, product, variation) => {
        dispatch({
            type: types.ADD_CART_ITEM,
            product,
            variation,
        });
    },

    fetchMyOrder: (dispatch, user) => {
        dispatch({type: types.FETCH_CART_PENDING});

        // WooWorker.ordersByCustomerId(user.id, 40, 1)
        //   .then((data) => {
        //     dispatch({
        //       type: types.FETCH_MY_ORDER,
        //       data,
        //     });
        //   })
        //   .catch((err) => {});
    },

    removeCartItem: (dispatch, product, variation) => {
        dispatch({
            type: types.REMOVE_CART_ITEM,
            product,
            variation,
        });
    },

    deleteCartItem: (dispatch, product, variation, quantity) => {
        dispatch({
            type: types.DELETE_CART_ITEM,
            product,
            variation,
            quantity,
        });
    },
    addCoupon: (dispatch, data) => {
        dispatch({
            type: types.ADD_COUPON,
            data,
        });
    },
    completeOrder: (dispatch) => {
        dispatch({
            type: types.COMPLETE_ORDER,
        });
    },
    removeCoupon: (dispatch) => {
        dispatch({
            type: types.REMOVE_COUPON,
        });
    },
    updateStatus: (dispatch, product, variation, status) => {
        dispatch({
            type: types.UPDATE_STATUS,
            product,
            variation,
            status,
        });
    },
    emptyVendor: (dispatch, vendorId) => {
        dispatch({
            type: types.EMPTY_VENDOR,
            vendorId,
        });
    },
    emptyCart: (dispatch) => {
        dispatch({
            type: types.EMPTY_CART,
        });
    },
    resetCart: (dispatch) => {
        dispatch({
            type: types.RESET_CART,
        });
    },
    createNewOrderCart: (dispatch, id: number) => {
        dispatch({type: types.CREATE_NEW_ORDER_CART, id});
    },
    setNotes: (dispatch, notes: 'string') => {
        dispatch({type: types.SET_NOTES, notes});
    },
    setCard: (dispatch, cardId: number) => {
        dispatch({type: types.SET_CARD, cardId});
    },
    selectShippingMethod: (dispatch, shippingMethod: 'shipmentAdrsId' | 'courierId', id: number) => {
        dispatch({type: types.SELECTED_SHIPPING_METHOD, shippingMethod, id});
    },

    finishOrder: async (dispatch, payload) => {
        dispatch({type: types.CREATE_NEW_ORDER_SUCCESS});
    },
};

const initialState = {
    id: 0, // order id
    cartItems: [],
    vendors: [],
    notes: '',
    couponId: 0,
    couponDiscount: 0, // Discount in percentage
    shipmentAdrsId: 0, // Shipping Address ID
    courierId: 0, // Courier ID
    total: 0,
    totalPrice: 0,
    myOrders: [],
    isFetching: false,
};

// const updateVendorsQuantity = (vendors) => {
//   let x = [];
//   state.cartItems.map((item) => {
//     x[item.product.vendorId] = x[item.product.vendorId]?x[item.product.vendorId]+item.product.quantity:item.product.quantity;
//   });
// };

export const reducer = (state = initialState, action) => {
    const {type} = action;

    switch (type) {
        case types.ADD_CART_ITEM: {
            const isExisted = state.cartItems.some((cartItem) => compareCartItem(cartItem, action));

            const isVendorExisted = state.vendors.some((v) => v.id == action.product.vendorId);

            return Object.assign(
                {},
                state,
                isExisted
                    ? {cartItems: state.cartItems.map((item) => cartItem(item, action))}
                    : {cartItems: [...state.cartItems, cartItem(undefined, action)]},
                isVendorExisted
                    ? {vendors: state.vendors.map((item) => vendorItem(item, action))}
                    : {vendors: [...state.vendors, vendorItem(undefined, action)]},
                {
                    total: state.total + 1,
                    totalPrice: state.totalPrice + getPrice(action),
                },
            );
        }
        case types.REMOVE_CART_ITEM: {
            const index = state.cartItems.findIndex((cartItem) => compareCartItem(cartItem, action)); // check if existed

            const VendorIndex = state.vendors.findIndex((v) => v.id == action.product.vendorId);

            // console.log(
            //   'copare',
            //   `${state.cartItems[index]?.quantity} <=
            // ${state.cartItems[index]?.product.quantityStep}`,
            // );
            // console.log(
            //   'first',
            //   state.cartItems.filter(
            //     (cartItem) => !compareCartItem(cartItem, action),
            //   ),
            // );
            // console.log(
            //   'second',
            //   state.cartItems.map((item) => cartItem(item, action)),
            // );

            return index == -1
                ? state // This should not happen, but catch anyway
                : Object.assign(
                      {},
                      state,
                      state.cartItems[index]?.quantity <= state.cartItems[index]?.product.quantityStep
                          ? {
                                cartItems: state.cartItems.filter((cartItem) => !compareCartItem(cartItem, action)),
                            }
                          : {
                                cartItems: state.cartItems.map((item) => cartItem(item, action)),
                            },
                      state.vendors[VendorIndex]?.quantity == 1
                          ? {
                                vendors: state.vendors.filter((v) => v.id != action.product.vendorId),
                            }
                          : {
                                vendors: state.vendors.map((item) => vendorItem(item, action)),
                            },
                      {
                          total: state.total - 1,
                          totalPrice: state.totalPrice - getPrice(action),
                      },
                  );
        }
        case types.DELETE_CART_ITEM: {
            const index1 = state.cartItems.findIndex((cartItem) => compareCartItem(cartItem, action)); // check if existed

            let newItems = state.cartItems.filter((cartItem) => !compareCartItem(cartItem, action));

            let venderHasItems = newItems.filter((cartItem) => action.product.vendorId == cartItem.product.vendorId);

            return index1 == -1
                ? state // This should not happen, but catch anyway
                : Object.assign({}, state, {
                      cartItems: newItems,
                      vendors:
                          venderHasItems.length > 0
                              ? state.vendors.map((item) => vendorItem(item, action))
                              : state.vendors.filter((v) => v.id != action.product.vendorId),
                      total: state.total - Number(action.quantity),
                      totalPrice: state.totalPrice - Number(action.quantity) * getPrice(action),
                  });
        }
        case types.UPDATE_STATUS: {
            return Object.assign({}, state, {
                cartItems: state.cartItems.map((item) => cartItem(item, action)),
            });
        }
        case types.ADD_COUPON:
            return Object.assign({}, state, {
                couponId: action.data.couponId,
                couponDiscount: action.data.couponDiscount,
                maximumAmount: action.data?.maximumAmount,
                minimumValueToBeApplied: action.data?.minimumValueToBeApplied,
            });
        case types.CREATE_NEW_ORDER_CART:
            return Object.assign({}, state, {
                id: action.id,
            });
        case types.REMOVE_COUPON:
            return Object.assign({}, state, {
                couponId: 0,
                couponDiscount: 0,
            });
        case types.EMPTY_VENDOR:
            return Object.assign({}, state, {
                cartItems: state.cartItems.filter((ct) => ct.product.vendorId != action.vendorId),
                vendors: state.vendors.filter((v) => v.id != action.vendorId),
            });
        case types.EMPTY_CART:
            return Object.assign({}, state, {
                type: types.EMPTY_CART,
                cartItems: [],
                vendors: [],
                total: 0,
                id: 0,
                totalPrice: 0,
            });
        case types.RESET_CART:
            return Object.assign({}, initialState);
        case types.COMPLETE_ORDER:
            let vendors: Array<number> = [];
            state.cartItems.map((c) => {
                if (c.status == 0) {
                    vendors.push(c.product.vendorId);
                }
            });

            return Object.assign({}, state, {
                cartItems: state.cartItems.filter((c) => c.status == 0),
                vendors: state.vendors.filter((c) => vendors.includes(c.id)),
                notes: '',
                id: 0,
                couponId: 0,
                couponDiscount: 0, // Discount in percentage
                shipmentAdrsId: 0, // Shipping Address ID
                courierId: 0, // Courier ID
                total: 0,
                totalPrice: 0,
                myOrders: [],
                isFetching: false,
            });
        case types.INVALIDATE_CUSTOMER_INFO:
            return Object.assign({}, state, {
                message: action.message,
                type: types.INVALIDATE_CUSTOMER_INFO,
            });
        case types.VALIDATE_CUSTOMER_INFO:
            return Object.assign({}, state, {
                message: null,
                type: types.VALIDATE_CUSTOMER_INFO,
                customerInfo: action.customerInfo,
            });
        case types.CREATE_NEW_ORDER_SUCCESS:
            return Object.assign({}, state, {
                type: types.CREATE_NEW_ORDER_SUCCESS,
                cartItems: [],
                total: 0,
                totalPrice: 0,
            });
        case types.CREATE_NEW_ORDER_ERROR:
            return Object.assign({}, state, {
                type: types.CREATE_NEW_ORDER_ERROR,
                message: action.message,
            });
        case types.FETCH_MY_ORDER:
            return Object.assign({}, state, {
                type: types.FETCH_MY_ORDER,
                isFetching: false,
                myOrders: action.data,
            });
        case types.FETCH_CART_PENDING: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case types.GET_SHIPPING_METHOD_PENDING:
        case types.GET_ORDER_NOTES_PENDING: {
            return Object.assign({}, state, {
                ...state,
                isFetching: true,
                error: null,
            });
        }
        case types.GET_SHIPPING_METHOD_FAIL:
        case types.GET_ORDER_NOTES_FAIL: {
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error,
            });
        }
        case types.GET_SHIPPING_METHOD_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                shippings: action.shippings,
                error: null,
            });
        }
        case types.GET_ORDER_NOTES_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                orderNotes: action.orderNotes,
                error: null,
            });
        }
        case types.SELECTED_SHIPPING_METHOD: {
            return Object.assign(
                {},
                state,
                action.shippingMethod == 'shipmentAdrsId'
                    ? {
                          ...state,
                          courierId: 0,
                          shipmentAdrsId: action.id,
                      }
                    : {...state, courierId: action.id, shipmentAdrsId: 0},
            );
        }
        case types.SET_NOTES: {
            return Object.assign({}, state, {
                ...state,
                notes: action.notes,
            });
        }
        case types.SET_CARD: {
            return Object.assign({}, state, {
                ...state,
                notes: action.cardId,
            });
        }
        default: {
            return state;
        }
    }
};

const compareCartItem = (cartItem, action) => {
    // warn(action.variation);
    if (action.variation) {
        if (cartItem.variation) {
            return cartItem.product.id === action.product.id && cartItem.variation.id === action.variation.id;
        }
        return false;
    }

    return cartItem.product.id === action.product.id;
};
const compareVendor = (vendor, action) => {
    return vendor.id === action.product.vendorId;
};

const cartItem = (state = {product: undefined, quantity: 1, variation: undefined}, action) => {
    switch (action.type) {
        case types.ADD_CART_ITEM:
            return state.product === undefined
                ? Object.assign({}, state, {
                      product: action.product,
                      quantity: action.product.quantityStep,
                      status: 1,
                      variation: action.variation,
                  })
                : !compareCartItem(state, action)
                ? state
                : Object.assign({}, state, {
                      quantity: state.quantity + action.product.quantityStep,
                  });

        case types.REMOVE_CART_ITEM:
            return !compareCartItem(state, action)
                ? state
                : Object.assign({}, state, {
                      quantity: state.quantity - action.product.quantityStep,
                  });
        case types.UPDATE_STATUS:
            return !compareCartItem(state, action)
                ? state
                : Object.assign({}, state, {
                      status: action.status,
                  });
        default:
            return state;
    }
};
const vendorItem = (state = {id: undefined, quantity: 1, discount: 0}, action) => {
    switch (action.type) {
        case types.ADD_CART_ITEM:
            return state.id === undefined
                ? Object.assign({}, state, {
                      id: action.product.vendorId,
                      discount: 0,
                      quantity: 1,
                      brandName: action.product.brandName,
                      taxRate: action.product.taxRate,
                      minBill: action.variation.minBill,
                  })
                : !compareVendor(state, action)
                ? state
                : Object.assign({}, state, {
                      quantity: state.quantity + 1,
                  });
        case types.REMOVE_CART_ITEM:
            return !compareVendor(state, action) ? state : Object.assign({}, state, {quantity: state.quantity - 1});
        default:
            return state;
    }
};

// get price from variation or product and format
function getPrice(action) {
    return Number(
        action.variation === undefined ||
            action.variation == null ||
            action.variation.price === undefined ||
            action.variation.price === ''
            ? Tools.getPriceIncluedTaxAmount(action.product, null, true)
            : Tools.getPriceIncluedTaxAmount(action.variation, null, true),
    );
}

export default reducer;
