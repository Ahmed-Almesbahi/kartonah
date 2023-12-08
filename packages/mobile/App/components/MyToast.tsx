/**
 * Created by InspireUI on 28/02/2017.
 *
 * @format
 */

import React from 'react';
import {LayoutAnimation} from 'react-native';
import {isObject} from 'lodash';
import {connect} from 'react-redux';
import Timer from 'react-timer-mixin';
import {EventEmitter} from 'utils/helper';
import {Dialog, Toast, Text, Image, Assets, View, Colors, Button} from 'react-native-ui-lib';
import styles from 'theme/styles';
import i18next from 'i18next';

// import ShowAlert from './ShowAlert';

class MyToast extends React.Component {
    constructor(props) {
        super(props);
        this.nextToastId = 0;
        this.renderToast = this.renderToast.bind(this);
    }

    componentDidMount() {
        this.toastListener = EventEmitter.addListener('toast', this.doToast.bind(this));
    }

    componentWillUnmount() {
        this.toastListener.remove();
    }

    shouldComponentUpdate() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        return true;
    }

    render() {
        const {toast} = this.props;

        return toast?.list.map(this.renderToast);
    }

    renderToast(msg, index: number) {
        if ((msg && !msg.msg) || (msg && isObject(msg.msg))) {
            return null;
        }

        const {removeToast} = this.props;
        const onPress = () => removeToast(msg.key);

        // return <ShowAlert msg={msg.msg} type={msg.type} />;

        return (
            <Dialog
                key={index}
                migrate
                useSafeArea
                // key={this.getDialogKey(height)}
                // top={position === 'top'}
                // bottom={position === 'bottom'}
                // height={height}
                // panDirection={panDirection}
                containerStyle={styles.roundedDialog}
                visible={true}
                onDismiss={onPress}
                // renderPannableHeader={renderPannableHeader}
                // pannableHeaderProps={this.pannableTitle}
                // supportedOrientations={this.supportedOrientations}
            >
                <View style={styles.alert2}>
                    <Image
                        marginV-20
                        tintColor={msg.type == 'success' ? Colors.green10 : Colors.red10}
                        source={msg.type == 'success' ? Assets.icons.featherCheck : Assets.icons.error}
                    />
                    {/* {!!title && <Text style={styles.title}>{title}</Text>} */}
                    <Text text80 marginV-20 style={styles.message}>
                        {msg.msg}
                    </Text>

                    <Button
                        marginV-20
                        backgroundColor={Colors.secondary}
                        style={styles.button}
                        fullWidth
                        onPress={() => {
                            if (onPress) {
                                onPress();
                            }
                            // dismissOverlay();
                        }}>
                        <Text text80 white>
                            {i18next.t('Close')}
                        </Text>
                    </Button>
                </View>
            </Dialog>
        );

        return (
            <Toast
                // renderAttachment={this.renderBelowToast}
                visible={true}
                position={msg.position}
                backgroundColor={'#3f3f3f'}
                message={msg.msg}
                onDismiss={onPress}
                zIndex={9999999999999}
                // autoDismiss={3000}
                showDismiss={true}
                // action={{iconSource: Assets.icons.x, onPress: () => console.log('dismiss')}}
                // showLoader={showLoader}
            />
        );
    }

    doToast(msg, type = 'success', duration = 4000) {
        const {addToast, removeToast} = this.props;
        const key = this.nextToastId++; // unique message key
        addToast(msg, type, key);
        Timer.setTimeout(() => removeToast(key), duration);
    }
}

const mapStateToProps = state => {
    return {
        toast: state.toast,
        // toast: state,
    };
};

const mapDispatchToProps = dispatch => {
    const {actions} = require('../app-redux/reducers/toast');
    return {
        addToast: (msg, type, key) => dispatch(actions.addToast(msg, type, key)),
        removeToast: msg => dispatch(actions.removeToast(msg)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyToast);
