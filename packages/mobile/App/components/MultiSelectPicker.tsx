import React from 'react';
import {Assets, View, Text, Image, TouchableOpacity, Colors} from 'react-native-ui-lib';
import styles from 'theme/styles';
import {useNavigation} from 'react-native-navigation-hooks';

const MultiSelectPicker = ({title, data, selectedItems, setSelected}) => {
    const {showModal} = useNavigation();

    return (
        <>
            <TouchableOpacity
                onPress={() => {
                    showModal('Kartonah.Screens.MultiSelect', {
                        data,
                        selectedItems,
                        setSelected: items => {
                            setSelected(items);
                        },
                        title,
                    });
                }}>
                <View style={styles.filterItem} paddingV-5 paddingH-10 row spread centerV>
                    <Text secondary bold>
                        {title}{' '}
                        <Text text80 color={Colors.primary}>
                            {selectedItems?.length > 0 ? `(${selectedItems.length})` : ''}
                        </Text>
                    </Text>
                    <View centerV row>
                        {(selectedItems || []).slice(0, 4).map(_item => (
                            <Text text3 muted key={_item.value}>
                                {_item.label}
                                {','}
                            </Text>
                        ))}
                        <Image marginL-5 supportRTL source={Assets.icons.cheveronRight} />
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
};

export default MultiSelectPicker;
