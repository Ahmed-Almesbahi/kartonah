import React, {useCallback, useState, useEffect} from 'react';
import {View, Colors, Assets, Image} from 'react-native-ui-lib';
import {
  GiftedChat,
  Send,
  Composer,
  Bubble,
  MessageText,
  Avatar,
} from 'react-native-gifted-chat';
import Header from 'components/Header';
import styles from 'theme/styles';
import {messages as messagesDemo} from 'data/demos';
import {useTranslation} from 'react-i18next';
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const {t} = useTranslation();

  useEffect(() => {
    setMessages(messagesDemo);
  }, []);
  const onSend = useCallback((msgs = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, msgs),
    );
  }, []);
  return (
    <View flex backgroundColor={Colors.white}>
      <Header showBack white title={'Bull&Bear'} />
      <GiftedChat
        alwaysShowSend
        showUserAvatar
        renderAvatarOnTop
        messages={messages}
        placeholder={t('Enter message here')}
        onSend={(msgs) => onSend(msgs)}
        user={{
          _id: 1,
          name: 'Jane Doe',
          avatar: 'https://placeimg.com/400/400/people',
        }}
        renderSend={renderSend}
        renderComposer={renderComposer}
        renderBubble={renderBubble}
        renderMessageText={renderMessageText}
        renderAvatar={renderAvatar}
      />
    </View>
  );
};

const renderBubble = (props) => (
  <Bubble
    {...props}
    wrapperStyle={{
      left: {backgroundColor: Colors.light},
      right: {backgroundColor: Colors.secondary},
    }}
    tickStyle={{}}
  />
);
const renderAvatar = (props) => (
  <Avatar
    {...props}
    imageStyle={{
      left: {borderRadius: 0},
      right: {borderRadius: 0},
    }}
  />
);
const renderComposer = (props) => (
  <Composer
    {...props}
    textInputStyle={[styles.textField, styles.chatComposer]}
  />
);
const renderMessageText = (props) => (
  <MessageText
    {...props}
    textStyle={{
      left: {color: Colors.secodary},
      right: {color: Colors.white},
    }}
  />
);
const renderSend = (props) => {
  return (
    <Send {...props} containerStyle={styles.sendContainer}>
      <Image style={styles.sendIcon} source={Assets.icons.send} />
    </Send>
  );
};

Chat.screenName = 'Kartonah.Screens.Chat';

Chat.options = {
  bottomTabs: {
    visible: false,
  },
};

export default Chat;
