import React, {useState} from 'react';
import {View, Colors, KeyboardAwareScrollView, Card, Button, Text, Image, Assets} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import {CheckIcon} from 'components/CheckoutHeader';
import TitleRadio from 'components/TitleRadio';
import {useNavigation} from 'react-native-navigation-hooks';
import * as Animatable from 'react-native-animatable';
import {CardItemType} from 'typescript/types';
import CardItem from 'components/CardItem';
import {useQuery} from '@redux-requests/react';
import {fetchCards, FETCH_CARDS, FETCH_PAYMENT_METHODS, getPaymentMethods} from 'app-redux/actions/api';
import CardItemSmall from 'components/CardItemSmall';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {createOrder} from '../app-redux/actions/api';
import {getPaymentIcon, getPaymentName, getPaymentId, toast} from 'utils/helper';
import {actions} from 'app-redux/reducers/cart';
import Tools from 'utils/Tools';
import {updateUserReducer} from 'app-redux/actions/auth';
import FileField from 'components/FileField';
import ImagePicker from 'react-native-image-crop-picker';
import CreditCard from 'components/CreditCard';
import Dash from 'react-native-dash';
import Header from 'components/Header';
import {usePush} from 'utils/hooks';

const Checkout2 = () => {
    const {t} = useTranslation();
    const [forceCreditCard, setForceCreditCard] = useState(false);
    const {showModal} = useNavigation();
    const push = usePush();
    const [selected, setSelected] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const {userCredit, id: userId} = useSelector(state => state.auth);

    const [lastIndex, setLastIndex] = useState(undefined);
    const [refArray, setRefArray] = useState([]);
    const closeDrawer = index => {
        refArray[index].closeDrawer();
    };

    const addRef = (ref, index) => {
        refArray[index] = ref;
        setRefArray(refArray);
    };

    const closeLast = index => {
        if (lastIndex !== undefined && lastIndex !== index) {
            closeDrawer(lastIndex);
        }
        setLastIndex(index);
    };

    const onSwipeableWillOpen = props => {
        closeLast(props.index);
    };

    const methods = useQuery({
        type: FETCH_PAYMENT_METHODS,
        action: getPaymentMethods,
        variables: [],
        autoLoad: true,
    });

    const uploadImage = async (type = 'payment') => {
        ImagePicker.openPicker({
            width: 200,
            height: 400,
            cropping: true,
        }).then(image => {
            let uploadData = new FormData();
            uploadData.append('files[]', {
                type: image.mime,
                uri: image.path,
                name: image.path.split('/').pop(),
            });

            dispatch(uploadFile(userId, uploadData, type)).then(({data}) => {
                toast(t('Uploaded file successfully'), 'success');
            });
        });
    };

    const formik = useFormik({
        initialValues: {
            paymentType: getPaymentName(1), //Iyzico
            cardId: cart.cardId,
            cardName: null,
            cardNum: null,
            cardExpiryDate: null,
            cvv: null,
            // vendorId:,
            userId: userId,
            // userCredit: userCredit,
            // couponValue: cart.couponDiscount,
            orderId: cart?.id, // orderId
            couponId: cart.couponId,
            shipmentAdrsId: cart.shipmentAdrsId,
            courierId: cart.courierId,
            notes: cart.notes,

            // 'subTotal' : $request->subTotal,
            //       'shipmentCost' : $request->shipmentCost,
            //       'finalTotal' : $request->finalTotal,

            items: cart.cartItems
                .filter(c => c.status == 1)
                .map(c => ({
                    productId: c.product.id,
                    quantity: c.quantity,
                    variationId: c.variation.id,
                    // priceAfterDiscount: 0,
                })),
        },
        // validationSchema: Yup.object().shape({
        //   firstName: Yup.string().required(),
        // }),
        onSubmit: async values => {
            console.log('values', values);
            if (
                values.paymentType === getPaymentName(1) &&
                (values.cardNum == null || values.cardName == null || values.cardExpiryDate == null)
            ) {
                // toast(t('Please select/add credit card'), 'error');
                toast(t('Please enter all credit card fields correctly'), 'error');
                return;
            }

            // if user credit dose not have enough credit
            if (values.paymentType == getPaymentName(4) && Tools.getCartSubTotal(cart) > userCredit) {
                toast(t('You do not have enough credit, Please add more money to your wallet first.'), 'error');
            } else {
                dispatch(createOrder(values)).then(({data}) => {
                    formik.setSubmitting(false);

                    if (data.success == false) {
                        toast(data.msg, 'error');
                    } else {
                        if (data.rowId) {
                            actions.completeOrder(dispatch);
                            // if user select paying by wallet , then update local credit
                            if (values.paymentType == getPaymentName(4)) {
                                dispatch(
                                    updateUserReducer({
                                        userCredit: userCredit - Tools.getCartSubTotal(cart),
                                    }),
                                );
                            }
                            push('Kartonah.Screens.Checkout3', {orderId: data.rowId});
                        }
                    }

                    // do sth with response
                });
            }
        },
    });

    // const cards = useQuery({
    //   type: FETCH_CARDS,
    //   action: fetchCards,
    //   variables: [userId],
    //   autoLoad: true,
    // });

    // const FlatListFooter = () => (
    //   <Button
    //     margin-10
    //     link
    //     fullWidth
    //     outlineColor={Colors.light}
    //     onPress={() =>
    //       showModal('Kartonah.Screens.NewCard', {
    //         onSubmit: (values) => {
    //           console.log('values', values);
    //           formik.setFieldValue('cardId', 0);
    //           formik.setFieldValue('cardName', values.cardName);
    //           formik.setFieldValue('cardNum', values.cardNumber);
    //           formik.setFieldValue('cardNumber', values.cardNumber);
    //           formik.setFieldValue('cardExpiryDate', values.cardExpire);
    //           formik.setFieldValue('cvv', values.cvv);
    //           setForceCreditCard(true);
    //         },
    //         checkout: true,
    //       })
    //     }
    //     style={styles.button}>
    //     <Image marginR-5 source={Assets.icons.addIcon} />
    //     <Text secondary>{t('Add new card')}</Text>
    //   </Button>
    // );

    // const renderCardItem = ({
    //   item,
    //   index,
    // }: {
    //   item: CardItemType;
    //   index: number;
    // }) => (
    //   <CardItemSmall
    //     key={item.id}
    //     selected={formik.values.cardId === item.id}
    //     addRef={addRef}
    //     index={index}
    //     formik={formik}
    //     onSwipeableWillOpen={onSwipeableWillOpen}
    //     onCardPress={() => {
    //       formik.setFieldValue('cardId', item.id);
    //       formik.setFieldValue('cardName', item.cardName);
    //       formik.setFieldValue('cardNum', item.cardNumber);
    //       formik.setFieldValue('cardExpiryDate', item.cardExpire);
    //       formik.setFieldValue('cvv', item.cvv);
    //     }}
    //     item={item}
    //   />
    // );
    //meshmesh
    //1231233132312555
    //1225
    //132

    return (
        <View flex backgroundColor={Colors.light}>
            <Header white showBack style={{borderBottomWidth: 0}} title={t('Checkout (2/3)')} />
            {/* <CheckoutHeader white title={t('Checkout (2/3)')} currentStep={2} /> */}
            <KeyboardAwareScrollView bounces={false}>
                <View bg-white>
                    <View marginV-20 style={styles.registerSteps} row>
                        <CheckIcon step={1} currentStep={2} label={t('Shipping')} />
                        <CheckIcon step={2} currentStep={2} label={t('Payment')} />
                        <CheckIcon step={3} currentStep={2} label={t('Order Placed')} />
                        <Dash
                            dashLength={10}
                            dashThickness={1}
                            dashGap={3}
                            dashColor="#7E85A1"
                            style={[styles.fancyRegisterSeparator, styles.fancyRSl]}
                        />
                        <Dash
                            dashLength={10}
                            dashThickness={1}
                            dashGap={3}
                            dashColor="#7E85A1"
                            style={[styles.fancyRegisterSeparator, styles.fancyRSr]}
                        />
                    </View>
                </View>
                <View padding-20>
                    {methods.data?.rows
                        ?.filter(item => [1, 2, 3].includes(item.id))
                        .map(item => (
                            <Card marginB-10 key={item.id}>
                                <TitleRadio
                                    selected={selected === item.id}
                                    onPress={() => {
                                        setSelected(item.id);
                                        formik.setFieldValue('paymentType', getPaymentName(item.id));
                                    }}
                                    title={
                                        item.id == 4
                                            ? `${item?.elment_trans[0]?.title} (${Tools.getCurrecyFormatted(
                                                  userCredit,
                                              )})`
                                            : `${item?.elment_trans[0]?.title}`
                                    }
                                    icon={getPaymentIcon(item.id)}
                                />
                                {item.id == 1 && (
                                    <Animatable.View
                                        transition="height"
                                        easing="ease-in-out-circ"
                                        style={[
                                            styles.accordionCard,
                                            {height: selected === 1 ? 500 : 0}, // eslint-disable-line react-native/no-inline-styles
                                        ]}>
                                        <View paddingH-20>
                                            <CreditCard
                                                checkout={true}
                                                onSubmit={values => {
                                                    console.log('values', values);
                                                    formik.setFieldValue('cardId', 0);
                                                    formik.setFieldValue('cardName', values.cardName);
                                                    formik.setFieldValue('cardNum', values.cardNumber);
                                                    formik.setFieldValue('cardNumber', values.cardNumber);
                                                    formik.setFieldValue('cardExpiryDate', values.cardExpire);
                                                    formik.setFieldValue('cvv', values.cvv);
                                                    setForceCreditCard(true);
                                                }}
                                            />
                                            {/* {forceCreditCard === true ? (
                        renderCardItem({
                          item: {
                            id: 0,
                            cardName: formik.values.cardName,
                            cardNum: formik.values.cardNumber,
                            cardNumber: formik.values.cardNumber,
                            cardExpiryDate: formik.values.cardExpire,
                            cvv: item.cvv,
                          },
                          index: 0,
                        })
                      ) : (
                        <FlatList
                          ListFooterComponent={FlatListFooter}
                          bounces={false}
                          // data={couriers}
                          data={cards.data?.rows}
                          renderItem={renderCardItem}
                        />
                      )} */}
                                        </View>
                                    </Animatable.View>
                                )}
                                {item.id == 2 && getPaymentId(formik.values.paymentType) === item.id && (
                                    <Animatable.View
                                        transition="height"
                                        easing="ease-in-out-circ"
                                        style={[
                                            styles.accordionCard,
                                            {height: 260}, // eslint-disable-line react-native/no-inline-styles
                                        ]}>
                                        <View marginH-20 flex>
                                            <Text marginB-20>{item?.elment_trans[0]?.description}</Text>
                                            <Text marginB-20>{item?.elment_trans[0]?.instructions}</Text>
                                            {/* <FileField
                          onPress={() => uploadImage('payment')}
                          title={t('Upload receipt')}
                        /> */}
                                        </View>
                                    </Animatable.View>
                                )}
                                {item.id == 3 && getPaymentId(formik.values.paymentType) === item.id && (
                                    <Animatable.View
                                        transition="height"
                                        easing="ease-in-out-circ"
                                        style={[
                                            styles.accordionCard,
                                            {height: 200}, // eslint-disable-line react-native/no-inline-styles
                                        ]}>
                                        <View marginH-20 flex>
                                            <Text marginB-20>{item?.elment_trans[0]?.description}</Text>
                                            <Text marginB-20>{item?.elment_trans[0]?.instructions}</Text>
                                            {/* <FileField
                          onPress={() => uploadImage('payment')}
                          title={t('Upload receipt')}
                        /> */}
                                        </View>
                                    </Animatable.View>
                                )}
                            </Card>
                        ))}

                    {/* <Card marginB-10>
            <TitleRadio
              selected={selected === 4}
              onPress={() => setSelected(4)}
              title={t('paypal')}
            />
          </Card>
          <Card marginB-10>
            <TitleRadio
              selected={selected === 5}
              onPress={() => setSelected(5)}
              title={t('bank transfer')}
            />
          </Card>
          <Card marginB-10>
            <TitleRadio
              selected={selected === 6}
              onPress={() => setSelected(6)}
              title={t('Cash at our office')}
            />
          </Card> */}
                </View>
            </KeyboardAwareScrollView>
            <View
                height={100}
                bg-white
                // absB
                paddingH-20
                style={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    width: '100%',
                }}>
                <Button
                    style={styles.button}
                    marginV-20
                    disabled={formik.isSubmitting || !formik.isValid}
                    backgroundColor={Colors.secondary}
                    onPress={formik.handleSubmit}>
                    <Text white>{formik.isSubmitting ? t('Loading') : t('Place Order')}</Text>
                    <Image tintColor={Colors.white} marginL-10 supportRTL source={Assets.icons.arrowRight} />
                </Button>
            </View>
        </View>
    );
};

Checkout2.screenName = 'Kartonah.Screens.Checkout2';

Checkout2.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Checkout2;
