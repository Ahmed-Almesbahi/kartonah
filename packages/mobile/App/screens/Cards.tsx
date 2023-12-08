import React from 'react';
import {FlatList} from 'react-native';
import {View, Colors, KeyboardAwareScrollView, Button, Text, Image, Assets} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';

// import {cards} from 'data/demos';
import CardItem from 'components/CardItem';
import {CardItemType} from 'typescript/types';
import {useNavigation} from 'react-native-navigation-hooks';
import {useQuery} from '@redux-requests/react';
import {fetchCards, FETCH_CARDS} from 'app-redux/actions/api';
import {useSelector} from 'react-redux';

const Cards = ({modal, onSelect}) => {
    const {t} = useTranslation();
    const {showModal, dismissModal, pop} = useNavigation();
    const userId = useSelector(state => state.auth.id);

    const cards = useQuery({
        type: FETCH_CARDS,
        action: fetchCards,
        variables: [userId],
        autoLoad: true,
    });
    const FlatListFooter = () => (
        <Button
            margin-10
            backgroundColor={Colors.secondary}
            fullWidth
            onPress={() => showModal('Kartonah.Screens.NewCard')}
            style={styles.button}>
            <Image tintColor={Colors.white} marginR-5 source={Assets.icons.addIcon} />
            <Text text80 white>
                {t('Add new Card')}
            </Text>
        </Button>
    );

    const renderCardItem = ({item}: {item: CardItemType; index: number}) => (
        <CardItem
            key={item.id}
            item={item}
            onCardPress={() => {
                if (modal) {
                    onSelect(item);
                    // dismissModal();
                    pop();
                } else {
                    showModal('Kartonah.Screens.NewCard', {edit: true, item});
                }
            }}
        />
    );

    return (
        <View flex backgroundColor={Colors.light}>
            <Header showBack white title={t('My Cards')} />

            <KeyboardAwareScrollView bounces={false}>
                <FlatList
                    ListFooterComponent={FlatListFooter}
                    bounces={false}
                    data={cards.data?.rows}
                    renderItem={renderCardItem}
                />
            </KeyboardAwareScrollView>
        </View>
    );
};

Cards.screenName = 'Kartonah.Screens.Cards';

Cards.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Cards;
