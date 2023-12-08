import {
    initialFilterState,
    RESET_PRODUCT_FILTER,
    SET_PRODUCT_FILTER_OPTIONS,
    SET_PRODUCT_FILTER_OPTION,
} from '../actions/filter';
import {AnyAction} from 'redux';

const initialState = {
    ...initialFilterState,
};

const reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_PRODUCT_FILTER_OPTION:
            return {
                ...state,
                [action.key]: action.value,
            };
        case SET_PRODUCT_FILTER_OPTIONS:
            return {
                ...state,
                ...action.data,
            };
        case RESET_PRODUCT_FILTER: {
            return initialState;
        }
        default:
            return state;
    }
};

export default reducer;
