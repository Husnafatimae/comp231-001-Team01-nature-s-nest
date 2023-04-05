import { Text, View, Image, ScrollView, Pressable, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppBar from '../components/AppBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useEffect, useState } from 'react';


function CartScreen({ navigation }) {
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
            <Text style={styles.title}>Your Cart</Text>
            <ScrollView style={styles.scroll}>

                {isLoading ? (<Text>Loading</Text>) : (data.map((e, index) => (
                    <View key={index} style={styles.card} >
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: e.url }} />
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>{e.name}</Text>
                            <Text style={styles.price}>{e.price}</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity
                                onPress={() => load()}
                            >
                                <View style={styles.removeContainer}>
                                    <Feather name="trash-2" size={24} color={'red'} />
                                </View>
                            </TouchableOpacity>
                            <NumericInput
                                value={e.unit}
                                onChange={value => console.log(value)}
                                rounded={true}
                                totalWidth={90}
                                type='up-down'
                                upDownButtonsBackgroundColor={Theme.accentGreen}
                                borderColor={Theme.secondaryColor}
                                iconStyle={{ color: Theme.primaryColor }}
                                totalHeight={35}
                                minValue={1}
                                inputStyle={{ fontSize: 18, fontFamily: 'Regular' }}
                            />
                        </View>
                    </View>
                )
                ))
                }
            </ScrollView >
            <View><Text></Text></View>
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
    scroll: {
        width: '100%',
        height: 300,
    },
    card: {
        height: 100,
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 15,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5,
        shadowColor: Theme.primaryColor,
    },
    iconContainer: {
        alignItems: 'center'
    },

    removeContainer: {
        paddingHorizontal: 32,
        paddingVertical: 5,
        marginBottom: 4,
        borderRadius: 5,
        borderColor: 'red',
        borderWidth: 1,
    },

    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    image: {
        height: 60,
        height: 60,
        borderRadius: 10,
    },
    name: {
        fontSize: 15,
        fontFamily: 'Regular',
        marginHorizontal: 10,
        color: Theme.primaryColor,
        flexWrap: 'wrap',

    },
    nameContainer: {
        width: '50%'

    },
    price: {
        fontSize: 20,
        fontFamily: 'Light',
        marginHorizontal: 10,
        color: Theme.accentGreen,
    }
});

export default CartScreen;