export const WISHLIST_ADD_ITEM = 'WISHLIST_ADD_ITEM';
export const WISHLIST_REMOVE_ITEM = 'WISHLIST_REMOVE_ITEM';

function addItem(state, product) {
    const itemIndex = state.items?.findIndex((x) => x.id === product.id);

    if (itemIndex === -1) {
        return {...state, items: [...state.items, JSON.parse(JSON.stringify(product))]};
    }

    return state;
}

const initialState = {
    items: [],
};

export default function wishlistReducer(state = initialState, action) {
    switch (action.type) {
        case WISHLIST_ADD_ITEM:
            return addItem(state, action.product);

        case WISHLIST_REMOVE_ITEM:
            return {...state, items: state.items.filter((x) => x.id !== action.productId) || []};

        default:
            return state;
        // return initialState;
    }
}
