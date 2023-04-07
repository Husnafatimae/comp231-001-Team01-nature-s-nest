import { View, ScrollView, Image, Text, Dimensions, StyleSheet, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AwesomeAlert from 'react-native-awesome-alerts';

import ProductCard from './productCard';

import data from '../../data';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


function ProductCardScroll({ navigate }) {

    const onChange = (nativeEvent) => {

    }
    const [showAlert, setShowAlert] = useState(false);

    const handelFavouriteButton = () => {
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false)
        }, 1000);
    }

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
        <View>
            <ScrollView
                onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                horizontal
                bounces={false}
            >
                {
                    data.map((item, index) => {
                        return (
                            <ProductCard data={item} navigation={navigate}></ProductCard>
                        )
                    })
                }
            </ScrollView>
            <AwesomeAlert
                show={showAlert}
                message="Product added to you cart!"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: SCREEN_HEIGHT * 0.30,
        width: SCREEN_WIDTH * 0.43,
        backgroundColor: 'white',
        elevation: 10,
        shadowColor: Theme.lightGreen,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: Theme.lightGreen,
        marginVertical: 10,
        marginLeft: 15,
        padding: 15,
    },
    imageContainer: {
        width: "100%",
        height: "75%",
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    textContainer: {
        position: 'absolute',
        left: 15,
        bottom: 10,
    },
    title: {
        fontSize: 13,
        fontFamily: 'SemiBold',
        lineHeight: 20,

        color: Theme.accentGreen
    },
    icon: {
        position: 'absolute',
        top: 10,
        left: '73%',
        zIndex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 5,
        elevation: 5,
        shadowColor: Theme.accentGreen,
    },
    details: {
        fontSize: 16,
        fontFamily: 'Light',
        color: Theme.primaryColor,
    },
});

export default ProductCardScroll;