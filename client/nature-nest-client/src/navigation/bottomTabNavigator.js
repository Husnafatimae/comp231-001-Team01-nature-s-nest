import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/homeScreen';
import CartScreen from '../screens/cartScreen';
import Theme from '../Theme';

import TabBar from '../components/tabBar';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: Theme.accentGreen,
                tabBarStyle: styles.tabBarStyle,
                tabBarActiveTintColor: Theme.primaryColor,
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }
                    return <Icon name={iconName} size={22} color={color} />;
                },
            })}>
            <Tab.Screen options={{unmountOnBlur: true}} name="Home" component={HomeScreen} />
            <Tab.Screen options={{unmountOnBlur: true}} name="Cart" component={CartScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: 75,
        elevation: 2
    },
});

export default BottomTabNavigator;
