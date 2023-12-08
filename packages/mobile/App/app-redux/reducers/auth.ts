import {getDefaultDeviceLanguage} from 'app-redux/actions/general';
import {AnyAction} from 'redux';
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
  contactLang: getDefaultDeviceLanguage(),
  userCredit: 0,
  favouritesIds: [],
};

export const UPDATE_USER_SETTING = 'UPDATE_USER_SETTING';
export const USER_LOGIN_SUCCEEDED = 'USER_LOGIN_SUCCEEDED';
export const FAKE_LOGIN = 'FAKE_LOGIN';
export const LOGOUT = 'LOGOUT';

const authReducer = (state = initialAuthState, action: AnyAction) => {
  switch (action.type) {
    case FAKE_LOGIN:
      let token =
        'xxxxxx';
    
        // id: 14,
        // firstName: 'ahmed',
        // lastName: 'almesbahi',
        // email: 'amusbahisa@gmail.com',
        // countryId: 163,
        // cityId: 0,
        // userCredit: 400,
        // phone: '05522222567',
        // preferredCurrency: 'USD',
        // contactLang: 'en',
        // commercialTitle: '',
        // photo: 'تحدي-مين-انا.png',
        activationCode: null,
        adrs: null,
        bankName: null,
        bnkAccntNm: null,
        bnkCntryId: 0,
        brandName: null,
        brandUsername: null,
        cityId: 0,
        commercialTitle: 'Test',
        contactLang: 'EN',
        countryId: 163,
        countryCode: 'SA',
        email: null,
        email_verified_at: null,
        erpSystem: null,
        facebook: null,
        facebook_id: null,
        fieldId: 0,
        firstName: 'Ahmed',
        full_name: 'Ahmed Almesbahi',
        google_id: null,
        groupId: 2,
        iban: null,
        id: 13,
        instagram: null,
        isFeatured: 0,
        lastName: 'Almesbahi',
        legalInfoFile: null,
        logo: null,
        mersisNo: null,
        minBill: 0,
        name: null,
        passport: null,
        phone: '+905522222567',
        photo: null,
        postcode: null,
        preferredCurrency: 'USD',
        signatureFile: null,
        status: 1,
        super: 0,
        swiftCode: null,
        taxAdminstration: null,
        taxNumber: null,
        taxRate: 0,
        twitter: null,
        twitter_id: null,
        userCover: '',
        userCredit: 999999,
        userLegalInfoFile: '',
        userLogo: '',
        userSignatureFile: '',
        website: null,
        youtube: null,
        token,
        favouritesIds: [3],
      };
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
      return {...initialAuthState, contactLang: state.contactLang};
    }
    default:
      return state;
  }
};

export default authReducer;
