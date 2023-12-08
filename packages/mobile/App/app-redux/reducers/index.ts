import {combineReducers} from 'redux';
import auth from './auth';
import cart from './cart';
import fav from './fav';
import general from './general';
import toast from './toast';
import productFilter from './productFilter';
import stockFilter from './stockFilter';
import searchFilter from './searchFilter';
import searchStockFilter from './searchStockFilter';
import {requestsReducer} from 'app-redux/reduxRequests';

export default combineReducers({
    auth,
    cart,
    fav,
    general,
    toast,
    productFilter,
    searchFilter,
    stockFilter,
    searchStockFilter,
    requests: requestsReducer,
});
