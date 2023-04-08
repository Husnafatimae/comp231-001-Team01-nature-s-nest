import { Text, View, Pressable, StyleSheet } from 'react-native';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';
import MenuCard from '../components/menuCard';
import { Linking } from 'react-native';


function LoginScreen({ navigation}) {
    return (

        <View style={styles.container}>
            <Text style={styles.logo}>NatureNest</Text>
            <Text style={styles.subHeading}>Login as admin</Text>
            <SearchBar icon='user' placeholder='Enter user name'></SearchBar>
            <SearchBar icon='key' placeholder='Password'></SearchBar>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={()=> { navigation.goBack(null)}}>
                    <Text style={styles.text}>Login</Text>
                </Pressable>
            </View>
            <Pressable style={styles.buttonSecondary} onPress={()=> { navigation.navigate('Home')}}>
                    <Text style={styles.textSecondary}>Continue shopping</Text>
            </Pressable>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10
    },
    logo: {
        fontSize: 40,
        fontFamily: 'SemiBold',
        color: Theme.primaryColor,
        marginTop: 200,
        alignSelf:'center',
    },

    subHeading: {
        fontFamily: 'Regular',
        fontSize: 20,
        color: Theme.accentGreen,
        alignSelf: 'center',
        marginBottom:10
        
    },
    button: {
        width: '94%',
        marginTop: 35,
        marginHorizontal: 15,
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
    textSecondary: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: Theme.primaryColor,
    },
    
    buttonSecondary: {
        width: '94%',
        marginTop: 15,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 15,
        borderWidth: 1.8,
        borderColor: Theme.primaryColor
    },
});

export default LoginScreen;