import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStoragePlugin from 'i18next-react-native-async-storage';
import resources from './lang';

i18n
  .use(initReactI18next)
  .use(AsyncStoragePlugin())
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources,
    ns: ['common'],
    defaultNS: 'common',
    // debug: __DEV__,
    saveMissing: true,
    saveMissingTo: 'all',
    missingKeyHandler: function (lng, ns, key, fallbackValue) {
      console.log(`'${key}':'${key}',`);
    },
    debug: false,
    keySeparator: false,
    cache: {
      enabled: true,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
