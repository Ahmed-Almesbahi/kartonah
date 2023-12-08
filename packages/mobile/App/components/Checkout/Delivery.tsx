import {useDispatchRequest} from '@redux-requests/react';
import {fetchCargos} from 'app-redux/actions/api';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import {View, Text, Image, Colors, Assets, Picker, PanningProvider, Dialog, Button} from 'react-native-ui-lib';
import {useSelector} from 'react-redux';
import styles from 'theme/styles';
import {UPLOAD_URL} from 'utils/constants';
import Tools from 'utils/Tools';
import Intercom from 'react-native-intercom';
import {setUpInterCom} from 'utils/helper';

const Delivery = ({address, onSelect}: {address: any; onSelect: 'express' | 'sea' | 'air' | 'land'}) => {
    const {t} = useTranslation();
    const cart = useSelector(state => state.cart);
    // useEffect(() => {
    //   setUpInterCom();
    // }, []);
    let initialDeliveries = [
        {
            id: 1,
            title: null,
            logo: null,
            name: 'air',
            value: 1,
            label: `${t('Air Freight')}`,
            icon: require('images/air-mail.png'),
            time: 0,
            fees: 0,
        },
        {
            id: 2,
            title: null,
            logo: null,
            name: 'sea',
            value: 2,
            label: `${t('Sea Freight')}`,
            icon: require('images/see-freight.png'),
            time: 0,
            fees: 0,
        },
        {
            id: 3,
            title: null,
            logo: null,
            name: 'land',
            value: 3,
            label: `${t('Land Freight')}`,
            icon: require('images/land-freight.png'),
            time: 0,
            fees: 0,
        },
        {
            id: 4,
            title: null,
            logo: null,
            name: 'express',
            value: 4,
            label: `${t('Express')}`,
            icon: require('images/air-mail.png'),
            time: 0,
            fees: 0,
        },
    ];

    const dispatch = useDispatchRequest();
    const [deliveries, setDeliveries] = useState([]);
    const [delivery, setDelivery] = useState({});

    useEffect(() => {
        if (address?.country?.id > 0) {
            dispatch(fetchCargos(address?.country?.id)).then(({data}) => {
                if (data?.rows?.length > 0) {
                    let newDeliveries: any = [];
                    initialDeliveries.map(_delivery => {
                        let dbDelivery = data?.rows[0]?.countries[0];
                        let _dbDelivery = data?.rows[0];

                        switch (_delivery.value) {
                            // air
                            case 1:
                                if (dbDelivery.airPrice > 0) {
                                    newDeliveries.push({
                                        ..._delivery,
                                        title: _dbDelivery?.full_name,
                                        logo: _dbDelivery?.logo,
                                        fees: Tools.getCartTotalWeight(cart) * dbDelivery.airPrice,
                                        time: `${dbDelivery.airTimeFrom} - ${dbDelivery.airTimeTo} ${t('days')}`,
                                        cargoId: _dbDelivery.id,
                                    });
                                }
                                break;
                            case 2:
                                if (dbDelivery.seaPrice > 0) {
                                    newDeliveries.push({
                                        ..._delivery,
                                        title: _dbDelivery?.full_name,
                                        logo: _dbDelivery?.logo,
                                        fees: Tools.getCartTotalWeight(cart) * dbDelivery.seaPrice,
                                        time: `${dbDelivery.seaTimeFrom} - ${dbDelivery.seaTimeTo} ${t('days')}`,
                                        cargoId: _dbDelivery.id,
                                    });
                                }
                                break;
                            //land
                            case 3:
                                if (dbDelivery.landPrice > 0) {
                                    newDeliveries.push({
                                        ..._delivery,
                                        title: _dbDelivery?.full_name,
                                        logo: _dbDelivery?.logo,
                                        fees: Tools.getCartTotalWeight(cart) * dbDelivery.landPrice,
                                        time: `${dbDelivery.landTimeFrom} - ${dbDelivery.landTimeTo} ${t('days')}`,
                                        cargoId: _dbDelivery.id,
                                    });
                                }
                                break;
                            case 4:
                                if (dbDelivery.expressPrice > 0) {
                                    newDeliveries.push({
                                        ..._delivery,
                                        title: _dbDelivery?.full_name,
                                        logo: _dbDelivery?.logo,
                                        fees: Tools.getCartTotalWeight(cart) * dbDelivery?.expressPrice,
                                        time: `${dbDelivery.expressTimeFrom} - ${dbDelivery.expressTimeTo} ${t(
                                            'days',
                                        )}`,
                                        cargoId: _dbDelivery.id,
                                    });
                                }
                        }
                    });

                    setDeliveries(newDeliveries);
                    setDelivery(newDeliveries[0]);
                    onSelect(newDeliveries[0]);
                } else {
                    setDeliveries([]);
                }
                // console.log('deliveries', deliveries);

                // console.log('res', res);
            });
        }
    }, [address]);

    const renderDialogDeliver = (item, props) => {
        let data = deliveries.find(del => del.id == props.value);
        return renderDeliver({...data, ...props});
    };
    const renderDeliver = _delivery => {
        let ll_logo =
            _delivery?.logo && _delivery?.logo != undefined ? {uri: UPLOAD_URL + _delivery?.logo} : _delivery?.icon;
        let logoExit = _delivery?.logo && _delivery?.logo != undefined ? true : false;

        return (
            <View row centerV paddingH-20 paddingV-10 margin-0>
                {logoExit ? (
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.inputBorder,
                            borderRadius: 5,
                            // padding: 10,
                        }}>
                        {ll_logo != null ? (
                            <Image source={ll_logo} style={{width: 50, height: 50, borderRadius: 5}} />
                        ) : null}
                    </View>
                ) : (
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: Colors.inputBorder,
                            borderRadius: 5,
                            padding: 10,
                        }}>
                        {ll_logo != null ? <Image source={ll_logo} style={{width: 40, height: 40}} /> : null}
                    </View>
                )}

                <View marginH-10>
                    <Text text90 bold marginB-0>
                        {_delivery?.label} <Text text80>({_delivery?.time})</Text>
                    </Text>
                    <Text text90 bold marginB-0>
                        {_delivery?.title}
                    </Text>
                    <Text text90 bold color={Colors.dark40} marginT-0>
                        {t('Shipping fees')}: {Tools.getCurrecyFormatted(_delivery?.fees)}
                    </Text>
                </View>

                {_delivery?.isSelected && (
                    <View flex right>
                        <Image source={Assets.icons.check} />
                    </View>
                )}
            </View>
        );
    };

    const dialogHeader = (props: {title: string}, toggleModal: (show?: boolean) => void) => {
        const {title} = props;
        return (
            <View style={styles.sortModalHeader} row>
                <Text margin-15 secondary text2 bold>
                    {title}
                </Text>
                <Button
                    backgroundColor={Colors.white}
                    onPress={() => {
                        toggleModal(false);
                    }}>
                    <Text text80 secondary uppercase>
                        {t('Done')}
                    </Text>
                </Button>
            </View>
        );
    };

    const renderDialog = (modalProps: {
        visible: boolean;
        children: object;
        toggleModal: (show?: boolean) => void;
        onDone: () => void;
    }) => {
        const {visible, children, toggleModal, onDone} = modalProps;

        return (
            <Dialog
                visible={visible}
                onDismiss={() => {
                    onDone();
                    toggleModal(false);
                }}
                width="100%"
                height="45%"
                bottom
                // useSafeArea
                containerStyle={styles.dialogContainer}
                renderPannableHeader={props => dialogHeader(props, toggleModal)}
                panDirection={PanningProvider.Directions.DOWN}
                pannableHeaderProps={{title: t('Choose')}}>
                <ScrollView>{children}</ScrollView>
            </Dialog>
        );
    };

    return deliveries.length > 0 ? (
        <Picker
            marginT-10
            style={styles.button}
            value={delivery}
            onChange={s => {
                let c = deliveries.find(del => del.id == s.value);
                onSelect(c);
                setDelivery(c);
            }}
            renderPicker={() => {
                return (
                    <View backgroundColor={Colors.white} marginT-10 style={{width: '100%'}}>
                        <View marginH-20 marginV-5 centerV row spread>
                            <Text text80 secondary bold>
                                {t('Delivery Details')}
                            </Text>
                            <View row centerV>
                                <Text secondary bold marginB-3>
                                    {t('Change')}
                                </Text>
                                <Image marginL-5 supportRTL source={Assets.icons.cheveronRight} />
                            </View>
                        </View>

                        <View style={styles.fancySeparator} marginH-20 backgroundColor={Colors.light} />
                        {renderDeliver(delivery)}
                    </View>
                );
            }}
            renderCustomModal={renderDialog}>
            {deliveries
                .sort((a, b) => (a.fees > b.fees ? 1 : -1))
                .map(option => (
                    <Picker.Item
                        key={option.value}
                        value={option.value}
                        label={option.label}
                        renderItem={(item, props) => renderDialogDeliver(item, props)}
                    />
                ))}
        </Picker>
    ) : address?.id > 0 ? (
        <Button
            center
            style={styles.button}
            marginH-10
            marginT-10
            backgroundColor={Colors.secondary}
            onPress={() => {
                Intercom.displayMessenger();
            }}>
            <Text text80 white>
                {t('Contact us for shipping rates')}
            </Text>
        </Button>
    ) : null;
};

export default Delivery;
