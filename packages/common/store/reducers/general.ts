import {AnyAction} from 'redux';

const initialGeneralState = {
  currency: 'USD',
  language: 'English',
  rtl: false,
  countryCode: 'TR',
  foundCountry: false,
};

export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_RTL = 'SET_LANGUAGE';
export const SET_COUNTRY_CODE = 'SET_COUNTRY_CODE';

const authReducer = (state = initialGeneralState, action: AnyAction) => {
  switch (action.type) {
    case SET_COUNTRY_CODE:
      return {
        ...state,
        countryCode: action.countryCode,
        foundCountry: true,
      };
    case 'SET_CURRENCY':
      return {
        ...state,
        currency: action.currency,
      };
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.language,
        rtl: action.rtl,
      };
    case 'LOGOUT': {
      return initialGeneralState;
    }
    default:
      return state;
  }
};

export default authReducer;
