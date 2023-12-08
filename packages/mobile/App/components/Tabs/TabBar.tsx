import React from 'react';
import {StyleSheet, Text, View, ViewPropTypes} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import Button from './Button';
import {FONT} from 'utils/constants';

class DefaultTabBar extends React.Component {
  renderTab = (name, page, isTabActive, onPressHandler) => {
    const textColor = isTabActive ? Colors.white : Colors.secondary;
    const backgroundColor = isTabActive ? Colors.secondary : 'transparent';
    return (
      <Button
        style={name.length > 12 ? styles.big : styles.small}
        key={name}
        accessible={true}
        accessibilityLabel={name}
        accessibilityTraits="button"
        onPress={() => onPressHandler(page)}>
        <View style={[styles.tab, {backgroundColor}]}>
          <Text style={[styles.tabText, {color: textColor}]}>{name}</Text>
        </View>
      </Button>
    );
  };

  render() {
    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
      </View>
    );
  }
}

DefaultTabBar.propTypes = {
  goToPage: PropTypes.func,
  activeTab: PropTypes.number,
  tabs: PropTypes.array,
  backgroundColor: PropTypes.string,
  activeTextColor: PropTypes.string,
  inactiveTextColor: PropTypes.string,
  textStyle: Text.propTypes.style,
  tabStyle: ViewPropTypes.style,
  renderTab: PropTypes.func,
  underlineStyle: ViewPropTypes.style,
};

DefaultTabBar.defaultProps = {
  activeTextColor: '#fff',
  inactiveTextColor: Colors.secondary,
  backgroundColor: null,
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  tabs: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 7,
    backgroundColor: '#DEE1E7',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  tabText: {
    fontFamily: FONT,
    fontSize: 12,
    marginHorizontal: 5,
  },
  big: {
    flex: 1.3,
  },
  small: {
    flex: 1,
  },
});

export default DefaultTabBar;
