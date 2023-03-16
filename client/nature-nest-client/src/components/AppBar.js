import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Theme from '../Theme';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

function AppBar() {

    //loads the fonts before rendering the UI elements
    const [loaded] = useFonts({
        'Bold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    });

    if (!loaded) {
        return null;
    }



    return (<View style={styles.appBarContainer}>
        <Text style={styles.title}>NatureNest</Text>
        <TouchableOpacity >
            <View style={styles.menu}>
                <Feather name="menu" size={20} color={Theme.primaryColor} />
            </View>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Bold',
        fontSize: 20,
        color: Theme.primaryColor
    },
    appBarContainer: {
        marginTop: 45,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menu: {
        backgroundColor: Theme.lightGreen,
        padding: 12,
        borderRadius: 50,
    }
});

export default AppBar;