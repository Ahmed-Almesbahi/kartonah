import {LOGOUT, UPDATE_USER_SETTING, USER_LOGIN_SUCCEEDED} from 'app-redux/reducers/auth';
import {store} from 'app-redux/store';

export const getToken = () => {
    const value = store.getState().auth?.token;
    // const value = await AsyncStorage.getItem('@token');
    return value;
};

export function storeLogin(data) {
    const favouritesIds = data?.favouritesIds;
    return {
        type: USER_LOGIN_SUCCEEDED,
        data: {
            ...data,
            token: data.accessToken ? data.accessToken : null,
            favouritesIds: favouritesIds,
        },
    };
}
export function logout() {
    return {
        type: LOGOUT,
    };
}

export function updateUserReducer(data: object) {
    return {
        type: UPDATE_USER_SETTING,
        data,
    };
}
