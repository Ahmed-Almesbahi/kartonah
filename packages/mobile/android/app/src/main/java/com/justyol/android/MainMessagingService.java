package com.justyol.android;
import io.invertase.firebase.messaging.*;
import android.content.Intent;
import android.content.Context;
import io.intercom.android.sdk.push.IntercomPushClient;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import android.util.Log;
import java.util.Map;

public class MainMessagingService extends FirebaseMessagingService {
    private static final String TAG = "MainMessagingService";
    private final IntercomPushClient intercomPushClient = new IntercomPushClient();

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        Map message = remoteMessage.getData();

        if (intercomPushClient.isIntercomPush(message)) {
            Log.d(TAG, "Intercom message received");
            intercomPushClient.handlePush(getApplication(), message);
        } else {
            super.onMessageReceived(remoteMessage);
        }
    }
}