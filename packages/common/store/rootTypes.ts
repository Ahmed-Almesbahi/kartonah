import favReducer from './reducers/fav';
import authReducer from './reducers/auth';
import generalReducer from './reducers/general';
import productFilterReducer from './reducers/productFilter';
import searchFilterReducer from './reducers/searchFilter';
import stockFilterReducer from './reducers/stockFilter';
import cartReducer from './reducers/cart';
import {Action} from 'redux';

type AppReducer<T extends object, A extends Action = Action> = (state: T, action: A) => T;
type AppReducerStateType<T extends AppReducer<any, any>> = T extends AppReducer<infer R, any> ? R : any;

export interface CommonRootState {
    stockFilter: AppReducerStateType<typeof stockFilterReducer>;
    searchFilter: AppReducerStateType<typeof searchFilterReducer>;
    productFilter: AppReducerStateType<typeof productFilterReducer>;
    general: AppReducerStateType<typeof generalReducer>;
    fav: AppReducerStateType<typeof favReducer>;
    auth: AppReducerStateType<typeof authReducer>;
    cart: AppReducerStateType<typeof cartReducer>;
    reducers: any;
}
