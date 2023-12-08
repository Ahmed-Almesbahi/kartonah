import {
  initialFilterState,
  RESET_SEARCH_STOCK_FILTER,
  SET_SEARCH_STOCK_FILTER_OPTION,
  SET_SEARCH_STOCK_FILTER_OPTIONS,
} from 'app-redux/actions/filter';
import {AnyAction} from 'redux';

const initialState = {
  ...initialFilterState,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_SEARCH_STOCK_FILTER_OPTION:
      return {
        ...state,
        [action.key]: action.value,
      };
    case SET_SEARCH_STOCK_FILTER_OPTIONS:
      return {
        ...state,
        ...action.data,
      };
    case RESET_SEARCH_STOCK_FILTER: {
      return {...initialState, search: state.search};
    }
    default:
      return state;
  }
};

export default reducer;
