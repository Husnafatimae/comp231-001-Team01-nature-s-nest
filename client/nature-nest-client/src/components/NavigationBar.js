import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Theme from '../Theme';
import { useState } from 'react';
import { useFonts } from 'expo-font';

const NavigationBar = () => {


    const [selected, setSelected] = useState('Home');

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
                <Pressable onPress={() => handelMenuPress("Home")} style={selected == 'Home' ? styles.activeIcon : styles.inactiveIcon} android_ripple={{ borderless: true, radius: 50, color: Theme.secondaryColor }}>
                    <Feather name="home" size={24} color={selected == 'Home' ? Theme.primaryColor : Theme.accentGreen} />
                    <Text style={selected == 'Home' ? styles.nameActive : styles.nameInactive}>Home</Text>
                </Pressable>
                <Pressable onPress={() => handelMenuPress("Favourite")} style={selected == 'Favourite' ? styles.activeIcon : styles.inactiveIcon} android_ripple={{ borderless: true, radius: 50, color: Theme.secondaryColor }}>
                    <Feather name="heart" size={24} color={selected == 'Favourite' ? Theme.primaryColor : Theme.accentGreen} />
                    <Text style={selected == 'Favourite' ? styles.nameActive : styles.nameInactive}>Favourites</Text>
                </Pressable>
                <Pressable onPress={() => handelMenuPress("Cart")} style={selected == 'Cart' ? styles.activeIcon : styles.inactiveIcon} android_ripple={{ borderless: true, radius: 50, color: Theme.secondaryColor }}>
                    <Feather name="shopping-cart" size={24} color={selected == 'Cart' ? Theme.primaryColor : Theme.accentGreen} />
                    <Text style={selected == 'Cart' ? styles.nameActive : styles.nameInactive}>Cart</Text>
                </Pressable>
                <Pressable onPress={() => handelMenuPress("Profile")} style={selected == 'Profile' ? styles.activeIcon : styles.inactiveIcon} android_ripple={{ borderless: true, radius: 50, color: Theme.secondaryColor }}>
                    <Feather name="user" size={24} color={selected == 'Profile' ? Theme.primaryColor : Theme.accentGreen} />
                    <Text style={selected == 'Profile' ? styles.nameActive : styles.nameInactive}>Profile</Text>
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
    inactiveIcon: {
        padding: 13,
        alignItems: 'center',
        paddingHorizontal: 0,

    },
    activeIcon: {
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
        marginTop: 3,
        color: Theme.accentGreen,
    }

});

export default NavigationBar;
