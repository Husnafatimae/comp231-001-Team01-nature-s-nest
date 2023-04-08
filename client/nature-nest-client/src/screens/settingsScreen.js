import { Text, View, Pressable, StyleSheet } from 'react-native';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import AppBar from '../components/AppBar';

import MenuCard from '../components/menuCard';
import { Linking } from 'react-native';


function SettingsScreen({ navigation, screenProps }) {
    return (

        <View style={styles.container}>
            <AppBar navigator={navigation}></AppBar>
            <Text style={styles.title}>Settings</Text>
            <MenuCard menuTitle={'Profile Options'} menuIcon={'user'} onPress={()=>console.log('Clicked')}></MenuCard>
            <MenuCard menuTitle={'Payment Info'} menuIcon={'credit-card'} onPress={()=>console.log('Clicked')}></MenuCard>
            <MenuCard menuTitle={'Switch to Adminstrator'} menuIcon={'toggle-left'} onPress={()=>console.log('Clicked')}></MenuCard>
            <MenuCard menuTitle={'Contact Us'} menuIcon={'mail'} onPress={()=> Linking.openURL('mailto:support@natureNest.com?subject=Customer Support') }></MenuCard>
            <MenuCard menuTitle={'About NatureNest'} menuIcon={'info'} onPress={()=>console.log('Clicked')}></MenuCard>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={()=> { navigation.goBack(null)}}>
                    <Text style={styles.text}>Back to Home</Text>
                </Pressable>
            </View>
        </View>)
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
        marginBottom: 10
    },
    butotnContainer : {
        position: 'absolute',
        bottom: 10,
    },
    button: {
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
});

export default SettingsScreen;