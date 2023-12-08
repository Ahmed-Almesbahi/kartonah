import {WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM} from '../reducers/fav';

export function wishlistAddItem(product) {
  return {
    type: WISHLIST_ADD_ITEM,
    product,
  };
}

export function wishlistRemoveItem(productId) {
  return {
    type: WISHLIST_REMOVE_ITEM,
    productId,
  };
}
