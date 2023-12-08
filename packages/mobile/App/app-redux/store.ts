import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from 'app-redux/reducers';
// import sagas from 'app-redux/sagas';

import {toast} from 'utils/helper';
import {requestsMiddleware} from './reduxRequests';

const persistConfig = {
    key: 'primary1.2',
    storage: AsyncStorage,
};

let sagaMiddleware;

sagaMiddleware = createSagaMiddleware();

// function handleErros(err: any) {
//     if (err.response) {
//         if (err.response.data && err.response.data.message) {
//             throw new Error(err.response.data.message);
//         } else {
//             throw new Error('Problem with response ' + err.response.status);
//         }
//     } else if (err.request) {
//         throw new Error('Problem with request!');
//     } else {
//         throw new Error(err.message);
//     }
// }

const persistedReducer = persistReducer(persistConfig, reducers);
const middlewares = [sagaMiddleware, ...requestsMiddleware];

if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
}

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run(sagas);
export const persistor = persistStore(store);
