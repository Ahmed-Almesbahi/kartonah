/** @format */

import React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import {useNavigation} from 'react-native-navigation-hooks';
import {View, Button, Image, Assets} from 'react-native-ui-lib';
import {getProductImage} from 'utils/helper';

const PhotoModal = ({images}) => {

  const {dismissModal} = useNavigation();
  return (
    <View flex bg-white>
      <View useSafeArea row absT style={{zIndex: 1}}>
        <Button
          avoidMinWidth
          link
          marginT-20
          marginH-20
          onPress={() => {
            dismissModal();
          }}>
          <Image supportRTL source={Assets.icons.x} />
        </Button>
      </View>
      <ImageViewer
        imageUrls={images.map((image, index) => ({
          url: getProductImage(image, 720),
        }))}
        backgroundColor="white"
        renderIndicator={() => <View />}
      />
    </View>
  );
};

PhotoModal.screenName = 'Kartonah.Screens.PhotoModal';

PhotoModal.options = {
  bottomTabs: {
    visible: false,
  },
};

export default PhotoModal;
