import {Navigation} from 'react-native-navigation';
import {appRoots} from 'navigation';
import * as Sentry from '@sentry/react-native';
import OneSignal from 'react-native-onesignal';
import {CacheManager} from '@georstat/react-native-image-cache';
import {Dirs} from 'react-native-file-access';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();

CacheManager.config = {
    baseDir: `${Dirs.CacheDir}/images_cache/`,
    blurRadius: 15,
    sourceAnimationDuration: 1000,
    thumbnailAnimationDuration: 1000,
};
CacheManager.clearCache();

Sentry.init({
    dsn: __DEV__ ? '' : 'https://xxxxxx.ingest.sentry.io/5692220',
    // dsn:
    //   'https://xxxxxx.ingest.sentry.io/5692220',
    // debug: true,
});

// OneSignal.setLogLevel(6, 0);
OneSignal.setAppId('xxxxxx');
//END OneSignal Init Code

//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse(response => {
    // console.log('Prompt response:', response);
});

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
    console.log('OneSignal: notification will show in foreground:', notificationReceivedEvent);
    let notification = notificationReceivedEvent.getNotification();
    console.log('notification: ', notification);
    const data = notification.additionalData;
    console.log('additionalData: ', data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
    console.log('OneSignal: notification opened:', notification);
});

export default () => {
    Navigation.events().registerAppLaunchedListener(async () => {
        Navigation.setDefaultOptions({
            animations: {
                setRoot: {
                    waitForRender: true,
                },
            },
        });
        await appRoots.Initializing();
    });
};
