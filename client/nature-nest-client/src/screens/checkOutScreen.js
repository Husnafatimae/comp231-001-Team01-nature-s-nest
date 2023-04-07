import { Text, View, Image, ScrollView, Pressable, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import AppBar from '../components/AppBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useEffect, useState } from 'react';


function CheckOutScreen({ route, navigation }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getData = async () => {
        try {
            var current = await AsyncStorage.getItem('cart');
            setData(JSON.parse(current));
        } catch (error) {
            console.log(error, 'error')
        }
    }
    
    useEffect(() => {
        getData();
    setIsLoading(false);
    },[])

    return (
        <View style={styles.container}>
            <AppBar></AppBar>
            <Text style={styles.title}>Order</Text>
            <View style={styles.card}>
                <View style={styles.cardSection}>
                    <Text style={styles.cardTextHead} >Subtotal</Text>
                    <Text style={styles.cardTextDetail}>$49.72</Text>
                </View>
                <View style={styles.cardSection}>
                    <Text style={styles.cardTextHead} >Tax</Text>
                    <Text style={styles.cardTextDetail}>$2.5</Text>
                </View>
                <View style={styles.cardSection}>
                    <Text style={styles.cardTextHead} >Delivery</Text>
                    <Text style={styles.cardTextDetail}>Free</Text>
                </View>
                <View style={styles.cardSectionTotal}>
                    <Text style={styles.cardTextHeadTotal} >Total</Text>
                    <Text style={styles.cardTextDetailTotal}>$52.52</Text>
                </View>
            </View>
            <View style={styles.button}>
                <Pressable>
                    <Text style={styles.text}>Checkout</Text>
                </Pressable>
            </View>
        </View >)

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 45,
        marginLeft: 15,
        fontFamily: 'Light',
        color: Theme.primaryColor,
    },
    button: {
        position: 'absolute',
        bottom: 10,
        width: '94%',
        marginHorizontal: 12,
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
    card: {
        backgroundColor: Theme.lightGreen,
        marginHorizontal: 12,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,

    },
    cardSection : {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardTextHead: {
        color: Theme.primaryColor,
        fontFamily: 'SemiBold',
        fontSize: 16,
    },
    cardTextDetail : {
        color: Theme.accentGreen,
        fontFamily: 'Regular',
        fontSize: 16,
    },

    cardSectionTotal : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: Theme.accentGreen,
        marginTop: 15,
    },
    cardTextHeadTotal : {
        color: Theme.primaryColor,
        fontFamily: 'SemiBold',
        fontSize: 20,
        marginTop: 5,
    },
    cardTextDetailTotal : {
        color: Theme.accentGreen,
        fontFamily: 'Regular',
        fontSize: 20,
        marginTop: 5,
    },

});

export default CheckOutScreen;