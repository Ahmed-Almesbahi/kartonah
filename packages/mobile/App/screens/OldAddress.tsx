import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {View, Colors, Button, Text, Image, Assets, TabBar} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import AddressItem from 'components/AddressItem';
import CourierItem from 'components/CourierItem';
import {AddressItemType, CourierType} from 'typescript/types';
import {useNavigation} from 'react-native-navigation-hooks';
import {useQuery} from '@redux-requests/react';
import {
    fetchAddresses,
    fetchCouriers,
    FETCH_ADDRESSES,
    FETCH_COURIERS,
    updateAddress,
    updateCourier,
} from 'app-redux/actions/api';
import Query from 'components/Query';
import {useDispatch, useSelector} from 'react-redux';
import {FONT} from 'utils/constants';

const Address = () => {
    const {t} = useTranslation();
    const {showModal} = useNavigation();
    const dispatch = useDispatch();

    const [tab, setTab] = useState(0);

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

    const userId = useSelector(state => state.auth.id);

    const addresses = useQuery({
        type: FETCH_ADDRESSES,
        action: fetchAddresses,
        variables: [userId],
        autoLoad: true,
    });
    const couriers = useQuery({
        type: FETCH_COURIERS,
        action: fetchCouriers,
        variables: [],
        autoLoad: true,
    });
    const FlatListFooter = () => (
        <Button
            margin-10
            outline
            fullWidth
            outlineColor={Colors.light}
            onPress={() => showModal('Kartonah.Screens.NewCourier')}
            style={styles.button}>
            <Image marginR-5 source={Assets.icons.addIcon} />
            <Text text80 secondary>
                {t('Add new Courier')}
            </Text>
        </Button>
    );
    const FlatListFooterA = () => (
        <Button
            margin-10
            outline
            fullWidth
            outlineColor={Colors.light}
            onPress={() => showModal('Kartonah.Screens.NewAddress')}
            style={styles.button}>
            <Image marginR-5 source={Assets.icons.addIcon} />
            <Text text80 secondary>
                {t('Add new Address')}
            </Text>
        </Button>
    );
    const renderAddressItem = ({item, index}: {item: AddressItemType; index: number}) => (
        <AddressItem
            key={item.id}
            item={item}
            active={item.isDefault === 1}
            addRef={addRef}
            index={index}
            onSwipeableWillOpen={onSwipeableWillOpen}
            onCardPress={() => {
                dispatch(updateAddress({...item, userId, isDefault: item.isDefault ? 0 : 1}));
            }}
            onPress={() => {
                dispatch(updateAddress({...item, userId, isDefault: item.isDefault ? 0 : 1}));
                // setActiveAddress(index);
            }}
        />
    );
    const renderCourierItem = ({item, index}: {item: CourierType; index: number}) => (
        <CourierItem
            key={item.id}
            item={item}
            active={item.isDefault === 1}
            addRef={addRef}
            index={index}
            onSwipeableWillOpen={onSwipeableWillOpen}
            onCardPress={() => {
                dispatch(updateCourier({...item, userId, isDefault: item.isDefault ? 0 : 1}));
            }}
            onPress={() => {
                dispatch(updateCourier({...item, userId, isDefault: item.isDefault ? 0 : 1}));
            }}
        />
    );

    return (
        <View flex backgroundColor={Colors.light}>
            <Header showBack white title={t('My Address')} />
            <TabBar selectedIndex={tab} onChangeIndex={(index: number) => setTab(index)} enableShadow>
                {[t('Outside Turkey'), t('Inside Turkey')].map((_tab, index) => (
                    <TabBar.Item
                        key={index}
                        selectedLabelStyle={{fontFamily: FONT, color: Colors.primary}}
                        labelStyle={{color: Colors.dark20}}
                        label={_tab}
                    />
                ))}
            </TabBar>
            {tab === 0 && (
                <View marginT-10 backgroundColor={Colors.white}>
                    <Query
                        data={couriers.data}
                        error={couriers.error}
                        loading={couriers.loading}
                        pristine={couriers.pristine}
                        children={() => (
                            <FlatList
                                ListFooterComponent={FlatListFooter}
                                bounces={false}
                                data={couriers.data?.rows}
                                renderItem={renderCourierItem}
                            />
                        )}
                        childrenEmpty={FlatListFooter}
                    />
                </View>
            )}
            {tab === 1 && (
                <View marginT-10 backgroundColor={Colors.white}>
                    <Query
                        data={addresses.data}
                        error={addresses.error}
                        loading={addresses.loading}
                        pristine={addresses.pristine}
                        children={() => (
                            <FlatList
                                ListFooterComponent={FlatListFooterA}
                                bounces={false}
                                data={addresses.data?.rows}
                                renderItem={renderAddressItem}
                            />
                        )}
                        childrenEmpty={FlatListFooterA}
                    />
                </View>
            )}
        </View>
    );
};

Address.screenName = 'Kartonah.Screens.Address';

Address.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Address;
