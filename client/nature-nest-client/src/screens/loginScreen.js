import { Text, View, Pressable, StyleSheet } from 'react-native';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';
import MenuCard from '../components/menuCard';
import { Linking } from 'react-native';

import {firebase} from '../../firebase'

import {useState, useEffect} from 'react'

function LoginScreen({ navigation}) {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);


    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user=> {
            if(user) {
                navigation.navigate('Dashboard')
            }
        })
    },
    [])

    const handelLogin = async (email, password) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(userCreds => {
                const user = userCreds.user;
                navigation.navigate('Dashboard')

            })

        } catch (error) {
            setShowMessage(true);
            setMessage('Enter vaild email and password')
            console.log(error.message);
         }
    }
    

    return (

        <View style={styles.container}>
            <Text style={styles.logo}>NatureNest</Text>
            <Text style={styles.subHeading}>Login as admin</Text>
            <View style={showMessage? styles.messageBox : null}><Text style={styles.messageText}>{message}</Text></View>
            <SearchBar icon='user' placeholder='Enter user name' onSearch={(value) => setEmail(value)}></SearchBar>
            <SearchBar icon='key' placeholder='Password' onSearch={(value) => setPassword(value)}></SearchBar>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={()=> { handelLogin(email,password)}}>
                    <Text style={styles.text}>Login</Text>
                </Pressable>
            </View>
            <Pressable style={styles.buttonSecondary} onPress={()=> { navigation.navigate('HomePage')}}>
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
    messageBox: {
        backgroundColor: '#ffadad',
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 30,
        marginHorizontal: 12,
        borderWidth: 2,
        borderColor: '#ea8677',
    },
    messageText: {
        fontFamily: 'Regular', 
        color: '#bc1c03'
    }
});

export default LoginScreen;