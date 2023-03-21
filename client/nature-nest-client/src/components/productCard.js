import { View, ScrollView, Image, Text, Dimensions, StyleSheet, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AwesomeAlert from 'react-native-awesome-alerts';



const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


const data = ['Latest Sunflower Plant', 'Plant', 'Seed'];

const images = [
    'https://images.pexels.com/photos/15993218/pexels-photo-15993218.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/15329526/pexels-photo-15329526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/15597164/pexels-photo-15597164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

]

function ProductCard() {

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
                            <View style={styles.card}>
                                <Pressable onPress={() => { handelFavouriteButton() }} style={{ zIndex: 1 }} ><Feather name="heart" size={18} color={Theme.accentGreen} style={styles.icon} /></Pressable>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image} key={index} resizeMode='cover' source={{ uri: images[index] }} />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={(styles.title)}>{item.slice(0, 19) + "..."}</Text>
                                    <Text style={styles.details}>$25.0</Text>
                                </View>
                            </View>
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
        fontSize: 14,
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