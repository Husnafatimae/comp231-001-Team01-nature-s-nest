import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, SafeAreaView } from 'react-native';
import Theme from '../Theme';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

// this is just a dummy data to test the banner
const images = [
    'https://images.pexels.com/photos/15329526/pexels-photo-15329526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/15597164/pexels-photo-15597164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/15756060/pexels-photo-15756060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]

const AdBanner = () => {


    const [activeImage, setImageActive] = useState(0);

    const onChange = (nativeEvent) => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                >
                    {
                        images.map((e, index) =>
                            <Image key={e} resizeMode='stretch' source={{ uri: e }} style={styles.wrap} />)
                    }
                </ScrollView>
                <View styles={styles.dotWrap}>
                    <Text>This is a test</Text>
                </View>
            </View >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    wrap: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.25,

    },
    dotWrap: {
        position: 'absolute',
    },
    activeDot: {
        flex: 1,
        margin: 3,
        color: Theme.primaryColor,
    },
    inactiveDot: {
        margin: 3,
        color: Theme.lightGreen,
    }
});
export default AdBanner;