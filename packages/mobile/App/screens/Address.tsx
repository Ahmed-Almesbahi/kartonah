import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {View, Colors, Button, Text, Image, Assets} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import AddressItem from 'components/AddressItem';
import {AddressItemType} from 'typescript/types';
import {useNavigation} from 'react-native-navigation-hooks';
import {useQuery} from '@redux-requests/react';
import Query from 'components/Query';
import {useDispatch, useSelector} from 'react-redux';
import {FONT} from 'utils/constants';
import {getCountryIdByCode} from 'utils/countries';
import KartonahApi from 'kartonah-common/api';

const Address = ({modal, onSelect}) => {
    const {t} = useTranslation();
    const {showModal, dismissModal, pop} = useNavigation();
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

    const addresses = useQuery({
        type: KartonahApi.FETCH_ADDRESSES,
        action: KartonahApi.fetchAddresses,
        variables: [],
        autoLoad: true,
    });

    const FlatListFooterA = () => (
        <Button
            margin-10
            outline
            fullWidth
            outlineColor={Colors.dark40}
            onPress={() => showModal('Kartonah.Screens.NewAddress')}
            style={styles.button}>
            <Image marginR-5 source={Assets.icons.addIcon} />
            <Text text80 secondary bold>
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
                if (modal) {
                    onSelect(item);
                    // dismissModal();
                    pop();
                } else {
                    dispatch(
                        KartonahApi.updateAddress({
                            ...item,
                            countryId: getCountryIdByCode(item.countryCode),
                            isDefault: item.isDefault ? 0 : 1,
                        }),
                    );
                }
            }}
            onPress={() => {
                if (modal) {
                    onSelect(item);
                    // dismissModal();
                    pop();
                } else {
                    dispatch(
                        KartonahApi.updateAddress({
                            ...item,
                            countryId: getCountryIdByCode(item.countryCode),
                            isDefault: item.isDefault ? 0 : 1,
                        }),
                    );
                }
                // setActiveAddress(index);
            }}
        />
    );

    return (
        <View flex backgroundColor={Colors.white}>
            <Header showBack white title={t('My Address')} />

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
