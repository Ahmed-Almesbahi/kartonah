import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  AppState,
  DeviceEventEmitter,
} from 'react-native';
import {ProgressBar, Colors, Text, View} from 'react-native-ui-lib';
const PropTypes = require('prop-types');
// import ProgressBar from './ProgressBar';
// import update from './images/update.png';
import CodePush from 'react-native-code-push';
import {withTranslation} from 'react-i18next';

const {height, width} = Dimensions.get('window');
let SWidth, SHeight;

if (height > width) {
  SWidth = width;
  SHeight = height;
} else {
  SWidth = height;
  SHeight = width;
}

class HotUpdate extends Component {
  constructor(props) {
    super(props);
    this.listener;
    this.currProgress = 0.0;
    this.syncMessage = '';
    this.state = {
      showUpdate: false,
      isSync: false,
      update: false,
      syncStatus: '',
      isMandatory: false,
      next: false,
      currProgress: 0.0,
      updateInfo: {},
    };
  }

  static propTypes = {
    /**
     *  code-push deploymentKey Optional parameters, no native ones will be read;
     */
    deploymentKey: PropTypes.string,
    /**
     *  code-push CheckFrequency Check the update strategy, only 2 types are provided, true update every time you return to the foreground (high frequency), false update is detected only when the app is started, the default is true;
     */
    isActiveCheck: PropTypes.bool,
  };

  static defaultProps = {
    isActiveCheck: true,
  };

  //   componentWillMount() {
  //     CodePush.disallowRestart();
  //   }

  componentDidMount() {
    CodePush.allowRestart();
    if (this.props.isActiveCheck) {
      AppState.addEventListener('change', this._handleAppStateChange);
    }
    this._handleAppStateChange('active');

    this.listener = DeviceEventEmitter.addListener(
      'ImmediateCheckCodePush',
      e => {
        this.setState({next: false}, () => {
          this._handleAppStateChange('active');
        });
      },
    );
  }

  componentWillUnmount() {
    if (this.props.isActiveCheck) {
      AppState.removeEventListener('change');
    }
    this.listener && this.listener.remove();
  }

  _handleAppStateChange = nextAppState => {
    if (nextAppState === 'active') {
      this.syncImmediate();
    }
  };

  syncImmediate() {
    if (!this.state.next) {
      CodePush.checkForUpdate(this.props.deploymentKey).then(update => {
        this.props.updateVariable(update);
        if (update) {
          console.log(
            '-------CodePush-------New hot update package detected--',
          );
          console.log(update);
          this.setState({
            showUpdate: true,
            updateInfo: update,
            isMandatory: update.isMandatory,
          });
          this._immediateUpdate();
        }
        if (update == null) {
          this.props.onComplete();
        }
      });
    }
  }

  _immediateUpdate() {
    if (!this.state.isSync) {
      this.setState({isSync: true}, () => {
        let codePushOptions = {
          installMode: CodePush.InstallMode.ON_NEXT_RESTART,
          mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
        };
        if (this.props.deploymentKey) {
          codePushOptions.deploymentKey = this.props.deploymentKey;
        }
        CodePush.sync(
          codePushOptions,
          this.codePushStatusDidChange.bind(this),
          this.codePushDownloadDidProgress.bind(this),
        );
      });
    }
  }

  codePushStatusDidChange(syncStatus) {
    console.log('-codePushStatusDidChange-');
    console.log(syncStatus);
    let syncMessage = this.state.syncMessage;
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        this.syncMessage = this.props.t('Downloading package');
        syncMessage = this.props.t('Downloading the update package') + '...';
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        this.syncMessage = this.props.t('Awaiting user action');
        syncMessage = this.props.t('Waiting for selection update');
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        this.syncMessage = this.props.t('Installing update');
        syncMessage = this.props.t('Installing and updating...');
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        this.syncMessage = this.props.t('App up to date.');
        syncMessage = this.props.t('App up to date.');
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        this.syncMessage = this.props.t('Update cancelled by user');
        syncMessage = this.props.t('User canceled update');
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        this.syncMessage = this.props.t(
          'Update installed and will be applied on restart.',
        );
        syncMessage = this.props.t(
          'Installation is successful, wait for restart!',
        );
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        this.syncMessage = this.props.t('An unknown error occurred');
        syncMessage = this.props.t(
          'Update error, please restart the application!',
        );
        this.setState({showUpdate: false});
        break;
    }
    console.log(syncMessage);
  }

  codePushDownloadDidProgress(progress) {
    console.log('-codePushDownloadDidProgress------');
    console.log(progress);
    if (this.state.isSync) {
      let temp = parseFloat(
        progress.receivedBytes / progress.totalBytes,
      ).toFixed(2);
      this.setState({currProgress: temp}, () => {
        this.currProgress = temp;
        if (temp >= 1) {
          console.log(
            '------The hot update package download is complete------',
          );
          if (!this.state.isMandatory) {
            this.setState({update: true});
          } else {
            this.setState({showUpdate: false});
          }
        } else {
          this.refs.progressBar.progress = temp;
          this.refs.progressBar.buffer = temp > 0.2 ? temp - 0.1 : 0;
        }
      });
    }
  }

  render() {
    return this.syncMessage ? (
      <View style={styles.container}>
        <View style={[{marginBottom: 5}]}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <View style={[{minHeight: 120}]}>
              <Text style={{color: '#000', fontSize: 17, marginTop: 10}} bold>
                {this.syncMessage ? this.syncMessage : ''}
              </Text>
            </View>

            <View
              style={{
                height: 60,
                width: 0.8 * SWidth,
                position: 'absolute',
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {this.state.update ? (
                <TouchableOpacity
                  onPress={() => {
                    console.log(
                      '--------Click on---------Install the update now-----------',
                    );
                    this.setState({showUpdate: false}, () => {
                      CodePush.restartApp(true);
                    });
                  }}
                  style={{height: 40, width: 0.5 * SWidth}}>
                  <View
                    style={{
                      height: 40,
                      width: 0.5 * SWidth,
                      flex: 1,
                      alignItems: 'center',
                      borderRadius: 20,
                      justifyContent: 'center',
                      backgroundColor: '#2979FF',
                    }}>
                    <Text text80 style={{color: '#fff'}}>
                      {this.props.t('Install the update now')}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : this.state.isSync ? (
                <View
                  style={{
                    height: 60,
                    width: 0.8 * SWidth - 40,
                    // alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text text80 center>{`${Math.ceil(
                    this.state.currProgress * 100,
                  )}%`}</Text>

                  <ProgressBar
                    height={10}
                    ref="progressBar"
                    progress={Math.ceil(this.state.currProgress * 100)}
                  />

                  <Text text80 center style={{marginTop: 10, color: '#333'}}>
                    {this.props.t('Downloading the update package')}
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    justifyContent: 'center',
                    height: 60,
                    width: 0.8 * SWidth,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {},
});

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  updateDialog: null,
};

export default CodePush(codePushOptions)(withTranslation()(HotUpdate));
