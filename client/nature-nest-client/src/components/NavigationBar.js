import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Theme from '../Theme';
import { useState } from 'react';
import { useFonts } from 'expo-font';

const NavigationBar = () => {


    const [selected, setSelected] = useState('Home Page');

    const handelMenuPress = (menu) => {
        setSelected(menu);
        console.log(selected);
    }

    //loads the fonts before rendering the UI elements
    const [loaded] = useFonts({
        'Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.navContainer}>
            <Text>{selected}</Text>
            <View style={styles.navBar}>
                <Pressable onPress={() => handelMenuPress("Home")} style={styles.icon} android_ripple={{ borderless: true, radius: 50, color: Theme.secondaryColor }}>
                    <Feather name="home" size={24} color={Theme.accentGreen} />
                    <Text style={styles.nameInactive}>Home</Text>
                </Pressable>
                <Pressable onPress={() => handelMenuPress("Favourite")} style={styles.activeItem} android_ripple={{ borderless: true, radius: 50, color: Theme.secondaryColor }}>
                    <Feather name="heart" size={24} color={Theme.primaryColor} />
                    <Text style={styles.nameActive}>Favourites</Text>
                </Pressable>
                <Pressable onPress={() => handelMenuPress("Cart")} style={styles.icon} android_ripple={{ borderless: true, radius: 50, color: Theme.secondaryColor }}>
                    <Feather name="shopping-cart" size={24} color={Theme.accentGreen} />
                    <Text style={styles.nameInactive}>Cart</Text>
                </Pressable>
                <Pressable onPress={() => handelMenuPress("Profile")} style={styles.icon} android_ripple={{ borderless: true, radius: 50, color: Theme.secondaryColor }}>
                    <Feather name="user" size={24} color={Theme.accentGreen} />
                    <Text style={styles.nameInactive}>Profile</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navContainer: {
        position: 'absolute',
        bottom: 0,
    },
    navBar: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#F0F5EF',
    },
    icon: {
        padding: 13,
        alignItems: 'center',
        paddingHorizontal: 0,

    },
    activeItem: {
        padding: 13,
        alignItems: 'center',
        borderTopWidth: 5,
        borderColor: Theme.primaryColor,
        paddingHorizontal: 0,
        borderRadius: 5,
        color: 'red',
    },
    nameActive: {
        fontFamily: 'Regular',
        marginTop: 3,
    },
    nameInactive: {
        fontFamily: 'Regular',
        color: Theme.accentGreen,
    }

});

export default NavigationBar;
