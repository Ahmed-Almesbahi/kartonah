import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {NavigationProvider} from 'react-native-navigation-hooks';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from 'app-redux/store';
import {I18nextProvider} from 'react-i18next';
import 'theme';
import i18n from 'i18n/index';
import {StripeProvider} from '@stripe/stripe-react-native';

// import {SafeAreaProvider} from 'react-native-safe-area-context';

import Initializing from 'screens/Initializing';
import Login from 'screens/Login';
import Otp from 'screens/OTP';
import Register from 'screens/Register';
import Home from 'screens/Home';
import Home2 from 'screens/Home2';
import Categories from 'screens/Categories';
import CategoriesVendors from 'screens/CategoriesVendors';
import Favorite from 'screens/Favorite';
import Sales from 'screens/Sales';
import Cart from 'screens/Cart';
import Account from 'screens/Account';
import VendorDetails from 'screens/VendorDetails';
import StockDetails from 'screens/StockDetails';
import Search from 'screens/Search';
import Filters from 'screens/Filters';
import Wallet from 'screens/Wallet';
import Coupons from 'screens/Coupons';
import Address from 'screens/Address';
import NewCourier from 'screens/NewCourier';
import NewAddress from 'screens/NewAddress';
import Cards from 'screens/Cards';
import NewCard from 'screens/NewCard';
import Qutations from 'screens/Qutations';
import QutationDetails from 'screens/QutationDetails';
import Chat from 'screens/Chat';
import NewQutation from 'screens/NewQutation';
import Settings from 'screens/Settings';
import EditSettings from 'screens/EditSettings';
import Terms from 'screens/Terms';
import DistanceTerms from 'screens/DistanceTerms';
import Legal from 'screens/Legal';
import ProductDetails from 'screens/ProductDetails';
import ProductDetailsDescription from 'screens/ProductDetailsDescription';
import ProductDetailsSizeChart from 'screens/ProductDetailsSizeChart';
import ProductDetailsReviews from 'screens/ProductDetailsReviews';
import Checkout from 'screens/Checkout';
// import Checkout1 from 'screens/Checkout1';
// import Checkout2 from 'screens/Checkout2';
// import Payments from 'screens/Payments';
import PaymentDetails from 'screens/PaymentDetails';
// import CheckoutSummary from 'screens/CheckoutSummary';
import CheckoutPayment from 'screens/CheckoutPayment';
import Checkout3 from 'screens/Checkout3';
import PhotoModal from 'screens/PhotoModal';
import MultiSelect from 'screens/MultiSelect';

import TrackOrder from 'screens/TrackOrder';
import Orders from 'screens/Orders';
import OrderDetails from 'screens/OrderDetails';
import NewRate from 'screens/NewRate';
import Modal from 'screens/Modal';
import ProductVariations from 'screens/ProductVariations';
import ProductAfterVariations from 'screens/ProductAfterVariations';

import Alert from 'components/Alert';
import AlertDelete from 'components/AlertDelete';
import MyToast from 'components/MyToast';
import General from 'components/General';
import {STRIPE_PUB_KEY} from 'utils/constants';
import {Navigation} from 'react-native-navigation';
import KartonahApi from 'kartonah-common/api';

const WrapperComponent = ({children}) => {
    const lang = useSelector(state => state?.auth?.contactLang);
    KartonahApi.init({store: store, langCode: lang});
    return children;
};

[
    Initializing,
    Login,
    Otp,
    Register,
    Home,
    Home2,
    Categories,
    CategoriesVendors,
    Favorite,
    Sales,
    Cart,
    Account,
    VendorDetails,
    StockDetails,
    Search,
    Filters,
    Wallet,
    Coupons,
    Address,
    NewCourier,
    NewAddress,
    Cards,
    NewCard,
    Qutations,
    QutationDetails,
    Chat,
    NewQutation,
    Settings,
    NewRate,
    EditSettings,
    Terms,
    DistanceTerms,
    Legal,
    ProductDetails,
    ProductDetailsSizeChart,
    ProductDetailsDescription,
    ProductDetailsReviews,
    Alert,
    AlertDelete,
    Checkout,
    Checkout3,
    CheckoutPayment,
    PaymentDetails,
    TrackOrder,
    Orders,
    OrderDetails,
    PhotoModal,
    MultiSelect,
    Modal,
    ProductVariations,
    ProductAfterVariations,
].map(Component => {
    Navigation.registerComponent(Component.screenName, () => props => (
        <NavigationProvider value={{componentId: props.componentId}}>
            <StripeProvider publishableKey={STRIPE_PUB_KEY}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <I18nextProvider i18n={i18n}>
                            <WrapperComponent>
                                {/* <General /> */}
                                <Component {...props} />
                                <MyToast />
                            </WrapperComponent>
                        </I18nextProvider>
                    </PersistGate>
                </Provider>
            </StripeProvider>
        </NavigationProvider>
    ));
});
