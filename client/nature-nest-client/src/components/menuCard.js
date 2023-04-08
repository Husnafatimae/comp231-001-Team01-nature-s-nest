import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Theme from '../Theme';


const MenuCard = ({menuTitle, menuIcon, onPress}) => {
    return (
        <Pressable onPress={()=> onPress()}>
            <View style={styles.optionCard}>
                <View style={styles.optionCardIcon}>
                <Feather name={menuIcon} size={25} color={Theme.accentGreen} />
                <Text style={styles.optionCardText}>{menuTitle}</Text>
                </View>
                <View style={styles.optionCardArrow}>
                <Feather name="arrow-right" size={25} color={Theme.accentGreen} />
                </View>
            </View>
            </Pressable>
    );
}

const styles = StyleSheet.create({
    optionCard: {
        height: 65,
        backgroundColor: Theme.lightGreen,
        marginHorizontal: 12,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginBottom: 15,

    },
    optionCardIcon: {
        flexDirection: 'row',
    },
    optionCardText: {
        color: Theme.primaryColor,
        fontFamily: 'SemiBold',
        fontSize: 15,
        marginLeft: 20,
    }
});

export default MenuCard;