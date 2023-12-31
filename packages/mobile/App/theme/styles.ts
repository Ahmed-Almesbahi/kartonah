import {StyleSheet, Dimensions, I18nManager} from 'react-native';
import {Colors, Spacings} from 'react-native-ui-lib';
import {FONT, FONT_BOLD, BOLD, INPUT_FONT_SIZE} from 'utils/constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
    tabsBb: {
        position: 'absolute',
        bottom: -5,
        left: -8,
        right: -8,
        width: width + 16,
        zIndex: 10,
    },
    introImage: {
        width,
        height: width * 1.173,
        resizeMode: 'contain',
    },
    muted: {
        opacity: 0.5,
    },
    otpField: {
        backgroundColor: Colors.light,
        borderWidth: 1,
        borderColor: Colors.inputBorder,
        width: '15%',
        height: 60,
        textAlign: 'center',
        borderRadius: 5,
    },
    textField: {
        backgroundColor: '#F3F3F3',
        paddingHorizontal: Spacings.s2,
        minHeight: 40,
        color: Colors.secondary,
        fontFamily: FONT,
        // paddingTop: 10,
        // paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.inputBorder,
        // textAlign: i18next.dir() === 'rtl' ? 'right' : 'left',
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        fontSize: INPUT_FONT_SIZE,
        marginBottom: 15,
    },
    pickerField: {
        backgroundColor: Colors.light,
        padding: Spacings.s2,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.inputBorder,
        // textAlign: i18next.dir() === 'rtl' ? 'right' : 'left',
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        marginBottom: 5,
        alignSelf: 'stretch',
    },
    textAreaField: {
        backgroundColor: Colors.light,
        padding: Spacings.s2,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.inputBorder,
        // textAlign: i18next.dir() === 'rtl' ? 'right' : 'left',
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        marginBottom: 5,
    },
    fileField: {
        backgroundColor: Colors.light,
        padding: Spacings.s2,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.inputBorder,
        // textAlign: i18next.dir() === 'rtl' ? 'right' : 'left',
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        marginBottom: 5,
    },
    fileFieldButton: {
        marginTop: -10,
        marginBottom: -10,
        marginEnd: -Spacings.s2,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    increamentTextField: {
        minWidth: 40,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.secondary,
        marginHorizontal: 10,
    },
    increamentHTextField: {
        minWidth: 20,
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.secondary,
        marginHorizontal: 10,
    },
    increamentVField: {
        color: Colors.white,
        backgroundColor: Colors.secondary,
        flex: 1,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center',
        height: 30,
    },
    increamentVButton0: {
        borderRadius: 5,

        // paddingTop: 10,
        // paddingBottom: 10,
        // paddingLeft: 10,
        // paddingRight: 10,
        paddingVertical: 2,
        paddingHorizontal: 10,
    },
    increamentVButton: {
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    increamentVButtonTop: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    increamentVButtonBottom: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    textFieldText: {
        fontSize: 14,
        color: Colors.secondary,
    },
    searchField: {
        width: width - 40,
        marginTop: 10,
        marginBottom: 20,
    },
    searchFieldChat: {
        // width: width - 100,
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
    },
    searchFieldBack: {
        // width: width - 220,
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
        // borderWidth: 1,
        // borderColor: 'green',
    },
    headerSearchButton: {
        borderRadius: 5,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 25,
        top: 15,
    },

    headerSearchButtonImage: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },

    countryContainer: {
        backgroundColor: Colors.light,
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: Colors.inputBorder,
        width: '100%',
        marginBottom: 5,
        justifyContent: 'center',
        // alignItems: 'center',
        height: 40,
    },
    phoneContainer: {
        backgroundColor: Colors.light,
        borderRadius: 5,
        borderWidth: 1,
        // paddingHorizontal: 10,
        height: 40,
        borderColor: Colors.inputBorder,
        width: '100%',
        marginBottom: 5,
    },
    phoneSeperatedContainer: {
        width: '100%',
        marginBottom: 5,
    },
    phoneTextContainer: {
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
        paddingVertical: 0,
        margin: 0,
    },
    phoneTextSeperatedContainer: {
        backgroundColor: Colors.light,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.inputBorder,

        paddingHorizontal: 10,
        paddingVertical: 0,
        margin: 0,
    },
    codeTextStyle: {
        fontSize: INPUT_FONT_SIZE,
        fontFamily: FONT,
        fontWeight: 'normal',
        // borderWidth: 1,
        // borderColor: 'blue',
    },
    phoneTextInput: {
        color: Colors.secondary,
        fontSize: INPUT_FONT_SIZE,
        fontFamily: FONT,
        fontWeight: 'normal',
        // height: 30,
        flex: 1,
        padding: 0,
        margin: 0,
        // borderWidth: 1,
        // borderColor: 'red',
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textFieldTitle: {
        opacity: 0.3,
        fontWeight: BOLD,
        fontFamily: FONT_BOLD,
    },
    inputLabel: {
        marginBottom: 8,
        fontFamily: FONT,
    },
    button: {
        borderRadius: 5,
        paddingTop: 13,
        paddingBottom: 13,
        fontFamily: FONT,
    },
    followButton: {
        borderRadius: 5,
        paddingTop: 5,
        paddingBottom: 5,
        // height: 30,
        borderColor: Colors.secondary,
        borderWidth: 1,
    },
    sortButton: {
        width: width / 2,
        borderColor: '#E0E3E7',
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderRadius: 0,
        borderTopWidth: 0,
    },
    filterButton: {
        width: width / 2,
        borderColor: '#E0E3E7',
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderRadius: 0,
        borderTopWidth: 0,
    },
    sortButtonIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    filterButtonIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    followIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    sortModalHeader: {
        borderBottomColor: '#E0E3E7',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
    },
    buttonMini: {
        borderRadius: 5,
    },
    buttonSocial: {
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonSocialIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginEnd: 10,
    },
    buttonSocialText: {
        width: 70,
    },
    squareButton50: {
        width: 50,
        height: 50,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
    },
    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        // minHeight: 80,
    },
    headerStart: {
        justifyContent: 'flex-start',
    },
    whiteBg: {
        backgroundColor: Colors.white,
        borderBottomColor: '#E0E3E7',
        borderBottomWidth: 1,
    },
    headerSearchContainer: {
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: Colors.white,
        paddingBottom: 0,
        borderBottomColor: '#E0E3E7',
        borderBottomWidth: 1,
        // minHeight: 80,
    },
    headerSearchContainerBack: {
        justifyContent: 'flex-start',
    },
    registerHeaderContainer: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.light,
    },
    registerSteps: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    registerStep: {
        width: '33%',
    },
    registerIcon: {
        width: 18,
        height: 18,
        borderRadius: 7,
        borderWidth: 2,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    currentRegisterIcon: {
        backgroundColor: Colors.primary,
    },
    doneRegisterIcon: {
        backgroundColor: Colors.secondary,
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    flexEnd: {
        justifyContent: 'flex-end',
    },
    fancySeparatorContainer: {
        overflow: 'hidden',
    },
    fancySeparatorText: {
        color: '#CFCFCF',
        fontSize: 16,
        marginHorizontal: 10,
    },
    fancySeparator: {
        width: '100%',
        height: 1,
    },
    fancyRegisterSeparator: {
        position: 'absolute',
        zIndex: -1,
        width: '25%',
        top: 8,
    },
    fancyRSl: {
        left: '21%',
    },
    fancyRSr: {
        right: '21%',
    },
    alertContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D1435cc',
    },
    alert: {
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        width: '90%',
        elevation: 4,
        padding: 16,
        borderRadius: 5,
    },
    alert2: {
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        width: '100%',
        elevation: 4,
        padding: 16,
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
    },
    message: {
        marginVertical: 8,
    },
    categoryButtonStyle1: {
        borderRadius: 5,
        marginEnd: 10,
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    categoryButtonStyle2: {
        borderRadius: 5,
        marginEnd: 10,
        borderWidth: 1,
        borderColor: '#E0E3E7',
    },
    categoryButton: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderTopColor: 'transparent',
        height: 36,
        paddingHorizontal: 10,
        marginHorizontal: 10,
    },
    categoryButtonActive: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderTopColor: 'transparent',
        height: 36,
        paddingHorizontal: 10,
        marginHorizontal: 10,
    },
    categoryContainer: {
        backgroundColor: Colors.white,
        paddingBottom: 0,
        borderBottomColor: '#E0E3E7',
        borderBottomWidth: 1,
    },
    categoryItemImageCard: {
        padding: 3,
    },
    categoryItemImageCardContanier: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        // borderWidth: 1,
        // borderColor: 'green',
    },
    vendorItemImageCard: {
        marginTop: 10,
        paddingHorizontal: 0,
        // borderWidth: 1,
        // borderColor: 'red',
        marginBottom: 0,
        paddingBottom: 0,
        overflow: 'hidden',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#EFF2F6',
    },
    vendorItemImage: {
        // borderRadius: 5,
        // marginBottom: 20,
        paddingBottom: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    vendorItemTextContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: '#0D143599',
        justifyContent: 'space-between',
        // borderBottomLeftRadius: 5,
        // borderBottomRightRadius: 5,
    },
    vendorItemRatingCard: {
        position: 'absolute',
        top: 30,
        left: 30,
        // backgroundColor: 'red',
    },
    vendorRating: {
        marginVertical: 2,
        // marginTop: -10,
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
    },
    carouselPaginationContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    activeCategoryItemImage: {
        zIndex: -1,
        position: 'absolute',
        backgroundColor: Colors.white,
        borderRadius: 15,
    },
    vendorProductItemCard: {
        backgroundColor: 'white',
        marginBottom: 5,
        marginHorizontal: 2.5,
        width: '48.5%',
        padding: 0,
    },
    productItemCard: {
        marginBottom: 10,
        marginLeft: 12.5,
        padding: 0,
    },
    productItemImage: {},
    productRating: {
        // flex: 1,
        alignSelf: 'flex-start',
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
    },
    productCardSalesButton: {
        borderRadius: 3,
        paddingVertical: 2,
        paddingHorizontal: 10,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    productCardFavoriteButton: {
        borderRadius: 5,
        width: 35,
        height: 35,
        paddingHorizontal: 0,
        padding: 0,
        position: 'absolute',
        top: 10,
        right: 10,
        // backgroundColor: 'white',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    productCardFavoriteIcon: {
        width: 23,
        height: 20,
        resizeMode: 'contain',
    },
    productCardCartButton: {
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },
    tabsPlaceholder: {
        height: 20,
        backgroundColor: 'transparent',
    },
    productFlatList: {},
    salesTimerCard: {
        position: 'absolute',
        top: '60%',
        left: 0,
        right: 0,
        marginTop: -5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 2,
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    dialogContainer: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        // zIndex:1
    },
    pickerItem: {
        height: 30,
    },
    vendorDetailsHeader: {
        borderBottomWidth: 1,
        borderColor: '#E0E3E7',
    },
    vendorDetailsLogoContainer: {
        width: 65,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E0E3E7',
    },
    vendorDetailsLogo: {
        width: 63,
        height: 63,
        borderRadius: 5,
        resizeMode: 'contain',
        // borderWidth: 1,
        // borderColor: Colors.light,
        // padding: 3,
        // borderRadius: 10,
    },
    filterItem: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#E0E3E7',
    },
    filterRadio: {
        padding: 2,
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 20,
        width: 16,
        height: 16,
    },
    radioContent: {
        backgroundColor: Colors.primary,
        borderRadius: 20,
        width: 10,
        height: 10,
    },
    filterRating: {},
    railSelected: {
        height: 4,
        backgroundColor: Colors.primary,
        borderRadius: 2,
    },
    textFieldPriceFilter: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        width: '45%',
        padding: 10,
        textAlign: 'center',
    },
    priceSlider: {
        padding: 0,
        margin: 0,
        marginTop: -30,
    },
    accountButton: {},
    accountAvatarContiner: {
        borderWidth: 4,
        borderColor: Colors.white,
        borderRadius: 12,
        backgroundColor: Colors.white,
        width: 104,
        height: 104,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -60,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    accountAvatar: {
        width: 100,
        height: 100,
        borderRadius: 12,
    },
    walletSummary: {
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0.5},
        shadowOpacity: 0.2,
        shadowRadius: 0.5,
    },
    walletTabBar: {
        borderRadius: 7,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    tabBar: {
        borderBottomWidth: 0,
    },
    tabBarUnderline: {
        backgroundColor: 'transparent',
    },
    fancyLine: {
        backgroundColor: Colors.primary,
        width: 4,
        height: 20,
        position: 'absolute',
        top: 18,
        left: 0,
    },
    tabTitle: {
        borderBottomColor: Colors.light,
        borderBottomWidth: 1,
    },
    accordionCard: {
        width: '100%',
        overflow: 'hidden',
    },
    discountTextContainer: {
        flexWrap: 'wrap',
    },
    dicountTitleContainer: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    discountTitle: {
        transform: [{rotate: '270deg'}],
        position: 'absolute',
        top: 48,
        left: I18nManager.isRTL ? 18 : -18,
    },
    couponCard: {
        height: 120,
        overflow: 'hidden',
    },
    coupounDot: {
        top: 50,
        height: 20,
        width: 20,
        borderRadius: 20,
        position: 'absolute',
        backgroundColor: Colors.light,
    },
    coupounDotRight: {
        right: -12,
    },
    coupounDotLeft: {
        left: -12,
    },
    courierItem: {
        borderColor: '#DFDFDF',
        borderWidth: 1,
    },
    courierItemActive: {
        borderColor: Colors.primary,
        borderWidth: 1,
    },
    status: {
        width: 10,
        height: 10,
        borderRadius: 10,
    },
    qutationDetailsImage: {
        flex: 1,
        width: width - 40,
        resizeMode: 'cover',
        minHeight: 200,
    },
    sendContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendIcon: {},
    chatComposer: {
        paddingTop: 8,
        marginHorizontal: 12,
    },
    productDetailsImage: {
        flex: 1,
        width: width,
        backgroundColor: 'white',
        // resizeMode: 'cover',
        // resizeMode: 'stretch',
        // minHeight: 468,
        // minHeight: 800,
        // height: '100%',
        // marginBottom: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 20,
        backgroundColor: Colors.black,
        marginRight: 10,
    },
    wrapList: {
        flexWrap: 'wrap',
    },
    productDetialsProductFlatList: {
        backgroundColor: Colors.white,
    },
    productCartImage: {
        width: 60,
        resizeMode: 'cover',
        // alignSelf: 'flex-end',
        top: undefined,
        maxHeight: 80,
        borderRadius: 10,
        flex: 1,
    },
    trackOrderLine: {
        flexDirection: 'column',
        position: 'absolute',
        left: 45,
        top: 30,
        bottom: 45,
        zIndex: -1,
    },
    roundedDialog: {
        backgroundColor: Colors.white,
        // marginBottom: Constants.isIphoneX ? 0 : 20,
        borderRadius: 5,
    },
});
