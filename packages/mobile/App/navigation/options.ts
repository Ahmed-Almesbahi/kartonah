import {Navigation} from 'react-native-navigation';
import {Colors} from 'react-native-ui-lib';
import {Dimensions} from 'react-native';
// import animations from './Animations';
const width = Math.round(Dimensions.get('window').width);

export const setDefaultOptions = lang => {
  return Navigation.setDefaultOptions({
    statusBar: {
      style: 'light',
    },
    topBar: {
      visible: false,
      animate: false,
    },
    bottomTabs: {
      animate: false,
      drawBehind: false,
      // tabsAttachMode: 'onSwitchToTab',
      animateTabSelection: false,
      preferLargeIcons: true,
      // elevation: 0,
      hideShadow: true,
      // backgroundColor: Colors.white,
      // tabsAttachMode: 'afterInitialTab',
      titleDisplayMode: 'alwaysShow',
    },
    layout: {
      backgroundColor: Colors.white,
      orientation: ['portrait'],
      // direction: i18next.dir(),
      direction: lang == 'ar' || lang == 'AR' ? 'rtl' : 'ltr',
    },
    // animations,
    animations: {
      setStackRoot: {
        waitForRender: true,
        enabled: true,

        // alpha: {
        //   from: 0,
        //   to: 1,
        //   duration: 1000,
        //   startDelay: 100,
        //   interpolation: {type: 'accelerate'},
        // },

        // alpha: {
        //   from: 0,
        //   to: 1,
        //   duration: 0,
        // },
      },
      setRoot: {
        waitForRender: true,
        enabled: true,

        // enter: {
        //   waitForRender: true,
        //   enabled: false,
        //   translationY: {
        //     from: 0,
        //     to: 1,
        //     // duration: 3,
        //     duration: 1000,
        //   },
        // },

        alpha: {
          from: 0,
          to: 1,
          duration: 0,
          startDelay: 0,
          interpolation: {type: 'accelerate'},
        },
        // alpha: {
        //   from: 0,
        //   to: 1,
        //   duration: 0,
        // },
      },
      push: {
        waitForRender: true,
        enabled: true,
        // content: {
        //   waitForRender: true,
        //   enabled: true,
        //   alpha: {
        //     from: 0,
        //     to: 1,
        //     duration: 0,
        //   },
        // },
      },
      pop: {
        waitForRender: true,
        enabled: true,
        // content: {
        //   waitForRender: true,
        //   enabled: true,
        //   alpha: {
        //     from: 0,
        //     to: 1,
        //     duration: 0,
        //   },
        // },
      },
    },
  });
};
