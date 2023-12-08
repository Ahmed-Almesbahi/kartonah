import {Platform} from 'react-native';
import {Colors, Typography, ThemeManager} from 'react-native-ui-lib';

import 'theme/assets';
import {FONT, FONT_BOLD} from 'utils/constants';

export const bold = Platform.OS == 'ios' ? 'bold' : undefined;
// const bold = 'bold';

Colors.loadColors({
    primary: '#fabb27',
    secondary: '#0d1435',
    danger: '#d42929',
    dark: '#41484f',
    light: '#eff2f6',
    inputBorder: '#DDE1E6',
    google: '#EA4335',
    facebook: '#0E6CD8',
    twitter: '#28A5F9',
    tabColor: '#9EA1AE',
});

ThemeManager.setComponentTheme('PickerModal', {
    //
    searchInput: {
        fontFamily: FONT,
    },
    styles: {
        fontFamily: FONT,
        searchInput: {
            fontFamily: FONT,
        },
    },
    style: {
        fontFamily: FONT,
    },
});

// ThemeManager.setComponentTheme('Text', props => {
//   style: {
//     fontFamily: FONT,
//     // lineHeight: 20,
//   },
// });

// ThemeManager.setComponentTheme('Text', props => {
//   return {
//     style: [Typography.cairo, props.style],
//   };
// });
// ThemeManager.setComponentForcedTheme('Text', props => {
//   return {
//     style: [
//       // Typography.cairo,
//       props.style,
//     ],
//   };
// });

const extra = 4;

Typography.loadTypographies({
    cairo: {
        fontFamily: FONT,
    },
    cairoBold: {
        fontFamily: FONT_BOLD,
    },
    text10: {
        ...Typography.text10,
        fontWeight: bold,
        fontFamily: FONT_BOLD,
    },
    text20: {
        ...Typography.text20,
        fontWeight: bold,
        fontFamily: FONT_BOLD,
    },
    text30: {
        ...Typography.text30,
        fontWeight: bold,
        fontFamily: FONT_BOLD,
    },
    text40: {
        ...Typography.text40,
        fontWeight: bold,
        fontFamily: FONT_BOLD,
    },
    text50: {
        ...Typography.text50,
        fontWeight: bold,
        fontFamily: FONT_BOLD,
    },
    text65: {
        ...Typography.text65,
        fontFamily: FONT_BOLD,
    },
    text60: {
        ...Typography.text60,
        lineHeight: 25,
        fontWeight: bold,
        fontFamily: FONT_BOLD,
    },
    text70: {
        ...Typography.text70,
        fontFamily: FONT,
    },
    text80: {
        ...Typography.text80,
        fontFamily: FONT,
    },
    text90: {
        ...Typography.text90,
        fontWeight: 'normal',
        fontFamily: FONT,
    },
    text100: {
        ...Typography.text100,
        fontWeight: 'normal',
        fontFamily: FONT,
    },
    hBig: {
        fontSize: 28,
        fontWeight: 'normal',
        lineHeight: 25 + extra,
        fontFamily: FONT,
    },
    h1: {
        fontSize: 18,
        fontWeight: bold,
        lineHeight: 25 + extra,
        textTransform: 'capitalize',
        fontFamily: FONT_BOLD,
    },
    h2: {
        fontSize: 18,
        lineHeight: 25 + extra,
        textTransform: 'capitalize',
        fontFamily: FONT,
    },
    h3: {
        fontSize: 14,
        fontWeight: bold,
        lineHeight: 24 + extra,
        fontFamily: FONT_BOLD,
    },
    hBigBold: {
        fontSize: 28,
        fontWeight: bold,
        lineHeight: 42 + extra,
        // textTransform: 'capitalize',
        fontFamily: FONT_BOLD,
    },
    header: {
        fontSize: 18,
        fontWeight: bold,
        fontFamily: FONT_BOLD,
    },
    text1: {
        fontSize: 12,
        fontWeight: 'normal',
        lineHeight: 16,
        fontFamily: FONT,
    },
    text2: {
        fontSize: 16,
        fontWeight: 'normal',
        lineHeight: 18 + extra,
        fontFamily: FONT,
    },
    text3: {
        fontSize: 10,
        fontWeight: 'normal',
        lineHeight: 14 + extra,
        fontFamily: FONT,
    },
    text4: {
        fontSize: 14,
        fontWeight: bold,
        lineHeight: 18 + extra,
        fontFamily: FONT,
    },
    text5: {
        fontSize: 18,
        fontWeight: bold,
        lineHeight: 18 + extra,
        fontFamily: FONT,
    },
    buttonSmal: {
        fontSize: 10,
        fontWeight: 'normal',
        lineHeight: 14 + extra,
        fontFamily: FONT,
    },
    textMuted: {
        opacity: 0.5,
        fontFamily: FONT,
    },
    fontFamily1: {
        // fontFamily: 'Myriad Pro',
        fontFamily: FONT,
    },
    btnText: {
        fontWeight: bold,
        fontFamily: FONT_BOLD,
    },
    bold: {
        fontWeight: bold,
        fontFamily: FONT_BOLD,
    },
    superscriptText2: {
        fontSize: 10,
        lineHeight: 24 + extra,
        marginTop: -10,
        // fontWeight: 'bold',
        fontFamily: FONT_BOLD,
    },
});
