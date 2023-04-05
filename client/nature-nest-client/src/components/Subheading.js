import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

function Subheading() {

    //loads the fonts before rendering the UI elements
    const [loaded] = useFonts({
        'Light': require('../../assets/fonts/Poppins-ExtraLight.ttf'),
        'SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>New Arrivals!</Text>
            <Pressable onPress={() => { console.log('see more pressed') }}><Text style={styles.textButton}>SEE MORE</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 18,
    },
    text: {
        fontSize: 30,
        fontFamily: 'Regular',
        color: Theme.primaryColor,
        letterSpacing: 1,
    },
    textButton: {
        fontSize: 13,
        color: Theme.lightGreen,
        fontFamily: 'SemiBold',
        letterSpacing: 1,
    }
});

export default Subheading;