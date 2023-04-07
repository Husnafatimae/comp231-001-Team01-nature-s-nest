import { View, ScrollView, Image, Text, Dimensions, StyleSheet, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AwesomeAlert from 'react-native-awesome-alerts';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;




function ProductCard({ data, navigation }) {

    const onChange = (nativeEvent) => {

    }
    const [showAlert, setShowAlert] = useState(false);

    const handelFavouriteButton = async (product) => {
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false)
        }, 1000);

        try {

            product.unit = 1;
            const existingData = await AsyncStorage.getItem('cart')
            if(existingData !== null) {
                const existingArray = JSON.parse(existingData)

                let unitUpdateItem = null;
                const newData = [];
                existingArray.forEach(element => {
                    if(element.name === product.name) {
                        console.log('Names', element.name, product.name)
                        unitUpdateItem = element
                        element.unit += product.unit;
                         newData.push(unitUpdateItem);
                    } else {
                    newData.push(element); }
                });
                console.log('check', unitUpdateItem);
                if(unitUpdateItem === null) {
                    existingArray.push(product)
                    console.log('DATA', newData);
                    console.log('Unit not changed')
                    const jsonValue = JSON.stringify(existingArray)
                      await AsyncStorage.setItem('cart', jsonValue);

                } else if (unitUpdateItem !== null) {
                    const jsonValue = JSON.stringify(newData)
               await AsyncStorage.setItem('cart', jsonValue);

                }
              
            } else {
                const jsonValue = JSON.stringify([product])

                await AsyncStorage.setItem('cart', jsonValue);
            }

            console.log(JSON.parse(await AsyncStorage.getItem('cart')))


        } catch (e) {
            console.log(e);
        }
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
        <Pressable onPress={() => navigation.navigate('Detail', data)}>

            <View style={styles.card}>
                <Pressable onPress={() => { handelFavouriteButton(data) }} style={{ zIndex: 1 }} ><Feather name="heart" size={18} color={Theme.accentGreen} style={styles.icon} /></Pressable>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} key={data.url} resizeMode='cover' source={{ uri: data.url }} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={(styles.title)}>{data.name.slice(0, 16) + "..."}</Text>
                    <Text style={styles.details}>{data.price}</Text>
                </View>
                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    message="Product added to cart Sucessfully"
                />
            </View >
        </Pressable>
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

export default ProductCard;