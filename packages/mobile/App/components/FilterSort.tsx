import React, {useState} from 'react';
import {Picker, View, Dialog, PanningProvider, Text, Button, Image, Assets, Colors} from 'react-native-ui-lib';
import {ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';
import {useNavigation} from 'react-native-navigation-hooks';
import {getProducts, fetchStocks, FETCH_PRODUCTS, FETCH_STOCKS} from 'app-redux/actions/api';
import {useDispatchRequest} from '@redux-requests/react';
import {useSelector} from 'react-redux';
import {setFilterOptions} from 'app-redux/actions/filter';
import {resetRequests} from '@redux-requests/core';
import {usePush} from 'utils/hooks';

function FilterSort({vendorId, page}: {vendorId: number; page: 'stock' | 'search' | 'searchStock' | 'product'}) {
    const dispatch = useDispatchRequest();
    const [sort, setSort] = useState();
    const push = usePush();
    const {t} = useTranslation();
    const stateFilter = useSelector(state => {
        if (page == 'stock') {
            return state.stockFilter;
        } else if (page == 'search') {
            return state.searchFilter;
        } else if (page == 'searchStock') {
            return state.searchStockFilter;
        } else {
            return state.productFilter;
        }
    });
    const sorts =
        page == 'stock'
            ? [
                  // {label: t('Popularity'), value: 'viewsCount|desc'},
                  {label: t('New in'), value: 'created_at|desc'},
                  // {label: t('Best Rating'), value: 'rate|desc'},
                  // {label: t('Best Seller'), value: 'soldCount|desc'},
                  {label: t('Price ( High to Low )'), value: 'price|desc'},
                  {label: t('Price ( Low to High )'), value: 'price|asc'},
              ]
            : [
                  // {label: t('Popularity'), value: 'viewsCount|desc'},
                  {label: t('New in'), value: 'created_at|desc'},
                  // {label: t('Best Rating'), value: 'rate|desc'},
                  // {label: t('Best Seller'), value: 'soldCount|desc'},
                  {label: t('Price ( High to Low )'), value: 'salePrice|desc'},
                  {label: t('Price ( Low to High )'), value: 'salePrice|asc'},
              ];
    const dialogHeader = (props: {title: string}, toggleModal: (show?: boolean) => void) => {
        const {title} = props;
        return (
            <View style={styles.sortModalHeader} row>
                <Text margin-15 secondary text2>
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
                pannableHeaderProps={{title: t('Sort By')}}>
                <ScrollView>{children}</ScrollView>
            </Dialog>
        );
    };
    return (
        <View row centerH>
            <Picker
                marginT-10
                // useSafeArea
                style={styles.button}
                value={sort}
                topBarProps={{title: t('Sort By')}}
                onChange={s => {
                    let [sortBy, sortSign] = s?.value.split('|');
                    // console.log('s.value', s?.value.split('|'));
                    // console.log('{...stateFilter, sortBy, sortSign}', {
                    //   ...stateFilter,
                    //   sortBy,
                    //   sortSign,
                    // });
                    dispatch(resetRequests([page == 'stock' ? FETCH_STOCKS : FETCH_PRODUCTS]));
                    let getItems = page == 'stock' ? fetchStocks : getProducts;
                    dispatch(setFilterOptions({...stateFilter, sortBy, sortSign, offset: 0}, page));
                    // dispatch(getItems({...stateFilter, sortBy, sortSign}));
                    setSort(s);
                }}
                renderPicker={item => {
                    return (
                        <View paddingV-10 style={styles.sortButton} row center>
                            <Image marginR-5 style={styles.sortButtonIcon} source={Assets.icons.sort} />
                            <Text text70>{item?.label || t('Sort By')}</Text>
                        </View>
                    );
                }}
                renderCustomModal={renderDialog}>
                {sorts.map(option => (
                    <Picker.Item
                        key={option.value}
                        value={option.value}
                        label={option.label}
                        renderItem={(item, props) => (
                            <View style={styles.pickerItem} paddingH-15 marginT-10 row centerV spread>
                                <View row centerV>
                                    <Text marginL-10 text4>
                                        {props.label}
                                    </Text>
                                </View>
                                {props.isSelected && <Image source={Assets.icons.check} />}
                            </View>
                        )}
                    />
                ))}
            </Picker>
            <Button
                onPress={() => push('Kartonah.Screens.Filters', {vendorId, page})}
                // paddingV-5
                // avoidInnerPadding
                style={styles.filterButton}
                row
                center>
                <Image marginR-5 style={styles.filterButtonIcon} source={Assets.icons.filter} />
                <Text text70>{t('Filter By')}</Text>
            </Button>
        </View>
    );
}

export default FilterSort;
