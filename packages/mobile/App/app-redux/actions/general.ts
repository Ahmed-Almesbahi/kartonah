import {SET_CURRENCY, SET_LANGUAGE, SET_COUNTRY_CODE, SET_COUNTRY} from '../reducers/general';
import {NativeModules, Platform} from 'react-native';
import {DEFAULT_LANGUAGE} from 'utils/constants';
import {store} from 'app-redux/store';

export const getDefaultDeviceLanguage = () => {
    const deviceLanguage =
        Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
              NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
            : NativeModules.I18nManager.localeIdentifier;

    if (deviceLanguage) {
        return deviceLanguage.substring(0, 2);
    } else {
        console.log('DEFAULT_LANGUAGE', DEFAULT_LANGUAGE);
        return DEFAULT_LANGUAGE;
    }
};

export const getCurrentLanguage = async () => {
    // try {
    // const value = await AsyncStorage.getItem('@language');
    const value = store.getState().auth.contactLang;

    if (value) {
        return value;
    }
    return getDefaultDeviceLanguage();
};

export function setCurrency(currency: string) {
    return {
        type: SET_CURRENCY,
        currency,
    };
}

export function setLanuage(language: string, rtl: boolean) {
    return {
        type: SET_LANGUAGE,
        language,
        rtl,
    };
}
export function setCountryCode(countryCode: string) {
    return {
        type: SET_COUNTRY_CODE,
        countryCode,
    };
}
export function setCountry(country: string) {
    return {
        type: SET_COUNTRY,
        country,
    };
}
