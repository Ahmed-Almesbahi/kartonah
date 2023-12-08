import React from 'react';
import Card from 'react-native-ui-lib/card';
import Text from 'react-native-ui-lib/text';
import View from 'react-native-ui-lib/view';
import Image from 'react-native-ui-lib/image';
import {Assets, Colors} from 'react-native-ui-lib';
import styles from 'theme/styles';

import {useTranslation} from 'react-i18next';
import {useNavigation} from 'react-native-navigation-hooks';
import moment from 'moment';
import {quotations} from 'typescript/api.types';
import {usePush} from 'utils/hooks';
const QutationItem = ({item}: {item: quotations.Row}) => {
    const {t} = useTranslation();
    const push = usePush();

    return (
        <Card
            enableShadow={false}
            borderRadius={10}
            marginH-10
            marginT-10
            padding-10
            onPress={() => push('Kartonah.Screens.QutationDetails', {item: item})}
            elevation={0}>
            <View centerV row spread>
                <View centerV row>
                    <Image source={Assets.icons.qutation} />
                    <Text text80 marginL-10 secondary>
                        {item.id}
                    </Text>
                </View>

                <Text text80 secondary textMuted>
                    {t('placed at')} {moment(item.created_at).format('MMM Do YYYY')}
                </Text>
            </View>
            <View paddingV-10>
                <View style={styles.fancySeparator} backgroundColor={Colors.light} />
            </View>
            <View marginV-10 centerV row spread>
                <View>
                    <Text text80 secondary textMuted>
                        {t('Name')}
                    </Text>
                    <Text text2 secondary>
                        {item.title}
                    </Text>
                </View>
            </View>
            <View marginV-10 centerV row spread>
                <View flex-15>
                    <Text text80 secondary textMuted>
                        {t('Last activity')}
                    </Text>
                    <Text text2 secondary>
                        {moment(item.updated_at).fromNow()}
                    </Text>
                </View>
                <View flex-10>
                    <Text text80 secondary textMuted>
                        {t('Status')}
                    </Text>
                    <View centerV row>
                        <View style={styles.status} backgroundColor={Colors.green10} />
                        <Text marginL-5 text2 secondary>
                            {item.status ? 'Active' : 'Closed'}
                        </Text>
                    </View>
                </View>
            </View>
        </Card>
    );
};

export default QutationItem;
