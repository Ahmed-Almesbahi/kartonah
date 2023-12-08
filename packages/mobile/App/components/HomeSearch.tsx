import React, {useRef, useState} from 'react';
import {View, Button, Image, Assets, Colors, Text} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useNavigation} from 'react-native-navigation-hooks';
import {useDispatch, useSelector} from 'react-redux';
import {setFilterOption} from 'app-redux/actions/filter';
import {FETCH_HOME_SEARCH_PRODUCTS, getHomeSearchProducts} from 'app-redux/actions/api';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import {useQuery} from '@redux-requests/react';
import {ActivityIndicator, Dimensions} from 'react-native';
import {CachedImage} from '@georstat/react-native-image-cache';
import {getProductImage} from 'utils/helper';
import {usePush} from 'utils/hooks';

const HomeSearch = ({title, back}: {title: string; back?: boolean}) => {
    const {pop} = useNavigation();
    const push = usePush();
    const dispatch = useDispatch();

    const _pop = () => {
        pop();
    };

    const searchRef = useRef();
    const searchFilter = useSelector(state => state.searchFilter);
    const [variables, setVariables] = useState({...searchFilter, search: ''});

    const suggestionsList = useQuery({
        type: FETCH_HOME_SEARCH_PRODUCTS,
        action: getHomeSearchProducts,
        variables: [variables],
        autoLoad: true,
    });

    return (
        <View flex style={{paddingLeft: 20, paddingRight: 20}}>
            <AutocompleteDropdown
                ref={searchRef}
                // controller={controller => {
                //   dropdownController.current = controller;
                // }}
                dataSet={
                    suggestionsList?.data?.rows.map(suggestion => ({
                        id: suggestion.id,
                        title: suggestion.title,
                        files: suggestion.files,
                    })) || []
                }
                onChangeText={q => {
                    if (q.length >= 3) {
                        setVariables({...variables, search: q});
                        // suggestionsList.load();
                    }
                }}
                onSelectItem={item => {
                    if (item && item.title && item?.title?.length >= 3) {
                        setVariables({...variables, search: item.title});
                    }
                }}
                suggestionsListMaxHeight={Dimensions.get('window').height * 0.4}
                onClear={() => {
                    console.log('searchRef', searchRef);
                    // dispatch(resetRequests([FETCH_PRODUCTS]));
                }}
                //  onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
                onSubmit={e => {
                    console.log('how?');
                }}
                // onOpenSuggestionsList={onOpenSuggestionsList}
                loading={suggestionsList.loading}
                textInputProps={{
                    placeholder: title,
                    autoCorrect: false,
                    autoCapitalize: 'none',
                    style: [
                        styles.textField,
                        back ? styles.searchFieldBack : styles.searchFieldChat,
                        // borderRadius: 25,
                        // backgroundColor: '#383b42',
                        // color: Colors.secondary,
                        // paddingLeft: 18,
                    ],
                }}
                rightButtonsContainerStyle={{
                    right: 2,
                    height: 30,
                    top: 5,
                    // alignSelfs: 'center',
                    // backgroundColor: '#383b42',
                }}
                inputContainerStyle={{
                    backgroundColor: 'transparent',
                }}
                suggestionsListContainerStyle={
                    {
                        // backgroundColor: '#383b42',
                        // zIndex: 10000000,
                        // position: 'absolute',
                        // height: 500,
                    }
                }
                containerStyle={{flexGrow: 1, flexShrink: 1, marginBottom: 10}}
                renderItem={(item, text) => {
                    return (
                        <View row>
                            <Image
                                source={{uri: getProductImage(item?.files[0]?.fileName, 400)}}
                                // thumbnailSource={getProductImage(item?.files[0]?.fileName, 400)}
                                // loadingImageComponent={ActivityIndicator}
                                // resizeMode="cover"
                                style={{
                                    height: 50,
                                    borderRadius: 5,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 0,
                                    padding: 0,
                                    margin: 0,
                                    width: 50,
                                    borderWidth: 0,
                                }}
                            />
                            <Text style={{padding: 15}}>{item.title}</Text>
                        </View>
                    );
                }}
                ChevronIconComponent={
                    // <Feather name="x-circle" size={18} color="#fff" />
                    <Image supportRTL source={Assets.icons.x} />
                }
                ClearIconComponent={
                    <Button
                        avoidMinWidth
                        avoidInnerPadding
                        onPress={() => {
                            dispatch(setFilterOption('search', variables.search, 'search'));
                            push('Kartonah.Screens.Search', {page: 'search'});
                        }}
                        style={{
                            borderRadius: 5,
                            width: 30,
                            height: 30,
                            // marginTop: -10,
                            // marginRight: -10,
                        }}
                        backgroundColor={Colors.secondary}>
                        <Image
                            tintColor={Colors.primary}
                            source={Assets.icons.headerSearch}
                            style={styles.headerSearchButtonImage}
                        />
                    </Button>
                    // <Image supportRTL source={Assets.icons.x} />
                    // <Feather name="chevron-down" size={20} color="#fff" />
                }
                // debounce={600}
                useFilter={false} // prevent rerender twice
                inputHeight={40}
                showChevron={false}
                showClear={true}
                clearOnFocus={false}
                closeOnBlur={true}
                closeOnSubmit={true}
            />
        </View>
    );
};

export default HomeSearch;
