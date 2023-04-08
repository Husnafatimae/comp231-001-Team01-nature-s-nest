import { Text, View, Image, ScrollView, Pressable, StyleSheet } from 'react-native';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DetailScreen({ route, navigation }) {

    const data = route.params

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

    return (

        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} key={data.url} resizeMode='cover' source={{ uri: data.url }} />
            </View>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.priceText}>${data.price}</Text>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.description}>
                    {data.detail}
                </Text>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => handelFavouriteButton(data)}>
                    <Text style={styles.text}>Add To Cart</Text>
                </Pressable>
            </View>
            <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    message="Product added to cart Sucessfully"
            />
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        height: Theme.SCREEN_HEIGHT * 0.40,
        width: '100%',
        backgroundColor: Theme.secondaryColor,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    scrollView: {
        marginBottom: 82,
    },
    title: {
        fontSize: Theme.SCREEN_HEIGHT * 0.030,
        fontFamily: 'Bold',
        marginHorizontal: 15,
        marginTop: 12
    },

    description: {
        fontFamily: 'Regular',
        fontSize: 15,
        marginHorizontal: 15,
        marginTop: 12
    },
    priceText: {
        marginHorizontal: 15,
        marginTop: 12,
        fontFamily: 'Light',
        fontSize: Theme.SCREEN_HEIGHT * 0.030,
        color: Theme.accentGreen,
    },
    buttonContainer: {
        marginVertical: 12,
        position: 'absolute',
        width: '90%',
        alignSelf: 'center',
        bottom: 0,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 15,
        elevation: 1,
        backgroundColor: Theme.primaryColor,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default DetailScreen;