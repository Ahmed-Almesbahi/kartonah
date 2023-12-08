import React, {useState} from 'react';
import {View, Colors} from 'react-native-ui-lib';
import Header from 'components/Header';
import {useTranslation} from 'react-i18next';
import {useNavigation} from 'react-native-navigation-hooks';
import {MultipleSelectPicker} from 'react-native-multi-select-picker';
import {FONT} from 'utils/constants';

const MultiSelect = ({data, selectedItems, setSelected, title}) => {
  const [state, setState] = useState({
    selectedItems: selectedItems || [],
  });

  const {dismissModal} = useNavigation();

  return (
    <View flex backgroundColor={Colors.white}>
      <Header
        showBack
        onBackClick={() => {
          setSelected(state.selectedItems);
          dismissModal();
        }}
        white
        title={title}
      />
      <MultipleSelectPicker
        items={data}
        onSelectionsChange={ele => {
          setState({selectedItems: ele});
        }}
        selectedItems={state.selectedItems}
        buttonStyle={{
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        labelStyle={{fontFamily: FONT}}
        checkboxStyle={{height: 20, width: 20}}
      />
    </View>
  );
};

MultiSelect.screenName = 'Kartonah.Screens.MultiSelect';

MultiSelect.options = {
  bottomTabs: {
    visible: false,
  },
};

export default MultiSelect;
