import axios from 'axios';
import {handleRequests} from '@redux-requests/core';
import {createDriver as createAxiosDriver} from '@redux-requests/axios';
import {createDriver as createGraphQlDriver} from '@redux-requests/graphql';
import {API_URL, API_URL2} from 'utils/constants';

const {requestsReducer, requestsMiddleware} = handleRequests({
    driver: {
        default: createAxiosDriver(
            axios.create({
                baseURL: API_URL,
                timeout: 5000,
            }),
        ),
        graphql: createGraphQlDriver({url: API_URL2}),
    },
    onError: (error: any, requestAction: any, store) => {
        // console.log('error', error?.data?.errors[0]?.message);
        // console.log('error?.response', error?.response?.data);
        // on Timeout
        if (error?.code == 'ECONNABORTED') {
            // toast('time out', 'error');
            throw {success: false, message: 'time out'};
        }

        if (error?.data?.errors[0]?.message) {
            throw new Error(error?.data?.errors[0]?.message);
        }

        if (error?.response) {
            if (error?.response?.data?.errors[0]?.message) {
                console.log('error?.response?.data?.errors[0]?.message', error?.response?.data?.errors[0]?.message);
                throw new Error(error?.response?.data?.errors[0]?.message);
            }
        }
        return error.response;
    },
});

export {requestsMiddleware, requestsReducer};
