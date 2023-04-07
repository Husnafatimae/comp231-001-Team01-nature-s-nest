import { StyleSheet, View } from 'react-native';
import React from 'react';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

import Theme from '../Theme';

const TabBar = props => {
    return (
        <View>
            <View style={styles.tabBar} />
            <BottomTabBar {...props} />
        </View>
    );
};

export default TabBar;

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        right: 10,
        left: 10,
        bottom: 38,
        height: 20,
        backgroundColor: 'white',
        borderRadius: 25,
        shadowColor: Theme.primaryColor,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 3,
    },
});
