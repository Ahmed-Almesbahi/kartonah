import React from 'react';
import {FlatList, StatusBar} from 'react-native';
import {View, Colors, Text, Assets, Image, Button} from 'react-native-ui-lib';
import BottomTabsBg from 'components/BottomTabsBg';
import HeaderSearch from 'components/HeaderSearch';
import {useTranslation} from 'react-i18next';
import ProductItem from 'components/ProductItem';
import {ProductItemType} from 'typescript/types';
import styles from 'theme/styles';
import {RootStateOrAny, useSelector} from 'react-redux';
import {useQuery} from '@redux-requests/react';
import {fetchFavourites, FETCH_FAVOURITES} from 'app-redux/actions/api';
import EmptyResult from 'components/EmptyResult';
import {auth as authScreen} from 'navigation/appRoots';
import Header from 'components/Header';

const Favorite = () => {
    const {t} = useTranslation();
    const products = useSelector(state => state.fav);
    const userId = useSelector(state => state.auth.id);
    // const products = useQuery({
    //   type: FETCH_FAVOURITES,
    //   action: fetchFavourites,
    //   variables: [],
    //   autoLoad: true,
    // });

    const renderProductItem = ({item}: {item: ProductItemType}) => <ProductItem key={item.id} item={item} />;
    return (
        <View backgroundColor={Colors.light} flex>
            <StatusBar animated={true} backgroundColor="white" barStyle={'dark-content'} />
            <HeaderSearch showChat title={t('Search for ...')} />
            {/* <Header white  title={t('Favorite')} /> */}

            <FlatList
                ListHeaderComponent={() => <View marginT-10 />}
                contentContainerStyle={styles.productFlatList}
                bounces={false}
                // data={products?.data?.rows}
                data={products}
                renderItem={renderProductItem}
                contentContainerStyle={{flexGrow: 1}}
                ListEmptyComponent={
                    <EmptyResult
                        icon={<Image source={Assets.images.emptyFav} />}
                        msg={
                            <>
                                <Text marginT-20 text60 color={Colors.dark40}>
                                    {t('Nothing In Here!')}
                                </Text>
                                <Text text80 color={Colors.dark40}>
                                    {t('Explore around to save items')}
                                </Text>
                                <Text text80 color={Colors.dark40}>
                                    {t('in your favorite')}
                                </Text>
                                {!userId && (
                                    <Button marginT-20 br20 primary onPress={() => authScreen()}>
                                        <Text text90>{t('Login first')}</Text>
                                    </Button>
                                )}
                            </>
                        }
                    />
                }
                numColumns={2}
            />

            <BottomTabsBg />
        </View>
    );
};

Favorite.screenName = 'Kartonah.Screens.Favorite';

export default Favorite;
