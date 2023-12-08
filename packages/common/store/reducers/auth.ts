// import {getDefaultDeviceLanguage} from '../actions/general';
import {AnyAction} from 'redux';
// import firebase from 'firebase/app';
// import 'firebase/auth';

const initialAuthState = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    countryId: 0,
    cityId: 0,
    token: '',
    avatar: '',
    preferredCurrency: 'USD',
    // contactLang: getDefaultDeviceLanguage(),
    contactLang: 'en',
    userCredit: 0,
    favouritesIds: [],
};

export const UPDATE_USER_SETTING = 'UPDATE_USER_SETTING';
export const USER_LOGIN_SUCCEEDED = 'USER_LOGIN_SUCCEEDED';
export const LOGOUT = 'LOGOUT';

const authReducer = (state = initialAuthState, action: AnyAction) => {
    switch (action.type) {
        case USER_LOGIN_SUCCEEDED:
        case UPDATE_USER_SETTING:
            return {
                ...state,
                ...action.data,
            };
        case 'AR': {
            return {...state, contactLang: 'ar'};
        }
        case 'EN': {
            return {...state, contactLang: 'en'};
        }
        case LOGOUT: {
            //TODO: move firebase logout with same signout button
            // firebase
            //     .auth()
            //     .signOut()
            //     .then(() => {
            //         // Sign-out successful.
            //     })
            //     .catch((error) => {
            //         // An error happened.
            //     });
            return {...initialAuthState, contactLang: state.contactLang};
        }
        default:
            return state;
    }
};

export default authReducer;
