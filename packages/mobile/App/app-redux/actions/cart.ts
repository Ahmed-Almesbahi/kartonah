import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_QUANTITIES,
} from '../reducers/cart';

export function cartAddItem(product, options = [], quantity = 1) {
  return {
    type: CART_ADD_ITEM,
    product,
    options,
    quantity,
  };
}

export function cartRemoveItem(itemId: number) {
  return {
    type: CART_REMOVE_ITEM,
    itemId,
  };
}

export function cartUpdateQuantities(quantities: number) {
  return {
    type: CART_UPDATE_QUANTITIES,
    quantities,
  };
}
