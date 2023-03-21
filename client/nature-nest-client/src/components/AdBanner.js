import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, SafeAreaView } from 'react-native';
import Theme from '../Theme';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

// this is just a dummy data to test the banner
const images = [
    'https://images.pexels.com/photos/15993218/pexels-photo-15993218.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/15329526/pexels-photo-15329526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/15597164/pexels-photo-15597164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

]

const AdBanner = () => {


    const [activeImage, setImageActive] = useState(0);

    const onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != activeImage) {
                setImageActive(slide);
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.swipeContainer}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    bounces={false}
                    overScrollMode="never"
                    scrollEventThrottle={16}
                    decelerationRate='fast'

                >
                    {
                        images.map((e, index) =>
                            <Image key={e} resizeMode='cover' source={{ uri: e }} style={styles.wrap} />)
                    }
                </ScrollView>
                <View style={styles.dotWrap}>
                    {
                        images.map((e, index) =>
                            <Text style={activeImage === index ? styles.activeDot : styles.inactiveDot}>●</Text>
                        )
                    }
                </View>
            </View >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        marginTop: 20,
    }, swipeContainer: {
        width: SCREEN_WIDTH * 0.93,
        alignSelf: 'center',
        borderRadius: 15,
    },
    wrap: {
        width: SCREEN_WIDTH * 0.93,
        height: SCREEN_HEIGHT * 0.25,
        borderRadius: 15,
    },
    dotWrap: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        alignSelf: 'center'
    },
    activeDot: {
        margin: 3,
        color: Theme.secondaryColor,
    },
    inactiveDot: {
        margin: 3,
        color: Theme.lightGreen,
    }
});
export default AdBanner;