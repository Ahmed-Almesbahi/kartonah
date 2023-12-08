import React from 'react';
import {ActivityIndicator, Dimensions, ImageSourcePropType, TouchableOpacity} from 'react-native';
import {AnimatedImage, Card, ProgressiveImage, Text, Colors} from 'react-native-ui-lib';

import * as Animatable from 'react-native-animatable';
import styles from 'theme/styles';

const {width} = Dimensions.get('window');
const squareSide = width / 3 - 20;

const CategoryItemImage = ({
    image,
    name,
    onPress,
    isActive,
}: {
    image: ImageSourcePropType;
    name: string;
    isActive: boolean;
    onPress: () => void;
}) => {
    // const [active, setActive] = useState(false);
    return (
        <TouchableOpacity
            onPress={() => {
                // setActive(!active);
                onPress();
            }}
            style={styles.categoryItemImageCardContanier}>
            <Card
                style={styles.categoryItemImageCard}
                elevation={0}
                enableShadow={false}
                height={squareSide}
                width={squareSide}>
                <AnimatedImage
                    containerStyle={{
                        backgroundColor: '#EDEEF0',
                        marginBottom: 10,
                        borderRadius: 10,
                        height: squareSide - 6,
                        width: squareSide - 6,
                    }}
                    style={{
                        resizeMode: 'cover',
                        height: squareSide - 6,
                        width: squareSide - 6,
                        borderRadius: 10,
                    }}
                    source={image}
                    loader={<ActivityIndicator />}
                    animationDuration={0}
                />
            </Card>
            <Text marginV-10 center text80 style={{width: squareSide - 10}}>
                {name}
            </Text>
            <Animatable.View
                transition="height"
                easing="ease-in-out-circ"
                style={[
                    styles.activeCategoryItemImage,
                    {width: squareSide, height: isActive ? squareSide + 40 : 0}, // eslint-disable-line react-native/no-inline-styles
                ]}
            />
        </TouchableOpacity>
    );
};

export default CategoryItemImage;
