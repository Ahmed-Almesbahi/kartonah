import {
    initialFilterState,
    RESET_STOCK_FILTER,
    SET_STOCK_FILTER_OPTION,
    SET_STOCK_FILTER_OPTIONS,
} from '../actions/filter';
import {AnyAction} from 'redux';

const initialState = {
    ...initialFilterState,
};

const reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_STOCK_FILTER_OPTION:
            return {
                ...state,
                [action.key]: action.value,
            };
        case SET_STOCK_FILTER_OPTIONS:
            return {
                ...state,
                ...action.data,
            };
        case RESET_STOCK_FILTER: {
            return initialState;
        }
        default:
            return state;
    }
};

export default reducer;
