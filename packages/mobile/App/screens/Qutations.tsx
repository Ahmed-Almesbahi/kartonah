import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {View, Colors, KeyboardAwareScrollView, Button, Text, Image, Assets} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import styles from 'theme/styles';

// import {qutations} from 'data/demos';
import QutationItem from 'components/QutationItem';
import {QutationItemType} from 'typescript/types';
import {useNavigation} from 'react-native-navigation-hooks';
import {useQuery} from '@redux-requests/react';
import {fetchQuotations, FETCH_QUOTATIONS} from 'app-redux/actions/api';
import {quotations} from 'typescript/api.types';
import Spinner from 'components/Spinner';
import {useSelector} from 'react-redux';

const Qutations = () => {
    const {t} = useTranslation();
    const userId = useSelector(state => state.auth.id);
    const [variables, setVariables] = useState({
        clientId: userId,
    });
    const {showModal} = useNavigation();
    const quotations = useQuery({
        type: FETCH_QUOTATIONS,
        action: fetchQuotations,
        variables: [variables],
        autoLoad: true,
    });
    const FlatListFooter = () => {
        return (
            <>
                {quotations.loading == true && <Spinner />}
                <Button
                    margin-10
                    backgroundColor={Colors.secondary}
                    fullWidth
                    onPress={() => showModal('Kartonah.Screens.NewQutation')}
                    style={styles.button}>
                    <Image tintColor={Colors.white} marginR-5 source={Assets.icons.addIcon} />
                    <Text text80 white>
                        {t('Add New Qutation')}
                    </Text>
                </Button>
            </>
        );
    };

    const renderCardItem = ({item}: {item: quotations.Row; index: number}) => (
        <QutationItem key={item.id} item={item} />
    );

    return (
        <View flex backgroundColor={Colors.light}>
            <Header showBack white title={t('My Qutations')} />
            <KeyboardAwareScrollView bounces={false}>
                <FlatList
                    ListFooterComponent={FlatListFooter}
                    bounces={false}
                    data={quotations.data?.rows}
                    renderItem={renderCardItem}
                />
            </KeyboardAwareScrollView>
        </View>
    );
};

Qutations.screenName = 'Kartonah.Screens.Qutations';

Qutations.options = {
    bottomTabs: {
        visible: false,
    },
};

export default Qutations;
